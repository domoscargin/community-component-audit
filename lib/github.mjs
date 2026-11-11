import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import timers from 'node:timers/promises'
import { fetchDiscussionActivity } from './discussions.mjs'
import {
  fetchTopicDiscussion, fetchTopicIssue, findTopicDiscussions, searchTopicIssues
} from './topic-evidence.mjs'

const API = 'https://api.github.com'
const HOUR = 60 * 60 * 1000

function resolveToken() {
  const token = process.env.GITHUB_TOKEN || process.env.GITHUB_AUTH_TOKEN
  if (token) return token

  try {
    return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8' }).trim()
  } catch {
    throw new Error(
      'No GitHub token found. Set GITHUB_TOKEN or log in with `gh auth login`.'
    )
  }
}

/**
 * Minimal GitHub client with on-disk caching and rate limit handling
 *
 * @param {object} options
 * @param {string} options.cacheDir
 * @param {boolean} [options.refresh] - Ignore cached responses
 * @param {number} [options.maxAgeHours] - Cache lifetime for most requests (default 30 days)
 */
export function createClient({ cacheDir, refresh = false, maxAgeHours = 24 * 30 }) {
  const token = resolveToken()
  let lastCodeSearch = 0
  let lastIssueSearch = 0

  async function cached(key, fn, ttlHours = maxAgeHours) {
    const file = join(
      cacheDir,
      `${createHash('sha1').update(key).digest('hex')}.json`
    )

    if (!refresh) {
      try {
        const { savedAt, data } = JSON.parse(await readFile(file, 'utf8'))
        if (Date.now() - savedAt < ttlHours * HOUR) return data
      } catch {}
    }

    const data = await fn()
    await mkdir(cacheDir, { recursive: true })
    await writeFile(file, JSON.stringify({ key, savedAt: Date.now(), data }))
    return data
  }

  async function request(path, init = {}, attempt = 0) {
    let res
    try {
      res = await fetch(path.startsWith('http') ? path : API + path, {
        ...init,
        headers: {
          accept: 'application/vnd.github+json',
          authorization: `Bearer ${token}`,
          'user-agent': 'community-component-audit',
          'x-github-api-version': '2022-11-28',
          ...init.headers
        }
      })
    } catch (error) {
      // Network errors (dropped connections, proxy resets) are usually brief
      if (attempt < 4) {
        const waitMs = 5000 * 2 ** attempt
        console.warn(`  Network error (${error.cause?.code ?? error.message}), retrying in ${waitMs / 1000}s…`)
        await timers.setTimeout(waitMs)
        return request(path, init, attempt + 1)
      }
      throw error
    }

    const errorText = res.ok ? null : await res.text()
    const secondaryRateLimit = res.status === 403 && /secondary rate limit/i.test(errorText)
    const rateLimited =
      res.status === 429 ||
      secondaryRateLimit ||
      (res.status === 403 && res.headers.get('x-ratelimit-remaining') === '0') ||
      (res.status === 403 && res.headers.has('retry-after'))

    if (rateLimited && attempt < 5) {
      const retryAfter = Number(res.headers.get('retry-after'))
      const reset = Number(res.headers.get('x-ratelimit-reset'))
      const waitMs = retryAfter
        ? retryAfter * 1000
        : reset
          ? Math.max(reset * 1000 - Date.now(), 0) + 1000
          : 60_000 * 2 ** attempt

      console.warn(`  Rate limited, waiting ${Math.ceil(waitMs / 1000)}s…`)
      await timers.setTimeout(waitMs)
      return request(path, init, attempt + 1)
    }

    if (!res.ok) {
      throw new Error(
        `GitHub ${res.status} ${res.statusText} for ${path}: ${errorText}`
      )
    }

    return res.json()
  }

  async function graphql(query, variables) {
    const res = await request('/graphql', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query, variables })
    })

    if (res.errors?.length) {
      throw new Error(`GraphQL: ${res.errors.map((e) => e.message).join(', ')}`)
    }

    return res.data
  }

  return {
    /**
     * Fetch a public web page as text (no GitHub auth)
     *
     * @param {string} url
     */
    page(url) {
      return cached(`page:${url}`, async () => {
        const res = await fetch(url, {
          headers: { 'user-agent': 'community-component-audit' }
        })
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText} for ${url}`)
        }
        return res.text()
      })
    },

    /**
     * @param {string} repo - owner/name
     */
    repo(repo) {
      return cached(`repo:${repo}`, async () => {
        const r = await request(`/repos/${repo}`)
        return {
          defaultBranch: r.default_branch,
          archived: r.archived,
          pushedAt: r.pushed_at,
          url: r.html_url
        }
      })
    },

    /**
     * @param {string} repo - owner/name
     * @param {string} ref - Branch or SHA
     * @returns {Promise<string[]>} File and directory paths
     */
    tree(repo, ref) {
      return cached(`tree:${repo}:${ref}`, async () => {
        const res = await request(
          `/repos/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`
        )
        if (res.truncated) {
          console.warn(`  Warning: tree for ${repo} is truncated`)
        }
        return res.tree.map((node) => node.path)
      })
    },

    /**
     * Files (with content hashes) in a repo, cached for a week
     *
     * @param {string} repo - owner/name
     * @param {string} [ref]
     * @returns {Promise<{ files: { path: string, sha: string }[], truncated: boolean }>}
     */
    files(repo, ref = 'HEAD') {
      return cached(
        `files:${repo}:${ref}`,
        async () => {
          const res = await request(
            `/repos/${repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`
          )
          return {
            truncated: Boolean(res.truncated),
            files: res.tree
              .filter((node) => node.type === 'blob')
              .map(({ path, sha }) => ({ path, sha }))
          }
        },
        24 * 30
      )
    },

    /**
     * List a user or organisation's repos
     *
     * @param {string} owner
     * @returns {Promise<{ name: string, fullName: string, archived: boolean, fork: boolean, size: number, pushedAt: string }[]>}
     */
    listRepos(owner) {
      return cached(`repos:${owner}`, async () => {
        const account = await request(`/users/${owner}`)
        const base =
          account.type === 'Organization'
            ? `/orgs/${owner}/repos`
            : `/users/${owner}/repos`

        const repos = []
        for (let page = 1; page <= 20; page++) {
          const batch = await request(`${base}?per_page=100&page=${page}`)
          for (const r of batch) {
            repos.push({
              name: r.name,
              fullName: r.full_name,
              archived: r.archived,
              fork: r.fork,
              size: r.size,
              pushedAt: r.pushed_at
            })
          }
          if (batch.length < 100) break
        }
        return repos
      })
    },

    /**
     * A file's content by its blob SHA, decoded as UTF-8
     *
     * @param {string} repo - owner/name
     * @param {string} sha
     * @returns {Promise<string>}
     */
    blob(repo, sha) {
      return cached(
        `blob:${repo}:${sha}`,
        async () => {
          const res = await request(
            `/repos/${repo}/git/blobs/${sha}`
          )
          return Buffer.from(res.content, 'base64').toString('utf8')
        },
        24 * 30
      )
    },

    /**
     * Monthly npm downloads for a package (null if unknown)
     *
     * @param {string} name
     */
    async npmDownloads(name) {
      return cached(
        `npm:${name}`,
        async () => {
          const res = await fetch(
            `https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(name)}`,
            { headers: { 'user-agent': 'community-component-audit' } }
          )
          if (!res.ok) return null
          return (await res.json()).downloads ?? null
        },
        24 * 30
      )
    },

    /**
     * Open issues (not pull requests)
     *
     * @param {string} repo - owner/name
     * @param {number} [maxPages]
     */
    openIssues(repo, maxPages = 10) {
      return cached(`issues2:${repo}:${maxPages}`, async () => {
        const issues = []

        for (let page = 1; page <= maxPages; page++) {
          const batch = await request(
            `/repos/${repo}/issues?state=open&per_page=100&page=${page}`
          )

          for (const issue of batch) {
            if (issue.pull_request) continue
            issues.push({
              title: issue.title,
              body: issue.body ?? '',
              url: issue.html_url,
              labels: issue.labels.map((l) => (typeof l === 'string' ? l : l.name)),
              reactions: issue.reactions?.total_count ?? 0,
              comments: issue.comments
            })
          }

          if (batch.length < 100) break
        }

        return issues
      })
    },

    /**
     * Discussions in a named category
     *
     * @param {string} repo - owner/name
     * @param {string} categoryName
     */
    discussions(repo, categoryName) {
      return cached(`discussions2:${repo}:${categoryName}`, async () => {
        const [owner, name] = repo.split('/')

        const { repository } = await graphql(
          `query ($owner: String!, $name: String!) {
            repository(owner: $owner, name: $name) {
              discussionCategories(first: 50) { nodes { id name } }
            }
          }`,
          { owner, name }
        )

        const category = repository.discussionCategories.nodes.find(
          (c) => c.name.toLowerCase() === categoryName.toLowerCase()
        )

        if (!category) {
          throw new Error(`No discussion category "${categoryName}" in ${repo}`)
        }

        const discussions = []
        let after = null

        do {
          const data = await graphql(
            `query ($owner: String!, $name: String!, $categoryId: ID!, $after: String) {
              repository(owner: $owner, name: $name) {
                discussions(first: 100, after: $after, categoryId: $categoryId) {
                  pageInfo { hasNextPage endCursor }
                  nodes {
                    title
                    bodyText
                    url
                    closed
                    upvoteCount
                    reactions { totalCount }
                    comments { totalCount }
                  }
                }
              }
            }`,
            { owner, name, categoryId: category.id, after }
          )

          const page = data.repository.discussions
          for (const d of page.nodes) {
            discussions.push({
              title: d.title,
              body: d.bodyText ?? '',
              url: d.url,
              closed: d.closed,
              upvotes: d.upvoteCount,
              reactions: d.reactions.totalCount,
              comments: d.comments.totalCount
            })
          }

          after = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null
        } while (after)

        return discussions
      })
    },

    discussionActivity(repo, categoryName) {
      return cached(`discussion-activity1:${repo}:${categoryName}`, () =>
        fetchDiscussionActivity(graphql, repo, categoryName)
      )
    },

    topicDiscussion(repo, number) {
      return cached(`topic-discussion1:${repo}:${number}`, async () => ({
        ...await fetchTopicDiscussion(graphql, repo, number),
        collectedAt: new Date().toISOString()
      }))
    },

    topicDiscussionList(repo) {
      return cached(`topic-discussion-list1:${repo}`, () =>
        findTopicDiscussions(graphql, repo)
      )
    },

    topicIssueSearch(query, limit) {
      return cached(`topic-issue-search1:${query}:${limit}`, async () => {
        const wait = lastIssueSearch + 6500 - Date.now()
        if (wait > 0) await timers.setTimeout(wait)
        lastIssueSearch = Date.now()
        return searchTopicIssues(request, query, limit)
      })
    },

    topicIssue(repo, number) {
      return cached(`topic-issue2:${repo}:${number}`, async () => ({
        ...await fetchTopicIssue(request, repo, number, graphql),
        collectedAt: new Date().toISOString()
      }))
    },

    /**
     * Total GitHub code search hits for a query. Code search allows
     * 10 requests a minute, so uncached calls are spaced out.
     *
     * @param {string} query
     */
    codeSearchCount(query) {
      return cached(
        `code:${query}`,
        async () => {
          const wait = lastCodeSearch + 6500 - Date.now()
          if (wait > 0) await timers.setTimeout(wait)
          lastCodeSearch = Date.now()

          const res = await request(
            `/search/code?per_page=1&q=${encodeURIComponent(query)}`
          )
          return res.total_count
        },
        24 * 30
      )
    }
  }
}
