/**
 * Count which government repos use each community component's CSS classes.
 *
 * Repos are filtered to those depending on a community npm package (found by
 * reading their package.json files), then their view and template files are
 * searched for prefixed class names like `moj-timeline`. Everything is cached.
 */

const PACKAGE_JSON = /(?:^|\/)package\.json$/
const PACKAGE_MANIFEST =
  /(?:^|\/)(?:package\.json|npm-shrinkwrap\.json|Gemfile(?:\.lock)?|[^/]+\.gemspec|pyproject\.toml|setup\.(?:py|cfg)|Pipfile(?:\.lock)?|requirements(?:[-_.][^/]*)?\.txt|go\.mod|Cargo\.toml|composer\.json|pom\.xml|build\.gradle(?:\.kts)?|mix\.exs|rebar\.config|pubspec\.yaml|Package\.swift|deno\.jsonc?|DESCRIPTION|cabal\.project|stack\.yaml|[^/]+\.cabal|deps\.edn|project\.clj|build\.sbt|shard\.yml|[^/]+\.(?:cs|fs|vb)proj)$/i
const MANIFEST_NOISE_DIR =
  /(^|\/)(node_modules|vendor|dist|build|target|coverage|\.git|\.cache|\.venv|venv|__pycache__)(\/|$)/i
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
 * Find a dependency manifest in a repository tree, ignoring vendored and
 * generated directories.
 *
 * @param {{ path: string }[]} files
 * @returns {string | undefined}
 */
export function packageManifest(files) {
  return files
    .map((file) => file.path)
    .filter(
      (path) =>
        PACKAGE_MANIFEST.test(path) && !MANIFEST_NOISE_DIR.test(path)
    )
    .sort((a, b) => a.localeCompare(b))[0]
}

/**
 * Whether a repository name indicates prototype work.
 *
 * @param {string} repo
 */
export function isPrototypeRepo(repo) {
  return repo.toLowerCase().includes('prototype')
}

/**
 * Summarise saved class usage using only repositories with verified local
 * tree evidence. Prototype repositories are tracked separately.
 *
 * @param {Record<string, { repoList: string[] }>} classUsage
 * @param {Record<string, { eligible: boolean, isPrototype?: boolean, manifest?: string }>} repoEvidence
 * @param {number} prototypeWeight
 */
export function summariseClassUsage(classUsage, repoEvidence, prototypeWeight = 0.25) {
  if (!Number.isFinite(prototypeWeight) || prototypeWeight < 0 || prototypeWeight > 1) {
    throw new RangeError('prototypeWeight must be between 0 and 1')
  }

  const classes = {}
  for (const [className, usage] of Object.entries(classUsage)) {
    const productionRepos = new Set()
    const prototypeRepos = new Set()

    for (const repo of usage.repoList) {
      const evidence = repoEvidence[repo]
      if (!evidence?.eligible) continue
      if (evidence.isPrototype) prototypeRepos.add(repo)
      else productionRepos.add(repo)
    }

    const breakdown = (repos) => {
      const repoList = [...repos].sort()
      const orgsByName = new Map()
      for (const repo of repoList) {
        const org = repo.split('/')[0]
        if (!orgsByName.has(org.toLowerCase())) {
          orgsByName.set(org.toLowerCase(), org)
        }
      }
      const orgList = [...orgsByName.values()].sort((a, b) => a.localeCompare(b))
      return {
        repos: repoList.length,
        orgs: orgList.length,
        repoList,
        orgList
      }
    }

    const production = breakdown(productionRepos)
    const prototypes = breakdown(prototypeRepos)
    const weightedUsage =
      production.repos +
      production.orgs +
      prototypeWeight * (prototypes.repos + prototypes.orgs)

    if (weightedUsage) {
      classes[className] = { production, prototypes, weightedUsage }
    }
  }

  return classes
}

/**
 * Aggregate filtered class coverage without double-counting repos or owners
 * that use more than one implementation class in the same cluster.
 *
 * @param {{ ours: boolean, prefix?: string, kind: string, name: string }[]} members
 * @param {Record<string, { production: { repoList: string[], orgList: string[] }, prototypes: { repoList: string[], orgList: string[] }, weightedUsage: number }>} classes
 * @param {number} prototypeWeight
 */
export function aggregateClassUsage(members, classes, prototypeWeight) {
  const productionRepos = new Set()
  const productionOrgs = new Set()
  const prototypeRepos = new Set()
  const prototypeOrgs = new Set()
  const memberUsage = new Map()
  let matched = 0

  for (const member of members) {
    if (member.ours || !member.prefix || member.kind !== 'component') continue
    const usage = classes[`${member.prefix}${member.name}`]
    if (!usage) continue

    memberUsage.set(member, usage.weightedUsage)
    matched++
    for (const repo of usage.production.repoList) productionRepos.add(repo.toLowerCase())
    for (const org of usage.production.orgList) productionOrgs.add(org.toLowerCase())
    for (const repo of usage.prototypes.repoList) prototypeRepos.add(repo.toLowerCase())
    for (const org of usage.prototypes.orgList) prototypeOrgs.add(org.toLowerCase())
  }

  return {
    matched,
    memberUsage,
    weightedUsage:
      productionRepos.size +
      productionOrgs.size +
      prototypeWeight * (prototypeRepos.size + prototypeOrgs.size)
  }
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
