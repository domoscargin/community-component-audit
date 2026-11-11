# Buttons: service repo drill-down

Generated 2026-11-11 from the audit snapshot of 2026-11-04 ([clusters.json](../clusters.json)) combined with class usage data ([class-usage.json](../class-usage.json)). See [report.md](../report.md) for methodology.

Button is the highest-scoring "already in GOV.UK Frontend" component (51.9): 212 repos touch buttons and 92 extend ours. The sub-clusters show what teams build on top: groups, submit wrappers, toggles and start buttons.

Each repo appears once per cluster, with a link to the file the audit matched. "Extends GOV.UK" means the implementation builds on or imports the GOV.UK Frontend component rather than being written from scratch. The "Community classes used" column lists *all* community design system classes detected in that repo (any component) — repos consuming another organisation's component rather than, or as well as, building their own. "Orgs" counts unique GitHub organisations.

Caveats: detection is filename/class-name based, so some hits may be false positives, and one hit per repo means the audit shows *an* example file, not every instance. Class usage and component detection are independent scans: a repo can use a community class without having its own matching file, and vice versa.

## At a glance

| Cluster | Status | Score | Repos (production / prototype) | Orgs | Extend GOV.UK |
|---|---|---|---|---|---|
| button (base) | in GOV.UK Frontend | 51.9 | 212 (193 / 19) | 65 | 92 |
| button-group | not in GOV.UK Frontend | 25.0 | 15 (15 / 0) | 10 |  |
| submit-button | not in GOV.UK Frontend | 26.6 | 5 (5 / 0) | 5 |  |
| toggle-button | not in GOV.UK Frontend | 24.4 | 3 (3 / 0) | 3 |  |
| start-button | not in GOV.UK Frontend | 23.5 | 3 (3 / 0) | 3 |  |

## Community class adoption

Repos using another design system's classes. These are *consumers* of a community component — evidence of which existing implementation teams reach for.

| Class | Source design system | Repos | Orgs | Production | Prototypes |
|---|---|---|---|---|---|
| `moj-button-menu` | moj-frontend | 19 | 6 | 12 | 7 |
| `gem-c-single-page-notification-button` | govuk-publishing-components | 2 | 1 | 2 | 0 |

**2 repos both consume a community class and have their own implementation** in the clusters below; **19 consume a community class with no matching own implementation detected**.

<details><summary>Consumers without their own implementation (19 repos, 7 orgs)</summary>

- **communitiesuk**: [xgovuk-flask-admin](https://github.com/communitiesuk/xgovuk-flask-admin) (`moj-button-menu`)
- **defra-design**: [fcp-animal-health](https://github.com/defra-design/fcp-animal-health) (`gem-c-single-page-notification-button`), [Import-risk-categorisation](https://github.com/defra-design/Import-risk-categorisation) (`gem-c-single-page-notification-button`)
- **DFE-Digital**: [check-free-school-meals-eligibility-admin](https://github.com/DFE-Digital/check-free-school-meals-eligibility-admin) (`moj-button-menu`), [DfE-School-Account-Alpha](https://github.com/DFE-Digital/DfE-School-Account-Alpha) (`moj-button-menu`), [ghbs-school-collab](https://github.com/DFE-Digital/ghbs-school-collab) (`moj-button-menu`)
- **dwp**: [awacs](https://github.com/dwp/awacs) (`moj-button-menu`), [cms-enforcement-prototype](https://github.com/dwp/cms-enforcement-prototype) (proto) (`moj-button-menu`), [phoenix-service](https://github.com/dwp/phoenix-service) (`moj-button-menu`), [suspense-investigation](https://github.com/dwp/suspense-investigation) (`moj-button-menu`), [workplace-subsidy-prototype](https://github.com/dwp/workplace-subsidy-prototype) (proto) (`moj-button-menu`)
- **hmcts**: [appreg-frontend](https://github.com/hmcts/appreg-frontend) (`moj-button-menu`), [pip-frontend](https://github.com/hmcts/pip-frontend) (`moj-button-menu`)
- **ministryofjustice**: [accredited-programmes-prototype](https://github.com/ministryofjustice/accredited-programmes-prototype) (proto) (`moj-button-menu`), [approved-premises-prototype](https://github.com/ministryofjustice/approved-premises-prototype) (proto) (`moj-button-menu`), [hmpps-sentence-plan-prototype](https://github.com/ministryofjustice/hmpps-sentence-plan-prototype) (proto) (`moj-button-menu`), [hmpps-temporary-accommodation-prototype](https://github.com/ministryofjustice/hmpps-temporary-accommodation-prototype) (proto) (`moj-button-menu`), [opg-use-an-lpa](https://github.com/ministryofjustice/opg-use-an-lpa) (`moj-button-menu`)
- **nhsbsa**: [nhsbsa-asc-tfrs](https://github.com/nhsbsa/nhsbsa-asc-tfrs) (`moj-button-menu`)

</details>

## Repos by cluster and organisation

### button (base) — 212 repos, 65 orgs (193 production)

In GOV.UK Frontend — the "Extends GOV.UK" column is the interesting one here.

#### ministryofjustice (20, 18 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bichard7-next-core](https://github.com/ministryofjustice/bichard7-next-core) | [`packages/ui/src/components/Buttons/Button.tsx`](https://github.com/ministryofjustice/bichard7-next-core/blob/HEAD/packages/ui/src/components/Buttons/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [calculate-release-dates](https://github.com/ministryofjustice/calculate-release-dates) | [`assets/scss/components/_buttons.scss`](https://github.com/ministryofjustice/calculate-release-dates/blob/HEAD/assets/scss/components/_buttons.scss) | SCSS/CSS only |  | yes |  |
| [create-and-vary-a-licence](https://github.com/ministryofjustice/create-and-vary-a-licence) | [`assets/sass/components/_link-button.scss`](https://github.com/ministryofjustice/create-and-vary-a-licence/blob/HEAD/assets/sass/components/_link-button.scss) | SCSS/CSS only |  | yes | `moj-search`, `moj-sortable-table`, `moj-sub-navigation` |
| [digital-prison-services](https://github.com/ministryofjustice/digital-prison-services) | [`sass/components/_buttons.scss`](https://github.com/ministryofjustice/digital-prison-services/blob/HEAD/sass/components/_buttons.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-book-a-video-link-ui](https://github.com/ministryofjustice/hmpps-book-a-video-link-ui) | [`assets/scss/components/_button.scss`](https://github.com/ministryofjustice/hmpps-book-a-video-link-ui/blob/HEAD/assets/scss/components/_button.scss) | SCSS/CSS only |  | yes | `moj-notification-badge`, `moj-sortable-table` |
| [hmpps-incentives-ui](https://github.com/ministryofjustice/hmpps-incentives-ui) | [`assets/scss/components/_button.scss`](https://github.com/ministryofjustice/hmpps-incentives-ui/blob/HEAD/assets/scss/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-interventions-ui](https://github.com/ministryofjustice/hmpps-interventions-ui) | [`assets/sass/components/_button-link.scss`](https://github.com/ministryofjustice/hmpps-interventions-ui/blob/HEAD/assets/sass/components/_button-link.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-manage-offences](https://github.com/ministryofjustice/hmpps-manage-offences) | [`assets/scss/components/_buttons.scss`](https://github.com/ministryofjustice/hmpps-manage-offences/blob/HEAD/assets/scss/components/_buttons.scss) | SCSS/CSS only |  | yes | `gem-c-search` |
| [hmpps-manage-online-check-ins-ui](https://github.com/ministryofjustice/hmpps-manage-online-check-ins-ui) | [`assets/scss/components/_link-button.scss`](https://github.com/ministryofjustice/hmpps-manage-online-check-ins-ui/blob/HEAD/assets/scss/components/_link-button.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-non-associations](https://github.com/ministryofjustice/hmpps-non-associations) | [`assets/scss/components/_button.scss`](https://github.com/ministryofjustice/hmpps-non-associations/blob/HEAD/assets/scss/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-strengths-based-needs-assessments-ui](https://github.com/ministryofjustice/hmpps-strengths-based-needs-assessments-ui) | [`assets/scss/components/_button.scss`](https://github.com/ministryofjustice/hmpps-strengths-based-needs-assessments-ui/blob/HEAD/assets/scss/components/_button.scss) | SCSS/CSS only |  | yes | `gem-c-modal-dialogue`, `moj-side-navigation` |
| [hmpps-video-conference-schedule-ui](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui) | [`assets/scss/components/_button.scss`](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui/blob/HEAD/assets/scss/components/_button.scss) | SCSS/CSS only |  | yes | `moj-action-bar`, `moj-filter`, `moj-sortable-table` |
| [laa-spring-boot-ui-template](https://github.com/ministryofjustice/laa-spring-boot-ui-template) | [`src/main/resources/templates/fragments/components/button.html`](https://github.com/ministryofjustice/laa-spring-boot-ui-template/blob/HEAD/src/main/resources/templates/fragments/components/button.html) | template partial |  | yes |  |
| [serve-opg](https://github.com/ministryofjustice/serve-opg) | [`serve-web/assets/css/govuk-extension/components/_button.scss`](https://github.com/ministryofjustice/serve-opg/blob/HEAD/serve-web/assets/css/govuk-extension/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-arns-assessment-platform-ui](https://github.com/ministryofjustice/hmpps-arns-assessment-platform-ui) | [`server/forms/sentence-plan/components/button-as-link/buttonAsLink.tsx`](https://github.com/ministryofjustice/hmpps-arns-assessment-platform-ui/blob/HEAD/server/forms/sentence-plan/components/button-as-link/buttonAsLink.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `moj-page-header-actions` |
| [hmpps-electronic-monitoring-crime-matching-ui](https://github.com/ministryofjustice/hmpps-electronic-monitoring-crime-matching-ui) | [`assets/scss/components/_button.scss`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-crime-matching-ui/blob/HEAD/assets/scss/components/_button.scss) | SCSS/CSS only |  |  |  |
| [justice](https://github.com/ministryofjustice/justice) | [`src/components/button/_button.scss`](https://github.com/ministryofjustice/justice/blob/HEAD/src/components/button/_button.scss) | SCSS/CSS only |  |  |  |
| [prepare-a-case](https://github.com/ministryofjustice/prepare-a-case) | [`server/views/components/button/macro.njk`](https://github.com/ministryofjustice/prepare-a-case/blob/HEAD/server/views/components/button/macro.njk) | Nunjucks macro |  |  | `moj-badge` |
| [hmpps-prepare-a-case-prototype](https://github.com/ministryofjustice/hmpps-prepare-a-case-prototype) | [`app/assets/sass/components/_button.scss`](https://github.com/ministryofjustice/hmpps-prepare-a-case-prototype/blob/HEAD/app/assets/sass/components/_button.scss) | SCSS/CSS only | yes | yes | `moj-search`, `moj-search-toggle`, `moj-sub-navigation`, `moj-timeline` |
| [mpc-prototype](https://github.com/ministryofjustice/mpc-prototype) | [`app/assets/sass/components/_button.scss`](https://github.com/ministryofjustice/mpc-prototype/blob/HEAD/app/assets/sass/components/_button.scss) | SCSS/CSS only | yes | yes | `moj-action-bar`, `moj-add-another`, `moj-alert`, `moj-badge`, `moj-banner`, `moj-button-menu`, `moj-filter`, `moj-identity-bar`, `moj-multi-file-upload`, `moj-notification-badge`, `moj-page-header-actions`, `moj-progress-bar`, `moj-scrollable-pane`, `moj-search`, `moj-search-toggle`, `moj-side-navigation`, `moj-sub-navigation`, `moj-timeline` |

#### DEFRA (16, 15 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [aice-triage-frontend](https://github.com/DEFRA/aice-triage-frontend) | [`src/client/stylesheets/components/_defra-button.scss`](https://github.com/DEFRA/aice-triage-frontend/blob/HEAD/src/client/stylesheets/components/_defra-button.scss) | SCSS/CSS only |  | yes |  |
| [aqie-dc-admin-frontend](https://github.com/DEFRA/aqie-dc-admin-frontend) | [`src/client/stylesheets/components/link-button/_link-button.scss`](https://github.com/DEFRA/aqie-dc-admin-frontend/blob/HEAD/src/client/stylesheets/components/link-button/_link-button.scss) | SCSS/CSS only |  | yes |  |
| [aqie-prtr-frontend](https://github.com/DEFRA/aqie-prtr-frontend) | [`src/client/stylesheets/components/_button.scss`](https://github.com/DEFRA/aqie-prtr-frontend/blob/HEAD/src/client/stylesheets/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [cdp-portal-frontend](https://github.com/DEFRA/cdp-portal-frontend) | [`src/server/common/components/button/_button.scss`](https://github.com/DEFRA/cdp-portal-frontend/blob/HEAD/src/server/common/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [defra-map](https://github.com/DEFRA/defra-map) | [`src/scss/components/_button.scss`](https://github.com/DEFRA/defra-map/blob/HEAD/src/scss/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [epr-packaging-frontend](https://github.com/DEFRA/epr-packaging-frontend) | [`src/FrontendSchemeRegistration.UI/assets/scss/components/_buttons.scss`](https://github.com/DEFRA/epr-packaging-frontend/blob/HEAD/src/FrontendSchemeRegistration.UI/assets/scss/components/_buttons.scss) | SCSS/CSS only |  | yes |  |
| [epr-prn-rep-exp-frontend](https://github.com/DEFRA/epr-prn-rep-exp-frontend) | [`src/Epr.Reprocessor.Exporter.UI/assets/scss/components/_buttons.scss`](https://github.com/DEFRA/epr-prn-rep-exp-frontend/blob/HEAD/src/Epr.Reprocessor.Exporter.UI/assets/scss/components/_buttons.scss) | SCSS/CSS only |  | yes |  |
| [farming-grants-agreements-ui](https://github.com/DEFRA/farming-grants-agreements-ui) | [`src/server/config-driven-agreement/dynamic-content/components/button.njk`](https://github.com/DEFRA/farming-grants-agreements-ui/blob/HEAD/src/server/config-driven-agreement/dynamic-content/components/button.njk) | template partial |  | yes |  |
| [forms-designer](https://github.com/DEFRA/forms-designer) | [`client/src/stylesheets/components/_button.scss`](https://github.com/DEFRA/forms-designer/blob/HEAD/client/src/stylesheets/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [pafs-portal-frontend](https://github.com/DEFRA/pafs-portal-frontend) | [`src/server/common/components/button.njk`](https://github.com/DEFRA/pafs-portal-frontend/blob/HEAD/src/server/common/components/button.njk) | template partial |  | yes |  |
| [book-live-animal-inspection-ui](https://github.com/DEFRA/book-live-animal-inspection-ui) | [`src/server/common/components/button/_button.scss`](https://github.com/DEFRA/book-live-animal-inspection-ui/blob/HEAD/src/server/common/components/button/_button.scss) | SCSS/CSS only |  |  |  |
| [gep-land-model-viewer-frontend](https://github.com/DEFRA/gep-land-model-viewer-frontend) | [`src/client/javascripts/map/components/LinkButton.jsx`](https://github.com/DEFRA/gep-land-model-viewer-frontend/blob/HEAD/src/client/javascripts/map/components/LinkButton.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [interactive-map](https://github.com/DEFRA/interactive-map) | [`src/scss/components/_button.scss`](https://github.com/DEFRA/interactive-map/blob/HEAD/src/scss/components/_button.scss) | SCSS/CSS only |  |  |  |
| [prompt-library](https://github.com/DEFRA/prompt-library) | [`src/components/Button.tsx`](https://github.com/DEFRA/prompt-library/blob/HEAD/src/components/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [trade-imports-simulator-frontend](https://github.com/DEFRA/trade-imports-simulator-frontend) | [`src/server/common/components/button/_button.scss`](https://github.com/DEFRA/trade-imports-simulator-frontend/blob/HEAD/src/server/common/components/button/_button.scss) | SCSS/CSS only |  |  |  |
| [rpa-guidance-prototype](https://github.com/DEFRA/rpa-guidance-prototype) | [`src/client/stylesheets/components/_app-button.scss`](https://github.com/DEFRA/rpa-guidance-prototype/blob/HEAD/src/client/stylesheets/components/_app-button.scss) | SCSS/CSS only | yes |  |  |

#### hmcts (9, 9 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/hmcts/design-system) | [`app/components/button/_button.scss`](https://github.com/hmcts/design-system/blob/HEAD/app/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [react-a11y-test](https://github.com/hmcts/react-a11y-test) | [`src/components/Button.tsx`](https://github.com/hmcts/react-a11y-test/blob/HEAD/src/components/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes | `moj-add-another`, `moj-button-menu`, `moj-date-picker`, `moj-filter`, `moj-identity-bar`, `moj-messages`, `moj-multi-select`, `moj-notification-badge`, `moj-organisation-switcher`, `moj-page-header-actions`, `moj-scrollable-pane`, `moj-search`, `moj-sortable-table`, `moj-sub-navigation`, `moj-ticket-panel`, `moj-timeline` |
| [rpx-xui-approve-org](https://github.com/hmcts/rpx-xui-approve-org) | [`src/assets/components/button/_button.scss`](https://github.com/hmcts/rpx-xui-approve-org/blob/HEAD/src/assets/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [rpx-xui-manage-organisations](https://github.com/hmcts/rpx-xui-manage-organisations) | [`src/assets/components/button/_button.scss`](https://github.com/hmcts/rpx-xui-manage-organisations/blob/HEAD/src/assets/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [batch-audio-transcription](https://github.com/hmcts/batch-audio-transcription) | [`frontend/components/ui/button.tsx`](https://github.com/hmcts/batch-audio-transcription/blob/HEAD/frontend/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dasi-ai-in-sdlc-aica](https://github.com/hmcts/dasi-ai-in-sdlc-aica) | [`008 - SAAS/Lovable/court-finder-express-main/src/components/ui/button.tsx`](https://github.com/hmcts/dasi-ai-in-sdlc-aica/blob/HEAD/008 - SAAS/Lovable/court-finder-express-main/src/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dts-portfolio-portal](https://github.com/hmcts/dts-portfolio-portal) | [`src/components/ui/button.tsx`](https://github.com/hmcts/dts-portfolio-portal/blob/HEAD/src/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [rpa-jui-webapp](https://github.com/hmcts/rpa-jui-webapp) | [`documentation/components/ButtonsComponent.html`](https://github.com/hmcts/rpa-jui-webapp/blob/HEAD/documentation/components/ButtonsComponent.html) | template partial |  |  |  |
| [transcribe-web](https://github.com/hmcts/transcribe-web) | [`components/recording/ui/button.tsx`](https://github.com/hmcts/transcribe-web/blob/HEAD/components/recording/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### SkillsFundingAgency (8, 8 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-apprentice-app](https://github.com/SkillsFundingAgency/das-apprentice-app) | [`src/SFA.DAS.ApprenticeApp.Pwa/Frontend/components/button/_button.scss`](https://github.com/SkillsFundingAgency/das-apprentice-app/blob/HEAD/src/SFA.DAS.ApprenticeApp.Pwa/Frontend/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/das/sass/components/button/_button.scss`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/das/sass/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [tl-matching](https://github.com/SkillsFundingAgency/tl-matching) | [`src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/sass/components/_button.scss`](https://github.com/SkillsFundingAgency/tl-matching/blob/HEAD/src/Sfa.Tl.Matching.Web/Frontend/src/stylesheets/sass/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [tl-poc-results-and-certification](https://github.com/SkillsFundingAgency/tl-poc-results-and-certification) | [`Sfa.Poc.ResultsAndCertification.CsvHelper/Sfa.Poc.ResultsAndCertification.CsvHelper.Web/Frontend/src/stylesheets/sass/components/_button.scss`](https://github.com/SkillsFundingAgency/tl-poc-results-and-certification/blob/HEAD/Sfa.Poc.ResultsAndCertification.CsvHelper/Sfa.Poc.ResultsAndCertification.CsvHelper.Web/Frontend/src/stylesheets/sass/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [tl-results-and-certification](https://github.com/SkillsFundingAgency/tl-results-and-certification) | [`src/Sfa.Tl.ResultsAndCertification.Web/Frontend/src/stylesheets/sass/components/_button.scss`](https://github.com/SkillsFundingAgency/tl-results-and-certification/blob/HEAD/src/Sfa.Tl.ResultsAndCertification.Web/Frontend/src/stylesheets/sass/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [das-campaign](https://github.com/SkillsFundingAgency/das-campaign) | [`src/SFA.DAS.Campaign.Web/wwwroot/src/components/button/_button.scss`](https://github.com/SkillsFundingAgency/das-campaign/blob/HEAD/src/SFA.DAS.Campaign.Web/wwwroot/src/components/button/_button.scss) | SCSS/CSS only |  |  |  |
| [das-campaigns-prototype](https://github.com/SkillsFundingAgency/das-campaigns-prototype) | [`app/views/campaign/components/button/macro.njk`](https://github.com/SkillsFundingAgency/das-campaigns-prototype/blob/HEAD/app/views/campaign/components/button/macro.njk) | Nunjucks macro |  |  |  |
| [das-epao-fireitup](https://github.com/SkillsFundingAgency/das-epao-fireitup) | [`app/views/campaign/components/button/macro.njk`](https://github.com/SkillsFundingAgency/das-epao-fireitup/blob/HEAD/app/views/campaign/components/button/macro.njk) | Nunjucks macro |  |  |  |

#### DFE-Digital (10, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [find-a-lost-trn-prototype](https://github.com/DFE-Digital/find-a-lost-trn-prototype) | [`app/assets/stylesheets/components/_button.scss`](https://github.com/DFE-Digital/find-a-lost-trn-prototype/blob/HEAD/app/assets/stylesheets/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/assets/stylesheets/components/_button-link.scss`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/assets/stylesheets/components/_button-link.scss) | SCSS/CSS only |  | yes |  |
| [architecture-manual](https://github.com/DFE-Digital/architecture-manual) | [`app/assets/scss/ncs/components/button.scss`](https://github.com/DFE-Digital/architecture-manual/blob/HEAD/app/assets/scss/ncs/components/button.scss) | SCSS/CSS only |  |  |  |
| [childcare-support-platform](https://github.com/DFE-Digital/childcare-support-platform) | [`packages/app/src/components/ui/Button.tsx`](https://github.com/DFE-Digital/childcare-support-platform/blob/HEAD/packages/app/src/components/ui/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [govuk-frontend-aspnetcore](https://github.com/DFE-Digital/govuk-frontend-aspnetcore) | [`src/GovUk.Frontend.AspNetCore.Docs/Templates/components/button.liquid`](https://github.com/DFE-Digital/govuk-frontend-aspnetcore/blob/HEAD/src/GovUk.Frontend.AspNetCore.Docs/Templates/components/button.liquid) | template partial |  |  |  |
| [user-research-new-manual](https://github.com/DFE-Digital/user-research-new-manual) | [`app/assets/scss/ncs/components/button.scss`](https://github.com/DFE-Digital/user-research-new-manual/blob/HEAD/app/assets/scss/ncs/components/button.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [pre-ab-transfers](https://github.com/DFE-Digital/pre-ab-transfers) | [`app/assets/sass/components/_button-as-link.scss`](https://github.com/DFE-Digital/pre-ab-transfers/blob/HEAD/app/assets/sass/components/_button-as-link.scss) | SCSS/CSS only | yes | yes | `moj-filter` |
| [sdd-concerns-prototype](https://github.com/DFE-Digital/sdd-concerns-prototype) | [`app/assets/sass/components/_button-as-link.scss`](https://github.com/DFE-Digital/sdd-concerns-prototype/blob/HEAD/app/assets/sass/components/_button-as-link.scss) | SCSS/CSS only | yes | yes | `moj-filter` |
| [sdd-services-prototype](https://github.com/DFE-Digital/sdd-services-prototype) | [`app/assets/sass/components/_button-as-link.scss`](https://github.com/DFE-Digital/sdd-services-prototype/blob/HEAD/app/assets/sass/components/_button-as-link.scss) | SCSS/CSS only | yes | yes |  |
| [tte-prototype](https://github.com/DFE-Digital/tte-prototype) | [`app/assets/sass/components/_button.scss`](https://github.com/DFE-Digital/tte-prototype/blob/HEAD/app/assets/sass/components/_button.scss) | SCSS/CSS only | yes | yes | `moj-side-navigation`, `moj-sortable-table`, `moj-timeline` |

#### NHSDigital (9, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [DCH-NHS-app](https://github.com/NHSDigital/DCH-NHS-app) | [`app/assets/sass/components/_buttons.scss`](https://github.com/NHSDigital/DCH-NHS-app/blob/HEAD/app/assets/sass/components/_buttons.scss) | SCSS/CSS only |  |  | `nhsuk-card` |
| [nhs-notify-web-cms](https://github.com/NHSDigital/nhs-notify-web-cms) | [`docs/_includes/components/button.html`](https://github.com/NHSDigital/nhs-notify-web-cms/blob/HEAD/docs/_includes/components/button.html) | template partial |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-contents-list`, `nhsuk-link` |
| [nhsuk-frontend-jinja](https://github.com/NHSDigital/nhsuk-frontend-jinja) | [`nhsuk_frontend_jinja/templates/nhsuk/components/button/macro.jinja`](https://github.com/NHSDigital/nhsuk-frontend-jinja/blob/HEAD/nhsuk_frontend_jinja/templates/nhsuk/components/button/macro.jinja) | Nunjucks macro |  |  | `nhsuk-action-link`, `nhsuk-caption`, `nhsuk-card`, `nhsuk-code`, `nhsuk-contents-list` |
| [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) | [`src/components/form-elements/button/Button.tsx`](https://github.com/NHSDigital/nhsuk-react-components/blob/HEAD/src/components/form-elements/button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `nhsuk-do-dont-list`, `nhsuk-hero` |
| [nhsuk-react-native-components](https://github.com/NHSDigital/nhsuk-react-native-components) | [`src/components/button/Button.tsx`](https://github.com/NHSDigital/nhsuk-react-native-components/blob/HEAD/src/components/button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) | [`app/assets/sass/components/_button.scss`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/sass/components/_button.scss) | SCSS/CSS only |  |  | `nhsuk-link` |
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) | [`app/assets/sass/components/_button.scss`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_button.scss) | SCSS/CSS only | yes |  | `nhsuk-link` |
| [manage-vaccinations-in-schools-prototype](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype) | [`app/assets/stylesheets/components/_button.scss`](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype/blob/HEAD/app/assets/stylesheets/components/_button.scss) | SCSS/CSS only | yes |  |  |
| [prototype-gp-registration](https://github.com/NHSDigital/prototype-gp-registration) | [`app/assets/sass/components/_buttons.scss`](https://github.com/NHSDigital/prototype-gp-registration/blob/HEAD/app/assets/sass/components/_buttons.scss) | SCSS/CSS only | yes |  |  |

#### communitiesuk (6, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [epb-ecaas-frontend](https://github.com/communitiesuk/epb-ecaas-frontend) | [`components/form-kit/Button.vue`](https://github.com/communitiesuk/epb-ecaas-frontend/blob/HEAD/components/form-kit/Button.vue) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [localai-local-transcribe](https://github.com/communitiesuk/localai-local-transcribe) | [`frontend/components/govuk/button.tsx`](https://github.com/communitiesuk/localai-local-transcribe/blob/HEAD/frontend/components/govuk/button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [mhclg_svelte_component_library](https://github.com/communitiesuk/mhclg_svelte_component_library) | [`src/lib/components/ui/Button.svelte`](https://github.com/communitiesuk/mhclg_svelte_component_library/blob/HEAD/src/lib/components/ui/Button.svelte) | UI framework (React/Vue/Svelte lib) |  | yes | `dwp-side-navigation` |
| [submit-social-housing-lettings-and-sales-data-prototype](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype) | [`app/components/button/_button.scss`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype/blob/HEAD/app/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [ailg-minute](https://github.com/communitiesuk/ailg-minute) | [`frontend/components/ui/button.tsx`](https://github.com/communitiesuk/ailg-minute/blob/HEAD/frontend/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [funding-service](https://github.com/communitiesuk/funding-service) | [`app/assets/components/link-button/_index.scss`](https://github.com/communitiesuk/funding-service/blob/HEAD/app/assets/components/link-button/_index.scss) | SCSS/CSS only |  |  |  |

#### LBHackney-IT (6, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbh-housing-register](https://github.com/LBHackney-IT/lbh-housing-register) | [`components/button.tsx`](https://github.com/LBHackney-IT/lbh-housing-register/blob/HEAD/components/button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [mtfh-frontend-common](https://github.com/LBHackney-IT/mtfh-frontend-common) | [`lib/components/button/button.tsx`](https://github.com/LBHackney-IT/mtfh-frontend-common/blob/HEAD/lib/components/button/button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [repairs-hub-frontend](https://github.com/LBHackney-IT/repairs-hub-frontend) | [`src/components/Form/Button/index.tsx`](https://github.com/LBHackney-IT/repairs-hub-frontend/blob/HEAD/src/components/Form/Button/index.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [adms-frontend](https://github.com/LBHackney-IT/adms-frontend) | [`components/ui/button.tsx`](https://github.com/LBHackney-IT/adms-frontend/blob/HEAD/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [lbh-fss-public-frontend](https://github.com/LBHackney-IT/lbh-fss-public-frontend) | [`src/components/Button/Button.js`](https://github.com/LBHackney-IT/lbh-fss-public-frontend/blob/HEAD/src/components/Button/Button.js) | JS/TS component |  |  |  |
| [mtfh-frontend](https://github.com/LBHackney-IT/mtfh-frontend) | [`packages/react/src/components/button/button.tsx`](https://github.com/LBHackney-IT/mtfh-frontend/blob/HEAD/packages/react/src/components/button/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### alan-turing-institute (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [AssurancePlatform](https://github.com/alan-turing-institute/AssurancePlatform) | [`components/ui/button.tsx`](https://github.com/alan-turing-institute/AssurancePlatform/blob/HEAD/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [bias-cards](https://github.com/alan-turing-institute/bias-cards) | [`components/ui/button.tsx`](https://github.com/alan-turing-institute/bias-cards/blob/HEAD/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [scivision](https://github.com/alan-turing-institute/scivision) | [`frontend/src/components/Buttons.tsx`](https://github.com/alan-turing-institute/scivision/blob/HEAD/frontend/src/components/Buttons.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [tea-techniques](https://github.com/alan-turing-institute/tea-techniques) | [`components/ui/button.tsx`](https://github.com/alan-turing-institute/tea-techniques/blob/HEAD/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [trustworthiness-framework](https://github.com/alan-turing-institute/trustworthiness-framework) | [`client/src/components/ui/button.tsx`](https://github.com/alan-turing-institute/trustworthiness-framework/blob/HEAD/client/src/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### Crown-Commercial-Service (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [DataSubmissionService](https://github.com/Crown-Commercial-Service/DataSubmissionService) | [`app/assets/stylesheets/components/button/_button.scss`](https://github.com/Crown-Commercial-Service/DataSubmissionService/blob/HEAD/app/assets/stylesheets/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [DataSubmissionServiceAPI](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI) | [`app/assets/stylesheets/components/button/_button.scss`](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI/blob/HEAD/app/assets/stylesheets/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [reportmi-frontend](https://github.com/Crown-Commercial-Service/reportmi-frontend) | [`stylesheets/components/button/_button.scss`](https://github.com/Crown-Commercial-Service/reportmi-frontend/blob/HEAD/stylesheets/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [ccs-conclave-jaggaer-logindirector](https://github.com/Crown-Commercial-Service/ccs-conclave-jaggaer-logindirector) | [`logindirector/wwwroot/assets/stylesheets/components/buttons/_buttons.scss`](https://github.com/Crown-Commercial-Service/ccs-conclave-jaggaer-logindirector/blob/HEAD/logindirector/wwwroot/assets/stylesheets/components/buttons/_buttons.scss) | SCSS/CSS only |  |  |  |
| [ccs-scale-cat-buyer-ui](https://github.com/Crown-Commercial-Service/ccs-scale-cat-buyer-ui) | [`src/main/views/components/button/macro.njk`](https://github.com/Crown-Commercial-Service/ccs-scale-cat-buyer-ui/blob/HEAD/src/main/views/components/button/macro.njk) | Nunjucks macro |  |  |  |

#### nationalarchives (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ds-caselaw-editor-ui](https://github.com/nationalarchives/ds-caselaw-editor-ui) | [`ds_caselaw_editor_ui/sass/components/_button.scss`](https://github.com/nationalarchives/ds-caselaw-editor-ui/blob/HEAD/ds_caselaw_editor_ui/sass/components/_button.scss) | SCSS/CSS only |  |  |  |
| [ds-caselaw-public-ui](https://github.com/nationalarchives/ds-caselaw-public-ui) | [`ds_judgements_public_ui/templates/components/button.jinja`](https://github.com/nationalarchives/ds-caselaw-public-ui/blob/HEAD/ds_judgements_public_ui/templates/components/button.jinja) | template partial |  |  |  |
| [tna-frontend](https://github.com/nationalarchives/tna-frontend) | [`src/nationalarchives/components/button/_index.scss`](https://github.com/nationalarchives/tna-frontend/blob/HEAD/src/nationalarchives/components/button/_index.scss) | SCSS/CSS only |  |  |  |
| [tna-frontend-jinja](https://github.com/nationalarchives/tna-frontend-jinja) | [`tna_frontend_jinja/templates/components/button/macro.html`](https://github.com/nationalarchives/tna-frontend-jinja/blob/HEAD/tna_frontend_jinja/templates/components/button/macro.html) | Nunjucks macro |  |  | `tna-card`, `tna-code-block`, `tna-compound-filters`, `tna-date-search`, `tna-files-list`, `tna-gallery`, `tna-hero`, `tna-index-grid` |
| [wa-frontend](https://github.com/nationalarchives/wa-frontend) | [`src/styles/components/_button.scss`](https://github.com/nationalarchives/wa-frontend/blob/HEAD/src/styles/components/_button.scss) | SCSS/CSS only |  |  | `tna-picture` |

#### digital-land (5, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/digital-land/design-system) | [`src/scss/components/_buttons.scss`](https://github.com/digital-land/design-system/blob/HEAD/src/scss/components/_buttons.scss) | SCSS/CSS only |  | yes |  |
| [land-use-calculator](https://github.com/digital-land/land-use-calculator) | [`src/lib/components/Button.svelte`](https://github.com/digital-land/land-use-calculator/blob/HEAD/src/lib/components/Button.svelte) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [local-plans-explorer](https://github.com/digital-land/local-plans-explorer) | [`src/scss/components/_button.scss`](https://github.com/digital-land/local-plans-explorer/blob/HEAD/src/scss/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [planning-data-design](https://github.com/digital-land/planning-data-design) | [`src/scss/components/_govuk-button--link.scss`](https://github.com/digital-land/planning-data-design/blob/HEAD/src/scss/components/_govuk-button--link.scss) | SCSS/CSS only |  | yes | `moj-timeline` |
| [local-plans-prototype](https://github.com/digital-land/local-plans-prototype) | [`src/scss/components/_buttons.scss`](https://github.com/digital-land/local-plans-prototype/blob/HEAD/src/scss/components/_buttons.scss) | SCSS/CSS only | yes | yes |  |

#### CPS-Innovation (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Case-Management-Register-a-Case](https://github.com/CPS-Innovation/Case-Management-Register-a-Case) | [`src/ui-spa/src/components/govuk/Button.tsx`](https://github.com/CPS-Innovation/Case-Management-Register-a-Case/blob/HEAD/src/ui-spa/src/components/govuk/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [Large-and-Complex-Cases](https://github.com/CPS-Innovation/Large-and-Complex-Cases) | [`ui-spa/src/components/govuk/Button.tsx`](https://github.com/CPS-Innovation/Large-and-Complex-Cases/blob/HEAD/ui-spa/src/components/govuk/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [Polaris](https://github.com/CPS-Innovation/Polaris) | [`polaris-ui/src/app/common/presentation/components/Button.tsx`](https://github.com/CPS-Innovation/Polaris/blob/HEAD/polaris-ui/src/app/common/presentation/components/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [Managed-Materials-UI](https://github.com/CPS-Innovation/Managed-Materials-UI) | [`materials_ui/src/caseWorkApp/components/LinkButton/LinkButton.tsx`](https://github.com/CPS-Innovation/Managed-Materials-UI/blob/HEAD/materials_ui/src/caseWorkApp/components/LinkButton/LinkButton.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### hmrc (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [odx-child-benefit-frontend](https://github.com/hmrc/odx-child-benefit-frontend) | [`src/components/BaseComponents/Button/Button.tsx`](https://github.com/hmrc/odx-child-benefit-frontend/blob/HEAD/src/components/BaseComponents/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [odx-paye-hicbc-frontend](https://github.com/hmrc/odx-paye-hicbc-frontend) | [`src/components/BaseComponents/Button/Button.tsx`](https://github.com/hmrc/odx-paye-hicbc-frontend/blob/HEAD/src/components/BaseComponents/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [odx-paye-iabd-frontend](https://github.com/hmrc/odx-paye-iabd-frontend) | [`src/components/BaseComponents/Button/Button.tsx`](https://github.com/hmrc/odx-paye-iabd-frontend/blob/HEAD/src/components/BaseComponents/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [odx-self-assessment-frontend](https://github.com/hmrc/odx-self-assessment-frontend) | [`src/components/BaseComponents/Button/Button.tsx`](https://github.com/hmrc/odx-self-assessment-frontend/blob/HEAD/src/components/BaseComponents/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### i-dot-ai (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-kit](https://github.com/i-dot-ai/design-kit) | [`packages/frontend/src/components/button/_index.scss`](https://github.com/i-dot-ai/design-kit/blob/HEAD/packages/frontend/src/components/button/_index.scss) | SCSS/CSS only |  | yes |  |
| [consult](https://github.com/i-dot-ai/consult) | [`frontend/src/components/inputs/Button/Button.svelte`](https://github.com/i-dot-ai/consult/blob/HEAD/frontend/src/components/inputs/Button/Button.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [lex](https://github.com/i-dot-ai/lex) | [`app/src/components/ui/button.tsx`](https://github.com/i-dot-ai/lex/blob/HEAD/app/src/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [minute](https://github.com/i-dot-ai/minute) | [`frontend/components/ui/button.tsx`](https://github.com/i-dot-ai/minute/blob/HEAD/frontend/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### TechnologyEnhancedLearning (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [LearningHub.Nhs.WebUI](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI) | [`LearningHub.Nhs.WebUI/Styles/components/_buttons.scss`](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI/blob/HEAD/LearningHub.Nhs.WebUI/Styles/components/_buttons.scss) | SCSS/CSS only |  |  |  |
| [LearningHub.Nhs.WebUI.Forked](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked) | [`LearningHub.Nhs.WebUI/Styles/components/_buttons.scss`](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked/blob/HEAD/LearningHub.Nhs.WebUI/Styles/components/_buttons.scss) | SCSS/CSS only |  |  |  |
| [LearningHub.Nhs.WebUI.Forked.B](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked.B) | [`LearningHub.Nhs.WebUI/Styles/components/_buttons.scss`](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked.B/blob/HEAD/LearningHub.Nhs.WebUI/Styles/components/_buttons.scss) | SCSS/CSS only |  |  |  |
| [moodle-theme-nhsetel](https://github.com/TechnologyEnhancedLearning/moodle-theme-nhsetel) | [`scss/components/_button.scss`](https://github.com/TechnologyEnhancedLearning/moodle-theme-nhsetel/blob/HEAD/scss/components/_button.scss) | SCSS/CSS only |  |  | `nhsuk-action-link` |

#### UKHomeOffice (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [drt-react](https://github.com/UKHomeOffice/drt-react) | [`src/components/govuk/Button/Button.tsx`](https://github.com/UKHomeOffice/drt-react/blob/HEAD/src/components/govuk/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [frontend-toolkit](https://github.com/UKHomeOffice/frontend-toolkit) | [`assets/styles/components/_button.scss`](https://github.com/UKHomeOffice/frontend-toolkit/blob/HEAD/assets/styles/components/_button.scss) | SCSS/CSS only |  | yes |  |
| [GovUK-Design-System-React](https://github.com/UKHomeOffice/GovUK-Design-System-React) | [`components/button/src/Button.tsx`](https://github.com/UKHomeOffice/GovUK-Design-System-React/blob/HEAD/components/button/src/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [hof-forms-waf](https://github.com/UKHomeOffice/hof-forms-waf) | [`admin-ui/src/components/ui/button.tsx`](https://github.com/UKHomeOffice/hof-forms-waf/blob/HEAD/admin-ui/src/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ukhsa-collaboration (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nsc-recommendationsp](https://github.com/ukhsa-collaboration/nsc-recommendationsp) | [`frontend/src/components/buttons.scss`](https://github.com/ukhsa-collaboration/nsc-recommendationsp/blob/HEAD/frontend/src/components/buttons.scss) | SCSS/CSS only |  | yes |  |
| [science-research-site](https://github.com/ukhsa-collaboration/science-research-site) | [`themes/phe/src/scss/components/_buttons.scss`](https://github.com/ukhsa-collaboration/science-research-site/blob/HEAD/themes/phe/src/scss/components/_buttons.scss) | SCSS/CSS only |  |  |  |
| [ukhsa-science-research-site](https://github.com/ukhsa-collaboration/ukhsa-science-research-site) | [`themes/phe/src/scss/components/_buttons.scss`](https://github.com/ukhsa-collaboration/ukhsa-science-research-site/blob/HEAD/themes/phe/src/scss/components/_buttons.scss) | SCSS/CSS only |  |  |  |
| [ukhsa-science-research-site-dev](https://github.com/ukhsa-collaboration/ukhsa-science-research-site-dev) | [`themes/phe/src/scss/components/_buttons.scss`](https://github.com/ukhsa-collaboration/ukhsa-science-research-site-dev/blob/HEAD/themes/phe/src/scss/components/_buttons.scss) | SCSS/CSS only |  |  |  |

#### alphagov (4, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [paas-product-pages](https://github.com/alphagov/paas-product-pages) | [`components/Button/index.tsx`](https://github.com/alphagov/paas-product-pages/blob/HEAD/components/Button/index.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [pay-selfservice](https://github.com/alphagov/pay-selfservice) | [`src/assets/sass/components/button.scss`](https://github.com/alphagov/pay-selfservice/blob/HEAD/src/assets/sass/components/button.scss) | SCSS/CSS only |  | yes |  |
| [learningtime-sem2-sh-digital-notebook](https://github.com/alphagov/learningtime-sem2-sh-digital-notebook) | [`app/assets/stylesheets/components/_buttons.scss`](https://github.com/alphagov/learningtime-sem2-sh-digital-notebook/blob/HEAD/app/assets/stylesheets/components/_buttons.scss) | SCSS/CSS only |  |  |  |
| [govuk-content-publisher-prototype](https://github.com/alphagov/govuk-content-publisher-prototype) | [`app/assets/sass/components/_button.scss`](https://github.com/alphagov/govuk-content-publisher-prototype/blob/HEAD/app/assets/sass/components/_button.scss) | SCSS/CSS only | yes | yes |  |

#### UKGovernmentBEIS (4, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [beis-spl-common](https://github.com/UKGovernmentBEIS/beis-spl-common) | [`common/assets/sass/components/_button-link.scss`](https://github.com/UKGovernmentBEIS/beis-spl-common/blob/HEAD/common/assets/sass/components/_button-link.scss) | SCSS/CSS only |  | yes |  |
| [rpr-alpha-phase-prototype1](https://github.com/UKGovernmentBEIS/rpr-alpha-phase-prototype1) | [`src/components/gds-button/gds-button.tsx`](https://github.com/UKGovernmentBEIS/rpr-alpha-phase-prototype1/blob/HEAD/src/components/gds-button/gds-button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [esos](https://github.com/UKGovernmentBEIS/esos) | [`uk-esos-app-web/projects/govuk-components/src/styles/components/button/_button.scss`](https://github.com/UKGovernmentBEIS/esos/blob/HEAD/uk-esos-app-web/projects/govuk-components/src/styles/components/button/_button.scss) | SCSS/CSS only |  |  |  |
| [beis-ets-prototype](https://github.com/UKGovernmentBEIS/beis-ets-prototype) | [`app/components/button/_button.scss`](https://github.com/UKGovernmentBEIS/beis-ets-prototype/blob/HEAD/app/components/button/_button.scss) | SCSS/CSS only | yes | yes |  |

#### gchq (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [CyberChef](https://github.com/gchq/CyberChef) | [`src/web/stylesheets/components/_button.css`](https://github.com/gchq/CyberChef/blob/HEAD/src/web/stylesheets/components/_button.css) | SCSS/CSS only |  |  |  |
| [LD-Explorer](https://github.com/gchq/LD-Explorer) | [`src/lib/components/ui/Button.svelte`](https://github.com/gchq/LD-Explorer/blob/HEAD/src/lib/components/ui/Button.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [stroom-ui](https://github.com/gchq/stroom-ui) | [`src/components/Button/Button.tsx`](https://github.com/gchq/stroom-ui/blob/HEAD/src/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### guidance-guarantee-programme (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [output](https://github.com/guidance-guarantee-programme/output) | [`app/assets/stylesheets/components/_button_link.scss`](https://github.com/guidance-guarantee-programme/output/blob/HEAD/app/assets/stylesheets/components/_button_link.scss) | SCSS/CSS only |  |  |  |
| [pension_guidance](https://github.com/guidance-guarantee-programme/pension_guidance) | [`app/assets/stylesheets/components/_button-link.scss`](https://github.com/guidance-guarantee-programme/pension_guidance/blob/HEAD/app/assets/stylesheets/components/_button-link.scss) | SCSS/CSS only |  |  |  |
| [telephone_appointment_planner](https://github.com/guidance-guarantee-programme/telephone_appointment_planner) | [`app/assets/stylesheets/components/_button-link.scss`](https://github.com/guidance-guarantee-programme/telephone_appointment_planner/blob/HEAD/app/assets/stylesheets/components/_button-link.scss) | SCSS/CSS only |  |  |  |

#### InnovateUKGitHub (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [innovation-funding-service](https://github.com/InnovateUKGitHub/innovation-funding-service) | [`ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_buttons.scss`](https://github.com/InnovateUKGitHub/innovation-funding-service/blob/HEAD/ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_buttons.scss) | SCSS/CSS only |  | yes |  |
| [innovation-funding-service-post-award](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award) | [`packages/app/src/ui/components/atoms/Button/Button.tsx`](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award/blob/HEAD/packages/app/src/ui/components/atoms/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [een-webapp](https://github.com/InnovateUKGitHub/een-webapp) | [`drupal/core/themes/bartik/css/components/buttons.css`](https://github.com/InnovateUKGitHub/een-webapp/blob/HEAD/drupal/core/themes/bartik/css/components/buttons.css) | SCSS/CSS only |  |  |  |

#### ONSdigital (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/ONSdigital/design-system) | [`src/components/button/_button.scss`](https://github.com/ONSdigital/design-system/blob/HEAD/src/components/button/_button.scss) | SCSS/CSS only |  |  |  |
| [dis-design-system-go](https://github.com/ONSdigital/dis-design-system-go) | [`assets/scss/dp/overrides/components/_button.scss`](https://github.com/ONSdigital/dis-design-system-go/blob/HEAD/assets/scss/dp/overrides/components/_button.scss) | SCSS/CSS only |  |  |  |
| [svelte-components](https://github.com/ONSdigital/svelte-components) | [`src/lib/components/Button/Button.svelte`](https://github.com/ONSdigital/svelte-components/blob/HEAD/src/lib/components/Button/Button.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nhsbsa (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/nhsbsa/design-system) | [`app/assets/sass/components/_buttons.scss`](https://github.com/nhsbsa/design-system/blob/HEAD/app/assets/sass/components/_buttons.scss) | SCSS/CSS only |  |  |  |
| [nhsuk-frontend](https://github.com/nhsbsa/nhsuk-frontend) | [`packages/components/button/_button.scss`](https://github.com/nhsbsa/nhsuk-frontend/blob/HEAD/packages/components/button/_button.scss) | SCSS/CSS only |  |  |  |
| [claims-prototype](https://github.com/nhsbsa/claims-prototype) | [`app/assets/sass/components/_buttons.scss`](https://github.com/nhsbsa/claims-prototype/blob/HEAD/app/assets/sass/components/_buttons.scss) | SCSS/CSS only | yes |  | `nhsuk-card`, `nhsuk-link` |

#### antarctica (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [embedded-maps](https://github.com/antarctica/embedded-maps) | [`src/components/Button/Button.tsx`](https://github.com/antarctica/embedded-maps/blob/HEAD/src/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [zap](https://github.com/antarctica/zap) | [`src/components/bases/Button.vue`](https://github.com/antarctica/zap/blob/HEAD/src/components/bases/Button.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### britishlibrary (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [BL-design-system](https://github.com/britishlibrary/BL-design-system) | [`packages/component-library/src/components/Button/Button.tsx`](https://github.com/britishlibrary/BL-design-system/blob/HEAD/packages/component-library/src/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [examples](https://github.com/britishlibrary/examples) | [`lib/foundation/scss/foundation/components/_buttons.scss`](https://github.com/britishlibrary/examples/blob/HEAD/lib/foundation/scss/foundation/components/_buttons.scss) | SCSS/CSS only |  |  |  |

#### defencedigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [moduk-frontend](https://github.com/defencedigital/moduk-frontend) | [`src/nunjucks/moduk/components/button/macro.njk`](https://github.com/defencedigital/moduk-frontend/blob/HEAD/src/nunjucks/moduk/components/button/macro.njk) | Nunjucks macro |  | yes |  |
| [moduk-frontend-guidance-site](https://github.com/defencedigital/moduk-frontend-guidance-site) | [`src/site/_includes/components/button/index.scss`](https://github.com/defencedigital/moduk-frontend-guidance-site/blob/HEAD/src/site/_includes/components/button/index.scss) | SCSS/CSS only |  |  |  |

#### department-for-transport-BODS (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bods](https://github.com/department-for-transport-BODS/bods) | [`transit_odp/frontend/assets/sass/components/button/_button.scss`](https://github.com/department-for-transport-BODS/bods/blob/HEAD/transit_odp/frontend/assets/sass/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [publish-devolved-bus-registration-data](https://github.com/department-for-transport-BODS/publish-devolved-bus-registration-data) | [`frontend/src/components/Button.tsx`](https://github.com/department-for-transport-BODS/publish-devolved-bus-registration-data/blob/HEAD/frontend/src/components/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dwp (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [accessibility-manual](https://github.com/dwp/accessibility-manual) | [`app/views/components/button/_button.scss`](https://github.com/dwp/accessibility-manual/blob/HEAD/app/views/components/button/_button.scss) | SCSS/CSS only |  | yes |  |
| [dwp-ask](https://github.com/dwp/dwp-ask) | [`components/ui/Button/Button.tsx`](https://github.com/dwp/dwp-ask/blob/HEAD/components/ui/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### govuk-once (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gds-eligibility-chat-frontend](https://github.com/govuk-once/gds-eligibility-chat-frontend) | [`src/lib/components/buttons/Button.svelte`](https://github.com/govuk-once/gds-eligibility-chat-frontend/blob/HEAD/src/lib/components/buttons/Button.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [personalised-planning](https://github.com/govuk-once/personalised-planning) | [`frontend/app/components/shared/Button.tsx`](https://github.com/govuk-once/personalised-planning/blob/HEAD/frontend/app/components/shared/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### GSS-Cogs (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [idpd-frontend-homepage](https://github.com/GSS-Cogs/idpd-frontend-homepage) | [`components/Button/index.tsx`](https://github.com/GSS-Cogs/idpd-frontend-homepage/blob/HEAD/components/Button/index.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [chart-builder](https://github.com/GSS-Cogs/chart-builder) | [`src/components/button/Button.tsx`](https://github.com/GSS-Cogs/chart-builder/blob/HEAD/src/components/button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### GSTT-CSC (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gstt-csc.github.io](https://github.com/GSTT-CSC/gstt-csc.github.io) | [`_sass/components/_buttons.scss`](https://github.com/GSTT-CSC/gstt-csc.github.io/blob/HEAD/_sass/components/_buttons.scss) | SCSS/CSS only |  |  |  |
| [NHSFCAI](https://github.com/GSTT-CSC/NHSFCAI) | [`_sass/components/_buttons.scss`](https://github.com/GSTT-CSC/NHSFCAI/blob/HEAD/_sass/components/_buttons.scss) | SCSS/CSS only |  |  |  |

#### NHS-digital-website (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hippo](https://github.com/NHS-digital-website/hippo) | [`repository-data/webfiles/src/main/resources/site/src/scss/components/_button.scss`](https://github.com/NHS-digital-website/hippo/blob/HEAD/repository-data/webfiles/src/main/resources/site/src/scss/components/_button.scss) | SCSS/CSS only |  |  |  |
| [hippo-codebuild-test](https://github.com/NHS-digital-website/hippo-codebuild-test) | [`repository-data/webfiles/src/main/resources/site/scss/components/_button.scss`](https://github.com/NHS-digital-website/hippo-codebuild-test/blob/HEAD/repository-data/webfiles/src/main/resources/site/scss/components/_button.scss) | SCSS/CSS only |  |  |  |

#### nhsx (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [antibody-web](https://github.com/nhsx/antibody-web) | [`take-test-app/src/components/ui/Buttons.tsx`](https://github.com/nhsx/antibody-web/blob/HEAD/take-test-app/src/components/ui/Buttons.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [audere](https://github.com/nhsx/audere) | [`Covid19_Antibody_uk/src/ui/components/Button.tsx`](https://github.com/nhsx/audere/blob/HEAD/Covid19_Antibody_uk/src/ui/components/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### no10ds (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [DEPRECATED-rapid-ui](https://github.com/no10ds/DEPRECATED-rapid-ui) | [`src/components/Button/Button.tsx`](https://github.com/no10ds/DEPRECATED-rapid-ui/blob/HEAD/src/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [rapid](https://github.com/no10ds/rapid) | [`frontend/src/components/Button/Button.tsx`](https://github.com/no10ds/rapid/blob/HEAD/frontend/src/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### OxfordshireCountyCouncil (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [History-Centre-digital-resources](https://github.com/OxfordshireCountyCouncil/History-Centre-digital-resources) | [`source/occlss/scss/components/button/macro.njk`](https://github.com/OxfordshireCountyCouncil/History-Centre-digital-resources/blob/HEAD/source/occlss/scss/components/button/macro.njk) | Nunjucks macro |  |  |  |
| [occlss](https://github.com/OxfordshireCountyCouncil/occlss) | [`views/components/button/macro.njk`](https://github.com/OxfordshireCountyCouncil/occlss/blob/HEAD/views/components/button/macro.njk) | Nunjucks macro |  |  |  |

#### scottish-government-design-system (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/scottish-government-design-system/design-system) | [`src/components/button/_button.scss`](https://github.com/scottish-government-design-system/design-system/blob/HEAD/src/components/button/_button.scss) | SCSS/CSS only |  |  |  |
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/Button/Button.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### smbc-digital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [stockportgov-design-system](https://github.com/smbc-digital/stockportgov-design-system) | [`src/components/button/_index.scss`](https://github.com/smbc-digital/stockportgov-design-system/blob/HEAD/src/components/button/_index.scss) | SCSS/CSS only |  | yes |  |
| [SMBC-Sonic-Brief-Community-Edition](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition) | [`frontend_app/src/components/ui/button.tsx`](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition/blob/HEAD/frontend_app/src/components/ui/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### thepensionsregulator (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [jss](https://github.com/thepensionsregulator/jss) | [`packages/sitecore-jss-react-forms/src/components/field-templates/button.tsx`](https://github.com/thepensionsregulator/jss/blob/HEAD/packages/sitecore-jss-react-forms/src/components/field-templates/button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [user-research](https://github.com/thepensionsregulator/user-research) | [`components/buttons.html`](https://github.com/thepensionsregulator/user-research/blob/HEAD/components/buttons.html) | template partial |  |  |  |

#### ukgov-equality-hub (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ethnicity-facts-and-figures](https://github.com/ukgov-equality-hub/ethnicity-facts-and-figures) | [`application/src/sass/components/_buttons.scss`](https://github.com/ukgov-equality-hub/ethnicity-facts-and-figures/blob/HEAD/application/src/sass/components/_buttons.scss) | SCSS/CSS only |  | yes |  |
| [social-mobility-commission-website](https://github.com/ukgov-equality-hub/social-mobility-commission-website) | [`web/app/themes/smc/App_Themes/main/css/components/_buttons.scss`](https://github.com/ukgov-equality-hub/social-mobility-commission-website/blob/HEAD/web/app/themes/smc/App_Themes/main/css/components/_buttons.scss) | SCSS/CSS only |  |  |  |

#### UKHSA-Internal (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pre-entry-tb-screening-app](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app) | [`pets-ui/src/components/button/button.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app/blob/HEAD/pets-ui/src/components/button/button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [pre-entry-tb-screening-dicom-viewer](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer) | [`platform/ui-next/src/components/Button/Button.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer/blob/HEAD/platform/ui-next/src/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ukparliament (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [email-components](https://github.com/ukparliament/email-components) | [`src/stylesheets/components/_button.scss`](https://github.com/ukparliament/email-components/blob/HEAD/src/stylesheets/components/_button.scss) | SCSS/CSS only |  |  |  |
| [parliament.uk-pugin](https://github.com/ukparliament/parliament.uk-pugin) | [`src/stylesheets/components/_buttons.scss`](https://github.com/ukparliament/parliament.uk-pugin/blob/HEAD/src/stylesheets/components/_buttons.scss) | SCSS/CSS only |  |  |  |

#### LandRegistry (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [govuk-react-components-library](https://github.com/LandRegistry/govuk-react-components-library) | [`src/components/Button/Button.scss`](https://github.com/LandRegistry/govuk-react-components-library/blob/HEAD/src/components/Button/Button.scss) | SCSS/CSS only |  |  |  |
| [local-land-charges-prototypes](https://github.com/LandRegistry/local-land-charges-prototypes) | [`app/assets/sass/components/_buttons.scss`](https://github.com/LandRegistry/local-land-charges-prototypes/blob/HEAD/app/assets/sass/components/_buttons.scss) | SCSS/CSS only | yes | yes |  |

#### Planning-Inspectorate (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [library-service](https://github.com/Planning-Inspectorate/library-service) | [`web/themes/contrib/bootstrap5/css/components/button.css`](https://github.com/Planning-Inspectorate/library-service/blob/HEAD/web/themes/contrib/bootstrap5/css/components/button.css) | SCSS/CSS only |  |  |  |
| [design-patterns](https://github.com/Planning-Inspectorate/design-patterns) | [`app/views/components/buttons.html`](https://github.com/Planning-Inspectorate/design-patterns/blob/HEAD/app/views/components/buttons.html) | template partial | yes | yes | `moj-sub-navigation` |

#### cabinetoffice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gap-find-apply-web](https://github.com/cabinetoffice/gap-find-apply-web) | [`packages/applicant/src/components/button/Button.tsx`](https://github.com/cabinetoffice/gap-find-apply-web/blob/HEAD/packages/applicant/src/components/button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### Civil-Service-Human-Resources (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lpg-front-end](https://github.com/Civil-Service-Human-Resources/lpg-front-end) | [`src/server/views/library/components/buttons.njk`](https://github.com/Civil-Service-Human-Resources/lpg-front-end/blob/HEAD/src/server/views/library/components/buttons.njk) | template partial |  |  |  |

#### co-cddo (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rapid](https://github.com/co-cddo/rapid) | [`frontend/src/components/Button/Button.tsx`](https://github.com/co-cddo/rapid/blob/HEAD/frontend/src/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### decc (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [twenty-fifty-new-look](https://github.com/decc/twenty-fifty-new-look) | [`source/stylesheets/components/_button.sass`](https://github.com/decc/twenty-fifty-new-look/blob/HEAD/source/stylesheets/components/_button.sass) | SCSS/CSS only |  |  |  |

#### dfe-analytical-services (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-admin/src/components/ButtonLink.tsx`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-admin/src/components/ButtonLink.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### dvsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [front-end](https://github.com/dvsa/front-end) | [`src/server/views/library/components/buttons.njk`](https://github.com/dvsa/front-end/blob/HEAD/src/server/views/library/components/buttons.njk) | template partial |  |  |  |

#### essexcountycouncil (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [send-lgdrupal](https://github.com/essexcountycouncil/send-lgdrupal) | [`web/core/profiles/demo_umami/themes/umami/css/classy/components/button.css`](https://github.com/essexcountycouncil/send-lgdrupal/blob/HEAD/web/core/profiles/demo_umami/themes/umami/css/classy/components/button.css) | SCSS/CSS only |  |  |  |

#### govuk-pay (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pay-selfservice](https://github.com/govuk-pay/pay-selfservice) | [`src/assets/sass/components/button.scss`](https://github.com/govuk-pay/pay-selfservice/blob/HEAD/src/assets/sass/components/button.scss) | SCSS/CSS only |  | yes |  |

#### lgss (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [northants-design-system](https://github.com/lgss/northants-design-system) | [`src/library/components/Button/Button.tsx`](https://github.com/lgss/northants-design-system/blob/HEAD/src/library/components/Button/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### LondonBoroughSutton (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [suttoninformationhub-frontend](https://github.com/LondonBoroughSutton/suttoninformationhub-frontend) | [`src/components/Button/ButtonLink.tsx`](https://github.com/LondonBoroughSutton/suttoninformationhub-frontend/blob/HEAD/src/components/Button/ButtonLink.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### mcagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [beacons](https://github.com/mcagov/beacons) | [`webapp/src/components/Button.tsx`](https://github.com/mcagov/beacons/blob/HEAD/webapp/src/components/Button.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### NHSLeadership (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [moodle-nhse](https://github.com/NHSLeadership/moodle-nhse) | [`scss/components/button/_button.scss`](https://github.com/NHSLeadership/moodle-nhse/blob/HEAD/scss/components/button/_button.scss) | SCSS/CSS only |  |  | `nhsuk-card` |

#### nhsuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nhsapp-frontend](https://github.com/nhsuk/nhsapp-frontend) | [`src/components/button/_index.scss`](https://github.com/nhsuk/nhsapp-frontend/blob/HEAD/src/components/button/_index.scss) | SCSS/CSS only |  |  | `nhsuk-link` |

#### nice-digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nice-design-system](https://github.com/nice-digital/nice-design-system) | [`components/nds-button/src/Button.tsx`](https://github.com/nice-digital/nice-design-system/blob/HEAD/components/nds-button/src/Button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### osgeouk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [foss4g-2027](https://github.com/osgeouk/foss4g-2027) | [`src/components/Button.svelte`](https://github.com/osgeouk/foss4g-2027/blob/HEAD/src/components/Button.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### RoyalBoroughKingston (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ck-component-library](https://github.com/RoyalBoroughKingston/ck-component-library) | [`src/scss/components/_button.scss`](https://github.com/RoyalBoroughKingston/ck-component-library/blob/HEAD/src/scss/components/_button.scss) | SCSS/CSS only |  |  |  |

#### ukaea (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [MRFUI](https://github.com/ukaea/MRFUI) | [`src/lib/components/ui/button/button.svelte`](https://github.com/ukaea/MRFUI/blob/HEAD/src/lib/components/ui/button/button.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHO (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [admiralty-design-system](https://github.com/UKHO/admiralty-design-system) | [`packages/core/src/components/button/button.scss`](https://github.com/UKHO/admiralty-design-system/blob/HEAD/packages/core/src/components/button/button.scss) | SCSS/CSS only |  |  |  |

#### defra-design (2, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ltfri-prototype](https://github.com/defra-design/ltfri-prototype) | [`app/assets/sass/components/_buttons.scss`](https://github.com/defra-design/ltfri-prototype/blob/HEAD/app/assets/sass/components/_buttons.scss) | SCSS/CSS only | yes | yes | `gem-c-contents-list` |
| [reex-regulator-prototype](https://github.com/defra-design/reex-regulator-prototype) | [`app/assets/sass/components/_buttons.scss`](https://github.com/defra-design/reex-regulator-prototype/blob/HEAD/app/assets/sass/components/_buttons.scss) | SCSS/CSS only | yes | yes |  |

#### Government-People-Group (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [csj-ra-dash](https://github.com/Government-People-Group/csj-ra-dash) | [`app/assets/sass/components/_button-as-link.scss`](https://github.com/Government-People-Group/csj-ra-dash/blob/HEAD/app/assets/sass/components/_button-as-link.scss) | SCSS/CSS only | yes | yes |  |


### button-group — 15 repos, 10 orgs (15 production)

#### ministryofjustice (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bichard7-next-core](https://github.com/ministryofjustice/bichard7-next-core) | [`packages/ui/src/components/ButtonsGroup.tsx`](https://github.com/ministryofjustice/bichard7-next-core/blob/HEAD/packages/ui/src/components/ButtonsGroup.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [hmpps-forge](https://github.com/ministryofjustice/hmpps-forge) | [`packages/forge-govuk-components/src/components/button-group/govukButtonGroup.tsx`](https://github.com/ministryofjustice/hmpps-forge/blob/HEAD/packages/forge-govuk-components/src/components/button-group/govukButtonGroup.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [prepare-a-case](https://github.com/ministryofjustice/prepare-a-case) | [`server/views/components/button-group/macro.njk`](https://github.com/ministryofjustice/prepare-a-case/blob/HEAD/server/views/components/button-group/macro.njk) | Nunjucks macro |  |  | `moj-badge` |

#### DEFRA (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ncea-geonetwork](https://github.com/DEFRA/ncea-geonetwork) | [`core-geonetwork/web-ui/src/main/resources/catalog/lib/style/bootstrap/docs/_includes/components/button-groups.html`](https://github.com/DEFRA/ncea-geonetwork/blob/HEAD/core-geonetwork/web-ui/src/main/resources/catalog/lib/style/bootstrap/docs/_includes/components/button-groups.html) | template partial |  |  |  |
| [waste-packaging-regulators-fe](https://github.com/DEFRA/waste-packaging-regulators-fe) | [`src/client/stylesheets/components/_button-group.scss`](https://github.com/DEFRA/waste-packaging-regulators-fe/blob/HEAD/src/client/stylesheets/components/_button-group.scss) | SCSS/CSS only |  |  |  |

#### ONSdigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cpi-items-interactive](https://github.com/ONSdigital/cpi-items-interactive) | [`src/components/helpers/ButtonGroup.svelte`](https://github.com/ONSdigital/cpi-items-interactive/blob/HEAD/src/components/helpers/ButtonGroup.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [svelte-components](https://github.com/ONSdigital/svelte-components) | [`src/lib/components/ButtonGroup/ButtonGroup.svelte`](https://github.com/ONSdigital/svelte-components/blob/HEAD/src/lib/components/ButtonGroup/ButtonGroup.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHomeOffice (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [callisto-ui](https://github.com/UKHomeOffice/callisto-ui) | [`src/components/common/form/navigation/button-group/ButtonGroup.jsx`](https://github.com/UKHomeOffice/callisto-ui/blob/HEAD/src/components/common/form/navigation/button-group/ButtonGroup.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [GovUK-Design-System-React](https://github.com/UKHomeOffice/GovUK-Design-System-React) | [`components/button-group/src/ButtonGroup.tsx`](https://github.com/UKHomeOffice/GovUK-Design-System-React/blob/HEAD/components/button-group/src/ButtonGroup.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### britishlibrary (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [examples](https://github.com/britishlibrary/examples) | [`lib/foundation/scss/foundation/components/_button-groups.scss`](https://github.com/britishlibrary/examples/blob/HEAD/lib/foundation/scss/foundation/components/_button-groups.scss) | SCSS/CSS only |  |  |  |

#### dfe-analytical-services (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-common/src/components/ButtonGroup.tsx`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-common/src/components/ButtonGroup.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### scottish-government-design-system (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/Button/ButtonGroup.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/Button/ButtonGroup.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### SkillsFundingAgency (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-apprentice-app](https://github.com/SkillsFundingAgency/das-apprentice-app) | [`src/SFA.DAS.ApprenticeApp.Pwa/UI/components/_button-group.scss`](https://github.com/SkillsFundingAgency/das-apprentice-app/blob/HEAD/src/SFA.DAS.ApprenticeApp.Pwa/UI/components/_button-group.scss) | SCSS/CSS only |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [social-mobility-commission-website](https://github.com/ukgov-equality-hub/social-mobility-commission-website) | [`web/app/themes/smc/App_Themes/main/foundation-sites/scss/components/_button-group.scss`](https://github.com/ukgov-equality-hub/social-mobility-commission-website/blob/HEAD/web/app/themes/smc/App_Themes/main/foundation-sites/scss/components/_button-group.scss) | SCSS/CSS only |  |  |  |

#### UKHSA-Internal (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pre-entry-tb-screening-dicom-viewer](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer) | [`platform/ui/src/components/ButtonGroup/ButtonGroup.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer/blob/HEAD/platform/ui/src/components/ButtonGroup/ButtonGroup.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |


### submit-button — 5 repos, 5 orgs (5 production)

#### DEFRA (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [interactive-map](https://github.com/DEFRA/interactive-map) | [`plugins/search/src/components/SubmitButton/SubmitButton.jsx`](https://github.com/DEFRA/interactive-map/blob/HEAD/plugins/search/src/components/SubmitButton/SubmitButton.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### DFE-Digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [buy-for-your-school](https://github.com/DFE-Digital/buy-for-your-school) | [`app/components/submit_button_component.html.erb`](https://github.com/DFE-Digital/buy-for-your-school/blob/HEAD/app/components/submit_button_component.html.erb) | template partial |  |  |  |

#### InnovateUKGitHub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [innovation-funding-service-post-award](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award) | [`packages/app/src/ui/components/atoms/form/SubmitButton/SubmitButton.tsx`](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award/blob/HEAD/packages/app/src/ui/components/atoms/form/SubmitButton/SubmitButton.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UK-Export-Finance (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [exip](https://github.com/UK-Export-Finance/exip) | [`src/ui/templates/components/submit-button.njk`](https://github.com/UK-Export-Finance/exip/blob/HEAD/src/ui/templates/components/submit-button.njk) | template partial |  |  |  |

#### UKHSA-Internal (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pre-entry-tb-screening-app](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app) | [`pets-ui/src/components/submitButton/submitButton.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app/blob/HEAD/pets-ui/src/components/submitButton/submitButton.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |


### toggle-button — 3 repos, 3 orgs (3 production)

#### alan-turing-institute (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [AssurancePlatform](https://github.com/alan-turing-institute/AssurancePlatform) | [`components/cases/toggle-button.tsx`](https://github.com/alan-turing-institute/AssurancePlatform/blob/HEAD/components/cases/toggle-button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### Network-Rail-Business-Systems (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [vue-nested-tree](https://github.com/Network-Rail-Business-Systems/vue-nested-tree) | [`src/components/ToggleButton/ToggleButton.vue`](https://github.com/Network-Rail-Business-Systems/vue-nested-tree/blob/HEAD/src/components/ToggleButton/ToggleButton.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHSA-Internal (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [coronavirus-dashboard](https://github.com/UKHSA-Internal/coronavirus-dashboard) | [`src/components/ToggleButton/ToggleButton.js`](https://github.com/UKHSA-Internal/coronavirus-dashboard/blob/HEAD/src/components/ToggleButton/ToggleButton.js) | JS/TS component |  |  |  |


### start-button — 3 repos, 3 orgs (3 production)

#### dfe-analytical-services (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-common/src/components/StartButton.tsx`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-common/src/components/StartButton.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKGovernmentBEIS (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rpr-alpha-phase-prototype1](https://github.com/UKGovernmentBEIS/rpr-alpha-phase-prototype1) | [`src/components/gds-start-button/gds-start-button.tsx`](https://github.com/UKGovernmentBEIS/rpr-alpha-phase-prototype1/blob/HEAD/src/components/gds-start-button/gds-start-button.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHSA-Internal (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pre-entry-tb-screening-app](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app) | [`pets-ui/src/components/startButton/startButton.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app/blob/HEAD/pets-ui/src/components/startButton/startButton.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

## Adjacent work

Related clusters not included here: icon-button, dropdown-button, download-button, inverted-button, secondary-button. Backlog: "Exit this page" contribution, warning/destructive links, RTL support.
