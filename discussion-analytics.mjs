#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { parseArgs } from 'node:util'
import { createClient } from './lib/github.mjs'
import { discussionActivityCsv, summariseDiscussionActivity } from './lib/discussions.mjs'

const { values: args } = parseArgs({
  options: {
    out: { type: 'string', default: 'output/discussions' },
    refresh: { type: 'boolean', default: false },
    'max-age': { type: 'string', default: '1' },
    help: { type: 'boolean', short: 'h', default: false }
  }
})

if (args.help) {
  console.log(`Usage: npm run discussions -- [options]

Export Community backlog discussion activity, including closed discussions.
Counts top-level comments and nested replies, with 30/90/365-day windows.

  --out=DIR        Output directory (default: output/discussions)
  --refresh        Fetch a fresh snapshot instead of using the cache
  --max-age=HOURS  Cache lifetime (default: 1 hour; 0 disables reuse)

Output: discussion-analytics.json, discussion-analytics.csv
Views are unavailable through GitHub's public API, not zero.
`)
  process.exit(0)
}

const maxAgeHours = Number(args['max-age'])
if (!args['max-age'].trim() || !Number.isFinite(maxAgeHours) || maxAgeHours < 0) {
  throw new Error('--max-age must be a non-negative number of hours')
}
const github = createClient({
  cacheDir: resolve(import.meta.dirname, '.cache'),
  refresh: args.refresh,
  maxAgeHours
})

console.log('Fetching Community backlog discussions, comments and replies...')
const snapshot = await github.discussionActivity(
  'alphagov/govuk-design-system',
  'Community backlog'
)
const report = summariseDiscussionActivity(snapshot)
const outDir = resolve(args.out)
await mkdir(outDir, { recursive: true })
await writeFile(join(outDir, 'discussion-analytics.json'), JSON.stringify(report, null, 2) + '\n')
await writeFile(join(outDir, 'discussion-analytics.csv'), discussionActivityCsv(report))
console.log(`Snapshot: ${report.collectedAt}`)
console.log(`${report.discussions.length} discussions; ${
  report.discussions.reduce((sum, d) => sum + d.responseCount, 0)
} comments and replies`)
console.log(`Written to ${outDir}/{discussion-analytics.json,discussion-analytics.csv}`)
