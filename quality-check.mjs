#!/usr/bin/env node
/**
 * Render community implementations of the top-scoring gaps with Nunjucks
 * and check them with axe-core. Results go to quality.json, which audit.mjs
 * merges into its `quality` signal.
 */
import { existsSync } from 'node:fs'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { parseArgs } from 'node:util'

import { createClient } from './lib/github.mjs'
import { checkCluster } from './lib/quality.mjs'

const { values: args } = parseArgs({
  options: {
    clusters: { type: 'string' },
    top: { type: 'string', default: '30' },
    only: { type: 'string' },
    out: { type: 'string', default: 'output' },
    'govuk-frontend': { type: 'string' },
    refresh: { type: 'boolean', default: false },
    'max-age': { type: 'string', default: String(24 * 30) },
    help: { type: 'boolean', short: 'h', default: false }
  }
})

if (args.help) {
  console.log(`Usage: node quality-check.mjs [options]

Renders community implementations of components not in GOV.UK Frontend and
runs axe-core on the output. Needs a local govuk-frontend checkout so
community templates that use our macros can render.

  --top=N                 Check the top N scored gaps (default: 30)
  --only=KEY,KEY          Only these cluster keys
  --clusters=FILE         clusters.json from the audit (default: output/clusters.json)
  --govuk-frontend=DIR    Path to govuk-frontend's src directory
                          (default: ../govuk-frontend/packages/govuk-frontend/src)
  --out=DIR               Output directory (default: output)
  --refresh               Ignore cached API responses
  --max-age=HOURS         Cache lifetime in hours (default: 720, 30 days)

Output: quality.json (merged by audit.mjs into its quality signal)
`)
  process.exit(0)
}

const outDir = resolve(args.out)
const clustersPath = args.clusters ?? join(outDir, 'clusters.json')
if (!existsSync(clustersPath)) {
  console.error(`No clusters file at ${clustersPath} — run the audit first.`)
  process.exit(1)
}

const govukFrontendDir = resolve(
  args['govuk-frontend'] ??
    join(import.meta.dirname, '../govuk-frontend/packages/govuk-frontend/src')
)
if (!existsSync(govukFrontendDir)) {
  console.error(
    `govuk-frontend source not found at ${govukFrontendDir} — pass --govuk-frontend=DIR.`
  )
  process.exit(1)
}

const github = createClient({
  cacheDir: resolve(import.meta.dirname, '.cache'),
  refresh: args.refresh,
  maxAgeHours: Number(args['max-age'])
})

const { clusters } = JSON.parse(await readFile(clustersPath, 'utf8'))
const only = args.only?.split(',').map((k) => k.trim())

const targets = clusters.filter(
  (c) =>
    c.status !== 'covered' &&
    c.members.some((m) => !m.ours && m.repo && m.isDirectory) &&
    (only ? only.includes(c.key) : true)
)

if (!only) targets.length = Math.min(targets.length, Number(args.top))

console.log(
  `Checking ${targets.length} clusters with Nunjucks and axe (govuk-frontend: ${govukFrontendDir})…`
)

const root = await mkdtemp(join(tmpdir(), 'cca-quality-'))
const results = {}

try {
  for (const [i, cluster] of targets.entries()) {
    try {
      results[cluster.key] = await checkCluster(cluster, {
        github,
        govukFrontendDir,
        root
      })
      const summary = results[cluster.key].renders
        .map((r) =>
          r.error
            ? `${r.sourceId}: error`
            : `${r.sourceId}: ${r.violations.length} violations${r.failed ? ` (${r.failed} renders failed)` : ''}`
        )
        .join(', ')
      console.log(`  [${i + 1}/${targets.length}] ${cluster.key}: ${summary}`)
    } catch (error) {
      console.warn(`  [${i + 1}/${targets.length}] ${cluster.key}: ${error.message}`)
    }
  }
} finally {
  await rm(root, { recursive: true, force: true })
}

await mkdir(outDir, { recursive: true })
await writeFile(
  join(outDir, 'quality.json'),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      clusters: Object.fromEntries(
        Object.entries(results).map(([key, result]) => [key, result])
      )
    },
    null,
    1
  )
)
console.log(`\nWritten to ${join(outDir, 'quality.json')}`)
