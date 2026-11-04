import { matchTitle, phraseRegex, squash, toKey } from './names.mjs'

/**
 * Group members into clusters of equivalent components or patterns and
 * work out how well GOV.UK Frontend covers each one
 *
 * @param {import('./inventory.mjs').Member[]} members
 * @param {object} options
 * @param {ReturnType<typeof import('./names.mjs').buildSynonymIndex>} options.synonymIndex
 * @param {Record<string, string[]>} options.related
 * @param {string[]} options.textMatchStoplist
 * @returns {Cluster[]}
 */
export function buildClusters(
  members,
  {
    synonymIndex,
    related,
    textMatchStoplist,
    serviceHits = [],
    minServiceRepos = 3,
    techniqueWeights = {}
  }
) {
  /** @type {Map<string, Cluster>} */
  const clusters = new Map()

  const createCluster = (key) => {
    const cluster = {
      key,
      name: '',
      kind: 'pattern',
      status: 'gap',
      members: [],
      orgs: [],
      services: [],
      ourComponent: null,
      ourPattern: null,
      relatedOurs: [],
      possiblyRelatedOurs: [],
      aliases: [],
      backlog: [],
      ourIssues: [],
      communityIssues: [],
      quality: null,
      adoptionHits: 0,
      flags: [],
      signals: {},
      score: 0
    }
    clusters.set(key, cluster)
    return cluster
  }

  for (const member of members) {
    const key = synonymIndex.resolve(member.raw)
    const cluster = clusters.get(key) ?? createCluster(key)

    cluster.members.push(member)
    if (member.kind === 'component') cluster.kind = 'component'
    if (member.ours && member.kind === 'component') cluster.ourComponent ??= member
    if (member.ours && member.kind === 'pattern') cluster.ourPattern ??= member
  }

  // Hyphenation-only variants ("check-box" vs "checkbox") merge into the
  // same cluster. Members are clustered first, so this map covers design
  // system and pattern names by the time services are added.
  const squashedKeys = new Map()
  for (const key of clusters.keys()) squashedKeys.set(squash(key), key)

  const resolveKey = (raw) => {
    const key = synonymIndex.resolve(raw)
    return squashedKeys.get(squash(key)) ?? key
  }

  // Service implementations join existing clusters, or create a new one when
  // enough repos have built the same thing. One hit per repo, preferring the
  // strongest evidence (a template over a stylesheet).
  const hitsByKey = new Map()
  for (const hit of serviceHits) {
    const key = resolveKey(hit.raw)
    const byRepo = hitsByKey.get(key) ?? new Map()
    const existing = byRepo.get(hit.repo)
    const weight = (h) => techniqueWeights[h?.technique] ?? 0.4
    if (!existing || weight(hit) > weight(existing)) byRepo.set(hit.repo, hit)
    hitsByKey.set(key, byRepo)
  }

  for (const [key, byRepo] of hitsByKey) {
    let cluster = clusters.get(key)
    if (!cluster) {
      if (byRepo.size < minServiceRepos) continue
      cluster = createCluster(key)
      cluster.kind = 'component'
    }
    cluster.services = [...byRepo.values()]
  }

  const ourKeys = new Set(
    [...clusters.values()]
      .filter((c) => c.ourComponent || c.ourPattern)
      .map((c) => c.key)
  )

  const relatedIndex = new Map(
    Object.entries(related).map(([from, to]) => [
      synonymIndex.resolve(from),
      to.map((name) => synonymIndex.resolve(name))
    ])
  )

  const stoplist = new Set(textMatchStoplist.map((word) => toKey(word)))

  for (const cluster of clusters.values()) {
    cluster.orgs = [
      ...new Set(cluster.members.filter((m) => !m.ours).map((m) => m.org))
    ].sort()

    cluster.name =
      synonymIndex.displayName.get(cluster.key) ??
      cluster.ourComponent?.name ??
      cluster.ourPattern?.name ??
      mostCommon(
        cluster.members.length
          ? cluster.members.map((m) => m.name)
          : cluster.services.map((s) => s.name)
      )

    cluster.relatedOurs = (relatedIndex.get(cluster.key) ?? []).filter(
      (key) => key !== cluster.key && ourKeys.has(key)
    )

    // Our component or pattern name is wholly contained in this one, for
    // example `file-upload` in `multi-file-upload`
    const tokens = new Set(cluster.key.split('-'))
    cluster.possiblyRelatedOurs = [...ourKeys].filter(
      (key) =>
        key !== cluster.key &&
        !cluster.relatedOurs.includes(key) &&
        key.split('-').every((token) => tokens.has(token))
    )

    if (cluster.ourComponent) cluster.status = 'covered'
    else if (cluster.ourPattern) cluster.status = 'pattern'
    else if (cluster.relatedOurs.length) cluster.status = 'partial'
    else cluster.status = 'gap'

    const aliasKeys = new Set([
      cluster.key,
      ...(synonymIndex.aliasesOf.get(cluster.key) ?? []),
      ...cluster.members.map((m) => m.key)
    ])

    // Single words only seen in services (like "user") are too vague to
    // match free text without a design system to back them up
    const serviceOnly = !cluster.members.length

    cluster.aliases = [...aliasKeys]
      .filter((key) => key.length >= 3)
      .sort()
      .map((key) => ({
        key,
        strict: stoplist.has(key) || (serviceOnly && !key.includes('-'))
      }))
  }

  return [...clusters.values()]
}

/**
 * @param {Cluster[]} clusters
 */
export function titleMatchers(clusters) {
  return clusters.map((cluster) => ({
    key: cluster.key,
    matchers: cluster.aliases.map(({ key, strict }) =>
      phraseRegex(key, { strict })
    )
  }))
}

/**
 * Attach discussions or issues to the clusters their titles mention. Bodies
 * are matched too, but only with distinctive phrases (multi-word or 6+
 * letters, and never stoplist words) to keep false positives down.
 *
 * @template {{ title: string, body?: string }} T
 * @param {T[]} items
 * @param {Cluster[]} clusters - Candidate clusters
 * @param {(cluster: Cluster, item: T, via: 'title' | 'body' | 'label') => void} attach
 * @param {(item: T) => string[]} [extraKeys] - Additional cluster keys for an
 *   item, for example from issue labels
 * @returns {T[]} Items that matched nothing
 */
export function matchItems(items, clusters, attach, extraKeys = () => []) {
  const byKey = new Map(clusters.map((c) => [c.key, c]))
  const matchers = titleMatchers(clusters)
  const bodyMatchers = clusters.map((cluster) => ({
    key: cluster.key,
    matchers: cluster.aliases
      .filter(
        ({ key, strict }) => !strict && (key.includes('-') || key.length >= 6)
      )
      .map(({ key }) => phraseRegex(key))
  }))
  const unmatched = []

  for (const item of items) {
    const titleKeys = matchTitle(item.title, matchers)
    const bodyKeys = item.body ? matchTitle(item.body, bodyMatchers) : []
    const labelKeys = extraKeys(item).filter((key) => byKey.has(key))

    const keys = new Set([...titleKeys, ...bodyKeys, ...labelKeys])
    if (!keys.size) unmatched.push(item)

    for (const key of keys) {
      const via = titleKeys.includes(key)
        ? 'title'
        : labelKeys.includes(key)
          ? 'label'
          : 'body'
      attach(byKey.get(key), item, via)
    }
  }

  return unmatched
}

function mostCommon(values) {
  const counts = new Map()
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1)
  return [...counts.entries()].sort(
    (a, b) => b[1] - a[1] || a[0].length - b[0].length
  )[0][0]
}

/**
 * @typedef {object} Cluster
 * @property {string} key
 * @property {string} name
 * @property {'component' | 'pattern'} kind
 * @property {'covered' | 'pattern' | 'partial' | 'gap'} status
 * @property {import('./inventory.mjs').Member[]} members
 * @property {string[]} orgs - Organisations other than ours with an implementation
 * @property {import('./services.mjs').ServiceHit[]} services - One implementation per government service or prototype repo
 * @property {{ renders: object[], weighted: number } | null} quality - axe results from quality-check.mjs
 * @property {string[]} flags - Warnings such as divergent implementations
 * @property {import('./inventory.mjs').Member | null} ourComponent
 * @property {import('./inventory.mjs').Member | null} ourPattern
 * @property {string[]} relatedOurs - Explicitly related clusters we cover
 * @property {string[]} possiblyRelatedOurs - Name-overlap related clusters we cover
 * @property {{ key: string, strict: boolean }[]} aliases - Keys used to match issue and discussion titles
 * @property {object[]} backlog
 * @property {object[]} ourIssues
 * @property {object[]} communityIssues
 * @property {number} adoptionHits
 * @property {Record<string, number>} signals
 * @property {number} score
 */
