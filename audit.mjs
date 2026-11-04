#!/usr/bin/env node
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { parseArgs } from 'node:util'

import { buildClusters, matchItems } from './lib/cluster.mjs'
import { createClient } from './lib/github.mjs'
import { extractLinks, extractMembers, extractSiteMembers } from './lib/inventory.mjs'
import { buildSynonymIndex } from './lib/names.mjs'
import { buildsOnGovuk } from './lib/overrides.mjs'
import { toCsv, toMarkdown } from './lib/report.mjs'
import { annotateStructure } from './lib/structure.mjs'
import { scoreClusters, prevalenceWeight } from './lib/score.mjs'
import { dropBoilerplate, scanServiceTree } from './lib/services.mjs'
import {
  accessibilityTerms,
  excludeIssueLabels,
  excludeIssueTitles,
  freshness,
  gapValues,
  prototypeWeight,
  serviceScan,
  staleMonths,
  techniqueWeights,
  weights
} from './scoring.mjs'
import {
  OUR_ORG,
  globalExclude,
  serviceRepoExclude,
  sources
} from './sources.mjs'
import { related, synonyms, textMatchStoplist } from './synonyms.mjs'

const BACKLOG_REPO = 'alphagov/govuk-design-system'
const BACKLOG_CATEGORY = 'Community backlog'

const { values: args } = parseArgs({
  options: {
    adoption: { type: 'boolean', default: false },
    'adoption-scope': { type: 'string', default: 'all' },
    'skip-services': { type: 'boolean', default: false },
    'skip-overrides': { type: 'boolean', default: false },
    'services-extra': { type: 'string' },
    'services-data': { type: 'string' },
    'class-usage': { type: 'string' },
    quality: { type: 'string' },
    out: { type: 'string', default: 'output' },
    top: { type: 'string', default: '50' },
    refresh: { type: 'boolean', default: false },
    'max-age': { type: 'string', default: String(24 * 30) },
    only: { type: 'string' },
    help: { type: 'boolean', short: 'h', default: false }
  }
})

if (args.help) {
  console.log(`Usage: node audit.mjs [options]

  --adoption             Count GitHub code search hits for community class names
                         (about 6.5s per uncached query, cached for 7 days)
  --adoption-scope=gaps  Only search for clusters not in GOV.UK Frontend (default: all)
  --skip-services        Don't scan government service repos for their own components
  --services-data=URL    JSON list of repos to scan (default: design-system-github-stats)
  --services-extra=FILE  Extra service hits to merge in (default: gov-repos-hits.json
                         in the output directory, if it exists)
  --class-usage=FILE     Class usage counts from scan-gov-repos.mjs (default:
                         class-usage.json in the output directory, if it exists)
  --quality=FILE         axe results from quality-check.mjs (default: quality.json
                         in the output directory, if it exists)
  --skip-overrides       Don't classify whether covered-component implementations
                         extend GOV.UK Frontend
  --out=DIR              Output directory (default: output)
  --top=N                Rows in the report's candidates table (default: 50)
  --only=ID,ID           Only use these source ids (ours are always included)
  --refresh              Ignore cached API responses
  --max-age=HOURS        Cache lifetime in hours for API responses (default: 720, 30 days)
`)
  process.exit(0)
}

const outDir = resolve(args.out)
const github = createClient({
  cacheDir: resolve(import.meta.dirname, '.cache'),
  refresh: args.refresh,
  maxAgeHours: Number(args['max-age'])
})

const only = args.only?.split(',').map((id) => id.trim())
const selectedSources = sources
  .map((s) => ({ ...s, ours: Boolean(s.ours) || s.org === OUR_ORG }))
  .filter((s) => s.ours || !only || only.includes(s.id))

// 1. Inventory
console.log('Inventorying design systems…')
const members = []
const sourceSummaries = []

for (const source of selectedSources) {
  try {
    let found
    let meta = {}

    if (source.site) {
      const linksByPage = new Map()
      for (const page of new Set(source.rules.map((rule) => rule.page))) {
        const url = new URL(page, source.site).href
        linksByPage.set(page, extractLinks(await github.page(url), url))
      }
      found = extractSiteMembers(source, linksByPage, {
        globalExclude,
        ourOrg: OUR_ORG
      })
    } else {
      meta = await github.repo(source.repo)
      const ref = source.ref ?? meta.defaultBranch
      const paths = await github.tree(source.repo, ref)
      found = extractMembers(source, paths, {
        ref,
        globalExclude,
        ourOrg: OUR_ORG
      })
    }

    members.push(...found)
    sourceSummaries.push({
      ...source,
      pushedAt: meta.pushedAt,
      archived: meta.archived,
      components: found.filter((m) => m.kind === 'component').length,
      patterns: found.filter((m) => m.kind === 'pattern').length
    })

    console.log(`  ${source.id}: ${found.length}`)
  } catch (error) {
    console.warn(`  ${source.id}: skipped (${error.message})`)
  }
}

// npm downloads per source, used to weight prevalence
console.log('Fetching npm downloads…')
const downloadsByOrg = new Map()
for (const source of selectedSources) {
  if (!source.packages?.length) continue
  let downloads = 0
  for (const pkg of source.packages) {
    downloads += (await github.npmDownloads(pkg)) ?? 0
  }
  downloadsByOrg.set(
    source.org,
    (downloadsByOrg.get(source.org) ?? 0) + downloads
  )
  const summary = sourceSummaries.find((s) => s.id === source.id)
  if (summary) summary.npmDownloads = downloads
}
const maxDownloads = Math.max(0, ...downloadsByOrg.values())

// Most recent push per organisation, for staleness weighting
const pushedAtByOrg = new Map()
for (const summary of sourceSummaries) {
  if (!summary.pushedAt) continue
  const current = Date.parse(pushedAtByOrg.get(summary.org) ?? '') || 0
  const pushed = Date.parse(summary.pushedAt)
  if (pushed > current) pushedAtByOrg.set(summary.org, summary.pushedAt)
}

const prevalenceRaw = (cluster) =>
  cluster.orgs.reduce(
    (sum, org) =>
      sum +
      prevalenceWeight({
        orgPushedAt: pushedAtByOrg.get(org),
        downloads: downloadsByOrg.get(org),
        maxDownloads,
        staleMonths
      }),
    0
  )

// 2. Scan government services
let serviceHits = []
const serviceStats = { enabled: !args['skip-services'] }

if (serviceStats.enabled) {
  const dataUrl = args['services-data'] ?? serviceScan.dataUrl
  console.log('Scanning government service repos…')

  const skip = new Set(
    [
      ...serviceRepoExclude,
      ...selectedSources.filter((s) => s.repo).map((s) => s.repo)
    ].map((r) => r.toLowerCase())
  )

  const repos = JSON.parse(await github.page(dataUrl))
    .filter((r) => r.builtByGovernment)
    .map((r) => ({
      repo: `${r.repoOwner}/${r.repoName}`,
      owner: r.repoOwner,
      isPrototype: Boolean(r.isPrototype)
    }))
    .filter((r) => !skip.has(r.repo.toLowerCase()))

  Object.assign(serviceStats, {
    dataUrl,
    repos: repos.length,
    prototypes: repos.filter((r) => r.isPrototype).length,
    scanned: 0,
    failed: 0,
    truncated: 0,
    withComponents: 0
  })

  const rawHits = []
  let next = 0

  async function worker() {
    while (next < repos.length) {
      const target = repos[next++]
      try {
        const { files, truncated } = await github.files(target.repo)
        if (truncated) serviceStats.truncated++
        const hits = scanServiceTree(files)
        if (hits.length) serviceStats.withComponents++
        for (const hit of hits) {
          rawHits.push({
            ...hit,
            ...target,
            url: `https://github.com/${target.repo}/blob/HEAD/${hit.path}`
          })
        }
        serviceStats.scanned++
      } catch {
        // Deleted, private or empty repos
        serviceStats.failed++
      }

      const done = serviceStats.scanned + serviceStats.failed
      if (done % 100 === 0) console.log(`  ${done}/${repos.length}`)
    }
  }

  await Promise.all(Array.from({ length: serviceScan.concurrency }, worker))

  const { kept, boilerplate } = dropBoilerplate(
    rawHits,
    serviceScan.boilerplateMinRepos
  )
  serviceHits = kept
  serviceStats.boilerplate = boilerplate

  console.log(
    `  ${serviceStats.scanned} scanned (${serviceStats.failed} unavailable), ${serviceStats.withComponents} with components, ${kept.length} component implementations (${boilerplate} boilerplate copies dropped)`
  )
}

// Merge in hits from scan-gov-repos.mjs, if present
const extraHitsPath =
  args['services-extra'] ??
  (existsSync(join(outDir, 'gov-repos-hits.json'))
    ? join(outDir, 'gov-repos-hits.json')
    : undefined)

if (extraHitsPath) {
  const extraHits = JSON.parse(await readFile(extraHitsPath, 'utf8'))
  // One hit per repo per component; the audit's own scan wins
  const seen = new Set(serviceHits.map((h) => `${h.repo}:${h.name}`))
  const extra = extraHits.filter((h) => !seen.has(`${h.repo}:${h.name}`))
  serviceHits.push(...extra)
  serviceStats.extraHits = extra.length
  serviceStats.extraHitsPath = extraHitsPath
  console.log(`  plus ${extra.length} from ${extraHitsPath}`)
}

// 3. Cluster
const synonymIndex = buildSynonymIndex(synonyms)
const clusters = buildClusters(members, {
  synonymIndex,
  related,
  textMatchStoplist,
  serviceHits,
  minServiceRepos: serviceScan.minRepos,
  techniqueWeights
})
console.log(`${members.length} components and patterns in ${clusters.length} clusters`)

// 4. Signals
console.log(`Fetching "${BACKLOG_CATEGORY}" discussions…`)
const backlog = (await github.discussions(BACKLOG_REPO, BACKLOG_CATEGORY)).filter(
  (d) => !d.closed
)
const unmatchedBacklog = matchItems(backlog, clusters, (cluster, d, via) =>
  cluster.backlog.push({ ...d, via })
)
console.log(`  ${backlog.length} open, ${backlog.length - unmatchedBacklog.length} matched`)

const isAccessibility = (issue) =>
  accessibilityTerms.test(issue.title) ||
  issue.labels.some((label) => accessibilityTerms.test(label))

const excludedLabels = new Set(excludeIssueLabels.map((l) => l.toLowerCase()))
const isChore = (issue) =>
  issue.labels.some((label) => excludedLabels.has(label.toLowerCase())) ||
  excludeIssueTitles.some((pattern) => pattern.test(issue.title))

const labelKeys = (issue) =>
  issue.labels.map((label) => synonymIndex.resolve(label))

const issueRepos = [
  ...new Set(selectedSources.filter((s) => s.repo).map((s) => s.repo))
]
console.log('Fetching open issues…')

for (const repo of issueRepos) {
  const ours = selectedSources.some((s) => s.repo === repo && s.ours)

  let issues
  try {
    issues = (await github.openIssues(repo))
      .filter((issue) => !isChore(issue))
      .map((issue) => ({
        ...issue,
        repo,
        accessibility: isAccessibility(issue)
      }))
  } catch (error) {
    console.warn(`  ${repo}: skipped (${error.message})`)
    continue
  }

  // Our issues can be about anything, community issues only count against
  // the components that repo provides
  const candidates = ours
    ? clusters
    : clusters.filter((c) => c.members.some((m) => m.repo === repo))

  matchItems(
    issues,
    candidates,
    (cluster, issue, via) =>
      (ours ? cluster.ourIssues : cluster.communityIssues).push({ ...issue, via }),
    labelKeys
  )
  console.log(`  ${repo}: ${issues.length}`)
}

// Class usage in government repos (from scan-gov-repos.mjs --class-usage)
// is the adoption signal when present; global code search is the fallback
const classUsagePath =
  args['class-usage'] ??
  (existsSync(join(outDir, 'class-usage.json'))
    ? join(outDir, 'class-usage.json')
    : undefined)

let adoptionCollected = false

if (classUsagePath && existsSync(classUsagePath)) {
  const classUsage = JSON.parse(await readFile(classUsagePath, 'utf8'))
  let matched = 0
  for (const cluster of clusters) {
    cluster.adoptionHits = cluster.members
      .filter((m) => !m.ours && m.prefix && m.kind === 'component')
      .reduce((sum, m) => {
        const usage = classUsage[`${m.prefix}${m.name}`]
        if (usage) {
          m.adoptionHits = usage.repos
          matched++
        }
        return sum + (usage?.repos ?? 0)
      }, 0)
  }
  adoptionCollected = true
  console.log(`Adoption from government repo class usage (${matched} classes matched)`)
} else if (args.adoption) {
  const targets = clusters
    .filter((c) => args['adoption-scope'] !== 'gaps' || c.status !== 'covered')
    .flatMap((c) =>
      c.members
        .filter((m) => !m.ours && m.prefix && m.kind === 'component')
        .map((m) => ({ cluster: c, member: m }))
    )

  console.log(`Code searching ${targets.length} class names (cached results are instant)…`)

  for (const [i, { cluster, member }] of targets.entries()) {
    const query = `"${member.prefix}${member.name}"`
    try {
      member.adoptionHits = await github.codeSearchCount(query)
      cluster.adoptionHits += member.adoptionHits
    } catch (error) {
      console.warn(`  ${query}: ${error.message}`)
    }
    if ((i + 1) % 25 === 0) console.log(`  ${i + 1}/${targets.length}`)
  }
  adoptionCollected = true
}

// For clusters we cover, work out whether services' versions extend
// GOV.UK Frontend or re-implement it. Content fetches are cached.
if (!args['skip-overrides']) {
  const hits = clusters
    .filter((c) => c.status === 'covered')
    .flatMap((c) => c.services)
    .filter((hit) => hit.extendsGovuk == null && hit.sha)

  if (hits.length) {
    console.log(`Classifying ${hits.length} implementations of covered components…`)
    let done = 0
    await forEach(hits, serviceScan.concurrency, async (hit) => {
      try {
        hit.extendsGovuk = buildsOnGovuk(await github.blob(hit.repo, hit.sha))
      } catch {}
      if (++done % 200 === 0) console.log(`  ${done}/${hits.length}`)
    })
  }
}

// Quality results from quality-check.mjs, if present
const qualityStats = { enabled: false }
const qualityPath =
  args['quality'] ??
  (existsSync(join(outDir, 'quality.json'))
    ? join(outDir, 'quality.json')
    : undefined)

if (qualityPath && existsSync(qualityPath)) {
  const qualityFile = JSON.parse(await readFile(qualityPath, 'utf8'))
  const quality = qualityFile.clusters ?? qualityFile
  const byCluster = new Map(clusters.map((c) => [c.key, c]))
  for (const [key, result] of Object.entries(quality)) {
    const cluster = byCluster.get(key)
    if (cluster) cluster.quality = result
  }
  qualityStats.enabled = true
  qualityStats.checked = Object.keys(quality).length
  console.log(`Quality: axe results for ${qualityStats.checked} clusters`)
}

// 5. Score and write
const ranked = scoreClusters(clusters, {
  weights,
  gapValues,
  adoption: adoptionCollected,
  services: serviceStats.enabled,
  quality: qualityStats.enabled,
  prevalenceRaw,
  techniqueWeights,
  prototypeWeight,
  freshness
})

// Structural fingerprints for the top clusters: flag same-name components
// whose implementations look structurally different
const annotated = await annotateStructure(
  ranked.filter((c, i) => i < Number(args.top) && c.status !== 'covered' && c.members.length > 1),
  { github, sources: selectedSources }
)
for (const [key, flag] of Object.entries(annotated)) {
  ranked.find((c) => c.key === key)?.flags.push(flag)
}

await mkdir(outDir, { recursive: true })
await writeFile(
  join(outDir, 'clusters.json'),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      weights,
      adoption: adoptionCollected,
      qualityStats,
      serviceStats,
      sources: sourceSummaries.map(({ rules, ...s }) => s),
      clusters: ranked,
      unmatchedBacklog
    },
    null,
    2
  )
)
await writeFile(join(outDir, 'scores.csv'), toCsv(ranked))
await writeFile(
  join(outDir, 'report.md'),
  toMarkdown({
    ranked,
    sources: sourceSummaries,
    unmatchedBacklog,
    weights,
    adoption: adoptionCollected,
    qualityStats,
    serviceStats,
    prototypeWeight,
    minServiceRepos: serviceScan.minRepos,
    top: Number(args.top)
  })
)

console.log(`\nWritten to ${outDir}/{report.md,scores.csv,clusters.json}\n`)
console.log('Top 15 candidates not in GOV.UK Frontend:')
for (const c of ranked.filter((c) => c.status !== 'covered').slice(0, 15)) {
  const prototypes = c.services.filter((s) => s.isPrototype).length
  console.log(
    `  ${String(c.score).padStart(5)}  ${c.name} [${c.status}] ${c.orgs.length} orgs, ${c.services.length - prototypes} services + ${prototypes} prototypes, ${c.backlog.length} backlog`
  )
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
