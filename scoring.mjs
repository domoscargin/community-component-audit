/**
 * Scoring weights. Each signal is normalised to 0–1 before weighting.
 * Weights for disabled signals (for example `adoption` without `--adoption`)
 * are dropped and the rest are rescaled so the score stays out of 100.
 */
export const weights = {
  // How many other design system organisations have built it. Each
  // organisation's contribution is discounted when all of its sources are
  // stale (see staleMonths) and scaled by its packages' npm downloads
  prevalence: 0.3,

  // How many government services and prototypes have built their own (from
  // the design-system-github-stats list of repos), with prototypes counting
  // half as much as live services
  services: 0.15,

  // Reactions, upvotes and comments on matching community backlog discussions
  backlog: 0.2,

  // 1 = we have nothing, 0.6 = partially covered, 0.5 = we only have a
  // pattern, 0 = GOV.UK Frontend has the component
  gap: 0.2,

  // Open issues in govuk-frontend / govuk-design-system that mention it
  ourIssues: 0.1,

  // Open issues on community implementations (accessibility issues count
  // double)
  communityIssues: 0.05,

  // axe violations found when rendering community implementations
  // (populated by quality-check.mjs)
  quality: 0.1,

  // GitHub code search hits for community class names (opt-in)
  adoption: 0.1
}

export const gapValues = {
  covered: 0,
  pattern: 0.5,
  partial: 0.6,
  gap: 1
}

/**
 * How much a prototype counts towards the `services` signal compared with a
 * live service
 */
export const prototypeWeight = 0.5

/**
 * Service hits keep full weight for this many years after the repo was last
 * pushed to, then decay linearly to the floor
 */
export const freshness = {
  fullYears: 3,
  floorYears: 7,
  floor: 0.5
}

/**
 * A source counts as stale (its org's prevalence contribution is halved) when
 * nothing in it has been pushed to for this many months
 */
export const staleMonths = 18

/**
 * How much a technique proves a service really built a component
 */
export const techniqueWeights = {
  'nunjucks-component': 1,
  'rails-view-component': 1,
  'template-partial': 1,
  'ui-framework': 1,
  script: 0.4,
  styles: 0.4
}

/**
 * Service repo scanning
 */
export const serviceScan = {
  // Government repos that use GOV.UK Frontend, from
  // https://github.com/alphagov/design-system-github-stats
  dataUrl:
    'https://raw.githubusercontent.com/alphagov/design-system-github-stats/bk-improvements/data/filtered-data.json',

  // Files with identical content in this many repos are treated as copied
  // boilerplate, not separate implementations
  boilerplateMinRepos: 5,

  // A component only found in services needs this many repos to get its own
  // cluster (it always joins an existing cluster)
  minRepos: 3,

  // Concurrent tree requests
  concurrency: 8
}

/**
 * Labels or title keywords that mark an issue as accessibility-related
 */
export const accessibilityTerms =
  /\b(a11y|accessib\w*|wcag|screen ?readers?|aria|voiceover|nvda|jaws|keyboard|focus|contrast|zoom|reflow)\b/i

/**
 * Issues with these labels are internal chores, not signals about
 * usefulness or quality, so they're ignored
 */
export const excludeIssueLabels = [
  'dependencies',
  'epic',
  'tech debt',
  'tooling'
]

/**
 * Issue titles matching any of these are internal chores and are ignored
 */
export const excludeIssueTitles = [/\btests? to use jsdom\b/i]
