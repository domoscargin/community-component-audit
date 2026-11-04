import { normalise, toKey } from './names.mjs'

/**
 * Extract components and patterns from a repo's file tree
 *
 * @param {import('../sources.mjs').Source} source
 * @param {string[]} paths - Paths from the git tree
 * @param {object} options
 * @param {string} options.ref - Branch used for links
 * @param {string[]} [options.globalExclude]
 * @param {string} [options.ourOrg] - Sources from this org are always ours
 * @returns {Member[]}
 */
export function extractMembers(source, paths, { ref, globalExclude = [], ourOrg }) {
  const candidates = []

  for (const rule of source.rules) {
    for (const path of paths) {
      const match = rule.pattern.exec(path)
      if (!match?.[1]) continue

      const end = match.index + match[0].length
      const rest = path.slice(end)
      const isDirectory =
        match[0].endsWith('/') || rest === '' || rest.startsWith('/')
      const linkPath = isDirectory ? path.slice(0, end).replace(/\/$/, '') : path

      candidates.push({
        kind: rule.kind,
        raw: match[1],
        url: `https://github.com/${source.repo}/${isDirectory ? 'tree' : 'blob'}/${ref}/${linkPath}`,
        isDirectory
      })
    }
  }

  return collect(source, candidates, { globalExclude, ourOrg })
}

/**
 * Extract components and patterns from links on a documentation site's
 * index pages
 *
 * @param {import('../sources.mjs').Source} source
 * @param {Map<string, string[]>} linksByPage - Rule `page` -> same-site link pathnames
 * @param {object} options
 * @param {string[]} [options.globalExclude]
 * @param {string} [options.ourOrg]
 * @returns {Member[]}
 */
export function extractSiteMembers(source, linksByPage, { globalExclude = [], ourOrg }) {
  const candidates = []

  for (const rule of source.rules) {
    for (const path of linksByPage.get(rule.page) ?? []) {
      const match = rule.pattern.exec(path)
      if (!match?.[1]) continue

      candidates.push({
        kind: rule.kind,
        raw: match[1],
        url: new URL(path, source.site).href,
        isDirectory: true
      })
    }
  }

  return collect(source, candidates, { globalExclude, ourOrg })
}

/**
 * Pathnames of links in an HTML page that stay on the same site. Links to
 * other sites (like the GOV.UK Design System) are ignored so a community site
 * that links to our components doesn't count them as its own.
 *
 * @param {string} html
 * @param {string} pageUrl
 */
export function extractLinks(html, pageUrl) {
  const { origin } = new URL(pageUrl)
  const paths = new Set()

  for (const [, href] of html.matchAll(/href\s*=\s*["']([^"'#]+)["']/gi)) {
    try {
      const url = new URL(href, pageUrl)
      if (url.origin === origin) paths.add(url.pathname)
    } catch {}
  }

  return [...paths]
}

/**
 * @param {import('../sources.mjs').Source} source
 * @param {{ kind: 'component' | 'pattern', raw: string, url: string, isDirectory: boolean }[]} candidates
 * @param {object} options
 * @param {string[]} options.globalExclude
 * @param {string} [options.ourOrg]
 * @returns {Member[]}
 */
function collect(source, candidates, { globalExclude, ourOrg }) {
  const exclude = new Set(
    [...globalExclude, ...(source.exclude ?? [])].map((name) => normalise(name))
  )
  const ours = Boolean(source.ours) || (!!ourOrg && source.org === ourOrg)

  /** @type {Map<string, Member>} */
  const found = new Map()

  for (const { kind, raw, url, isDirectory } of candidates) {
    const name = normalise(raw)
    if (!name || raw.startsWith('_') || exclude.has(name)) continue

    const key = toKey(raw)
    const id = `${kind}:${key}`

    const existing = found.get(id)
    // Prefer directory links over individual files
    if (existing && (existing.isDirectory || !isDirectory)) continue

    found.set(id, {
      sourceId: source.id,
      org: source.org,
      repo: source.repo,
      site: source.site,
      ours,
      prefix: source.prefix,
      kind,
      raw,
      name,
      key,
      url,
      isDirectory
    })
  }

  return [...found.values()].sort((a, b) => a.key.localeCompare(b.key))
}

/**
 * @typedef {object} Member
 * @property {string} sourceId
 * @property {string} org
 * @property {string} [repo]
 * @property {string} [site]
 * @property {boolean} ours
 * @property {string} [prefix]
 * @property {'component' | 'pattern'} kind
 * @property {string} raw - Name as found in the repo
 * @property {string} name - Normalised name
 * @property {string} key - Comparison key
 * @property {string} url
 * @property {boolean} isDirectory
 * @property {number} [adoptionHits]
 */
