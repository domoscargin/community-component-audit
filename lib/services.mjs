import { normalise } from './names.mjs'

/**
 * Paths that are vendored, generated, test or tooling code rather than a
 * service's own UI components
 */
const EXCLUDE_PATH = new RegExp(
  [
    '(^|/)(node_modules|vendor|bower_components|dist|build|public|coverage|tmp|\\.git|__tests__|__snapshots__|tests?|specs?|stories|\\.?storybook|fixtures|cypress|playwright)(/|$)',
    'govuk[-_]frontend',
    'govuk_frontend_toolkit',
    'govuk_publishing_components',
    'govuk-prototype-kit-\\d',
    'nhsuk-frontend',
    'moj-frontend',
    'hmrc-frontend',
    // Vendored copies of GOV.UK Frontend components (directory per component)
    '(^|/)govuk/components/[^/]+/',
    '\\.(test|spec|stories|d)\\.\\w+$'
  ].join('|'),
  'i'
)

/**
 * How to recognise a UI component definition from a file path. Rules are
 * tried in order and the first capture group is the component name.
 */
export const serviceRules = [
  {
    technique: 'rails-view-component',
    pattern: /(?:^|\/)app\/components\/(?:[\w-]+\/)*([\w-]+?)_component\.rb$/
  },
  {
    technique: 'nunjucks-component',
    pattern: /(?:^|\/)components\/([\w-]+)\/(?:macro|template)\.(?:njk|html|jinja2?|j2)$/
  },
  {
    technique: 'template-partial',
    pattern: /(?:^|\/)components\/_?([\w-]+)\.(?:njk|html|jinja2?|j2|hbs|twig|liquid|html\.erb|erb)$/
  },
  {
    technique: 'ui-framework',
    pattern: /(?:^|\/)components\/(?:[\w-]+\/)*([\w-]+)\/index\.(?:jsx|tsx|vue|svelte)$/
  },
  {
    technique: 'ui-framework',
    pattern: /(?:^|\/)components\/(?:[\w-]+\/)*([\w-]+)\.(?:jsx|tsx|vue|svelte)$/
  },
  {
    technique: 'script',
    pattern: /(?:^|\/)(?:javascripts?|js|scripts)\/components\/([\w-]+)\.(?:m?js|ts)$/
  },
  {
    // File named after its component directory, for example
    // src/das/javascript/components/cookieBanner/_cookieBanner.js
    technique: 'script',
    pattern: /(?:^|\/)components\/([\w-]+)\/_?\1\.(?:m?js|ts)$/
  },
  {
    technique: 'styles',
    pattern: /(?:^|\/)components\/_?([\w-]+)\.(?:scss|sass|css)$/
  },
  {
    technique: 'styles',
    pattern: /(?:^|\/)components\/([\w-]+)\/_?(?:index|\1)\.(?:scss|sass|css)$/
  }
]

/**
 * Names that describe structure or tooling rather than a component
 */
export const serviceNameExclude = new Set(
  [
    'all',
    'analytics',
    'aside',
    'article',
    'bar',
    'columns',
    'contact',
    'content',
    'debug',
    'events',
    'media',
    'preview',
    'view',
    'cookie-function',
    'cookies',
    'guidance',
    'home',
    'entity',
    'form-field',
    'form-group',
    'grid',
    'help',
    'html',
    'item',
    'option',
    'result',
    'section',
    'task',
    'text',
    'type',
    'app',
    'application',
    'auth',
    'base',
    'block',
    'common',
    'component',
    'container',
    'core',
    'demo',
    'element',
    'example',
    'font',
    'form',
    'generic',
    'global',
    'govuk',
    'helper',
    'include',
    'index',
    'layout',
    'lib',
    'macro',
    'main',
    'misc',
    'mixin',
    'module',
    'object',
    'override',
    'page',
    'partial',
    'print',
    'readme',
    'setting',
    'shared',
    'style',
    'template',
    'test',
    'tool',
    'typography',
    'ui',
    'util',
    'variable',
    'vendor',
    'wrapper'
  ].flatMap((name) => [name, `${name}s`])
)

/**
 * Find component definitions in a service repo's tree
 *
 * @param {{ path: string, sha: string }[]} nodes - Git tree entries
 * @returns {{ raw: string, name: string, path: string, sha: string, technique: string }[]}
 *   One hit per component name
 */
export function scanServiceTree(nodes) {
  const found = new Map()

  for (const { path, sha } of nodes) {
    if (EXCLUDE_PATH.test(path)) continue

    for (const { technique, pattern } of serviceRules) {
      const match = pattern.exec(path)
      if (!match?.[1]) continue

      const raw = match[1]
      const name = normalise(raw)
      if (name.length < 3 || serviceNameExclude.has(name)) break
      if (!found.has(name)) found.set(name, { raw, name, path, sha, technique })
      break
    }
  }

  return [...found.values()]
}

/**
 * Drop hits whose file content is identical across many repos. These are
 * template or kit boilerplate (such as an old Prototype Kit cookie banner)
 * rather than separate implementations.
 *
 * @template {{ sha: string, repo: string }} T
 * @param {T[]} hits
 * @param {number} minRepos
 * @returns {{ kept: T[], boilerplate: number }}
 */
export function dropBoilerplate(hits, minRepos) {
  const reposBySha = new Map()
  for (const hit of hits) {
    const repos = reposBySha.get(hit.sha) ?? new Set()
    repos.add(hit.repo)
    reposBySha.set(hit.sha, repos)
  }

  const kept = hits.filter((hit) => reposBySha.get(hit.sha).size < minRepos)
  return { kept, boilerplate: hits.length - kept.length }
}

/**
 * @typedef {object} ServiceHit
 * @property {string} repo - owner/name
 * @property {string} owner
 * @property {boolean} isPrototype
 * @property {string} raw
 * @property {string} name
 * @property {string} path
 * @property {string} sha
 * @property {string} technique
 * @property {string} url
 * @property {string} [pushedAt] - When the repo was last pushed to
 * @property {boolean | null} [extendsGovuk] - Whether the file builds on GOV.UK Frontend
 */
