# Dark mode and AI: evidence review pilot

Collected 2026-11-09T16:22:22.221Z. No sentiment or stance has been assigned.

This is a purposive public-GitHub sample, not representative government sentiment or implementation coverage.
Repository owners describe where a conversation happened, not participants' employers.
Known-account counts include bots in collected context; they are not counts of human supporters.
Closed/merged status and reactions are not evidence of support. Silence is not opposition.
Cached threads may have different collection times; deleted posts are unavailable.
Converted issues use their discussion as the canonical thread; original issue URLs are retained as aliases.

## Collected evidence

| Topic | Threads | Repositories | Repository owners | Posts | Known accounts |
|---|---|---|---|---|---|
| dark-mode | 19 | 14 | 6 | 121 | 58 |
| ai | 16 | 13 | 6 | 48 | 30 |

## Manual claim review

Use topic-evidence.json for original text. Copy review-template.csv to review.csv before editing so reruns preserve your review.
Read opening posts and parent replies before coding. Rows without keyword matches are retained for context.
For each claim, copy its row if needed, assign a claimId, fill quote with an exact excerpt of text, and name the specific target being evaluated.
Leave non-evidence/context rows unlabelled. Allow multiple claims and semicolon-separated basis/themes/outcomes.
Record confidence (0-1) and rationale; inspect low-confidence and contradictory claims manually.
Separate citizen-facing AI from staff tools and developer tooling. High contrast is not automatically dark mode.
Keep user research distinct from personal preference; do not infer user needs from code changes.

- stance: supportive / conditional / opposed / exploratory / unclear
- basis: user research / delivery experience / technical argument / preference
- themes: accessibility / usability / trust / privacy / accuracy / maintenance / cost / consistency / sustainability
- useCase: citizen-facing / staff tool / developer tooling / unclear
- outcome: requested / exploring / trialled / deferred / rejected / adopted

After review, summarise needs, blockers and contradictions with quotes and permalinks.
Count distinct accounts/repos/owners per stance, not mentions; report unknown authors and sampling limitations.
Do not combine counts into a positive-sentiment percentage or change audit scores.

## Discovery coverage

Organisation scope: alphagov, ministryofjustice, DFE-Digital, nhsuk, UKHomeOffice, hmrc.
Sample cap: 3 issue/PR threads per topic per organisation, and discussions per topic per repository.
Issue/PR searches include open and closed threads, using titles/opening text and recent-update ordering.
Each term returns at most max(10, sample cap) candidates. Topic-specific titles rank ahead of body-only matches.
Automated dependency authors are excluded in queries; bot-authored threads and HTML-attribute-only matches are screened out.
Comments-only mentions are not used for discovery; all comments/reviews in selected threads remain available for context.
Discussions are searched only in seed repositories, sampled issue/PR repositories and explicitly supplied repositories.
Discussion discovery matches titles/opening text, not replies; other repositories/discussions may be missed.
AI vocabulary is deliberately specific and will miss some AI use cases; keyword hits may be irrelevant.
Archived/stale repos are not explicitly excluded; availability still depends on GitHub search indexing.
Limited discovery steps: 23.
Incomplete GitHub searches: 0.
Full queries, result counts, limits and sample selections are recorded in topic-evidence.json.

## Threads

- [Dark Mode](https://github.com/alphagov/govuk-design-system/discussions/6222) — alphagov/govuk-design-system, discussion, open; topics: dark-mode; 73 posts
  - Converted issue (not counted again): https://github.com/alphagov/govuk-design-system/issues/5884
- [AI — we want your input (emerging patterns, use cases, research findings)](https://github.com/alphagov/govuk-design-system/discussions/3804) — alphagov/govuk-design-system, discussion, open; topics: ai; 20 posts
- [Observed issues under Safari's Adaptive Dark Mode](https://github.com/alphagov/govuk-frontend/issues/7613) — alphagov/govuk-frontend, issue, open; topics: dark-mode; 2 posts
- [Observed issues under Chrome's Auto Dark Mode](https://github.com/alphagov/govuk-frontend/issues/2582) — alphagov/govuk-frontend, issue, open; topics: dark-mode; 5 posts
- [Grant TFC role full access to AWS Chatbot service](https://github.com/alphagov/govuk-infrastructure/pull/2647) — alphagov/govuk-infrastructure, pull-request, closed; topics: ai; 1 posts
- [Handle thinking blocks and refusals in Claude responses](https://github.com/alphagov/govuk-chat/pull/1372) — alphagov/govuk-chat, pull-request, open; topics: ai; 1 posts
- [We have a route that exists only to mask out Local Links Manager-related electoral commision results](https://github.com/alphagov/frontend/issues/5930) — alphagov/frontend, issue, open; topics: ai; 1 posts
- [No dark mode](https://github.com/ministryofjustice/coat-coh-exploratory-analysis/pull/10) — ministryofjustice/coat-coh-exploratory-analysis, pull-request, closed; topics: dark-mode; 2 posts
- [Configure training timeout and colour scheme](https://github.com/ministryofjustice/CFO-CaseAssessmentTrackingSystem/pull/1335) — ministryofjustice/CFO-CaseAssessmentTrackingSystem, pull-request, closed; topics: dark-mode; 1 posts
- [Cfodev 1818 fix dark mode banner and chart colours](https://github.com/ministryofjustice/CFO-CaseAssessmentTrackingSystem/pull/1285) — ministryofjustice/CFO-CaseAssessmentTrackingSystem, pull-request, closed; topics: dark-mode; 2 posts
- [Add workflow configuration for LLM info extraction](https://github.com/ministryofjustice/analytical-platform-airflow/pull/5397) — ministryofjustice/analytical-platform-airflow, pull-request, closed; topics: ai; 6 posts
- [fix(chatbot): drop the 'What would you like to know?' line from Fred's welcome](https://github.com/ministryofjustice/hmpps-probation-check-in-ui/pull/116) — ministryofjustice/hmpps-probation-check-in-ui, pull-request, closed; topics: ai; 2 posts
- [fix(chatbot): keep the launcher off the camera page's Cancel button (hide during camera, widget 0.4.6)](https://github.com/ministryofjustice/hmpps-probation-check-in-ui/pull/115) — ministryofjustice/hmpps-probation-check-in-ui, pull-request, closed; topics: ai; 3 posts
- [docs: SUI-1520 - Update the Mermaid diagrams to also work with GitHub's dark colour scheme](https://github.com/DFE-Digital/single-unique-identifier/pull/457) — DFE-Digital/single-unique-identifier, pull-request, closed; topics: dark-mode; 2 posts
- [Fb 376 - Update site to reflect new frontend colour scheme](https://github.com/DFE-Digital/find-a-buying-solution/pull/231) — DFE-Digital/find-a-buying-solution, pull-request, closed; topics: dark-mode; 3 posts
- [Dark mode](https://github.com/DFE-Digital/dfe-frontend/issues/16) — DFE-Digital/dfe-frontend, issue, open; topics: dark-mode; 3 posts
- [Remove chatbot from pages](https://github.com/DFE-Digital/DfE-School-Account-Alpha/pull/42) — DFE-Digital/DfE-School-Account-Alpha, pull-request, closed; topics: ai; 2 posts
- [fixing reporting and adding chatbot function](https://github.com/DFE-Digital/compass/pull/64) — DFE-Digital/compass, pull-request, closed; topics: ai; 1 posts
- [docs: Add cloud architecture](https://github.com/DFE-Digital/single-unique-identifier/pull/816) — DFE-Digital/single-unique-identifier, pull-request, closed; topics: ai; 1 posts
- [Dark mode for professional system users](https://github.com/nhsuk/nhsuk-service-manual/issues/2691) — nhsuk/nhsuk-service-manual, issue, closed; topics: dark-mode; 4 posts
- [Dark mode](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/453) — nhsuk/nhsuk-service-manual-community-backlog, issue, open; topics: dark-mode; 9 posts
- [\[WIP\] Add reverse modifiers to form controls](https://github.com/nhsuk/nhsuk-frontend/pull/1914) — nhsuk/nhsuk-frontend, pull-request, open; topics: dark-mode; 4 posts
- [Chatbot/AI agent two way conversational UI component / pattern for a public website/app](https://github.com/nhsuk/nhsuk-service-manual/issues/2555) — nhsuk/nhsuk-service-manual, issue, open; topics: ai; 4 posts
- [Tell users that your service uses AI](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/596) — nhsuk/nhsuk-service-manual-community-backlog, issue, open; topics: ai; 2 posts
- [Add dark mode functionality to the design system](https://github.com/UKHomeOffice/design-system/issues/764) — UKHomeOffice/design-system, issue, open; topics: dark-mode; 1 posts
- [\[LEVWEB-1341\] Dashboard dark theme](https://github.com/UKHomeOffice/lev-react-components/pull/8) — UKHomeOffice/lev-react-components, pull-request, closed; topics: dark-mode; 1 posts
- [Web: new color scheme](https://github.com/UKHomeOffice/platform-hub/pull/20) — UKHomeOffice/platform-hub, pull-request, closed; topics: dark-mode; 2 posts
- [Update the 'Using Generative AI' Pattern](https://github.com/UKHomeOffice/engineering-guidance-and-standards/issues/649) — UKHomeOffice/engineering-guidance-and-standards, issue, closed; topics: ai; 1 posts
- [Add Generative AI link to the link checking exemption](https://github.com/UKHomeOffice/engineering-guidance-and-standards/pull/382) — UKHomeOffice/engineering-guidance-and-standards, pull-request, closed; topics: ai; 1 posts
- [\[BUG\] Gartner generative AI link occasionally failing with a permission error in authomated tests](https://github.com/UKHomeOffice/engineering-guidance-and-standards/issues/381) — UKHomeOffice/engineering-guidance-and-standards, issue, closed; topics: ai; 1 posts
- [HMA-12592 first push for error dark mode changes in component library](https://github.com/hmrc/android-components/pull/248) — hmrc/android-components, pull-request, closed; topics: dark-mode; 1 posts
- [Feature/hma-12580 dark mode cta components](https://github.com/hmrc/android-components/pull/245) — hmrc/android-components, pull-request, closed; topics: dark-mode; 1 posts
- [HMA-12584 cards dark mode colour changes ](https://github.com/hmrc/android-components/pull/244) — hmrc/android-components, pull-request, closed; topics: dark-mode; 2 posts
- [\[DEP-3169\]\[PR\]:DAV3 DA PCS chatbot update](https://github.com/hmrc/digital-engagement-platform-skin/pull/86) — hmrc/digital-engagement-platform-skin, pull-request, closed; topics: ai; 1 posts
- [Dark mode](https://github.com/UKHomeOffice/design-system/discussions/433) — UKHomeOffice/design-system, discussion, open; topics: dark-mode; 3 posts
