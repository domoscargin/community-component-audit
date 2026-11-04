/**
 * Render community components with Nunjucks and check them with axe-core.
 * Used by quality-check.mjs.
 */
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'

import { templateFile } from './structure.mjs'

const IMPACT_WEIGHTS = { critical: 3, serious: 2, moderate: 1, minor: 0.5 }
const MAX_COMPONENT_FILES = 40

/**
 * Fetch a component directory's files into a temporary tree so Nunjucks can
 * resolve its imports
 *
 * @param {object} options
 * @param {ReturnType<import('./github.mjs').createClient>} options.github
 * @param {import('./inventory.mjs').Member} options.member
 * @param {string} options.dir - Component directory in the repo
 * @param {string} options.root - Temporary directory to populate
 * @returns {Promise<{ template: string, templatePath: string, repoRoot: string, paramsList: object[] } | null>}
 */
export async function fetchComponent({ github, member, dir, root }) {
  const { files } = await github.files(member.repo)
  const inDir = files.filter((f) => f.path.startsWith(`${dir}/`))
  if (!inDir.length) return null

  const template = templateFile(files, dir)
  if (!template) return null

  const repoRoot = join(root, member.repo.replace('/', '__'))
  let templateContent = null

  for (const file of inDir.slice(0, MAX_COMPONENT_FILES)) {
    if (!/\.(njk|html|md|ya?ml|json)$/.test(file.path)) continue
    const content = await github.blob(member.repo, file.sha)
    if (file.sha === template.sha) templateContent = content

    const target = join(repoRoot, file.path)
    await mkdir(dirname(target), { recursive: true })
    await writeFile(target, content)
  }

  if (!templateContent) return null

  return {
    template: templateContent,
    templatePath: join(repoRoot, template.path),
    repoRoot,
    paramsList: await exampleParams(inDir, repoRoot)
  }
}

/**
 * Example parameters from YAML fixture files, in the shapes used by
 * govuk-frontend (`fixtures[].options`), MOJ (`examples[].data`) and others
 *
 * @param {{ path: string }[]} files
 * @param {string} repoRoot
 */
async function exampleParams(files, repoRoot) {
  const { readFile } = await import('node:fs/promises')
  const { parse } = await import('yaml')
  const paramsList = [{}]

  for (const file of files) {
    if (!/\.ya?ml$/.test(file.path)) continue
    let doc
    try {
      doc = parse(await readFile(join(repoRoot, file.path), 'utf8'))
    } catch {
      continue
    }

    const examples = doc?.fixtures ?? doc?.examples ?? []
    for (const example of Array.isArray(examples) ? examples : []) {
      const params = example?.options ?? example?.data ?? example?.params
      if (params && typeof params === 'object' && !example?.hidden) {
        paramsList.push(params)
      }
    }
  }

  return paramsList.slice(0, 10)
}

/**
 * Render a template with Nunjucks, with search paths covering the
 * component's own source tree and GOV.UK Frontend
 *
 * @param {object} options
 * @param {string} options.template - Template source
 * @param {string} options.templatePath - Used to resolve relative imports
 * @param {object} options.params
 * @param {string} options.repoRoot - Temporary tree for this repo
 * @param {string} options.govukFrontendDir - Path to govuk-frontend's src directory
 */
export async function renderTemplate({ template, templatePath, params, repoRoot, govukFrontendDir }) {
  const nunjucks = await import('nunjucks')

  const searchPaths = [
    dirname(templatePath),
    repoRoot,
    join(repoRoot, 'src'),
    join(repoRoot, 'src', 'moj'),
    join(repoRoot, 'src', 'hmrc'),
    join(repoRoot, 'packages'),
    govukFrontendDir
  ].filter(Boolean)

  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(searchPaths, { noCache: true })
  )

  return env.renderString(template, { params }, { path: templatePath })
}

/**
 * Run axe-core against rendered HTML in jsdom
 *
 * @param {string} html
 * @returns {Promise<{ violations: object[], weighted: number }>}
 */
export async function axeCheck(html) {
  const { JSDOM } = await import('jsdom')
  const axe = (await import('axe-core')).default

  const dom = new JSDOM(`<!doctype html><html lang="en"><head><title>t</title></head><body>${html}</body></html>`)
  const { window } = dom

  const globals = ['window', 'document', 'Node', 'Element', 'HTMLElement', 'NodeList', 'DocumentFragment']
  const previous = {}
  for (const name of globals) {
    previous[name] = globalThis[name]
    globalThis[name] = window[name]
  }
  globalThis.getComputedStyle = window.getComputedStyle.bind(window)

  try {
    const results = await axe.run(window.document.body, {
      resultTypes: ['violations'],
      rules: { 'color-contrast': { enabled: false } } // needs real layout
    })

    const weighted = results.violations.reduce(
      (sum, v) => sum + (IMPACT_WEIGHTS[v.impact] ?? 0.5),
      0
    )

    return {
      weighted,
      violations: results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.length
      }))
    }
  } finally {
    for (const name of globals) {
      if (previous[name] === undefined) delete globalThis[name]
      else globalThis[name] = previous[name]
    }
    window.close()
  }
}

/**
 * Render and check one cluster's community implementations
 *
 * @param {import('./cluster.mjs').Cluster} cluster
 * @param {object} options
 * @param {ReturnType<import('./github.mjs').createClient>} options.github
 * @param {string} options.govukFrontendDir
 * @param {string} options.root - Temporary directory
 * @param {number} [options.maxMembers]
 */
export async function checkCluster(cluster, { github, govukFrontendDir, root, maxMembers = 3 }) {
  const renders = []

  const members = cluster.members
    .filter((m) => !m.ours && m.repo && m.isDirectory)
    .slice(0, maxMembers)

  for (const member of members) {
    const dir = /\/tree\/[^/]+\/(.+)$/.exec(member.url)?.[1]
    if (!dir) continue

    try {
      const component = await fetchComponent({
        github,
        member,
        dir,
        root
      })
      if (!component) {
        renders.push({ sourceId: member.sourceId, name: member.raw, error: 'no template found', weighted: 0, violations: [] })
        continue
      }

      let worst = { weighted: 0, violations: [], params: null }
      let failed = 0
      for (const params of component.paramsList) {
        try {
          const html = await renderTemplate({
            template: component.template,
            templatePath: component.templatePath,
            params,
            repoRoot: component.repoRoot,
            govukFrontendDir
          })
          const result = await axeCheck(html)
          if (result.weighted > worst.weighted) worst = { ...result, params }
        } catch (error) {
          failed++
        }
      }

      renders.push({
        sourceId: member.sourceId,
        name: member.raw,
        ...worst,
        renders: component.paramsList.length,
        failed,
        serious: worst.violations.filter((v) => ['serious', 'critical'].includes(v.impact)).length
      })
    } catch (error) {
      renders.push({ sourceId: member.sourceId, name: member.raw, error: error.message, weighted: 0, violations: [] })
    }
  }

  return {
    weighted: Math.max(0, ...renders.map((r) => r.weighted)),
    renders
  }
}

export { IMPACT_WEIGHTS }
