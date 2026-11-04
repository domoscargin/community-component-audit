const GOVUK_REFERENCES = [
  /from\s+["'](?:govuk-frontend|govuk\/)/, // macro import
  /govuk[A-Z][A-Za-z]+\s*\(/, // macro call, for example govukButton(
  /["'\s]govuk-[a-z]/ // class names like govuk-button
]

/**
 * Whether a component file builds on GOV.UK Frontend (extends or wraps it)
 * rather than re-implementing it from scratch
 *
 * @param {string} content
 */
export function buildsOnGovuk(content) {
  return GOVUK_REFERENCES.some((re) => re.test(content))
}
