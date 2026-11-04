/**
 * Lightweight structural fingerprints of component templates, used to spot
 * same-name components that are actually different things. Heuristic only.
 */

const TEMPLATE_CANDIDATES = [
  'template.njk',
  'macro.njk',
  'template.html',
  'index.njk',
  'index.html'
]

/**
 * Ordered HTML tags, ARIA roles and class prefixes in a template
 *
 * @param {string} source
 */
export function fingerprint(source) {
  const tags = [...source.matchAll(/<([a-z][a-z0-9]*)\b/gi)].map((m) =>
    m[1].toLowerCase()
  )
  const roles = new Set(
    [...source.matchAll(/role=["']([\w-]+)["']/gi)].map((m) => m[1])
  )
  const classPrefixes = new Set(
    [...source.matchAll(/class="([^"]+)"/g)]
      .flatMap((m) => m[1].split(/\s+/))
      .map((cls) => /^([a-z]+)[-_]/i.exec(cls)?.[1])
      .filter(Boolean)
  )

  return { tags, roles, classPrefixes }
}

/**
 * Jaccard similarity (0–1) over the tag multiset and ARIA roles. Class
 * prefixes are namespaced per organisation, so they're captured in the
 * fingerprint but not compared.
 */
export function similarity(a, b) {
  const score = (setA, setB) => {
    const union = new Set([...setA, ...setB])
    if (!union.size) return 1
    let overlap = 0
    for (const item of setA) if (setB.has(item)) overlap++
    return overlap / union.size
  }

  return (
    0.6 * score(new Set(a.tags), new Set(b.tags)) + 0.4 * score(a.roles, b.roles)
  )
}

/**
 * Find the most representative template file for a component directory
 *
 * @param {{ path: string, sha: string }[]} files - Repo tree entries
 * @param {string} dir - Component directory prefix, for example src/moj/components/timeline
 */
export function templateFile(files, dir) {
  const inDir = files.filter(
    (f) => f.path.startsWith(`${dir}/`) && !f.path.slice(dir.length + 1).includes('/')
  )

  for (const name of TEMPLATE_CANDIDATES) {
    const hit = inDir.find((f) => f.path === `${dir}/${name}`)
    if (hit) return hit
  }

  return (
    inDir.find((f) => /\.(njk|html)$/.test(f.path)) ??
    inDir.find((f) => /\.(tsx|jsx)$/.test(f.path))
  )
}

/**
 * The directory a member's URL points at (repo sources only)
 *
 * @param {import('./inventory.mjs').Member} member
 * @returns {string | null}
 */
export function memberDir(member) {
  const match = /\/(?:tree|blob)\/[^/]+\/(.+)$/.exec(member.url)
  return match?.[1] ?? null
}

/**
 * Fetch templates for a cluster's repo members, compare them pairwise and
 * flag the cluster when implementations disagree structurally
 *
 * @param {import('./cluster.mjs').Cluster[]} clusters
 * @param {object} options
 * @param {ReturnType<import('./github.mjs').createClient>} options.github
 * @param {import('../sources.mjs').Source[]} options.sources
 * @returns {Promise<Record<string, string>>} Cluster key -> flag text
 */
export async function annotateStructure(clusters, { github, sources }) {
  const refByRepo = new Map()
  for (const source of sources) {
    if (source.repo) refByRepo.set(source.repo, source.ref ?? 'HEAD')
  }

  /** @type {Record<string, string>} */
  const flags = {}

  for (const cluster of clusters) {
    const fingerprints = []

    for (const member of cluster.members.filter((m) => m.repo)) {
      const dir = memberDir(member)
      if (!dir || !member.isDirectory) continue

      try {
        const { files } = await github.files(member.repo, refByRepo.get(member.repo))
        const template = templateFile(files, dir)
        if (!template) continue
        const source = await github.blob(member.repo, template.sha)
        fingerprints.push({ member, fp: fingerprint(source) })
      } catch {}
    }

    if (fingerprints.length < 2) continue

    // Average pairwise similarity; low agreement suggests the same name is
    // being used for different things
    let total = 0
    let pairs = 0
    for (let i = 0; i < fingerprints.length; i++) {
      for (let j = i + 1; j < fingerprints.length; j++) {
        total += similarity(fingerprints[i].fp, fingerprints[j].fp)
        pairs++
      }
    }

    const average = total / pairs
    if (average < 0.35) {
      flags[cluster.key] =
        `Implementations differ structurally (${Math.round(average * 100)}% similar) — check these are the same component`
    }
  }

  return flags
}
