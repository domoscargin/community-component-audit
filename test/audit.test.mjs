import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { buildClusters, matchItems } from '../lib/cluster.mjs'
import { extractLinks, extractMembers, extractSiteMembers } from '../lib/inventory.mjs'
import {
  buildSynonymIndex,
  matchTitle,
  normalise,
  phraseRegex,
  toKey
} from '../lib/names.mjs'
import { findClassUsage, viewFiles } from '../lib/classusage.mjs'
import { buildsOnGovuk } from '../lib/overrides.mjs'
import { fingerprint, similarity, templateFile } from '../lib/structure.mjs'
import {
  freshnessWeight,
  prevalenceWeight,
  scoreClusters,
  serviceHitWeight
} from '../lib/score.mjs'
import { parseScrapedRepos } from '../lib/govlist.mjs'
import { dropBoilerplate, scanServiceTree } from '../lib/services.mjs'
import { gapValues, weights } from '../scoring.mjs'
import { related, synonyms, textMatchStoplist } from '../synonyms.mjs'

describe('names', () => {
  it('normalises prefixes, case and snake_case', () => {
    assert.equal(normalise('hmrc-print-link'), 'print-link')
    assert.equal(normalise('Step_By_Step_Nav'), 'step-by-step-nav')
    assert.equal(normalise('accordion.yml'), 'accordion')
    assert.equal(normalise('PDFDownloadButton'), 'pdf-download-button')
  })

  it('singularises keys without mangling uncountable words', () => {
    assert.equal(toKey('checkboxes'), 'checkbox')
    assert.equal(toKey('addresses'), 'address')
    assert.equal(toKey('cookies-banner'), 'cooky-banner')
    assert.equal(toKey('news'), 'news')
    assert.equal(toKey('status'), 'status')
  })

  it('matches phrases with spacing and plural variations', () => {
    const re = phraseRegex('date-picker')
    assert.ok(re.test('Add a date picker'))
    assert.ok(re.test('Date-pickers are hard'))
    assert.ok(!re.test('update pickers'))
  })

  it('only matches strict phrases in specific positions', () => {
    const re = phraseRegex('detail', { strict: true })
    assert.ok(re.test('Details'))
    assert.ok(re.test('Details: summary is not focusable'))
    assert.ok(re.test('[Details] focus ring'))
    assert.ok(re.test('Improve the details component'))
    assert.ok(!re.test('Personal details'))
  })

  it('prefers the longest overlapping match', () => {
    const candidates = [
      { key: 'table', matchers: [phraseRegex('table')] },
      { key: 'sortable-table', matchers: [phraseRegex('sortable-table')] }
    ]
    assert.deepEqual(matchTitle('Sortable table component', candidates), [
      'sortable-table'
    ])
    assert.deepEqual(matchTitle('Table caption size', candidates), ['table'])
  })

  it('rejects synonyms mapped to two canonical names', () => {
    assert.throws(() => buildSynonymIndex({ a: ['x'], b: ['x'] }))
  })
})

describe('inventory', () => {
  it('extracts components from same-site links only', () => {
    const source = {
      id: 'site',
      org: 'Site',
      site: 'https://ds.example.gov.uk',
      rules: [
        {
          kind: 'component',
          page: '/components/',
          pattern: /^\/components\/([^/]+)\/?$/
        }
      ]
    }

    const links = extractLinks(
      `<a href="/components/timeline">Timeline</a>
       <a href="/components/timeline/accessibility">A11y</a>
       <a href="https://design-system.service.gov.uk/components/button/">GOV.UK button</a>
       <a href='/components/side-navigation/'>Side nav</a>`,
      'https://ds.example.gov.uk/components/'
    )

    const members = extractSiteMembers(
      source,
      new Map([['/components/', links]]),
      { globalExclude: [] }
    )

    assert.deepEqual(
      members.map((m) => [m.name, m.url]),
      [
        ['side-navigation', 'https://ds.example.gov.uk/components/side-navigation/'],
        ['timeline', 'https://ds.example.gov.uk/components/timeline']
      ]
    )
  })

  it('treats any source from our org as ours', () => {
    const [member] = extractMembers(
      {
        id: 'ours-but-unflagged',
        org: 'GOV.UK Design System',
        repo: 'alphagov/x',
        rules: [{ kind: 'component', pattern: /^c\/([^/]+)\// }]
      },
      ['c/button/x.njk'],
      { ref: 'main', ourOrg: 'GOV.UK Design System' }
    )
    assert.equal(member.ours, true)
  })

  it('extracts unique names from tree paths', () => {
    const source = {
      id: 'test',
      org: 'Test',
      repo: 'test/test',
      prefix: 'test-',
      exclude: ['ignored'],
      rules: [{ kind: 'component', pattern: /^src\/components\/([^/]+)\// }]
    }

    const members = extractMembers(
      source,
      [
        'src/components/timeline',
        'src/components/timeline/template.njk',
        'src/components/timeline/macro.njk',
        'src/components/_private/x.scss',
        'src/components/ignored/x.njk',
        'src/components/index.js'
      ],
      { ref: 'main', globalExclude: ['index'] }
    )

    assert.equal(members.length, 1)
    assert.equal(members[0].name, 'timeline')
    assert.equal(
      members[0].url,
      'https://github.com/test/test/tree/main/src/components/timeline'
    )
  })
})

describe('clusters and scoring', () => {
  const member = (sourceId, org, raw, { ours = false, kind = 'component' } = {}) => ({
    sourceId,
    org,
    repo: `${sourceId}/repo`,
    ours,
    kind,
    raw,
    name: normalise(raw),
    key: toKey(raw),
    url: `https://example.com/${raw}`,
    isDirectory: true
  })

  const members = [
    member('govuk', 'GOV.UK', 'table', { ours: true }),
    member('govuk', 'GOV.UK', 'date-input', { ours: true }),
    member('moj', 'MOJ', 'sortable-table'),
    member('moj', 'MOJ', 'timeline'),
    member('moj', 'MOJ', 'date-picker'),
    member('hmrc', 'HMRC', 'timeline'),
    member('ons', 'ONS', 'tables')
  ]

  const clusters = buildClusters(members, {
    synonymIndex: buildSynonymIndex(synonyms),
    related,
    textMatchStoplist
  })
  const byKey = Object.fromEntries(clusters.map((c) => [c.key, c]))

  it('groups equivalent names and sets coverage status', () => {
    assert.equal(byKey.table.status, 'covered')
    assert.deepEqual(byKey.table.orgs, ['ONS'])
    assert.equal(byKey.timeline.status, 'gap')
    assert.deepEqual(byKey.timeline.orgs, ['HMRC', 'MOJ'])
    assert.equal(byKey['date-picker'].status, 'partial')
    assert.deepEqual(byKey['sortable-table'].relatedOurs, ['table'])
  })

  it('attaches items by title and extra keys', () => {
    const unmatched = matchItems(
      [
        { title: 'Timeline component' },
        { title: 'Something else', labels: ['date picker'] },
        { title: 'Nothing' }
      ],
      clusters,
      (cluster, item) =>
        cluster.backlog.push({ ...item, upvotes: 0, reactions: 0, comments: 0 }),
      (item) => (item.labels ?? []).map((label) => toKey(label))
    )

    assert.equal(byKey.timeline.backlog.length, 1)
    assert.equal(byKey['date-picker'].backlog.length, 1)
    assert.deepEqual(unmatched, [{ title: 'Nothing' }])
  })

  it('ranks widely implemented gaps above covered components', () => {
    const ranked = scoreClusters(clusters, { weights, gapValues, adoption: false })
    assert.equal(ranked[0].key, 'timeline')
    assert.ok(byKey.timeline.score > byKey.table.score)
    for (const c of ranked) assert.ok(c.score >= 0 && c.score <= 100)
  })

  it('never counts our own components towards prevalence or adoption', () => {
    const onlyOurs = buildClusters(
      [
        member('govuk', 'GOV.UK', 'accordion', { ours: true }),
        member('govuk-ds', 'GOV.UK', 'accordion', { ours: true, kind: 'pattern' })
      ],
      { synonymIndex: buildSynonymIndex(synonyms), related, textMatchStoplist }
    )
    const ranked = scoreClusters(onlyOurs, { weights, gapValues, adoption: true })
    assert.deepEqual(ranked[0].orgs, [])
    assert.equal(ranked[0].signals.prevalence, 0)
    assert.equal(ranked[0].signals.adoption, 0)
  })
})

describe('service scanning', () => {
  const nodes = (paths) => paths.map((path, i) => ({ path, sha: `sha${i}` }))

  it('finds component definitions and ignores vendored, test and generic files', () => {
    const hits = scanServiceTree(
      nodes([
        'app/components/timeline_component.rb',
        'app/components/application_component.rb',
        'app/views/components/_status_card.html.erb',
        'src/views/components/date-picker/macro.njk',
        'src/components/SearchBar.tsx',
        'src/components/SearchBar.test.tsx',
        'app/assets/sass/components/_back-to-top.scss',
        'app/assets/stylesheets/components/_all.scss',
        'app/assets/javascripts/components/miller-columns.js',
        'node_modules/govuk-frontend/dist/govuk/components/button/template.njk',
        'app/assets/stylesheets/base/govuk/components/accordion/_index.scss',
        'src/server/components/auth/index.js'
      ])
    )

    assert.deepEqual(hits.map((h) => h.name).sort(), [
      'back-to-top',
      'date-picker',
      'miller-columns',
      'search-bar',
      'status-card',
      'timeline'
    ])
  })

  it('drops identical files copied into many repos', () => {
    const hits = [
      ...['a', 'b', 'c'].map((repo) => ({ repo, sha: 'same' })),
      { repo: 'd', sha: 'unique' }
    ]
    const { kept, boilerplate } = dropBoilerplate(hits, 3)
    assert.deepEqual(kept, [{ repo: 'd', sha: 'unique' }])
    assert.equal(boilerplate, 3)
  })

  it('adds services to clusters and creates service-only clusters above a threshold', () => {
    const hit = (repo, raw, isPrototype = false) => ({
      repo,
      owner: repo.split('/')[0],
      isPrototype,
      raw,
      name: normalise(raw),
      url: `https://github.com/${repo}`
    })

    const clusters = buildClusters(
      [],
      {
        synonymIndex: buildSynonymIndex(synonyms),
        related,
        textMatchStoplist,
        minServiceRepos: 2,
        serviceHits: [
          hit('a/one', 'miller_columns'),
          hit('b/two', 'MillerColumns', true),
          hit('b/two', 'miller-columns'),
          hit('c/three', 'one_off_thing')
        ]
      }
    )

    assert.deepEqual(clusters.map((c) => c.key), ['miller-column'])
    assert.equal(clusters[0].services.length, 2)

    const [scored] = scoreClusters(clusters, {
      weights,
      gapValues,
      adoption: false,
      prototypeWeight: 0.5
    })
    assert.ok(scored.signals.services > 0)
  })
})

describe('government repo lists', () => {
  it('parses the scraper repo list, ignoring archived and stale repos', () => {
    const repos = parseScrapedRepos(
      [
        { owner: 'dwp', name: 'live-service', archived: false, pushedAt: '2024-01-01T00:00:00Z', language: 'JavaScript' },
        { owner: 'dwp', name: 'old-thing', archived: false, pushedAt: '2015-01-01T00:00:00Z' },
        { owner: 'dwp', name: 'archived-thing', archived: true, pushedAt: '2024-01-01T00:00:00Z' },
        { owner: 'moj', name: 'my-prototype', archived: false, pushedAt: '2024-06-01T00:00:00Z' }
      ],
      { since: '2019-01-01' }
    )

    assert.deepEqual(
      repos.map((r) => [r.repo, r.isPrototype]),
      [
        ['dwp/live-service', false],
        ['moj/my-prototype', true]
      ]
    )
  })

  it('finds nested scripts named after their component directory', () => {
    const hits = scanServiceTree([
      { path: 'src/das/javascript/components/cookieBanner/_cookieBanner.js', sha: 'x' },
      { path: 'src/das/sass/components/account-header/template.html', sha: 'y' },
      { path: 'src/apprentice/components/page-header/_page-header.scss', sha: 'z' }
    ])
    assert.deepEqual(
      hits.map((h) => h.name).sort(),
      ['account-header', 'cookie-banner', 'page-header']
    )
  })
})

describe('freshness and weighting', () => {
  it('keeps full weight for recent and unknown dates, decays to a floor', () => {
    const config = { fullYears: 3, floorYears: 7, floor: 0.5 }
    const now = new Date()
    const recent = new Date(now.getFullYear() - 1, 0, 1).toISOString()
    const old = new Date(now.getFullYear() - 10, 0, 1).toISOString()
    const middle = new Date(now.getFullYear() - 5, 0, 1).toISOString()

    assert.equal(freshnessWeight(recent, config), 1)
    assert.equal(freshnessWeight(undefined, config), 1)
    assert.equal(freshnessWeight(old, config), 0.5)
    const mid = freshnessWeight(middle, config)
    assert.ok(mid > 0.5 && mid < 1)
  })

  it('discounts stale orgs and scales by npm downloads', () => {
    const stale = new Date(Date.now() - 800 * 24 * 60 * 60 * 1000).toISOString()
    const fresh = new Date().toISOString()

    assert.equal(
      prevalenceWeight({ orgPushedAt: stale, downloads: 1000, maxDownloads: 10000, staleMonths: 18 }),
      0.5 * (0.5 + 0.5 * (Math.log1p(1000) / Math.log1p(10000)))
    )
    assert.equal(
      prevalenceWeight({ orgPushedAt: fresh, downloads: undefined, maxDownloads: 10000, staleMonths: 18 }),
      1
    )
  })

  it('weights service hits by technique, prototype status and freshness', () => {
    const options = {
      techniqueWeights: { 'nunjucks-component': 1, styles: 0.4 },
      prototypeWeight: 0.5,
      freshness: { fullYears: 3, floorYears: 7, floor: 0.5 }
    }
    const recent = new Date().toISOString()

    assert.equal(
      serviceHitWeight({ technique: 'nunjucks-component', isPrototype: false, pushedAt: recent }, options),
      1
    )
    assert.equal(
      serviceHitWeight({ technique: 'styles', isPrototype: false, pushedAt: recent }, options),
      0.4
    )
    assert.equal(
      serviceHitWeight({ technique: 'nunjucks-component', isPrototype: true, pushedAt: recent }, options),
      0.5
    )
  })
})

describe('override detection', () => {
  it('detects references to GOV.UK Frontend', () => {
    assert.ok(buildsOnGovuk('{% from "govuk/components/button/macro.njk" import govukButton %}'))
    assert.ok(buildsOnGovuk('<button class="govuk-button app-button--loud">Go</button>'))
    assert.ok(buildsOnGovuk('{{ govukTag({ text: "NEW" }) }}'))
    assert.ok(!buildsOnGovuk('<div class="app-timeline"><p>Nothing here</p></div>'))
  })
})

describe('structure fingerprints', () => {
  it('scores similar templates above different ones', () => {
    const a = fingerprint('<ul class="moj-timeline"><li role="listitem"><h3>Title</h3></li></ul>')
    const b = fingerprint('<ol class="hmrc-timeline"><li><h3>Title</h3></li></ol>')
    const c = fingerprint('<table class="govuk-table"><tr><td>Cell</td></tr></table>')

    assert.ok(similarity(a, b) > similarity(a, c))
    assert.ok(similarity(a, c) < 0.35)
  })

  it('prefers template.njk in a component directory', () => {
    const files = [
      { path: 'src/components/timeline/_timeline.scss', sha: 'a' },
      { path: 'src/components/timeline/template.njk', sha: 'b' },
      { path: 'src/components/timeline/macro.njk', sha: 'c' },
      { path: 'src/components/timeline/nested/other.njk', sha: 'd' }
    ]
    assert.equal(templateFile(files, 'src/components/timeline')?.sha, 'b')
    assert.equal(templateFile(files, 'src/components/missing'), undefined)
  })
})

describe('class usage', () => {
  it('prefers view directories and caps the file count', () => {
    const files = Array.from({ length: 40 }, (_, i) => ({ path: `lib/x${i}.njk`, sha: `s${i}` }))
    files.push({ path: 'app/views/home.njk', sha: 'home' })
    files.push({ path: 'node_modules/pkg/x.njk', sha: 'noise' })
    files.push({ path: 'app/server.js', sha: 'js' })

    const views = viewFiles(files)
    assert.equal(views[0].sha, 'home')
    assert.equal(views.length, 25)
    assert.ok(!views.some((f) => f.sha === 'noise' || f.sha === 'js'))
  })

  it('counts repos using prefixed classes, normalising underscores', async () => {
    const trees = {
      'a/one': [{ path: 'app/views/x.njk', sha: '1' }, { path: 'package.json', sha: 'p1' }],
      'b/two': [{ path: 'app/views/y.njk', sha: '2' }, { path: 'package.json', sha: 'p2' }],
      'c/three': [{ path: 'app/views/z.njk', sha: '3' }, { path: 'package.json', sha: 'p3' }]
    }
    const blobs = {
      1: '<div class="moj-timeline"></div>',
      2: '<div class="ds_card"></div>',
      3: '<div class="govuk-button"></div>',
      p1: JSON.stringify({ dependencies: { '@ministryofjustice/frontend': '1.0.0' } }),
      p2: JSON.stringify({ dependencies: { 'scottish-government-design-system': '1.0.0' } }),
      p3: JSON.stringify({ dependencies: { 'govuk-frontend': '5.0.0' } })
    }
    const github = {
      files: async (repo) => ({ files: trees[repo] }),
      blob: async (repo, sha) => blobs[sha]
    }

    const usage = await findClassUsage({
      classNames: ['moj-timeline', 'ds_card'],
      prefixes: ['moj-', 'ds_'],
      packageNames: ['@ministryofjustice/frontend', 'scottish-government-design-system'],
      repos: [{ repo: 'a/one' }, { repo: 'b/two' }, { repo: 'c/three' }],
      github
    })

    assert.equal(usage['moj-timeline'].repos, 1)
    assert.deepEqual(usage['moj-timeline'].repoList, ['a/one'])
    assert.deepEqual(usage.ds_card.repoList, ['b/two'])
  })
})

describe('body matching', () => {
  it('matches distinctive phrases in bodies but not generic words', () => {
    const clusters = buildClusters(
      [
        {
          sourceId: 'x', org: 'X', repo: 'x/x', ours: false, kind: 'component',
          raw: 'timeout-dialog', name: 'timeout-dialog', key: 'timeout-warning',
          url: 'https://x', isDirectory: true
        },
        {
          sourceId: 'x', org: 'X', repo: 'x/x', ours: false, kind: 'component',
          raw: 'card', name: 'card', key: 'card',
          url: 'https://x', isDirectory: true
        }
      ],
      { synonymIndex: buildSynonymIndex(synonyms), related, textMatchStoplist }
    )

    const unmatched = matchItems(
      [
        { title: 'Sessions', body: 'We should warn people with a timeout dialog before signing them out' },
        { title: 'Dashboards', body: 'The page shows a card with some links' }
      ],
      clusters,
      (cluster, item) => cluster.backlog.push(item)
    )

    const byKey = Object.fromEntries(clusters.map((c) => [c.key, c]))
    assert.equal(byKey['timeout-warning'].backlog.length, 1)
    assert.equal(byKey.card.backlog.length, 0)
    assert.equal(unmatched.length, 1)
  })
})

describe('hyphenation variants', () => {
  it('merges hyphenated service names into matching clusters', () => {
    const clusters = buildClusters(
      [
        {
          sourceId: 'govuk', org: 'GOV.UK Design System', repo: 'alphagov/govuk-frontend',
          ours: true, kind: 'component', raw: 'checkboxes', name: 'checkboxes',
          key: 'checkbox', url: 'https://x', isDirectory: true
        }
      ],
      {
        synonymIndex: buildSynonymIndex(synonyms),
        related,
        textMatchStoplist,
        serviceHits: [
          { repo: 'a/one', owner: 'a', isPrototype: false, raw: 'check-box', name: 'check-box', technique: 'styles', url: 'https://x' },
          { repo: 'b/two', owner: 'b', isPrototype: false, raw: 'CheckBox', name: 'check-box', technique: 'ui-framework', url: 'https://x' }
        ]
      }
    )

    assert.equal(clusters.length, 1)
    assert.equal(clusters[0].key, 'checkbox')
    assert.equal(clusters[0].status, 'covered')
    assert.equal(clusters[0].services.length, 2)
  })
})
