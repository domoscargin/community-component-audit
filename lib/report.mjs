const STATUS_LABELS = {
  covered: 'In GOV.UK Frontend',
  pattern: 'GOV.UK pattern only',
  partial: 'Partially covered',
  gap: 'Not in GOV.UK Frontend'
}

function cell(text) {
  return String(text ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, ' ')
}

function csvCell(value) {
  const text = String(value ?? '')
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

function implementations(cluster, { includeOurs = false } = {}) {
  return cluster.members
    .filter((m) => includeOurs || !m.ours)
    .map((m) => {
      const hits = m.adoptionHits ? ` (${m.adoptionHits.toLocaleString()})` : ''
      return `[${m.sourceId}: ${cell(m.raw)}](${m.url})${hits}`
    })
    .join('<br>')
}

function issueSummary(issues) {
  if (!issues.length) return '0'
  const a11y = issues.filter((i) => i.accessibility).length
  return a11y ? `${issues.length} (${a11y} a11y)` : String(issues.length)
}

function serviceCounts(cluster) {
  const prototypes = cluster.services.filter((s) => s.isPrototype).length
  const extending = cluster.services.filter((s) => s.extendsGovuk).length
  return { live: cluster.services.length - prototypes, prototypes, extending }
}

function serviceSummary(cluster) {
  const { live, prototypes } = serviceCounts(cluster)
  return live || prototypes ? `${live} / ${prototypes}` : ''
}

function extendsSummary(cluster) {
  const { extending } = serviceCounts(cluster)
  return extending ? ` (${extending} extend ours)` : ''
}

function qualitySummary(cluster) {
  if (!cluster.quality) return ''
  const checked = cluster.quality.renders.filter((r) => !r.error)
  if (!checked.length) return '—'
  const worst = checked.reduce((a, b) => (b.weighted > a.weighted ? b : a))
  const serious = worst.violations.filter((v) =>
    ['serious', 'critical'].includes(v.impact)
  ).length
  return serious
    ? `${worst.violations.length} (${serious} serious)`
    : String(worst.violations.length)
}

function serviceExamples(cluster, limit = 3) {
  return cluster.services
    .slice()
    .sort((a, b) => Number(a.isPrototype) - Number(b.isPrototype))
    .slice(0, limit)
    .map((s) => `[${s.repo}](${s.url})${s.isPrototype ? ' (prototype)' : ''}`)
    .join('<br>')
}

function backlogSummary(cluster) {
  if (!cluster.backlog.length) return ''
  return cluster.backlog
    .slice()
    .sort((a, b) => b.comments + b.reactions - (a.comments + a.reactions))
    .slice(0, 3)
    .map((d) => `[${cell(d.title)}](${d.url}) (${d.comments} comments)`)
    .join('<br>')
}

/**
 * @param {import('./cluster.mjs').Cluster[]} ranked
 */
export function toCsv(ranked) {
  const header = [
    'rank',
    'name',
    'key',
    'kind',
    'status',
    'score',
    'org_count',
    'orgs',
    'service_repos',
    'prototype_repos',
    'service_owners',
    'signal_prevalence',
    'signal_services',
    'signal_backlog',
    'signal_gap',
    'signal_our_issues',
    'signal_community_issues',
    'signal_quality',
    'signal_adoption',
    'quality_worst_violations',
    'extends_govuk',
    'backlog_discussions',
    'our_open_issues',
    'community_open_issues',
    'community_a11y_issues',
    'adoption_weighted_repos_and_orgs',
    'our_component',
    'our_pattern',
    'related_ours',
    'possibly_related_ours',
    'implementations',
    'service_examples'
  ]

  const rows = ranked.map((c, i) => [
    i + 1,
    c.name,
    c.key,
    c.kind,
    c.status,
    c.score,
    c.orgs.length,
    c.orgs.join('; '),
    serviceCounts(c).live,
    serviceCounts(c).prototypes,
    new Set(c.services.map((x) => x.owner)).size,
    c.signals.prevalence,
    c.signals.services,
    c.signals.backlog,
    c.signals.gap,
    c.signals.ourIssues,
    c.signals.communityIssues,
    c.signals.quality,
    c.signals.adoption,
    c.quality ? Math.max(0, ...c.quality.renders.map((r) => r.violations?.length ?? 0)) : '',
    serviceCounts(c).extending,
    c.backlog.length,
    c.ourIssues.length,
    c.communityIssues.length,
    c.communityIssues.filter((x) => x.accessibility).length,
    c.adoptionHits,
    c.ourComponent?.name ?? '',
    c.ourPattern?.name ?? '',
    c.relatedOurs.join('; '),
    c.possiblyRelatedOurs.join('; '),
    c.members.map((m) => `${m.sourceId}:${m.raw} ${m.url}`).join('; '),
    c.services.map((x) => x.url).join('; ')
  ])

  return [header, ...rows].map((row) => row.map(csvCell).join(',')).join('\n') + '\n'
}

/**
 * @param {object} data
 * @param {import('./cluster.mjs').Cluster[]} data.ranked
 * @param {object[]} data.sources
 * @param {object[]} data.unmatchedBacklog
 * @param {Record<string, number>} data.weights
 * @param {boolean} data.adoption
 * @param {number} [data.adoptionPrototypeWeight]
 * @param {Record<string, any>} [data.qualityStats]
 * @param {Record<string, any>} data.serviceStats
 * @param {number} data.prototypeWeight
 * @param {number} data.minServiceRepos
 * @param {number} data.top
 * @param {string} [data.auditGeneratedAt]
 */
export function toMarkdown({
  ranked,
  sources,
  unmatchedBacklog,
  weights,
  adoption,
  adoptionPrototypeWeight,
  qualityStats,
  serviceStats,
  prototypeWeight,
  minServiceRepos,
  top,
  auditGeneratedAt
}) {
  const lines = []
  const push = (...l) => lines.push(...l)

  const candidates = ranked.filter((c) => c.status !== 'covered' && c.orgs.length)
  const reimplemented = ranked.filter(
    (c) => c.status === 'covered' && (c.orgs.length || c.services.length)
  )
  const serviceOnly = ranked.filter(
    (c) => c.status !== 'covered' && !c.orgs.length && c.services.length
  )

  push(
    '# Community component audit',
    '',
    `Generated ${new Date().toISOString()}${auditGeneratedAt ? ` by offline rescoring the audit snapshot from ${auditGeneratedAt}` : ''}.`,
    '',
    `- ${ranked.length} clusters from ${sources.length} sources`,
    `- ${candidates.length} not fully covered by GOV.UK Frontend`,
    `- ${reimplemented.length} GOV.UK Frontend components also implemented elsewhere`,
    ...(serviceStats.enabled
      ? [
          `- ${serviceStats.scanned} government repos scanned (${serviceStats.prototypes} listed as prototypes), ${serviceStats.withComponents} with their own components, ${serviceStats.failed} unavailable`,
          `- ${serviceOnly.length} components built in services but not in any design system`
        ]
      : []),
    '',
    '## Scoring',
    '',
    'Each signal is normalised to 0–1 and weighted. The score is out of 100.',
    '',
    '| Signal | Weight | Measures |',
    '|---|---|---|',
    `| prevalence | ${weights.prevalence} | Number of other design system organisations with an implementation (GOV.UK Design System sources never count) |`,
    `| services | ${weights.services} | Number of government service repos with their own implementation, with prototypes counting ${prototypeWeight}${serviceStats.enabled ? '' : ' (not collected this run, so weight dropped)'} |`,
    `| backlog | ${weights.backlog} | Upvotes, reactions and comments on matching open community backlog discussions |`,
    `| gap | ${weights.gap} | 1 not in GOV.UK Frontend, 0.6 partially covered, 0.5 GOV.UK pattern only, 0 in GOV.UK Frontend |`,
    `| ourIssues | ${weights.ourIssues} | Open govuk-frontend and govuk-design-system issues that mention it |`,
    `| communityIssues | ${weights.communityIssues} | Open issues on community implementations, accessibility issues count double |`,
    `| quality | ${weights.quality} | axe violations found when rendering community implementations (from quality-check.mjs)${qualityStats?.enabled ? '' : ' (not collected this run, so weight dropped)'} |`,
    `| adoption | ${weights.adoption} | ${adoptionPrototypeWeight == null ? 'Government repos using the class (or global code search hits as fallback)' : `unique production repos + organisations, plus ${adoptionPrototypeWeight} × prototype repos + organisations`}${adoption ? '' : ' (not collected this run, so weight dropped)'} |`,
    '',
    `## Top ${top} candidates not in GOV.UK Frontend`,
    '',
    'Services shows government service repos / prototype repos with their own implementation.',
    '',
    '| # | Name | Kind | Status | Score | Orgs | Services | Backlog | Our issues | Community issues | axe | Implementations |',
    '|---|---|---|---|---|---|---|---|---|---|---|---|'
  )

  candidates.slice(0, top).forEach((c, i) => {
    const relatedText = [...c.relatedOurs, ...c.possiblyRelatedOurs].length
      ? `<br>related: ${[...c.relatedOurs, ...c.possiblyRelatedOurs].join(', ')}`
      : ''
    const flagsText = c.flags?.length ? `<br>⚠️ ${c.flags.map(cell).join('<br>⚠️ ')}` : ''
    push(
      `| ${i + 1} | **${cell(c.name)}**${relatedText}${flagsText} | ${c.kind} | ${STATUS_LABELS[c.status]} | ${c.score} | ${c.orgs.length} | ${serviceSummary(c)} | ${backlogSummary(c)} | ${c.ourIssues.length} | ${issueSummary(c.communityIssues)} | ${qualitySummary(c)} | ${implementations(c)} |`
    )
  })

  if (serviceStats.enabled) {
    push(
      '',
      '## Built in services but not in any design system',
      '',
      `Components that at least ${minServiceRepos} government repos have built for themselves, with no design system equivalent found. Check examples before relying on these, names can be ambiguous.`,
      '',
      '| # | Name | Score | Services / prototypes | Owners | Backlog | Examples |',
      '|---|---|---|---|---|---|---|',
      ...serviceOnly
        .slice(0, top)
        .map(
          (c, i) =>
            `| ${i + 1} | **${cell(c.name)}** | ${c.score} | ${serviceSummary(c)} | ${new Set(c.services.map((s) => s.owner)).size} | ${backlogSummary(c)} | ${serviceExamples(c)} |`
        )
    )
  }

  push(
    '',
    '## GOV.UK Frontend components implemented elsewhere',
    '',
    'Compare these with ours to look for improvements. Services shows government repos that have built or overridden their own version.',
    '',
    '| Name | Score | Orgs | Services | Our open issues | Backlog | Community issues | Implementations |',
    '|---|---|---|---|---|---|---|---|'
  )

  for (const c of reimplemented) {
    push(
      `| [**${cell(c.name)}**](${c.ourComponent.url}) | ${c.score} | ${c.orgs.length} | ${serviceSummary(c)}${extendsSummary(c)} | ${c.ourIssues.length} | ${backlogSummary(c)} | ${issueSummary(c.communityIssues)} | ${implementations(c)} |`
    )
  }

  const unmatched = unmatchedBacklog
    .slice()
    .sort((a, b) => b.comments + b.reactions - (a.comments + a.reactions))
    .slice(0, 30)

  push(
    '',
    '## Backlog discussions with no implementation found',
    '',
    'Open community backlog discussions whose titles didn\'t match any inventoried component or pattern, by engagement. These may need a synonym added, or have no community implementation yet.',
    '',
    '| Discussion | Comments | Reactions |',
    '|---|---|---|',
    ...unmatched.map(
      (d) => `| [${cell(d.title)}](${d.url}) | ${d.comments} | ${d.reactions} |`
    ),
    '',
    '## Sources',
    '',
    '| Source | Organisation | Location | Components | Patterns | Last pushed | npm downloads (monthly) |',
    '|---|---|---|---|---|---|---|',
    ...sources.map((s) => {
      const location = s.repo
        ? `[${s.repo}](https://github.com/${s.repo})`
        : `[${new URL(s.site).host}](${s.site}) (website)`
      return `| ${s.id}${s.ours ? ' (ours)' : ''} | ${s.org} | ${location} | ${s.components} | ${s.patterns} | ${s.pushedAt?.slice(0, 10) ?? ''}${s.archived ? ' (archived)' : ''} | ${s.npmDownloads?.toLocaleString() ?? ''} |`
    }),
    '',
    '## Caveats',
    '',
    '- Clusters are built from names and the synonym list in `synonyms.mjs`. Check clusters before acting on them, and add synonyms where things are split or merged wrongly.',
    '- GOV.UK Design System sources define coverage only. They never count towards prevalence, adoption or community issues.',
    '- Website sources (such as DWP) have no public repo, so they contribute no community issues.',
    '- Service components are found from file paths (for example `components/<name>/macro.njk`, `app/components/<name>_component.rb`, `components/_<name>.scss`). Vendored design system copies are excluded, and files with identical content in many repos are treated as copied boilerplate rather than separate implementations.',
    '- In GOV.UK Frontend components, a service count often means a service overrides or extends our component rather than replacing it. Where the file content was fetched, "extend ours" marks implementations that reference GOV.UK Frontend.',
    '- Templates and stylesheets on their own are weak evidence of a real component, so they count for less than markup-bearing files (see techniqueWeights in scoring.mjs). Repo and source freshness also discounts old work.',
    '- Issue and discussion matching is by title only.',
    '- Code search counts include forks, vendored copies and the source repo itself. Use them to compare components, not as absolute usage.',
    '- Sources that are stale or archived (see "Last pushed") may overstate prevalence.',
    ''
  )

  return lines.join('\n')
}
