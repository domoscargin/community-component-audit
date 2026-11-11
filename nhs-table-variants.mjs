#!/usr/bin/env node
/**
 * Scan government repos for NHS.UK table variant usage.
 *
 * For every repo that depends on the nhsuk-frontend npm package, reads its
 * view/template files (via the local cache where possible) and records which
 * of the six NHS table kinds it uses: basic, compact, striped, responsive,
 * scrolling and sortable (plus the "reverse" dark-background variant).
 *
 * Writes output/nhs-table-variants.json and output/drill-downs/nhs-table-variants.md
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'

import { createClient } from './lib/github.mjs'
import { viewFiles, repoPackages, isPrototypeRepo } from './lib/classusage.mjs'

const outDir = resolve('output')
const github = createClient({ cacheDir: resolve('.cache') })

// Repo set: everything the class-usage scan verified, plus every repo the
// service tree scan found components in. All had trees cached by those scans.
const filtered = JSON.parse(
  await readFile(join(outDir, 'class-usage-filtered.json'), 'utf8')
)
const hitsCsv = await readFile(join(outDir, 'gov-repos.csv'), 'utf8')
const hitRepos = hitsCsv
  .split('\n')
  .slice(1)
  .map((line) => line.split(',')[0])
  .filter((repo) => repo && repo.includes('/'))

const repos = [
  ...new Set([...Object.keys(filtered.repositories), ...hitRepos])
].sort()

const protoByRepo = new Map()
for (const [repo, info] of Object.entries(filtered.repositories)) {
  protoByRepo.set(repo, Boolean(info.isPrototype))
}

// Repos with their own table implementation, and MoJ sortable-table consumers,
// for cross-referencing
const clusters = JSON.parse(await readFile(join(outDir, 'clusters.json'), 'utf8'))
const ownTable = new Map()
for (const cluster of clusters.clusters) {
  if (!['table', 'sortable-table', 'responsive-table', 'data-table'].includes(cluster.name)) continue
  for (const s of cluster.services ?? []) {
    if (!ownTable.has(s.repo)) ownTable.set(s.repo, new Set())
    ownTable.get(s.repo).add(cluster.name)
  }
}
const classUsage = JSON.parse(await readFile(join(outDir, 'class-usage.json'), 'utf8'))
const mojSortable = new Set(classUsage['moj-sortable-table']?.repoList ?? [])

const PACKAGE_JSON = /(?:^|\/)package\.json$/
const NOISE = /(^|\/)(node_modules|vendor|dist|build)(\/|$)/i
const MACRO_REF = /nhsukTable|tables\/macro|components\/tables/

// Current (BEM) classes were introduced in nhsuk-frontend 10.6.0. Before that
// (4.0.0–10.5.x) the responsive table used `nhsuk-table-responsive`, the
// scrolling wrapper was `nhsuk-table-container` and reverse was
// `nhsuk-table-responsive--reverse`.
const VARIANTS = {
  compact: (c, macro) =>
    c.includes('nhsuk-table--compact') || (macro && /\bcompact\s*:\s*true/.test(c)),
  striped: (c, macro) =>
    c.includes('nhsuk-table--striped') || (macro && /\bstriped\s*:\s*true/.test(c)),
  responsive: (c, macro) =>
    c.includes('nhsuk-table--responsive') || (macro && /\bresponsive\s*:\s*true/.test(c)),
  reverse: (c, macro) =>
    c.includes('nhsuk-table--reverse') || (macro && /\bvariant\s*:\s*['"]reverse/.test(c)),
  scrolling: (c, macro, table) =>
    (table && c.includes('nhsuk-scroll')) || (macro && /\bscroll\s*:\s*true/.test(c)),
  sortable: (c, macro, table) =>
    (table && (c.includes('data-sort') || c.includes('aria-sort'))) ||
    (macro && /\b(sort|sortValue|sortNext)\s*:/.test(c))
}

// Legacy (pre-10.6.0) class names — matched separately so the report can show
// who is still on the old markup
const LEGACY_VARIANTS = {
  responsive: (c) =>
    c.includes('nhsuk-table-responsive') || c.includes('nhsuk-table-responsive__heading'),
  reverse: (c) => c.includes('nhsuk-table-responsive--reverse'),
  scrolling: (c, table) => table && c.includes('nhsuk-table-container')
}

/** Declared nhsuk-frontend version range from a repo's package.json files */
async function nhsVersion(files, repo) {
  for (const file of files.filter(
    (f) => PACKAGE_JSON.test(f.path) && !NOISE.test(f.path)
  )) {
    try {
      const pkg = JSON.parse(await github.blob(repo, file.sha))
      const range =
        pkg.dependencies?.['nhsuk-frontend'] ??
        pkg.devDependencies?.['nhsuk-frontend']
      if (range) return range
    } catch {}
  }
  return undefined
}

const results = {}
let scanned = 0
let unavailable = 0
let notNhs = 0

for (const repo of repos) {
  try {
    const { files } = await github.files(repo)
    const packages = await repoPackages(files, github.blob, repo)
    if (!packages.has('nhsuk-frontend')) {
      notNhs++
      continue
    }

    const version = await nhsVersion(files, repo)
    const variants = {}
    const legacy = {}
    let tableFiles = 0

    for (const file of viewFiles(files)) {
      let content
      try {
        content = await github.blob(repo, file.sha)
      } catch {
        continue
      }
      const macro = MACRO_REF.test(content)
      const table =
        content.includes('nhsuk-table') ||
        content.includes('nhsuk-table-responsive') ||
        macro
      if (!table) continue
      tableFiles++
      for (const [variant, test] of Object.entries(VARIANTS)) {
        if (test(content, macro, table)) {
          ;(variants[variant] ??= []).push(file.path)
        }
      }
      for (const [variant, test] of Object.entries(LEGACY_VARIANTS)) {
        if (test(content, table)) {
          ;(legacy[variant] ??= []).push(file.path)
          ;(variants[variant] ??= []).push(file.path)
        }
      }
    }

    results[repo] = {
      version,
      tableFiles,
      variants: Object.fromEntries(
        Object.entries(variants).map(([k, v]) => [k, v.slice(0, 3)])
      ),
      legacy: Object.fromEntries(
        Object.entries(legacy).map(([k, v]) => [k, v.slice(0, 3)])
      ),
      variantCount: Object.keys(variants).length,
      isPrototype: protoByRepo.get(repo) ?? isPrototypeRepo(repo),
      ownTable: [...(ownTable.get(repo) ?? [])],
      mojSortable: mojSortable.has(repo)
    }
    scanned++
  } catch {
    unavailable++
  }
  const done = scanned + unavailable + notNhs
  if (done % 100 === 0) console.log(`  ${done}/${repos.length}`)
}

console.log(
  `${scanned} nhsuk-frontend repos scanned, ${notNhs} without the dependency, ${unavailable} unavailable`
)

await mkdir(join(outDir, 'drill-downs'), { recursive: true })
await writeFile(
  join(outDir, 'nhs-table-variants.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 1) + '\n'
)

// ---- Markdown report ----

const VARIANT_ORDER = ['responsive', 'sortable', 'striped', 'compact', 'scrolling', 'reverse']
const VARIANT_LABEL = {
  responsive: 'responsive (`nhsuk-table--responsive`, legacy `nhsuk-table-responsive`, macro `responsive: true`)',
  sortable: 'sortable (`data-sort`/`aria-sort`, macro `sort:`)',
  striped: 'striped (`nhsuk-table--striped`, macro `striped: true`)',
  compact: 'compact (`nhsuk-table--compact`, macro `compact: true`)',
  scrolling: 'scrolling (`nhsuk-scroll` wrapper, legacy `nhsuk-table-container`, macro `scroll: true`)',
  reverse: 'reverse/dark (`nhsuk-table--reverse`, legacy `nhsuk-table-responsive--reverse`, macro `variant: "reverse"`)'
}

const entries = Object.entries(results)
const using = entries.filter(([, r]) => r.tableFiles > 0)
const withVariant = entries.filter(([, r]) => r.variantCount > 0)

const counts = {}
for (const v of VARIANT_ORDER) {
  const reposV = entries.filter(([, r]) => r.variants[v])
  counts[v] = {
    total: reposV.length,
    prod: reposV.filter(([, r]) => !r.isPrototype).length,
    proto: reposV.filter(([, r]) => r.isPrototype).length,
    legacy: reposV.filter(([, r]) => r.legacy?.[v]).length
  }
}

const byOwner = new Map()
for (const [repo, r] of entries) {
  const owner = repo.split('/')[0]
  if (!byOwner.has(owner)) byOwner.set(owner, [])
  byOwner.get(owner).push([repo, r])
}
const owners = [...byOwner.entries()].sort(
  (a, b) =>
    b[1].filter(([, r]) => r.variantCount > 0 && !r.isPrototype).length -
      a[1].filter(([, r]) => r.variantCount > 0 && !r.isPrototype).length ||
    b[1].length - a[1].length
)

const md = []
md.push('# NHS.UK table variants: repo drill-down')
md.push('')
md.push(`Generated ${new Date().toISOString().slice(0, 10)} by [nhs-table-variants.mjs](../nhs-table-variants.mjs).`)
md.push('')
md.push('The [NHS table component](https://service-manual.nhs.uk/design-system/components/table) '
  + 'has six kinds — basic, compact, striped, responsive, scrolling, sortable — plus a reverse '
  + 'variant for dark backgrounds. This doc counts which government repos (those depending on '
  + 'the `nhsuk-frontend` npm package) use each kind, detected from CSS classes and Nunjucks '
  + 'macro options in their view/template files.')
md.push('')
md.push('**Caveats:** only up to 25 view files per repo are scanned (the audit\'s standard '
  + 'sample), so counts are a lower bound. Repos using NHS classes without an `nhsuk-frontend` '
  + 'package dependency (copied CSS, prototype kit plugins) are not covered. `data-sort`/'
  + '`aria-sort` co-occurring with `nhsuk-table` is used as the sortable signal in HTML, which '
  + 'can over-count slightly. Macro-option detection (`compact: true` etc.) requires the file '
  + 'to reference the NHS table macro.')
md.push('')
md.push('## Summary')
md.push('')
md.push(`- **${scanned} repos depend on nhsuk-frontend** (of ${repos.length} government repos scanned; ${unavailable} unavailable)`)
md.push(`- **${using.length} repos reference NHS tables** in sampled view files`)
md.push(`- **${withVariant.length} repos use at least one variant** beyond basic`)
md.push('')
md.push('| Variant | Classes / macro options | Repos | Production | Prototypes | Of which legacy classes |')
md.push('|---|---|---|---|---|---|')
for (const v of VARIANT_ORDER) {
  md.push(`| ${VARIANT_LABEL[v].split(' (')[0]} | ${VARIANT_LABEL[v].match(/\((.*)\)/)[1]} | ${counts[v].total} | ${counts[v].prod} | ${counts[v].proto} | ${counts[v].legacy || ''} |`)
}
md.push('')

// Version distribution among variant users
const versions = new Map()
for (const [, r] of withVariant) {
  const key = r.version ?? 'unknown'
  versions.set(key, (versions.get(key) ?? 0) + 1)
}
md.push('### Declared nhsuk-frontend versions among variant users')
md.push('')
md.push('Class names changed in **10.6.0** (August 2026): `nhsuk-table-responsive` became '
  + '`nhsuk-table nhsuk-table--responsive`, `nhsuk-table-container` became the `nhsuk-scroll` '
  + 'wrapper, and `nhsuk-table-responsive--reverse` became `nhsuk-table--reverse`. Compact, '
  + 'striped, scrolling and the sortable macro options are all new in 10.6.0; the reverse '
  + 'macro option dates from 10.4.0 and responsive from 4.0.0. Repos on older ranges can only '
  + 'use the legacy class names (or hand-rolled `data-sort`/`aria-sort` markup for sorting). '
  + 'Before 4.0.0 (October 2020) `nhsuk-table-responsive` meant the *scrolling* wrapper, so '
  + 'legacy-class signals on very old versions may be misattributed between those two variants.')
md.push('')
md.push('| Version range | Repos |')
md.push('|---|---|')
for (const [v, n] of [...versions.entries()].sort((a, b) => b[1] - a[1])) {
  md.push(`| \`${v}\` | ${n} |`)
}
md.push('')

// Legacy classes were removed in 10.6.0, so legacy-class users on 10.6+ ranges
// have likely lost their variant styling
const stale = entries.filter(([repo, r]) => {
  if (!r.legacy || !Object.keys(r.legacy).length) return false
  const m = /(\d+)\.(\d+)/.exec(r.version ?? '')
  return m && (Number(m[1]) > 10 || (Number(m[1]) === 10 && Number(m[2]) >= 6))
})
if (stale.length) {
  md.push('### ⚠️ Legacy classes on 10.6+ — likely broken styling')
  md.push('')
  md.push('The legacy class names were **removed** in 10.6.0. These repos declare '
    + 'nhsuk-frontend 10.6.0 or later but still use the old classes, so their '
    + 'variant styling (for example responsive table stacking) has likely stopped working:')
  md.push('')
  for (const [repo, r] of stale.sort((a, b) => a[0].localeCompare(b[0]))) {
    md.push(`- [${repo}](https://github.com/${repo}) (\`${r.version}\`): ${Object.keys(r.legacy).join(', ')}`)
  }
  md.push('')
}

// Cross-reference
const ownTableCount = withVariant.filter(([, r]) => r.ownTable.length).length
const mojCount = withVariant.filter(([, r]) => r.mojSortable).length
md.push('### Cross-references')
md.push('')
md.push(`- ${ownTableCount} variant-using ${ownTableCount === 1 ? 'repo' : 'repos'} **also have their own table implementation** in the audit's table clusters (see [table.md](./table.md))`)
md.push(`- ${mojCount} variant-using ${mojCount === 1 ? 'repo' : 'repos'} **also consume \`moj-sortable-table\`** classes`)
md.push('')

md.push('## Repos by organisation')
for (const [owner, items] of owners) {
  items.sort((a, b) => b[1].variantCount - a[1].variantCount || a[0].localeCompare(b[0]))
  md.push('')
  md.push(`### ${owner} (${items.length})`)
  md.push('')
  md.push('| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |')
  md.push('|---|---|---|---|---|---|')
  for (const [repo, r] of items) {
    const name = repo.split('/')[1]
    const ticks = VARIANT_ORDER.map((v) =>
      r.variants[v] ? `**${v}**${r.legacy?.[v] ? ' (legacy class)' : ''}` : ''
    ).filter(Boolean)
    const examples = Object.entries(r.variants)
      .flatMap(([v, paths]) => paths.slice(0, 1).map((p) => `[\`${v}\`](https://github.com/${repo}/blob/HEAD/${p})`))
      .join(', ')
    md.push(`| [${name}](https://github.com/${repo})${r.isPrototype ? ' (proto)' : ''} | \`${r.version ?? '?'}\` | ${ticks.join(', ') || 'basic only'} | ${examples} | ${r.ownTable.join(', ')} | ${r.mojSortable ? 'yes' : ''} |`)
  }
}
md.push('')

await writeFile(join(outDir, 'drill-downs', 'nhs-table-variants.md'), md.join('\n') + '\n')
console.log(`Written to ${join(outDir, 'drill-downs', 'nhs-table-variants.md')}`)
