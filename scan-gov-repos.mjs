#!/usr/bin/env node
/**
 * Scan UK government GitHub repos for components they've built themselves.
 *
 * The repo list comes from the xgov-opensource-repo-scraper, which scrapes
 * repos from UK government organisations daily. Archived repos are ignored.
 * The design-system-github-stats dependents list is used to mark repos the
 * audit already scans and to detect prototypes.
 */
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { parseArgs } from 'node:util'

import { createClient } from './lib/github.mjs'
import { REPO_SCRAPER, parseScrapedRepos } from './lib/govlist.mjs'
import { buildSynonymIndex } from './lib/names.mjs'
import { dropBoilerplate, scanServiceTree } from './lib/services.mjs'
import { findClassUsage } from './lib/classusage.mjs'
import { serviceScan } from './scoring.mjs'
import { serviceRepoExclude, sources } from './sources.mjs'
import { synonyms } from './synonyms.mjs'

const { values: args } = parseArgs({
  options: {
    since: { type: 'string', default: '2019-01-01' },
    'enumerate-only': { type: 'boolean', default: false },
    'class-usage': { type: 'boolean', default: false },
    'only-orgs': { type: 'string' },
    out: { type: 'string', default: 'output' },
    clusters: { type: 'string' },
    refresh: { type: 'boolean', default: false },
    'max-age': { type: 'string', default: String(24 * 30) },
    help: { type: 'boolean', short: 'h', default: false }
  }
})

if (args.help) {
  console.log(`Usage: node scan-gov-repos.mjs [options]

Scans UK government GitHub repos for self-built components.

  --since=DATE         Only scan repos pushed to since this date (default: 2019-01-01)
  --enumerate-only     List repos without scanning them
  --class-usage        Also count which repos use each community component's
                       CSS classes (needs --clusters; writes class-usage.json,
                       which audit.mjs uses as its adoption signal)
  --only-orgs=A,B      Only these orgs or owners
  --clusters=FILE      clusters.json from a previous audit, used to label hits
                       (default: output/clusters.json if it exists)
  --out=DIR            Output directory (default: output)
  --refresh            Ignore cached API responses
  --max-age=HOURS      Cache lifetime in hours for API responses (default: 720, 30 days)

Output: gov-repos-hits.json (mergeable into audit.mjs), gov-repos.md, gov-repos.csv
`)
  process.exit(0)
}

const outDir = resolve(args.out)
const github = createClient({
  cacheDir: resolve(import.meta.dirname, '.cache'),
  refresh: args.refresh,
  maxAgeHours: Number(args['max-age'])
})

// 1. Build the repo list
console.log('Building the repo list…')

const scraped = parseScrapedRepos(
  JSON.parse(await github.page(REPO_SCRAPER)),
  { since: args.since }
)
console.log(`  repo scraper: ${scraped.length} non-archived repos pushed to since ${args.since}`)

// The dependents data marks repos the audit already scans and knows which
// are Prototype Kit instances
const dependents = JSON.parse(await github.page(serviceScan.dataUrl))
const dependentsByName = new Map(
  dependents.map((r) => [`${r.repoOwner}/${r.repoName}`.toLowerCase(), r])
)

const onlyOrgs = args['only-orgs']?.split(',').map((o) => o.trim().toLowerCase())
const skipped = new Set(serviceRepoExclude.map((repo) => repo.toLowerCase()))

const allRepos = scraped
  .filter(
    (r) =>
      !skipped.has(r.repo.toLowerCase()) &&
      (!onlyOrgs || onlyOrgs.includes(r.owner.toLowerCase()))
  )
  .map((r) => {
    const dependent = dependentsByName.get(r.repo.toLowerCase())
    return {
      ...r,
      isPrototype: dependent ? Boolean(dependent.isPrototype) : r.isPrototype,
      alreadyScanned: Boolean(dependent?.builtByGovernment)
    }
  })

console.log(
  `  ${allRepos.length} repos from ${new Set(allRepos.map((r) => r.owner)).size} owners` +
    ` (${allRepos.filter((r) => r.alreadyScanned).length} also in the dependents list)`
)

if (args['enumerate-only']) {
  await mkdir(outDir, { recursive: true })
  await writeFile(
    join(outDir, 'gov-repos.txt'),
    allRepos.map((r) => r.repo).sort().join('\n') + '\n'
  )
  console.log(`\nWritten to ${join(outDir, 'gov-repos.txt')}`)
  process.exit(0)
}

// 2. Scan trees
console.log('Scanning trees…')
const stats = { scanned: 0, failed: 0, withComponents: 0 }
/** @type {import('./lib/services.mjs').ServiceHit[]} */
const rawHits = []

await forEach(allRepos, serviceScan.concurrency, async (target) => {
  try {
    const { files } = await github.files(target.repo)
    const hits = scanServiceTree(files)
    if (hits.length) stats.withComponents++
    for (const hit of hits) {
      rawHits.push({
        ...hit,
        repo: target.repo,
        owner: target.owner,
        isPrototype: target.isPrototype,
        url: `https://github.com/${target.repo}/blob/HEAD/${hit.path}`
      })
    }
    stats.scanned++
  } catch {
    stats.failed++
  }

  const done = stats.scanned + stats.failed
  if (done % 200 === 0) console.log(`  ${done}/${allRepos.length}`)
})

const { kept: hits, boilerplate } = dropBoilerplate(
  rawHits,
  serviceScan.boilerplateMinRepos
)
console.log(
  `  ${stats.scanned} scanned (${stats.failed} unavailable), ${stats.withComponents} with components, ${hits.length} component implementations (${boilerplate} boilerplate copies dropped)`
)

// 3. Label hits with clusters from the last audit, if available
const clustersPath =
  args.clusters ??
  (existsSync(join(outDir, 'clusters.json'))
    ? join(outDir, 'clusters.json')
    : undefined)

/** @type {Map<string, object>} */
let knownClusters = new Map()
if (clustersPath) {
  const { clusters } = JSON.parse(await readFile(clustersPath, 'utf8'))
  knownClusters = new Map(clusters.map((c) => [c.key, c]))
}

const synonymIndex = buildSynonymIndex(synonyms)
for (const hit of hits) {
  const key = synonymIndex.resolve(hit.raw)
  const cluster = knownClusters.get(key)
  hit.clusterKey = key
  hit.clusterName = cluster?.name ?? null
  hit.clusterStatus = cluster?.status ?? null
}

// 4. Report
const byKey = new Map()
for (const hit of hits) {
  const group = byKey.get(hit.clusterKey) ?? { key: hit.clusterKey, hits: [] }
  group.hits.push(hit)
  byKey.set(hit.clusterKey, group)
}

const groups = [...byKey.values()]
  .map((group) => ({
    ...group,
    name: group.hits[0].clusterName ?? group.hits[0].name,
    status: group.hits[0].clusterStatus ?? null,
    repos: new Set(group.hits.map((h) => h.repo)),
    prototypes: new Set(group.hits.filter((h) => h.isPrototype).map((h) => h.repo))
  }))
  .sort((a, b) => b.repos.size - a.repos.size)

const unknown = groups.filter(
  (g) => !g.hits[0].clusterName && g.repos.size >= serviceScan.minRepos
)

const repoCounts = allRepos
  .map((r) => ({
    ...r,
    components: hits.filter((h) => h.repo === r.repo).length
  }))
  .filter((r) => r.components > 0)
  .sort((a, b) => b.components - a.components)

await mkdir(outDir, { recursive: true })
await writeFile(join(outDir, 'gov-repos-hits.json'), JSON.stringify(hits, null, 1))
await writeFile(
  join(outDir, 'gov-repos.csv'),
  'repo,prototype,name,path,technique,cluster,cluster_status,url\n' +
    hits
      .map((h) =>
        [
          h.repo,
          h.isPrototype,
          h.name,
          h.path,
          h.technique,
          h.clusterName ?? '',
          h.clusterStatus ?? '',
          h.url
        ]
          .map((v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : v))
          .join(',')
      )
      .join('\n') +
    '\n'
)
await writeFile(join(outDir, 'gov-repos.md'), renderReport())

// Optionally count which repos use each community component's CSS classes
if (args['class-usage']) {
  if (!knownClusters.size) {
    console.warn('  --class-usage needs --clusters (or output/clusters.json); skipped')
  } else {
    console.log('Counting class usage in government repos…')

    // Class names for components GOV.UK Frontend doesn't cover, with the
    // npm packages that mark a repo as a user of that design system
    const classNames = []
    const prefixes = new Set()
    for (const cluster of knownClusters.values()) {
      for (const member of cluster.members ?? []) {
        if (member.ours || !member.prefix || member.kind !== 'component') continue
        if (!['gap', 'partial'].includes(cluster.status)) continue
        classNames.push(`${member.prefix}${member.name}`)
        prefixes.add(member.prefix)
      }
    }
    const packageNames = sources.flatMap((s) => s.packages ?? [])

    const usage = await findClassUsage({
      classNames: [...new Set(classNames)],
      prefixes: [...prefixes],
      packageNames,
      repos: allRepos,
      github,
      // Gentler than the tree scan: thousands of small blob fetches in a row
      // trip the proxy into connect timeouts
      concurrency: 3,
      onProgress: (done, total) => console.log(`  ${done}/${total}`)
    })

    await writeFile(
      join(outDir, 'class-usage.json'),
      JSON.stringify(usage, null, 1)
    )
    console.log(`  ${Object.keys(usage).length} classes found in use`)
  }
}

console.log(`\nWritten to ${outDir}/{gov-repos.md,gov-repos.csv,gov-repos-hits.json}\n`)
console.log('Top components by repo count:')
for (const g of groups.slice(0, 15)) {
  const label = g.status ? ` [${g.status}]` : g.hits[0].clusterName ? '' : ' [new]'
  console.log(`  ${String(g.repos.size).padStart(4)} repos  ${g.name}${label}`)
}

function renderReport() {
  const lines = []
  const push = (...l) => lines.push(...l)
  const link = (h) => `[${h.repo}](${h.url})${h.isPrototype ? ' (prototype)' : ''}`

  push(
    '# UK government repo component scan',
    '',
    `Generated ${new Date().toISOString()}.`,
    '',
    `- ${allRepos.length} repos from ${new Set(allRepos.map((r) => r.owner)).size} owners in the xgov-opensource-repo-scraper data (archived repos ignored)`,
    `- ${stats.scanned} repos scanned (pushed to since ${args.since}), ${stats.failed} unavailable`,
    `- ${stats.withComponents} repos have their own components, ${hits.length} implementations found`,
    '',
    '## Not matched to any design system or the last audit',
    '',
    `Components in at least ${serviceScan.minRepos} repos with no known cluster. Names can be ambiguous, check the examples.`,
    '',
    '| Component | Repos | Prototypes | Examples |',
    '|---|---|---|---|',
    ...unknown.map(
      (g) =>
        `| **${g.name}** | ${g.repos.size} | ${g.prototypes.size} | ${[...g.repos]
          .slice(0, 3)
          .map((r) => link(g.hits.find((h) => h.repo === r)))
          .join('<br>')} |`
    ),
    '',
    '## Most-built components',
    '',
    '| Component | Repos | Prototypes | In the audit |',
    '|---|---|---|---|',
    ...groups.slice(0, 50).map(
      (g) =>
        `| ${g.name} | ${g.repos.size} | ${g.prototypes.size} | ${g.status ?? (g.hits[0].clusterName ? 'yes' : 'no')} |`
    ),
    '',
    '## Repos with the most of their own components',
    '',
    '| Repo | Components | Prototype |',
    '|---|---|---|',
    ...repoCounts
      .slice(0, 30)
      .map(
        (r) =>
          `| [${r.repo}](https://github.com/${r.repo}) | ${r.components} | ${r.isPrototype ? 'yes' : ''} |`
      ),
    ''
  )

  return lines.join('\n')
}

/**
 * @template T
 * @param {T[]} items
 * @param {number} concurrency
 * @param {(item: T) => Promise<void>} fn
 */
async function forEach(items, concurrency, fn) {
  let next = 0
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (next < items.length) await fn(items[next++])
    })
  )
}
