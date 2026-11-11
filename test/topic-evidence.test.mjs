import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  collectTopicEvidence, evidenceRows, fetchTopicDiscussion, fetchTopicIssue,
  findTopicDiscussions, matchedTerms, searchTopicIssues, TOPICS,
  topicEvidenceCsv, topicEvidenceMarkdown
} from '../lib/topic-evidence.mjs'

const page = (nodes, next = null) => ({
  nodes, pageInfo: { hasNextPage: next !== null, endCursor: next }
})
const date = '2026-11-09T12:00:00Z'
const post = (id, text = 'I need dark mode', extra = {}) => ({
  id, kind: 'opening', text, url: `https://github.com/example/repo/discussions/1#${id}`,
  author: 'alice', createdAt: date, updatedAt: date, parentId: null, ...extra
})
const thread = (repo, number, kind = 'discussion', extra = {}) => ({
  repo, number, kind, title: 'Dark mode',
  url: `https://github.com/${repo}/${kind === 'discussion' ? 'discussions' : 'issues'}/${number}`,
  state: 'closed', posts: [post(`${repo}:${number}`)], collectedAt: date, ...extra
})
const snapshot = () => ({
  collectedAt: date, topics: TOPICS, scope: { orgs: ['example'], maxThreads: 3 },
  threads: [{ ...thread('example/repo', 1), topics: ['dark-mode', 'ai'] }],
  coverage: [{ limited: true }, { incomplete: true }]
})

describe('topic evidence collection', () => {
  it('fetches opening text, all comment/reply pages, and context even for deleted parents', async () => {
    const response = (id, extra = {}) => ({
      id, bodyText: `Text for ${id}`, url: `https://github.com/example/repo/discussions/1#${id}`,
      author: { login: 'alice' }, createdAt: date, updatedAt: date, ...extra
    })
    const graphql = async (query, variables) => {
      if (query.includes('TopicDiscussion(')) return {
        repository: { isPrivate: false, discussion: {
          id: 'd1', number: 1, title: 'Dark mode', bodyText: 'Opening argument',
          url: 'https://github.com/example/repo/discussions/1',
          createdAt: date, updatedAt: date, author: null, closed: true, closedAt: date
        } }
      }
      assert.match(query, /bodyText url updatedAt/)
      if (query.includes('ActivityComments')) return { node: { comments: variables.after
        ? page([response('c2', { replies: page([]) })])
        : page([response('c1', {
          deletedAt: date, replies: page([response('r1')], 'reply2')
        })], 'comment2')
      } }
      if (query.includes('ActivityReplies')) return { node: {
        replies: page([response('r2', { author: null })])
      } }
      throw new Error('Unexpected query')
    }
    const result = await fetchTopicDiscussion(graphql, 'example/repo', 1)
    assert.equal(result.state, 'closed')
    assert.deepEqual(result.posts.map((p) => p.id), ['d1', 'r1', 'r2', 'c2'])
    assert.equal(result.posts[1].parentId, 'c1')
    assert.equal(result.posts[3].parentId, 'd1')
    assert.equal(result.posts[1].text, 'Text for r1')
    assert.equal(result.posts[2].author, null)
    assert.ok(result.posts.every((p) => p.url && p.text))
  })

  it('rejects private/missing discussions and propagates API errors', async () => {
    for (const repository of [null, { isPrivate: true }, { isPrivate: false, discussion: null }]) {
      await assert.rejects(fetchTopicDiscussion(async () => ({ repository }), 'example/repo', 1),
        /public repository|Discussion not found/)
    }
    await assert.rejects(fetchTopicDiscussion(async () => {
      throw new Error('API unavailable')
    }, 'example/repo', 1), /API unavailable/)
  })

  it('reports discussion discovery truncation and disabled discussions', async () => {
    let calls = 0
    const result = await findTopicDiscussions(async () => {
      calls++
      return { repository: {
        isPrivate: false, hasDiscussionsEnabled: true,
        discussions: page([{ number: calls }], `cursor${calls}`)
      } }
    }, 'example/repo')
    assert.equal(calls, 2)
    assert.equal(result.discussions.length, 2)
    assert.equal(result.limited, true)
    assert.deepEqual(await findTopicDiscussions(async () => ({ repository: {
      isPrivate: false, hasDiscussionsEnabled: false
    } }), 'example/repo'), { discussions: [], limited: false, enabled: false })
    await assert.rejects(findTopicDiscussions(async () => ({ repository: {
      isPrivate: false, hasDiscussionsEnabled: true,
      discussions: { nodes: [], pageInfo: { hasNextPage: true, endCursor: null } }
    } }), 'example/repo'), /cursor/)
  })

  it('records incomplete/capped issue search and preserves issues and PRs', async () => {
    const result = await searchTopicIssues(async (path) => {
      assert.match(path, /sort=updated&order=desc/)
      assert.equal(new URL(`https://api.github.com${path}`).searchParams.get('q'),
        'org:example is:public "dark mode" in:title,body')
      return { total_count: 99, incomplete_results: true, items: [
        { repository_url: 'https://api.github.com/repos/example/repo', number: 1, html_url: 'u1' },
        { repository_url: 'https://api.github.com/repos/example/repo', number: 2, html_url: 'u2', pull_request: {} }
      ] }
    }, 'org:example is:public "dark mode" in:title,body', 2)
    assert.equal(result.totalCount, 99)
    assert.equal(result.incomplete, true)
    assert.equal(result.limited, true)
    assert.deepEqual(result.items.map((i) => i.kind), ['issue', 'pull-request'])
  })

  it('fetches every REST comment page plus PR reviews and inline reply context', async () => {
    const apiPost = (id, extra = {}) => ({
      id, body: `Argument ${id}`, html_url: `https://github.com/example/repo/pull/1#${id}`,
      user: { login: 'alice' }, created_at: date, updated_at: date, ...extra
    })
    const request = async (path) => {
      if (path === '/repos/example/repo') return { private: false, archived: true }
      if (path === '/repos/example/repo/issues/1') return {
        ...apiPost(1), number: 1, title: 'AI chatbot', state: 'closed',
        closed_at: date, pull_request: {}
      }
      if (path === '/repos/example/repo/pulls/1') return { merged_at: date }
      if (path.includes('/issues/1/comments')) return path.endsWith('page=1')
        ? Array.from({ length: 100 }, (_, i) => apiPost(i + 2))
        : [apiPost(102)]
      if (path.includes('/reviews')) return [
        apiPost(103, { body: '', state: 'APPROVED' }),
        apiPost(104, { state: 'CHANGES_REQUESTED' })
      ]
      if (path.includes('/pulls/1/comments')) return [
        apiPost(105, { path: 'file.js', diff_hunk: '@@ context' }),
        apiPost(106, { in_reply_to_id: 105 })
      ]
      throw new Error(`Unexpected ${path}`)
    }
    const result = await fetchTopicIssue(request, 'example/repo', 1)
    assert.equal(result.kind, 'pull-request')
    assert.equal(result.posts.length, 105)
    assert.equal(result.mergedAt, date)
    assert.equal(result.archived, true)
    assert.equal(result.posts.at(-1).parentId, 'inline-comment:105')
    assert.equal(result.posts.at(-2).diffHunk, '@@ context')
    assert.equal(result.posts.at(-3).reviewState, 'CHANGES_REQUESTED')
    await assert.rejects(fetchTopicIssue(async () => ({ private: true }), 'example/repo', 1),
      /public repository/)
  })

  it('seeds only never runs discovery', async () => {
    const result = await collectTopicEvidence({
      topicDiscussion: async (repo, number) => thread(repo, number)
    }, { seedsOnly: true })
    assert.equal(result.threads.length, 2)
    assert.equal(result.coverage.length, 0)
    assert.deepEqual(result.scope.orgs, [])
  })

  it('resolves explicit issue conversions before fetching duplicate comments', async () => {
    const result = await fetchTopicIssue(async (path) => {
      if (path === '/repos/example/repo') return { private: false }
      if (path === '/repos/example/repo/issues/1') return {
        state: 'closed', html_url: 'https://github.com/example/repo/issues/1'
      }
      throw new Error('Should not fetch converted issue comments')
    }, 'example/repo', 1, async (query) => {
      assert.match(query, /CONVERTED_TO_DISCUSSION_EVENT/)
      return { repository: { issue: { timelineItems: { nodes: [{
        discussion: { url: 'https://github.com/example/repo/discussions/2' }
      }] } } } }
    })
    assert.equal(result.migratedTo, 'https://github.com/example/repo/discussions/2')
  })

  it('keeps converted issues as aliases without duplicating seed conversation posts', async () => {
    const result = await collectTopicEvidence({
      topicDiscussion: async (repo, number) => thread(repo, number),
      topicIssueSearch: async () => ({
        totalCount: 1, items: [{
          repo: 'example/repo', number: 1, url: 'https://github.com/example/repo/issues/1',
          title: 'Dark mode and LLM', body: 'A real use case', authorType: 'User', updatedAt: date
        }]
      }),
      topicIssue: async () => ({
        url: 'https://github.com/example/repo/issues/1',
        migratedTo: 'https://github.com/alphagov/govuk-design-system/discussions/6222'
      }),
      topicDiscussionList: async () => ({ discussions: [], limited: false, enabled: false })
    }, { orgs: ['example'] })
    assert.equal(result.threads.length, 2)
    assert.deepEqual(result.threads[0].aliases, ['https://github.com/example/repo/issues/1'])
    assert.deepEqual(result.threads[0].topics, ['dark-mode', 'ai'])
    assert.equal(result.threads[0].posts.length, 1)
  })

  it('deduplicates multi-term/multi-topic hits, caps samples and records every query', async () => {
    const issueCalls = []
    const result = await collectTopicEvidence({
      topicDiscussion: async (repo, number) => thread(repo, number),
      topicIssueSearch: async (query, limit) => {
        assert.match(query, /in:title,body -author:app\/dependabot/)
        assert.equal(limit, 10)
        return {
        totalCount: 20, limited: true, incomplete: false,
        items: [1, 2].map((number) => ({
          repo: 'example/repo', number, url: `https://github.com/example/repo/issues/${number}`,
          title: 'Dark mode and LLM', body: 'A real use case', authorType: 'User',
          updatedAt: `2026-11-0${number}T12:00:00Z`
        }))
      } },
      topicIssue: async (repo, number) => {
        issueCalls.push(number)
        return thread(repo, number, 'issue')
      },
      topicDiscussionList: async () => ({ discussions: [], limited: false, enabled: false })
    }, { orgs: ['example'], maxThreads: 1 })
    assert.deepEqual(issueCalls, [2])
    assert.equal(result.threads.length, 3)
    assert.deepEqual(result.threads.at(-1).topics, ['dark-mode', 'ai'])
    assert.equal(result.coverage.filter((c) => c.kind === 'issue-and-pr-search').length, 10)
    assert.ok(result.coverage.some((c) => c.candidates === 2 && c.selected === 1 && c.limited))
  })

  it('screens bot/HTML-only hits and prioritises topic-specific titles over newer incidental text', async () => {
    const calls = []
    const candidates = [
      { number: 1, title: 'Dark mode and LLM', body: 'Real request', authorType: 'Bot', updatedAt: '2026-11-09' },
      { number: 2, title: 'Unrelated', body: '<source media="prefers-color-scheme: dark" data-label="LLM">', authorType: 'User', updatedAt: '2026-11-09' },
      { number: 3, title: 'Dark mode and LLM', body: 'Real request', authorType: 'User', updatedAt: '2025-01-01' },
      { number: 4, title: 'Incidental', body: 'Related dark mode and LLM', authorType: 'User', updatedAt: '2026-11-09' }
    ].map((item) => ({
      ...item, repo: 'example/repo', url: `https://github.com/example/repo/issues/${item.number}`
    }))
    const result = await collectTopicEvidence({
      topicDiscussion: async (repo, number) => thread(repo, number),
      topicIssueSearch: async () => ({ totalCount: 4, items: candidates }),
      topicIssue: async (repo, number) => {
        calls.push(number)
        return thread(repo, number, 'issue')
      },
      topicDiscussionList: async () => ({ discussions: [], limited: false, enabled: false })
    }, { orgs: ['example'], maxThreads: 1 })
    assert.deepEqual(calls, [3])
    const coverage = result.coverage.find((c) => c.kind === 'issue-and-pr-sample')
    assert.equal(coverage.eligible, 2)
    assert.deepEqual(coverage.excluded.map((e) => e.reason),
      ['bot-authored thread', 'no topic terms outside HTML markup'])
    assert.deepEqual(coverage.selectedUrls, ['https://github.com/example/repo/issues/3'])
  })
})

describe('topic evidence review output', () => {
  it('matches explicit terms without treating arbitrary substrings or generic AI as evidence', () => {
    assert.deepEqual(matchedTerms('Dark MODE and prefers-color-scheme', TOPICS[0]),
      ['dark mode', 'prefers-color-scheme'])
    assert.deepEqual(matchedTerms('LLMs and AI and smallm', TOPICS[1]), [])
    assert.deepEqual(matchedTerms('LLM chatbot with human oversight', TOPICS[1]),
      ['LLM', 'chatbot', 'human oversight'])
    assert.deepEqual(matchedTerms('<picture><source media="(prefers-color-scheme: dark)"><img alt="Review"></picture>', TOPICS[0]), [])
  })

  it('keeps contextual posts and unknown authors, deduplicates posts and leaves labels blank', () => {
    const data = snapshot()
    data.threads[0].posts.push(data.threads[0].posts[0], post('context', 'Thanks', { author: null, kind: 'comment' }))
    const rows = evidenceRows(data)
    assert.equal(rows.length, 4)
    assert.equal(rows[1].matchedTerms, '')
    assert.equal(rows[1].author, null)
    for (const row of rows) {
      for (const field of ['quote', 'target', 'stance', 'basis', 'themes', 'useCase', 'outcome', 'confidence']) {
        assert.equal(row[field], '')
      }
    }
  })

  it('escapes CSV text and formula prefixes without changing original evidence', () => {
    const data = snapshot()
    data.threads[0].posts[0].text = '=SUM(1,2)\n"quoted"'
    const csv = topicEvidenceCsv(data)
    assert.match(csv, /"'=SUM\(1,2\)\n""quoted"""/)
    assert.equal(data.threads[0].posts[0].text, '=SUM(1,2)\n"quoted"')
    assert.match(csv, /claimId,quote,target,stance,basis,themes,useCase,outcome,confidence,notes/)
    assert.throws(() => topicEvidenceCsv({ ...data, threads: [] }), /No evidence/)
  })

  it('reports breadth and limitations without inventing stance or affiliation', () => {
    const report = topicEvidenceMarkdown(snapshot())
    assert.match(report, /No sentiment or stance has been assigned/)
    assert.match(report, /dark-mode \| 1 \| 1 \| 1 \| 1 \| 1/)
    assert.match(report, /Limited discovery steps: 1/)
    assert.match(report, /Incomplete GitHub searches: 1/)
    assert.match(report, /not participants' employers/)
    assert.match(report, /not replies/)
    assert.match(report, /review-template.csv to review.csv/)
  })
})
