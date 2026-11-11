import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  discussionActivityCsv,
  fetchDiscussionActivity,
  summariseDiscussionActivity
} from '../lib/discussions.mjs'

const collectedAt = '2026-11-05T12:00:00.000Z'
const DAY = 24 * 60 * 60 * 1000
const daysAgo = (days) => new Date(Date.parse(collectedAt) - days * DAY).toISOString()
const response = (id, days, author = 'alice', kind = 'comment') => ({
  id, createdAt: daysAgo(days), author, kind
})
const discussion = (overrides = {}) => ({
  id: 'discussion1',
  number: 1,
  title: 'Date picker',
  url: 'https://github.com/example/repo/discussions/1',
  createdAt: daysAgo(500),
  updatedAt: collectedAt,
  closed: false,
  closedAt: null,
  locked: false,
  author: { login: 'op' },
  upvoteCount: 2,
  reactions: { totalCount: 3 },
  responses: [],
  ...overrides
})
const snapshot = (discussions) => ({
  repo: 'example/repo', category: 'Community backlog', collectedAt, discussions
})
const page = (nodes, next = null) => ({
  nodes, pageInfo: { hasNextPage: next !== null, endCursor: next }
})
const apiResponse = (id, overrides = {}) => ({
  id, createdAt: daysAgo(10), deletedAt: null, author: { login: 'alice' }, ...overrides
})

describe('discussion activity metrics', () => {
  it('counts comments and nested replies separately and includes exact window boundaries', () => {
    const responses = [
      response('a', 0),
      response('b', 30, 'bob', 'reply'),
      response('c', 30 + 1 / DAY, 'bob'),
      response('d', 90, 'op', 'reply'),
      response('e', 90 + 1 / DAY, null),
      response('f', 365, 'carol'),
      response('g', 365 + 1 / DAY, 'carol'),
      response('a', 0)
    ]
    const [d] = summariseDiscussionActivity(snapshot([discussion({ responses })])).discussions
    assert.equal(d.commentCount, 5)
    assert.equal(d.replyCount, 2)
    assert.equal(d.responseCount, 7)
    assert.equal(d.uniqueCommenters, 4)
    assert.equal(d.participantCount, 4)
    assert.equal(d.unknownAuthorResponses, 1)
    assert.deepEqual(d.recent[30], {
      comments: 1, replies: 1, responses: 2, participants: 2, activeDays: 2
    })
    assert.deepEqual(d.recent[90], {
      comments: 2, replies: 2, responses: 4, participants: 3, activeDays: 3
    })
    assert.deepEqual(d.recent[365], {
      comments: 4, replies: 2, responses: 6, participants: 4, activeDays: 4
    })
    assert.equal(d.lastResponseAt, collectedAt)
    assert.equal(d.daysSinceLastResponse, 0)
    assert.equal(d.views, null)
    assert.equal(d.viewsStatus, 'unavailable')
  })

  it('does not confuse edits or the opening post with recent conversation', () => {
    const [d] = summariseDiscussionActivity(snapshot([
      discussion({ responses: [response('a', 400.9)] })
    ])).discussions
    assert.equal(d.daysSinceLastResponse, 400)
    assert.equal(d.lastResponseAt, daysAgo(400.9))
    assert.equal(d.recent[365].responses, 0)
    assert.equal(d.updatedAt, collectedAt)
    assert.equal(d.uniqueCommenters, 1)
    assert.equal(d.participantCount, 2)
  })

  it('handles unanswered threads, unknown authors, and closed discussions without excluding them', () => {
    const report = summariseDiscussionActivity(snapshot([
      discussion(),
      discussion({
        number: 2, author: null, closed: true,
        responses: [response('b', 10, null, 'reply')]
      })
    ]))
    assert.equal(report.discussions.length, 2)
    assert.equal(report.discussions[0].number, 2)
    assert.equal(report.discussions[0].participantCount, 0)
    assert.equal(report.discussions[0].closed, true)
    assert.equal(report.discussions[1].lastResponseAt, null)
    assert.equal(report.discussions[1].daysSinceLastResponse, null)
    assert.equal(report.discussions[1].participantCount, 1)
  })

  it('fails explicitly for invalid dates instead of producing misleading activity', () => {
    assert.throws(() => summariseDiscussionActivity({
      ...snapshot([]), collectedAt: 'invalid'
    }), /snapshot date/)
    for (const createdAt of ['invalid', daysAgo(-1)]) {
      assert.throws(() => summariseDiscussionActivity(snapshot([
        discussion({ responses: [{ ...response('a', 1), createdAt }] })
      ])), /response date/)
    }
  })

  it('writes all scoring fields and preserves unavailable metrics as blanks in CSV', () => {
    const report = summariseDiscussionActivity(snapshot([
      discussion({ title: 'A, "quoted"\r\nquestion' })
    ]))
    const csv = discussionActivityCsv(report)
    assert.match(csv, /"A, ""quoted""\r\nquestion"/)
    assert.match(csv, /collectedAt,number,title,url,category/)
    assert.match(csv, /responses30d,participants30d,activeDays30d/)
    assert.match(csv, /responses90d,participants90d,activeDays90d/)
    assert.match(csv, /responses365d,participants365d,activeDays365d/)
    assert.match(csv, /,2,3,,unavailable,/)
    const ordinary = discussionActivityCsv(summariseDiscussionActivity(snapshot([discussion()])))
    const [header, row] = ordinary.trimEnd().split('\n').map((line) => line.split(','))
    assert.equal(header.length, row.length)
    assert.equal(row[header.indexOf('views')], '')
    assert.equal(row[header.indexOf('daysSinceLastResponse')], '')
    assert.equal(row[header.indexOf('collectedAt')], collectedAt)
  })
})

describe('discussion activity collection', () => {
  it('fetches every category, discussion, comment and reply page, including replies to deleted comments', async () => {
    const calls = []
    const graphql = async (query, variables) => {
      calls.push(variables)
      if (query.includes('ActivityCategories')) {
        return { repository: { discussionCategories: variables.after
          ? page([{ id: 'backlog', name: 'Community backlog' }])
          : page([{ id: 'other', name: 'Other' }], 'categories2')
        } }
      }
      if (query.includes('ActivityDiscussions')) {
        assert.equal(variables.categoryId, 'backlog')
        return { repository: { discussions: variables.after
          ? page([discussion({ id: 'discussion2', number: 2, closed: true })])
          : page([discussion()], 'discussions2')
        } }
      }
      if (query.includes('ActivityComments')) {
        if (variables.id === 'discussion2') return { node: { comments: page([]) } }
        return { node: { comments: variables.after
          ? page([apiResponse('comment2', { replies: page([]) })])
          : page([apiResponse('comment1', {
            deletedAt: daysAgo(1),
            replies: page([apiResponse('reply1')], 'replies2')
          })], 'comments2')
        } }
      }
      if (query.includes('ActivityReplies')) {
        assert.equal(variables.id, 'comment1')
        return { node: { replies: variables.after === 'replies2'
          ? page([apiResponse('reply2')], 'replies3')
          : page([apiResponse('reply3', { author: null })])
        } }
      }
      throw new Error('Unexpected query')
    }
    const result = await fetchDiscussionActivity(graphql, 'example/repo', 'community backlog')
    assert.equal(result.category, 'Community backlog')
    assert.ok(Number.isFinite(Date.parse(result.collectedAt)))
    assert.equal(result.discussions.length, 2)
    assert.equal(result.discussions[1].closed, true)
    assert.deepEqual(result.discussions[0].responses.map((r) => [r.id, r.kind]), [
      ['reply1', 'reply'], ['reply2', 'reply'], ['reply3', 'reply'], ['comment2', 'comment']
    ])
    assert.equal(result.discussions[0].responses[2].author, null)
    assert.equal(calls.length, 9)
    assert.ok(calls.some((v) => v.after === 'comments2'))
    assert.ok(calls.some((v) => v.after === 'replies3'))
  })

  it('reports a missing category and propagates API failures', async () => {
    await assert.rejects(fetchDiscussionActivity(async () => ({
      repository: { discussionCategories: page([]) }
    }), 'example/repo', 'Community backlog'), /No discussion category/)
    await assert.rejects(fetchDiscussionActivity(async () => {
      throw new Error('GraphQL unavailable')
    }, 'example/repo', 'Community backlog'), /GraphQL unavailable/)
  })

  it('rejects incomplete pagination rather than exporting partial results', async () => {
    await assert.rejects(fetchDiscussionActivity(async () => ({
      repository: {
        discussionCategories: { nodes: [], pageInfo: { hasNextPage: true, endCursor: null } }
      }
    }), 'example/repo', 'Community backlog'), /without a cursor/)
    await assert.rejects(fetchDiscussionActivity(async () => ({
      repository: { discussionCategories: page([], 'same-cursor') }
    }), 'example/repo', 'Community backlog'), /repeated pagination cursor/)
  })
})
