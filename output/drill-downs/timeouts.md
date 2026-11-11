# Session timeouts: service repo drill-down

Generated 2026-11-11 from the audit snapshot of 2026-11-04 ([clusters.json](../clusters.json)) combined with class usage data ([class-usage.json](../class-usage.json)). See [report.md](../report.md) for methodology.

Timeout warning is #13 overall (49.8), with HMRC, ONS, Home Office and DWP all shipping implementations or patterns. The audit flags only 31% structural similarity across implementations — teams genuinely disagree on the pattern (modal vs page vs banner), which is itself a discovery finding.

The modal cluster is included because a timeout warning is usually a modal dialogue: HMRC's timeout-dialog is built on one, and without an accessible modal primitive in GOV.UK Frontend, teams hand-roll focus traps. The 25-comment "Modal dialogue" backlog discussion is the same demand surfacing twice.

Each repo appears once per cluster, with a link to the file the audit matched. "Extends GOV.UK" means the implementation builds on or imports the GOV.UK Frontend component rather than being written from scratch. The "Community classes used" column lists *all* community design system classes detected in that repo (any component) — repos consuming another organisation's component rather than, or as well as, building their own. "Orgs" counts unique GitHub organisations.

Caveats: detection is filename/class-name based, so some hits may be false positives, and one hit per repo means the audit shows *an* example file, not every instance. Class usage and component detection are independent scans: a repo can use a community class without having its own matching file, and vice versa.

## At a glance

| Cluster | Status | Score | Repos (production / prototype) | Orgs | Extend GOV.UK |
|---|---|---|---|---|---|
| timeout-warning | not in GOV.UK Frontend | 49.8 | 15 (14 / 1) | 9 |  |
| timeout | not in GOV.UK Frontend | 28.2 | 5 (5 / 0) | 2 |  |
| session-timeout | not in GOV.UK Frontend | 24.9 | 3 (3 / 0) | 3 |  |
| timeout-popup | not in GOV.UK Frontend | 20.4 | 4 (4 / 0) | 1 |  |
| modal (dependency) | not in GOV.UK Frontend | 48.0 | 98 (86 / 12) | 40 |  |

## Community class adoption

Repos using another design system's classes. These are *consumers* of a community component — evidence of which existing implementation teams reach for. Note the very low counts here: almost nobody consumes HMRC's timeout-dialog as a dependency — teams rebuild instead (see repo counts above).

| Class | Source design system | Repos | Orgs | Production | Prototypes |
|---|---|---|---|---|---|
| `hmrc-timeout-dialog` | hmrc-frontend | 1 | 1 | 0 | 1 |
| `gem-c-modal-dialogue` | govuk-publishing-components | 4 | 4 | 3 | 1 |

**1 repo both consumes a community class and has its own implementation** in the clusters below; **4 consume a community class with no matching own implementation detected**.

<details><summary>Consumers without their own implementation (4 repos, 4 orgs)</summary>

- **alphagov**: [emergency-alerts-admin-ui-prototype-new](https://github.com/alphagov/emergency-alerts-admin-ui-prototype-new) (proto) (`hmrc-timeout-dialog`)
- **defra-design**: [echo-prototype](https://github.com/defra-design/echo-prototype) (proto) (`gem-c-modal-dialogue`)
- **hmcts**: [rpx-xui-common-lib](https://github.com/hmcts/rpx-xui-common-lib) (`gem-c-modal-dialogue`)
- **nhsbsa**: [nhs-student-bursaries-new](https://github.com/nhsbsa/nhs-student-bursaries-new) (`gem-c-modal-dialogue`)

</details>

## Repos by cluster and organisation

### timeout-warning — 15 repos, 9 orgs (14 production)

⚠️ Only 31% structural similarity across implementations — modal vs page vs banner approaches all exist. HMRC (timeout-dialog component + service-timeout pattern), ONS (timeout-modal/timeout-panel components + extend-session pattern), Home Office and DWP (patterns).

#### hmcts (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [et-sya-frontend](https://github.com/hmcts/et-sya-frontend) | [`src/main/views/components/timeout-modal.njk`](https://github.com/hmcts/et-sya-frontend/blob/HEAD/src/main/views/components/timeout-modal.njk) | template partial |  |  |  |
| [et-syr-frontend](https://github.com/hmcts/et-syr-frontend) | [`src/main/views/components/timeout-modal.njk`](https://github.com/hmcts/et-syr-frontend/blob/HEAD/src/main/views/components/timeout-modal.njk) | template partial |  |  |  |
| [ia-aip-frontend](https://github.com/hmcts/ia-aip-frontend) | [`views/components/timeout-modal.njk`](https://github.com/hmcts/ia-aip-frontend/blob/HEAD/views/components/timeout-modal.njk) | template partial |  |  |  |
| [pcs-frontend](https://github.com/hmcts/pcs-frontend) | [`src/main/views/components/timeout-modal.njk`](https://github.com/hmcts/pcs-frontend/blob/HEAD/src/main/views/components/timeout-modal.njk) | template partial |  |  |  |

#### ministryofjustice (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [fb-runner](https://github.com/ministryofjustice/fb-runner) | [`app/javascript/styles/components/_timeout-warning.scss`](https://github.com/ministryofjustice/fb-runner/blob/HEAD/app/javascript/styles/components/_timeout-warning.scss) | SCSS/CSS only |  |  |  |
| [hmpps-people-on-probation-ui](https://github.com/ministryofjustice/hmpps-people-on-probation-ui) | [`assets/scss/components/_timeout-warning.scss`](https://github.com/ministryofjustice/hmpps-people-on-probation-ui/blob/HEAD/assets/scss/components/_timeout-warning.scss) | SCSS/CSS only |  |  | `moj-sub-navigation` |
| [pre-sentence-service](https://github.com/ministryofjustice/pre-sentence-service) | [`assets/sass/components/_timeout-warning.scss`](https://github.com/ministryofjustice/pre-sentence-service/blob/HEAD/assets/sass/components/_timeout-warning.scss) | SCSS/CSS only |  |  |  |

#### dwp (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dwp-kbv-uplift](https://github.com/dwp/dwp-kbv-uplift) | [`.tmp/backup-nunjucks/hmrc/components/timeout-dialog/macro.html`](https://github.com/dwp/dwp-kbv-uplift/blob/HEAD/.tmp/backup-nunjucks/hmrc/components/timeout-dialog/macro.html) | Nunjucks macro |  |  |  |
| [kbv-prototype](https://github.com/dwp/kbv-prototype) | [`.tmp/backup-nunjucks/hmrc/components/timeout-dialog/macro.html`](https://github.com/dwp/kbv-prototype/blob/HEAD/.tmp/backup-nunjucks/hmrc/components/timeout-dialog/macro.html) | Nunjucks macro | yes |  |  |

#### cabinetoffice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [fb-runner](https://github.com/cabinetoffice/fb-runner) | [`app/javascript/styles/components/_timeout-warning.scss`](https://github.com/cabinetoffice/fb-runner/blob/HEAD/app/javascript/styles/components/_timeout-warning.scss) | SCSS/CSS only |  |  |  |

#### defra-design (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [defra-frontend](https://github.com/defra-design/defra-frontend) | [`packages/defra-frontend/src/defra/components/timeout-dialog/_index.scss`](https://github.com/defra-design/defra-frontend/blob/HEAD/packages/defra-frontend/src/defra/components/timeout-dialog/_index.scss) | SCSS/CSS only |  |  |  |

#### DFE-Digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [claim-additional-payments-for-teaching](https://github.com/DFE-Digital/claim-additional-payments-for-teaching) | [`app/assets/javascripts/components/timeout_dialog.js`](https://github.com/DFE-Digital/claim-additional-payments-for-teaching/blob/HEAD/app/assets/javascripts/components/timeout_dialog.js) | JS/TS component |  |  |  |

#### hmrc (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmrc-frontend](https://github.com/hmrc/hmrc-frontend) | [`src/components/timeout-dialog/_timeout-dialog.scss`](https://github.com/hmrc/hmrc-frontend/blob/HEAD/src/components/timeout-dialog/_timeout-dialog.scss) | SCSS/CSS only |  |  | `hmrc-banner`, `hmrc-caseworker-banner`, `hmrc-print-link` |

#### nhsbsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [learning-support-fund](https://github.com/nhsbsa/learning-support-fund) | [`app/assets/sass/components/_timeout-modal.scss`](https://github.com/nhsbsa/learning-support-fund/blob/HEAD/app/assets/sass/components/_timeout-modal.scss) | SCSS/CSS only |  |  | `gem-c-attachment`, `nhsuk-action-link`, `nhsuk-card` |

#### ONSdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/ONSdigital/design-system) | [`src/components/timeout-modal/timeout-modal.js`](https://github.com/ONSdigital/design-system/blob/HEAD/src/components/timeout-modal/timeout-modal.js) | JS/TS component |  |  |  |


### timeout — 5 repos, 2 orgs (5 production)

Built in services only.

#### nhsbsa (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [margin-survey](https://github.com/nhsbsa/margin-survey) | [`app/assets/sass/components/_timeout.scss`](https://github.com/nhsbsa/margin-survey/blob/HEAD/app/assets/sass/components/_timeout.scss) | SCSS/CSS only |  |  | `nhsuk-card`, `nhsuk-link` |
| [mys-pharmacy](https://github.com/nhsbsa/mys-pharmacy) | [`app/assets/sass/components/_timeout.scss`](https://github.com/nhsbsa/mys-pharmacy/blob/HEAD/app/assets/sass/components/_timeout.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-link` |
| [prescription-training-package](https://github.com/nhsbsa/prescription-training-package) | [`app/assets/sass/components/_timeout.scss`](https://github.com/nhsbsa/prescription-training-package/blob/HEAD/app/assets/sass/components/_timeout.scss) | SCSS/CSS only |  |  |  |
| [TECS-2022](https://github.com/nhsbsa/TECS-2022) | [`app/assets/sass/components/_timeout.scss`](https://github.com/nhsbsa/TECS-2022/blob/HEAD/app/assets/sass/components/_timeout.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-link` |

#### alphagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [emergency-alerts-admin](https://github.com/alphagov/emergency-alerts-admin) | [`app/assets/stylesheets/components/timeout.scss`](https://github.com/alphagov/emergency-alerts-admin/blob/HEAD/app/assets/stylesheets/components/timeout.scss) | SCSS/CSS only |  |  |  |


### session-timeout — 3 repos, 3 orgs (3 production)

Built in services only.

#### DFE-Digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dsi-platform](https://github.com/DFE-Digital/dsi-platform) | [`frontend/src/components/session-timeout.scss`](https://github.com/DFE-Digital/dsi-platform/blob/HEAD/frontend/src/components/session-timeout.scss) | SCSS/CSS only |  |  |  |

#### dvsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ftts-booking-app](https://github.com/dvsa/ftts-booking-app) | [`ftts-frontend-assets/src/sass/components/_session-timeout.scss`](https://github.com/dvsa/ftts-booking-app/blob/HEAD/ftts-frontend-assets/src/sass/components/_session-timeout.scss) | SCSS/CSS only |  |  |  |

#### ministryofjustice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [serve-opg](https://github.com/ministryofjustice/serve-opg) | [`serve-web/assets/css/components/_session-timeout.scss`](https://github.com/ministryofjustice/serve-opg/blob/HEAD/serve-web/assets/css/components/_session-timeout.scss) | SCSS/CSS only |  |  |  |


### timeout-popup — 4 repos, 1 orgs (4 production)

Built in services only.

#### hmrc (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [odx-child-benefit-frontend](https://github.com/hmrc/odx-child-benefit-frontend) | [`src/components/AppComponents/TimeoutPopup/index.tsx`](https://github.com/hmrc/odx-child-benefit-frontend/blob/HEAD/src/components/AppComponents/TimeoutPopup/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-paye-hicbc-frontend](https://github.com/hmrc/odx-paye-hicbc-frontend) | [`src/components/AppComponents/TimeoutPopup/index.tsx`](https://github.com/hmrc/odx-paye-hicbc-frontend/blob/HEAD/src/components/AppComponents/TimeoutPopup/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-paye-iabd-frontend](https://github.com/hmrc/odx-paye-iabd-frontend) | [`src/components/AppComponents/TimeoutPopup/index.tsx`](https://github.com/hmrc/odx-paye-iabd-frontend/blob/HEAD/src/components/AppComponents/TimeoutPopup/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-self-assessment-frontend](https://github.com/hmrc/odx-self-assessment-frontend) | [`src/components/AppComponents/TimeoutPopup/index.tsx`](https://github.com/hmrc/odx-self-assessment-frontend/blob/HEAD/src/components/AppComponents/TimeoutPopup/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |


### modal (dependency) — 98 repos, 40 orgs (86 production)

Not timeout-specific, but the primitive a timeout warning needs. Backlog: "Modal dialogue" (25 comments).

#### ministryofjustice (17, 14 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [analytics-platform-control-panel](https://github.com/ministryofjustice/analytics-platform-control-panel) | [`controlpanel/frontend/static/components/modal-dialog/_modal-dialog.scss`](https://github.com/ministryofjustice/analytics-platform-control-panel/blob/HEAD/controlpanel/frontend/static/components/modal-dialog/_modal-dialog.scss) | SCSS/CSS only |  |  | `moj-add-another`, `moj-sub-navigation` |
| [analytics-platform-control-panel-public](https://github.com/ministryofjustice/analytics-platform-control-panel-public) | [`controlpanel/frontend/static/components/modal-dialog/_modal-dialog.scss`](https://github.com/ministryofjustice/analytics-platform-control-panel-public/blob/HEAD/controlpanel/frontend/static/components/modal-dialog/_modal-dialog.scss) | SCSS/CSS only |  |  |  |
| [fb-runner](https://github.com/ministryofjustice/fb-runner) | [`app/javascript/styles/components/_modal-dialog.scss`](https://github.com/ministryofjustice/fb-runner/blob/HEAD/app/javascript/styles/components/_modal-dialog.scss) | SCSS/CSS only |  |  |  |
| [hmpps-connect-dps-shared-items-package](https://github.com/ministryofjustice/hmpps-connect-dps-shared-items-package) | [`src/assets/dps/components/modal/_index.scss`](https://github.com/ministryofjustice/hmpps-connect-dps-shared-items-package/blob/HEAD/src/assets/dps/components/modal/_index.scss) | SCSS/CSS only |  |  |  |
| [hmpps-digital-tech-radar](https://github.com/ministryofjustice/hmpps-digital-tech-radar) | [`.techradar/src/components/Dialog/Dialog.tsx`](https://github.com/ministryofjustice/hmpps-digital-tech-radar/blob/HEAD/.techradar/src/components/Dialog/Dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [hmpps-esupervision-ui](https://github.com/ministryofjustice/hmpps-esupervision-ui) | [`assets/scss/components/_modal.scss`](https://github.com/ministryofjustice/hmpps-esupervision-ui/blob/HEAD/assets/scss/components/_modal.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-manage-a-supervision-ui](https://github.com/ministryofjustice/hmpps-manage-a-supervision-ui) | [`assets/scss/components/_modal.scss`](https://github.com/ministryofjustice/hmpps-manage-a-supervision-ui/blob/HEAD/assets/scss/components/_modal.scss) | SCSS/CSS only |  |  |  |
| [hmpps-manage-people-on-probation-ui](https://github.com/ministryofjustice/hmpps-manage-people-on-probation-ui) | [`assets/scss/components/_modal.scss`](https://github.com/ministryofjustice/hmpps-manage-people-on-probation-ui/blob/HEAD/assets/scss/components/_modal.scss) | SCSS/CSS only |  |  | `moj-search` |
| [hmpps-managing-prisoner-apps-staff-ui](https://github.com/ministryofjustice/hmpps-managing-prisoner-apps-staff-ui) | [`assets/scss/components/_modal-dialogue.scss`](https://github.com/ministryofjustice/hmpps-managing-prisoner-apps-staff-ui/blob/HEAD/assets/scss/components/_modal-dialogue.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-prisoner-education](https://github.com/ministryofjustice/hmpps-prisoner-education) | [`app/assets/sass/components/_modal.scss`](https://github.com/ministryofjustice/hmpps-prisoner-education/blob/HEAD/app/assets/sass/components/_modal.scss) | SCSS/CSS only |  |  |  |
| [hmpps-probation-check-in-ui](https://github.com/ministryofjustice/hmpps-probation-check-in-ui) | [`assets/scss/components/_modal.scss`](https://github.com/ministryofjustice/hmpps-probation-check-in-ui/blob/HEAD/assets/scss/components/_modal.scss) | SCSS/CSS only |  |  |  |
| [hmpps-strengths-based-needs-assessments-ui](https://github.com/ministryofjustice/hmpps-strengths-based-needs-assessments-ui) | [`assets/scss/components/_modal.scss`](https://github.com/ministryofjustice/hmpps-strengths-based-needs-assessments-ui/blob/HEAD/assets/scss/components/_modal.scss) | SCSS/CSS only |  |  | `gem-c-modal-dialogue`, `moj-side-navigation` |
| [justice-redact-frontend](https://github.com/ministryofjustice/justice-redact-frontend) | [`app/review/components/Modal.tsx`](https://github.com/ministryofjustice/justice-redact-frontend/blob/HEAD/app/review/components/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [prepare-a-case](https://github.com/ministryofjustice/prepare-a-case) | [`server/views/components/modal/macro.njk`](https://github.com/ministryofjustice/prepare-a-case/blob/HEAD/server/views/components/modal/macro.njk) | Nunjucks macro |  |  | `moj-badge` |
| [dwf-prototype](https://github.com/ministryofjustice/dwf-prototype) | [`app/assets/sass/components/_modal.scss`](https://github.com/ministryofjustice/dwf-prototype/blob/HEAD/app/assets/sass/components/_modal.scss) | SCSS/CSS only | yes |  | `moj-banner` |
| [hmpps-matching-prototype](https://github.com/ministryofjustice/hmpps-matching-prototype) | [`app/assets/sass/components/_modal.scss`](https://github.com/ministryofjustice/hmpps-matching-prototype/blob/HEAD/app/assets/sass/components/_modal.scss) | SCSS/CSS only | yes |  |  |
| [legacy-systems-x-product-prototype](https://github.com/ministryofjustice/legacy-systems-x-product-prototype) | [`app/assets/sass/components/_modal.scss`](https://github.com/ministryofjustice/legacy-systems-x-product-prototype/blob/HEAD/app/assets/sass/components/_modal.scss) | SCSS/CSS only | yes |  |  |

#### SkillsFundingAgency (6, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-apprentice-app](https://github.com/SkillsFundingAgency/das-apprentice-app) | [`src/SFA.DAS.ApprenticeApp.Pwa/Frontend/components/modal/_index.scss`](https://github.com/SkillsFundingAgency/das-apprentice-app/blob/HEAD/src/SFA.DAS.ApprenticeApp.Pwa/Frontend/components/modal/_index.scss) | SCSS/CSS only |  |  |  |
| [das-campaigns-prototype](https://github.com/SkillsFundingAgency/das-campaigns-prototype) | [`app/views/campaign/components/modal/macro.njk`](https://github.com/SkillsFundingAgency/das-campaigns-prototype/blob/HEAD/app/views/campaign/components/modal/macro.njk) | Nunjucks macro |  |  |  |
| [das-epao-fireitup](https://github.com/SkillsFundingAgency/das-epao-fireitup) | [`app/views/campaign/components/modal/macro.njk`](https://github.com/SkillsFundingAgency/das-epao-fireitup/blob/HEAD/app/views/campaign/components/modal/macro.njk) | Nunjucks macro |  |  |  |
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/das/sass/components/modal/_modal.scss`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/das/sass/components/modal/_modal.scss) | SCSS/CSS only |  |  |  |
| [tl-find-provider-api](https://github.com/SkillsFundingAgency/tl-find-provider-api) | [`src/Sfa.Tl.Find.Provider.Web/Frontend/src/scss/components/_modal.scss`](https://github.com/SkillsFundingAgency/tl-find-provider-api/blob/HEAD/src/Sfa.Tl.Find.Provider.Web/Frontend/src/scss/components/_modal.scss) | SCSS/CSS only |  |  |  |
| [tl-results-and-certification](https://github.com/SkillsFundingAgency/tl-results-and-certification) | [`src/Sfa.Tl.ResultsAndCertification.Web/Frontend/src/stylesheets/sass/components/_modal.scss`](https://github.com/SkillsFundingAgency/tl-results-and-certification/blob/HEAD/src/Sfa.Tl.ResultsAndCertification.Web/Frontend/src/stylesheets/sass/components/_modal.scss) | SCSS/CSS only |  |  |  |

#### DFE-Digital (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [buying-for-schools-admin](https://github.com/DFE-Digital/buying-for-schools-admin) | [`src/components/dialog/dialog.css`](https://github.com/DFE-Digital/buying-for-schools-admin/blob/HEAD/src/components/dialog/dialog.css) | SCSS/CSS only |  |  |  |
| [childcare-support-platform](https://github.com/DFE-Digital/childcare-support-platform) | [`packages/app/src/components/ui/Modal.tsx`](https://github.com/DFE-Digital/childcare-support-platform/blob/HEAD/packages/app/src/components/ui/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dfe-data-provider-hub](https://github.com/DFE-Digital/dfe-data-provider-hub) | [`app/assets/sass/components/_modal.scss`](https://github.com/DFE-Digital/dfe-data-provider-hub/blob/HEAD/app/assets/sass/components/_modal.scss) | SCSS/CSS only |  |  |  |
| [dfefrontend](https://github.com/DFE-Digital/dfefrontend) | [`packages/dfe-frontend/src/components/modal/_index.scss`](https://github.com/DFE-Digital/dfefrontend/blob/HEAD/packages/dfe-frontend/src/components/modal/_index.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [education-benchmarking-and-insights](https://github.com/DFE-Digital/education-benchmarking-and-insights) | [`front-end-components/src/components/modals/modal/index.tsx`](https://github.com/DFE-Digital/education-benchmarking-and-insights/blob/HEAD/front-end-components/src/components/modals/modal/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### alan-turing-institute (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [AssurancePlatform](https://github.com/alan-turing-institute/AssurancePlatform) | [`components/ui/alert-dialog.tsx`](https://github.com/alan-turing-institute/AssurancePlatform/blob/HEAD/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [bias-cards](https://github.com/alan-turing-institute/bias-cards) | [`components/ui/dialog.tsx`](https://github.com/alan-turing-institute/bias-cards/blob/HEAD/components/ui/dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [trustworthiness-framework](https://github.com/alan-turing-institute/trustworthiness-framework) | [`client/src/components/ui/alert-dialog.tsx`](https://github.com/alan-turing-institute/trustworthiness-framework/blob/HEAD/client/src/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [uatk-spc](https://github.com/alan-turing-institute/uatk-spc) | [`web/components/Modal.svelte`](https://github.com/alan-turing-institute/uatk-spc/blob/HEAD/web/components/Modal.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### hmrc (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [odx-child-benefit-frontend](https://github.com/hmrc/odx-child-benefit-frontend) | [`src/components/BaseComponents/Modal/Modal.tsx`](https://github.com/hmrc/odx-child-benefit-frontend/blob/HEAD/src/components/BaseComponents/Modal/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-paye-hicbc-frontend](https://github.com/hmrc/odx-paye-hicbc-frontend) | [`src/components/BaseComponents/Modal/Modal.tsx`](https://github.com/hmrc/odx-paye-hicbc-frontend/blob/HEAD/src/components/BaseComponents/Modal/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-paye-iabd-frontend](https://github.com/hmrc/odx-paye-iabd-frontend) | [`src/components/BaseComponents/Modal/Modal.tsx`](https://github.com/hmrc/odx-paye-iabd-frontend/blob/HEAD/src/components/BaseComponents/Modal/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-self-assessment-frontend](https://github.com/hmrc/odx-self-assessment-frontend) | [`src/components/BaseComponents/Modal/Modal.tsx`](https://github.com/hmrc/odx-self-assessment-frontend/blob/HEAD/src/components/BaseComponents/Modal/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### i-dot-ai (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [consult](https://github.com/i-dot-ai/consult) | [`frontend/src/components/Modal/Modal.svelte`](https://github.com/i-dot-ai/consult/blob/HEAD/frontend/src/components/Modal/Modal.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [design-kit](https://github.com/i-dot-ai/design-kit) | [`packages/frontend/src/components/modal/_index.scss`](https://github.com/i-dot-ai/design-kit/blob/HEAD/packages/frontend/src/components/modal/_index.scss) | SCSS/CSS only |  |  |  |
| [lex](https://github.com/i-dot-ai/lex) | [`app/src/components/ui/alert-dialog.tsx`](https://github.com/i-dot-ai/lex/blob/HEAD/app/src/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [minute](https://github.com/i-dot-ai/minute) | [`frontend/components/ui/alert-dialog.tsx`](https://github.com/i-dot-ai/minute/blob/HEAD/frontend/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### CPS-Innovation (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Large-and-Complex-Cases](https://github.com/CPS-Innovation/Large-and-Complex-Cases) | [`ui-spa/src/components/common/Modal.tsx`](https://github.com/CPS-Innovation/Large-and-Complex-Cases/blob/HEAD/ui-spa/src/components/common/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [Managed-Materials-UI](https://github.com/CPS-Innovation/Managed-Materials-UI) | [`materials_ui/src/components/Modal/Modal.scss`](https://github.com/CPS-Innovation/Managed-Materials-UI/blob/HEAD/materials_ui/src/components/Modal/Modal.scss) | SCSS/CSS only |  |  |  |
| [Polaris](https://github.com/CPS-Innovation/Polaris) | [`polaris-ui/src/app/common/presentation/components/Modal.tsx`](https://github.com/CPS-Innovation/Polaris/blob/HEAD/polaris-ui/src/app/common/presentation/components/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### hmcts (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [batch-audio-transcription](https://github.com/hmcts/batch-audio-transcription) | [`frontend/components/ui/alert-dialog.tsx`](https://github.com/hmcts/batch-audio-transcription/blob/HEAD/frontend/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dasi-ai-in-sdlc-aica](https://github.com/hmcts/dasi-ai-in-sdlc-aica) | [`008 - SAAS/Lovable/court-finder-express-main/src/components/ui/alert-dialog.tsx`](https://github.com/hmcts/dasi-ai-in-sdlc-aica/blob/HEAD/008 - SAAS/Lovable/court-finder-express-main/src/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [transcribe-web](https://github.com/hmcts/transcribe-web) | [`components/recording/ui/alert-dialog.tsx`](https://github.com/hmcts/transcribe-web/blob/HEAD/components/recording/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### LBHackney-IT (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [mtfh-frontend](https://github.com/LBHackney-IT/mtfh-frontend) | [`packages/react/src/components/dialog/dialog.tsx`](https://github.com/LBHackney-IT/mtfh-frontend/blob/HEAD/packages/react/src/components/dialog/dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [mtfh-frontend-common](https://github.com/LBHackney-IT/mtfh-frontend-common) | [`lib/components/dialog/dialog.tsx`](https://github.com/LBHackney-IT/mtfh-frontend-common/blob/HEAD/lib/components/dialog/dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [ways-into-work](https://github.com/LBHackney-IT/ways-into-work) | [`app/assets/stylesheets/components/modal.sass`](https://github.com/LBHackney-IT/ways-into-work/blob/HEAD/app/assets/stylesheets/components/modal.sass) | SCSS/CSS only |  |  |  |

#### TechnologyEnhancedLearning (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [LearningHub.Nhs.WebUI](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI) | [`LearningHub.Nhs.WebUI/Styles/components/_modals.scss`](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI/blob/HEAD/LearningHub.Nhs.WebUI/Styles/components/_modals.scss) | SCSS/CSS only |  |  |  |
| [LearningHub.Nhs.WebUI.Forked](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked) | [`LearningHub.Nhs.WebUI/Styles/components/_modals.scss`](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked/blob/HEAD/LearningHub.Nhs.WebUI/Styles/components/_modals.scss) | SCSS/CSS only |  |  |  |
| [LearningHub.Nhs.WebUI.Forked.B](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked.B) | [`LearningHub.Nhs.WebUI/Styles/components/_modals.scss`](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked.B/blob/HEAD/LearningHub.Nhs.WebUI/Styles/components/_modals.scss) | SCSS/CSS only |  |  |  |

#### DEFRA (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ncea-frontend](https://github.com/DEFRA/ncea-frontend) | [`src/assets/sass/components/_modal.scss`](https://github.com/DEFRA/ncea-frontend/blob/HEAD/src/assets/sass/components/_modal.scss) | SCSS/CSS only |  |  |  |
| [prompt-library](https://github.com/DEFRA/prompt-library) | [`src/components/Modal.tsx`](https://github.com/DEFRA/prompt-library/blob/HEAD/src/components/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [nrf-prototypes](https://github.com/DEFRA/nrf-prototypes) | [`app/assets/javascripts/components/modal.js`](https://github.com/DEFRA/nrf-prototypes/blob/HEAD/app/assets/javascripts/components/modal.js) | JS/TS component | yes |  |  |

#### dwp (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dwp-ask](https://github.com/dwp/dwp-ask) | [`components/ui/Modal/Modal.tsx`](https://github.com/dwp/dwp-ask/blob/HEAD/components/ui/Modal/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [Searchlight](https://github.com/dwp/Searchlight) | [`app/v6/views/components/modals.html`](https://github.com/dwp/Searchlight/blob/HEAD/app/v6/views/components/modals.html) | template partial |  |  |  |
| [prs-prototype](https://github.com/dwp/prs-prototype) | [`app/assets/sass/components/_modal-dialogue.scss`](https://github.com/dwp/prs-prototype/blob/HEAD/app/assets/sass/components/_modal-dialogue.scss) | SCSS/CSS only | yes |  |  |

#### cabinetoffice (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cod_bfs_api_dev_portal_cfn](https://github.com/cabinetoffice/cod_bfs_api_dev_portal_cfn) | [`dev-portal/src/components/Modal.jsx`](https://github.com/cabinetoffice/cod_bfs_api_dev_portal_cfn/blob/HEAD/dev-portal/src/components/Modal.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [fb-runner](https://github.com/cabinetoffice/fb-runner) | [`app/javascript/styles/components/_modal-dialog.scss`](https://github.com/cabinetoffice/fb-runner/blob/HEAD/app/javascript/styles/components/_modal-dialog.scss) | SCSS/CSS only |  |  |  |

#### communitiesuk (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ailg-minute](https://github.com/communitiesuk/ailg-minute) | [`frontend/components/ui/alert-dialog.tsx`](https://github.com/communitiesuk/ailg-minute/blob/HEAD/frontend/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [localai-local-transcribe](https://github.com/communitiesuk/localai-local-transcribe) | [`frontend/components/govuk/modal-dialogue.tsx`](https://github.com/communitiesuk/localai-local-transcribe/blob/HEAD/frontend/components/govuk/modal-dialogue.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### InnovateUKGitHub (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [een-webapp](https://github.com/InnovateUKGitHub/een-webapp) | [`drupal/core/themes/classy/css/components/dialog.css`](https://github.com/InnovateUKGitHub/een-webapp/blob/HEAD/drupal/core/themes/classy/css/components/dialog.css) | SCSS/CSS only |  |  |  |
| [innovation-funding-service](https://github.com/InnovateUKGitHub/innovation-funding-service) | [`ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_modal.scss`](https://github.com/InnovateUKGitHub/innovation-funding-service/blob/HEAD/ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_modal.scss) | SCSS/CSS only |  |  |  |

#### lgss (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rekommend-manage](https://github.com/lgss/rekommend-manage) | [`src/components/Dialog.vue`](https://github.com/lgss/rekommend-manage/blob/HEAD/src/components/Dialog.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [techknow](https://github.com/lgss/techknow) | [`src/components/Dialog.vue`](https://github.com/lgss/techknow/blob/HEAD/src/components/Dialog.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ONSdigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/ONSdigital/design-system) | [`src/components/modal/_modal.scss`](https://github.com/ONSdigital/design-system/blob/HEAD/src/components/modal/_modal.scss) | SCSS/CSS only |  |  |  |
| [explore-local-statistics-app](https://github.com/ONSdigital/explore-local-statistics-app) | [`src/lib/components/modals/Modal.svelte`](https://github.com/ONSdigital/explore-local-statistics-app/blob/HEAD/src/lib/components/modals/Modal.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHomeOffice (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hof-forms-waf](https://github.com/UKHomeOffice/hof-forms-waf) | [`admin-ui/src/components/ui/alert-dialog.tsx`](https://github.com/UKHomeOffice/hof-forms-waf/blob/HEAD/admin-ui/src/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [sre-monitoring-as-code](https://github.com/UKHomeOffice/sre-monitoring-as-code) | [`example-apps/sre-demo-frontend-app/src/components/Modal.vue`](https://github.com/UKHomeOffice/sre-monitoring-as-code/blob/HEAD/example-apps/sre-demo-frontend-app/src/components/Modal.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHSA-Internal (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [data-dashboard-frontend](https://github.com/UKHSA-Internal/data-dashboard-frontend) | [`src/app/components/ui/ukhsa/Dialog/Dialog.tsx`](https://github.com/UKHSA-Internal/data-dashboard-frontend/blob/HEAD/src/app/components/ui/ukhsa/Dialog/Dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [pre-entry-tb-screening-dicom-viewer](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer) | [`platform/ui-next/src/components/Dialog/Dialog.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer/blob/HEAD/platform/ui-next/src/components/Dialog/Dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nhsbsa (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nhs-pension](https://github.com/nhsbsa/nhs-pension) | [`app/v6/assets/javascripts/components/dialog.js`](https://github.com/nhsbsa/nhs-pension/blob/HEAD/app/v6/assets/javascripts/components/dialog.js) | JS/TS component |  |  |  |
| [nhs-pension-prototype-swoosh](https://github.com/nhsbsa/nhs-pension-prototype-swoosh) | [`app/v6/assets/javascripts/components/dialog.js`](https://github.com/nhsbsa/nhs-pension-prototype-swoosh/blob/HEAD/app/v6/assets/javascripts/components/dialog.js) | JS/TS component | yes |  |  |

#### trade-tariff (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [trade-tariff-frontend](https://github.com/trade-tariff/trade-tariff-frontend) | [`app/assets/stylesheets/src/components/_modal.scss`](https://github.com/trade-tariff/trade-tariff-frontend/blob/HEAD/app/assets/stylesheets/src/components/_modal.scss) | SCSS/CSS only |  |  |  |
| [ott-prototype](https://github.com/trade-tariff/ott-prototype) | [`app/assets/sass/components/_dialog.scss`](https://github.com/trade-tariff/ott-prototype/blob/HEAD/app/assets/sass/components/_dialog.scss) | SCSS/CSS only | yes |  |  |

#### co-cddo (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rapid](https://github.com/co-cddo/rapid) | [`frontend/src/components/Dialog/Dialog.tsx`](https://github.com/co-cddo/rapid/blob/HEAD/frontend/src/components/Dialog/Dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### Crown-Commercial-Service (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ccs-scale-cat-buyer-ui](https://github.com/Crown-Commercial-Service/ccs-scale-cat-buyer-ui) | [`src/main/views/components/dialog.njk`](https://github.com/Crown-Commercial-Service/ccs-scale-cat-buyer-ui/blob/HEAD/src/main/views/components/dialog.njk) | template partial |  |  |  |

#### defencedigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [discover-my-benefits](https://github.com/defencedigital/discover-my-benefits) | [`clientside/MOD-Rewards-Hub/app/components/Modal/index.scss`](https://github.com/defencedigital/discover-my-benefits/blob/HEAD/clientside/MOD-Rewards-Hub/app/components/Modal/index.scss) | SCSS/CSS only |  |  |  |

#### department-for-transport-BODS (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [abods](https://github.com/department-for-transport-BODS/abods) | [`frontend/components/shared/Modal/Modal.tsx`](https://github.com/department-for-transport-BODS/abods/blob/HEAD/frontend/components/shared/Modal/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dfe-analytical-services (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-common/src/components/Modal.tsx`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-common/src/components/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dvsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [vol-app](https://github.com/dvsa/vol-app) | [`app/cdn/assets/_styles/components/modal.scss`](https://github.com/dvsa/vol-app/blob/HEAD/app/cdn/assets/_styles/components/modal.scss) | SCSS/CSS only |  |  |  |

#### essexcountycouncil (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [send-lgdrupal](https://github.com/essexcountycouncil/send-lgdrupal) | [`web/core/profiles/demo_umami/themes/umami/css/classy/components/dialog.css`](https://github.com/essexcountycouncil/send-lgdrupal/blob/HEAD/web/core/profiles/demo_umami/themes/umami/css/classy/components/dialog.css) | SCSS/CSS only |  |  |  |

#### gosh-dre (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gmsa_genomic_fhir_webapp](https://github.com/gosh-dre/gmsa_genomic_fhir_webapp) | [`src/components/UI/Modal.tsx`](https://github.com/gosh-dre/gmsa_genomic_fhir_webapp/blob/HEAD/src/components/UI/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### HO-CTO (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [sre-monitoring-as-code](https://github.com/HO-CTO/sre-monitoring-as-code) | [`example-apps/sre-demo-frontend-app/src/components/Modal.vue`](https://github.com/HO-CTO/sre-monitoring-as-code/blob/HEAD/example-apps/sre-demo-frontend-app/src/components/Modal.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nhsx (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [audere](https://github.com/nhsx/audere) | [`Covid19_Antibody_uk/src/ui/components/Modal.tsx`](https://github.com/nhsx/audere/blob/HEAD/Covid19_Antibody_uk/src/ui/components/Modal.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### no10ds (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rapid](https://github.com/no10ds/rapid) | [`frontend/src/components/Dialog/Dialog.tsx`](https://github.com/no10ds/rapid/blob/HEAD/frontend/src/components/Dialog/Dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### OrdnanceSurvey (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [web-elements](https://github.com/OrdnanceSurvey/web-elements) | [`src/components/modal/modal.ts`](https://github.com/OrdnanceSurvey/web-elements/blob/HEAD/src/components/modal/modal.ts) | JS/TS component |  |  |  |

#### Planning-Inspectorate (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [library-service](https://github.com/Planning-Inspectorate/library-service) | [`web/themes/contrib/bootstrap5/css/components/dialog.css`](https://github.com/Planning-Inspectorate/library-service/blob/HEAD/web/themes/contrib/bootstrap5/css/components/dialog.css) | SCSS/CSS only |  |  |  |

#### smbc-digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [SMBC-Sonic-Brief-Community-Edition](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition) | [`frontend_app/src/components/ui/alert-dialog.tsx`](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition/blob/HEAD/frontend_app/src/components/ui/alert-dialog.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [social-mobility-commission-website](https://github.com/ukgov-equality-hub/social-mobility-commission-website) | [`web/app/themes/smc/App_Themes/main/css/components/_modal.scss`](https://github.com/ukgov-equality-hub/social-mobility-commission-website/blob/HEAD/web/app/themes/smc/App_Themes/main/css/components/_modal.scss) | SCSS/CSS only |  |  |  |

#### UKHO (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [admiralty-design-system](https://github.com/UKHO/admiralty-design-system) | [`packages/core/src/components/modal-dialog/modal-dialog.scss`](https://github.com/UKHO/admiralty-design-system/blob/HEAD/packages/core/src/components/modal-dialog/modal-dialog.scss) | SCSS/CSS only |  |  |  |

#### uktrade (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [redbox](https://github.com/uktrade/redbox) | [`django_app/frontend/src/interaction_design_system/ids/components/modal.html`](https://github.com/uktrade/redbox/blob/HEAD/django_app/frontend/src/interaction_design_system/ids/components/modal.html) | template partial |  |  |  |

#### NHSDigital (3, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) | [`app/assets/sass/components/_modal.scss`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_modal.scss) | SCSS/CSS only | yes |  | `nhsuk-link` |
| [nhs-eps-prototype](https://github.com/NHSDigital/nhs-eps-prototype) | [`app/assets/sass/components/_modal.scss`](https://github.com/NHSDigital/nhs-eps-prototype/blob/HEAD/app/assets/sass/components/_modal.scss) | SCSS/CSS only | yes |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-link` |
| [prototype-gp-registration](https://github.com/NHSDigital/prototype-gp-registration) | [`app/assets/sass/components/_modal.scss`](https://github.com/NHSDigital/prototype-gp-registration/blob/HEAD/app/assets/sass/components/_modal.scss) | SCSS/CSS only | yes |  |  |

#### alphagov (2, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [govuk-content-publisher-prototype](https://github.com/alphagov/govuk-content-publisher-prototype) | [`app/assets/javascripts/components/modal-dialogue.js`](https://github.com/alphagov/govuk-content-publisher-prototype/blob/HEAD/app/assets/javascripts/components/modal-dialogue.js) | JS/TS component | yes |  |  |
| [govuk-content-publisher-prototype-old](https://github.com/alphagov/govuk-content-publisher-prototype-old) | [`app/assets/sass/components/_modal-dialogue.scss`](https://github.com/alphagov/govuk-content-publisher-prototype-old/blob/HEAD/app/assets/sass/components/_modal-dialogue.scss) | SCSS/CSS only | yes |  |  |

## Adjacent work

Related backlog discussions: "Timeout warning" (29 comments), "Modal dialogue" (25), "Timeout page" (7). Related clusters not included here: discard-dialog, share-modal. The WCAG angle (2.2.1 timing adjustable, 2.2.5 re-authenticating) and multi-tab synchronisation are discovery questions, not visible in this data.
