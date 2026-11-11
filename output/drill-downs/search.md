# Search and filtering: service repo drill-down

Generated 2026-11-11 from the audit snapshot of 2026-11-04 ([clusters.json](../clusters.json)) combined with class usage data ([class-usage.json](../class-usage.json)). See [report.md](../report.md) for methodology.

Search is the #1 candidate overall (79.7). This doc covers the search input, results, no-results and search-bar clusters, plus the filter cluster (63.1) since filtering a results list is the same work for most teams.

Each repo appears once per cluster, with a link to the file the audit matched. "Extends GOV.UK" means the implementation builds on or imports the GOV.UK Frontend component rather than being written from scratch. The "Community classes used" column lists *all* community design system classes detected in that repo (any component) — repos consuming another organisation's component rather than, or as well as, building their own. "Orgs" counts unique GitHub organisations.

Caveats: detection is filename/class-name based, so some hits may be false positives, and one hit per repo means the audit shows *an* example file, not every instance. Class usage and component detection are independent scans: a repo can use a community class without having its own matching file, and vice versa.

## At a glance

| Cluster | Status | Score | Repos (production / prototype) | Orgs | Extend GOV.UK |
|---|---|---|---|---|---|
| search (input/box) | not in GOV.UK Frontend | 79.7 | 147 (110 / 37) | 43 |  |
| filter (filter a list) | not in GOV.UK Frontend | 63.1 | 142 (97 / 45) | 39 |  |
| search-result | not in GOV.UK Frontend | 42.4 | 40 (31 / 9) | 21 |  |
| search-bar | not in GOV.UK Frontend | 30.0 | 14 (14 / 0) | 13 |  |
| no-results | not in GOV.UK Frontend | 31.1 | 13 (13 / 0) | 7 |  |

## Community class adoption

Repos using another design system's classes. These are *consumers* of a community component — evidence of which existing implementation teams reach for.

| Class | Source design system | Repos | Orgs | Production | Prototypes |
|---|---|---|---|---|---|
| `moj-search` | moj-frontend | 27 | 7 | 19 | 8 |
| `gem-c-search` | govuk-publishing-components | 18 | 7 | 6 | 12 |
| `nhsuk-search-input` | nhsuk-frontend | 1 | 1 | 0 | 1 |
| `moj-filter` | moj-frontend | 34 | 10 | 22 | 12 |
| `moj-multi-select` | moj-frontend | 11 | 5 | 9 | 2 |
| `moj-search-toggle` | moj-frontend | 2 | 1 | 0 | 2 |
| `tna-date-search` | tna-frontend | 1 | 1 | 1 | 0 |

**14 repos both consume a community class and have their own implementation** in the clusters below; **74 consume a community class with no matching own implementation detected**.

<details><summary>Consumers without their own implementation (74 repos, 14 orgs)</summary>

- **alphagov**: [data-marketplace-prototype](https://github.com/alphagov/data-marketplace-prototype) (proto) (`gem-c-search`), [govuk-dark-mode-prototype](https://github.com/alphagov/govuk-dark-mode-prototype) (proto) (`gem-c-search`)
- **co-cddo**: [cms-prototype](https://github.com/co-cddo/cms-prototype) (proto) (`gem-c-search`), [data-catalogue-prototypes](https://github.com/co-cddo/data-catalogue-prototypes) (proto) (`gem-c-search`), [dds](https://github.com/co-cddo/dds) (`gem-c-search`), [dea-register-frontend](https://github.com/co-cddo/dea-register-frontend) (`moj-filter`)
- **companieshouse**: [5mld-prototype](https://github.com/companieshouse/5mld-prototype) (proto) (`gem-c-search`), [hide-your-details-prototype](https://github.com/companieshouse/hide-your-details-prototype) (proto) (`moj-multi-select`)
- **defra-design**: [caseworking-ai-test](https://github.com/defra-design/caseworking-ai-test) (`moj-search`), [defra-forms-mvp-prototype](https://github.com/defra-design/defra-forms-mvp-prototype) (proto) (`gem-c-search`), [fcp-animal-health](https://github.com/defra-design/fcp-animal-health) (`gem-c-search`), [fcp-combined-offer](https://github.com/defra-design/fcp-combined-offer) (`moj-multi-select`), [fcp-grants-casework](https://github.com/defra-design/fcp-grants-casework) (`moj-search`), [ff-ss](https://github.com/defra-design/ff-ss) (`gem-c-search`), [Import-risk-categorisation](https://github.com/defra-design/Import-risk-categorisation) (`gem-c-search`), [manage-biodiversity-gains](https://github.com/defra-design/manage-biodiversity-gains) (`gem-c-search`), [movinganimalstogb](https://github.com/defra-design/movinganimalstogb) (`moj-multi-select`), [new-cites-prototype](https://github.com/defra-design/new-cites-prototype) (proto) (`moj-filter`), [trade-paper-prototype](https://github.com/defra-design/trade-paper-prototype) (proto) (`moj-search`)
- **DFE-Digital**: [accessibility-issues-statements](https://github.com/DFE-Digital/accessibility-issues-statements) (`moj-filter`), [check-free-school-meals-eligibility-admin](https://github.com/DFE-Digital/check-free-school-meals-eligibility-admin) (`moj-filter`), [ci-general-prototype](https://github.com/DFE-Digital/ci-general-prototype) (proto) (`gem-c-search`), [communicating-funding-prototype](https://github.com/DFE-Digital/communicating-funding-prototype) (proto) (`moj-filter`), [DfE-Connect-Prototype](https://github.com/DFE-Digital/DfE-Connect-Prototype) (proto) (`gem-c-search`), [education-provider-registry-web](https://github.com/DFE-Digital/education-provider-registry-web) (`moj-filter`), [external-applications-prototype](https://github.com/DFE-Digital/external-applications-prototype) (proto) (`gem-c-search`), [incident-response-tool](https://github.com/DFE-Digital/incident-response-tool) (`moj-filter`), [pre-ab-transfers](https://github.com/DFE-Digital/pre-ab-transfers) (`moj-filter`), [record-concerns-support-trusts](https://github.com/DFE-Digital/record-concerns-support-trusts) (`moj-search`), [sdd-concerns-prototype](https://github.com/DFE-Digital/sdd-concerns-prototype) (proto) (`moj-filter`), [sip-public](https://github.com/DFE-Digital/sip-public) (`moj-filter`), [teacher-success-prototype](https://github.com/DFE-Digital/teacher-success-prototype) (proto) (`moj-filter`)
- **dwp**: [bsp-claim-manager](https://github.com/dwp/bsp-claim-manager) (`moj-search`), [CAMLite-Prototype](https://github.com/dwp/CAMLite-Prototype) (proto) (`moj-search`), [cold-weather-payments](https://github.com/dwp/cold-weather-payments) (`moj-filter`), [common-capabilities-mmw](https://github.com/dwp/common-capabilities-mmw) (`moj-search`), [debt-payment-prototype](https://github.com/dwp/debt-payment-prototype) (proto) (`moj-filter`), [evidence-prototype](https://github.com/dwp/evidence-prototype) (proto) (`moj-filter`), [funeral-payments-manager](https://github.com/dwp/funeral-payments-manager) (`moj-search`), [future-quality-model-prototype](https://github.com/dwp/future-quality-model-prototype) (proto) (`moj-filter`), [phoenix-service](https://github.com/dwp/phoenix-service) (`moj-search`), [ref-data-services](https://github.com/dwp/ref-data-services) (`moj-search`), [suspense-investigation](https://github.com/dwp/suspense-investigation) (`moj-filter`)
- **hmcts**: [pip-frontend](https://github.com/hmcts/pip-frontend) (`moj-multi-select`)
- **LandRegistry**: [extent-annotation-tool-prototype](https://github.com/LandRegistry/extent-annotation-tool-prototype) (proto) (`moj-multi-select`)
- **ministryofjustice**: [create-and-vary-a-licence](https://github.com/ministryofjustice/create-and-vary-a-licence) (`moj-search`), [gov-reuse](https://github.com/ministryofjustice/gov-reuse) (`moj-search`), [hmpps-accredited-programmes-manage-and-deliver-ui](https://github.com/ministryofjustice/hmpps-accredited-programmes-manage-and-deliver-ui) (`moj-multi-select`), [hmpps-afer-prototype](https://github.com/ministryofjustice/hmpps-afer-prototype) (proto) (`moj-search`), [hmpps-court-appearance-scheduler-ui](https://github.com/ministryofjustice/hmpps-court-appearance-scheduler-ui) (`moj-search`), [hmpps-cvl-prototype](https://github.com/ministryofjustice/hmpps-cvl-prototype) (proto) (`moj-search`), [hmpps-electronic-monitoring-create-an-order-prototype](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order-prototype) (proto) (`moj-search`), [hmpps-electronic-monitoring-data-prototype](https://github.com/ministryofjustice/hmpps-electronic-monitoring-data-prototype) (proto) (`gem-c-search`), [hmpps-electronic-monitoring-datastore-ui](https://github.com/ministryofjustice/hmpps-electronic-monitoring-datastore-ui) (`moj-filter`), [hmpps-historical-prisoner-ui](https://github.com/ministryofjustice/hmpps-historical-prisoner-ui) (`moj-filter`), [hmpps-manage-offences](https://github.com/ministryofjustice/hmpps-manage-offences) (`gem-c-search`), [hmpps-manage-people-on-probation-ui](https://github.com/ministryofjustice/hmpps-manage-people-on-probation-ui) (`moj-search`), [hmpps-manage-users](https://github.com/ministryofjustice/hmpps-manage-users) (`moj-multi-select`), [hmpps-match-learner-record-ui](https://github.com/ministryofjustice/hmpps-match-learner-record-ui) (`moj-search`), [hmpps-person-record-manage-ui](https://github.com/ministryofjustice/hmpps-person-record-manage-ui) (`moj-search`), [hmpps-prisoner-finance-sync-ui](https://github.com/ministryofjustice/hmpps-prisoner-finance-sync-ui) (`moj-filter`), [hmpps-prisoner-property-ui](https://github.com/ministryofjustice/hmpps-prisoner-property-ui) (`moj-multi-select`), [hmpps-subject-access-request-ui](https://github.com/ministryofjustice/hmpps-subject-access-request-ui) (`moj-multi-select`), [hmpps-visit-someone-in-prison-prototype](https://github.com/ministryofjustice/hmpps-visit-someone-in-prison-prototype) (proto) (`moj-search`), [laa-decide-prototype](https://github.com/ministryofjustice/laa-decide-prototype) (proto) (`moj-filter`), [launchpad-prototype](https://github.com/ministryofjustice/launchpad-prototype) (proto) (`moj-filter`), [probation-search-ui](https://github.com/ministryofjustice/probation-search-ui) (`moj-search`), [prototype-kit-training](https://github.com/ministryofjustice/prototype-kit-training) (proto) (`moj-filter`)
- **nhsbsa**: [learning-support-fund-new](https://github.com/nhsbsa/learning-support-fund-new) (`moj-filter`), [nhsbsa-asc-tfrs](https://github.com/nhsbsa/nhsbsa-asc-tfrs) (`moj-search`, `moj-filter`)
- **NHSDigital**: [c2c-breast-screening-prototype](https://github.com/NHSDigital/c2c-breast-screening-prototype) (proto) (`nhsuk-search-input`)
- **Planning-Inspectorate**: [mpesc-prototype](https://github.com/Planning-Inspectorate/mpesc-prototype) (proto) (`moj-filter`)
- **SkillsFundingAgency**: [tl-employersupport-prototype](https://github.com/SkillsFundingAgency/tl-employersupport-prototype) (proto) (`gem-c-search`)
- **UKHSA-Internal**: [coronavirus-dashboard-frontend-server](https://github.com/UKHSA-Internal/coronavirus-dashboard-frontend-server) (`moj-search`)

</details>

## Repos by cluster and organisation

### search (input/box) — 147 repos, 43 orgs (110 production)

#### ministryofjustice (17, 14 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [find-moj-data](https://github.com/ministryofjustice/find-moj-data) | [`scss/components/_search.scss`](https://github.com/ministryofjustice/find-moj-data/blob/HEAD/scss/components/_search.scss) | SCSS/CSS only |  |  |  |
| [hmpps-activities-management](https://github.com/ministryofjustice/hmpps-activities-management) | [`frontend/components/search-input/search-input.scss`](https://github.com/ministryofjustice/hmpps-activities-management/blob/HEAD/frontend/components/search-input/search-input.scss) | SCSS/CSS only |  |  | `moj-multi-select`, `moj-sortable-table` |
| [hmpps-alerts-ui](https://github.com/ministryofjustice/hmpps-alerts-ui) | [`assets/scss/components/_search-input.scss`](https://github.com/ministryofjustice/hmpps-alerts-ui/blob/HEAD/assets/scss/components/_search-input.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-content-hub-ui](https://github.com/ministryofjustice/hmpps-content-hub-ui) | [`assets/scss/components/_search.scss`](https://github.com/ministryofjustice/hmpps-content-hub-ui/blob/HEAD/assets/scss/components/_search.scss) | SCSS/CSS only |  |  |  |
| [hmpps-digital-tech-radar](https://github.com/ministryofjustice/hmpps-digital-tech-radar) | [`.techradar/src/components/Icons/Search.tsx`](https://github.com/ministryofjustice/hmpps-digital-tech-radar/blob/HEAD/.techradar/src/components/Icons/Search.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [hmpps-education-employment-ui](https://github.com/ministryofjustice/hmpps-education-employment-ui) | [`assets/sass/components/_search.scss`](https://github.com/ministryofjustice/hmpps-education-employment-ui/blob/HEAD/assets/sass/components/_search.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-sub-navigation` |
| [hmpps-electronic-monitoring-create-an-order](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order) | [`server/views/components/search/macro.njk`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order/blob/HEAD/server/views/components/search/macro.njk) | Nunjucks macro |  |  | `moj-search` |
| [hmpps-find-and-refer-an-intervention-ui](https://github.com/ministryofjustice/hmpps-find-and-refer-an-intervention-ui) | [`assets/scss/components/_search.scss`](https://github.com/ministryofjustice/hmpps-find-and-refer-an-intervention-ui/blob/HEAD/assets/scss/components/_search.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-support-additional-needs-ui](https://github.com/ministryofjustice/hmpps-support-additional-needs-ui) | [`assets/scss/components/_search.scss`](https://github.com/ministryofjustice/hmpps-support-additional-needs-ui/blob/HEAD/assets/scss/components/_search.scss) | SCSS/CSS only |  |  |  |
| [justice](https://github.com/ministryofjustice/justice) | [`src/components/search/search.scss`](https://github.com/ministryofjustice/justice/blob/HEAD/src/components/search/search.scss) | SCSS/CSS only |  |  |  |
| [laa-spring-boot-ui-template](https://github.com/ministryofjustice/laa-spring-boot-ui-template) | [`src/main/resources/templates/fragments/components/moj-search.html`](https://github.com/ministryofjustice/laa-spring-boot-ui-template/blob/HEAD/src/main/resources/templates/fragments/components/moj-search.html) | template partial |  |  |  |
| [moj-frontend](https://github.com/ministryofjustice/moj-frontend) | [`src/moj/components/search/_search.scss`](https://github.com/ministryofjustice/moj-frontend/blob/HEAD/src/moj/components/search/_search.scss) | SCSS/CSS only |  |  |  |
| [prepare-a-case](https://github.com/ministryofjustice/prepare-a-case) | [`server/views/components/search/macro.njk`](https://github.com/ministryofjustice/prepare-a-case/blob/HEAD/server/views/components/search/macro.njk) | Nunjucks macro |  |  | `moj-badge` |
| [prisoner-content-hub-frontend](https://github.com/ministryofjustice/prisoner-content-hub-frontend) | [`assets/sass/components/_search.scss`](https://github.com/ministryofjustice/prisoner-content-hub-frontend/blob/HEAD/assets/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [digital-prison-reporting-mi-prototype](https://github.com/ministryofjustice/digital-prison-reporting-mi-prototype) | [`app/versions/operational-reporting/v6/components/search-box/macro.html`](https://github.com/ministryofjustice/digital-prison-reporting-mi-prototype/blob/HEAD/app/versions/operational-reporting/v6/components/search-box/macro.html) | Nunjucks macro | yes |  | `moj-action-bar`, `moj-scrollable-pane` |
| [hmpps-activity-management-prototype](https://github.com/ministryofjustice/hmpps-activity-management-prototype) | [`app/assets/sass/components/_app-search.scss`](https://github.com/ministryofjustice/hmpps-activity-management-prototype/blob/HEAD/app/assets/sass/components/_app-search.scss) | SCSS/CSS only | yes |  | `moj-badge` |
| [hmpps-official-visits-prototype](https://github.com/ministryofjustice/hmpps-official-visits-prototype) | [`app/assets/sass/components/_app-search.scss`](https://github.com/ministryofjustice/hmpps-official-visits-prototype/blob/HEAD/app/assets/sass/components/_app-search.scss) | SCSS/CSS only | yes |  |  |

#### DFE-Digital (21, 13 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [architecture-manual](https://github.com/DFE-Digital/architecture-manual) | [`app/assets/scss/ncs/components/search.scss`](https://github.com/DFE-Digital/architecture-manual/blob/HEAD/app/assets/scss/ncs/components/search.scss) | SCSS/CSS only |  |  |  |
| [buy-for-your-school](https://github.com/DFE-Digital/buy-for-your-school) | [`app/assets/stylesheets/components/_search.scss`](https://github.com/DFE-Digital/buy-for-your-school/blob/HEAD/app/assets/stylesheets/components/_search.scss) | SCSS/CSS only |  |  |  |
| [buying-for-schools](https://github.com/DFE-Digital/buying-for-schools) | [`sass/components/_search.scss`](https://github.com/DFE-Digital/buying-for-schools/blob/HEAD/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [buying-for-schools-v2](https://github.com/DFE-Digital/buying-for-schools-v2) | [`sass/components/_search.scss`](https://github.com/DFE-Digital/buying-for-schools-v2/blob/HEAD/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [d365-design-manual](https://github.com/DFE-Digital/d365-design-manual) | [`app/views/powerpages/components/search.html`](https://github.com/DFE-Digital/d365-design-manual/blob/HEAD/app/views/powerpages/components/search.html) | template partial |  |  |  |
| [DfE-School-Account-Alpha](https://github.com/DFE-Digital/DfE-School-Account-Alpha) | [`app/assets/sass/components/search.scss`](https://github.com/DFE-Digital/DfE-School-Account-Alpha/blob/HEAD/app/assets/sass/components/search.scss) | SCSS/CSS only |  |  | `dfe-card`, `gem-c-big-number`, `moj-action-bar`, `moj-button-menu`, `moj-filter`, `moj-notification-badge`, `moj-scrollable-pane`, `moj-timeline` |
| [dsi-platform](https://github.com/DFE-Digital/dsi-platform) | [`frontend/src/components/site-search.scss`](https://github.com/DFE-Digital/dsi-platform/blob/HEAD/frontend/src/components/site-search.scss) | SCSS/CSS only |  |  |  |
| [early-careers-framework](https://github.com/DFE-Digital/early-careers-framework) | [`app/components/search_box.html.erb`](https://github.com/DFE-Digital/early-careers-framework/blob/HEAD/app/components/search_box.html.erb) | template partial |  |  |  |
| [find-information-about-academies-and-trusts](https://github.com/DFE-Digital/find-information-about-academies-and-trusts) | [`DfE.FindInformationAcademiesTrusts/assets/sass/components/_search.scss`](https://github.com/DFE-Digital/find-information-about-academies-and-trusts/blob/HEAD/DfE.FindInformationAcademiesTrusts/assets/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [find-information-about-schools-and-trusts](https://github.com/DFE-Digital/find-information-about-schools-and-trusts) | [`DfE.FindInformationAcademiesTrusts/assets/sass/components/_search.scss`](https://github.com/DFE-Digital/find-information-about-schools-and-trusts/blob/HEAD/DfE.FindInformationAcademiesTrusts/assets/sass/components/_search.scss) | SCSS/CSS only |  |  | `dfe-card`, `moj-filter`, `moj-sortable-table` |
| [register-early-career-teachers-public](https://github.com/DFE-Digital/register-early-career-teachers-public) | [`app/components/admin/teachers/search_component.rb`](https://github.com/DFE-Digital/register-early-career-teachers-public/blob/HEAD/app/components/admin/teachers/search_component.rb) | Rails ViewComponent |  |  |  |
| [trs-post-mvp](https://github.com/DFE-Digital/trs-post-mvp) | [`app/assets/sass/components/_search-form.scss`](https://github.com/DFE-Digital/trs-post-mvp/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only |  |  | `hods-date-time`, `hods-highlight`, `hods-timeline`, `x-govuk-secondary-navigation` |
| [user-research-new-manual](https://github.com/DFE-Digital/user-research-new-manual) | [`app/assets/scss/ncs/components/search.scss`](https://github.com/DFE-Digital/user-research-new-manual/blob/HEAD/app/assets/scss/ncs/components/search.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [check-performance-data-prototype](https://github.com/DFE-Digital/check-performance-data-prototype) | [`app/assets/sass/components/_search-form.scss`](https://github.com/DFE-Digital/check-performance-data-prototype/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only | yes |  | `dfe-card`, `moj-scrollable-pane`, `moj-side-navigation` |
| [csc-swr-ur-prototype](https://github.com/DFE-Digital/csc-swr-ur-prototype) | [`app/assets/sass/components/_hmcts-search.scss`](https://github.com/DFE-Digital/csc-swr-ur-prototype/blob/HEAD/app/assets/sass/components/_hmcts-search.scss) | SCSS/CSS only | yes |  |  |
| [itt-mentor-payment-sampling-clawback](https://github.com/DFE-Digital/itt-mentor-payment-sampling-clawback) | [`app/assets/sass/components/_search-form.scss`](https://github.com/DFE-Digital/itt-mentor-payment-sampling-clawback/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only | yes |  | `x-govuk-related-navigation` |
| [manage-teaching-jobs-prototype](https://github.com/DFE-Digital/manage-teaching-jobs-prototype) | [`app/views/components/search/_search.scss`](https://github.com/DFE-Digital/manage-teaching-jobs-prototype/blob/HEAD/app/views/components/search/_search.scss) | SCSS/CSS only | yes |  |  |
| [manage-training-for-early-career-teachers-prototype](https://github.com/DFE-Digital/manage-training-for-early-career-teachers-prototype) | [`app/assets/sass/components/_search-form.scss`](https://github.com/DFE-Digital/manage-training-for-early-career-teachers-prototype/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only | yes |  |  |
| [teacher-services-landing-page-prototype](https://github.com/DFE-Digital/teacher-services-landing-page-prototype) | [`app/views/components/search/_search.scss`](https://github.com/DFE-Digital/teacher-services-landing-page-prototype/blob/HEAD/app/views/components/search/_search.scss) | SCSS/CSS only | yes |  |  |
| [teaching-vacancies-prototype](https://github.com/DFE-Digital/teaching-vacancies-prototype) | [`app/versions/1-0/views/components/search/_search.scss`](https://github.com/DFE-Digital/teaching-vacancies-prototype/blob/HEAD/app/versions/1-0/views/components/search/_search.scss) | SCSS/CSS only | yes |  |  |
| [trs-support-console](https://github.com/DFE-Digital/trs-support-console) | [`app/assets/sass/components/_search-form.scss`](https://github.com/DFE-Digital/trs-support-console/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only | yes |  | `hods-date-time`, `hods-timeline` |

#### DEFRA (13, 12 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ace-design-prototyping](https://github.com/DEFRA/ace-design-prototyping) | [`app/assets/sass/components/_defra-search.scss`](https://github.com/DEFRA/ace-design-prototyping/blob/HEAD/app/assets/sass/components/_defra-search.scss) | SCSS/CSS only |  |  |  |
| [aqie-front-end](https://github.com/DEFRA/aqie-front-end) | [`src/server/common/components/search/_search.scss`](https://github.com/DEFRA/aqie-front-end/blob/HEAD/src/server/common/components/search/_search.scss) | SCSS/CSS only |  |  |  |
| [aqie-prtr-frontend](https://github.com/DEFRA/aqie-prtr-frontend) | [`src/server/common/components/search-input/macro.njk`](https://github.com/DEFRA/aqie-prtr-frontend/blob/HEAD/src/server/common/components/search-input/macro.njk) | Nunjucks macro |  |  |  |
| [cdp-portal-frontend](https://github.com/DEFRA/cdp-portal-frontend) | [`src/server/common/components/search/_search.scss`](https://github.com/DEFRA/cdp-portal-frontend/blob/HEAD/src/server/common/components/search/_search.scss) | SCSS/CSS only |  |  |  |
| [defra-map](https://github.com/DEFRA/defra-map) | [`src/js/components/search.jsx`](https://github.com/DEFRA/defra-map/blob/HEAD/src/js/components/search.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [flood-app](https://github.com/DEFRA/flood-app) | [`server/src/sass/components/_search.scss`](https://github.com/DEFRA/flood-app/blob/HEAD/server/src/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [flood-app-temp](https://github.com/DEFRA/flood-app-temp) | [`server/src/sass/components/_search.scss`](https://github.com/DEFRA/flood-app-temp/blob/HEAD/server/src/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [forms-designer](https://github.com/DEFRA/forms-designer) | [`client/src/stylesheets/components/_search.scss`](https://github.com/DEFRA/forms-designer/blob/HEAD/client/src/stylesheets/components/_search.scss) | SCSS/CSS only |  |  |  |
| [gep-find-geo-data-frontend](https://github.com/DEFRA/gep-find-geo-data-frontend) | [`src/client/stylesheets/components/_search.scss`](https://github.com/DEFRA/gep-find-geo-data-frontend/blob/HEAD/src/client/stylesheets/components/_search.scss) | SCSS/CSS only |  |  |  |
| [lis-infra-ui-services](https://github.com/DEFRA/lis-infra-ui-services) | [`src/components/search-form.scss`](https://github.com/DEFRA/lis-infra-ui-services/blob/HEAD/src/components/search-form.scss) | SCSS/CSS only |  |  |  |
| [ncea-frontend](https://github.com/DEFRA/ncea-frontend) | [`src/assets/sass/components/_search.scss`](https://github.com/DEFRA/ncea-frontend/blob/HEAD/src/assets/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [service-manual-ui](https://github.com/DEFRA/service-manual-ui) | [`src/client/stylesheets/components/_defra-search.scss`](https://github.com/DEFRA/service-manual-ui/blob/HEAD/src/client/stylesheets/components/_defra-search.scss) | SCSS/CSS only |  |  |  |
| [defra-aqie](https://github.com/DEFRA/defra-aqie) | [`server/views/components/search/_search.scss`](https://github.com/DEFRA/defra-aqie/blob/HEAD/server/views/components/search/_search.scss) | SCSS/CSS only | yes |  |  |

#### Crown-Commercial-Service (9, 8 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ccs-digitalmarketplace-frontend-jinja](https://github.com/Crown-Commercial-Service/ccs-digitalmarketplace-frontend-jinja) | [`digitalmarketplace_frontend_jinja/templates/components/search-box/macro.html`](https://github.com/Crown-Commercial-Service/ccs-digitalmarketplace-frontend-jinja/blob/HEAD/digitalmarketplace_frontend_jinja/templates/components/search-box/macro.html) | Nunjucks macro |  |  |  |
| [ccs-frontend](https://github.com/Crown-Commercial-Service/ccs-frontend) | [`assets/styles/components/_search.scss`](https://github.com/Crown-Commercial-Service/ccs-frontend/blob/HEAD/assets/styles/components/_search.scss) | SCSS/CSS only |  |  |  |
| [CCS-Frontend-Kit](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit) | [`Assets/styles/components/_search.scss`](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit/blob/HEAD/Assets/styles/components/_search.scss) | SCSS/CSS only |  |  |  |
| [DataSubmissionService](https://github.com/Crown-Commercial-Service/DataSubmissionService) | [`app/assets/stylesheets/components/search/_search.scss`](https://github.com/Crown-Commercial-Service/DataSubmissionService/blob/HEAD/app/assets/stylesheets/components/search/_search.scss) | SCSS/CSS only |  |  |  |
| [DataSubmissionServiceAPI](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI) | [`app/assets/stylesheets/components/search/_search.scss`](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI/blob/HEAD/app/assets/stylesheets/components/search/_search.scss) | SCSS/CSS only |  |  |  |
| [digitalmarketplace-govuk-frontend](https://github.com/Crown-Commercial-Service/digitalmarketplace-govuk-frontend) | [`src/digitalmarketplace/components/search-box/_search-box.scss`](https://github.com/Crown-Commercial-Service/digitalmarketplace-govuk-frontend/blob/HEAD/src/digitalmarketplace/components/search-box/_search-box.scss) | SCSS/CSS only |  |  |  |
| [gca-Intranet](https://github.com/Crown-Commercial-Service/gca-Intranet) | [`wp-content/themes/gca-intranet-foundation/assets/scss/components/_search.scss`](https://github.com/Crown-Commercial-Service/gca-Intranet/blob/HEAD/wp-content/themes/gca-intranet-foundation/assets/scss/components/_search.scss) | SCSS/CSS only |  |  |  |
| [reportmi-frontend](https://github.com/Crown-Commercial-Service/reportmi-frontend) | [`stylesheets/components/search/_search.scss`](https://github.com/Crown-Commercial-Service/reportmi-frontend/blob/HEAD/stylesheets/components/search/_search.scss) | SCSS/CSS only |  |  |  |
| [ccs-website-prototype](https://github.com/Crown-Commercial-Service/ccs-website-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/Crown-Commercial-Service/ccs-website-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |

#### hmcts (6, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cpp-ui-home](https://github.com/hmcts/cpp-ui-home) | [`src/app/search/components/search.scss`](https://github.com/hmcts/cpp-ui-home/blob/HEAD/src/app/search/components/search.scss) | SCSS/CSS only |  |  |  |
| [dasi-ai-in-sdlc-aica](https://github.com/hmcts/dasi-ai-in-sdlc-aica) | [`008 - SAAS/Lovable/court-finder-express-main/src/components/SearchBox.tsx`](https://github.com/hmcts/dasi-ai-in-sdlc-aica/blob/HEAD/008 - SAAS/Lovable/court-finder-express-main/src/components/SearchBox.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dts-crime-portfolio](https://github.com/hmcts/dts-crime-portfolio) | [`components/portfolio/SearchInput.tsx`](https://github.com/hmcts/dts-crime-portfolio/blob/HEAD/components/portfolio/SearchInput.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [frontend](https://github.com/hmcts/frontend) | [`package/components/hmcts-search/macro.njk`](https://github.com/hmcts/frontend/blob/HEAD/package/components/hmcts-search/macro.njk) | Nunjucks macro |  |  |  |
| [juror-bureau](https://github.com/hmcts/juror-bureau) | [`client/js/components/search.js`](https://github.com/hmcts/juror-bureau/blob/HEAD/client/js/components/search.js) | JS/TS component |  |  | `moj-sortable-table` |
| [react-a11y-test](https://github.com/hmcts/react-a11y-test) | [`src/components/MojSearch.tsx`](https://github.com/hmcts/react-a11y-test/blob/HEAD/src/components/MojSearch.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `moj-add-another`, `moj-button-menu`, `moj-date-picker`, `moj-filter`, `moj-identity-bar`, `moj-messages`, `moj-multi-select`, `moj-notification-badge`, `moj-organisation-switcher`, `moj-page-header-actions`, `moj-scrollable-pane`, `moj-search`, `moj-sortable-table`, `moj-sub-navigation`, `moj-ticket-panel`, `moj-timeline` |

#### communitiesuk (5, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [epb-frontend](https://github.com/communitiesuk/epb-frontend) | [`assets/components/_search.scss`](https://github.com/communitiesuk/epb-frontend/blob/HEAD/assets/components/_search.scss) | SCSS/CSS only |  |  |  |
| [mhclg_svelte_component_library](https://github.com/communitiesuk/mhclg_svelte_component_library) | [`src/lib/components/ui/Search.svelte`](https://github.com/communitiesuk/mhclg_svelte_component_library/blob/HEAD/src/lib/components/ui/Search.svelte) | UI framework (React/Vue/Svelte lib) |  |  | `dwp-side-navigation` |
| [submit-social-housing-lettings-and-sales-data](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data) | [`app/components/search_component.html.erb`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data/blob/HEAD/app/components/search_component.html.erb) | template partial |  |  |  |
| [submit-social-housing-lettings-and-sales-data-prototype](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype) | [`app/components/search/_search.scss`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype/blob/HEAD/app/components/search/_search.scss) | SCSS/CSS only |  |  |  |
| [epb-prototypes](https://github.com/communitiesuk/epb-prototypes) | [`app/assets/sass/epb-frontend/components/_search.scss`](https://github.com/communitiesuk/epb-prototypes/blob/HEAD/app/assets/sass/epb-frontend/components/_search.scss) | SCSS/CSS only | yes |  |  |

#### nationalarchives (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ds-caselaw-editor-ui](https://github.com/nationalarchives/ds-caselaw-editor-ui) | [`ds_caselaw_editor_ui/templates/components/search_form.jinja`](https://github.com/nationalarchives/ds-caselaw-editor-ui/blob/HEAD/ds_caselaw_editor_ui/templates/components/search_form.jinja) | template partial |  |  |  |
| [ds-caselaw-public-ui](https://github.com/nationalarchives/ds-caselaw-public-ui) | [`ds_judgements_public_ui/sass/components/_search_input.scss`](https://github.com/nationalarchives/ds-caselaw-public-ui/blob/HEAD/ds_judgements_public_ui/sass/components/_search_input.scss) | SCSS/CSS only |  |  |  |
| [tna-frontend](https://github.com/nationalarchives/tna-frontend) | [`src/nationalarchives/components/search-field/_index.scss`](https://github.com/nationalarchives/tna-frontend/blob/HEAD/src/nationalarchives/components/search-field/_index.scss) | SCSS/CSS only |  |  |  |
| [tna-frontend-jinja](https://github.com/nationalarchives/tna-frontend-jinja) | [`tna_frontend_jinja/templates/components/search-field/macro.html`](https://github.com/nationalarchives/tna-frontend-jinja/blob/HEAD/tna_frontend_jinja/templates/components/search-field/macro.html) | Nunjucks macro |  |  | `tna-card`, `tna-code-block`, `tna-compound-filters`, `tna-date-search`, `tna-files-list`, `tna-gallery`, `tna-hero`, `tna-index-grid` |

#### SkillsFundingAgency (6, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/das/sass/components/search-form/_search-form.scss`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/das/sass/components/search-form/_search-form.scss) | SCSS/CSS only |  |  |  |
| [tl-marketing-and-communication](https://github.com/SkillsFundingAgency/tl-marketing-and-communication) | [`src/sfa.Tl.Marketing.Communication/Frontend/src/scss/components/_search.scss`](https://github.com/SkillsFundingAgency/tl-marketing-and-communication/blob/HEAD/src/sfa.Tl.Marketing.Communication/Frontend/src/scss/components/_search.scss) | SCSS/CSS only |  |  |  |
| [tl-matching](https://github.com/SkillsFundingAgency/tl-matching) | [`src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/sass/components/_search.scss`](https://github.com/SkillsFundingAgency/tl-matching/blob/HEAD/src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [das-add-and-approve-prototype](https://github.com/SkillsFundingAgency/das-add-and-approve-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/SkillsFundingAgency/das-add-and-approve-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |
| [das-fat-prototype](https://github.com/SkillsFundingAgency/das-fat-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/SkillsFundingAgency/das-fat-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |
| [das-pgl-prototype](https://github.com/SkillsFundingAgency/das-pgl-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/SkillsFundingAgency/das-pgl-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |

#### department-for-transport-BODS (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [abods](https://github.com/department-for-transport-BODS/abods) | [`frontend/components/shared/SearchInput.tsx`](https://github.com/department-for-transport-BODS/abods/blob/HEAD/frontend/components/shared/SearchInput.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [bods](https://github.com/department-for-transport-BODS/bods) | [`transit_odp/frontend/assets/sass/components/search/_search.scss`](https://github.com/department-for-transport-BODS/bods/blob/HEAD/transit_odp/frontend/assets/sass/components/search/_search.scss) | SCSS/CSS only |  |  |  |
| [publish-devolved-bus-registration-data](https://github.com/department-for-transport-BODS/publish-devolved-bus-registration-data) | [`frontend/src/components/SearchForm.tsx`](https://github.com/department-for-transport-BODS/publish-devolved-bus-registration-data/blob/HEAD/frontend/src/components/SearchForm.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### LondonBoroughSutton (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbs-design-system](https://github.com/LondonBoroughSutton/lbs-design-system) | [`src/javascripts/components/search.js`](https://github.com/LondonBoroughSutton/lbs-design-system/blob/HEAD/src/javascripts/components/search.js) | JS/TS component |  |  |  |
| [lbs-frontend](https://github.com/LondonBoroughSutton/lbs-frontend) | [`package/LBS/components/search/_index.scss`](https://github.com/LondonBoroughSutton/lbs-frontend/blob/HEAD/package/LBS/components/search/_index.scss) | SCSS/CSS only |  |  |  |
| [suttoninformationhub-frontend](https://github.com/LondonBoroughSutton/suttoninformationhub-frontend) | [`src/components/Search/Search.scss`](https://github.com/LondonBoroughSutton/suttoninformationhub-frontend/blob/HEAD/src/components/Search/Search.scss) | SCSS/CSS only |  |  |  |

#### defra-design (13, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [defra-frontend](https://github.com/defra-design/defra-frontend) | [`packages/defra-frontend/src/defra/components/search/_index.scss`](https://github.com/defra-design/defra-frontend/blob/HEAD/packages/defra-frontend/src/defra/components/search/_index.scss) | SCSS/CSS only |  |  |  |
| [livestock-traceability](https://github.com/defra-design/livestock-traceability) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/livestock-traceability/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only |  |  | `moj-filter`, `moj-scrollable-pane` |
| [aqie-prototype](https://github.com/defra-design/aqie-prototype) | [`app/views/components/search/_search.scss`](https://github.com/defra-design/aqie-prototype/blob/HEAD/app/views/components/search/_search.scss) | SCSS/CSS only | yes |  |  |
| [cap-flood-warning-codes](https://github.com/defra-design/cap-flood-warning-codes) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/cap-flood-warning-codes/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |
| [check-for-flooding](https://github.com/defra-design/check-for-flooding) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/check-for-flooding/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |
| [check-for-flooding-prototype](https://github.com/defra-design/check-for-flooding-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/check-for-flooding-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |
| [check-local-aq](https://github.com/defra-design/check-local-aq) | [`app/views/post-mvp-fixes/components/search/macro.njk`](https://github.com/defra-design/check-local-aq/blob/HEAD/app/views/post-mvp-fixes/components/search/macro.njk) | Nunjucks macro | yes |  |  |
| [echo-certifier-prototype](https://github.com/defra-design/echo-certifier-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/echo-certifier-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |
| [echo-prototype](https://github.com/defra-design/echo-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/echo-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  | `gem-c-attachment`, `gem-c-contents-list`, `gem-c-contextual-footer`, `gem-c-contextual-sidebar`, `gem-c-document-list`, `gem-c-error-alert`, `gem-c-govspeak`, `gem-c-govspeak-html-publication`, `gem-c-heading`, `gem-c-image-card`, `gem-c-inverse-header`, `gem-c-lead-paragraph`, `gem-c-metadata`, `gem-c-modal-dialogue`, `gem-c-notice`, `gem-c-organisation-logo`, `gem-c-related-navigation`, `gem-c-search`, `gem-c-subscription-links`, `gem-c-success-alert` |
| [etrade-prototype](https://github.com/defra-design/etrade-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/etrade-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  | `moj-sortable-table` |
| [ltfri-prototype](https://github.com/defra-design/ltfri-prototype) | [`app/assets/javascripts/components/search.js`](https://github.com/defra-design/ltfri-prototype/blob/HEAD/app/assets/javascripts/components/search.js) | JS/TS component | yes |  | `gem-c-contents-list` |
| [plant-exports-prototype](https://github.com/defra-design/plant-exports-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/plant-exports-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |
| [sustainable-development-prototype](https://github.com/defra-design/sustainable-development-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/defra-design/sustainable-development-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |

#### dwp (4, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [common-capabilities-task](https://github.com/dwp/common-capabilities-task) | [`app/assets/sass/components/_search-form.scss`](https://github.com/dwp/common-capabilities-task/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only |  |  |  |
| [Searchlight](https://github.com/dwp/Searchlight) | [`app/v6/assets/sass/components/_search.scss`](https://github.com/dwp/Searchlight/blob/HEAD/app/v6/assets/sass/components/_search.scss) | SCSS/CSS only |  |  |  |
| [common-capabilities-task-prototype](https://github.com/dwp/common-capabilities-task-prototype) | [`app/assets/sass/components/_search-form.scss`](https://github.com/dwp/common-capabilities-task-prototype/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only | yes |  |  |
| [newstylejsa-admin](https://github.com/dwp/newstylejsa-admin) | [`app/views/components/dwp-search-box/_dwp-search-box.scss`](https://github.com/dwp/newstylejsa-admin/blob/HEAD/app/views/components/dwp-search-box/_dwp-search-box.scss) | SCSS/CSS only | yes |  | `dwp-timeline` |

#### dvsa (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dvsa-design-system](https://github.com/dvsa/dvsa-design-system) | [`src/javascripts/components/search.js`](https://github.com/dvsa/dvsa-design-system/blob/HEAD/src/javascripts/components/search.js) | JS/TS component |  |  |  |
| [vol-app](https://github.com/dvsa/vol-app) | [`app/cdn/assets/_styles/components/search.scss`](https://github.com/dvsa/vol-app/blob/HEAD/app/cdn/assets/_styles/components/search.scss) | SCSS/CSS only |  |  |  |
| [cvs-apply-for-vehicle-test](https://github.com/dvsa/cvs-apply-for-vehicle-test) | [`src/moj/components/search/_search.scss`](https://github.com/dvsa/cvs-apply-for-vehicle-test/blob/HEAD/src/moj/components/search/_search.scss) | SCSS/CSS only | yes |  |  |

#### alphagov (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [datagovuk-explorer](https://github.com/alphagov/datagovuk-explorer) | [`explorer/static/css/components/search.css`](https://github.com/alphagov/datagovuk-explorer/blob/HEAD/explorer/static/css/components/search.css) | SCSS/CSS only |  |  |  |
| [govuk-prototype-kit-docs-investigation](https://github.com/alphagov/govuk-prototype-kit-docs-investigation) | [`src/javascripts/components/search.js`](https://github.com/alphagov/govuk-prototype-kit-docs-investigation/blob/HEAD/src/javascripts/components/search.js) | JS/TS component |  |  |  |

#### Civil-Service-Human-Resources (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lpg-front-end](https://github.com/Civil-Service-Human-Resources/lpg-front-end) | [`src/server/views/library/components/search-box.njk`](https://github.com/Civil-Service-Human-Resources/lpg-front-end/blob/HEAD/src/server/views/library/components/search-box.njk) | template partial |  |  |  |
| [lpg-services](https://github.com/Civil-Service-Human-Resources/lpg-services) | [`views/assets/styles/components/_search.scss`](https://github.com/Civil-Service-Human-Resources/lpg-services/blob/HEAD/views/assets/styles/components/_search.scss) | SCSS/CSS only |  |  |  |

#### essexcountycouncil (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [essex-county-council-digital-manual](https://github.com/essexcountycouncil/essex-county-council-digital-manual) | [`_sass/core/components/_search.scss`](https://github.com/essexcountycouncil/essex-county-council-digital-manual/blob/HEAD/_sass/core/components/_search.scss) | SCSS/CSS only |  |  |  |
| [send-lgdrupal](https://github.com/essexcountycouncil/send-lgdrupal) | [`web/core/themes/bartik/css/components/search-form.css`](https://github.com/essexcountycouncil/send-lgdrupal/blob/HEAD/web/core/themes/bartik/css/components/search-form.css) | SCSS/CSS only |  |  |  |

#### GSS-Cogs (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dd-cms](https://github.com/GSS-Cogs/dd-cms) | [`volto/src/addons/volto-govuk-theme/src/customizations/volto/components/theme/Search/Search.jsx`](https://github.com/GSS-Cogs/dd-cms/blob/HEAD/volto/src/addons/volto-govuk-theme/src/customizations/volto/components/theme/Search/Search.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [idpd-frontend-homepage](https://github.com/GSS-Cogs/idpd-frontend-homepage) | [`components/Search/index.tsx`](https://github.com/GSS-Cogs/idpd-frontend-homepage/blob/HEAD/components/Search/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### InnovateUKGitHub (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [een-webapp](https://github.com/InnovateUKGitHub/een-webapp) | [`drupal/core/themes/bartik/css/components/search-form.css`](https://github.com/InnovateUKGitHub/een-webapp/blob/HEAD/drupal/core/themes/bartik/css/components/search-form.css) | SCSS/CSS only |  |  |  |
| [innovation-funding-service-post-award](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award) | [`packages/app/src/ui/components/atoms/Search/searchInput.tsx`](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award/blob/HEAD/packages/app/src/ui/components/atoms/Search/searchInput.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### LBHackney-IT (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbh-housing-register](https://github.com/LBHackney-IT/lbh-housing-register) | [`components/admin/SearchBox.tsx`](https://github.com/LBHackney-IT/lbh-housing-register/blob/HEAD/components/admin/SearchBox.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [repairs-hub-frontend](https://github.com/LBHackney-IT/repairs-hub-frontend) | [`src/components/Search/Search.tsx`](https://github.com/LBHackney-IT/repairs-hub-frontend/blob/HEAD/src/components/Search/Search.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### NHSDigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nhsuk-frontend-jinja](https://github.com/NHSDigital/nhsuk-frontend-jinja) | [`nhsuk_frontend_jinja/templates/nhsuk/components/search-input/macro.jinja`](https://github.com/NHSDigital/nhsuk-frontend-jinja/blob/HEAD/nhsuk_frontend_jinja/templates/nhsuk/components/search-input/macro.jinja) | Nunjucks macro |  |  | `nhsuk-action-link`, `nhsuk-caption`, `nhsuk-card`, `nhsuk-code`, `nhsuk-contents-list` |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) | [`app/assets/sass/components/_search-input.scss`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/sass/components/_search-input.scss) | SCSS/CSS only |  |  | `nhsuk-link` |

#### scottish-government-design-system (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/scottish-government-design-system/design-system) | [`src/components/site-search/_index.scss`](https://github.com/scottish-government-design-system/design-system/blob/HEAD/src/components/site-search/_index.scss) | SCSS/CSS only |  |  |  |
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/SiteSearch/SiteSearch.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/SiteSearch/SiteSearch.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### CPS-Innovation (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Managed-Materials-UI](https://github.com/CPS-Innovation/Managed-Materials-UI) | [`materials_ui/src/components/SearchInput/SearchInput.tsx`](https://github.com/CPS-Innovation/Managed-Materials-UI/blob/HEAD/materials_ui/src/components/SearchInput/SearchInput.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### defencedigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [discover-my-benefits](https://github.com/defencedigital/discover-my-benefits) | [`clientside/MOD-Civilian/src/components/Search/index.tsx`](https://github.com/defencedigital/discover-my-benefits/blob/HEAD/clientside/MOD-Civilian/src/components/Search/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dfe-analytical-services (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-frontend/src/components/SearchForm.tsx`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-frontend/src/components/SearchForm.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dhsc-govuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [FingertipsNext](https://github.com/dhsc-govuk/FingertipsNext) | [`frontend/fingertips-frontend/components/forms/SearchForm/index.tsx`](https://github.com/dhsc-govuk/FingertipsNext/blob/HEAD/frontend/fingertips-frontend/components/forms/SearchForm/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### gchq (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [LD-Explorer](https://github.com/gchq/LD-Explorer) | [`src/lib/components/ui/icons/svg/search.svelte`](https://github.com/gchq/LD-Explorer/blob/HEAD/src/lib/components/ui/icons/svg/search.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### hmrc (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [customs-view-and-amend](https://github.com/hmrc/customs-view-and-amend) | [`app/assets/stylesheets/components/_search-form.scss`](https://github.com/hmrc/customs-view-and-amend/blob/HEAD/app/assets/stylesheets/components/_search-form.scss) | SCSS/CSS only |  |  |  |

#### i-dot-ai (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [consult](https://github.com/i-dot-ai/consult) | [`frontend/src/components/svg/material/Search.svelte`](https://github.com/i-dot-ai/consult/blob/HEAD/frontend/src/components/svg/material/Search.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### LandRegistry (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmlr-design-system](https://github.com/LandRegistry/hmlr-design-system) | [`src/javascripts/components/search.js`](https://github.com/LandRegistry/hmlr-design-system/blob/HEAD/src/javascripts/components/search.js) | JS/TS component |  |  | `gem-c-contents-list` |

#### MHRA (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [products](https://github.com/MHRA/products) | [`medicines/web/src/components/search/index.tsx`](https://github.com/MHRA/products/blob/HEAD/medicines/web/src/components/search/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ONSdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dis-design-system-go](https://github.com/ONSdigital/dis-design-system-go) | [`assets/scss/dp/overrides/components/_search.scss`](https://github.com/ONSdigital/dis-design-system-go/blob/HEAD/assets/scss/dp/overrides/components/_search.scss) | SCSS/CSS only |  |  |  |

#### OrdnanceSurvey (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [web-elements](https://github.com/OrdnanceSurvey/web-elements) | [`src/components/search/search.ts`](https://github.com/OrdnanceSurvey/web-elements/blob/HEAD/src/components/search/search.ts) | JS/TS component |  |  |  |

#### SatelliteApplicationsCatapult (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [stac-browser](https://github.com/SatelliteApplicationsCatapult/stac-browser) | [`src/components/SearchBox.vue`](https://github.com/SatelliteApplicationsCatapult/stac-browser/blob/HEAD/src/components/SearchBox.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### TechnologyEnhancedLearning (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Prototyping](https://github.com/TechnologyEnhancedLearning/Prototyping) | [`app/assets/sass/components/_search.scss`](https://github.com/TechnologyEnhancedLearning/Prototyping/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only |  |  | `nhsuk-link` |

#### ukaea (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [fds](https://github.com/ukaea/fds) | [`ui/src/components/search-box.tsx`](https://github.com/ukaea/fds/blob/HEAD/ui/src/components/search-box.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKGovernmentBEIS (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [beis-orp-application](https://github.com/UKGovernmentBEIS/beis-orp-application) | [`src/client/sass/components/_search.scss`](https://github.com/UKGovernmentBEIS/beis-orp-application/blob/HEAD/src/client/sass/components/_search.scss) | SCSS/CSS only |  |  |  |

#### UKHomeOffice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [GovUK-Design-System-React](https://github.com/UKHomeOffice/GovUK-Design-System-React) | [`components/search-box/src/SearchBox.tsx`](https://github.com/UKHomeOffice/GovUK-Design-System-React/blob/HEAD/components/search-box/src/SearchBox.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHSA-Internal (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [data-dashboard-frontend](https://github.com/UKHSA-Internal/data-dashboard-frontend) | [`src/app/components/ui/ukhsa/Search/Search.tsx`](https://github.com/UKHSA-Internal/data-dashboard-frontend/blob/HEAD/src/app/components/ui/ukhsa/Search/Search.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### x-govuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [govuk-eleventy-plugin](https://github.com/x-govuk/govuk-eleventy-plugin) | [`src/components/search/_index.scss`](https://github.com/x-govuk/govuk-eleventy-plugin/blob/HEAD/src/components/search/_index.scss) | SCSS/CSS only |  |  |  |

#### Planning-Inspectorate (3, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [applications-backoffice-prototype](https://github.com/Planning-Inspectorate/applications-backoffice-prototype) | [`app/assets/sass/components/_search-form.scss`](https://github.com/Planning-Inspectorate/applications-backoffice-prototype/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only | yes |  |  |
| [back-office-appeals-prototype](https://github.com/Planning-Inspectorate/back-office-appeals-prototype) | [`app/assets/sass/components/_search-form.scss`](https://github.com/Planning-Inspectorate/back-office-appeals-prototype/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only | yes |  |  |
| [local-plans-examinations-prototype](https://github.com/Planning-Inspectorate/local-plans-examinations-prototype) | [`app/assets/sass/components/_search-form.scss`](https://github.com/Planning-Inspectorate/local-plans-examinations-prototype/blob/HEAD/app/assets/sass/components/_search-form.scss) | SCSS/CSS only | yes |  | `moj-sub-navigation` |

#### co-cddo (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lthc-prototype](https://github.com/co-cddo/lthc-prototype) | [`app/assets/sass/components/search/_search.scss`](https://github.com/co-cddo/lthc-prototype/blob/HEAD/app/assets/sass/components/search/_search.scss) | SCSS/CSS only | yes |  | `gem-c-heading`, `gem-c-lead-paragraph` |

#### digital-land (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [local-plans-prototype](https://github.com/digital-land/local-plans-prototype) | [`src/scss/components/_govuk-search.scss`](https://github.com/digital-land/local-plans-prototype/blob/HEAD/src/scss/components/_govuk-search.scss) | SCSS/CSS only | yes |  |  |

#### trade-tariff (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ott-prototype](https://github.com/trade-tariff/ott-prototype) | [`app/assets/sass/components/_search.scss`](https://github.com/trade-tariff/ott-prototype/blob/HEAD/app/assets/sass/components/_search.scss) | SCSS/CSS only | yes |  |  |


### filter (filter a list) — 142 repos, 39 orgs (97 production)

MoJ's filter component has the highest adoption here (35.25).

#### ministryofjustice (19, 14 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bichard7-next-core](https://github.com/ministryofjustice/bichard7-next-core) | [`packages/ui/src/components/FilterChip.tsx`](https://github.com/ministryofjustice/bichard7-next-core/blob/HEAD/packages/ui/src/components/FilterChip.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [book-a-prison-visit-staff-ui](https://github.com/ministryofjustice/book-a-prison-visit-staff-ui) | [`assets/sass/components/_filter.scss`](https://github.com/ministryofjustice/book-a-prison-visit-staff-ui/blob/HEAD/assets/sass/components/_filter.scss) | SCSS/CSS only |  |  |  |
| [hmpps-activities-management](https://github.com/ministryofjustice/hmpps-activities-management) | [`frontend/components/filters/_filters.scss`](https://github.com/ministryofjustice/hmpps-activities-management/blob/HEAD/frontend/components/filters/_filters.scss) | SCSS/CSS only |  |  | `moj-multi-select`, `moj-sortable-table` |
| [hmpps-allocate-key-workers-ui](https://github.com/ministryofjustice/hmpps-allocate-key-workers-ui) | [`assets/scss/components/_filter.scss`](https://github.com/ministryofjustice/hmpps-allocate-key-workers-ui/blob/HEAD/assets/scss/components/_filter.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-sub-navigation` |
| [hmpps-approved-premises-ui](https://github.com/ministryofjustice/hmpps-approved-premises-ui) | [`assets/scss/components/_filter.scss`](https://github.com/ministryofjustice/hmpps-approved-premises-ui/blob/HEAD/assets/scss/components/_filter.scss) | SCSS/CSS only |  |  | `moj-page-header-actions`, `moj-sortable-table` |
| [hmpps-book-secure-move-frontend](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend) | [`common/components/filter/_filter.scss`](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend/blob/HEAD/common/components/filter/_filter.scss) | SCSS/CSS only |  |  |  |
| [hmpps-cell-sharing-risk-assessment-ui](https://github.com/ministryofjustice/hmpps-cell-sharing-risk-assessment-ui) | [`assets/scss/components/_filter.scss`](https://github.com/ministryofjustice/hmpps-cell-sharing-risk-assessment-ui/blob/HEAD/assets/scss/components/_filter.scss) | SCSS/CSS only |  |  | `moj-filter`, `moj-sortable-table` |
| [hmpps-digital-prison-reporting-frontend](https://github.com/ministryofjustice/hmpps-digital-prison-reporting-frontend) | [`docs/_includes/layouts/partials/side-navigation/components/filters.njk`](https://github.com/ministryofjustice/hmpps-digital-prison-reporting-frontend/blob/HEAD/docs/_includes/layouts/partials/side-navigation/components/filters.njk) | template partial |  |  |  |
| [hmpps-digital-tech-radar](https://github.com/ministryofjustice/hmpps-digital-tech-radar) | [`.techradar/src/components/Filter/Filter.tsx`](https://github.com/ministryofjustice/hmpps-digital-tech-radar/blob/HEAD/.techradar/src/components/Filter/Filter.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [hmpps-single-accommodation-service-ui](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui) | [`assets/scss/components/_filters.scss`](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui/blob/HEAD/assets/scss/components/_filters.scss) | SCSS/CSS only |  |  |  |
| [hmpps-temporary-accommodation-ui](https://github.com/ministryofjustice/hmpps-temporary-accommodation-ui) | [`assets/sass/components/_filter.scss`](https://github.com/ministryofjustice/hmpps-temporary-accommodation-ui/blob/HEAD/assets/sass/components/_filter.scss) | SCSS/CSS only |  |  |  |
| [hmpps-video-conference-schedule-ui](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui) | [`assets/scss/components/_moj-filter.scss`](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui/blob/HEAD/assets/scss/components/_moj-filter.scss) | SCSS/CSS only |  |  | `moj-action-bar`, `moj-filter`, `moj-sortable-table` |
| [moj-frontend](https://github.com/ministryofjustice/moj-frontend) | [`src/moj/components/filter/_filter.scss`](https://github.com/ministryofjustice/moj-frontend/blob/HEAD/src/moj/components/filter/_filter.scss) | SCSS/CSS only |  |  |  |
| [prepare-a-case](https://github.com/ministryofjustice/prepare-a-case) | [`server/views/components/filter/macro.njk`](https://github.com/ministryofjustice/prepare-a-case/blob/HEAD/server/views/components/filter/macro.njk) | Nunjucks macro |  |  | `moj-badge` |
| [digital-prison-reporting-mi-prototype](https://github.com/ministryofjustice/digital-prison-reporting-mi-prototype) | [`app/versions/main-ui/v1/components/filters/filters.js`](https://github.com/ministryofjustice/digital-prison-reporting-mi-prototype/blob/HEAD/app/versions/main-ui/v1/components/filters/filters.js) | JS/TS component | yes |  | `moj-action-bar`, `moj-scrollable-pane` |
| [hmpps-activity-management-prototype](https://github.com/ministryofjustice/hmpps-activity-management-prototype) | [`app/assets/sass/components/_option-select.scss`](https://github.com/ministryofjustice/hmpps-activity-management-prototype/blob/HEAD/app/assets/sass/components/_option-select.scss) | SCSS/CSS only | yes |  | `moj-badge` |
| [hmpps-official-visits-prototype](https://github.com/ministryofjustice/hmpps-official-visits-prototype) | [`app/assets/sass/components/_option-select.scss`](https://github.com/ministryofjustice/hmpps-official-visits-prototype/blob/HEAD/app/assets/sass/components/_option-select.scss) | SCSS/CSS only | yes |  |  |
| [hmpps-prepare-a-case-prototype](https://github.com/ministryofjustice/hmpps-prepare-a-case-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/ministryofjustice/hmpps-prepare-a-case-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  | `moj-search`, `moj-search-toggle`, `moj-sub-navigation`, `moj-timeline` |
| [mpc-prototype](https://github.com/ministryofjustice/mpc-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/ministryofjustice/mpc-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  | `moj-action-bar`, `moj-add-another`, `moj-alert`, `moj-badge`, `moj-banner`, `moj-button-menu`, `moj-filter`, `moj-identity-bar`, `moj-multi-file-upload`, `moj-notification-badge`, `moj-page-header-actions`, `moj-progress-bar`, `moj-scrollable-pane`, `moj-search`, `moj-search-toggle`, `moj-side-navigation`, `moj-sub-navigation`, `moj-timeline` |

#### DFE-Digital (30, 13 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [apply-for-teacher-training](https://github.com/DFE-Digital/apply-for-teacher-training) | [`app/components/provider_interface/find_candidates/filters_component.rb`](https://github.com/DFE-Digital/apply-for-teacher-training/blob/HEAD/app/components/provider_interface/find_candidates/filters_component.rb) | Rails ViewComponent |  |  |  |
| [buy-for-your-school](https://github.com/DFE-Digital/buy-for-your-school) | [`app/assets/stylesheets/components/_moj_filter.scss`](https://github.com/DFE-Digital/buy-for-your-school/blob/HEAD/app/assets/stylesheets/components/_moj_filter.scss) | SCSS/CSS only |  |  |  |
| [d365-design-manual](https://github.com/DFE-Digital/d365-design-manual) | [`app/scss/components/_filter-panel.scss`](https://github.com/DFE-Digital/d365-design-manual/blob/HEAD/app/scss/components/_filter-panel.scss) | SCSS/CSS only |  |  |  |
| [design](https://github.com/DFE-Digital/design) | [`app/views/design-system/components/filter.html`](https://github.com/DFE-Digital/design/blob/HEAD/app/views/design-system/components/filter.html) | template partial |  |  | `dfe-card` |
| [DfE-School-Account-Alpha](https://github.com/DFE-Digital/DfE-School-Account-Alpha) | [`app/assets/sass/components/moj-filter.scss`](https://github.com/DFE-Digital/DfE-School-Account-Alpha/blob/HEAD/app/assets/sass/components/moj-filter.scss) | SCSS/CSS only |  |  | `dfe-card`, `gem-c-big-number`, `moj-action-bar`, `moj-button-menu`, `moj-filter`, `moj-notification-badge`, `moj-scrollable-pane`, `moj-timeline` |
| [fh-services](https://github.com/DFE-Digital/fh-services) | [`src/shared/web-components/src/familyhubs-frontend/styles/components/_filters.scss`](https://github.com/DFE-Digital/fh-services/blob/HEAD/src/shared/web-components/src/familyhubs-frontend/styles/components/_filters.scss) | SCSS/CSS only |  |  |  |
| [find-teacher-training](https://github.com/DFE-Digital/find-teacher-training) | [`app/components/results/filter_component.rb`](https://github.com/DFE-Digital/find-teacher-training/blob/HEAD/app/components/results/filter_component.rb) | Rails ViewComponent |  |  |  |
| [funding-service-myesf-vyp-ui](https://github.com/DFE-Digital/funding-service-myesf-vyp-ui) | [`ViewYourPayments.Web/ViewYourPayments.Web/src/sass/components/_filter-component.scss`](https://github.com/DFE-Digital/funding-service-myesf-vyp-ui/blob/HEAD/ViewYourPayments.Web/ViewYourPayments.Web/src/sass/components/_filter-component.scss) | SCSS/CSS only |  |  |  |
| [itt-mentor-services](https://github.com/DFE-Digital/itt-mentor-services) | [`app/components/claims/claim/filter_form_component.rb`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/components/claims/claim/filter_form_component.rb) | Rails ViewComponent |  |  |  |
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/components/publish/providers/schools/filter_component.rb`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/components/publish/providers/schools/filter_component.rb) | Rails ViewComponent |  |  |  |
| [register-early-career-teachers-public](https://github.com/DFE-Digital/register-early-career-teachers-public) | [`app/components/admin/statements/filter_component.rb`](https://github.com/DFE-Digital/register-early-career-teachers-public/blob/HEAD/app/components/admin/statements/filter_component.rb) | Rails ViewComponent |  |  |  |
| [teaching-vacancies](https://github.com/DFE-Digital/teaching-vacancies) | [`app/assets/javascript/components/filters/filters.js`](https://github.com/DFE-Digital/teaching-vacancies/blob/HEAD/app/assets/javascript/components/filters/filters.js) | JS/TS component |  |  |  |
| [trs-post-mvp](https://github.com/DFE-Digital/trs-post-mvp) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/DFE-Digital/trs-post-mvp/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only |  |  | `hods-date-time`, `hods-highlight`, `hods-timeline`, `x-govuk-secondary-navigation` |
| [check-performance-data-prototype](https://github.com/DFE-Digital/check-performance-data-prototype) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/DFE-Digital/check-performance-data-prototype/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  | `dfe-card`, `moj-scrollable-pane`, `moj-side-navigation` |
| [check-the-record-of-a-teacher-prototype](https://github.com/DFE-Digital/check-the-record-of-a-teacher-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/DFE-Digital/check-the-record-of-a-teacher-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  | `x-govuk-related-navigation` |
| [check-your-eligibility-prototype](https://github.com/DFE-Digital/check-your-eligibility-prototype) | [`app/assets/javascripts/components/_filter.js`](https://github.com/DFE-Digital/check-your-eligibility-prototype/blob/HEAD/app/assets/javascripts/components/_filter.js) | JS/TS component | yes |  | `gem-c-contextual-footer`, `gem-c-contextual-sidebar`, `gem-c-govspeak`, `gem-c-related-navigation`, `moj-add-another`, `moj-scrollable-pane` |
| [fa-shortlisting-prototype](https://github.com/DFE-Digital/fa-shortlisting-prototype) | [`app/views/availability/components/filter.html`](https://github.com/DFE-Digital/fa-shortlisting-prototype/blob/HEAD/app/views/availability/components/filter.html) | template partial | yes |  |  |
| [find-a-prototype](https://github.com/DFE-Digital/find-a-prototype) | [`app/assets/sass/components/_filters.scss`](https://github.com/DFE-Digital/find-a-prototype/blob/HEAD/app/assets/sass/components/_filters.scss) | SCSS/CSS only | yes |  | `dfe-card` |
| [find-teacher-training-hackday-prototype](https://github.com/DFE-Digital/find-teacher-training-hackday-prototype) | [`app/assets/javascripts/components/checkbox-filter.js`](https://github.com/DFE-Digital/find-teacher-training-hackday-prototype/blob/HEAD/app/assets/javascripts/components/checkbox-filter.js) | JS/TS component | yes |  |  |
| [find-teacher-training-prototype](https://github.com/DFE-Digital/find-teacher-training-prototype) | [`app/assets/javascripts/components/checkbox-filter.js`](https://github.com/DFE-Digital/find-teacher-training-prototype/blob/HEAD/app/assets/javascripts/components/checkbox-filter.js) | JS/TS component | yes |  |  |
| [itt-mentor-payment-sampling-clawback](https://github.com/DFE-Digital/itt-mentor-payment-sampling-clawback) | [`app/assets/sass/components/_checkbox-filter.scss`](https://github.com/DFE-Digital/itt-mentor-payment-sampling-clawback/blob/HEAD/app/assets/sass/components/_checkbox-filter.scss) | SCSS/CSS only | yes |  | `x-govuk-related-navigation` |
| [itt-mentoring-beta-prototype](https://github.com/DFE-Digital/itt-mentoring-beta-prototype) | [`app/assets/javascripts/components/checkbox-filter.js`](https://github.com/DFE-Digital/itt-mentoring-beta-prototype/blob/HEAD/app/assets/javascripts/components/checkbox-filter.js) | JS/TS component | yes |  |  |
| [manage-teaching-jobs-prototype](https://github.com/DFE-Digital/manage-teaching-jobs-prototype) | [`app/views/components/checkbox-filter/_checkbox-filter.scss`](https://github.com/DFE-Digital/manage-teaching-jobs-prototype/blob/HEAD/app/views/components/checkbox-filter/_checkbox-filter.scss) | SCSS/CSS only | yes |  |  |
| [manage-training-for-early-career-teachers-prototype](https://github.com/DFE-Digital/manage-training-for-early-career-teachers-prototype) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/DFE-Digital/manage-training-for-early-career-teachers-prototype/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  |  |
| [register-placement-schools-prototype](https://github.com/DFE-Digital/register-placement-schools-prototype) | [`app/assets/javascripts/components/checkbox-filter.js`](https://github.com/DFE-Digital/register-placement-schools-prototype/blob/HEAD/app/assets/javascripts/components/checkbox-filter.js) | JS/TS component | yes |  |  |
| [register-training-providers-prototype](https://github.com/DFE-Digital/register-training-providers-prototype) | [`app/assets/javascripts/components/checkbox-filter.js`](https://github.com/DFE-Digital/register-training-providers-prototype/blob/HEAD/app/assets/javascripts/components/checkbox-filter.js) | JS/TS component | yes |  |  |
| [school-placements-alpha-prototype](https://github.com/DFE-Digital/school-placements-alpha-prototype) | [`app/assets/javascripts/components/checkbox-filter.js`](https://github.com/DFE-Digital/school-placements-alpha-prototype/blob/HEAD/app/assets/javascripts/components/checkbox-filter.js) | JS/TS component | yes |  |  |
| [teacher-services-landing-page-prototype](https://github.com/DFE-Digital/teacher-services-landing-page-prototype) | [`app/views/components/checkbox-filter/_checkbox-filter.scss`](https://github.com/DFE-Digital/teacher-services-landing-page-prototype/blob/HEAD/app/views/components/checkbox-filter/_checkbox-filter.scss) | SCSS/CSS only | yes |  |  |
| [teaching-vacancies-prototype](https://github.com/DFE-Digital/teaching-vacancies-prototype) | [`app/versions/1-0/views/components/checkbox-filter/_checkbox-filter.scss`](https://github.com/DFE-Digital/teaching-vacancies-prototype/blob/HEAD/app/versions/1-0/views/components/checkbox-filter/_checkbox-filter.scss) | SCSS/CSS only | yes |  |  |
| [trs-support-console](https://github.com/DFE-Digital/trs-support-console) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/DFE-Digital/trs-support-console/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  | `hods-date-time`, `hods-timeline` |

#### DEFRA (12, 11 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ai-uc-rpa-guidance-evals-fe](https://github.com/DEFRA/ai-uc-rpa-guidance-evals-fe) | [`src/client/stylesheets/components/_defra-filter-chips.scss`](https://github.com/DEFRA/ai-uc-rpa-guidance-evals-fe/blob/HEAD/src/client/stylesheets/components/_defra-filter-chips.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [ai-uc-rpa-guidance-fe](https://github.com/DEFRA/ai-uc-rpa-guidance-fe) | [`src/client/stylesheets/components/_defra-filter-chips.scss`](https://github.com/DEFRA/ai-uc-rpa-guidance-fe/blob/HEAD/src/client/stylesheets/components/_defra-filter-chips.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [aqie-dc-frontend](https://github.com/DEFRA/aqie-dc-frontend) | [`src/server/common/components/filter/_filter.scss`](https://github.com/DEFRA/aqie-dc-frontend/blob/HEAD/src/server/common/components/filter/_filter.scss) | SCSS/CSS only |  |  |  |
| [cdp-portal-frontend](https://github.com/DEFRA/cdp-portal-frontend) | [`src/server/common/components/filters/_filters.scss`](https://github.com/DEFRA/cdp-portal-frontend/blob/HEAD/src/server/common/components/filters/_filters.scss) | SCSS/CSS only |  |  |  |
| [cdp-sbom-demo-frontend](https://github.com/DEFRA/cdp-sbom-demo-frontend) | [`src/server/common/components/filters/_filters.scss`](https://github.com/DEFRA/cdp-sbom-demo-frontend/blob/HEAD/src/server/common/components/filters/_filters.scss) | SCSS/CSS only |  |  |  |
| [disinfectant-frontend](https://github.com/DEFRA/disinfectant-frontend) | [`src/server/common/components/filter/macro.njk`](https://github.com/DEFRA/disinfectant-frontend/blob/HEAD/src/server/common/components/filter/macro.njk) | Nunjucks macro |  |  | `moj-filter` |
| [epr-re-ex-admin-frontend](https://github.com/DEFRA/epr-re-ex-admin-frontend) | [`src/client/stylesheets/components/_filters.scss`](https://github.com/DEFRA/epr-re-ex-admin-frontend/blob/HEAD/src/client/stylesheets/components/_filters.scss) | SCSS/CSS only |  |  |  |
| [flood-app](https://github.com/DEFRA/flood-app) | [`server/src/js/components/filter.js`](https://github.com/DEFRA/flood-app/blob/HEAD/server/src/js/components/filter.js) | JS/TS component |  |  |  |
| [flood-app-temp](https://github.com/DEFRA/flood-app-temp) | [`server/src/js/components/filter.js`](https://github.com/DEFRA/flood-app-temp/blob/HEAD/server/src/js/components/filter.js) | JS/TS component |  |  |  |
| [marine-licensing-frontend](https://github.com/DEFRA/marine-licensing-frontend) | [`src/server/common/components/filter-panel/macro.njk`](https://github.com/DEFRA/marine-licensing-frontend/blob/HEAD/src/server/common/components/filter-panel/macro.njk) | Nunjucks macro |  |  |  |
| [mcp-portal](https://github.com/DEFRA/mcp-portal) | [`src/client/stylesheets/components/_defra-filter-chips.scss`](https://github.com/DEFRA/mcp-portal/blob/HEAD/src/client/stylesheets/components/_defra-filter-chips.scss) | SCSS/CSS only |  |  |  |
| [rpa-ai-guidance-hub-prototype](https://github.com/DEFRA/rpa-ai-guidance-hub-prototype) | [`app/assets/sass/components/_app-filter.scss`](https://github.com/DEFRA/rpa-ai-guidance-hub-prototype/blob/HEAD/app/assets/sass/components/_app-filter.scss) | SCSS/CSS only | yes |  |  |

#### digital-land (7, 7 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-code-explorer](https://github.com/digital-land/design-code-explorer) | [`application/templates/components/filter-checkboxes/macro.jinja`](https://github.com/digital-land/design-code-explorer/blob/HEAD/application/templates/components/filter-checkboxes/macro.jinja) | Nunjucks macro |  |  |  |
| [digital-land-application](https://github.com/digital-land/digital-land-application) | [`application/templates/components/filter-checkboxes/macro.jinja`](https://github.com/digital-land/digital-land-application/blob/HEAD/application/templates/components/filter-checkboxes/macro.jinja) | Nunjucks macro |  |  |  |
| [digital-land-frontend](https://github.com/digital-land/digital-land-frontend) | [`digital_land_frontend/templates/components/filter-checkboxes/_filter-checkboxes.scss`](https://github.com/digital-land/digital-land-frontend/blob/HEAD/digital_land_frontend/templates/components/filter-checkboxes/_filter-checkboxes.scss) | SCSS/CSS only |  |  |  |
| [digital-land.info](https://github.com/digital-land/digital-land.info) | [`application/templates/components/filter-checkboxes/macro.jinja`](https://github.com/digital-land/digital-land.info/blob/HEAD/application/templates/components/filter-checkboxes/macro.jinja) | Nunjucks macro |  |  |  |
| [land-use-calculator](https://github.com/digital-land/land-use-calculator) | [`src/lib/components/FilterChip.svelte`](https://github.com/digital-land/land-use-calculator/blob/HEAD/src/lib/components/FilterChip.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [planning-application-poc](https://github.com/digital-land/planning-application-poc) | [`application/templates/components/filter-checkboxes/macro.jinja`](https://github.com/digital-land/planning-application-poc/blob/HEAD/application/templates/components/filter-checkboxes/macro.jinja) | Nunjucks macro |  |  |  |
| [planning-data-design](https://github.com/digital-land/planning-data-design) | [`application/templates/components/filter-checkboxes/macro.jinja`](https://github.com/digital-land/planning-data-design/blob/HEAD/application/templates/components/filter-checkboxes/macro.jinja) | Nunjucks macro |  |  | `moj-timeline` |

#### defra-design (11, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [defra-frontend](https://github.com/defra-design/defra-frontend) | [`packages/defra-frontend/src/defra/components/filter/_index.scss`](https://github.com/defra-design/defra-frontend/blob/HEAD/packages/defra-frontend/src/defra/components/filter/_index.scss) | SCSS/CSS only |  |  |  |
| [digital-waste-reporting](https://github.com/defra-design/digital-waste-reporting) | [`app/assets/sass/components/_filter.scss`](https://github.com/defra-design/digital-waste-reporting/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only |  |  |  |
| [livestock-traceability](https://github.com/defra-design/livestock-traceability) | [`app/assets/sass/components/_filter-panel.scss`](https://github.com/defra-design/livestock-traceability/blob/HEAD/app/assets/sass/components/_filter-panel.scss) | SCSS/CSS only |  |  | `moj-filter`, `moj-scrollable-pane` |
| [check-for-flooding](https://github.com/defra-design/check-for-flooding) | [`app/assets/javascripts/components/filter.js`](https://github.com/defra-design/check-for-flooding/blob/HEAD/app/assets/javascripts/components/filter.js) | JS/TS component | yes |  |  |
| [check-for-flooding-prototype](https://github.com/defra-design/check-for-flooding-prototype) | [`app/assets/javascripts/components/filter.js`](https://github.com/defra-design/check-for-flooding-prototype/blob/HEAD/app/assets/javascripts/components/filter.js) | JS/TS component | yes |  |  |
| [echo-certifier-prototype](https://github.com/defra-design/echo-certifier-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/defra-design/echo-certifier-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  |  |
| [echo-prototype](https://github.com/defra-design/echo-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/defra-design/echo-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  | `gem-c-attachment`, `gem-c-contents-list`, `gem-c-contextual-footer`, `gem-c-contextual-sidebar`, `gem-c-document-list`, `gem-c-error-alert`, `gem-c-govspeak`, `gem-c-govspeak-html-publication`, `gem-c-heading`, `gem-c-image-card`, `gem-c-inverse-header`, `gem-c-lead-paragraph`, `gem-c-metadata`, `gem-c-modal-dialogue`, `gem-c-notice`, `gem-c-organisation-logo`, `gem-c-related-navigation`, `gem-c-search`, `gem-c-subscription-links`, `gem-c-success-alert` |
| [etrade-prototype](https://github.com/defra-design/etrade-prototype) | [`app/assets/sass/components/_defra-filter.scss`](https://github.com/defra-design/etrade-prototype/blob/HEAD/app/assets/sass/components/_defra-filter.scss) | SCSS/CSS only | yes |  | `moj-sortable-table` |
| [fcp-farming-front-door](https://github.com/defra-design/fcp-farming-front-door) | [`app/assets/sass/components/_filter.scss`](https://github.com/defra-design/fcp-farming-front-door/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  | `gem-c-cards`, `gem-c-contents-list`, `gem-c-devolved-nations`, `moj-scrollable-pane`, `moj-sortable-table` |
| [plant-exports-prototype](https://github.com/defra-design/plant-exports-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/defra-design/plant-exports-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  |  |
| [reex-regulator-prototype](https://github.com/defra-design/reex-regulator-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/defra-design/reex-regulator-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  |  |

#### communitiesuk (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [mhclg_svelte_component_library](https://github.com/communitiesuk/mhclg_svelte_component_library) | [`src/lib/components/ui/FilterPanel.svelte`](https://github.com/communitiesuk/mhclg_svelte_component_library/blob/HEAD/src/lib/components/ui/FilterPanel.svelte) | UI framework (React/Vue/Svelte lib) |  |  | `dwp-side-navigation` |
| [submit-social-housing-lettings-and-sales-data-prototype](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype) | [`app/components/filter-layout/_filter-layout.scss`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype/blob/HEAD/app/components/filter-layout/_filter-layout.scss) | SCSS/CSS only |  |  |  |
| [xgovuk-flask-admin](https://github.com/communitiesuk/xgovuk-flask-admin) | [`src/assets/components/_filter-layout.scss`](https://github.com/communitiesuk/xgovuk-flask-admin/blob/HEAD/src/assets/components/_filter-layout.scss) | SCSS/CSS only |  |  | `gem-c-select-with-search`, `moj-action-bar`, `moj-button-menu`, `moj-filter` |

#### UKHomeOffice (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [aspel-workspace](https://github.com/UKHomeOffice/aspel-workspace) | [`packages/asl-internal-ui/pages/search/views/components/filters.jsx`](https://github.com/UKHomeOffice/aspel-workspace/blob/HEAD/packages/asl-internal-ui/pages/search/views/components/filters.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [frontend-toolkit](https://github.com/UKHomeOffice/frontend-toolkit) | [`assets/styles/components/_option-select.scss`](https://github.com/UKHomeOffice/frontend-toolkit/blob/HEAD/assets/styles/components/_option-select.scss) | SCSS/CSS only |  |  |  |
| [hocs-frontend](https://github.com/UKHomeOffice/hocs-frontend) | [`src/shared/reports/components/filterForm.tsx`](https://github.com/UKHomeOffice/hocs-frontend/blob/HEAD/src/shared/reports/components/filterForm.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dwp (5, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bank-validation](https://github.com/dwp/bank-validation) | [`app/assets/sass/components/_search-filter.scss`](https://github.com/dwp/bank-validation/blob/HEAD/app/assets/sass/components/_search-filter.scss) | SCSS/CSS only |  |  |  |
| [common-capabilities-task](https://github.com/dwp/common-capabilities-task) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/dwp/common-capabilities-task/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only |  |  |  |
| [common-capabilities-task-prototype](https://github.com/dwp/common-capabilities-task-prototype) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/dwp/common-capabilities-task-prototype/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  |  |
| [workplace-health-assessment-subsidy-prototype](https://github.com/dwp/workplace-health-assessment-subsidy-prototype) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/dwp/workplace-health-assessment-subsidy-prototype/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  |  |
| [workplace-subsidy-prototype](https://github.com/dwp/workplace-subsidy-prototype) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/dwp/workplace-subsidy-prototype/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  | `moj-action-bar`, `moj-button-menu`, `moj-scrollable-pane` |

#### SkillsFundingAgency (5, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-findapprenticeship-web](https://github.com/SkillsFundingAgency/das-findapprenticeship-web) | [`src/SFA.DAS.FAA.Web/Frontend/scss/components/filter/_index.scss`](https://github.com/SkillsFundingAgency/das-findapprenticeship-web/blob/HEAD/src/SFA.DAS.FAA.Web/Frontend/scss/components/filter/_index.scss) | SCSS/CSS only |  |  |  |
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/das/sass/components/filter/_filter.scss`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/das/sass/components/filter/_filter.scss) | SCSS/CSS only |  |  |  |
| [das-fat-prototype](https://github.com/SkillsFundingAgency/das-fat-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/SkillsFundingAgency/das-fat-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  |  |
| [das-levy-transfer-matching-prototype](https://github.com/SkillsFundingAgency/das-levy-transfer-matching-prototype) | [`app/assets/sass/components/_filter.scss`](https://github.com/SkillsFundingAgency/das-levy-transfer-matching-prototype/blob/HEAD/app/assets/sass/components/_filter.scss) | SCSS/CSS only | yes |  |  |
| [GAG-Prototype](https://github.com/SkillsFundingAgency/GAG-Prototype) | [`app/views/patternLibrary/components/filter.html`](https://github.com/SkillsFundingAgency/GAG-Prototype/blob/HEAD/app/views/patternLibrary/components/filter.html) | template partial | yes |  |  |

#### Crown-Commercial-Service (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ccs-digitalmarketplace-frontend-jinja](https://github.com/Crown-Commercial-Service/ccs-digitalmarketplace-frontend-jinja) | [`digitalmarketplace_frontend_jinja/templates/components/option-select/macro.html`](https://github.com/Crown-Commercial-Service/ccs-digitalmarketplace-frontend-jinja/blob/HEAD/digitalmarketplace_frontend_jinja/templates/components/option-select/macro.html) | Nunjucks macro |  |  |  |
| [digitalmarketplace-govuk-frontend](https://github.com/Crown-Commercial-Service/digitalmarketplace-govuk-frontend) | [`src/digitalmarketplace/components/option-select/_option-select.scss`](https://github.com/Crown-Commercial-Service/digitalmarketplace-govuk-frontend/blob/HEAD/src/digitalmarketplace/components/option-select/_option-select.scss) | SCSS/CSS only |  |  |  |

#### department-for-transport-BODS (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [abods](https://github.com/department-for-transport-BODS/abods) | [`frontend/components/on-time/FilterChips/FilterChips.tsx`](https://github.com/department-for-transport-BODS/abods/blob/HEAD/frontend/components/on-time/FilterChips/FilterChips.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [bods](https://github.com/department-for-transport-BODS/bods) | [`transit_odp/frontend/assets/sass/components/filter/_filter.scss`](https://github.com/department-for-transport-BODS/bods/blob/HEAD/transit_odp/frontend/assets/sass/components/filter/_filter.scss) | SCSS/CSS only |  |  |  |

#### hmcts (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [frontend](https://github.com/hmcts/frontend) | [`package/components/hmcts-filter/macro.njk`](https://github.com/hmcts/frontend/blob/HEAD/package/components/hmcts-filter/macro.njk) | Nunjucks macro |  |  |  |
| [react-a11y-test](https://github.com/hmcts/react-a11y-test) | [`src/components/MojFilter.tsx`](https://github.com/hmcts/react-a11y-test/blob/HEAD/src/components/MojFilter.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `moj-add-another`, `moj-button-menu`, `moj-date-picker`, `moj-filter`, `moj-identity-bar`, `moj-messages`, `moj-multi-select`, `moj-notification-badge`, `moj-organisation-switcher`, `moj-page-header-actions`, `moj-scrollable-pane`, `moj-search`, `moj-sortable-table`, `moj-sub-navigation`, `moj-ticket-panel`, `moj-timeline` |

#### LBHackney-IT (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [repairs-hub-frontend](https://github.com/LBHackney-IT/repairs-hub-frontend) | [`src/styles/components/filter.scss`](https://github.com/LBHackney-IT/repairs-hub-frontend/blob/HEAD/src/styles/components/filter.scss) | SCSS/CSS only |  |  |  |
| [report-a-defect](https://github.com/LBHackney-IT/report-a-defect) | [`app/assets/stylesheets/components/filters.scss`](https://github.com/LBHackney-IT/report-a-defect/blob/HEAD/app/assets/stylesheets/components/filters.scss) | SCSS/CSS only |  |  |  |

#### lgss (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [services-directory-client](https://github.com/lgss/services-directory-client) | [`src/components/Filters/Filter.jsx`](https://github.com/lgss/services-directory-client/blob/HEAD/src/components/Filters/Filter.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [vuetify-material-dashboard](https://github.com/lgss/vuetify-material-dashboard) | [`src/components/core/Filter.vue`](https://github.com/lgss/vuetify-material-dashboard/blob/HEAD/src/components/core/Filter.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### mcagov (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [droits](https://github.com/mcagov/droits) | [`webapp/app/scss/components/filters.scss`](https://github.com/mcagov/droits/blob/HEAD/webapp/app/scss/components/filters.scss) | SCSS/CSS only |  |  |  |
| [mca-droits-beta-fe](https://github.com/mcagov/mca-droits-beta-fe) | [`app/scss/components/filters.scss`](https://github.com/mcagov/mca-droits-beta-fe/blob/HEAD/app/scss/components/filters.scss) | SCSS/CSS only |  |  |  |

#### nationalarchives (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [tna-frontend](https://github.com/nationalarchives/tna-frontend) | [`src/nationalarchives/components/compound-filters/_index.scss`](https://github.com/nationalarchives/tna-frontend/blob/HEAD/src/nationalarchives/components/compound-filters/_index.scss) | SCSS/CSS only |  |  |  |
| [tna-frontend-jinja](https://github.com/nationalarchives/tna-frontend-jinja) | [`tna_frontend_jinja/templates/components/compound-filters/macro.html`](https://github.com/nationalarchives/tna-frontend-jinja/blob/HEAD/tna_frontend_jinja/templates/components/compound-filters/macro.html) | Nunjucks macro |  |  | `tna-card`, `tna-code-block`, `tna-compound-filters`, `tna-date-search`, `tna-files-list`, `tna-gallery`, `tna-hero`, `tna-index-grid` |

#### NHS-digital-website (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hippo](https://github.com/NHS-digital-website/hippo) | [`repository-data/webfiles/src/main/resources/site/src/scss/components/_filter.scss`](https://github.com/NHS-digital-website/hippo/blob/HEAD/repository-data/webfiles/src/main/resources/site/src/scss/components/_filter.scss) | SCSS/CSS only |  |  |  |
| [hippo-codebuild-test](https://github.com/NHS-digital-website/hippo-codebuild-test) | [`repository-data/webfiles/src/main/resources/site/scss/components/_filter.scss`](https://github.com/NHS-digital-website/hippo-codebuild-test/blob/HEAD/repository-data/webfiles/src/main/resources/site/scss/components/_filter.scss) | SCSS/CSS only |  |  |  |

#### nice-digital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [consultations](https://github.com/nice-digital/consultations) | [`Comments/ClientApp/src/components/FilterGroup/FilterGroup.js`](https://github.com/nice-digital/consultations/blob/HEAD/Comments/ClientApp/src/components/FilterGroup/FilterGroup.js) | JS/TS component |  |  |  |
| [nice-design-system](https://github.com/nice-digital/nice-design-system) | [`components/nds-filters/src/FilterGroup.tsx`](https://github.com/nice-digital/nice-design-system/blob/HEAD/components/nds-filters/src/FilterGroup.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKGovernmentBEIS (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dsit-dvs-register](https://github.com/UKGovernmentBEIS/dsit-dvs-register) | [`DVSRegister/wwwroot/css/components/filter-panel.scss`](https://github.com/UKGovernmentBEIS/dsit-dvs-register/blob/HEAD/DVSRegister/wwwroot/css/components/filter-panel.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [mets](https://github.com/UKGovernmentBEIS/mets) | [`uk-pmrv-app-web/src/app/shared/dashboard/components/filters/filters.ts`](https://github.com/UKGovernmentBEIS/mets/blob/HEAD/uk-pmrv-app-web/src/app/shared/dashboard/components/filters/filters.ts) | JS/TS component |  |  |  |

#### Planning-Inspectorate (5, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [peas-row-commons](https://github.com/Planning-Inspectorate/peas-row-commons) | [`apps/manage/src/app/views/layouts/components/filter.njk`](https://github.com/Planning-Inspectorate/peas-row-commons/blob/HEAD/apps/manage/src/app/views/layouts/components/filter.njk) | template partial |  |  | `moj-multi-file-upload`, `moj-sortable-table` |
| [appeals-prototype](https://github.com/Planning-Inspectorate/appeals-prototype) | [`app/assets/sass/components/_filter-chips.scss`](https://github.com/Planning-Inspectorate/appeals-prototype/blob/HEAD/app/assets/sass/components/_filter-chips.scss) | SCSS/CSS only | yes |  |  |
| [applications-backoffice-prototype](https://github.com/Planning-Inspectorate/applications-backoffice-prototype) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/Planning-Inspectorate/applications-backoffice-prototype/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  |  |
| [back-office-appeals-prototype](https://github.com/Planning-Inspectorate/back-office-appeals-prototype) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/Planning-Inspectorate/back-office-appeals-prototype/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  |  |
| [local-plans-examinations-prototype](https://github.com/Planning-Inspectorate/local-plans-examinations-prototype) | [`app/assets/sass/components/_filter-layout.scss`](https://github.com/Planning-Inspectorate/local-plans-examinations-prototype/blob/HEAD/app/assets/sass/components/_filter-layout.scss) | SCSS/CSS only | yes |  | `moj-sub-navigation` |

#### NHSDigital (3, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) | [`app/assets/sass/components/_filters.scss`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/sass/components/_filters.scss) | SCSS/CSS only |  |  | `nhsuk-link` |
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) | [`app/assets/sass/components/_filter-panel.scss`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_filter-panel.scss) | SCSS/CSS only | yes |  | `nhsuk-link` |
| [manage-vaccinations-in-schools-prototype](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype) | [`app/assets/stylesheets/components/_filters.scss`](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype/blob/HEAD/app/assets/stylesheets/components/_filters.scss) | SCSS/CSS only | yes |  |  |

#### dvsa (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [vol-app](https://github.com/dvsa/vol-app) | [`app/cdn/assets/_styles/components/filters.scss`](https://github.com/dvsa/vol-app/blob/HEAD/app/cdn/assets/_styles/components/filters.scss) | SCSS/CSS only |  |  |  |
| [cvs-apply-for-vehicle-test](https://github.com/dvsa/cvs-apply-for-vehicle-test) | [`src/moj/components/filter/_filter.scss`](https://github.com/dvsa/cvs-apply-for-vehicle-test/blob/HEAD/src/moj/components/filter/_filter.scss) | SCSS/CSS only | yes |  |  |

#### alphagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [finder-frontend](https://github.com/alphagov/finder-frontend) | [`app/assets/javascripts/components/filter-panel.js`](https://github.com/alphagov/finder-frontend/blob/HEAD/app/assets/javascripts/components/filter-panel.js) | JS/TS component |  |  |  |

#### Civil-Service-Human-Resources (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lpg-services](https://github.com/Civil-Service-Human-Resources/lpg-services) | [`views/nunjucks/search/components/filters/macro.njk`](https://github.com/Civil-Service-Human-Resources/lpg-services/blob/HEAD/views/nunjucks/search/components/filters/macro.njk) | Nunjucks macro |  |  |  |

#### CPS-Innovation (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Managed-Materials-UI](https://github.com/CPS-Innovation/Managed-Materials-UI) | [`materials_ui/src/components/Filters/FilterForm.tsx`](https://github.com/CPS-Innovation/Managed-Materials-UI/blob/HEAD/materials_ui/src/components/Filters/FilterForm.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dfe-analytical-services (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-common/src/modules/table-tool/components/FiltersForm.tsx`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-common/src/modules/table-tool/components/FiltersForm.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### gchq (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [LD-Explorer](https://github.com/gchq/LD-Explorer) | [`src/lib/components/ui/icons/svg/filter.svelte`](https://github.com/gchq/LD-Explorer/blob/HEAD/src/lib/components/ui/icons/svg/filter.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### guidance-guarantee-programme (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [planner](https://github.com/guidance-guarantee-programme/planner) | [`app/assets/stylesheets/components/_filters.scss`](https://github.com/guidance-guarantee-programme/planner/blob/HEAD/app/assets/stylesheets/components/_filters.scss) | SCSS/CSS only |  |  |  |

#### i-dot-ai (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [planning-drawing-validator](https://github.com/i-dot-ai/planning-drawing-validator) | [`evaluation-app/frontend/src/components/FilterPanel.tsx`](https://github.com/i-dot-ai/planning-drawing-validator/blob/HEAD/evaluation-app/frontend/src/components/FilterPanel.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### InnovateUKGitHub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [innovation-funding-service](https://github.com/InnovateUKGitHub/innovation-funding-service) | [`ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_search-filters.scss`](https://github.com/InnovateUKGitHub/innovation-funding-service/blob/HEAD/ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_search-filters.scss) | SCSS/CSS only |  |  |  |

#### MHRA (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [products](https://github.com/MHRA/products) | [`medicines/web/src/components/search-filter/index.tsx`](https://github.com/MHRA/products/blob/HEAD/medicines/web/src/components/search-filter/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nhsbsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [learning-support-fund](https://github.com/nhsbsa/learning-support-fund) | [`app/assets/sass/components/_moj-filter.scss`](https://github.com/nhsbsa/learning-support-fund/blob/HEAD/app/assets/sass/components/_moj-filter.scss) | SCSS/CSS only |  |  | `gem-c-attachment`, `nhsuk-action-link`, `nhsuk-card` |

#### ONSdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [sixteens](https://github.com/ONSdigital/sixteens) | [`scss/components/_filters.scss`](https://github.com/ONSdigital/sixteens/blob/HEAD/scss/components/_filters.scss) | SCSS/CSS only |  |  |  |

#### scottish-government-design-system (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/SearchFilters/SearchFilters.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/SearchFilters/SearchFilters.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### smbc-digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [SMBC-Sonic-Brief-Community-Edition](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition) | [`frontend_app/src/components/audio-recordings/filter.tsx`](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition/blob/HEAD/frontend_app/src/components/audio-recordings/filter.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### trade-tariff (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [trade-tariff-frontend](https://github.com/trade-tariff/trade-tariff-frontend) | [`app/assets/stylesheets/src/components/_filter.scss`](https://github.com/trade-tariff/trade-tariff-frontend/blob/HEAD/app/assets/stylesheets/src/components/_filter.scss) | SCSS/CSS only |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [social-mobility-commission-website](https://github.com/ukgov-equality-hub/social-mobility-commission-website) | [`web/app/themes/smc/App_Themes/main/css/components/_filters.scss`](https://github.com/ukgov-equality-hub/social-mobility-commission-website/blob/HEAD/web/app/themes/smc/App_Themes/main/css/components/_filters.scss) | SCSS/CSS only |  |  |  |

#### UKHO (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [admiralty-design-system](https://github.com/UKHO/admiralty-design-system) | [`packages/core/src/components/filter/filter.scss`](https://github.com/UKHO/admiralty-design-system/blob/HEAD/packages/core/src/components/filter/filter.scss) | SCSS/CSS only |  |  |  |

#### cabinetoffice (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ova-finder-prototype](https://github.com/cabinetoffice/ova-finder-prototype) | [`app/views/finder/components/filters.html`](https://github.com/cabinetoffice/ova-finder-prototype/blob/HEAD/app/views/finder/components/filters.html) | template partial | yes |  |  |


### search-result — 40 repos, 21 orgs (31 production)

#### DFE-Digital (12, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [find-teacher-training](https://github.com/DFE-Digital/find-teacher-training) | [`app/components/courses/search_result_component.rb`](https://github.com/DFE-Digital/find-teacher-training/blob/HEAD/app/components/courses/search_result_component.rb) | Rails ViewComponent |  |  |  |
| [itt-mentor-services](https://github.com/DFE-Digital/itt-mentor-services) | [`app/assets/stylesheets/components/_search_results.scss`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/assets/stylesheets/components/_search_results.scss) | SCSS/CSS only |  |  |  |
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/assets/stylesheets/find/components/_search-results.scss`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/assets/stylesheets/find/components/_search-results.scss) | SCSS/CSS only |  |  |  |
| [trs-post-mvp](https://github.com/DFE-Digital/trs-post-mvp) | [`app/assets/sass/components/_app-search-results.scss`](https://github.com/DFE-Digital/trs-post-mvp/blob/HEAD/app/assets/sass/components/_app-search-results.scss) | SCSS/CSS only |  |  | `hods-date-time`, `hods-highlight`, `hods-timeline`, `x-govuk-secondary-navigation` |
| [check-performance-data-prototype](https://github.com/DFE-Digital/check-performance-data-prototype) | [`app/assets/sass/components/_app-search-results.scss`](https://github.com/DFE-Digital/check-performance-data-prototype/blob/HEAD/app/assets/sass/components/_app-search-results.scss) | SCSS/CSS only | yes |  | `dfe-card`, `moj-scrollable-pane`, `moj-side-navigation` |
| [find-teacher-training-hackday-prototype](https://github.com/DFE-Digital/find-teacher-training-hackday-prototype) | [`app/assets/sass/components/_search-results.scss`](https://github.com/DFE-Digital/find-teacher-training-hackday-prototype/blob/HEAD/app/assets/sass/components/_search-results.scss) | SCSS/CSS only | yes |  |  |
| [find-teacher-training-prototype](https://github.com/DFE-Digital/find-teacher-training-prototype) | [`app/assets/sass/components/_search-results.scss`](https://github.com/DFE-Digital/find-teacher-training-prototype/blob/HEAD/app/assets/sass/components/_search-results.scss) | SCSS/CSS only | yes |  |  |
| [itt-mentoring-beta-prototype](https://github.com/DFE-Digital/itt-mentoring-beta-prototype) | [`app/assets/sass/components/_search-results.scss`](https://github.com/DFE-Digital/itt-mentoring-beta-prototype/blob/HEAD/app/assets/sass/components/_search-results.scss) | SCSS/CSS only | yes |  |  |
| [register-placement-schools-prototype](https://github.com/DFE-Digital/register-placement-schools-prototype) | [`app/assets/sass/components/_search-results.scss`](https://github.com/DFE-Digital/register-placement-schools-prototype/blob/HEAD/app/assets/sass/components/_search-results.scss) | SCSS/CSS only | yes |  |  |
| [register-training-providers-prototype](https://github.com/DFE-Digital/register-training-providers-prototype) | [`app/assets/sass/components/_search-results.scss`](https://github.com/DFE-Digital/register-training-providers-prototype/blob/HEAD/app/assets/sass/components/_search-results.scss) | SCSS/CSS only | yes |  |  |
| [school-placements-alpha-prototype](https://github.com/DFE-Digital/school-placements-alpha-prototype) | [`app/assets/sass/components/_search-results.scss`](https://github.com/DFE-Digital/school-placements-alpha-prototype/blob/HEAD/app/assets/sass/components/_search-results.scss) | SCSS/CSS only | yes |  |  |
| [trs-support-console](https://github.com/DFE-Digital/trs-support-console) | [`app/assets/sass/components/_app-search-results.scss`](https://github.com/DFE-Digital/trs-support-console/blob/HEAD/app/assets/sass/components/_app-search-results.scss) | SCSS/CSS only | yes |  | `hods-date-time`, `hods-timeline` |

#### SkillsFundingAgency (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-campaigns-prototype](https://github.com/SkillsFundingAgency/das-campaigns-prototype) | [`src/campaign/sass/components/_search-results.scss`](https://github.com/SkillsFundingAgency/das-campaigns-prototype/blob/HEAD/src/campaign/sass/components/_search-results.scss) | SCSS/CSS only |  |  |  |
| [das-epao-fireitup](https://github.com/SkillsFundingAgency/das-epao-fireitup) | [`old/src/campaign/sass/components/_search-results.scss`](https://github.com/SkillsFundingAgency/das-epao-fireitup/blob/HEAD/old/src/campaign/sass/components/_search-results.scss) | SCSS/CSS only |  |  |  |
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/das/sass/components/search-results/_search-results.scss`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/das/sass/components/search-results/_search-results.scss) | SCSS/CSS only |  |  |  |
| [tl-matching](https://github.com/SkillsFundingAgency/tl-matching) | [`src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/sass/components/_search-results.scss`](https://github.com/SkillsFundingAgency/tl-matching/blob/HEAD/src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/sass/components/_search-results.scss) | SCSS/CSS only |  |  |  |

#### Civil-Service-Human-Resources (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lpg-front-end](https://github.com/Civil-Service-Human-Resources/lpg-front-end) | [`src/server/views/library/components/search-result.njk`](https://github.com/Civil-Service-Human-Resources/lpg-front-end/blob/HEAD/src/server/views/library/components/search-result.njk) | template partial |  |  |  |
| [lpg-services](https://github.com/Civil-Service-Human-Resources/lpg-services) | [`views/assets/styles/components/_search-results.scss`](https://github.com/Civil-Service-Human-Resources/lpg-services/blob/HEAD/views/assets/styles/components/_search-results.scss) | SCSS/CSS only |  |  |  |

#### digital-land (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-code-explorer](https://github.com/digital-land/design-code-explorer) | [`src/scss/components/_search-results.scss`](https://github.com/digital-land/design-code-explorer/blob/HEAD/src/scss/components/_search-results.scss) | SCSS/CSS only |  |  |  |
| [planning-application-poc](https://github.com/digital-land/planning-application-poc) | [`src/scss/components/_search-results.scss`](https://github.com/digital-land/planning-application-poc/blob/HEAD/src/scss/components/_search-results.scss) | SCSS/CSS only |  |  |  |

#### ministryofjustice (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmpps-find-and-refer-an-intervention-ui](https://github.com/ministryofjustice/hmpps-find-and-refer-an-intervention-ui) | [`assets/scss/components/_searchResults.scss`](https://github.com/ministryofjustice/hmpps-find-and-refer-an-intervention-ui/blob/HEAD/assets/scss/components/_searchResults.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [laa-crime-equinity-historical-data-frontend](https://github.com/ministryofjustice/laa-crime-equinity-historical-data-frontend) | [`assets/scss/components/_search-result.scss`](https://github.com/ministryofjustice/laa-crime-equinity-historical-data-frontend/blob/HEAD/assets/scss/components/_search-result.scss) | SCSS/CSS only |  |  |  |

#### NHS-digital-website (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hippo](https://github.com/NHS-digital-website/hippo) | [`repository-data/webfiles/src/main/resources/site/src/scss/components/_search-result.scss`](https://github.com/NHS-digital-website/hippo/blob/HEAD/repository-data/webfiles/src/main/resources/site/src/scss/components/_search-result.scss) | SCSS/CSS only |  |  |  |
| [hippo-codebuild-test](https://github.com/NHS-digital-website/hippo-codebuild-test) | [`repository-data/webfiles/src/main/resources/site/scss/components/_search-result.scss`](https://github.com/NHS-digital-website/hippo-codebuild-test/blob/HEAD/repository-data/webfiles/src/main/resources/site/scss/components/_search-result.scss) | SCSS/CSS only |  |  |  |

#### scottish-government-design-system (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/scottish-government-design-system/design-system) | [`src/components/search-result/_index.scss`](https://github.com/scottish-government-design-system/design-system/blob/HEAD/src/components/search-result/_index.scss) | SCSS/CSS only |  |  |  |
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/SearchResult/SearchResult.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/SearchResult/SearchResult.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### communitiesuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [epb-frontend](https://github.com/communitiesuk/epb-frontend) | [`assets/components/_search-results.scss`](https://github.com/communitiesuk/epb-frontend/blob/HEAD/assets/components/_search-results.scss) | SCSS/CSS only |  |  |  |

#### CPS-Innovation (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Large-and-Complex-Cases](https://github.com/CPS-Innovation/Large-and-Complex-Cases) | [`ui-spa/src/components/search-result-page/SearchResults.tsx`](https://github.com/CPS-Innovation/Large-and-Complex-Cases/blob/HEAD/ui-spa/src/components/search-result-page/SearchResults.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### Crown-Commercial-Service (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [crown-marketplace-legacy](https://github.com/Crown-Commercial-Service/crown-marketplace-legacy) | [`app/assets/stylesheets/components/search-results/_index.scss`](https://github.com/Crown-Commercial-Service/crown-marketplace-legacy/blob/HEAD/app/assets/stylesheets/components/search-results/_index.scss) | SCSS/CSS only |  |  |  |

#### DEFRA (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cdp-portal-frontend](https://github.com/DEFRA/cdp-portal-frontend) | [`src/server/common/components/search-results/macro.njk`](https://github.com/DEFRA/cdp-portal-frontend/blob/HEAD/src/server/common/components/search-results/macro.njk) | Nunjucks macro |  |  |  |

#### department-for-transport-BODS (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [publish-devolved-bus-registration-data](https://github.com/department-for-transport-BODS/publish-devolved-bus-registration-data) | [`frontend/src/components/SearchResults.tsx`](https://github.com/department-for-transport-BODS/publish-devolved-bus-registration-data/blob/HEAD/frontend/src/components/SearchResults.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dvsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [des-mobile-app](https://github.com/dvsa/des-mobile-app) | [`src/app/pages/test-results-search/components/search-result/search-result.scss`](https://github.com/dvsa/des-mobile-app/blob/HEAD/src/app/pages/test-results-search/components/search-result/search-result.scss) | SCSS/CSS only |  |  |  |

#### essexcountycouncil (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [send-lgdrupal](https://github.com/essexcountycouncil/send-lgdrupal) | [`web/core/profiles/demo_umami/themes/umami/css/classy/components/search-results.css`](https://github.com/essexcountycouncil/send-lgdrupal/blob/HEAD/web/core/profiles/demo_umami/themes/umami/css/classy/components/search-results.css) | SCSS/CSS only |  |  |  |

#### hmcts (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rpa-jui-webapp](https://github.com/hmcts/rpa-jui-webapp) | [`documentation/components/SearchResultComponent.html`](https://github.com/hmcts/rpa-jui-webapp/blob/HEAD/documentation/components/SearchResultComponent.html) | template partial |  |  |  |

#### InnovateUKGitHub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [een-webapp](https://github.com/InnovateUKGitHub/een-webapp) | [`drupal/core/themes/bartik/css/components/search-results.css`](https://github.com/InnovateUKGitHub/een-webapp/blob/HEAD/drupal/core/themes/bartik/css/components/search-results.css) | SCSS/CSS only |  |  |  |

#### mcagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [beacons](https://github.com/mcagov/beacons) | [`backoffice/src/components/search/SearchResult.tsx`](https://github.com/mcagov/beacons/blob/HEAD/backoffice/src/components/search/SearchResult.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### MHRA (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [products](https://github.com/MHRA/products) | [`medicines/web/src/components/bmgf/search-results/index.tsx`](https://github.com/MHRA/products/blob/HEAD/medicines/web/src/components/bmgf/search-results/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ONSdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [sixteens](https://github.com/ONSdigital/sixteens) | [`scss/components/_search-results.scss`](https://github.com/ONSdigital/sixteens/blob/HEAD/scss/components/_search-results.scss) | SCSS/CSS only |  |  |  |

#### Planning-Inspectorate (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [library-service](https://github.com/Planning-Inspectorate/library-service) | [`web/themes/contrib/bootstrap5/css/components/search-results.css`](https://github.com/Planning-Inspectorate/library-service/blob/HEAD/web/themes/contrib/bootstrap5/css/components/search-results.css) | SCSS/CSS only |  |  |  |

#### trade-tariff (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ott-prototype](https://github.com/trade-tariff/ott-prototype) | [`app/assets/sass/components/search_results.scss`](https://github.com/trade-tariff/ott-prototype/blob/HEAD/app/assets/sass/components/search_results.scss) | SCSS/CSS only | yes |  |  |


### search-bar — 14 repos, 13 orgs (14 production)

Built in services only; no design system implementation found.

#### ministryofjustice (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmpps-activities-management](https://github.com/ministryofjustice/hmpps-activities-management) | [`frontend/components/search-bar/_search-bar.scss`](https://github.com/ministryofjustice/hmpps-activities-management/blob/HEAD/frontend/components/search-bar/_search-bar.scss) | SCSS/CSS only |  |  | `moj-multi-select`, `moj-sortable-table` |
| [migration-link-exchange-ui](https://github.com/ministryofjustice/migration-link-exchange-ui) | [`assets/scss/components/_search-bar.scss`](https://github.com/ministryofjustice/migration-link-exchange-ui/blob/HEAD/assets/scss/components/_search-bar.scss) | SCSS/CSS only |  |  |  |

#### alphagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [learningtime-hh-sem2-gov-uk-home-page-in-svelte](https://github.com/alphagov/learningtime-hh-sem2-gov-uk-home-page-in-svelte) | [`src/lib/components/home_page_sections/HomepageLinksAndSearch/SearchBar.svelte`](https://github.com/alphagov/learningtime-hh-sem2-gov-uk-home-page-in-svelte/blob/HEAD/src/lib/components/home_page_sections/HomepageLinksAndSearch/SearchBar.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### defencedigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [discover-my-benefits](https://github.com/defencedigital/discover-my-benefits) | [`clientside/MOD-Civilian/src/components/SearchBar/index.tsx`](https://github.com/defencedigital/discover-my-benefits/blob/HEAD/clientside/MOD-Civilian/src/components/SearchBar/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### DEFRA (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [prompt-library](https://github.com/DEFRA/prompt-library) | [`src/components/SearchBar.tsx`](https://github.com/DEFRA/prompt-library/blob/HEAD/src/components/SearchBar.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### defra-design (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [livestock-traceability](https://github.com/defra-design/livestock-traceability) | [`app/views/livestock-back-office/exploratory/v3/components/_search-bar.html`](https://github.com/defra-design/livestock-traceability/blob/HEAD/app/views/livestock-back-office/exploratory/v3/components/_search-bar.html) | template partial |  |  | `moj-filter`, `moj-scrollable-pane` |

#### Digital-Intelligence-Unit (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pinot](https://github.com/Digital-Intelligence-Unit/pinot) | [`pinot-controller/src/main/resources/app/components/SearchBar.tsx`](https://github.com/Digital-Intelligence-Unit/pinot/blob/HEAD/pinot-controller/src/main/resources/app/components/SearchBar.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### gchq (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [stroom-ui](https://github.com/gchq/stroom-ui) | [`src/components/AppSearchBar/AppSearchBar.tsx`](https://github.com/gchq/stroom-ui/blob/HEAD/src/components/AppSearchBar/AppSearchBar.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### i-dot-ai (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [planning-drawing-validator](https://github.com/i-dot-ai/planning-drawing-validator) | [`evaluation-app/frontend/src/components/SearchBar.tsx`](https://github.com/i-dot-ai/planning-drawing-validator/blob/HEAD/evaluation-app/frontend/src/components/SearchBar.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### mcagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [beacons](https://github.com/mcagov/beacons) | [`backoffice/src/components/tableComponents/SearchBar.tsx`](https://github.com/mcagov/beacons/blob/HEAD/backoffice/src/components/tableComponents/SearchBar.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nhselect (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [step1-training](https://github.com/nhselect/step1-training) | [`components/user-guide/SearchBar.vue`](https://github.com/nhselect/step1-training/blob/HEAD/components/user-guide/SearchBar.vue) | UI framework (React/Vue/Svelte lib) |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-contents-list` |

#### ONSdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [sixteens](https://github.com/ONSdigital/sixteens) | [`scss/components/_search-bar.scss`](https://github.com/ONSdigital/sixteens/blob/HEAD/scss/components/_search-bar.scss) | SCSS/CSS only |  |  |  |

#### Planning-Inspectorate (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [peas-row-commons](https://github.com/Planning-Inspectorate/peas-row-commons) | [`apps/manage/src/app/views/layouts/components/search-bar.njk`](https://github.com/Planning-Inspectorate/peas-row-commons/blob/HEAD/apps/manage/src/app/views/layouts/components/search-bar.njk) | template partial |  |  | `moj-multi-file-upload`, `moj-sortable-table` |

#### UKSpaceAgency (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [monitor-space-hazards](https://github.com/UKSpaceAgency/monitor-space-hazards) | [`src/components/SearchBar.tsx`](https://github.com/UKSpaceAgency/monitor-space-hazards/blob/HEAD/src/components/SearchBar.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |


### no-results — 13 repos, 7 orgs (13 production)

Built in services only — teams hand-rolling empty states.

#### DFE-Digital (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [find-teacher-training](https://github.com/DFE-Digital/find-teacher-training) | [`app/components/courses/no_results_component.rb`](https://github.com/DFE-Digital/find-teacher-training/blob/HEAD/app/components/courses/no_results_component.rb) | Rails ViewComponent |  |  |  |
| [get-into-teaching-app](https://github.com/DFE-Digital/get-into-teaching-app) | [`app/components/events/no_results_component.rb`](https://github.com/DFE-Digital/get-into-teaching-app/blob/HEAD/app/components/events/no_results_component.rb) | Rails ViewComponent |  |  |  |
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/components/courses/no_results_component.rb`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/components/courses/no_results_component.rb) | Rails ViewComponent |  |  |  |

#### hmcts (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dtsse-agent-hub](https://github.com/hmcts/dtsse-agent-hub) | [`src/components/EmptyState.tsx`](https://github.com/hmcts/dtsse-agent-hub/blob/HEAD/src/components/EmptyState.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dtsse-github-metrics](https://github.com/hmcts/dtsse-github-metrics) | [`src/components/EmptyState.tsx`](https://github.com/hmcts/dtsse-github-metrics/blob/HEAD/src/components/EmptyState.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [github-metrics](https://github.com/hmcts/github-metrics) | [`ui/src/components/EmptyState.tsx`](https://github.com/hmcts/github-metrics/blob/HEAD/ui/src/components/EmptyState.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### DEFRA (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [defra-atlassian-mcp-portal](https://github.com/DEFRA/defra-atlassian-mcp-portal) | [`src/pages/common/components/empty-state.njk`](https://github.com/DEFRA/defra-atlassian-mcp-portal/blob/HEAD/src/pages/common/components/empty-state.njk) | template partial |  |  |  |
| [mural-mcp-portal](https://github.com/DEFRA/mural-mcp-portal) | [`src/pages/common/components/empty-state.njk`](https://github.com/DEFRA/mural-mcp-portal/blob/HEAD/src/pages/common/components/empty-state.njk) | template partial |  |  |  |

#### i-dot-ai (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lex](https://github.com/i-dot-ai/lex) | [`app/src/components/empty-state.tsx`](https://github.com/i-dot-ai/lex/blob/HEAD/app/src/components/empty-state.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [planning-drawing-validator](https://github.com/i-dot-ai/planning-drawing-validator) | [`evaluation-app/frontend/src/components/EmptyState.tsx`](https://github.com/i-dot-ai/planning-drawing-validator/blob/HEAD/evaluation-app/frontend/src/components/EmptyState.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### alan-turing-institute (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [AssurancePlatform](https://github.com/alan-turing-institute/AssurancePlatform) | [`components/ui/empty-state.tsx`](https://github.com/alan-turing-institute/AssurancePlatform/blob/HEAD/components/ui/empty-state.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dwp (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Searchlight](https://github.com/dwp/Searchlight) | [`app/v6/views/details-about-death/components/no-results.html`](https://github.com/dwp/Searchlight/blob/HEAD/app/v6/views/details-about-death/components/no-results.html) | template partial |  |  |  |

#### UKHSA-Internal (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [data-dashboard-frontend](https://github.com/UKHSA-Internal/data-dashboard-frontend) | [`src/app/components/ui/ukhsa/NoResults/NoResults.tsx`](https://github.com/UKHSA-Internal/data-dashboard-frontend/blob/HEAD/src/app/components/ui/ukhsa/NoResults/NoResults.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

## Adjacent work

Related: autocomplete (see [autocomplete drill-down](./autocomplete.md)), sort-options, search-pagination, suggestions. Sorting results overlaps the [table drill-down](./table.md).
