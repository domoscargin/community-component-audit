# Dark mode and AI: initial findings

## What this review can say

The two GOV.UK Design System seed discussions contain 93 posts: 73 about dark mode
and 20 about AI, including opening posts and replies. This initial review selects
13 quote-backed claims from them and two corroborating NHS claims from the wider
sample. It is AI-assisted, provisional coding, not an
independently human-validated study or exhaustive coding of the wider sample.

The full collected sample and discovery limitations are in [report.md](./report.md).
Exact quotes, source dates, labels and interpretation caveats are in
[reviewed-claims.json](./reviewed-claims.json); original thread context is in
[topic-evidence.json](./topic-evidence.json). Source links below are public GitHub
conversations, not evidence of official departmental positions.

## Dark mode: evidenced need, with disagreement about rollout

The useful distinction is **support for the need versus caution about delivery**.

| Finding | Evidence | Interpretation |
|---|---|---|
| Requests are not just aesthetic preference | A contributor reports [research requests for an alternative reading colour scheme](https://github.com/alphagov/govuk-design-system/discussions/6222#discussioncomment-18814176), February 2019 | Reported user research, not independently revalidated here |
| Teams want shared support rather than isolated customisation | An internal-service team describes [rough implementations and demand for a centralised solution](https://github.com/alphagov/govuk-design-system/discussions/6222#discussioncomment-18814194), September 2022, and [limited capacity to improve its isolated version](https://github.com/alphagov/govuk-design-system/discussions/6222#discussioncomment-18814204), December 2023 | A need for shared ownership; these two posts are the same team's experience, not two independent implementations |
| Staff tools have concrete contextual use cases | A contributor describes [an NHS England experiment for image readers working in dark rooms](https://github.com/alphagov/govuk-design-system/discussions/6222#discussioncomment-18814230), February 2026 | A specific staff-tool context, not a universal preference |
| Cross-service consistency is a contested trade-off | A [mixed-version journey scenario](https://github.com/alphagov/govuk-design-system/discussions/6222#discussioncomment-18814209), December 2023, argues that alternating themes is problematic; a [July 2026 counterargument](https://github.com/alphagov/govuk-design-system/discussions/6222#discussioncomment-18814236) argues incremental benefits outweigh inconsistency | Preserve both arguments; neither establishes measured effects of rollout |
| Prioritisation has been a blocker | A [February 2024 response](https://github.com/alphagov/govuk-design-system/discussions/6222#discussioncomment-18814213) says WCAG 2.2 work took priority over a proposed discovery | Historical capacity evidence, not a statement of current policy or rejection |
| Closed requests can still signal support | An [October 2026 NHS reply](https://github.com/nhsuk/nhsuk-service-manual/issues/2691#issuecomment-6270726737) routes a professional-app request to the existing backlog and says "We do want to tackle dark mode at some point." | Supportive intent, not a promised date; closure is not rejection |

**Working interpretation:** the seed discussion supports investigating reusable,
testable dark-mode support. The unresolved questions concern rollout boundaries,
cross-service transitions, settings and shared maintenance. Counting every cautious
delivery comment as negative sentiment would hide the actual decision.

## AI: demand for design patterns, with important validation caveats

The useful unit is **a particular interaction and its safeguards**, not AI as a
single feature.

| Finding | Evidence | Interpretation |
|---|---|---|
| Communicating limitations is an interaction-design problem | A GOV.UK Chat contributor reports [better results from conversational onboarding than a static page](https://github.com/alphagov/govuk-design-system/discussions/3804#discussioncomment-9459819), May 2024 | Support for a tested pattern in an experiment, not blanket endorsement of AI |
| Citations alone do not ensure verification | [Reported research](https://github.com/alphagov/govuk-design-system/discussions/3804#discussioncomment-9459921), May 2024, says links were interpreted as further information rather than a checking step; a [DWP-tool contributor](https://github.com/alphagov/govuk-design-system/discussions/3804#discussioncomment-13889038), July 2025, asks whether users actually check answers | A concrete pattern candidate and an unresolved validation question |
| Teams report gaps in existing design guidance | A contributor describing DWP work reports [deviating for transparency and user co-creation requirements](https://github.com/alphagov/govuk-design-system/discussions/3804#discussioncomment-10841359), October 2024 | Evidence of design requirements, not proof that one shared AI component would cover them |
| Staff-facing work should be separated from citizen-facing chat | A contributor shares [caseworker-assistant design work and explicitly cautions about limited validation](https://github.com/alphagov/govuk-design-system/discussions/3804#discussioncomment-13944768), July 2025 | A staff-tool example and learning resource, not a validated production standard |
| Evaluation concerns extend beyond interface mechanics | A participant raises [value versus sustainability](https://github.com/alphagov/govuk-design-system/discussions/3804#discussioncomment-11994543), January 2025 | An expressed concern, not measured environmental evidence or categorical opposition |
| Corroboration includes clear non-AI alternatives | An [August 2026 Ask the NHS prototype contribution](https://github.com/nhsuk/nhsuk-service-manual/issues/2555#issuecomment-5368026529) proposes routes back to traditional input alongside accuracy, privacy, feedback and fallback controls | Conditional design principles for a prototype in research, not validated outcomes |

**Working interpretation:** investigate accuracy communication, answer checking,
transparency, feedback and staff-assistant interactions separately. Interest in
sharing work is apparent, but efficacy, safe reliance and sustainability should
remain explicit research questions.

## Next review decisions

1. Human-check these selected claims against their complete threads.
2. Review the wider sample for corroborating and contradictory evidence, labelling
   dependency/release noise and developer tooling separately from service UX.
3. Follow the explicitly linked design histories and research reports where public.
   The linked material has not been validated in this initial review.
4. Report distinct accounts and repositories per claim/theme only after review.
   Do not infer employers from accounts, count repeat posts as independent teams,
   calculate a positive-sentiment percentage, or change the implementation audit.
