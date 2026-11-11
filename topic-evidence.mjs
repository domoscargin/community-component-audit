#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { parseArgs } from 'node:util'
import { createClient } from './lib/github.mjs'
import { REPO_SCRAPER } from './lib/govlist.mjs'
import {
  collectTopicEvidence, PILOT_ORGS, topicEvidenceCsv, topicEvidenceMarkdown
} from './lib/topic-evidence.mjs'

const { values: args } = parseArgs({
  options: {
    out: { type: 'string', default: 'output/topic-evidence' },
    'only-orgs': { type: 'string', default: PILOT_ORGS.join(',') },
    'max-threads': { type: 'string', default: '3' },
    'discussion-repos': { type: 'string', default: '' },
    'seeds-only': { type: 'boolean', default: false },
    refresh: { type: 'boolean', default: false },
    'max-age': { type: 'string', default: '1' },
    help: { type: 'boolean', short: 'h', default: false }
  }
})

if (args.help) {
  console.log(`Usage: npm run topics -- [options]

Collect public dark-mode and AI conversations for manual, quote-backed review.
Does not classify sentiment or modify audit scores.

  --seeds-only          Fetch just the two Community backlog discussions
  --only-orgs=A,B        Issue/PR search owners (default: ${PILOT_ORGS.join(',')})
                        Use "all" for owners in the government repo scraper
  --max-threads=N        Sample cap per topic per org/repo (default: 3; range: 1-100)
  --discussion-repos=A/B Additional public repos to search for discussions
  --out=DIR             Output directory (default: output/topic-evidence)
  --refresh             Fetch fresh evidence instead of using cached responses
  --max-age=HOURS       Cache lifetime (default: 1 hour; 0 disables reuse)

Output: topic-evidence.json, review-template.csv, report.md
Issue/PR discovery searches titles/opening text, including closed threads.
Topic-specific titles rank first; bot-authored and HTML-only hits are screened out.
Discussion discovery searches titles/opening text in seed and sampled repositories.
All selected thread comments/replies and PR review/inline comments are fetched.
Discovery caps and incomplete results are recorded, not interpreted as no evidence.
`)
  process.exit(0)
}

const maxAgeHours = Number(args['max-age'])
if (!args['max-age'].trim() || !Number.isFinite(maxAgeHours) || maxAgeHours < 0) {
  throw new Error('--max-age must be a non-negative number of hours')
}
const maxThreads = Number(args['max-threads'])
if (!Number.isInteger(maxThreads) || maxThreads < 1 || maxThreads > 100) {
  throw new Error('--max-threads must be an integer from 1 to 100')
}
let orgs = [...new Set(args['only-orgs'].split(',').map((s) => s.trim()).filter(Boolean))]
if (!orgs.length || orgs.some((org) => !/^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(org))) {
  throw new Error('--only-orgs must contain GitHub owner names, or "all"')
}
const allOwners = orgs.length === 1 && orgs[0].toLowerCase() === 'all'
if (!allOwners && orgs.some((org) => org.toLowerCase() === 'all')) {
  throw new Error('"all" cannot be combined with individual owners')
}
const discussionRepos = [...new Set(args['discussion-repos'].split(',').map((s) => s.trim()).filter(Boolean))]
if (discussionRepos.some((repo) => !/^[a-z\d-]+\/[a-z\d_.-]+$/i.test(repo))) {
  throw new Error('--discussion-repos must contain owner/repo names')
}
const github = createClient({
  cacheDir: resolve(import.meta.dirname, '.cache'),
  refresh: args.refresh,
  maxAgeHours
})
if (allOwners && !args['seeds-only']) {
  const entries = JSON.parse(await github.page(REPO_SCRAPER))
  if (!Array.isArray(entries)) throw new Error('Government repo scraper did not return an array')
  orgs = [...new Set(entries.map((entry) => entry.owner).filter(Boolean))].sort()
  if (!orgs.length || orgs.some((org) => !/^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(org))) {
    throw new Error('Government repo scraper returned invalid or missing owners')
  }
}

console.log(`Collecting dark-mode and AI evidence (${args['seeds-only'] ? 'backlog seeds only' : `${orgs.length} owners; cap ${maxThreads}`})...`)
const snapshot = await collectTopicEvidence(github, {
  orgs, maxThreads, discussionRepos, seedsOnly: args['seeds-only']
})
const csv = topicEvidenceCsv(snapshot)
const markdown = topicEvidenceMarkdown(snapshot)
const outDir = resolve(args.out)
await mkdir(outDir, { recursive: true })
await writeFile(join(outDir, 'topic-evidence.json'), JSON.stringify(snapshot, null, 2) + '\n')
await writeFile(join(outDir, 'review-template.csv'), csv)
await writeFile(join(outDir, 'report.md'), markdown)
console.log(`${snapshot.threads.length} threads; ${snapshot.threads.reduce((n, t) => n + t.posts.length, 0)} posts`)
console.log(`${snapshot.coverage.filter((c) => c.limited).length} limited discovery steps; ${
  snapshot.coverage.filter((c) => c.incomplete).length
} incomplete searches (see JSON coverage)`)
console.log(`Written to ${outDir}/{topic-evidence.json,review-template.csv,report.md}`)
