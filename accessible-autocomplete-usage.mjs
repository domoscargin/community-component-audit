#!/usr/bin/env node
/**
 * Scan government repos for usage of alphagov/accessible-autocomplete.
 *
 * For every repo, reads its package manifests (via the local cache where
 * possible) and records whether it depends on `accessible-autocomplete`
 * directly, or gets it transitively through hmrc-frontend or
 * x-govuk-prototype-components (both bundle it). For users, view/template
 * files and autocomplete-named JS files are scanned for usage signals and to
 * classify the integration mode (select enhancement vs free-text input).
 *
 * Writes output/accessible-autocomplete-usage.json and
 * output/drill-downs/accessible-autocomplete.md
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'

import { createClient } from './lib/github.mjs'
import { viewFiles, isPrototypeRepo } from './lib/classusage.mjs'

const outDir = resolve('output')
const github = createClient({ cacheDir: resolve('.cache') })

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

// Autocomplete cluster membership (repos with their own implementation) for
// cross-referencing
const clusters = JSON.parse(await readFile(join(outDir, 'clusters.json'), 'utf8'))
const ownAutocomplete = new Set()
for (const cluster of clusters.clusters) {
  if (cluster.name !== 'autocomplete') continue
  for (const s of cluster.services ?? []) ownAutocomplete.add(s.repo)
}
const classUsage = JSON.parse(await readFile(join(outDir, 'class-usage.json'), 'utf8'))
const gemWrappers = {
  'gem-c-search-with-autocomplete': new Set(classUsage['gem-c-search-with-autocomplete']?.repoList ?? []),
  'gem-c-select-with-search': new Set(classUsage['gem-c-select-with-search']?.repoList ?? [])
}

const PACKAGE_JSON = /(?:^|\/)package\.json$/
const NOISE = /(^|\/)(node_modules|vendor|dist|build)(\/|$)/i
const JS_FILE = /(?:^|\/)app\/assets\/javascripts?\/.*\.m?js$|(?:^|\/)frontend\/.*\.(?:m?js|ts)$|\/javascripts?\/.*\.m?js$/i
const TRACKED = [
  'accessible-autocomplete',
  'govuk-country-and-territory-autocomplete',
  'hmrc-frontend',
  'x-govuk-prototype-components'
]

async function manifests(files, repo) {
  const found = {}
  for (const file of files.filter(
    (f) => PACKAGE_JSON.test(f.path) && !NOISE.test(f.path)
  )) {
    try {
      const pkg = JSON.parse(await github.blob(repo, file.sha))
      for (const name of TRACKED) {
        const range =
          pkg.dependencies?.[name] ?? pkg.devDependencies?.[name]
        if (range && !found[name]) found[name] = range
      }
    } catch {}
  }
  return found
}

function scanContent(content) {
  const signals = []
  if (/accessibleAutocomplete/.test(content)) signals.push('init-call')
  if (/enhanceSelectElement/.test(content)) signals.push('enhance-select')
  if (/accessibleAutocomplete\s*\(\s*{/.test(content)) signals.push('standalone-init')
  if (content.includes('autocomplete__')) signals.push('rendered-classes')
  if (content.includes('hmrc-accessible-autocomplete')) signals.push('hmrc-wrapper')
  if (/x-govuk[^"']*autocomplete|components\/autocomplete\/macro/.test(content))
    signals.push('x-govuk-wrapper')
  if (content.includes('gem-c-search-with-autocomplete')) signals.push('gem-c-search-with-autocomplete')
  if (content.includes('gem-c-select-with-search')) signals.push('gem-c-select-with-search')
  if (content.includes('govuk-country-and-territory-autocomplete')) signals.push('country-package-markup')
  return signals
}

const results = {}
let unavailable = 0

for (const repo of repos) {
  try {
    const { files } = await github.files(repo)
    const deps = await manifests(files, repo)
    const direct = deps['accessible-autocomplete']
    const country = deps['govuk-country-and-territory-autocomplete']
    const hmrc = deps['hmrc-frontend']
    const xgovuk = deps['x-govuk-prototype-components']
    if (!direct && !country && !hmrc && !xgovuk) continue

    const evidence = {}
    const addEvidence = (signal, path) => {
      ;(evidence[signal] ??= []).push(path)
    }

    for (const file of viewFiles(files)) {
      let content
      try {
        content = await github.blob(repo, file.sha)
      } catch {
        continue
      }
      for (const signal of scanContent(content)) addEvidence(signal, file.path)
    }

    // Autocomplete-named JS files (init usually lives in JS, not views)
    const jsFiles = files
      .filter((f) => /autocomplete/i.test(f.path) && /\.(m?js|ts)$/.test(f.path) && !NOISE.test(f.path))
      .slice(0, 8)
    for (const file of jsFiles) {
      let content
      try {
        content = await github.blob(repo, file.sha)
      } catch {
        continue
      }
      for (const signal of scanContent(content)) addEvidence(signal, file.path)
    }

    const signals = Object.keys(evidence)
    const mode = signals.includes('enhance-select')
      ? signals.includes('standalone-init') ? 'both' : 'select enhancement'
      : signals.includes('standalone-init') ? 'standalone input' : ''

    results[repo] = {
      direct: direct ?? null,
      country: country ?? null,
      hmrc: hmrc ?? null,
      xgovuk: xgovuk ?? null,
      mode,
      signals,
      evidence: Object.fromEntries(
        Object.entries(evidence).map(([k, v]) => [k, v.slice(0, 3)])
      ),
      isPrototype: protoByRepo.get(repo) ?? isPrototypeRepo(repo),
      ownAutocomplete: ownAutocomplete.has(repo),
      gemWrappers: Object.entries(gemWrappers)
        .filter(([, set]) => set.has(repo))
        .map(([cls]) => cls)
    }
  } catch {
    unavailable++
  }
  const done = Object.keys(results).length + unavailable
  if (done % 100 === 0) console.log(`  ${done}/${repos.length}`)
}

const total = Object.keys(results).length
console.log(`${total} repos use accessible-autocomplete (directly or via wrappers), ${unavailable} unavailable`)

await mkdir(join(outDir, 'drill-downs'), { recursive: true })
await writeFile(
  join(outDir, 'accessible-autocomplete-usage.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 1) + '\n'
)

// ---- Markdown report ----

const entries = Object.entries(results)
const isProd = ([, r]) => !r.isPrototype
const directUsers = entries.filter(([, r]) => r.direct)
const countryUsers = entries.filter(([, r]) => r.country)
const hmrcOnly = entries.filter(([, r]) => !r.direct && !r.country && r.hmrc)
const xgovukOnly = entries.filter(([, r]) => !r.direct && !r.country && !r.hmrc && r.xgovuk)
const withSignals = entries.filter(([, r]) => r.signals.length > 0)
const modes = {
  'select enhancement': entries.filter(([, r]) => r.mode === 'select enhancement'),
  'standalone input': entries.filter(([, r]) => r.mode === 'standalone input'),
  both: entries.filter(([, r]) => r.mode === 'both')
}
const ownCount = entries.filter(([, r]) => r.ownAutocomplete).length
const gemCount = entries.filter(([, r]) => r.gemWrappers.length).length

const byOwner = new Map()
for (const [repo, r] of entries) {
  const owner = repo.split('/')[0]
  if (!byOwner.has(owner)) byOwner.set(owner, [])
  byOwner.get(owner).push([repo, r])
}
const owners = [...byOwner.entries()].sort(
  (a, b) =>
    b[1].filter((x) => x[1].direct && !x[1].isPrototype).length -
      a[1].filter((x) => x[1].direct && !x[1].isPrototype).length ||
    b[1].length - a[1].length
)

const md = []
md.push('# accessible-autocomplete: repo drill-down')
md.push('')
md.push(`Generated ${new Date().toISOString().slice(0, 10)} by [accessible-autocomplete-usage.mjs](../accessible-autocomplete-usage.mjs).`)
md.push('')
md.push('Which government repos use [alphagov/accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete) '
  + '(latest npm release: 3.0.2). Repos are picked up via their package manifests: either a '
  + 'direct `accessible-autocomplete` dependency, or a transitive route — `hmrc-frontend` and '
  + '`x-govuk-prototype-components` both bundle it (their wrapper components). '
  + '`govuk-country-and-territory-autocomplete` (alphagov\'s specialised fork, latest 2.0.0) is tracked separately.')
md.push('')
md.push('**Signals** come from scanning view/template files and autocomplete-named JS files: '
  + '`init-call` (calls `accessibleAutocomplete`), `enhance-select` (the select-enhancement mode), '
  + '`standalone-init` (free-text input mode), `rendered-classes` (`autocomplete__*` markup), and '
  + 'wrapper usage (HMRC, x-govuk, gem-c). Absence of signals usually means the initialisation '
  + 'lives in JS files outside the sampled paths — treat "no signals" as unknown, not unused.')
md.push('')
md.push('## Summary')
md.push('')
md.push(`- **${total} repos use accessible-autocomplete** in some form (of ${repos.length} scanned; ${unavailable} unavailable)`)
md.push(`- **${directUsers.length} depend on it directly** (${directUsers.filter(isProd).length} production, ${directUsers.length - directUsers.filter(isProd).length} prototypes)`)
md.push(`- **${countryUsers.length} use the country/territory package**`)
md.push(`- **${hmrcOnly.length} get it only via hmrc-frontend**, **${xgovukOnly.length} only via x-govuk-prototype-components**`)
md.push(`- **${withSignals.length} have usage signals in sampled files**; modes seen: ${modes['select enhancement'].length} select enhancement, ${modes['standalone input'].length} standalone input, ${modes.both.length} both`)
md.push(`- Cross-refs: **${ownCount} also have their own autocomplete implementation** in the audit cluster (see [autocomplete.md](./autocomplete.md)); ${gemCount} consume gem-c wrapper classes`)
md.push('')

md.push('## Repos by organisation')
for (const [owner, items] of owners) {
  items.sort((a, b) =>
    Number(Boolean(b[1].direct)) - Number(Boolean(a[1].direct)) ||
    b[1].signals.length - a[1].signals.length ||
    a[0].localeCompare(b[0]))
  md.push('')
  md.push(`### ${owner} (${items.length})`)
  md.push('')
  md.push('| Repo | Route | Mode | Signals | Example files | Own autocomplete? |')
  md.push('|---|---|---|---|---|---|')
  for (const [repo, r] of items) {
    const name = repo.split('/')[1]
    const route = [
      r.direct ? `direct \`${r.direct}\`` : '',
      r.country ? `country \`${r.country}\`` : '',
      r.hmrc ? `hmrc \`${r.hmrc}\`` : '',
      r.xgovuk ? `x-govuk \`${r.xgovuk}\`` : ''
    ].filter(Boolean).join('<br>')
    const examples = Object.entries(r.evidence)
      .flatMap(([signal, paths]) =>
        paths.slice(0, 1).map((p) => `[\`${signal}\`](https://github.com/${repo}/blob/HEAD/${p})`))
      .slice(0, 4)
      .join(', ')
    md.push(`| [${name}](https://github.com/${repo})${r.isPrototype ? ' (proto)' : ''} | ${route} | ${r.mode} | ${r.signals.map((s) => `\`${s}\``).join(', ')} | ${examples} | ${r.ownAutocomplete ? 'yes' : ''}${r.gemWrappers.length ? ' ' + r.gemWrappers.map((c) => `\`${c}\``).join(' ') : ''} |`)
  }
}
md.push('')

await writeFile(join(outDir, 'drill-downs', 'accessible-autocomplete.md'), md.join('\n') + '\n')
console.log(`Written to ${join(outDir, 'drill-downs', 'accessible-autocomplete.md')}`)
