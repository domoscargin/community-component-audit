/**
 * Design systems to inventory.
 *
 * Repo sources read a GitHub repo's git tree and extract names from file
 * paths with `rules`. Site sources (with `site` instead of `repo`) read the
 * links on each rule's `page` instead. The first capture group of each rule's
 * pattern is the component or pattern name.
 *
 * - `org`     groups sources that belong to the same team (for example MOJ
 *             frontend and MOJ patterns) so prevalence counts organisations,
 *             not repos
 * - `ours`    marks GOV.UK Design System sources, which define coverage
 * - `prefix`  CSS class prefix, used to build code search queries
 * - `exclude` names to ignore, matched after normalisation
 *
 * @type {Source[]}
 */
export const sources = [
  {
    id: 'govuk-frontend',
    org: 'GOV.UK Design System',
    repo: 'alphagov/govuk-frontend',
    ours: true,
    prefix: 'govuk-',
    packages: ['govuk-frontend'],
    rules: [
      {
        kind: 'component',
        pattern: /^packages\/govuk-frontend\/src\/govuk\/components\/([^/]+)\//
      }
    ]
  },
  {
    id: 'govuk-design-system',
    org: 'GOV.UK Design System',
    repo: 'alphagov/govuk-design-system',
    ours: true,
    rules: [{ kind: 'pattern', pattern: /^src\/patterns\/([^/]+)\// }]
  },
  {
    id: 'govuk-publishing-components',
    org: 'GOV.UK Publishing',
    repo: 'alphagov/govuk_publishing_components',
    prefix: 'gem-c-',
    rules: [
      {
        kind: 'component',
        pattern:
          /^app\/views\/govuk_publishing_components\/components\/docs\/([^/]+)\.yml$/
      }
    ]
  },
  {
    id: 'moj-frontend',
    org: 'Ministry of Justice',
    repo: 'ministryofjustice/moj-frontend',
    prefix: 'moj-',
    packages: ['@ministryofjustice/frontend'],
    exclude: ['domain-specific'],
    rules: [
      { kind: 'component', pattern: /^src\/moj\/components\/([^/]+)\// }
    ]
  },
  {
    id: 'moj-design-system',
    org: 'Ministry of Justice',
    repo: 'ministryofjustice/moj-design-system',
    exclude: ['readme'],
    rules: [{ kind: 'pattern', pattern: /^app\/views\/patterns\/([^/.]+)/ }]
  },
  {
    id: 'hmrc-frontend',
    org: 'HMRC',
    repo: 'hmrc/hmrc-frontend',
    prefix: 'hmrc-',
    packages: ['hmrc-frontend'],
    exclude: ['js-visible'],
    rules: [{ kind: 'component', pattern: /^src\/components\/([^/]+)\// }]
  },
  {
    id: 'hmrc-design-system',
    org: 'HMRC',
    repo: 'hmrc/design-system',
    exclude: [
      'hmrc-design-patterns-archive',
      'install-hmrc-frontend-in-your-prototype'
    ],
    rules: [
      { kind: 'pattern', pattern: /^src\/hmrc-design-patterns\/([^/]+)\// }
    ]
  },
  {
    id: 'nhsuk-frontend',
    org: 'NHS England',
    repo: 'nhsuk/nhsuk-frontend',
    prefix: 'nhsuk-',
    packages: ['nhsuk-frontend'],
    exclude: ['visually-hidden'],
    rules: [
      {
        kind: 'component',
        pattern: /^packages\/nhsuk-frontend\/src\/nhsuk\/components\/([^/]+)\//
      }
    ]
  },
  {
    id: 'nhsuk-service-manual',
    org: 'NHS England',
    repo: 'nhsuk/nhsuk-service-manual',
    rules: [
      {
        kind: 'pattern',
        pattern: /^app\/views\/design-system\/patterns\/([^/._][^/.]*)/
      }
    ]
  },
  {
    id: 'nhsapp-frontend',
    org: 'NHS App',
    repo: 'nhsuk/nhsapp-frontend',
    prefix: 'nhsapp-',
    rules: [{ kind: 'component', pattern: /^src\/components\/([^/]+)\// }]
  },
  {
    id: 'ons-design-system',
    org: 'ONS',
    repo: 'ONSdigital/design-system',
    prefix: 'ons-',
    packages: ['@ons/design-system'],
    rules: [
      { kind: 'component', pattern: /^src\/components\/([^/]+)\// },
      { kind: 'pattern', pattern: /^src\/patterns\/([^/]+)\// }
    ]
  },
  {
    id: 'home-office',
    org: 'Home Office',
    repo: 'UKHomeOffice/design-system',
    prefix: 'hods-',
    exclude: ['page', 'ucdm-page'],
    rules: [
      { kind: 'component', pattern: /^components\/([^/]+)\// },
      {
        kind: 'pattern',
        pattern: /^apps\/docs\/src\/common\/pages\/patterns\/([^/.]+)/
      },
      {
        kind: 'pattern',
        pattern:
          /^apps\/docs\/src\/common\/pages\/design-system\/patterns\/[^/]+\/([^/.]+)/
      }
    ]
  },
  {
    id: 'tna-frontend',
    org: 'The National Archives',
    repo: 'nationalarchives/tna-frontend',
    prefix: 'tna-',
    packages: ['@nationalarchives/frontend'],
    rules: [
      {
        kind: 'component',
        pattern: /^src\/nationalarchives\/components\/([^/]+)\//
      }
    ]
  },
  {
    id: 'scottish-government',
    org: 'Scottish Government',
    repo: 'scottish-government-design-system/design-system',
    prefix: 'ds_',
    rules: [{ kind: 'component', pattern: /^src\/components\/([^/]+)\// }]
  },
  {
    id: 'dfe-frontend',
    org: 'Department for Education',
    repo: 'DFE-Digital/dfe-frontend',
    prefix: 'dfe-',
    packages: ['dfe-frontend'],
    rules: [{ kind: 'component', pattern: /^packages\/components\/([^/]+)\// }]
  },
  {
    id: 'x-govuk-prototype-components',
    org: 'X-GOVUK',
    repo: 'x-govuk/govuk-prototype-components',
    prefix: 'x-govuk-',
    packages: ['@x-govuk/govuk-prototype-components'],
    rules: [
      { kind: 'component', pattern: /^src\/x-govuk\/components\/([^/]+)\// }
    ]
  },
  {
    id: 'hmlr-frontend',
    org: 'HM Land Registry',
    repo: 'LandRegistry/hmlr-frontend',
    prefix: 'hmlr-',
    packages: ['@hmlr/frontend'],
    rules: [
      { kind: 'component', pattern: /^src\/hmlr\/components\/([^/]+)\// }
    ]
  },
  {
    id: 'hmlr-design-system',
    org: 'HM Land Registry',
    repo: 'LandRegistry/hmlr-design-system',
    rules: [{ kind: 'pattern', pattern: /^src\/patterns\/([^/]+)\// }]
  },
  {
    // DWP Frontend's source isn't public on GitHub, so read the
    // documentation site's index pages instead
    id: 'dwp-design-system',
    org: 'DWP',
    site: 'https://design-system.dwp.gov.uk',
    prefix: 'dwp-',
    packages: ['@dwp/dwp-frontend'],
    // Retired in favour of quick reference
    exclude: ['key-details-bar'],
    rules: [
      {
        kind: 'component',
        page: '/components/',
        pattern: /^\/components\/([^/]+)\/?$/
      },
      {
        kind: 'pattern',
        page: '/patterns/',
        pattern: /^\/patterns\/([^/]+)\/?$/
      }
    ]
  }
]

/**
 * Sources belonging to this organisation are always treated as ours, so they
 * define coverage and never count towards prevalence, adoption or community
 * issues
 */
export const OUR_ORG = 'GOV.UK Design System'

/**
 * Names ignored in every source (after normalisation)
 */
export const globalExclude = [
  'index',
  'readme',
  'utils',
  'helpers',
  'fixtures',
  'tests',
  'test',
  'all'
]

/**
 * @typedef {object} Rule
 * @property {'component' | 'pattern'} kind
 * @property {RegExp} pattern - First capture group is the name
 * @property {string} [page] - For site sources, the index page to read links from
 */

/**
 * @typedef {object} Source
 * @property {string} id
 * @property {string} org
 * @property {string} [repo] - owner/name
 * @property {string} [site] - Documentation site origin, for sources without a public repo
 * @property {string} [ref] - Branch or SHA (defaults to the repo's default branch)
 * @property {boolean} [ours]
 * @property {string} [prefix]
 * @property {string[]} [packages] - npm packages, for download and adoption stats
 * @property {string[]} [exclude]
 * @property {Rule[]} rules
 */

/**
 * Repos skipped when scanning government services. Repos already listed as
 * sources are skipped automatically. These are kits and framework ports that
 * re-implement GOV.UK Frontend rather than services building their own
 * components.
 */
export const serviceRepoExclude = [
  'alphagov/govuk-prototype-kit',
  'alphagov/govuk-design-system',
  'alphagov/govuk-frontend',
  'alphagov/govuk_publishing_components',
  'x-govuk/govuk-components',
  'x-govuk/govuk-form-builder',
  'x-govuk/govuk-frontend-aspnetcore',
  'x-govuk/govuk-prototype-components'
]
