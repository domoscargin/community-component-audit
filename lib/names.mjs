// Design system and organisation prefixes, including common ones in services
const PREFIXES =
  /^(hmrc|moj|x-govuk|govuk|nhsuk|nhsapp|ons|tna|hods|gem-c|dwp|hmlr|app|hmcts|dps|defra|gds)-/
const UNCOUNTABLE = new Set(['news', 'series', 'canvas', 'status', 'access'])

/**
 * Lowercase, kebab-case and strip system prefixes and file extensions
 *
 * @param {string} raw
 */
export function normalise(raw) {
  return raw
    .replace(/\.(ya?ml|md|njk|tsx?|jsx?|html|erb)$/, '')
    // camelCase and PascalCase (for example React component names)
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/-+/g, '-')
    .replace(PREFIXES, '')
    .replace(/-component$/, '')
    .replace(/^-+|-+$/g, '')
}

/**
 * Very small English singulariser, good enough for component names
 *
 * @param {string} word
 */
export function singular(word) {
  if (word.length <= 3 || UNCOUNTABLE.has(word) || /(ss|us|is)$/.test(word)) {
    return word
  }
  if (word.endsWith('ies')) return `${word.slice(0, -3)}y`
  if (/(sses|xes|ches|shes)$/.test(word)) return word.slice(0, -2)
  if (word.endsWith('s')) return word.slice(0, -1)
  return word
}

/**
 * Comparison key: normalised and singularised
 *
 * @param {string} raw
 */
export function toKey(raw) {
  return normalise(raw).split('-').filter(Boolean).map(singular).join('-')
}

/**
 * Hyphen-insensitive form of a key, so "check-box" and "checkbox" compare
 * equal
 *
 * @param {string} key
 */
export function squash(key) {
  return key.replace(/-/g, '')
}

/**
 * @param {Record<string, string[]>} synonyms
 */
export function buildSynonymIndex(synonyms) {
  /** @type {Map<string, string>} key -> canonical key */
  const canonicalOf = new Map()
  /** @type {Map<string, string>} canonical key -> display name */
  const displayName = new Map()
  /** @type {Map<string, Set<string>>} canonical key -> alias keys */
  const aliasesOf = new Map()

  for (const [canonical, aliases] of Object.entries(synonyms)) {
    const canonicalKey = toKey(canonical)
    displayName.set(canonicalKey, canonical)
    canonicalOf.set(canonicalKey, canonicalKey)

    const set = aliasesOf.get(canonicalKey) ?? new Set([canonicalKey])
    for (const alias of aliases) {
      const aliasKey = toKey(alias)
      const existing = canonicalOf.get(aliasKey)
      if (existing && existing !== canonicalKey) {
        throw new Error(
          `Synonym "${alias}" is mapped to both "${existing}" and "${canonicalKey}"`
        )
      }
      canonicalOf.set(aliasKey, canonicalKey)
      set.add(aliasKey)
    }
    aliasesOf.set(canonicalKey, set)
  }

  return {
    canonicalOf,
    displayName,
    aliasesOf,
    /** @param {string} raw */
    resolve(raw) {
      const key = toKey(raw)
      return canonicalOf.get(key) ?? key
    }
  }
}

function escape(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Regex that finds a key in free text, allowing spaces, hyphens or
 * underscores between words and plural endings.
 *
 * In strict mode (for generic words like "details" or "select") the phrase
 * only matches when it's the whole title, a title prefix like "Details: …"
 * or "[Details] …", or is followed by "component", "pattern", "macro" or
 * "page".
 *
 * @param {string} key
 * @param {object} [options]
 * @param {boolean} [options.strict]
 */
export function phraseRegex(key, { strict = false } = {}) {
  const tokens = key.split('-').map((token) => {
    if (token.endsWith('y') && token.length > 3) {
      return `${escape(token.slice(0, -1))}(?:y|ies)`
    }
    if (token.endsWith('ss') || token.endsWith('us')) {
      return `${escape(token)}(?:es)?`
    }
    return `${escape(token)}(?:e?s)?`
  })

  const phrase = `(?<![\\w-])${tokens.join('[\\s_-]*')}(?![\\w-])`

  if (!strict) return new RegExp(phrase, 'i')

  return new RegExp(
    [
      `^\\W*\\[?${phrase}\\]?\\W*$`,
      `^\\W*\\[?${phrase}\\]?\\s*[:\\]–—-]\\s`,
      `${phrase}[\\s-]+(?:components?|patterns?|macros?|pages?)\\b`
    ].join('|'),
    'i'
  )
}

/**
 * Find which clusters a title refers to. When matches overlap, the longest
 * wins, so "sortable table" counts for `sortable-table` and not `table`.
 *
 * @param {string} title
 * @param {{ key: string, matchers: RegExp[] }[]} candidates
 * @returns {string[]} Matching cluster keys
 */
export function matchTitle(title, candidates) {
  const hits = []

  for (const { key, matchers } of candidates) {
    for (const re of matchers) {
      const m = re.exec(title)
      if (m) {
        // Strict matches include surrounding words, trim them so overlap
        // comparisons are fair
        const text = m[0].trim()
        const start = m.index + m[0].indexOf(text)
        hits.push({ key, start, end: start + text.length })
      }
    }
  }

  const kept = hits.filter(
    (hit) =>
      !hits.some(
        (other) =>
          other !== hit &&
          other.key !== hit.key &&
          other.start <= hit.start &&
          other.end >= hit.end &&
          other.end - other.start > hit.end - hit.start
      )
  )

  return [...new Set(kept.map((hit) => hit.key))]
}
