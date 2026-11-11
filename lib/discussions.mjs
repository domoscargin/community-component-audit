const DAY = 24 * 60 * 60 * 1000
export const ACTIVITY_WINDOWS = [30, 90, 365]

async function collectPages(loadPage, after = null) {
  const nodes = []
  do {
    const page = await loadPage(after)
    nodes.push(...page.nodes)
    if (page.pageInfo.hasNextPage && !page.pageInfo.endCursor) {
      throw new Error('GitHub returned a paginated connection without a cursor')
    }
    const next = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null
    if (next !== null && next === after) {
      throw new Error('GitHub returned a repeated pagination cursor')
    }
    after = next
  } while (after !== null)
  return nodes
}

export async function fetchDiscussionActivity(graphql, repo, categoryName) {
  const [owner, name] = repo.split('/')
  const categories = await collectPages(async (after) => {
    const data = await graphql(
      `query ActivityCategories($owner: String!, $name: String!, $after: String) {
        repository(owner: $owner, name: $name) {
          discussionCategories(first: 100, after: $after) {
            pageInfo { hasNextPage endCursor }
            nodes { id name }
          }
        }
      }`,
      { owner, name, after }
    )
    return data.repository.discussionCategories
  })
  const category = categories.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase()
  )
  if (!category) {
    throw new Error(`No discussion category "${categoryName}" in ${repo}`)
  }

  const discussions = await collectPages(async (after) => {
    const data = await graphql(
      `query ActivityDiscussions($owner: String!, $name: String!, $categoryId: ID!, $after: String) {
        repository(owner: $owner, name: $name) {
          discussions(first: 100, after: $after, categoryId: $categoryId) {
            pageInfo { hasNextPage endCursor }
            nodes {
              id number title url createdAt updatedAt closed closedAt locked
              author { login }
              upvoteCount
              reactions { totalCount }
            }
          }
        }
      }`,
      { owner, name, categoryId: category.id, after }
    )
    return data.repository.discussions
  })

  for (const discussion of discussions) {
    discussion.responses = await fetchDiscussionResponses(graphql, discussion.id)
  }

  return {
    repo,
    category: category.name,
    collectedAt: new Date().toISOString(),
    discussions
  }
}

export async function fetchDiscussionResponses(graphql, id, { includeText = false } = {}) {
  const textFields = includeText ? 'bodyText url updatedAt' : ''
  const comments = await collectPages(async (after) => {
    const data = await graphql(
      `query ActivityComments($id: ID!, $after: String) {
        node(id: $id) {
          ... on Discussion {
            comments(first: 100, after: $after) {
              pageInfo { hasNextPage endCursor }
              nodes {
                id createdAt deletedAt author { login }
                ${textFields}
                replies(first: 100) {
                  pageInfo { hasNextPage endCursor }
                  nodes { id createdAt deletedAt author { login } ${textFields} }
                }
              }
            }
          }
        }
      }`,
      { id, after }
    )
    return data.node.comments
  })
  const responses = []
  for (const comment of comments) {
    const replies = [...comment.replies.nodes]
    if (comment.replies.pageInfo.hasNextPage) {
      if (!comment.replies.pageInfo.endCursor) {
        throw new Error(`Missing replies cursor for comment ${comment.id}`)
      }
      replies.push(...await collectPages(async (after) => {
        const data = await graphql(
          `query ActivityReplies($id: ID!, $after: String!) {
            node(id: $id) {
              ... on DiscussionComment {
                replies(first: 100, after: $after) {
                  pageInfo { hasNextPage endCursor }
                  nodes { id createdAt deletedAt author { login } ${textFields} }
                }
              }
            }
          }`,
          { id: comment.id, after }
        )
        return data.node.replies
      }, comment.replies.pageInfo.endCursor))
    }
    for (const [kind, items] of [['comment', [comment]], ['reply', replies]]) {
      for (const response of items) {
        if (response.deletedAt) continue
        responses.push({
          id: response.id,
          kind,
          createdAt: response.createdAt,
          author: response.author?.login ?? null,
          ...(includeText ? {
            text: response.bodyText,
            url: response.url,
            updatedAt: response.updatedAt,
            parentId: kind === 'reply' ? comment.id : id
          } : {})
        })
      }
    }
  }
  return responses
}

function participants(responses) {
  return new Set(responses.map((r) => r.author).filter(Boolean))
}

export function summariseDiscussionActivity(snapshot) {
  const asOf = Date.parse(snapshot.collectedAt)
  if (!Number.isFinite(asOf)) throw new Error('Invalid discussion snapshot date')
  const discussions = snapshot.discussions.map((discussion) => {
    const responses = [...new Map(
      discussion.responses.map((r) => [r.id, r])
    ).values()]
    const dated = responses.map((response) => {
      const time = Date.parse(response.createdAt)
      if (!Number.isFinite(time) || time > asOf) {
        throw new Error(`Invalid response date in discussion ${discussion.number}`)
      }
      return { ...response, time }
    })
    const lastTime = dated.reduce(
      (latest, r) => latest === null ? r.time : Math.max(latest, r.time),
      null
    )
    const commenters = participants(responses)
    const allParticipants = new Set(commenters)
    if (discussion.author?.login) allParticipants.add(discussion.author.login)
    const recent = Object.fromEntries(ACTIVITY_WINDOWS.map((days) => {
      const active = dated.filter((r) => r.time >= asOf - days * DAY)
      return [days, {
        comments: active.filter((r) => r.kind === 'comment').length,
        replies: active.filter((r) => r.kind === 'reply').length,
        responses: active.length,
        participants: participants(active).size,
        activeDays: new Set(active.map((r) => r.createdAt.slice(0, 10))).size
      }]
    }))
    return {
      number: discussion.number,
      title: discussion.title,
      url: discussion.url,
      category: snapshot.category,
      closed: discussion.closed,
      closedAt: discussion.closedAt,
      locked: discussion.locked,
      createdAt: discussion.createdAt,
      updatedAt: discussion.updatedAt,
      commentCount: responses.filter((r) => r.kind === 'comment').length,
      replyCount: responses.filter((r) => r.kind === 'reply').length,
      responseCount: responses.length,
      uniqueCommenters: commenters.size,
      participantCount: allParticipants.size,
      unknownAuthorResponses: responses.filter((r) => !r.author).length,
      lastResponseAt: lastTime === null ? null : new Date(lastTime).toISOString(),
      daysSinceLastResponse: lastTime === null ? null : Math.floor((asOf - lastTime) / DAY),
      upvotes: discussion.upvoteCount,
      reactions: discussion.reactions.totalCount,
      views: null,
      viewsStatus: 'unavailable',
      recent
    }
  }).sort((a, b) => b.responseCount - a.responseCount || a.number - b.number)
  return {
    repo: snapshot.repo,
    category: snapshot.category,
    collectedAt: snapshot.collectedAt,
    activityWindowsDays: ACTIVITY_WINDOWS,
    viewsNote: 'GitHub does not expose per-discussion views through its public API.',
    discussions
  }
}

export function discussionActivityCsv(report) {
  const fields = [
    'number', 'title', 'url', 'category', 'closed', 'closedAt', 'locked',
    'createdAt', 'updatedAt', 'commentCount', 'replyCount', 'responseCount',
    'uniqueCommenters', 'participantCount', 'unknownAuthorResponses',
    'lastResponseAt', 'daysSinceLastResponse', 'upvotes', 'reactions',
    'views', 'viewsStatus'
  ]
  const recentFields = ['comments', 'replies', 'responses', 'participants', 'activeDays']
  const header = [
    'collectedAt', ...fields,
    ...ACTIVITY_WINDOWS.flatMap((days) => recentFields.map((field) => `${field}${days}d`))
  ]
  const rows = report.discussions.map((discussion) => [
    report.collectedAt,
    ...fields.map((field) => discussion[field]),
    ...ACTIVITY_WINDOWS.flatMap((days) =>
      recentFields.map((field) => discussion.recent[days][field])
    )
  ])
  return [header, ...rows].map((row) => row.map((value) => {
    const text = String(value ?? '')
    return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
  }).join(',')).join('\n') + '\n'
}
