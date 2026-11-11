# Service repo drill-downs

Generated 2026-11-11 from the audit snapshot of 2026-11-04. One doc per candidate topic; each links every government repo the audit found with its own implementation, plus the community design system classes each repo consumes.

- [Card](./card.md) — card
- [Table](./table.md) — table (base), sortable-table, data-table, responsive-table
- [Autocomplete](./autocomplete.md) — autocomplete
- [Buttons](./buttons.md) — button (base), button-group, submit-button, toggle-button, start-button
- [Search and filtering](./search.md) — search (input/box), filter (filter a list), search-result, search-bar, no-results
- [Page structure, headings and navigation](./page-structure.md) — page-heading, heading, contents-list, sub-navigation, related-navigation

Package-level scans (different method: dependency manifests plus class/JS signals):

- [NHS table variants](./nhs-table-variants.md) — which of the six NHS table kinds (compact, striped, responsive, scrolling, sortable, reverse) nhsuk-frontend dependents actually use, including legacy pre-10.6.0 class names (`node nhs-table-variants.mjs`)
- [accessible-autocomplete](./accessible-autocomplete.md) — repos using alphagov/accessible-autocomplete, directly or via the HMRC/x-govuk wrappers, with integration mode (`node accessible-autocomplete-usage.mjs`)

Methodology and caveats: [report.md](../report.md).
