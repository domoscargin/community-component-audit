/**
 * Count which government repos use each community component's CSS classes.
 *
 * Repos are filtered to those depending on a community npm package (found by
 * reading their package.json files), then their view and template files are
 * searched for prefixed class names like `moj-timeline`. Everything is cached.
 */

const PACKAGE_JSON = /(?:^|\/)package\.json$/
const VIEW_FILE =
  /\.(njk|html?|erb|twig|mustache|hbs|vue|svelte|jsx|tsx|cshtml|php|liquid|jinja2?|j2)$/i
const NOISE_DIR =
  /(^|\/)(node_modules|vendor|dist|build|public|coverage|__tests__|__snapshots__|tests?|specs?|fixtures|\.?storybook)(\/|$)/i

const MAX_VIEWS_PER_REPO = 25

/**
 * Files worth searching in a repo's tree
 *
 * @param {{ path: string, sha: string }[]} files
 */
export function viewFiles(files) {
  const views = files.filter(
    (f) => VIEW_FILE.test(f.path) && !NOISE_DIR.test(f.path)
  )

  // Prefer view and template directories over other matches
  const score = (path) =>
    /(^|\/)(views?|templates?|layouts?|pages?)(\/|$)/i.test(path) ? 0 : 1

  return views
    .sort((a, b) => score(a.path) - score(b.path))
    .slice(0, MAX_VIEWS_PER_REPO)
}

/**
 * The npm packages a repo depends on, from its package.json files
 *
 * @param {{ path: string, sha: string }[]} files
 * @param {(repo: string, sha: string) => Promise<string>} readBlob
 * @param {string} repo
 * @returns {Promise<Set<string>>}
 */
export async function repoPackages(files, readBlob, repo) {
  const manifests = files.filter(
    (f) => PACKAGE_JSON.test(f.path) && !NOISE_DIR.test(f.path)
  )
  const packages = new Set()

  for (const manifest of manifests.slice(0, 5)) {
    try {
      const pkg = JSON.parse(await readBlob(repo, manifest.sha))
      for (const name of Object.keys({
        ...pkg.dependencies,
        ...pkg.devDependencies
      })) {
        packages.add(name)
      }
    } catch {}
  }

  return packages
}

/**
 * Build one regex per class prefix, for example /(moj-[a-z0-9-]+)/g
 *
 * @param {string[]} prefixes
 */
export function prefixRegexes(prefixes) {
  return prefixes.map(
    (prefix) => new RegExp(`(?<![\\w-])(${escapeRe(prefix)}[a-z0-9][a-z0-9_-]*)`, 'gi')
  )
}

/**
 * @param {object} options
 * @param {string[]} options.classNames - Class names to look for, for example moj-timeline
 * @param {string[]} options.prefixes - Class prefixes to extract from file content
 * @param {string[]} options.packageNames - Community npm packages that mark a repo as a user
 * @param {{ repo: string }[]} options.repos - Repos to search
 * @param {ReturnType<import('./github.mjs').createClient>} options.github
 * @param {number} [options.concurrency]
 * @param {(done: number, total: number) => void} [options.onProgress]
 * @returns {Promise<Record<string, { repos: number, repoList: string[] }>>}
 */
export async function findClassUsage(
  { classNames, prefixes, packageNames, repos, github, concurrency = 8, onProgress }
) {
  // Compare in a normalised form: lowercase with underscores as hyphens,
  // so the Scottish Government's ds_card matches its `ds_` prefix
  const normaliseClass = (name) => name.toLowerCase().replace(/_/g, '-')
  const wanted = new Map(classNames.map((name) => [normaliseClass(name), name]))
  const communityPackages = new Set(packageNames)
  const matchers = prefixRegexes(prefixes)
  /** @type {Map<string, Set<string>>} */
  const usage = new Map(classNames.map((name) => [name, new Set()]))

  let done = 0
  let next = 0

  async function worker() {
    while (next < repos.length) {
      const { repo } = repos[next++]
      try {
        const { files } = await github.files(repo)
        const packages = await repoPackages(files, github.blob, repo)
        if (![...packages].some((p) => communityPackages.has(p))) continue

        for (const file of viewFiles(files)) {
          const content = await github.blob(repo, file.sha)
          for (const matcher of matchers) {
            matcher.lastIndex = 0
            for (const match of content.matchAll(matcher)) {
              const original = wanted.get(normaliseClass(match[1]))
              if (original) usage.get(original)?.add(repo)
            }
          }
        }
      } catch {}

      if (++done % 250 === 0) onProgress?.(done, repos.length)
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker))
  onProgress?.(repos.length, repos.length)

  return Object.fromEntries(
    [...usage]
      .filter(([, set]) => set.size > 0)
      .map(([name, set]) => [name, { repos: set.size, repoList: [...set].sort() }])
  )
}

function escapeRe(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
