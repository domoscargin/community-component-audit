# Candidate deep dives and discovery questions

Generated 2026-11-11. Drill-down into the 5 shortlisted candidates and 5 honorable
mentions from the [community component audit](./report.md), with scope checklists
("stuff we might have missed") and discovery question sets for each.

All scores and counts below are from the audit snapshot of 2026-11-04. "Services"
means government service repos / prototype repos with their own implementation.

## Summary

| Candidate | Audit signal | Key clusters (score) |
|---|---|---|
| Page structure / headings / service patterns | Strong but fragmented — audit measures components, not patterns | page-heading (47.7), heading (36.2), plus adjacent page furniture: contents-list (53.4), sub-navigation (56.8), related-navigation (55.3) |
| Table enhancements | Moderate score but very high service footprint | table (29.8, covered; 126/8 services, 64 extend ours), sortable-table (29.5), responsive-table (20.3), data-table (22.5) |
| Search | **Highest-scoring candidate overall** | search (79.7), filter (63.1), search-result (42.4), search-for-something pattern (34.7), no-results (31.1), search-bar (30) |
| Session timeouts | High, and drags in modal dialogue as a dependency | timeout-warning (49.8), timeout (28.2), session-timeout (24.9), timeout-popup (20.4), modal (48.0) |
| Buttons | Highest-scoring "already covered" component | button (51.9; 193/19 services, 92 extend ours), button-group (25), submit-button (26.6), toggle-button (24.4), start-button (23.5) |
| Autocomplete (HM) | Top-10 candidate in its own right | autocomplete (52.6, partially covered) |
| Find something in a document (HM) | Weak component signal, one exact-match pattern | find-information-on-document (19.6, Home Office), document-list (33.1), file-download (51.8) |
| Images and iconography (HM) | Two strong clusters, one huge issue count | image (46.6; 17 open issues on our repos), icon (44.2; 22-comment backlog discussion) |
| Notification banners / alerts (HM) | High service footprint, partially covered | alert (37.6; 80/9 services), banner (34.3; 51/11), notification (25; 24/0), site-banner (34.8) |
| Card / panel (HM) | **Second-highest-scoring candidate overall** | card (72.8; 7 orgs, 195/49 services), panel (26.5, covered) |

Two things the shortlist underweights, per the data:

- **Card is #2 overall** (72.8), ahead of everything except search. If it stays an
  honorable mention, it's worth explicitly recording why (for example, too
  presentational to standardise) so the decision is defensible.
- **Modal dialogue (48.0, #16)** appears on nobody's list but is a hard dependency
  for session timeout warnings and has a 25-comment backlog discussion. Treat it as
  part of the timeout scope or as a named prerequisite.

---

## 1. Page structure, hierarchy and headings / service patterns

### What the audit shows

- **page-heading** — 47.7, not in GOV.UK Frontend, 2 orgs, 57/8 services.
  HMRC has both `page-heading` and `page-title` patterns; Scottish Government has
  `page-header`. Backlog: "Page title" (4 comments). 6 open issues on our repos
  mention it. 1 axe violation in community implementations.
- **heading** — 36.2, 2 orgs, 39/4 services. `govuk-publishing-components: heading`
  has the highest adoption figure of any single community implementation in this
  space (25.75); NHS.UK also has one.
- Adjacent "page furniture" clusters score higher than headings themselves:
  sub-navigation (56.8), related-navigation (55.3), contents-list (53.4),
  back-to-top (50.8). In aggregate this is a large, coherent theme about how pages
  are structured and navigated.
- **Important caveat:** the audit detects *components*, so "service patterns"
  (whole-journey patterns like "apply for something") barely register in the data.
  page-heading and heading are weak proxies. The case for service patterns needs
  qualitative evidence the audit cannot supply — this is exactly what discovery is
  for.

### What the work might involve (checklist)

- A **page-heading component or pattern** (H1 + optional caption/section prefix,
  per HMRC's model) — the easiest, most shippable slice.
- **Heading hierarchy guidance**: when the H1 is the legend/label of a form
  control, heading sizes vs. hierarchy, one-H1-per-page, not skipping levels.
- **Page `<title>` conventions**: uniqueness, "Error: " prefix, service name and
  GOV.UK suffix ordering — relates to WCAG 2.4.2 and sits between styles and
  patterns today.
- **Page templates** as a delivery vehicle (govuk-frontend already ships a basic
  page template) — could structure be delivered as templates rather than prose?
- **Service patterns proper**: whole-journey patterns that span pages (structure,
  ordering, start/check/apply/confirm/receipt). These define *relationships between
  pages*, which no component can express.
- **IA rethink of the design system site**: where do service patterns live relative
  to "get started", "styles", "components" and "patterns"? Is "styles" the right
  home for heading hierarchy when it's really about page structure?
- **Governance and contribution model**: service patterns are harder to contribute
  than components — who owns them, how are they evidenced, how do they stay current?

### Discovery questions

These are the ones you're stumped on, so they're grouped by what they'd resolve.

**Framing and scope**
1. What do we mean by "service pattern" — a reusable journey shape, a set of
   page-level rules, or both? Where's the boundary with existing design patterns?
2. Which problem are we actually solving: inconsistent page structure *within*
   pages (headings), inconsistent structure *across* pages (templates), or
   inconsistent structure *across* journeys (service patterns)? The audit supports
   all three to different degrees.
3. What's the smallest valuable deliverable — a page-heading component, expanded
   headings guidance, page templates, or full service-pattern pages?

**User need and evidence**
4. What are teams doing today? The 57/8 service repos with their own page-heading
   and 39/4 with their own heading are a ready-made research sample — what
   variations exist and why did teams feel they needed them?
5. Do teams diverge because guidance is missing, or because existing guidance
   doesn't fit their case? (Divergence-with-reasons is a very different finding
   from divergence-through-ignorance.)
6. What mistakes actually recur in the wild — multiple H1s, skipped heading levels,
   headings used for styling, missing/duplicate page titles? Is there assessment
   or accessibility-audit evidence of the harm?
7. Who are the users of service-pattern guidance — interaction designers, content
   designers, developers, service designers? Do they want the same artefact?

**Landscape**
8. What have HMRC (page-heading, page-title), Scottish Government (page-header),
   NHS and Home Office already standardised, and what did they learn publishing
   them? Are their patterns convergent enough to adopt rather than invent?
9. Do "service patterns" exist anywhere already (HMRC's journey-level patterns,
   DWP/Defra internal guidance)? What's their maintenance burden?
10. How do other design systems structure their equivalent of get-started/styles/
    patterns — and would their IA work for our users?

**Fit with the site and system**
11. If we publish service patterns, what happens to "get started" and "styles"?
    What moves, what gets absorbed, what gets retired?
12. Should heading/page-structure guidance be delivered as a Nunjucks macro and
    template (opinionated, low-effort-to-adopt) or as guidance (flexible, higher
    effort)? What did the page templates work tell us about adoption of each?
13. How would a service pattern be contributed and evidenced under our current
    contribution criteria, which are component-shaped?

**Accessibility and standards**
14. What's the accessibility bar for page structure (WCAG 1.3.1, 2.4.2, 2.4.6,
    2.4.10) and which of our candidate deliverables would actually move services
    past it?

---

## 2. Table enhancements (responsive, sortable, filterable, zebra striping)

### What the audit shows

- **table** — 29.8, already in GOV.UK Frontend but implemented elsewhere by 4 orgs
  (govuk-publishing-components, NHS.UK, ONS, Scottish Government) and present in
  **126 production / 8 prototype service repos — 64 of which extend ours**. That's
  one of the largest extension footprints in the audit: teams are building on the
  base table at scale. 5 open community issues, 2 of them accessibility-related.
- **sortable-table** — 29.5, partially covered. MoJ Frontend's `sortable-table`
  is the canonical community implementation; ~80 adoption hits.
- **responsive-table** — 20.3, not in GOV.UK Frontend, built in services.
- Related clusters: data-table (22.5), sort-options (21.6, Scottish Government),
  options-table, table-cell, results-table, summary-table.
- Backlog overlap: "Sorting lists" and "Filter a list" discussions apply to tables
  as much as to search results.

### What the work might involve (checklist)

Each enhancement is really a sub-project with its own traps:

- **Responsive**: multiple competing strategies — horizontal scroll with shadow
  affordance, row-to-card stacking, column priority/hiding, or "don't put that data
  in a table". Needs a decision framework, not just one technique. Print behaviour,
  sticky headers, and reflow (WCAG 1.4.10) all interact.
- **Sortable**: client-side vs server-side sorting (MoJ's is client-side; most
  service data isn't); `aria-sort`, sort announcement to screen readers, default
  sort order, multi-column sorting, sorting numbers/dates/currencies correctly,
  and what sorting means when the table is also paginated or filtered.
- **Filterable**: heavy overlap with the filter component (63.1) and the search
  project. Risk of doing this twice — decide whether table filtering is a special
  case of "filter a list of results" or its own thing.
- **Zebra striping**: presentational, but check the evidence base — striping is
  sometimes requested for readability on dense tables; are there contrast
  (WCAG 1.4.11-adjacent) and low-vision considerations? Cheap to do, but should be
  evidence-led or it becomes cargo cult.
- Cross-cutting: pagination interplay, empty states, caption usage, numeric column
  alignment, column spanning, very wide tables, tables in the question/answer
  context (check-your-answers is a table-shaped thing we already handle
  differently).

### Discovery questions

1. Of the 64 services extending our table, what are they extending it *with*?
   Categorise the extensions — sorting, scrolling, striping, density, actions per
   row — to rank the sub-features by real demand.
2. Is responsive-table demand really "tables on mobile", or is it "caseworker-style
   data-dense tables on desktop" that mobile makes impossible? Staff/internal tools
   vs citizen-facing is likely the key segmentation.
3. What accessibility failures do current community implementations have (the 2
   a11y issues on table clusters, plus any axe data on sortable-table)?
4. Should enhancements ship as options on the existing table component, as separate
   components (sortable-table), or as patterns (how to present large datasets)?
5. Where does filtering a table end and the search/filter project begin — can the
   two share a discovery?

---

## 3. Search (including filtering, results pages, sorting)

### What the audit shows

This is the biggest theme in the entire audit by some distance:

- **search** — 79.7, #1 overall. 5 orgs, 110/37 services. Three backlog
  discussions totalling 62+ comments. 11 open issues on our repos, 21 community
  issues (2 a11y), 2 serious axe violations. Implementations from
  govuk-publishing-components, MoJ, NHS.UK, TNA, Scottish Government.
- **filter** — 63.1, #4 overall. 3 orgs, 97/45 services. MoJ `filter` component
  has 35.25 adoption. Backlog: "Filter a list" (18), "Multi-Select" (13).
- **search-result** — 42.4, 31/9 services, Scottish Government implementation.
- **search-for-something** pattern — 34.7, MoJ and Home Office pattern docs.
- Service-built clusters: no-results (31.1, 13 repos), search-bar (30, 14 repos),
  suggestions, sort-options, search-pagination, filter-search.

### What the work might involve (checklist)

The big risk is scope. "Search" decomposes into at least eight deliverables:

1. Search input/box (the molecule everyone has)
2. Autocomplete/typeahead within search (overlaps the autocomplete HM)
3. Results page layout and results item component
4. Filtering/faceting (the MoJ filter pattern, multi-select)
5. Sorting results (sort-options)
6. Pagination of results (we have pagination, but interplay matters)
7. No-results and zero-results guidance (13 services built their own)
8. Suggestions / "did you mean"

Plus: scoped search (search within a section), search analytics/quality guidance,
search in staff systems vs site search, and pronunciation of results counts to
screen readers. You will not do all of these — the discovery's main job is
sequencing and de-scoping.

### Discovery questions

1. Which slice has the worst current outcomes — is it the input, the results page,
   or filtering? The audit shows filtering (63.1) is nearly as demanded as search
   itself (79.7) and has 4 a11y-flagged community issues; is filter actually the
   first deliverable?
2. What's the relationship with publishing-side search (govuk-publishing-components
   already has search, option_select, search_with_autocomplete)? Can GOV.UK's own
   search UX be the reference implementation?
3. Do services search *their own data* (case management, registers) or *content*?
   Different ranking, filtering and results-display needs follow.
4. What do the 2 serious axe violations and 2 a11y issues on community search
   implementations tell us about where teams go wrong?
5. What's out of scope: search *engines*/relevance, or purely the interface? Say so
   explicitly — teams will otherwise expect backend guidance.

---

## 4. Session timeouts

### What the audit shows

- **timeout-warning** — 49.8, #13. 4 orgs, 14/1 services. Implementations:
  HMRC `timeout-dialog`, ONS `timeout-modal`/`timeout-panel` + an `extend-session`
  *pattern*, Home Office and DWP *patterns*. Three backlog discussions: "Timeout
  warning" (29 comments), "Modal dialogue" (25), "Timeout page" (7). ⚠️ flagged
  31% structural similarity — implementations genuinely differ (modal vs page vs
  banner), which is itself a finding.
- Service-built clusters: timeout (28.2, 5 repos), session-timeout (24.9, 3 repos),
  timeout-popup (20.4).
- **Hidden dependency: modal** — 48.0, #16, not in GOV.UK Frontend, 25-comment
  backlog discussion. HMRC's timeout dialog is a modal; a timeout component without
  an accessible modal primitive means teams keep hand-rolling focus traps.

### What the work might involve (checklist)

- The warning UI itself (modal vs dedicated page vs banner — the audit shows all
  three in the wild)
- The **modal dialogue primitive** the warning sits on (focus trap, inert
  background, return-focus, Esc behaviour) — arguably the real component
- The timed-out/signed-out **end page** ("Timeout page" backlog discussion)
- Behaviour rules: warning lead time, countdown announcement for screen readers
  (aria-live politeness, how often to announce), what happens on "stay signed in",
  multi-tab synchronisation (BroadcastChannel), preserving form data across
  timeout (WCAG 2.2.5 re-authentication), data-saving mode
- The security/accessibility tension: WCAG 2.2.1 timing adjustable vs security
  policies that mandate fixed timeouts; what are services actually allowed to do,
  and can guidance reconcile them?
- Configuration surface: timeout length, warning length, redirect targets

### Discovery questions

1. Modal, page, or banner — when each? The community has all three; is the answer
   "it depends on whether the session is recoverable"?
2. Is the deliverable a component (timeout-dialog), a pattern (service-timeout, à
   la HMRC/ONS/DWP), or both? HMRC and ONS already ship both halves — is adoption
   of theirs an option before building?
3. How do services handle form data on timeout today, and what do their users lose?
4. What do the security standards services operate under (e.g. for payments,
   benefits) actually require, and does one component config cover the range?
5. Why has modal dialogue (25 comments, score 48) never been prioritised on its
   own — and should timeout be the vehicle that finally delivers it?

---

## 5. Buttons

### What the audit shows

- **button** — 51.9, the highest score in the "already in GOV.UK Frontend"
  section. 6 other design system orgs implement their own; **193/19 service repos
  touch buttons, and 92 of those extend ours**. 27 open community issues (1 a11y).
  Backlog: "Exit this page" contribution (7 comments), "warning/destructive links",
  RTL support.
- Service-built button clusters: submit-button (26.6), button-group (25, 15
  repos), toggle-button (24.4), start-button (23.5), plus icon-button,
  dropdown-button, button-menu, inverted-button, download-button, secondary-button
  in the long tail.

### What the work might involve (checklist)

- **Variants**: destructive/warning (has a backlog discussion), inverse (on dark
  backgrounds — interacts with the hero/dark-mode threads), secondary styling
- **Button groups** — ordering (primary left?), spacing, mobile stacking (15
  service repos built this)
- **States**: loading/progress on submit, preventing double-submission, disabled
  buttons and the guidance about avoiding them, toggle/pressed state (aria-pressed)
- **Icon buttons** — icon + text vs icon-only, accessible names
- Buttons vs links (warning/destructive *links* backlog item), buttons that
  download, buttons that navigate
- Exit this page — a contributed component already submitted via the backlog;
  does it land in buttons work or separately?

### Discovery questions

1. What are the 92 extensions of our button doing? Group them (colour variants,
   sizing, icons, grouping, loading states) to find the top 2–3 real gaps.
2. What are the 27 community issues actually about — do they cluster (e.g.
   disabled state, double-submit, touch target)?
3. Is this a component-enhancement piece (new variants/groups) or a guidance piece
   (when not to use buttons, destructive actions, exit-this-page)?
4. Where do toggle buttons and button menus stop and other components start
   (details, disclosure, menus)?

---

## Honorable mentions

### Autocomplete — 52.6, #9 (bigger than timeout-warning)

- 5 orgs, 88/50 services — the highest prototype count (50) of any cluster, which
  suggests heavy experimentation. Partially covered: the alphagov
  accessible-autocomplete exists but isn't in GOV.UK Frontend proper; HMRC,
  ONS (autosuggest), Scottish Government and x-govuk all wrap or rebuild it.
- Backlog: "Autocomplete" (32 comments), "Country" (5), "Nationality" (3).
- **Missed angle**: it intersects the search project (search_with_autocomplete)
  and country/nationality are specific high-value use cases with their own data
  questions (register lists, synonyms). 21 community issues sit on date-picker
  but autocomplete's implementations have their own long-standing a11y history
  worth mining. Key question: is the work "adopt and maintain
  accessible-autocomplete into Frontend" rather than "build autocomplete"?

### Find something in a document

- Weak audit signal by name (19.6) but Home Office ships a pattern literally called
  **find-information-on-document** — read that first.
- Neighbouring clusters: document-list (33.1, govuk-publishing-components + ONS),
  file-download (51.8, #10), document-viewer, document history (8-comment backlog),
  "Showing text changes" backlog. Contents-list (53.4) is the within-page cousin.
- **Missed angle**: this may be a *pattern* piece (how to structure and signpost
  long documents — anchors, contents lists, "last updated", versioning) rather than
  a component. If so, it shares DNA with the page-structure work and could be
  folded into that discovery as a case study.

### Images and iconography

- **image** — 46.6, #18. 4 orgs (govuk-publishing figure, NHS images, ONS
  figure/image, TNA picture). Notably **17 open issues on our own repos mention
  it** — the highest ourIssues count in this whole shortlist. Figure/caption,
  responsive images, aspect ratios, alt text guidance.
- **icon** — 44.2, #21. 56/5 services; 22-comment "Icons" backlog discussion. ONS
  and Scottish Government ship icon systems. The long tail (material-icon,
  svg-icon, status-icon, cross-icon, feed-icon) shows everyone rolling their own.
- **Missed angles**: "Illustrations" and "Department logos" backlog discussions
  belong to this theme; icon work raises a governance question (a shared icon set
  needs curation rules); image work raises a build/pipeline question (responsive
  srcset generation is not just a component). Alt-text guidance overlaps the
  content design remit, not just Frontend.

### Notification banners / alerts

- **alert** — 37.6, partially covered, **80/9 services** (a bigger footprint than
  timeout-warning and autocomplete's production count). MoJ alert, Home Office
  alert + status-message, Scottish Government notification-message,
  govuk-publishing error/success alerts. ⚠️ 20% structural similarity — "alert"
  means different things to different teams. 4 community issues (1 a11y).
- **banner** — 34.3, 51/11 services (MoJ, HMRC). **notification** — 25, 24/0
  services built from scratch. Plus site-banner (34.8) and a long tail of
  message-banner, alert-banner, in-service-alerts.
- The gap is precise: GOV.UK Frontend has the **notification banner** for
  important/success messages, but teams keep building *inline, dismissible,
  status-level* alerts — the "something changed in your account" family, closer to
  the Design System's notification-banner's less-shouty sibling and to error_alert/
  success_alert on publishing.
- **Missed angles**: relationship to error-summary/error-message boundaries;
  dismissibility and persistence; role="alert"/aria-live vs the notification
  banner's heading-based approach; and an emergent "notifications centre" theme
  (notification-list, notifications-bar, inbox pattern backlog) which is a
  different, bigger fish — keep it out of scope deliberately.

### Card / panel

- **card** — 72.8, **#2 overall, ahead of four of your top five**. 7 orgs, 195/49
  services (the largest service footprint in the audit). NHS.UK card has 59.75
  adoption; DfE 35.75. 34-comment backlog. 18 community issues.
- **panel** — 26.5, already in GOV.UK Frontend, reimplemented by 6 orgs
  (govuk-publishing, NHS, ONS, TNA, Scottish Government's confirmation-message).
- The data challenges the "honorable mention" placement: nothing else except
  search scores higher or appears in more services. If card stays deprioritised,
  record the rationale — the likely one being that cards are highly presentational
  and context-specific, so standardisation value may be lower than raw counts
  suggest (the audit's 6–59 adoption range across implementations hints at this).
- **Missed angles**: card-group/card-grid layout (not just the card), link-card
  and chevron-card variants, clickable-card accessibility (whole-card link
  patterns), and the relationship between card and panel (confirmation panels are
  the one card-like thing we already ship).

---

## Cross-cutting observations

1. **Pagination (42.9, covered)** and **multi-select (36.8, partially covered)**
   sit underneath three candidates (tables, search, and each other). Whatever
   ships first should not paint the others into a corner — a shared
   "results and lists" mental model would help.
2. **"Sorting lists" is one backlog discussion serving two candidates** (tables,
   search). Harvest backlog discussions per topic before writing discovery plans;
   several are shared.
3. **Dark mode (72 comments, 21 reactions)** is the highest-engagement unmatched
   backlog discussion and is on nobody's shortlist. Probably correctly out of
   scope, but expect it to come up in every discovery interview.
4. **Maps (37.6, #1 among service-built-only components)** is the biggest theme
   absent from your lists — worth a sentence in whatever prioritisation record you
   keep, even if the answer is "not us, ever".
5. The audit's quality signals (axe violations, a11y-flagged issues) are a
   shortcut for discovery: the 2 serious axe violations on search and the a11y
   issues on date-picker/autocomplete/table tell you where community
   implementations already fail, which is exactly where a central implementation
   adds value.
