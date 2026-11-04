#!/usr/bin/env node
/**
 * Rescore saved audit results with locally filtered class-usage data.
 * This only reads and writes local files; it never contacts GitHub.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { parseArgs } from 'node:util'

import { aggregateClassUsage } from './lib/classusage.mjs'
import { toCsv, toMarkdown } from './lib/report.mjs'
import { prevalenceWeight, scoreClusters } from './lib/score.mjs'
import {
  freshness,
  gapValues,
  prototypeWeight,
  serviceScan,
  staleMonths,
  techniqueWeights
} from './scoring.mjs'

const { values: args } = parseArgs({
  options: {
    clusters: { type: 'string', default: 'output/clusters.json' },
    'class-usage': { type: 'string', default: 'output/class-usage-filtered.json' },
    out: { type: 'string', default: 'output' },
    top: { type: 'string', default: '50' },
    help: { type: 'boolean', short: 'h', default: false }
  }
})

if (args.help) {
  console.log(`Usage: node rescore-report.mjs [options]

Rescore saved audit results with filtered class usage, without running the audit
or making network requests.

  --clusters=FILE       Saved clusters.json (default: output/clusters.json)
  --class-usage=FILE    Filtered class usage (default: output/class-usage-filtered.json)
  --out=DIR             Output directory (default: output)
  --top=N               Candidates shown in report (default: 50)
`)
  process.exit(0)
}

const clustersPath = resolve(args.clusters)
const classUsagePath = resolve(args['class-usage'])
const outDir = resolve(args.out)
const saved = JSON.parse(await readFile(clustersPath, 'utf8'))
const classUsageFile = JSON.parse(await readFile(classUsagePath, 'utf8'))
const auditGeneratedAt = saved.generatedAt

if (!Array.isArray(saved.clusters) || !Array.isArray(saved.sources)) {
  throw new TypeError(`Invalid saved audit data in ${clustersPath}`)
}
if (!classUsageFile.classes || !Number.isFinite(classUsageFile.prototypeWeight)) {
  throw new TypeError(`Invalid filtered class-usage data in ${classUsagePath}`)
}

const classUsage = classUsageFile.classes
for (const cluster of saved.clusters) {
  for (const member of cluster.members) delete member.adoptionHits
  const aggregate = aggregateClassUsage(
    cluster.members,
    classUsage,
    classUsageFile.prototypeWeight
  )
  cluster.adoptionHits = aggregate.weightedUsage
  for (const [member, usage] of aggregate.memberUsage) {
    member.adoptionHits = usage
  }
}

const downloadsByOrg = new Map()
const pushedAtByOrg = new Map()
for (const source of saved.sources) {
  if (source.packages?.length) {
    downloadsByOrg.set(
      source.org,
      (downloadsByOrg.get(source.org) ?? 0) + (source.npmDownloads ?? 0)
    )
  }
  const sourcePushedAt = Date.parse(source.pushedAt ?? '') || 0
  const currentPushedAt = Date.parse(pushedAtByOrg.get(source.org) ?? '') || 0
  if (sourcePushedAt > currentPushedAt) {
    pushedAtByOrg.set(source.org, source.pushedAt)
  }
}

const maxDownloads = Math.max(0, ...downloadsByOrg.values())
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

const ranked = scoreClusters(saved.clusters, {
  weights: saved.weights,
  gapValues,
  adoption: true,
  services: saved.serviceStats.enabled,
  quality: saved.qualityStats.enabled,
  prevalenceRaw,
  techniqueWeights,
  prototypeWeight,
  freshness
})

const generatedAt = new Date().toISOString()
saved.adoption = true
saved.adoptionPrototypeWeight = classUsageFile.prototypeWeight
saved.rescoredAt = generatedAt
saved.rescoreSource = basename(classUsagePath)
saved.clusters = ranked

const report = toMarkdown({
  ranked,
  sources: saved.sources,
  unmatchedBacklog: saved.unmatchedBacklog,
  weights: saved.weights,
  adoption: true,
  adoptionPrototypeWeight: classUsageFile.prototypeWeight,
  qualityStats: saved.qualityStats,
  serviceStats: saved.serviceStats,
  prototypeWeight,
  minServiceRepos: serviceScan.minRepos,
  top: Number(args.top),
  auditGeneratedAt
})

await mkdir(outDir, { recursive: true })
await writeFile(join(outDir, 'clusters.json'), JSON.stringify(saved, null, 2) + '\n')
await writeFile(join(outDir, 'scores.csv'), toCsv(ranked))
await writeFile(join(outDir, 'report.md'), report)

console.log(`Rescored saved snapshot from ${saved.generatedAt}; no audit or network calls made.`)
console.log(`Updated ${join(outDir, '{report.md,scores.csv,clusters.json}')}`)
