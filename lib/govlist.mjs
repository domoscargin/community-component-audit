/**
 * The xgov-opensource-repo-scraper's list of repos from UK government
 * organisations, refreshed daily:
 * https://github.com/xgovuk/xgov-opensource-repo-scraper
 */
export const REPO_SCRAPER =
  'https://www.uk-x-gov-software-community.org.uk/xgov-opensource-repo-scraper/repos.json'

/**
 * Turn the scraper's repo list into scan targets. Archived repos are
 * ignored.
 *
 * @param {object[]} data - Entries with owner, name, archived, pushedAt, …
 * @param {object} [options]
 * @param {string} [options.since] - Only keep repos pushed to since this date
 * @returns {{ repo: string, owner: string, isPrototype: boolean, pushedAt: string, language: string | null }[]}
 */
export function parseScrapedRepos(data, { since } = {}) {
  const sinceMs = since ? Date.parse(since) : null
  const repos = []

  for (const entry of data ?? []) {
    if (entry.archived || !entry.owner || !entry.name) continue
    if (sinceMs && Date.parse(entry.pushedAt ?? '') < sinceMs) continue

    repos.push({
      repo: `${entry.owner}/${entry.name}`,
      owner: entry.owner,
      isPrototype: /prototype/i.test(entry.name),
      pushedAt: entry.pushedAt,
      language: entry.language ?? null
    })
  }

  return repos
}
