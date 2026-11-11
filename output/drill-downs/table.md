# Table: service repo drill-down

Generated 2026-11-11 from the audit snapshot of 2026-11-04 ([clusters.json](../clusters.json)) combined with class usage data ([class-usage.json](../class-usage.json)). See [report.md](../report.md) for methodology.

The GOV.UK Frontend table is widely extended (64 of 134 repos), and MoJ's sortable table is the most-adopted community component in this dataset (91 repos). The sub-clusters below separate plain tables from sortable/responsive/data-table variants.

See also the [NHS table variants drill-down](./nhs-table-variants.md), which tracks which of the six NHS table kinds nhsuk-frontend dependents use, including legacy class names.

Each repo appears once per cluster, with a link to the file the audit matched. "Extends GOV.UK" means the implementation builds on or imports the GOV.UK Frontend component rather than being written from scratch. The "Community classes used" column lists *all* community design system classes detected in that repo (any component) — repos consuming another organisation's component rather than, or as well as, building their own. "Orgs" counts unique GitHub organisations.

Caveats: detection is filename/class-name based, so some hits may be false positives, and one hit per repo means the audit shows *an* example file, not every instance. Class usage and component detection are independent scans: a repo can use a community class without having its own matching file, and vice versa.

## At a glance

| Cluster | Status | Score | Repos (production / prototype) | Orgs | Extend GOV.UK |
|---|---|---|---|---|---|
| table (base) | in GOV.UK Frontend | 29.8 | 134 (126 / 8) | 47 | 64 |
| sortable-table | partially covered | 29.5 | 39 (33 / 6) | 14 |  |
| data-table | not in GOV.UK Frontend | 22.5 | 13 (13 / 0) | 11 |  |
| responsive-table | not in GOV.UK Frontend | 20.3 | 12 (7 / 5) | 6 |  |

## Community class adoption

Repos using another design system's classes. These are *consumers* of a community component — evidence of which existing implementation teams reach for.

| Class | Source design system | Repos | Orgs | Production | Prototypes |
|---|---|---|---|---|---|
| `moj-sortable-table` | moj-frontend | 91 | 11 | 62 | 29 |

**14 repos both consume a community class and have their own implementation** in the clusters below; **77 consume a community class with no matching own implementation detected**.

<details><summary>Consumers without their own implementation (77 repos, 11 orgs)</summary>

- **DEFRA**: [ahwr-backoffice-ui](https://github.com/DEFRA/ahwr-backoffice-ui) (`moj-sortable-table`), [ahwr-public-user-ui](https://github.com/DEFRA/ahwr-public-user-ui) (`moj-sortable-table`), [bng-metric-digital-prototype](https://github.com/DEFRA/bng-metric-digital-prototype) (proto) (`moj-sortable-table`), [grants-config-browser](https://github.com/DEFRA/grants-config-browser) (`moj-sortable-table`)
- **defra-design**: [caseworking-ai-test](https://github.com/defra-design/caseworking-ai-test) (`moj-sortable-table`), [defra-forms-mvp-prototype](https://github.com/defra-design/defra-forms-mvp-prototype) (proto) (`moj-sortable-table`), [dwt-admin-interface](https://github.com/defra-design/dwt-admin-interface) (`moj-sortable-table`), [fcp-combined-offer](https://github.com/defra-design/fcp-combined-offer) (`moj-sortable-table`), [fcp-farming-front-door](https://github.com/defra-design/fcp-farming-front-door) (`moj-sortable-table`), [fcp-grants-casework](https://github.com/defra-design/fcp-grants-casework) (`moj-sortable-table`), [ffc-ahwr-prototype](https://github.com/defra-design/ffc-ahwr-prototype) (proto) (`moj-sortable-table`), [trade-paper-prototype](https://github.com/defra-design/trade-paper-prototype) (proto) (`moj-sortable-table`), [xws-internal-prototype](https://github.com/defra-design/xws-internal-prototype) (proto) (`moj-sortable-table`)
- **DFE-Digital**: [fiat-prototype](https://github.com/DFE-Digital/fiat-prototype) (proto) (`moj-sortable-table`), [school-placements-prototype](https://github.com/DFE-Digital/school-placements-prototype) (proto) (`moj-sortable-table`), [sip-public](https://github.com/DFE-Digital/sip-public) (`moj-sortable-table`), [TRAMS-alpha](https://github.com/DFE-Digital/TRAMS-alpha) (`moj-sortable-table`), [tte-prototype](https://github.com/DFE-Digital/tte-prototype) (proto) (`moj-sortable-table`)
- **dwp**: [awacs](https://github.com/dwp/awacs) (`moj-sortable-table`), [common-capabilities-mmw](https://github.com/dwp/common-capabilities-mmw) (`moj-sortable-table`), [HAS-assessments](https://github.com/dwp/HAS-assessments) (`moj-sortable-table`), [has-supporting-docs](https://github.com/dwp/has-supporting-docs) (`moj-sortable-table`), [newstyle-modernisation](https://github.com/dwp/newstyle-modernisation) (`moj-sortable-table`), [pip-case-management-prototype](https://github.com/dwp/pip-case-management-prototype) (proto) (`moj-sortable-table`)
- **hmcts**: [juror-bureau](https://github.com/hmcts/juror-bureau) (`moj-sortable-table`), [juror-er-portal](https://github.com/hmcts/juror-er-portal) (`moj-sortable-table`), [opal-rm-prototype](https://github.com/hmcts/opal-rm-prototype) (proto) (`moj-sortable-table`), [pip-frontend](https://github.com/hmcts/pip-frontend) (`moj-sortable-table`), [wa-reporting-frontend](https://github.com/hmcts/wa-reporting-frontend) (`moj-sortable-table`)
- **LandRegistry**: [hmlr-header](https://github.com/LandRegistry/hmlr-header) (`moj-sortable-table`)
- **ministryofjustice**: [accredited-programmes-community-prototype](https://github.com/ministryofjustice/accredited-programmes-community-prototype) (proto) (`moj-sortable-table`), [accredited-programmes-prototype](https://github.com/ministryofjustice/accredited-programmes-prototype) (proto) (`moj-sortable-table`), [approved-premises-prototype](https://github.com/ministryofjustice/approved-premises-prototype) (proto) (`moj-sortable-table`), [cica-apply-web](https://github.com/ministryofjustice/cica-apply-web) (`moj-sortable-table`), [create-and-vary-a-licence](https://github.com/ministryofjustice/create-and-vary-a-licence) (`moj-sortable-table`), [crmfour-proto](https://github.com/ministryofjustice/crmfour-proto) (`moj-sortable-table`), [cvl-improvements-prototype](https://github.com/ministryofjustice/cvl-improvements-prototype) (proto) (`moj-sortable-table`), [data-platform-app](https://github.com/ministryofjustice/data-platform-app) (`moj-sortable-table`), [hdc-cvl-prototype](https://github.com/ministryofjustice/hdc-cvl-prototype) (proto) (`moj-sortable-table`), [hmpps-accredited-programmes-ui](https://github.com/ministryofjustice/hmpps-accredited-programmes-ui) (`moj-sortable-table`), [hmpps-activities-management](https://github.com/ministryofjustice/hmpps-activities-management) (`moj-sortable-table`), [hmpps-alerts-ui](https://github.com/ministryofjustice/hmpps-alerts-ui) (`moj-sortable-table`), [hmpps-allocate-key-workers-ui](https://github.com/ministryofjustice/hmpps-allocate-key-workers-ui) (`moj-sortable-table`), [hmpps-book-a-video-link-ui](https://github.com/ministryofjustice/hmpps-book-a-video-link-ui) (`moj-sortable-table`), [hmpps-cell-sharing-risk-assessment-ui](https://github.com/ministryofjustice/hmpps-cell-sharing-risk-assessment-ui) (`moj-sortable-table`), [hmpps-dps-prototype-starter](https://github.com/ministryofjustice/hmpps-dps-prototype-starter) (proto) (`moj-sortable-table`), [hmpps-edmi-prototype](https://github.com/ministryofjustice/hmpps-edmi-prototype) (proto) (`moj-sortable-table`), [hmpps-education-and-work-plan-ui](https://github.com/ministryofjustice/hmpps-education-and-work-plan-ui) (`moj-sortable-table`), [hmpps-electronic-monitoring-datastore-ui](https://github.com/ministryofjustice/hmpps-electronic-monitoring-datastore-ui) (`moj-sortable-table`), [hmpps-emdi-prototype](https://github.com/ministryofjustice/hmpps-emdi-prototype) (proto) (`moj-sortable-table`), [hmpps-find-and-refer-an-intervention-ui](https://github.com/ministryofjustice/hmpps-find-and-refer-an-intervention-ui) (`moj-sortable-table`), [hmpps-interventions-prototype](https://github.com/ministryofjustice/hmpps-interventions-prototype) (proto) (`moj-sortable-table`), [hmpps-manage-custody-mailbox-register](https://github.com/ministryofjustice/hmpps-manage-custody-mailbox-register) (`moj-sortable-table`), [hmpps-manage-users](https://github.com/ministryofjustice/hmpps-manage-users) (`moj-sortable-table`), [hmpps-managing-prisoner-apps-staff-ui](https://github.com/ministryofjustice/hmpps-managing-prisoner-apps-staff-ui) (`moj-sortable-table`), [hmpps-non-residential-locations-ui](https://github.com/ministryofjustice/hmpps-non-residential-locations-ui) (`moj-sortable-table`), [hmpps-prisoner-pay-ui](https://github.com/ministryofjustice/hmpps-prisoner-pay-ui) (`moj-sortable-table`), [hmpps-prisoner-property-ui](https://github.com/ministryofjustice/hmpps-prisoner-property-ui) (`moj-sortable-table`), [hmpps-restricted-patients-ui](https://github.com/ministryofjustice/hmpps-restricted-patients-ui) (`moj-sortable-table`), [hmpps-subject-access-request-ui](https://github.com/ministryofjustice/hmpps-subject-access-request-ui) (`moj-sortable-table`), [hmpps-temporary-accommodation-prototype](https://github.com/ministryofjustice/hmpps-temporary-accommodation-prototype) (proto) (`moj-sortable-table`), [hmpps-video-conference-schedule-ui](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui) (`moj-sortable-table`), [hmpps-visit-someone-in-prison-prototype](https://github.com/ministryofjustice/hmpps-visit-someone-in-prison-prototype) (proto) (`moj-sortable-table`), [laa-billing-alpha-prototype](https://github.com/ministryofjustice/laa-billing-alpha-prototype) (proto) (`moj-sortable-table`), [laa-decide-prototype](https://github.com/ministryofjustice/laa-decide-prototype) (proto) (`moj-sortable-table`), [laa-end-to-end](https://github.com/ministryofjustice/laa-end-to-end) (`moj-sortable-table`), [laa-express-typescript-template](https://github.com/ministryofjustice/laa-express-typescript-template) (`moj-sortable-table`), [laa-means-match-prototype](https://github.com/ministryofjustice/laa-means-match-prototype) (proto) (`moj-sortable-table`), [manage-a-workforce-ui](https://github.com/ministryofjustice/manage-a-workforce-ui) (`moj-sortable-table`), [wmt-web](https://github.com/ministryofjustice/wmt-web) (`moj-sortable-table`)
- **nhsbsa**: [reference-price-prototype](https://github.com/nhsbsa/reference-price-prototype) (proto) (`moj-sortable-table`)
- **Planning-Inspectorate**: [crown-developments](https://github.com/Planning-Inspectorate/crown-developments) (`moj-sortable-table`), [mpesc-prototype](https://github.com/Planning-Inspectorate/mpesc-prototype) (proto) (`moj-sortable-table`), [peas-row-commons](https://github.com/Planning-Inspectorate/peas-row-commons) (`moj-sortable-table`), [section-62a-prototype](https://github.com/Planning-Inspectorate/section-62a-prototype) (proto) (`moj-sortable-table`)
- **UKGovernmentBEIS**: [DVS-Register](https://github.com/UKGovernmentBEIS/DVS-Register) (`moj-sortable-table`)
- **UKSpaceAgency**: [sst-beta-prototype](https://github.com/UKSpaceAgency/sst-beta-prototype) (proto) (`moj-sortable-table`)

</details>

## Repos by cluster and organisation

### table (base) — 134 repos, 47 orgs (126 production)

In GOV.UK Frontend — the "Extends GOV.UK" column is the interesting one here.

#### ministryofjustice (13, 12 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bichard7-next-core](https://github.com/ministryofjustice/bichard7-next-core) | [`packages/ui/src/components/Table.tsx`](https://github.com/ministryofjustice/bichard7-next-core/blob/HEAD/packages/ui/src/components/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [Claim-for-Crown-Court-Defence](https://github.com/ministryofjustice/Claim-for-Crown-Court-Defence) | [`app/assets/stylesheets/components/_table.scss`](https://github.com/ministryofjustice/Claim-for-Crown-Court-Defence/blob/HEAD/app/assets/stylesheets/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [find-moj-data](https://github.com/ministryofjustice/find-moj-data) | [`scss/components/_table.scss`](https://github.com/ministryofjustice/find-moj-data/blob/HEAD/scss/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-electronic-monitoring-crime-matching-ui](https://github.com/ministryofjustice/hmpps-electronic-monitoring-crime-matching-ui) | [`assets/scss/components/_table.scss`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-crime-matching-ui/blob/HEAD/assets/scss/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-esupervision-ui](https://github.com/ministryofjustice/hmpps-esupervision-ui) | [`assets/scss/components/_tables.scss`](https://github.com/ministryofjustice/hmpps-esupervision-ui/blob/HEAD/assets/scss/components/_tables.scss) | SCSS/CSS only |  | yes | `moj-sortable-table` |
| [hmpps-incentives-ui](https://github.com/ministryofjustice/hmpps-incentives-ui) | [`assets/scss/components/_tables.scss`](https://github.com/ministryofjustice/hmpps-incentives-ui/blob/HEAD/assets/scss/components/_tables.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-probation-check-in-ui](https://github.com/ministryofjustice/hmpps-probation-check-in-ui) | [`assets/scss/components/_tables.scss`](https://github.com/ministryofjustice/hmpps-probation-check-in-ui/blob/HEAD/assets/scss/components/_tables.scss) | SCSS/CSS only |  | yes |  |
| [laa-spring-boot-ui-template](https://github.com/ministryofjustice/laa-spring-boot-ui-template) | [`src/main/resources/templates/fragments/components/table.html`](https://github.com/ministryofjustice/laa-spring-boot-ui-template/blob/HEAD/src/main/resources/templates/fragments/components/table.html) | template partial |  | yes |  |
| [analytics-platform-control-panel](https://github.com/ministryofjustice/analytics-platform-control-panel) | [`controlpanel/frontend/static/components/table/_table.scss`](https://github.com/ministryofjustice/analytics-platform-control-panel/blob/HEAD/controlpanel/frontend/static/components/table/_table.scss) | SCSS/CSS only |  |  | `moj-add-another`, `moj-sub-navigation` |
| [analytics-platform-control-panel-public](https://github.com/ministryofjustice/analytics-platform-control-panel-public) | [`controlpanel/frontend/static/components/table/_table.scss`](https://github.com/ministryofjustice/analytics-platform-control-panel-public/blob/HEAD/controlpanel/frontend/static/components/table/_table.scss) | SCSS/CSS only |  |  |  |
| [hmpps-approved-premises-ui](https://github.com/ministryofjustice/hmpps-approved-premises-ui) | [`assets/scss/components/_table.scss`](https://github.com/ministryofjustice/hmpps-approved-premises-ui/blob/HEAD/assets/scss/components/_table.scss) | SCSS/CSS only |  |  | `moj-page-header-actions`, `moj-sortable-table` |
| [money-to-prisoners-common](https://github.com/ministryofjustice/money-to-prisoners-common) | [`mtp_common/assets-src/mtp_common/components/table/_index.scss`](https://github.com/ministryofjustice/money-to-prisoners-common/blob/HEAD/mtp_common/assets-src/mtp_common/components/table/_index.scss) | SCSS/CSS only |  |  |  |
| [hmpps-prepare-a-case-prototype](https://github.com/ministryofjustice/hmpps-prepare-a-case-prototype) | [`app/assets/sass/components/_table.scss`](https://github.com/ministryofjustice/hmpps-prepare-a-case-prototype/blob/HEAD/app/assets/sass/components/_table.scss) | SCSS/CSS only | yes |  | `moj-search`, `moj-search-toggle`, `moj-sub-navigation`, `moj-timeline` |

#### DFE-Digital (10, 10 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [apply-for-teacher-training-statistics](https://github.com/DFE-Digital/apply-for-teacher-training-statistics) | [`app/assets/sass/components/_table.scss`](https://github.com/DFE-Digital/apply-for-teacher-training-statistics/blob/HEAD/app/assets/sass/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [dfefrontend](https://github.com/DFE-Digital/dfefrontend) | [`packages/dfe-frontend/src/components/table/_index.scss`](https://github.com/DFE-Digital/dfefrontend/blob/HEAD/packages/dfe-frontend/src/components/table/_index.scss) | SCSS/CSS only |  | yes | `dfe-card` |
| [dsi-platform](https://github.com/DFE-Digital/dsi-platform) | [`frontend/src-node/styles/components/_table.scss`](https://github.com/DFE-Digital/dsi-platform/blob/HEAD/frontend/src-node/styles/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [funding-service-myesf-vyp-ui](https://github.com/DFE-Digital/funding-service-myesf-vyp-ui) | [`ViewYourPayments.Web/ViewYourPayments.Web/src/sass/components/_tables.scss`](https://github.com/DFE-Digital/funding-service-myesf-vyp-ui/blob/HEAD/ViewYourPayments.Web/ViewYourPayments.Web/src/sass/components/_tables.scss) | SCSS/CSS only |  | yes |  |
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/assets/stylesheets/publish/components/_table.scss`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/assets/stylesheets/publish/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [buy-for-your-school](https://github.com/DFE-Digital/buy-for-your-school) | [`app/components/table_component.html.erb`](https://github.com/DFE-Digital/buy-for-your-school/blob/HEAD/app/components/table_component.html.erb) | template partial |  |  |  |
| [find-information-about-academies-and-trusts](https://github.com/DFE-Digital/find-information-about-academies-and-trusts) | [`DfE.FindInformationAcademiesTrusts/assets/sass/components/_table.scss`](https://github.com/DFE-Digital/find-information-about-academies-and-trusts/blob/HEAD/DfE.FindInformationAcademiesTrusts/assets/sass/components/_table.scss) | SCSS/CSS only |  |  |  |
| [find-information-about-schools-and-trusts](https://github.com/DFE-Digital/find-information-about-schools-and-trusts) | [`DfE.FindInformationAcademiesTrusts/assets/sass/components/_table.scss`](https://github.com/DFE-Digital/find-information-about-schools-and-trusts/blob/HEAD/DfE.FindInformationAcademiesTrusts/assets/sass/components/_table.scss) | SCSS/CSS only |  |  | `dfe-card`, `moj-filter`, `moj-sortable-table` |
| [govuk-frontend-aspnetcore](https://github.com/DFE-Digital/govuk-frontend-aspnetcore) | [`src/GovUk.Frontend.AspNetCore.Docs/Templates/components/table.liquid`](https://github.com/DFE-Digital/govuk-frontend-aspnetcore/blob/HEAD/src/GovUk.Frontend.AspNetCore.Docs/Templates/components/table.liquid) | template partial |  |  |  |
| [register-early-career-teachers-public](https://github.com/DFE-Digital/register-early-career-teachers-public) | [`app/components/admin/teachers/table_component.rb`](https://github.com/DFE-Digital/register-early-career-teachers-public/blob/HEAD/app/components/admin/teachers/table_component.rb) | Rails ViewComponent |  |  |  |

#### DEFRA (9, 9 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ai-platform-frontend](https://github.com/DEFRA/ai-platform-frontend) | [`src/client/stylesheets/components/_table.scss`](https://github.com/DEFRA/ai-platform-frontend/blob/HEAD/src/client/stylesheets/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [aqie-front-end](https://github.com/DEFRA/aqie-front-end) | [`src/client/assets/stylesheets/components/table/_index.scss`](https://github.com/DEFRA/aqie-front-end/blob/HEAD/src/client/assets/stylesheets/components/table/_index.scss) | SCSS/CSS only |  | yes |  |
| [book-live-animal-inspection-ui](https://github.com/DEFRA/book-live-animal-inspection-ui) | [`src/server/common/components/table/_index.scss`](https://github.com/DEFRA/book-live-animal-inspection-ui/blob/HEAD/src/server/common/components/table/_index.scss) | SCSS/CSS only |  | yes |  |
| [farming-grants-agreements-ui](https://github.com/DEFRA/farming-grants-agreements-ui) | [`src/server/config-driven-agreement/dynamic-content/components/table.njk`](https://github.com/DEFRA/farming-grants-agreements-ui/blob/HEAD/src/server/config-driven-agreement/dynamic-content/components/table.njk) | template partial |  | yes |  |
| [fg-cw-frontend](https://github.com/DEFRA/fg-cw-frontend) | [`src/cases/views/components/dynamic-content/components/table.njk`](https://github.com/DEFRA/fg-cw-frontend/blob/HEAD/src/cases/views/components/dynamic-content/components/table.njk) | template partial |  | yes | `moj-page-header-actions` |
| [epr-packaging-frontend](https://github.com/DEFRA/epr-packaging-frontend) | [`src/FrontendSchemeRegistration.UI/assets/scss/components/_table.scss`](https://github.com/DEFRA/epr-packaging-frontend/blob/HEAD/src/FrontendSchemeRegistration.UI/assets/scss/components/_table.scss) | SCSS/CSS only |  |  |  |
| [epr-prn-rep-exp-frontend](https://github.com/DEFRA/epr-prn-rep-exp-frontend) | [`src/Epr.Reprocessor.Exporter.UI/assets/scss/components/_table.scss`](https://github.com/DEFRA/epr-prn-rep-exp-frontend/blob/HEAD/src/Epr.Reprocessor.Exporter.UI/assets/scss/components/_table.scss) | SCSS/CSS only |  |  |  |
| [trade-imports-animals-frontend](https://github.com/DEFRA/trade-imports-animals-frontend) | [`src/client/stylesheets/components/_table.scss`](https://github.com/DEFRA/trade-imports-animals-frontend/blob/HEAD/src/client/stylesheets/components/_table.scss) | SCSS/CSS only |  |  |  |
| [trade-imports-simulator-frontend](https://github.com/DEFRA/trade-imports-simulator-frontend) | [`src/server/common/components/table/_table.scss`](https://github.com/DEFRA/trade-imports-simulator-frontend/blob/HEAD/src/server/common/components/table/_table.scss) | SCSS/CSS only |  |  |  |

#### Crown-Commercial-Service (7, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ccs-frontend](https://github.com/Crown-Commercial-Service/ccs-frontend) | [`assets/styles/components/_tables.scss`](https://github.com/Crown-Commercial-Service/ccs-frontend/blob/HEAD/assets/styles/components/_tables.scss) | SCSS/CSS only |  | yes |  |
| [CCS-Frontend-Kit](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit) | [`Assets/styles/components/_tables.scss`](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit/blob/HEAD/Assets/styles/components/_tables.scss) | SCSS/CSS only |  | yes |  |
| [DataSubmissionServiceAPI](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI) | [`app/assets/stylesheets/components/table/_table.scss`](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI/blob/HEAD/app/assets/stylesheets/components/table/_table.scss) | SCSS/CSS only |  | yes |  |
| [gca-Intranet](https://github.com/Crown-Commercial-Service/gca-Intranet) | [`wp-content/themes/gca-intranet-foundation/assets/scss/components/_tables.scss`](https://github.com/Crown-Commercial-Service/gca-Intranet/blob/HEAD/wp-content/themes/gca-intranet-foundation/assets/scss/components/_tables.scss) | SCSS/CSS only |  | yes |  |
| [ccs-scale-cat-buyer-ui](https://github.com/Crown-Commercial-Service/ccs-scale-cat-buyer-ui) | [`src/main/views/components/table/macro.njk`](https://github.com/Crown-Commercial-Service/ccs-scale-cat-buyer-ui/blob/HEAD/src/main/views/components/table/macro.njk) | Nunjucks macro |  |  |  |
| [DataSubmissionService](https://github.com/Crown-Commercial-Service/DataSubmissionService) | [`app/assets/stylesheets/components/table/_table.scss`](https://github.com/Crown-Commercial-Service/DataSubmissionService/blob/HEAD/app/assets/stylesheets/components/table/_table.scss) | SCSS/CSS only |  |  |  |
| [ccs-website-prototype](https://github.com/Crown-Commercial-Service/ccs-website-prototype) | [`app/assets/sass/components/_tables.scss`](https://github.com/Crown-Commercial-Service/ccs-website-prototype/blob/HEAD/app/assets/sass/components/_tables.scss) | SCSS/CSS only | yes | yes |  |

#### digital-land (6, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [config-manager](https://github.com/digital-land/config-manager) | [`application/templates/components/table.html`](https://github.com/digital-land/config-manager/blob/HEAD/application/templates/components/table.html) | template partial |  | yes |  |
| [digital-land-application](https://github.com/digital-land/digital-land-application) | [`src/scss/components/_table.scss`](https://github.com/digital-land/digital-land-application/blob/HEAD/src/scss/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [dluhc-datasets](https://github.com/digital-land/dluhc-datasets) | [`src/scss/components/_table.scss`](https://github.com/digital-land/dluhc-datasets/blob/HEAD/src/scss/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [land-use-calculator](https://github.com/digital-land/land-use-calculator) | [`src/lib/components/Table.svelte`](https://github.com/digital-land/land-use-calculator/blob/HEAD/src/lib/components/Table.svelte) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [submit](https://github.com/digital-land/submit) | [`src/views/components/table.html`](https://github.com/digital-land/submit/blob/HEAD/src/views/components/table.html) | template partial |  | yes |  |
| [local-plans-explorer](https://github.com/digital-land/local-plans-explorer) | [`src/scss/components/_table.scss`](https://github.com/digital-land/local-plans-explorer/blob/HEAD/src/scss/components/_table.scss) | SCSS/CSS only |  |  |  |

#### hmcts (6, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [react-a11y-test](https://github.com/hmcts/react-a11y-test) | [`src/components/Table.tsx`](https://github.com/hmcts/react-a11y-test/blob/HEAD/src/components/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes | `moj-add-another`, `moj-button-menu`, `moj-date-picker`, `moj-filter`, `moj-identity-bar`, `moj-messages`, `moj-multi-select`, `moj-notification-badge`, `moj-organisation-switcher`, `moj-page-header-actions`, `moj-scrollable-pane`, `moj-search`, `moj-sortable-table`, `moj-sub-navigation`, `moj-ticket-panel`, `moj-timeline` |
| [rpa-jui-webapp](https://github.com/hmcts/rpa-jui-webapp) | [`documentation/components/GovukTableComponent.html`](https://github.com/hmcts/rpa-jui-webapp/blob/HEAD/documentation/components/GovukTableComponent.html) | template partial |  | yes |  |
| [dasi-ai-in-sdlc-aica](https://github.com/hmcts/dasi-ai-in-sdlc-aica) | [`008 - SAAS/Lovable/court-finder-express-main/src/components/ui/table.tsx`](https://github.com/hmcts/dasi-ai-in-sdlc-aica/blob/HEAD/008 - SAAS/Lovable/court-finder-express-main/src/components/ui/table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [rpx-xui-approve-org](https://github.com/hmcts/rpx-xui-approve-org) | [`src/assets/components/table/_table.scss`](https://github.com/hmcts/rpx-xui-approve-org/blob/HEAD/src/assets/components/table/_table.scss) | SCSS/CSS only |  |  |  |
| [rpx-xui-manage-organisations](https://github.com/hmcts/rpx-xui-manage-organisations) | [`src/assets/components/table/_table.scss`](https://github.com/hmcts/rpx-xui-manage-organisations/blob/HEAD/src/assets/components/table/_table.scss) | SCSS/CSS only |  |  |  |
| [transcribe-web](https://github.com/hmcts/transcribe-web) | [`components/ui/table.tsx`](https://github.com/hmcts/transcribe-web/blob/HEAD/components/ui/table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### alphagov (5, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [emergency-alerts-admin](https://github.com/alphagov/emergency-alerts-admin) | [`app/assets/stylesheets/components/table.scss`](https://github.com/alphagov/emergency-alerts-admin/blob/HEAD/app/assets/stylesheets/components/table.scss) | SCSS/CSS only |  | yes |  |
| [datagovuk-explorer](https://github.com/alphagov/datagovuk-explorer) | [`explorer/static/css/components/table.css`](https://github.com/alphagov/datagovuk-explorer/blob/HEAD/explorer/static/css/components/table.css) | SCSS/CSS only |  |  |  |
| [govuk-prototype-kit-docs-investigation](https://github.com/alphagov/govuk-prototype-kit-docs-investigation) | [`src/stylesheets/components/_table.scss`](https://github.com/alphagov/govuk-prototype-kit-docs-investigation/blob/HEAD/src/stylesheets/components/_table.scss) | SCSS/CSS only |  |  |  |
| [signon](https://github.com/alphagov/signon) | [`app/assets/javascripts/components/table.js`](https://github.com/alphagov/signon/blob/HEAD/app/assets/javascripts/components/table.js) | JS/TS component |  |  |  |
| [govuk-content-publisher-prototype](https://github.com/alphagov/govuk-content-publisher-prototype) | [`app/assets/sass/components/_table.scss`](https://github.com/alphagov/govuk-content-publisher-prototype/blob/HEAD/app/assets/sass/components/_table.scss) | SCSS/CSS only | yes | yes |  |

#### LBHackney-IT (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbh-housing-register](https://github.com/LBHackney-IT/lbh-housing-register) | [`components/content/table.tsx`](https://github.com/LBHackney-IT/lbh-housing-register/blob/HEAD/components/content/table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [mtfh-frontend-common](https://github.com/LBHackney-IT/mtfh-frontend-common) | [`lib/components/table/table.tsx`](https://github.com/LBHackney-IT/mtfh-frontend-common/blob/HEAD/lib/components/table/table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [adms-frontend](https://github.com/LBHackney-IT/adms-frontend) | [`components/ui/table.tsx`](https://github.com/LBHackney-IT/adms-frontend/blob/HEAD/components/ui/table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [report-a-defect](https://github.com/LBHackney-IT/report-a-defect) | [`app/assets/stylesheets/components/tables.scss`](https://github.com/LBHackney-IT/report-a-defect/blob/HEAD/app/assets/stylesheets/components/tables.scss) | SCSS/CSS only |  |  |  |

#### SkillsFundingAgency (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/das/sass/components/table/_table.scss`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/das/sass/components/table/_table.scss) | SCSS/CSS only |  | yes |  |
| [tl-matching](https://github.com/SkillsFundingAgency/tl-matching) | [`src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/sass/components/_table.scss`](https://github.com/SkillsFundingAgency/tl-matching/blob/HEAD/src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/sass/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [das-campaigns-prototype](https://github.com/SkillsFundingAgency/das-campaigns-prototype) | [`src/campaign/sass/components/_table.scss`](https://github.com/SkillsFundingAgency/das-campaigns-prototype/blob/HEAD/src/campaign/sass/components/_table.scss) | SCSS/CSS only |  |  |  |
| [das-epao-fireitup](https://github.com/SkillsFundingAgency/das-epao-fireitup) | [`old/src/campaign/sass/components/_table.scss`](https://github.com/SkillsFundingAgency/das-epao-fireitup/blob/HEAD/old/src/campaign/sass/components/_table.scss) | SCSS/CSS only |  |  |  |

#### NHSDigital (4, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nhsuk-frontend-jinja](https://github.com/NHSDigital/nhsuk-frontend-jinja) | [`nhsuk_frontend_jinja/templates/nhsuk/components/tables/macro.jinja`](https://github.com/NHSDigital/nhsuk-frontend-jinja/blob/HEAD/nhsuk_frontend_jinja/templates/nhsuk/components/tables/macro.jinja) | Nunjucks macro |  |  | `nhsuk-action-link`, `nhsuk-caption`, `nhsuk-card`, `nhsuk-code`, `nhsuk-contents-list` |
| [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) | [`src/components/content-presentation/table/Table.tsx`](https://github.com/NHSDigital/nhsuk-react-components/blob/HEAD/src/components/content-presentation/table/Table.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `nhsuk-do-dont-list`, `nhsuk-hero` |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) | [`app/assets/sass/components/_table.scss`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/sass/components/_table.scss) | SCSS/CSS only |  |  | `nhsuk-link` |
| [manage-vaccinations-in-schools-prototype](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype) | [`app/assets/stylesheets/components/_tables.scss`](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype/blob/HEAD/app/assets/stylesheets/components/_tables.scss) | SCSS/CSS only | yes |  |  |

#### alan-turing-institute (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bias-cards](https://github.com/alan-turing-institute/bias-cards) | [`components/ui/table.tsx`](https://github.com/alan-turing-institute/bias-cards/blob/HEAD/components/ui/table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [tea-techniques](https://github.com/alan-turing-institute/tea-techniques) | [`components/ui/table.tsx`](https://github.com/alan-turing-institute/tea-techniques/blob/HEAD/components/ui/table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [trustworthiness-framework](https://github.com/alan-turing-institute/trustworthiness-framework) | [`client/src/components/ui/table.tsx`](https://github.com/alan-turing-institute/trustworthiness-framework/blob/HEAD/client/src/components/ui/table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### CPS-Innovation (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Case-Management-Register-a-Case](https://github.com/CPS-Innovation/Case-Management-Register-a-Case) | [`src/ui-spa/src/components/govuk/Table.tsx`](https://github.com/CPS-Innovation/Case-Management-Register-a-Case/blob/HEAD/src/ui-spa/src/components/govuk/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [Large-and-Complex-Cases](https://github.com/CPS-Innovation/Large-and-Complex-Cases) | [`ui-spa/src/components/govuk/Table.tsx`](https://github.com/CPS-Innovation/Large-and-Complex-Cases/blob/HEAD/ui-spa/src/components/govuk/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [Polaris](https://github.com/CPS-Innovation/Polaris) | [`polaris-ui/src/app/common/presentation/components/Table.tsx`](https://github.com/CPS-Innovation/Polaris/blob/HEAD/polaris-ui/src/app/common/presentation/components/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### essexcountycouncil (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [essex-county-council-digital-manual](https://github.com/essexcountycouncil/essex-county-council-digital-manual) | [`_sass/core/components/_table.scss`](https://github.com/essexcountycouncil/essex-county-council-digital-manual/blob/HEAD/_sass/core/components/_table.scss) | SCSS/CSS only |  |  |  |
| [send-lgdrupal](https://github.com/essexcountycouncil/send-lgdrupal) | [`web/core/themes/bartik/css/components/table.css`](https://github.com/essexcountycouncil/send-lgdrupal/blob/HEAD/web/core/themes/bartik/css/components/table.css) | SCSS/CSS only |  |  |  |
| [stopswapgo.co.uk](https://github.com/essexcountycouncil/stopswapgo.co.uk) | [`src/components/table/_table.scss`](https://github.com/essexcountycouncil/stopswapgo.co.uk/blob/HEAD/src/components/table/_table.scss) | SCSS/CSS only |  |  |  |

#### nhsbsa (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [mccd-service-showcase](https://github.com/nhsbsa/mccd-service-showcase) | [`src/components/Table.tsx`](https://github.com/nhsbsa/mccd-service-showcase/blob/HEAD/src/components/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes | `gem-c-document-list`, `gem-c-heading` |
| [nhsbsa-asc-tfrs-showcase](https://github.com/nhsbsa/nhsbsa-asc-tfrs-showcase) | [`src/components/Table.tsx`](https://github.com/nhsbsa/nhsbsa-asc-tfrs-showcase/blob/HEAD/src/components/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes | `gem-c-document-list`, `gem-c-heading` |
| [nhsuk-frontend](https://github.com/nhsbsa/nhsuk-frontend) | [`packages/components/tables/_tables.scss`](https://github.com/nhsbsa/nhsuk-frontend/blob/HEAD/packages/components/tables/_tables.scss) | SCSS/CSS only |  |  |  |

#### ONSdigital (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/ONSdigital/design-system) | [`src/components/table/_table.scss`](https://github.com/ONSdigital/design-system/blob/HEAD/src/components/table/_table.scss) | SCSS/CSS only |  |  |  |
| [explore-local-statistics-app](https://github.com/ONSdigital/explore-local-statistics-app) | [`src/lib/components/charts/Table.svelte`](https://github.com/ONSdigital/explore-local-statistics-app/blob/HEAD/src/lib/components/charts/Table.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [svelte-components](https://github.com/ONSdigital/svelte-components) | [`src/lib/components/Table/Table.svelte`](https://github.com/ONSdigital/svelte-components/blob/HEAD/src/lib/components/Table/Table.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ukgov-equality-hub (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ethnicity-facts-and-figures](https://github.com/ukgov-equality-hub/ethnicity-facts-and-figures) | [`application/src/sass/components/_table.scss`](https://github.com/ukgov-equality-hub/ethnicity-facts-and-figures/blob/HEAD/application/src/sass/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [gender-pay-gap](https://github.com/ukgov-equality-hub/gender-pay-gap) | [`GenderPayGap.WebUI/wwwroot/styles/components/_table.scss`](https://github.com/ukgov-equality-hub/gender-pay-gap/blob/HEAD/GenderPayGap.WebUI/wwwroot/styles/components/_table.scss) | SCSS/CSS only |  |  |  |
| [social-mobility-commission-website](https://github.com/ukgov-equality-hub/social-mobility-commission-website) | [`web/app/themes/smc/App_Themes/main/foundation-sites/scss/components/_table.scss`](https://github.com/ukgov-equality-hub/social-mobility-commission-website/blob/HEAD/web/app/themes/smc/App_Themes/main/foundation-sites/scss/components/_table.scss) | SCSS/CSS only |  |  |  |

#### UKHomeOffice (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [frontend-toolkit](https://github.com/UKHomeOffice/frontend-toolkit) | [`assets/styles/components/_table.scss`](https://github.com/UKHomeOffice/frontend-toolkit/blob/HEAD/assets/styles/components/_table.scss) | SCSS/CSS only |  | yes |  |
| [GovUK-Design-System-React](https://github.com/UKHomeOffice/GovUK-Design-System-React) | [`components/table/src/Table.tsx`](https://github.com/UKHomeOffice/GovUK-Design-System-React/blob/HEAD/components/table/src/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [hof-forms-waf](https://github.com/UKHomeOffice/hof-forms-waf) | [`admin-ui/src/components/ui/table.tsx`](https://github.com/UKHomeOffice/hof-forms-waf/blob/HEAD/admin-ui/src/components/ui/table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHSA-Internal (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [data-dashboard-frontend](https://github.com/UKHSA-Internal/data-dashboard-frontend) | [`src/app/components/ui/ukhsa/Table/Table.tsx`](https://github.com/UKHSA-Internal/data-dashboard-frontend/blob/HEAD/src/app/components/ui/ukhsa/Table/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [pre-entry-tb-screening-app](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app) | [`pets-ui/src/components/table/table.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app/blob/HEAD/pets-ui/src/components/table/table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [pre-entry-tb-screening-dicom-viewer](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer) | [`platform/ui/src/components/Table/Table.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer/blob/HEAD/platform/ui/src/components/Table/Table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKGovernmentBEIS (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [esos](https://github.com/UKGovernmentBEIS/esos) | [`uk-esos-app-web/projects/govuk-components/src/styles/components/table/_index.scss`](https://github.com/UKGovernmentBEIS/esos/blob/HEAD/uk-esos-app-web/projects/govuk-components/src/styles/components/table/_index.scss) | SCSS/CSS only |  | yes |  |
| [rpr-alpha-phase-prototype1](https://github.com/UKGovernmentBEIS/rpr-alpha-phase-prototype1) | [`src/components/gds-table/gds-table.tsx`](https://github.com/UKGovernmentBEIS/rpr-alpha-phase-prototype1/blob/HEAD/src/components/gds-table/gds-table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [beis-ets-prototype](https://github.com/UKGovernmentBEIS/beis-ets-prototype) | [`app/components/table/_table.scss`](https://github.com/UKGovernmentBEIS/beis-ets-prototype/blob/HEAD/app/components/table/_table.scss) | SCSS/CSS only | yes |  |  |

#### communitiesuk (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [localai-local-transcribe](https://github.com/communitiesuk/localai-local-transcribe) | [`frontend/components/govuk/table.tsx`](https://github.com/communitiesuk/localai-local-transcribe/blob/HEAD/frontend/components/govuk/table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [mhclg_svelte_component_library](https://github.com/communitiesuk/mhclg_svelte_component_library) | [`src/lib/components/data-vis/table/Table.svelte`](https://github.com/communitiesuk/mhclg_svelte_component_library/blob/HEAD/src/lib/components/data-vis/table/Table.svelte) | UI framework (React/Vue/Svelte lib) |  | yes | `dwp-side-navigation` |

#### department-for-transport-BODS (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bods](https://github.com/department-for-transport-BODS/bods) | [`transit_odp/frontend/assets/sass/components/table/_table.scss`](https://github.com/department-for-transport-BODS/bods/blob/HEAD/transit_odp/frontend/assets/sass/components/table/_table.scss) | SCSS/CSS only |  | yes |  |
| [create-disruptions-data](https://github.com/department-for-transport-BODS/create-disruptions-data) | [`site/components/form/Table.tsx`](https://github.com/department-for-transport-BODS/create-disruptions-data/blob/HEAD/site/components/form/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### dhsc-govuk (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Get-Adult-Social-Care-Data](https://github.com/dhsc-govuk/Get-Adult-Social-Care-Data) | [`gascd_frontend/src/components/tables/table.tsx`](https://github.com/dhsc-govuk/Get-Adult-Social-Care-Data/blob/HEAD/gascd_frontend/src/components/tables/table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes | `x-govuk-masthead` |
| [HealthyBabies](https://github.com/dhsc-govuk/HealthyBabies) | [`client/src/components/Global/Users/List/table.tsx`](https://github.com/dhsc-govuk/HealthyBabies/blob/HEAD/client/src/components/Global/Users/List/table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### InnovateUKGitHub (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [innovation-funding-service-post-award](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award) | [`packages/app/src/ui/components/molecules/Table/Table.tsx`](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award/blob/HEAD/packages/app/src/ui/components/molecules/Table/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [een-webapp](https://github.com/InnovateUKGitHub/een-webapp) | [`drupal/core/themes/bartik/css/components/table.css`](https://github.com/InnovateUKGitHub/een-webapp/blob/HEAD/drupal/core/themes/bartik/css/components/table.css) | SCSS/CSS only |  |  |  |

#### LandRegistry (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [govuk-react-components-library](https://github.com/LandRegistry/govuk-react-components-library) | [`src/components/Table/Table.scss`](https://github.com/LandRegistry/govuk-react-components-library/blob/HEAD/src/components/Table/Table.scss) | SCSS/CSS only |  |  |  |
| [hmlr-design-system](https://github.com/LandRegistry/hmlr-design-system) | [`src/stylesheets/components/_table.scss`](https://github.com/LandRegistry/hmlr-design-system/blob/HEAD/src/stylesheets/components/_table.scss) | SCSS/CSS only |  |  | `gem-c-contents-list` |

#### nice-digital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nice-design-system](https://github.com/nice-digital/nice-design-system) | [`components/nds-table/src/Table.tsx`](https://github.com/nice-digital/nice-design-system/blob/HEAD/components/nds-table/src/Table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [niceorg-client](https://github.com/nice-digital/niceorg-client) | [`src/scss/components/_tables.scss`](https://github.com/nice-digital/niceorg-client/blob/HEAD/src/scss/components/_tables.scss) | SCSS/CSS only |  |  |  |

#### OxfordshireCountyCouncil (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [History-Centre-digital-resources](https://github.com/OxfordshireCountyCouncil/History-Centre-digital-resources) | [`source/occlss/scss/components/table/macro.njk`](https://github.com/OxfordshireCountyCouncil/History-Centre-digital-resources/blob/HEAD/source/occlss/scss/components/table/macro.njk) | Nunjucks macro |  |  |  |
| [occlss](https://github.com/OxfordshireCountyCouncil/occlss) | [`views/components/table/macro.njk`](https://github.com/OxfordshireCountyCouncil/occlss/blob/HEAD/views/components/table/macro.njk) | Nunjucks macro |  |  |  |

#### scottish-government-design-system (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/scottish-government-design-system/design-system) | [`src/components/table/_index.scss`](https://github.com/scottish-government-design-system/design-system/blob/HEAD/src/components/table/_index.scss) | SCSS/CSS only |  |  |  |
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/Table/Table.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/Table/Table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### smbc-digital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [SMBC-Sonic-Brief-Community-Edition](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition) | [`frontend_app/src/components/ui/table.tsx`](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition/blob/HEAD/frontend_app/src/components/ui/table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [stockportgov-design-system](https://github.com/smbc-digital/stockportgov-design-system) | [`src/components/table/_index.scss`](https://github.com/smbc-digital/stockportgov-design-system/blob/HEAD/src/components/table/_index.scss) | SCSS/CSS only |  |  |  |

#### dwp (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [check-what-you-owe](https://github.com/dwp/check-what-you-owe) | [`app/assets/sass/components/_tables.scss`](https://github.com/dwp/check-what-you-owe/blob/HEAD/app/assets/sass/components/_tables.scss) | SCSS/CSS only |  | yes |  |
| [debt-management-service-prototype](https://github.com/dwp/debt-management-service-prototype) | [`app/assets/sass/components/_table.scss`](https://github.com/dwp/debt-management-service-prototype/blob/HEAD/app/assets/sass/components/_table.scss) | SCSS/CSS only | yes | yes |  |

#### britishlibrary (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [examples](https://github.com/britishlibrary/examples) | [`lib/foundation/scss/foundation/components/_tables.scss`](https://github.com/britishlibrary/examples/blob/HEAD/lib/foundation/scss/foundation/components/_tables.scss) | SCSS/CSS only |  |  |  |

#### cabinetoffice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gap-find-apply-web](https://github.com/cabinetoffice/gap-find-apply-web) | [`packages/admin/src/components/table/Table.tsx`](https://github.com/cabinetoffice/gap-find-apply-web/blob/HEAD/packages/admin/src/components/table/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### Civil-Service-Human-Resources (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lpg-services](https://github.com/Civil-Service-Human-Resources/lpg-services) | [`views/assets/styles/components/_tables.scss`](https://github.com/Civil-Service-Human-Resources/lpg-services/blob/HEAD/views/assets/styles/components/_tables.scss) | SCSS/CSS only |  |  |  |

#### defencedigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [moduk-frontend](https://github.com/defencedigital/moduk-frontend) | [`src/nunjucks/moduk/components/table/macro.njk`](https://github.com/defencedigital/moduk-frontend/blob/HEAD/src/nunjucks/moduk/components/table/macro.njk) | Nunjucks macro |  | yes |  |

#### Department-for-Transport-Disruptions (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [create-disruptions-data](https://github.com/Department-for-Transport-Disruptions/create-disruptions-data) | [`site/components/form/Table.tsx`](https://github.com/Department-for-Transport-Disruptions/create-disruptions-data/blob/HEAD/site/components/form/Table.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### dfe-analytical-services (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-api-docs/source/stylesheets/components/_table.scss`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-api-docs/source/stylesheets/components/_table.scss) | SCSS/CSS only |  | yes |  |

#### Digital-Intelligence-Unit (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pinot](https://github.com/Digital-Intelligence-Unit/pinot) | [`pinot-controller/src/main/resources/app/components/Table.tsx`](https://github.com/Digital-Intelligence-Unit/pinot/blob/HEAD/pinot-controller/src/main/resources/app/components/Table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dvsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dvsa-design-system](https://github.com/dvsa/dvsa-design-system) | [`src/stylesheets/components/_table.scss`](https://github.com/dvsa/dvsa-design-system/blob/HEAD/src/stylesheets/components/_table.scss) | SCSS/CSS only |  |  |  |

#### dwpdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [check-what-you-owe](https://github.com/dwpdigital/check-what-you-owe) | [`app/assets/sass/components/_tables.scss`](https://github.com/dwpdigital/check-what-you-owe/blob/HEAD/app/assets/sass/components/_tables.scss) | SCSS/CSS only |  | yes |  |

#### gchq (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [LD-Explorer](https://github.com/gchq/LD-Explorer) | [`src/lib/components/ui/icons/svg/table.svelte`](https://github.com/gchq/LD-Explorer/blob/HEAD/src/lib/components/ui/icons/svg/table.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### hmrc (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [customs-manage-authorities-frontend](https://github.com/hmrc/customs-manage-authorities-frontend) | [`app/assets/stylesheets/components/_table.scss`](https://github.com/hmrc/customs-manage-authorities-frontend/blob/HEAD/app/assets/stylesheets/components/_table.scss) | SCSS/CSS only |  |  |  |

#### i-dot-ai (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-kit](https://github.com/i-dot-ai/design-kit) | [`packages/frontend/src/components/table/_index.scss`](https://github.com/i-dot-ai/design-kit/blob/HEAD/packages/frontend/src/components/table/_index.scss) | SCSS/CSS only |  | yes |  |

#### LondonBoroughSutton (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbs-design-system](https://github.com/LondonBoroughSutton/lbs-design-system) | [`src/stylesheets/components/_table.scss`](https://github.com/LondonBoroughSutton/lbs-design-system/blob/HEAD/src/stylesheets/components/_table.scss) | SCSS/CSS only |  |  |  |

#### RoyalBoroughKingston (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ck-component-library](https://github.com/RoyalBoroughKingston/ck-component-library) | [`src/scss/components/table/_index.scss`](https://github.com/RoyalBoroughKingston/ck-component-library/blob/HEAD/src/scss/components/table/_index.scss) | SCSS/CSS only |  |  |  |

#### SatelliteApplicationsCatapult (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [stac-portal-frontend](https://github.com/SatelliteApplicationsCatapult/stac-portal-frontend) | [`src/components/Table/Table.scss`](https://github.com/SatelliteApplicationsCatapult/stac-portal-frontend/blob/HEAD/src/components/Table/Table.scss) | SCSS/CSS only |  |  |  |

#### ukaea (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [MRFUI](https://github.com/ukaea/MRFUI) | [`src/lib/components/ui/table/table.svelte`](https://github.com/ukaea/MRFUI/blob/HEAD/src/lib/components/ui/table/table.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHO (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [admiralty-design-system](https://github.com/UKHO/admiralty-design-system) | [`packages/core/src/components/table/table.scss`](https://github.com/UKHO/admiralty-design-system/blob/HEAD/packages/core/src/components/table/table.scss) | SCSS/CSS only |  |  |  |

#### defra-design (2, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [plant-exports-prototype](https://github.com/defra-design/plant-exports-prototype) | [`app/assets/sass/components/_table.scss`](https://github.com/defra-design/plant-exports-prototype/blob/HEAD/app/assets/sass/components/_table.scss) | SCSS/CSS only | yes | yes |  |
| [sustainable-development-prototype](https://github.com/defra-design/sustainable-development-prototype) | [`app/assets/sass/components/_table.scss`](https://github.com/defra-design/sustainable-development-prototype/blob/HEAD/app/assets/sass/components/_table.scss) | SCSS/CSS only | yes |  |  |


### sortable-table — 39 repos, 14 orgs (33 production)

Partially covered. MoJ Frontend ships the canonical implementation.

#### ministryofjustice (20, 18 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [digital-prison-services](https://github.com/ministryofjustice/digital-prison-services) | [`sass/components/_sortable-table.scss`](https://github.com/ministryofjustice/digital-prison-services/blob/HEAD/sass/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [hmpps-approved-premises-ui](https://github.com/ministryofjustice/hmpps-approved-premises-ui) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-approved-premises-ui/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-page-header-actions`, `moj-sortable-table` |
| [hmpps-book-secure-move-frontend](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend) | [`common/assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend/blob/HEAD/common/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [hmpps-change-someones-cell](https://github.com/ministryofjustice/hmpps-change-someones-cell) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-change-someones-cell/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-community-payback-ui](https://github.com/ministryofjustice/hmpps-community-payback-ui) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-community-payback-ui/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-digital-prison-services](https://github.com/ministryofjustice/hmpps-digital-prison-services) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-digital-prison-services/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [hmpps-education-employment-ui](https://github.com/ministryofjustice/hmpps-education-employment-ui) | [`assets/sass/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-education-employment-ui/blob/HEAD/assets/sass/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-sub-navigation` |
| [hmpps-external-movements-ui](https://github.com/ministryofjustice/hmpps-external-movements-ui) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-external-movements-ui/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-date-picker` |
| [hmpps-incident-reporting](https://github.com/ministryofjustice/hmpps-incident-reporting) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-incident-reporting/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-scrollable-pane` |
| [hmpps-interventions-ui](https://github.com/ministryofjustice/hmpps-interventions-ui) | [`assets/sass/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-interventions-ui/blob/HEAD/assets/sass/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [hmpps-jobs-board-ui](https://github.com/ministryofjustice/hmpps-jobs-board-ui) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-jobs-board-ui/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-sub-navigation` |
| [hmpps-manage-a-supervision-ui](https://github.com/ministryofjustice/hmpps-manage-a-supervision-ui) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-manage-a-supervision-ui/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [hmpps-manage-people-on-probation-ui](https://github.com/ministryofjustice/hmpps-manage-people-on-probation-ui) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-manage-people-on-probation-ui/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-search` |
| [hmpps-match-learner-record-ui](https://github.com/ministryofjustice/hmpps-match-learner-record-ui) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-match-learner-record-ui/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-search`, `moj-sortable-table` |
| [hmpps-non-associations](https://github.com/ministryofjustice/hmpps-non-associations) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-non-associations/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [hmpps-prison-roll-count](https://github.com/ministryofjustice/hmpps-prison-roll-count) | [`assets/scss/components/_sortable-table.scss`](https://github.com/ministryofjustice/hmpps-prison-roll-count/blob/HEAD/assets/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [laa-court-data-ui](https://github.com/ministryofjustice/laa-court-data-ui) | [`app/assets/stylesheets/components/_sortable_table.scss`](https://github.com/ministryofjustice/laa-court-data-ui/blob/HEAD/app/assets/stylesheets/components/_sortable_table.scss) | SCSS/CSS only |  |  |  |
| [moj-frontend](https://github.com/ministryofjustice/moj-frontend) | [`src/moj/components/sortable-table/_sortable-table.scss`](https://github.com/ministryofjustice/moj-frontend/blob/HEAD/src/moj/components/sortable-table/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [dwf-prototype](https://github.com/ministryofjustice/dwf-prototype) | [`app/assets/sass/components/_sortable-table.scss`](https://github.com/ministryofjustice/dwf-prototype/blob/HEAD/app/assets/sass/components/_sortable-table.scss) | SCSS/CSS only | yes |  | `moj-banner` |
| [legacy-systems-x-product-prototype](https://github.com/ministryofjustice/legacy-systems-x-product-prototype) | [`app/assets/sass/components/_sortable-table.scss`](https://github.com/ministryofjustice/legacy-systems-x-product-prototype/blob/HEAD/app/assets/sass/components/_sortable-table.scss) | SCSS/CSS only | yes |  |  |

#### DEFRA (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ai-sdlc-content-audit](https://github.com/DEFRA/ai-sdlc-content-audit) | [`src/client/stylesheets/components/_sortable-table.scss`](https://github.com/DEFRA/ai-sdlc-content-audit/blob/HEAD/src/client/stylesheets/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [bng-metric-frontend](https://github.com/DEFRA/bng-metric-frontend) | [`src/client/stylesheets/components/_moj-sortable-table.scss`](https://github.com/DEFRA/bng-metric-frontend/blob/HEAD/src/client/stylesheets/components/_moj-sortable-table.scss) | SCSS/CSS only |  |  | `moj-scrollable-pane`, `moj-sortable-table` |
| [digital-waste-tracking-admin-ui](https://github.com/DEFRA/digital-waste-tracking-admin-ui) | [`src/client/stylesheets/components/_sortable-table.scss`](https://github.com/DEFRA/digital-waste-tracking-admin-ui/blob/HEAD/src/client/stylesheets/components/_sortable-table.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-ticket-panel` |

#### CPS-Innovation (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Large-and-Complex-Cases](https://github.com/CPS-Innovation/Large-and-Complex-Cases) | [`ui-spa/src/components/govuk/SortableTable.tsx`](https://github.com/CPS-Innovation/Large-and-Complex-Cases/blob/HEAD/ui-spa/src/components/govuk/SortableTable.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [Managed-Materials-UI](https://github.com/CPS-Innovation/Managed-Materials-UI) | [`materials_ui/src/components/SortableTable/SortableTable.scss`](https://github.com/CPS-Innovation/Managed-Materials-UI/blob/HEAD/materials_ui/src/components/SortableTable/SortableTable.scss) | SCSS/CSS only |  |  |  |

#### department-for-transport-BODS (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [abods](https://github.com/department-for-transport-BODS/abods) | [`frontend/components/table/SortableTable.tsx`](https://github.com/department-for-transport-BODS/abods/blob/HEAD/frontend/components/table/SortableTable.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [create-disruptions-data](https://github.com/department-for-transport-BODS/create-disruptions-data) | [`site/components/form/SortableTable.tsx`](https://github.com/department-for-transport-BODS/create-disruptions-data/blob/HEAD/site/components/form/SortableTable.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### DFE-Digital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [apply-for-teacher-training-statistics](https://github.com/DFE-Digital/apply-for-teacher-training-statistics) | [`app/assets/sass/components/_sortable-table.scss`](https://github.com/DFE-Digital/apply-for-teacher-training-statistics/blob/HEAD/app/assets/sass/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |
| [d365-design-manual](https://github.com/DFE-Digital/d365-design-manual) | [`app/scss/components/_sortable-table.scss`](https://github.com/DFE-Digital/d365-design-manual/blob/HEAD/app/scss/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |

#### defra-design (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [defra-frontend](https://github.com/defra-design/defra-frontend) | [`packages/defra-frontend/src/defra/components/sortable-table/_index.scss`](https://github.com/defra-design/defra-frontend/blob/HEAD/packages/defra-frontend/src/defra/components/sortable-table/_index.scss) | SCSS/CSS only |  |  |  |

#### Department-for-Transport-Disruptions (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [create-disruptions-data](https://github.com/Department-for-Transport-Disruptions/create-disruptions-data) | [`site/components/form/SortableTable.tsx`](https://github.com/Department-for-Transport-Disruptions/create-disruptions-data/blob/HEAD/site/components/form/SortableTable.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### digital-land (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [config-manager](https://github.com/digital-land/config-manager) | [`src/scss/components/_moj-sortable-table.scss`](https://github.com/digital-land/config-manager/blob/HEAD/src/scss/components/_moj-sortable-table.scss) | SCSS/CSS only |  |  |  |

#### guidance-guarantee-programme (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [telephone_appointment_planner](https://github.com/guidance-guarantee-programme/telephone_appointment_planner) | [`app/assets/stylesheets/components/_sortable-table.scss`](https://github.com/guidance-guarantee-programme/telephone_appointment_planner/blob/HEAD/app/assets/stylesheets/components/_sortable-table.scss) | SCSS/CSS only |  |  |  |

#### hmcts (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [react-a11y-test](https://github.com/hmcts/react-a11y-test) | [`src/components/MojSortableTable.tsx`](https://github.com/hmcts/react-a11y-test/blob/HEAD/src/components/MojSortableTable.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `moj-add-another`, `moj-button-menu`, `moj-date-picker`, `moj-filter`, `moj-identity-bar`, `moj-messages`, `moj-multi-select`, `moj-notification-badge`, `moj-organisation-switcher`, `moj-page-header-actions`, `moj-scrollable-pane`, `moj-search`, `moj-sortable-table`, `moj-sub-navigation`, `moj-ticket-panel`, `moj-timeline` |

#### UKGovernmentBEIS (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dsit-dvs-register](https://github.com/UKGovernmentBEIS/dsit-dvs-register) | [`DVSRegister/wwwroot/css/components/sortable-table.scss`](https://github.com/UKGovernmentBEIS/dsit-dvs-register/blob/HEAD/DVSRegister/wwwroot/css/components/sortable-table.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |

#### SkillsFundingAgency (2, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-add-and-approve-prototype](https://github.com/SkillsFundingAgency/das-add-and-approve-prototype) | [`app/assets/sass/components/_sortable-table.scss`](https://github.com/SkillsFundingAgency/das-add-and-approve-prototype/blob/HEAD/app/assets/sass/components/_sortable-table.scss) | SCSS/CSS only | yes |  |  |
| [das-pgl-prototype](https://github.com/SkillsFundingAgency/das-pgl-prototype) | [`app/assets/sass/components/_sortable-table.scss`](https://github.com/SkillsFundingAgency/das-pgl-prototype/blob/HEAD/app/assets/sass/components/_sortable-table.scss) | SCSS/CSS only | yes |  |  |

#### dvsa (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cvs-apply-for-vehicle-test](https://github.com/dvsa/cvs-apply-for-vehicle-test) | [`app/assets/javascripts/components/sortable-table/sortable-table.js`](https://github.com/dvsa/cvs-apply-for-vehicle-test/blob/HEAD/app/assets/javascripts/components/sortable-table/sortable-table.js) | JS/TS component | yes |  |  |

#### NHSDigital (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [prototype-eps-suppliertool](https://github.com/NHSDigital/prototype-eps-suppliertool) | [`app/assets/sass/components/_sortable-table.scss`](https://github.com/NHSDigital/prototype-eps-suppliertool/blob/HEAD/app/assets/sass/components/_sortable-table.scss) | SCSS/CSS only | yes |  |  |


### data-table — 13 repos, 11 orgs (13 production)

#### digital-land (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [config-manager](https://github.com/digital-land/config-manager) | [`application/templates/datamanager/components/data-tables.html`](https://github.com/digital-land/config-manager/blob/HEAD/application/templates/datamanager/components/data-tables.html) | template partial |  |  |  |
| [digital-land-frontend](https://github.com/digital-land/digital-land-frontend) | [`digital_land_frontend/templates/components/data-table/_data-table.scss`](https://github.com/digital-land/digital-land-frontend/blob/HEAD/digital_land_frontend/templates/components/data-table/_data-table.scss) | SCSS/CSS only |  |  |  |
| [digital-land.info](https://github.com/digital-land/digital-land.info) | [`application/templates/components/data-table/macro.jinja`](https://github.com/digital-land/digital-land.info/blob/HEAD/application/templates/components/data-table/macro.jinja) | Nunjucks macro |  |  |  |

#### alphagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [learningtime-sem2-RA-Police-API](https://github.com/alphagov/learningtime-sem2-RA-Police-API) | [`src/client/src/components/DataTable.tsx`](https://github.com/alphagov/learningtime-sem2-RA-Police-API/blob/HEAD/src/client/src/components/DataTable.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### DFE-Digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [apply-for-teacher-training](https://github.com/DFE-Digital/apply-for-teacher-training) | [`app/components/publications/data_table_component.rb`](https://github.com/DFE-Digital/apply-for-teacher-training/blob/HEAD/app/components/publications/data_table_component.rb) | Rails ViewComponent |  |  |  |

#### GSTT-CSC (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [NHSFCAI](https://github.com/GSTT-CSC/NHSFCAI) | [`_sass/components/_data-table.scss`](https://github.com/GSTT-CSC/NHSFCAI/blob/HEAD/_sass/components/_data-table.scss) | SCSS/CSS only |  |  |  |

#### hmcts (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [transcribe-web](https://github.com/hmcts/transcribe-web) | [`components/meetings-table/data-table.tsx`](https://github.com/hmcts/transcribe-web/blob/HEAD/components/meetings-table/data-table.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### i-dot-ai (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [consult](https://github.com/i-dot-ai/consult) | [`frontend/src/components/DataTable/DataTable.svelte`](https://github.com/i-dot-ai/consult/blob/HEAD/frontend/src/components/DataTable/DataTable.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ministryofjustice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [laa-review-criminal-legal-aid](https://github.com/ministryofjustice/laa-review-criminal-legal-aid) | [`app/components/data_table_component.rb`](https://github.com/ministryofjustice/laa-review-criminal-legal-aid/blob/HEAD/app/components/data_table_component.rb) | Rails ViewComponent |  |  | `moj-alert`, `moj-sub-navigation` |

#### ukaea (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [MRFUI](https://github.com/ukaea/MRFUI) | [`src/lib/components/data-table.svelte`](https://github.com/ukaea/MRFUI/blob/HEAD/src/lib/components/data-table.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [smc-son](https://github.com/ukgov-equality-hub/smc-son) | [`son/templates/components/data-table.html`](https://github.com/ukgov-equality-hub/smc-son/blob/HEAD/son/templates/components/data-table.html) | template partial |  |  |  |

#### UKHomeOffice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hocs-frontend](https://github.com/UKHomeOffice/hocs-frontend) | [`src/shared/reports/components/dataTable.tsx`](https://github.com/UKHomeOffice/hocs-frontend/blob/HEAD/src/shared/reports/components/dataTable.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKSpaceAgency (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [monitor-space-hazards](https://github.com/UKSpaceAgency/monitor-space-hazards) | [`src/components/DataTable.tsx`](https://github.com/UKSpaceAgency/monitor-space-hazards/blob/HEAD/src/components/DataTable.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |


### responsive-table — 12 repos, 6 orgs (7 production)

#### nhsbsa (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [medical-examiner-service](https://github.com/nhsbsa/medical-examiner-service) | [`app/assets/sass/components/_responsive-table.scss`](https://github.com/nhsbsa/medical-examiner-service/blob/HEAD/app/assets/sass/components/_responsive-table.scss) | SCSS/CSS only |  |  |  |
| [nhs-pension](https://github.com/nhsbsa/nhs-pension) | [`app/v6/assets/sass/components/_responsive-table.scss`](https://github.com/nhsbsa/nhs-pension/blob/HEAD/app/v6/assets/sass/components/_responsive-table.scss) | SCSS/CSS only |  |  |  |
| [nhs-pension-prototype-swoosh](https://github.com/nhsbsa/nhs-pension-prototype-swoosh) | [`app/v6/assets/sass/components/_responsive-table.scss`](https://github.com/nhsbsa/nhs-pension-prototype-swoosh/blob/HEAD/app/v6/assets/sass/components/_responsive-table.scss) | SCSS/CSS only | yes |  |  |

#### mcagov (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [droits](https://github.com/mcagov/droits) | [`webapp/app/scss/components/responsive-table.scss`](https://github.com/mcagov/droits/blob/HEAD/webapp/app/scss/components/responsive-table.scss) | SCSS/CSS only |  |  |  |
| [mca-droits-beta-fe](https://github.com/mcagov/mca-droits-beta-fe) | [`app/scss/components/responsive-table.scss`](https://github.com/mcagov/mca-droits-beta-fe/blob/HEAD/app/scss/components/responsive-table.scss) | SCSS/CSS only |  |  |  |

#### dvsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ftts-booking-app](https://github.com/dvsa/ftts-booking-app) | [`ftts-frontend-assets/src/sass/components/_responsive-table.scss`](https://github.com/dvsa/ftts-booking-app/blob/HEAD/ftts-frontend-assets/src/sass/components/_responsive-table.scss) | SCSS/CSS only |  |  |  |

#### hmrc (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [api-documentation-frontend](https://github.com/hmrc/api-documentation-frontend) | [`app/assets/css/components/responsive-tables.scss`](https://github.com/hmrc/api-documentation-frontend/blob/HEAD/app/assets/css/components/responsive-tables.scss) | SCSS/CSS only |  |  |  |

#### ministryofjustice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmpps-manage-a-supervision-ui](https://github.com/ministryofjustice/hmpps-manage-a-supervision-ui) | [`assets/scss/components/_responsive-table.scss`](https://github.com/ministryofjustice/hmpps-manage-a-supervision-ui/blob/HEAD/assets/scss/components/_responsive-table.scss) | SCSS/CSS only |  |  |  |

#### defra-design (4, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [echo-certifier-prototype](https://github.com/defra-design/echo-certifier-prototype) | [`app/assets/sass/components/_responsive-tables.scss`](https://github.com/defra-design/echo-certifier-prototype/blob/HEAD/app/assets/sass/components/_responsive-tables.scss) | SCSS/CSS only | yes |  |  |
| [echo-prototype](https://github.com/defra-design/echo-prototype) | [`app/assets/sass/components/_responsive-tables.scss`](https://github.com/defra-design/echo-prototype/blob/HEAD/app/assets/sass/components/_responsive-tables.scss) | SCSS/CSS only | yes |  | `gem-c-attachment`, `gem-c-contents-list`, `gem-c-contextual-footer`, `gem-c-contextual-sidebar`, `gem-c-document-list`, `gem-c-error-alert`, `gem-c-govspeak`, `gem-c-govspeak-html-publication`, `gem-c-heading`, `gem-c-image-card`, `gem-c-inverse-header`, `gem-c-lead-paragraph`, `gem-c-metadata`, `gem-c-modal-dialogue`, `gem-c-notice`, `gem-c-organisation-logo`, `gem-c-related-navigation`, `gem-c-search`, `gem-c-subscription-links`, `gem-c-success-alert` |
| [etrade-prototype](https://github.com/defra-design/etrade-prototype) | [`app/assets/sass/components/_responsive-tables.scss`](https://github.com/defra-design/etrade-prototype/blob/HEAD/app/assets/sass/components/_responsive-tables.scss) | SCSS/CSS only | yes |  | `moj-sortable-table` |
| [plant-exports-prototype](https://github.com/defra-design/plant-exports-prototype) | [`app/assets/sass/components/_responsive-tables.scss`](https://github.com/defra-design/plant-exports-prototype/blob/HEAD/app/assets/sass/components/_responsive-tables.scss) | SCSS/CSS only | yes |  |  |

## Adjacent work

Related clusters not included here: sort-options, options-table, summary-table, results-table. Filtering of tables overlaps the [search drill-down](./search.md) (moj-filter, moj-multi-select).
