import { fetchDiscussionResponses } from './discussions.mjs'

export const TOPICS = [
  {
    id: 'dark-mode',
    terms: ['dark mode', 'dark theme', 'colour scheme', 'color scheme', 'prefers-color-scheme'],
    seed: { repo: 'alphagov/govuk-design-system', number: 6222 }
  },
  {
    id: 'ai',
    terms: ['generative AI', 'LLM', 'chatbot', 'AI-generated', 'human oversight'],
    seed: { repo: 'alphagov/govuk-design-system', number: 3804 }
  }
]

export const PILOT_ORGS = ['alphagov', 'ministryofjustice', 'DFE-Digital', 'nhsuk', 'UKHomeOffice', 'hmrc']

export const REVIEW_LABELS = {
  stance: ['supportive', 'conditional', 'opposed', 'exploratory', 'unclear'],
  basis: ['user research', 'delivery experience', 'technical argument', 'preference'],
  themes: ['accessibility', 'usability', 'trust', 'privacy', 'accuracy', 'maintenance', 'cost', 'consistency', 'sustainability'],
  useCase: ['citizen-facing', 'staff tool', 'developer tooling', 'unclear'],
  outcome: ['requested', 'exploring', 'trialled', 'deferred', 'rejected', 'adopted']
}

export function matchedTerms(text, topic) {
  const prose = text.replace(/<[^>]*>/g, ' ')
  return topic.terms.filter((term) => {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return new RegExp(`\\b${escaped}\\b`, 'i').test(prose)
  })
}

export async function fetchTopicDiscussion(graphql, repo, number) {
  const [owner, name] = repo.split('/')
  const data = await graphql(
    `query TopicDiscussion($owner: String!, $name: String!, $number: Int!) {
      repository(owner: $owner, name: $name) {
        isPrivate
        discussion(number: $number) {
          id number title url bodyText createdAt updatedAt closed closedAt
          author { login }
        }
      }
    }`,
    { owner, name, number }
  )
  if (!data.repository || data.repository.isPrivate) {
    throw new Error(`Evidence collection requires a public repository: ${repo}`)
  }
  const discussion = data.repository.discussion
  if (!discussion) throw new Error(`Discussion not found: ${repo}#${number}`)
  return {
    repo,
    kind: 'discussion',
    number,
    title: discussion.title,
    url: discussion.url,
    state: discussion.closed ? 'closed' : 'open',
    closedAt: discussion.closedAt,
    posts: [{
      id: discussion.id,
      kind: 'opening',
      text: discussion.bodyText,
      url: discussion.url,
      author: discussion.author?.login ?? null,
      createdAt: discussion.createdAt,
      updatedAt: discussion.updatedAt,
      parentId: null
    }, ...await fetchDiscussionResponses(graphql, discussion.id, { includeText: true })]
  }
}

export async function findTopicDiscussions(graphql, repo, maxPages = 2) {
  const [owner, name] = repo.split('/')
  const discussions = []
  let after = null
  for (let page = 0; page < maxPages; page++) {
    const data = await graphql(
      `query TopicDiscussionList($owner: String!, $name: String!, $after: String) {
        repository(owner: $owner, name: $name) {
          isPrivate hasDiscussionsEnabled
          discussions(first: 100, after: $after, orderBy: {field: UPDATED_AT, direction: DESC}) {
            pageInfo { hasNextPage endCursor }
            nodes { number title bodyText updatedAt }
          }
        }
      }`,
      { owner, name, after }
    )
    if (!data.repository || data.repository.isPrivate) {
      throw new Error(`Evidence collection requires a public repository: ${repo}`)
    }
    if (!data.repository.hasDiscussionsEnabled) {
      return { discussions: [], limited: false, enabled: false }
    }
    const connection = data.repository.discussions
    discussions.push(...connection.nodes)
    if (!connection.pageInfo.hasNextPage) return { discussions, limited: false, enabled: true }
    const next = connection.pageInfo.endCursor
    if (!next || next === after) throw new Error(`Invalid discussions cursor for ${repo}`)
    after = next
  }
  return { discussions, limited: true, enabled: true }
}

async function restPages(request, path) {
  const items = []
  for (let page = 1; ; page++) {
    const batch = await request(`${path}?per_page=100&page=${page}`)
    items.push(...batch)
    if (batch.length < 100) return items
  }
}

export async function searchTopicIssues(request, query, limit = 5) {
  const result = await request(`/search/issues?per_page=${limit}&sort=updated&order=desc&q=${encodeURIComponent(query)}`)
  return {
    query,
    totalCount: result.total_count,
    incomplete: result.incomplete_results,
    limited: result.total_count > result.items.length,
    items: result.items.map((item) => ({
      repo: item.repository_url.replace('https://api.github.com/repos/', ''),
      number: item.number,
      kind: item.pull_request ? 'pull-request' : 'issue',
      url: item.html_url,
      title: item.title,
      body: item.body ?? '',
      authorType: item.user?.type ?? null,
      updatedAt: item.updated_at
    }))
  }
}

export async function fetchTopicIssue(request, repo, number, graphql) {
  const metadata = await request(`/repos/${repo}`)
  if (metadata.private) throw new Error(`Evidence collection requires a public repository: ${repo}`)
  const issue = await request(`/repos/${repo}/issues/${number}`)
  if (!issue.pull_request && issue.state === 'closed') {
    const [owner, name] = repo.split('/')
    const data = await graphql(
      `query TopicIssueConversion($owner: String!, $name: String!, $number: Int!) {
        repository(owner: $owner, name: $name) {
          issue(number: $number) {
            timelineItems(last: 1, itemTypes: [CONVERTED_TO_DISCUSSION_EVENT]) {
              nodes { ... on ConvertedToDiscussionEvent { discussion { url } } }
            }
          }
        }
      }`,
      { owner, name, number }
    )
    const conversion = data.repository.issue.timelineItems.nodes[0]
    if (conversion) {
      if (!conversion.discussion?.url) throw new Error(`Missing converted discussion for ${repo}#${number}`)
      return { repo, number, url: issue.html_url, migratedTo: conversion.discussion.url }
    }
  }
  const post = (item, kind, parentId = null) => ({
    id: `${kind}:${item.id}`,
    kind,
    text: item.body ?? '',
    url: item.html_url,
    author: item.user?.login ?? null,
    createdAt: item.created_at ?? item.submitted_at,
    updatedAt: item.updated_at ?? item.submitted_at,
    parentId
  })
  const opening = post(issue, 'opening')
  const posts = [
    opening,
    ...(await restPages(request, `/repos/${repo}/issues/${number}/comments`))
      .map((item) => post(item, 'comment', opening.id))
  ]
  let mergedAt = null
  if (issue.pull_request) {
    const pull = await request(`/repos/${repo}/pulls/${number}`)
    mergedAt = pull.merged_at
    const reviews = await restPages(request, `/repos/${repo}/pulls/${number}/reviews`)
    // Review state without an accompanying argument is not stance evidence.
    posts.push(...reviews.filter((item) => item.body?.trim())
      .map((item) => ({ ...post(item, 'review', opening.id), reviewState: item.state })))
    const comments = await restPages(request, `/repos/${repo}/pulls/${number}/comments`)
    posts.push(...comments.map((item) => ({
      ...post(item, 'inline-comment', item.in_reply_to_id
        ? `inline-comment:${item.in_reply_to_id}` : opening.id),
      path: item.path,
      diffHunk: item.diff_hunk
    })))
  }
  return {
    repo,
    kind: issue.pull_request ? 'pull-request' : 'issue',
    number,
    title: issue.title,
    url: issue.html_url,
    state: issue.state,
    closedAt: issue.closed_at,
    mergedAt,
    archived: metadata.archived,
    posts
  }
}

export async function collectTopicEvidence(github, {
  orgs = PILOT_ORGS,
  maxThreads = 3,
  discussionRepos = [],
  seedsOnly = false
} = {}) {
  const threads = new Map()
  const coverage = []
  const addThread = (thread, topic, discovery) => {
    const existing = threads.get(thread.url)
    if (existing) {
      if (!existing.topics.includes(topic.id)) existing.topics.push(topic.id)
      existing.discovery.push(discovery)
    } else {
      threads.set(thread.url, { ...thread, topics: [topic.id], discovery: [discovery] })
    }
  }
  for (const topic of TOPICS) {
    addThread(await github.topicDiscussion(topic.seed.repo, topic.seed.number), topic, 'backlog seed')
  }
  if (!seedsOnly) {
    for (const org of orgs) {
      for (const topic of TOPICS) {
        const candidates = new Map()
        for (const term of topic.terms) {
          const query = `org:${org} is:public "${term}" in:title,body -author:app/dependabot -author:app/renovate`
          const result = await github.topicIssueSearch(query, Math.max(10, maxThreads))
          coverage.push({
            kind: 'issue-and-pr-search', org, topic: topic.id, term,
            query, totalCount: result.totalCount, returned: result.items.length,
            limited: result.limited, incomplete: result.incomplete
          })
          for (const item of result.items) candidates.set(item.url, item)
        }
        const screened = [...candidates.values()].map((item) => ({
          ...item,
          titleMatches: matchedTerms(item.title, topic).length,
          textMatches: matchedTerms(`${item.title}\n${item.body}`, topic).length
        }))
        const eligible = screened.filter((item) => item.authorType !== 'Bot' && item.textMatches > 0)
        const selected = eligible
          .sort((a, b) => b.titleMatches - a.titleMatches ||
            b.updatedAt.localeCompare(a.updatedAt) || a.url.localeCompare(b.url))
          .slice(0, maxThreads)
        coverage.push({
          kind: 'issue-and-pr-sample', org, topic: topic.id,
          candidates: candidates.size, eligible: eligible.length, selected: selected.length,
          excluded: screened.filter((item) => item.authorType === 'Bot' || !item.textMatches)
            .map((item) => ({
              url: item.url,
              reason: item.authorType === 'Bot' ? 'bot-authored thread' : 'no topic terms outside HTML markup'
            })),
          selectedUrls: selected.map((item) => item.url),
          limited: eligible.length > selected.length
        })
        for (const item of selected) {
          const thread = threads.get(item.url) ?? await github.topicIssue(item.repo, item.number)
          if (thread.migratedTo) {
            const target = new URL(thread.migratedTo)
            const match = target.pathname.match(/^\/([^/]+\/[^/]+)\/discussions\/(\d+)$/)
            if (target.origin !== 'https://github.com' || !match) {
              throw new Error(`Invalid converted discussion URL: ${thread.migratedTo}`)
            }
            const canonical = threads.get(thread.migratedTo) ??
              await github.topicDiscussion(match[1], Number(match[2]))
            canonical.aliases ??= []
            if (!canonical.aliases.includes(thread.url)) canonical.aliases.push(thread.url)
            addThread(canonical, topic, `converted issue: ${thread.url}`)
          } else {
            addThread(thread, topic, `org:${org} keyword search`)
          }
        }
      }
    }
    const repos = new Set([
      ...discussionRepos,
      ...[...threads.values()].map((thread) => thread.repo)
    ])
    for (const repo of repos) {
      const result = await github.topicDiscussionList(repo)
      coverage.push({
        kind: 'discussion-list', repo, returned: result.discussions.length,
        limited: result.limited, enabled: result.enabled,
        note: 'Title/opening-text matching only; at most 200 recently updated discussions.'
      })
      for (const topic of TOPICS) {
        const candidates = result.discussions
          .filter((d) => matchedTerms(`${d.title}\n${d.bodyText}`, topic).length)
        const selected = candidates.slice(0, maxThreads)
        coverage.push({
          kind: 'discussion-sample', repo, topic: topic.id,
          candidates: candidates.length, selected: selected.length,
          limited: candidates.length > selected.length
        })
        for (const item of selected) {
          const url = `https://github.com/${repo}/discussions/${item.number}`
          addThread(threads.get(url) ?? await github.topicDiscussion(repo, item.number),
            topic, 'discussion title/opening-text search')
        }
      }
    }
  }
  return {
    schemaVersion: 1,
    collectedAt: new Date().toISOString(),
    scope: { orgs: seedsOnly ? [] : orgs, maxThreads, seedsOnly, discussionRepos },
    topics: TOPICS,
    reviewLabels: REVIEW_LABELS,
    coverage,
    threads: [...threads.values()]
  }
}

export function evidenceRows(snapshot) {
  return snapshot.threads.flatMap((thread) => thread.topics.flatMap((topicId) => {
    const topic = snapshot.topics.find((t) => t.id === topicId)
    return [...new Map(thread.posts.map((post) => [post.id, post])).values()].map((post) => ({
      topic: topicId,
      threadCollectedAt: thread.collectedAt,
      postId: post.id,
      repo: thread.repo,
      repoOwner: thread.repo.split('/')[0],
      threadKind: thread.kind,
      threadTitle: thread.title,
      threadUrl: thread.url,
      state: thread.state,
      postKind: post.kind,
      parentId: post.parentId,
      author: post.author,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      url: post.url,
      matchedTerms: matchedTerms(`${post.kind === 'opening' ? thread.title : ''}\n${post.text}`, topic).join('; '),
      text: post.text,
      path: post.path ?? '',
      diffHunk: post.diffHunk ?? '',
      claimId: '',
      quote: '',
      target: '',
      stance: '',
      basis: '',
      themes: '',
      useCase: '',
      outcome: '',
      confidence: '',
      notes: ''
    }))
  }))
}

export function topicEvidenceCsv(snapshot) {
  const rows = evidenceRows(snapshot)
  if (!rows.length) throw new Error('No evidence posts collected')
  const fields = ['collectedAt', ...Object.keys(rows[0])]
  const cell = (value) => {
    // Keep public, untrusted text from being executed by spreadsheet software.
    const text = String(value ?? '').replace(/^([ \t\r\n]*)([=+@-])/, "$1'$2")
    return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
  }
  return [fields, ...rows.map((row) => fields.map((field) =>
    field === 'collectedAt' ? snapshot.collectedAt : row[field]
  ))].map((row) => row.map(cell).join(',')).join('\n') + '\n'
}

export function topicEvidenceMarkdown(snapshot) {
  const lines = [
    '# Dark mode and AI: evidence review pilot',
    '',
    `Collected ${snapshot.collectedAt}. No sentiment or stance has been assigned.`,
    '',
    'This is a purposive public-GitHub sample, not representative government sentiment or implementation coverage.',
    'Repository owners describe where a conversation happened, not participants\' employers.',
    'Known-account counts include bots in collected context; they are not counts of human supporters.',
    'Closed/merged status and reactions are not evidence of support. Silence is not opposition.',
    'Cached threads may have different collection times; deleted posts are unavailable.',
    'Converted issues use their discussion as the canonical thread; original issue URLs are retained as aliases.',
    '',
    '## Collected evidence',
    '',
    '| Topic | Threads | Repositories | Repository owners | Posts | Known accounts |',
    '|---|---|---|---|---|---|'
  ]
  for (const topic of snapshot.topics) {
    const threads = snapshot.threads.filter((t) => t.topics.includes(topic.id))
    const posts = threads.flatMap((t) => t.posts)
    lines.push(`| ${topic.id} | ${threads.length} | ${new Set(threads.map((t) => t.repo)).size} | ${
      new Set(threads.map((t) => t.repo.split('/')[0])).size
    } | ${posts.length} | ${new Set(posts.map((p) => p.author).filter(Boolean)).size} |`)
  }
  lines.push('', '## Manual claim review', '',
    'Use topic-evidence.json for original text. Copy review-template.csv to review.csv before editing so reruns preserve your review.',
    'Read opening posts and parent replies before coding. Rows without keyword matches are retained for context.',
    'For each claim, copy its row if needed, assign a claimId, fill quote with an exact excerpt of text, and name the specific target being evaluated.',
    'Leave non-evidence/context rows unlabelled. Allow multiple claims and semicolon-separated basis/themes/outcomes.',
    'Record confidence (0-1) and rationale; inspect low-confidence and contradictory claims manually.',
    'Separate citizen-facing AI from staff tools and developer tooling. High contrast is not automatically dark mode.',
    'Keep user research distinct from personal preference; do not infer user needs from code changes.',
    '')
  for (const [field, labels] of Object.entries(REVIEW_LABELS)) {
    lines.push(`- ${field}: ${labels.join(' / ')}`)
  }
  lines.push('', 'After review, summarise needs, blockers and contradictions with quotes and permalinks.',
    'Count distinct accounts/repos/owners per stance, not mentions; report unknown authors and sampling limitations.',
    'Do not combine counts into a positive-sentiment percentage or change audit scores.',
    '', '## Discovery coverage', '',
    `Organisation scope: ${snapshot.scope.orgs.join(', ') || 'backlog seeds only'}.`,
    `Sample cap: ${snapshot.scope.maxThreads} issue/PR threads per topic per organisation, and discussions per topic per repository.`,
    'Issue/PR searches include open and closed threads, using titles/opening text and recent-update ordering.',
    'Each term returns at most max(10, sample cap) candidates. Topic-specific titles rank ahead of body-only matches.',
    'Automated dependency authors are excluded in queries; bot-authored threads and HTML-attribute-only matches are screened out.',
    'Comments-only mentions are not used for discovery; all comments/reviews in selected threads remain available for context.',
    'Discussions are searched only in seed repositories, sampled issue/PR repositories and explicitly supplied repositories.',
    'Discussion discovery matches titles/opening text, not replies; other repositories/discussions may be missed.',
    'AI vocabulary is deliberately specific and will miss some AI use cases; keyword hits may be irrelevant.',
    'Archived/stale repos are not explicitly excluded; availability still depends on GitHub search indexing.',
    `Limited discovery steps: ${snapshot.coverage.filter((c) => c.limited).length}.`,
    `Incomplete GitHub searches: ${snapshot.coverage.filter((c) => c.incomplete).length}.`,
    'Full queries, result counts, limits and sample selections are recorded in topic-evidence.json.',
    '', '## Threads', '')
  for (const thread of snapshot.threads) {
    const title = thread.title.replace(/[\r\n]/g, ' ').replace(/([\\[\]])/g, '\\$1')
    lines.push(`- [${title}](${thread.url}) — ${thread.repo}, ${thread.kind}, ${thread.state}; topics: ${
      thread.topics.join(', ')
    }; ${thread.posts.length} posts`)
    for (const alias of thread.aliases ?? []) lines.push(`  - Converted issue (not counted again): ${alias}`)
  }
  return lines.join('\n') + '\n'
}
