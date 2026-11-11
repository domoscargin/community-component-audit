# Autocomplete: service repo drill-down

Generated 2026-11-11 from the audit snapshot of 2026-11-04 ([clusters.json](../clusters.json)) combined with class usage data ([class-usage.json](../class-usage.json)). See [report.md](../report.md) for methodology.

Autocomplete is #9 overall (score 52.6) and "partially covered": the alphagov accessible-autocomplete project exists but is not part of GOV.UK Frontend, so HMRC, ONS, Scottish Government and x-govuk all wrap or rebuild it. The 50 prototype repos (vs 88 production) suggest heavy ongoing experimentation.

See also the [accessible-autocomplete drill-down](./accessible-autocomplete.md), which tracks package-level adoption of the alphagov library (direct and via the HMRC/x-govuk wrappers), with integration modes.

Each repo appears once per cluster, with a link to the file the audit matched. "Extends GOV.UK" means the implementation builds on or imports the GOV.UK Frontend component rather than being written from scratch. The "Community classes used" column lists *all* community design system classes detected in that repo (any component) — repos consuming another organisation's component rather than, or as well as, building their own. "Orgs" counts unique GitHub organisations.

Caveats: detection is filename/class-name based, so some hits may be false positives, and one hit per repo means the audit shows *an* example file, not every instance. Class usage and component detection are independent scans: a repo can use a community class without having its own matching file, and vice versa.

## At a glance

| Cluster | Status | Score | Repos (production / prototype) | Orgs | Extend GOV.UK |
|---|---|---|---|---|---|
| autocomplete | partially covered | 52.6 | 138 (88 / 50) | 30 |  |

## Community class adoption

Repos using another design system's classes. These are *consumers* of a community component — evidence of which existing implementation teams reach for.

| Class | Source design system | Repos | Orgs | Production | Prototypes |
|---|---|---|---|---|---|
| `gem-c-search-with-autocomplete` | govuk-publishing-components | 2 | 2 | 1 | 1 |
| `gem-c-select-with-search` | govuk-publishing-components | 1 | 1 | 1 | 0 |

**1 repos both consume a community class and have their own implementation** in the clusters below; **2 consume a community class with no matching own implementation detected**.

<details><summary>Consumers without their own implementation (2 repos, 2 orgs)</summary>

- **defra-design**: [fcp-animal-health](https://github.com/defra-design/fcp-animal-health) (`gem-c-search-with-autocomplete`)
- **ministryofjustice**: [hmpps-electronic-monitoring-data-prototype](https://github.com/ministryofjustice/hmpps-electronic-monitoring-data-prototype) (proto) (`gem-c-search-with-autocomplete`)

</details>

## Repos by cluster and organisation

### autocomplete — 138 repos, 30 orgs (88 production)

Partially covered. Implementations differ structurally (20% similar) — check they are the same component before comparing.

#### ministryofjustice (30, 24 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [analytics-platform-control-panel](https://github.com/ministryofjustice/analytics-platform-control-panel) | [`controlpanel/frontend/static/components/autocomplete/_autocomplete.scss`](https://github.com/ministryofjustice/analytics-platform-control-panel/blob/HEAD/controlpanel/frontend/static/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  | `moj-add-another`, `moj-sub-navigation` |
| [analytics-platform-control-panel-public](https://github.com/ministryofjustice/analytics-platform-control-panel-public) | [`controlpanel/frontend/static/components/autocomplete/_autocomplete.scss`](https://github.com/ministryofjustice/analytics-platform-control-panel-public/blob/HEAD/controlpanel/frontend/static/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [hmpps-accredited-programmes-manage-and-deliver-ui](https://github.com/ministryofjustice/hmpps-accredited-programmes-manage-and-deliver-ui) | [`assets/scss/components/_accessible_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-accredited-programmes-manage-and-deliver-ui/blob/HEAD/assets/scss/components/_accessible_autocomplete.scss) | SCSS/CSS only |  |  | `moj-multi-select` |
| [hmpps-activities-management](https://github.com/ministryofjustice/hmpps-activities-management) | [`frontend/components/autocomplete/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-activities-management/blob/HEAD/frontend/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  | `moj-multi-select`, `moj-sortable-table` |
| [hmpps-approved-premises-ui](https://github.com/ministryofjustice/hmpps-approved-premises-ui) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-approved-premises-ui/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  | `moj-page-header-actions`, `moj-sortable-table` |
| [hmpps-arns-assessment-platform-ui](https://github.com/ministryofjustice/hmpps-arns-assessment-platform-ui) | [`server/forms/sentence-plan/components/accessible-autocomplete/accessible-autocomplete.mjs`](https://github.com/ministryofjustice/hmpps-arns-assessment-platform-ui/blob/HEAD/server/forms/sentence-plan/components/accessible-autocomplete/accessible-autocomplete.mjs) | JS/TS component |  |  | `moj-page-header-actions` |
| [hmpps-book-secure-move-frontend](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend) | [`common/assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend/blob/HEAD/common/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [hmpps-contacts-ui](https://github.com/ministryofjustice/hmpps-contacts-ui) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-contacts-ui/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  | `moj-page-header-actions` |
| [hmpps-electronic-monitoring-create-an-order](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order) | [`server/views/components/accessible-autocomplete/macro.njk`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order/blob/HEAD/server/views/components/accessible-autocomplete/macro.njk) | Nunjucks macro |  |  | `moj-search` |
| [hmpps-incident-reporting](https://github.com/ministryofjustice/hmpps-incident-reporting) | [`assets/js/components/accessibleAutocomplete.ts`](https://github.com/ministryofjustice/hmpps-incident-reporting/blob/HEAD/assets/js/components/accessibleAutocomplete.ts) | JS/TS component |  |  | `moj-scrollable-pane` |
| [hmpps-interventions-ui](https://github.com/ministryofjustice/hmpps-interventions-ui) | [`assets/sass/components/_accessible_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-interventions-ui/blob/HEAD/assets/sass/components/_accessible_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [hmpps-jobs-board-ui](https://github.com/ministryofjustice/hmpps-jobs-board-ui) | [`assets/scss/components/accessible-autocomplete.scss`](https://github.com/ministryofjustice/hmpps-jobs-board-ui/blob/HEAD/assets/scss/components/accessible-autocomplete.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-sub-navigation` |
| [hmpps-manage-users](https://github.com/ministryofjustice/hmpps-manage-users) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-manage-users/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  | `moj-multi-select`, `moj-sortable-table` |
| [hmpps-manage-users-temp-rewrite](https://github.com/ministryofjustice/hmpps-manage-users-temp-rewrite) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-manage-users-temp-rewrite/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [hmpps-managing-prisoner-apps-staff-ui](https://github.com/ministryofjustice/hmpps-managing-prisoner-apps-staff-ui) | [`server/views/components/accessibleAutocomplete/macro.njk`](https://github.com/ministryofjustice/hmpps-managing-prisoner-apps-staff-ui/blob/HEAD/server/views/components/accessibleAutocomplete/macro.njk) | Nunjucks macro |  |  | `moj-sortable-table` |
| [hmpps-prisoner-profile](https://github.com/ministryofjustice/hmpps-prisoner-profile) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-prisoner-profile/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [hmpps-probation-supervision-contacts-ui](https://github.com/ministryofjustice/hmpps-probation-supervision-contacts-ui) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-probation-supervision-contacts-ui/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  | `moj-page-header-actions`, `moj-sub-navigation` |
| [hmpps-restricted-patients](https://github.com/ministryofjustice/hmpps-restricted-patients) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-restricted-patients/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [hmpps-restricted-patients-ui](https://github.com/ministryofjustice/hmpps-restricted-patients-ui) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-restricted-patients-ui/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-single-accommodation-service-ui](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [hmpps-video-conference-schedule-ui](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui) | [`assets/scss/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui/blob/HEAD/assets/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  | `moj-action-bar`, `moj-filter`, `moj-sortable-table` |
| [make-recall-decision-ui](https://github.com/ministryofjustice/make-recall-decision-ui) | [`server/views/components/accessible-autocomplete/macro.njk`](https://github.com/ministryofjustice/make-recall-decision-ui/blob/HEAD/server/views/components/accessible-autocomplete/macro.njk) | Nunjucks macro |  |  |  |
| [prepare-a-case](https://github.com/ministryofjustice/prepare-a-case) | [`server/views/components/accessible-autocomplete/macro.njk`](https://github.com/ministryofjustice/prepare-a-case/blob/HEAD/server/views/components/accessible-autocomplete/macro.njk) | Nunjucks macro |  |  | `moj-badge` |
| [sentence-planning](https://github.com/ministryofjustice/sentence-planning) | [`common/assets/sass/components/accessible-autocomplete.scss`](https://github.com/ministryofjustice/sentence-planning/blob/HEAD/common/assets/sass/components/accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |
| [apply-for-compensation-prototype](https://github.com/ministryofjustice/apply-for-compensation-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/ministryofjustice/apply-for-compensation-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [hmpps-activity-management-prototype](https://github.com/ministryofjustice/hmpps-activity-management-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-activity-management-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `moj-badge` |
| [hmpps-community-accommodation-tier-2-bail-prototypes](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `moj-side-navigation` |
| [hmpps-interventions-prototype](https://github.com/ministryofjustice/hmpps-interventions-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-interventions-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `moj-sortable-table`, `moj-sub-navigation` |
| [hmpps-official-visits-prototype](https://github.com/ministryofjustice/hmpps-official-visits-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/ministryofjustice/hmpps-official-visits-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [hmpps-prisoner-apps-prototype](https://github.com/ministryofjustice/hmpps-prisoner-apps-prototype) | [`app/assets/sass/components/accessible-autocomplete.scss`](https://github.com/ministryofjustice/hmpps-prisoner-apps-prototype/blob/HEAD/app/assets/sass/components/accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### DEFRA (13, 12 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [apha-apps-perms-move-animal-ui](https://github.com/DEFRA/apha-apps-perms-move-animal-ui) | [`src/client/stylesheets/components/_autocomplete.scss`](https://github.com/DEFRA/apha-apps-perms-move-animal-ui/blob/HEAD/src/client/stylesheets/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [aphw-ddi-enforcement](https://github.com/DEFRA/aphw-ddi-enforcement) | [`app/views/components/accessibleAutocomplete/macro.njk`](https://github.com/DEFRA/aphw-ddi-enforcement/blob/HEAD/app/views/components/accessibleAutocomplete/macro.njk) | Nunjucks macro |  |  |  |
| [aphw-ddi-portal](https://github.com/DEFRA/aphw-ddi-portal) | [`app/views/components/accessibleAutocomplete/macro.njk`](https://github.com/DEFRA/aphw-ddi-portal/blob/HEAD/app/views/components/accessibleAutocomplete/macro.njk) | Nunjucks macro |  |  |  |
| [cdp-portal-frontend](https://github.com/DEFRA/cdp-portal-frontend) | [`src/server/common/components/autocomplete/_autocomplete.scss`](https://github.com/DEFRA/cdp-portal-frontend/blob/HEAD/src/server/common/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [cdp-sbom-demo-frontend](https://github.com/DEFRA/cdp-sbom-demo-frontend) | [`src/server/common/components/autocomplete/_autocomplete.scss`](https://github.com/DEFRA/cdp-sbom-demo-frontend/blob/HEAD/src/server/common/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [defra-map](https://github.com/DEFRA/defra-map) | [`src/js/components/autocomplete.jsx`](https://github.com/DEFRA/defra-map/blob/HEAD/src/js/components/autocomplete.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [forms-designer](https://github.com/DEFRA/forms-designer) | [`client/src/components/Autocomplete/Autocomplete.tsx`](https://github.com/DEFRA/forms-designer/blob/HEAD/client/src/components/Autocomplete/Autocomplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [lis-infra-ui-services](https://github.com/DEFRA/lis-infra-ui-services) | [`src/components/autocomplete.scss`](https://github.com/DEFRA/lis-infra-ui-services/blob/HEAD/src/components/autocomplete.scss) | SCSS/CSS only |  |  |  |
| [marine-licensing-frontend](https://github.com/DEFRA/marine-licensing-frontend) | [`src/client/stylesheets/components/accessible-autocomplete/_accessible-autocomplete.scss`](https://github.com/DEFRA/marine-licensing-frontend/blob/HEAD/src/client/stylesheets/components/accessible-autocomplete/_accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |
| [trade-demo-frontend](https://github.com/DEFRA/trade-demo-frontend) | [`src/client/stylesheets/components/_autocomplete.scss`](https://github.com/DEFRA/trade-demo-frontend/blob/HEAD/src/client/stylesheets/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [trade-imports-animals-frontend](https://github.com/DEFRA/trade-imports-animals-frontend) | [`src/client/javascripts/components/accessible-autocomplete.js`](https://github.com/DEFRA/trade-imports-animals-frontend/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js) | JS/TS component |  |  |  |
| [trade-imports-plants-frontend](https://github.com/DEFRA/trade-imports-plants-frontend) | [`src/client/javascripts/components/accessible-autocomplete.js`](https://github.com/DEFRA/trade-imports-plants-frontend/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js) | JS/TS component |  |  |  |
| [trade-imports-plants-prototype](https://github.com/DEFRA/trade-imports-plants-prototype) | [`src/client/javascripts/components/accessible-autocomplete.js`](https://github.com/DEFRA/trade-imports-plants-prototype/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js) | JS/TS component | yes |  |  |

#### DFE-Digital (24, 9 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [buy-for-your-school](https://github.com/DFE-Digital/buy-for-your-school) | [`app/assets/stylesheets/components/_autocomplete.scss`](https://github.com/DFE-Digital/buy-for-your-school/blob/HEAD/app/assets/stylesheets/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [education-benchmarking-and-insights](https://github.com/DFE-Digital/education-benchmarking-and-insights) | [`front-end-components/src/components/auto-complete/index.tsx`](https://github.com/DFE-Digital/education-benchmarking-and-insights/blob/HEAD/front-end-components/src/components/auto-complete/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [fh-services](https://github.com/DFE-Digital/fh-services) | [`src/shared/web-components/src/familyhubs-frontend/scripts/components/autocomplete.ts`](https://github.com/DFE-Digital/fh-services/blob/HEAD/src/shared/web-components/src/familyhubs-frontend/scripts/components/autocomplete.ts) | JS/TS component |  |  |  |
| [find-teacher-training](https://github.com/DFE-Digital/find-teacher-training) | [`app/webpacker/styles/components/_autocomplete.scss`](https://github.com/DFE-Digital/find-teacher-training/blob/HEAD/app/webpacker/styles/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [itt-mentor-services](https://github.com/DFE-Digital/itt-mentor-services) | [`app/assets/stylesheets/components/_autocomplete.scss`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/assets/stylesheets/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/assets/stylesheets/components/_autocomplete.scss`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/assets/stylesheets/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [register-trainee-teachers](https://github.com/DFE-Digital/register-trainee-teachers) | [`app/assets/stylesheets/components/_autocomplete.scss`](https://github.com/DFE-Digital/register-trainee-teachers/blob/HEAD/app/assets/stylesheets/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [register-training-providers](https://github.com/DFE-Digital/register-training-providers) | [`app/assets/stylesheets/components/_autocomplete.scss`](https://github.com/DFE-Digital/register-training-providers/blob/HEAD/app/assets/stylesheets/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [trs-post-mvp](https://github.com/DFE-Digital/trs-post-mvp) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/DFE-Digital/trs-post-mvp/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only |  |  | `hods-date-time`, `hods-highlight`, `hods-timeline`, `x-govuk-secondary-navigation` |
| [apply-for-qts-prototype](https://github.com/DFE-Digital/apply-for-qts-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/DFE-Digital/apply-for-qts-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `gem-c-contents-list` |
| [apply-for-teacher-training-prototype](https://github.com/DFE-Digital/apply-for-teacher-training-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/DFE-Digital/apply-for-teacher-training-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [check-performance-data-prototype](https://github.com/DFE-Digital/check-performance-data-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/DFE-Digital/check-performance-data-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  | `dfe-card`, `moj-scrollable-pane`, `moj-side-navigation` |
| [check-your-eligibility-prototype](https://github.com/DFE-Digital/check-your-eligibility-prototype) | [`app/assets/sass/components/autocomplete.scss`](https://github.com/DFE-Digital/check-your-eligibility-prototype/blob/HEAD/app/assets/sass/components/autocomplete.scss) | SCSS/CSS only | yes |  | `gem-c-contextual-footer`, `gem-c-contextual-sidebar`, `gem-c-govspeak`, `gem-c-related-navigation`, `moj-add-another`, `moj-scrollable-pane` |
| [csc-swr-ur-prototype](https://github.com/DFE-Digital/csc-swr-ur-prototype) | [`app/assets/sass/components/accessible-autocomplete.scss`](https://github.com/DFE-Digital/csc-swr-ur-prototype/blob/HEAD/app/assets/sass/components/accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [find-teacher-training-hackday-prototype](https://github.com/DFE-Digital/find-teacher-training-hackday-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/DFE-Digital/find-teacher-training-hackday-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [find-teacher-training-prototype](https://github.com/DFE-Digital/find-teacher-training-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/DFE-Digital/find-teacher-training-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [govuk-ghwt-prototype](https://github.com/DFE-Digital/govuk-ghwt-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/DFE-Digital/govuk-ghwt-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [itt-mentoring-alpha-prototype](https://github.com/DFE-Digital/itt-mentoring-alpha-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/DFE-Digital/itt-mentoring-alpha-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [manage-teaching-jobs-prototype](https://github.com/DFE-Digital/manage-teaching-jobs-prototype) | [`app/views/components/autocomplete/_autocomplete.scss`](https://github.com/DFE-Digital/manage-teaching-jobs-prototype/blob/HEAD/app/views/components/autocomplete/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [pre-ab-transfers](https://github.com/DFE-Digital/pre-ab-transfers) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/DFE-Digital/pre-ab-transfers/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `moj-filter` |
| [sdd-concerns-prototype](https://github.com/DFE-Digital/sdd-concerns-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/DFE-Digital/sdd-concerns-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `moj-filter` |
| [sdd-services-prototype](https://github.com/DFE-Digital/sdd-services-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/DFE-Digital/sdd-services-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [teaching-vacancies-prototype](https://github.com/DFE-Digital/teaching-vacancies-prototype) | [`app/versions/1-0/views/components/autocomplete/_autocomplete.scss`](https://github.com/DFE-Digital/teaching-vacancies-prototype/blob/HEAD/app/versions/1-0/views/components/autocomplete/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [trs-support-console](https://github.com/DFE-Digital/trs-support-console) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/DFE-Digital/trs-support-console/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  | `hods-date-time`, `hods-timeline` |

#### SkillsFundingAgency (13, 7 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-campaign](https://github.com/SkillsFundingAgency/das-campaign) | [`src/SFA.DAS.Campaign.Web/wwwroot/src/components/autocomplete/_autocomplete.js`](https://github.com/SkillsFundingAgency/das-campaign/blob/HEAD/src/SFA.DAS.Campaign.Web/wwwroot/src/components/autocomplete/_autocomplete.js) | JS/TS component |  |  |  |
| [das-findapprenticeship-web](https://github.com/SkillsFundingAgency/das-findapprenticeship-web) | [`src/SFA.DAS.FAA.Web/Frontend/scss/components/autocomplete/_index.scss`](https://github.com/SkillsFundingAgency/das-findapprenticeship-web/blob/HEAD/src/SFA.DAS.FAA.Web/Frontend/scss/components/autocomplete/_index.scss) | SCSS/CSS only |  |  |  |
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/fiu/components/autocomplete/_autocomplete.js`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/fiu/components/autocomplete/_autocomplete.js) | JS/TS component |  |  |  |
| [tl-marketing-and-communication](https://github.com/SkillsFundingAgency/tl-marketing-and-communication) | [`src/sfa.Tl.Marketing.Communication/Frontend/src/scss/components/_autocomplete.scss`](https://github.com/SkillsFundingAgency/tl-marketing-and-communication/blob/HEAD/src/sfa.Tl.Marketing.Communication/Frontend/src/scss/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [tl-matching](https://github.com/SkillsFundingAgency/tl-matching) | [`src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/css/components/autocomplete.css`](https://github.com/SkillsFundingAgency/tl-matching/blob/HEAD/src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/css/components/autocomplete.css) | SCSS/CSS only |  |  |  |
| [tl-poc-results-and-certification](https://github.com/SkillsFundingAgency/tl-poc-results-and-certification) | [`Sfa.Poc.ResultsAndCertification.CsvHelper/Sfa.Poc.ResultsAndCertification.CsvHelper.Web/Frontend/src/stylesheets/sass/components/_autocomplete.scss`](https://github.com/SkillsFundingAgency/tl-poc-results-and-certification/blob/HEAD/Sfa.Poc.ResultsAndCertification.CsvHelper/Sfa.Poc.ResultsAndCertification.CsvHelper.Web/Frontend/src/stylesheets/sass/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [tl-results-and-certification](https://github.com/SkillsFundingAgency/tl-results-and-certification) | [`src/Sfa.Tl.ResultsAndCertification.Web/Frontend/src/stylesheets/sass/components/_autocomplete.scss`](https://github.com/SkillsFundingAgency/tl-results-and-certification/blob/HEAD/src/Sfa.Tl.ResultsAndCertification.Web/Frontend/src/stylesheets/sass/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [das-add-and-approve-prototype](https://github.com/SkillsFundingAgency/das-add-and-approve-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/SkillsFundingAgency/das-add-and-approve-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [das-commitments-statement-prototype](https://github.com/SkillsFundingAgency/das-commitments-statement-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/SkillsFundingAgency/das-commitments-statement-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [das-employer-prototype](https://github.com/SkillsFundingAgency/das-employer-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/SkillsFundingAgency/das-employer-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [das-fat-prototype](https://github.com/SkillsFundingAgency/das-fat-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/SkillsFundingAgency/das-fat-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [das-pgl-prototype](https://github.com/SkillsFundingAgency/das-pgl-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/SkillsFundingAgency/das-pgl-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [das-recruit-prototype](https://github.com/SkillsFundingAgency/das-recruit-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/SkillsFundingAgency/das-recruit-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### alphagov (6, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [collections-publisher](https://github.com/alphagov/collections-publisher) | [`app/assets/javascripts/components/autocomplete.js`](https://github.com/alphagov/collections-publisher/blob/HEAD/app/assets/javascripts/components/autocomplete.js) | JS/TS component |  |  |  |
| [content-data-admin](https://github.com/alphagov/content-data-admin) | [`app/assets/javascripts/components/accessible-autocomplete.js`](https://github.com/alphagov/content-data-admin/blob/HEAD/app/assets/javascripts/components/accessible-autocomplete.js) | JS/TS component |  |  |  |
| [pay-open-banking-prototype](https://github.com/alphagov/pay-open-banking-prototype) | [`src/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/alphagov/pay-open-banking-prototype/blob/HEAD/src/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |
| [pay-selfservice](https://github.com/alphagov/pay-selfservice) | [`src/assets/sass/components/accessible-autocomplete.scss`](https://github.com/alphagov/pay-selfservice/blob/HEAD/src/assets/sass/components/accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |
| [signon](https://github.com/alphagov/signon) | [`app/assets/stylesheets/components/_accessible-autocomplete.scss`](https://github.com/alphagov/signon/blob/HEAD/app/assets/stylesheets/components/_accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |
| [govuk-content-publisher-prototype-old](https://github.com/alphagov/govuk-content-publisher-prototype-old) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/alphagov/govuk-content-publisher-prototype-old/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### hmrc (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmrc-frontend](https://github.com/hmrc/hmrc-frontend) | [`src/components/accessible-autocomplete/accessible-autocomplete.js`](https://github.com/hmrc/hmrc-frontend/blob/HEAD/src/components/accessible-autocomplete/accessible-autocomplete.js) | JS/TS component |  |  | `hmrc-banner`, `hmrc-caseworker-banner`, `hmrc-print-link` |
| [odx-child-benefit-frontend](https://github.com/hmrc/odx-child-benefit-frontend) | [`src/components/BaseComponents/Autocomplete/Autocomplete.tsx`](https://github.com/hmrc/odx-child-benefit-frontend/blob/HEAD/src/components/BaseComponents/Autocomplete/Autocomplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-paye-hicbc-frontend](https://github.com/hmrc/odx-paye-hicbc-frontend) | [`src/components/BaseComponents/Autocomplete/Autocomplete.tsx`](https://github.com/hmrc/odx-paye-hicbc-frontend/blob/HEAD/src/components/BaseComponents/Autocomplete/Autocomplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-paye-iabd-frontend](https://github.com/hmrc/odx-paye-iabd-frontend) | [`src/components/BaseComponents/Autocomplete/Autocomplete.tsx`](https://github.com/hmrc/odx-paye-iabd-frontend/blob/HEAD/src/components/BaseComponents/Autocomplete/Autocomplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-self-assessment-frontend](https://github.com/hmrc/odx-self-assessment-frontend) | [`src/components/BaseComponents/Autocomplete/Autocomplete.tsx`](https://github.com/hmrc/odx-self-assessment-frontend/blob/HEAD/src/components/BaseComponents/Autocomplete/Autocomplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### communitiesuk (4, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [funding-service](https://github.com/communitiesuk/funding-service) | [`app/assets/components/select-with-search/_index.scss`](https://github.com/communitiesuk/funding-service/blob/HEAD/app/assets/components/select-with-search/_index.scss) | SCSS/CSS only |  |  |  |
| [submit-social-housing-lettings-and-sales-data-prototype](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype) | [`app/components/autocomplete/_autocomplete.scss`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype/blob/HEAD/app/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [xgovuk-flask-admin](https://github.com/communitiesuk/xgovuk-flask-admin) | [`src/assets/components/_select-with-search.scss`](https://github.com/communitiesuk/xgovuk-flask-admin/blob/HEAD/src/assets/components/_select-with-search.scss) | SCSS/CSS only |  |  | `gem-c-select-with-search`, `moj-action-bar`, `moj-button-menu`, `moj-filter` |
| [funding-service-prototypes](https://github.com/communitiesuk/funding-service-prototypes) | [`Desktop/funding-service-prototypes-main/Desktop/funding-service-prototypes-main/app/assets/javascripts/components/select-with-search.js`](https://github.com/communitiesuk/funding-service-prototypes/blob/HEAD/Desktop/funding-service-prototypes-main/Desktop/funding-service-prototypes-main/app/assets/javascripts/components/select-with-search.js) | JS/TS component | yes |  |  |

#### Crown-Commercial-Service (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [DataSubmissionServiceAPI](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI) | [`app/assets/stylesheets/components/autocomplete/_autocomplete.scss`](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI/blob/HEAD/app/assets/stylesheets/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [reportmi-frontend](https://github.com/Crown-Commercial-Service/reportmi-frontend) | [`stylesheets/components/autocomplete/_autocomplete.scss`](https://github.com/Crown-Commercial-Service/reportmi-frontend/blob/HEAD/stylesheets/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  |  |

#### digital-land (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [config-manager](https://github.com/digital-land/config-manager) | [`src/scss/components/_accessible-autocomplete.scss`](https://github.com/digital-land/config-manager/blob/HEAD/src/scss/components/_accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |
| [design-system](https://github.com/digital-land/design-system) | [`templates/design-system/components/autocomplete/macro.html`](https://github.com/digital-land/design-system/blob/HEAD/templates/design-system/components/autocomplete/macro.html) | Nunjucks macro |  |  |  |

#### nhsbsa (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [contact-the-bsa](https://github.com/nhsbsa/contact-the-bsa) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/nhsbsa/contact-the-bsa/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-link` |
| [HRT-PPC](https://github.com/nhsbsa/HRT-PPC) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/nhsbsa/HRT-PPC/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only |  |  | `nhsuk-action-link` |

#### defra-design (10, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [digital-waste-reporting](https://github.com/defra-design/digital-waste-reporting) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/defra-design/digital-waste-reporting/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [echo-prototype](https://github.com/defra-design/echo-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/defra-design/echo-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  | `gem-c-attachment`, `gem-c-contents-list`, `gem-c-contextual-footer`, `gem-c-contextual-sidebar`, `gem-c-document-list`, `gem-c-error-alert`, `gem-c-govspeak`, `gem-c-govspeak-html-publication`, `gem-c-heading`, `gem-c-image-card`, `gem-c-inverse-header`, `gem-c-lead-paragraph`, `gem-c-metadata`, `gem-c-modal-dialogue`, `gem-c-notice`, `gem-c-organisation-logo`, `gem-c-related-navigation`, `gem-c-search`, `gem-c-subscription-links`, `gem-c-success-alert` |
| [etrade-prototype](https://github.com/defra-design/etrade-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/defra-design/etrade-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `moj-sortable-table` |
| [get-air-pollution-data-prototype](https://github.com/defra-design/get-air-pollution-data-prototype) | [`app/assets/sass/data-selector/components/_autocomplete.scss`](https://github.com/defra-design/get-air-pollution-data-prototype/blob/HEAD/app/assets/sass/data-selector/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `gem-c-cards` |
| [haz-waste-proto-main](https://github.com/defra-design/haz-waste-proto-main) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/defra-design/haz-waste-proto-main/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [plant-exports-prototype](https://github.com/defra-design/plant-exports-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/defra-design/plant-exports-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [reex-applications-prototype](https://github.com/defra-design/reex-applications-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/defra-design/reex-applications-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [reex-regulator-prototype](https://github.com/defra-design/reex-regulator-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/defra-design/reex-regulator-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [wtp-glw-prototype](https://github.com/defra-design/wtp-glw-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/defra-design/wtp-glw-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [wts-prototype](https://github.com/defra-design/wts-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/defra-design/wts-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### dwp (5, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dwp-kbv-uplift](https://github.com/dwp/dwp-kbv-uplift) | [`.tmp/backup-nunjucks/hmrc/components/accessible-autocomplete/macro.html`](https://github.com/dwp/dwp-kbv-uplift/blob/HEAD/.tmp/backup-nunjucks/hmrc/components/accessible-autocomplete/macro.html) | Nunjucks macro |  |  |  |
| [kbv-prototype](https://github.com/dwp/kbv-prototype) | [`.tmp/backup-nunjucks/hmrc/components/accessible-autocomplete/macro.html`](https://github.com/dwp/kbv-prototype/blob/HEAD/.tmp/backup-nunjucks/hmrc/components/accessible-autocomplete/macro.html) | Nunjucks macro | yes |  |  |
| [newstylejsa-admin](https://github.com/dwp/newstylejsa-admin) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/dwp/newstylejsa-admin/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  | `dwp-timeline` |
| [pyca-hrt-review](https://github.com/dwp/pyca-hrt-review) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/dwp/pyca-hrt-review/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |
| [pyca-prototype](https://github.com/dwp/pyca-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/dwp/pyca-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### NHSDigital (3, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only |  |  | `nhsuk-link` |
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  | `nhsuk-link` |
| [manage-vaccinations-in-schools-prototype](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype) | [`app/assets/javascripts/components/autocomplete.js`](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype/blob/HEAD/app/assets/javascripts/components/autocomplete.js) | JS/TS component | yes |  |  |

#### InnovateUKGitHub (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [innovation-funding-service](https://github.com/InnovateUKGitHub/innovation-funding-service) | [`ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_autocomplete.scss`](https://github.com/InnovateUKGitHub/innovation-funding-service/blob/HEAD/ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_autocomplete.scss) | SCSS/CSS only |  |  |  |
| [ifs-prototypes](https://github.com/InnovateUKGitHub/ifs-prototypes) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/InnovateUKGitHub/ifs-prototypes/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### Planning-Inspectorate (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [peas-row-commons](https://github.com/Planning-Inspectorate/peas-row-commons) | [`apps/manage/src/app/views/layouts/components/accessible-autocomplete.njk`](https://github.com/Planning-Inspectorate/peas-row-commons/blob/HEAD/apps/manage/src/app/views/layouts/components/accessible-autocomplete.njk) | template partial |  |  | `moj-multi-file-upload`, `moj-sortable-table` |
| [appeals-prototype](https://github.com/Planning-Inspectorate/appeals-prototype) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/Planning-Inspectorate/appeals-prototype/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### co-cddo (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rapid](https://github.com/co-cddo/rapid) | [`frontend/src/components/Autocomplete/Autocomplete.tsx`](https://github.com/co-cddo/rapid/blob/HEAD/frontend/src/components/Autocomplete/Autocomplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### CPS-Innovation (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Case-Management-Register-a-Case](https://github.com/CPS-Innovation/Case-Management-Register-a-Case) | [`src/ui-spa/src/components/govuk/AutoComplete.tsx`](https://github.com/CPS-Innovation/Case-Management-Register-a-Case/blob/HEAD/src/ui-spa/src/components/govuk/AutoComplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### govuk-pay (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pay-selfservice](https://github.com/govuk-pay/pay-selfservice) | [`src/assets/sass/components/accessible-autocomplete.scss`](https://github.com/govuk-pay/pay-selfservice/blob/HEAD/src/assets/sass/components/accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |

#### hmcts (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cui-ra](https://github.com/hmcts/cui-ra) | [`src/main/views/components/accessible-autocomplete/_accessible-autocomplete.scss`](https://github.com/hmcts/cui-ra/blob/HEAD/src/main/views/components/accessible-autocomplete/_accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |

#### LondonBoroughSutton (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [suttoninformationhub-frontend](https://github.com/LondonBoroughSutton/suttoninformationhub-frontend) | [`src/components/Autocomplete/Autocomplete.scss`](https://github.com/LondonBoroughSutton/suttoninformationhub-frontend/blob/HEAD/src/components/Autocomplete/Autocomplete.scss) | SCSS/CSS only |  |  |  |

#### no10ds (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rapid](https://github.com/no10ds/rapid) | [`frontend/src/components/Autocomplete/Autocomplete.tsx`](https://github.com/no10ds/rapid/blob/HEAD/frontend/src/components/Autocomplete/Autocomplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ONSdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/ONSdigital/design-system) | [`src/components/autosuggest/_autosuggest.scss`](https://github.com/ONSdigital/design-system/blob/HEAD/src/components/autosuggest/_autosuggest.scss) | SCSS/CSS only |  |  |  |

#### OrdnanceSurvey (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [web-elements](https://github.com/OrdnanceSurvey/web-elements) | [`src/components/autocomplete/autocomplete.ts`](https://github.com/OrdnanceSurvey/web-elements/blob/HEAD/src/components/autocomplete/autocomplete.ts) | JS/TS component |  |  |  |

#### scottish-government-design-system (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/scottish-government-design-system/design-system) | [`src/components/autocomplete/_autocomplete.scss`](https://github.com/scottish-government-design-system/design-system/blob/HEAD/src/components/autocomplete/_autocomplete.scss) | SCSS/CSS only |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gender-pay-gap](https://github.com/ukgov-equality-hub/gender-pay-gap) | [`GenderPayGap.WebUI/wwwroot/styles/components/_accessible-autocomplete.scss`](https://github.com/ukgov-equality-hub/gender-pay-gap/blob/HEAD/GenderPayGap.WebUI/wwwroot/styles/components/_accessible-autocomplete.scss) | SCSS/CSS only |  |  |  |

#### UKHO (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [admiralty-design-system](https://github.com/UKHO/admiralty-design-system) | [`packages/core/src/components/autocomplete/autocomplete.scss`](https://github.com/UKHO/admiralty-design-system/blob/HEAD/packages/core/src/components/autocomplete/autocomplete.scss) | SCSS/CSS only |  |  |  |

#### ukhsa-collaboration (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [digital-form-builder](https://github.com/ukhsa-collaboration/digital-form-builder) | [`designer/client/components/Autocomplete/Autocomplete.tsx`](https://github.com/ukhsa-collaboration/digital-form-builder/blob/HEAD/designer/client/components/Autocomplete/Autocomplete.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### Government-People-Group (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [csj-ra-dash](https://github.com/Government-People-Group/csj-ra-dash) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/Government-People-Group/csj-ra-dash/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### LandRegistry (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [local-land-charges-prototypes](https://github.com/LandRegistry/local-land-charges-prototypes) | [`app/assets/sass/components/_autocomplete.scss`](https://github.com/LandRegistry/local-land-charges-prototypes/blob/HEAD/app/assets/sass/components/_autocomplete.scss) | SCSS/CSS only | yes |  |  |

#### UKGovernmentBEIS (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [beis-ets-prototype](https://github.com/UKGovernmentBEIS/beis-ets-prototype) | [`app/assets/sass/components/_accessible-autocomplete.scss`](https://github.com/UKGovernmentBEIS/beis-ets-prototype/blob/HEAD/app/assets/sass/components/_accessible-autocomplete.scss) | SCSS/CSS only | yes |  |  |

## Adjacent work

Related: moj-multi-select (11 repos use the classes) overlaps with filtering — see the [search drill-down](./search.md). Country/nationality pickers are autocomplete use cases with their own backlog discussions.
