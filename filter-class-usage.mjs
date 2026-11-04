#!/usr/bin/env node
/**
 * Filter saved class-usage results using local repository-tree cache only.
 * No GitHub client or network access is used by this script.
 */
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { basename, dirname, join, resolve } from 'node:path'
import { parseArgs } from 'node:util'

import {
  isPrototypeRepo,
  packageManifest,
  summariseClassUsage
} from './lib/classusage.mjs'

const { values: args } = parseArgs({
  options: {
    input: { type: 'string', default: 'output/class-usage.json' },
    out: { type: 'string', default: 'output/class-usage-filtered.json' },
    cache: { type: 'string', default: '.cache' },
    'prototype-weight': { type: 'string', default: '0.25' },
    help: { type: 'boolean', short: 'h', default: false }
  }
})

if (args.help) {
  console.log(`Usage: node filter-class-usage.mjs [options]

Filter existing class-usage data locally. Reads repository trees from .cache;
does not make network requests.

  --input=FILE             Saved class-usage.json (default: output/class-usage.json)
  --out=FILE               Filtered output (default: output/class-usage-filtered.json)
  --cache=DIR              Local GitHub response cache (default: .cache)
  --prototype-weight=NUM   Prototype repo/org weight from 0 to 1 (default: 0.25)
`)
  process.exit(0)
}

const inputPath = resolve(args.input)
const outputPath = resolve(args.out)
const cacheDir = resolve(args.cache)
const prototypeWeight = Number(args['prototype-weight'])
if (!Number.isFinite(prototypeWeight) || prototypeWeight < 0 || prototypeWeight > 1) {
  throw new RangeError('--prototype-weight must be between 0 and 1')
}
const source = JSON.parse(await readFile(inputPath, 'utf8'))

if (!source || Array.isArray(source) || typeof source !== 'object') {
  throw new TypeError(`Expected class-usage JSON object in ${inputPath}`)
}

const repos = [
  ...new Set(
    Object.entries(source).flatMap(([className, usage]) => {
      if (!usage || !Array.isArray(usage.repoList)) {
        throw new TypeError(`Expected repoList array for class ${className}`)
      }
      return usage.repoList
    })
  )
].sort()

const repositories = {}
for (const repo of repos) {
  if (typeof repo !== 'string' || !repo.includes('/')) {
    throw new TypeError(`Invalid repository name in class-usage data: ${repo}`)
  }

  const isPrototype = isPrototypeRepo(repo)

  const key = `files:${repo}:HEAD`
  const cachePath = join(
    cacheDir,
    `${createHash('sha1').update(key).digest('hex')}.json`
  )

  let cached
  try {
    cached = JSON.parse(await readFile(cachePath, 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT') {
      repositories[repo] = {
        eligible: false,
        isPrototype,
        reason: 'local-tree-not-cached'
      }
      continue
    }
    throw new Error(`Could not read cached tree for ${repo}: ${error.message}`, {
      cause: error
    })
  }

  if (!cached || cached.key !== key || !Array.isArray(cached.data?.files)) {
    throw new Error(`Invalid cached tree response for ${repo} at ${cachePath}`)
  }

  if (cached.data.truncated) {
    repositories[repo] = {
      eligible: false,
      isPrototype,
      reason: 'tree-truncated'
    }
    continue
  }

  const manifest = packageManifest(cached.data.files)
  repositories[repo] = manifest
    ? { eligible: true, isPrototype, manifest }
    : {
        eligible: false,
        isPrototype,
        reason: 'no-package-manifest'
      }
}

const classes = summariseClassUsage(source, repositories, prototypeWeight)
const excluded = Object.values(repositories).filter((repo) => !repo.eligible)
const eligible = Object.values(repositories).filter((repo) => repo.eligible)
const productionRepos = eligible.filter((repo) => !repo.isPrototype)
const prototypeRepos = eligible.filter((repo) => repo.isPrototype)
const output = {
  generatedAt: new Date().toISOString(),
  source: basename(inputPath),
  prototypeWeight,
  filters: {
    prototypeRepoNameContains: 'prototype',
    prototypeReposCountedSeparately: true,
    requiresLocalUntruncatedTree: true,
    requiresPackageManifest: true
  },
  summary: {
    classes: Object.keys(classes).length,
    candidateRepos: repos.length,
    productionRepos: productionRepos.length,
    prototypeRepos: prototypeRepos.length,
    reposExcluded: excluded.length
  },
  repositories,
  classes
}

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, JSON.stringify(output, null, 1) + '\n')

console.log(`Read ${inputPath} and local tree cache ${cacheDir}; no network used.`)
console.log(
  `${output.summary.classes} classes; ${output.summary.productionRepos} eligible production repos; ` +
    `${output.summary.prototypeRepos} eligible prototypes in their separate bucket; ${output.summary.reposExcluded} repos excluded for missing evidence.`
)
console.log(`Written to ${outputPath}`)
