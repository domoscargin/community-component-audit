const DAY = 24 * 60 * 60 * 1000
const YEAR = 365.25 * DAY

/**
 * Freshness multiplier for a repo or source by its last push date. Full
 * weight while active, decaying linearly to a floor. Unknown dates keep
 * full weight.
 *
 * @param {string | undefined} pushedAt
 * @param {{ fullYears: number, floorYears: number, floor: number }} config
 */
export function freshnessWeight(pushedAt, { fullYears, floorYears, floor }) {
  const pushed = Date.parse(pushedAt ?? '')
  if (!pushed) return 1

  const ageYears = (Date.now() - pushed) / YEAR
  if (ageYears <= fullYears) return 1
  if (ageYears >= floorYears) return floor
  return 1 - ((ageYears - fullYears) / (floorYears - fullYears)) * (1 - floor)
}

/**
 * How much a service hit counts towards the `services` signal: technique
 * weight, halved for prototypes, decayed by repo freshness
 *
 * @param {import('./services.mjs').ServiceHit} hit
 * @param {object} options
 * @param {Record<string, number>} options.techniqueWeights
 * @param {number} options.prototypeWeight
 * @param {{ fullYears: number, floorYears: number, floor: number }} options.freshness
 */
export function serviceHitWeight(hit, { techniqueWeights, prototypeWeight, freshness }) {
  const technique = techniqueWeights[hit.technique] ?? 0.4
  const prototype = hit.isPrototype ? prototypeWeight : 1
  return technique * prototype * freshnessWeight(hit.pushedAt, freshness)
}

/**
 * How much an organisation's implementation counts towards `prevalence`:
 * halved when all of its sources are stale, scaled 0.5–1 by its packages'
 * npm downloads relative to the most-downloaded community package
 *
 * @param {object} options
 * @param {string | undefined} options.orgPushedAt - Most recent push across the org's sources
 * @param {number | undefined} options.downloads - Monthly npm downloads across the org's packages
 * @param {number} options.maxDownloads
 * @param {number} options.staleMonths
 */
export function prevalenceWeight({ orgPushedAt, downloads, maxDownloads, staleMonths }) {
  const pushed = Date.parse(orgPushedAt ?? '')
  const stale = pushed && Date.now() - pushed > staleMonths * 30.5 * DAY
  const freshness = stale ? 0.5 : 1

  const usage =
    downloads == null || !maxDownloads
      ? 1
      : 0.5 + 0.5 * (Math.log1p(downloads) / Math.log1p(maxDownloads))

  return freshness * usage
}

/**
 * Matches found only in a body (rather than a title or label) count less
 */
export const bodyMatchWeight = 0.5

/**
 * Raw (un-normalised) signal values for a cluster
 *
 * @param {import('./cluster.mjs').Cluster} cluster
 * @param {object} [options]
 * @param {(cluster: import('./cluster.mjs').Cluster) => number} [options.prevalenceRaw]
 *   Overrides the prevalence raw value (weighted org count)
 * @param {Record<string, number>} [options.techniqueWeights]
 * @param {number} [options.prototypeWeight]
 * @param {{ fullYears: number, floorYears: number, floor: number }} [options.freshness]
 */
export function rawSignals(
  cluster,
  { prevalenceRaw, techniqueWeights = {}, prototypeWeight = 0.5, freshness } = {}
) {
  const services = cluster.services.reduce(
    (sum, hit) =>
      sum +
      (freshness
        ? serviceHitWeight(hit, { techniqueWeights, prototypeWeight, freshness })
        : hit.isPrototype
          ? prototypeWeight
          : 1),
    0
  )

  return {
    prevalence: prevalenceRaw ? prevalenceRaw(cluster) : cluster.orgs.length,
    services,
    backlog: cluster.backlog.reduce(
      (sum, d) =>
        sum + (d.via === 'body' ? bodyMatchWeight : 1) * (1 + d.upvotes + d.reactions + d.comments * 0.5),
      0
    ),
    ourIssues: cluster.ourIssues.reduce(
      (sum, i) =>
        sum + (i.via === 'body' ? bodyMatchWeight : 1) * (1 + i.reactions + i.comments * 0.25),
      0
    ),
    communityIssues: cluster.communityIssues.reduce(
      (sum, i) =>
        sum + (i.via === 'body' ? bodyMatchWeight : 1) * (i.accessibility ? 2 : 1),
      0
    ),
    quality: cluster.quality?.weighted ?? 0,
    adoption: cluster.adoptionHits
  }
}

/**
 * Score clusters 0–100 in place and return them sorted by score
 *
 * @param {import('./cluster.mjs').Cluster[]} clusters
 * @param {object} options
 * @param {Record<string, number>} options.weights
 * @param {Record<string, number>} options.gapValues
 * @param {boolean} options.adoption - Whether adoption data was collected
 * @param {boolean} [options.services] - Whether service repos were scanned
 * @param {boolean} [options.quality] - Whether implementations were rendered and checked
 * @param {(cluster: import('./cluster.mjs').Cluster) => number} [options.prevalenceRaw]
 * @param {Record<string, number>} [options.techniqueWeights]
 * @param {number} [options.prototypeWeight]
 * @param {object} [options.freshness]
 */
export function scoreClusters(
  clusters,
  {
    weights,
    gapValues,
    adoption,
    services = true,
    quality = false,
    prevalenceRaw,
    techniqueWeights,
    prototypeWeight = 0.5,
    freshness
  }
) {
  const enabled = Object.fromEntries(
    Object.entries(weights).filter(
      ([name]) =>
        (adoption || name !== 'adoption') &&
        (services || name !== 'services') &&
        (quality || name !== 'quality')
    )
  )
  const totalWeight = Object.values(enabled).reduce((a, b) => a + b, 0)

  const rawOptions = { prevalenceRaw, techniqueWeights, prototypeWeight, freshness }
  const raws = clusters.map((c) => rawSignals(c, rawOptions))
  const max = {}
  for (const raw of raws) {
    for (const [name, value] of Object.entries(raw)) {
      max[name] = Math.max(max[name] ?? 0, value)
    }
  }

  clusters.forEach((cluster, i) => {
    const raw = raws[i]
    const signals = {
      prevalence: max.prevalence ? raw.prevalence / max.prevalence : 0,
      services: logScale(raw.services, max.services),
      backlog: logScale(raw.backlog, max.backlog),
      gap: gapValues[cluster.status],
      ourIssues: logScale(raw.ourIssues, max.ourIssues),
      communityIssues: logScale(raw.communityIssues, max.communityIssues),
      quality: logScale(raw.quality, max.quality),
      adoption: logScale(raw.adoption, max.adoption)
    }

    let score = 0
    for (const [name, weight] of Object.entries(enabled)) {
      score += weight * (signals[name] ?? 0)
    }

    cluster.signals = Object.fromEntries(
      Object.entries(signals).map(([name, value]) => [name, round(value, 3)])
    )
    cluster.score = totalWeight ? round((score / totalWeight) * 100, 1) : 0
  })

  return [...clusters].sort(
    (a, b) => b.score - a.score || b.orgs.length - a.orgs.length || a.key.localeCompare(b.key)
  )
}

function logScale(value, max) {
  return max ? Math.log1p(value) / Math.log1p(max) : 0
}

function round(value, places) {
  const factor = 10 ** places
  return Math.round(value * factor) / factor
}
