# Card: service repo drill-down

Generated 2026-11-11 from the audit snapshot of 2026-11-04 ([clusters.json](../clusters.json)) combined with class usage data ([class-usage.json](../class-usage.json)). See [report.md](../report.md) for methodology.

Card is the #2 candidate overall in the audit (score 72.8): 7 design system organisations ship one and there is no GOV.UK Frontend equivalent to extend, so every implementation is built independently.

Each repo appears once per cluster, with a link to the file the audit matched. "Extends GOV.UK" means the implementation builds on or imports the GOV.UK Frontend component rather than being written from scratch. The "Community classes used" column lists *all* community design system classes detected in that repo (any component) — repos consuming another organisation's component rather than, or as well as, building their own. "Orgs" counts unique GitHub organisations.

Caveats: detection is filename/class-name based, so some hits may be false positives, and one hit per repo means the audit shows *an* example file, not every instance. Class usage and component detection are independent scans: a repo can use a community class without having its own matching file, and vice versa.

## At a glance

| Cluster | Status | Score | Repos (production / prototype) | Orgs | Extend GOV.UK |
|---|---|---|---|---|---|
| card | not in GOV.UK Frontend | 72.8 | 244 (195 / 49) | 53 |  |

## Community class adoption

Repos using another design system's classes. These are *consumers* of a community component — evidence of which existing implementation teams reach for.

| Class | Source design system | Repos | Orgs | Production | Prototypes |
|---|---|---|---|---|---|
| `nhsuk-card` | nhsuk-frontend | 66 | 9 | 47 | 19 |
| `dfe-card` | dfe-frontend | 39 | 4 | 30 | 9 |
| `gem-c-cards` | govuk-publishing-components | 5 | 2 | 3 | 2 |
| `gem-c-image-card` | govuk-publishing-components | 5 | 4 | 1 | 4 |
| `tna-card` | tna-frontend | 3 | 1 | 2 | 1 |

**18 repos both consume a community class and have their own implementation** in the clusters below; **100 consume a community class with no matching own implementation detected**.

<details><summary>Consumers without their own implementation (100 repos, 15 orgs)</summary>

- **alphagov**: [govuk-dark-mode-prototype](https://github.com/alphagov/govuk-dark-mode-prototype) (proto) (`gem-c-image-card`)
- **defencedigital**: [moduk-prototype-kit](https://github.com/defencedigital/moduk-prototype-kit) (proto) (`nhsuk-card`)
- **defra-design**: [echo-prototype](https://github.com/defra-design/echo-prototype) (proto) (`gem-c-image-card`), [fcp-farming-front-door](https://github.com/defra-design/fcp-farming-front-door) (`gem-c-cards`), [ff-ss](https://github.com/defra-design/ff-ss) (`gem-c-image-card`), [lars](https://github.com/defra-design/lars) (`gem-c-cards`)
- **DFE-Digital**: [accessibility-manual](https://github.com/DFE-Digital/accessibility-manual) (`dfe-card`), [am-2025-refresh](https://github.com/DFE-Digital/am-2025-refresh) (`dfe-card`), [apply-the-service-standard-in-dfe](https://github.com/DFE-Digital/apply-the-service-standard-in-dfe) (`dfe-card`), [care-leavers-gov-prototype](https://github.com/DFE-Digital/care-leavers-gov-prototype) (proto) (`gem-c-cards`), [check-performance-data-prototype](https://github.com/DFE-Digital/check-performance-data-prototype) (proto) (`dfe-card`), [communicating-funding-prototype](https://github.com/DFE-Digital/communicating-funding-prototype) (proto) (`dfe-card`), [design-history](https://github.com/DFE-Digital/design-history) (`dfe-card`), [DfE-Connect-Prototype](https://github.com/DFE-Digital/DfE-Connect-Prototype) (proto) (`dfe-card`), [dfe-standards](https://github.com/DFE-Digital/dfe-standards) (`dfe-card`), [education-provider-registry-web](https://github.com/DFE-Digital/education-provider-registry-web) (`dfe-card`), [eduk-prototype](https://github.com/DFE-Digital/eduk-prototype) (proto) (`gem-c-image-card`), [find-a-buying-solution](https://github.com/DFE-Digital/find-a-buying-solution) (`dfe-card`), [find-a-prototype](https://github.com/DFE-Digital/find-a-prototype) (proto) (`dfe-card`), [find-and-use-products-services-mvp](https://github.com/DFE-Digital/find-and-use-products-services-mvp) (`gem-c-cards`), [find-courses-and-training](https://github.com/DFE-Digital/find-courses-and-training) (`dfe-card`), [find-information-about-schools-and-trusts](https://github.com/DFE-Digital/find-information-about-schools-and-trusts) (`dfe-card`), [fips-v4](https://github.com/DFE-Digital/fips-v4) (`dfe-card`), [get-help-buying-for-schools](https://github.com/DFE-Digital/get-help-buying-for-schools) (`dfe-card`), [ghbs-energy-as-a-service](https://github.com/DFE-Digital/ghbs-energy-as-a-service) (`dfe-card`), [improve-workload-and-wellbeing-for-school-staff](https://github.com/DFE-Digital/improve-workload-and-wellbeing-for-school-staff) (`dfe-card`), [manage-free-school-projects](https://github.com/DFE-Digital/manage-free-school-projects) (`dfe-card`), [neet-digital](https://github.com/DFE-Digital/neet-digital) (`dfe-card`), [product](https://github.com/DFE-Digital/product) (`dfe-card`), [prototype_ghw_dp](https://github.com/DFE-Digital/prototype_ghw_dp) (proto) (`dfe-card`), [prototype-register-of-services](https://github.com/DFE-Digital/prototype-register-of-services) (proto) (`dfe-card`), [rsd-reep](https://github.com/DFE-Digital/rsd-reep) (`dfe-card`), [security-manual](https://github.com/DFE-Digital/security-manual) (`dfe-card`), [standards](https://github.com/DFE-Digital/standards) (`dfe-card`), [standards-manual](https://github.com/DFE-Digital/standards-manual) (`dfe-card`), [sts-content-support](https://github.com/DFE-Digital/sts-content-support) (`dfe-card`), [teacher-success-prototype](https://github.com/DFE-Digital/teacher-success-prototype) (proto) (`dfe-card`), [template-frontend-manual](https://github.com/DFE-Digital/template-frontend-manual) (`dfe-card`), [user-research-new-manual](https://github.com/DFE-Digital/user-research-new-manual) (`dfe-card`)
- **dwp**: [beam-prototype](https://github.com/dwp/beam-prototype) (proto) (`gem-c-image-card`), [carers-alerts-prototype](https://github.com/dwp/carers-alerts-prototype) (proto) (`dfe-card`), [one-view-prototype](https://github.com/dwp/one-view-prototype) (proto) (`dfe-card`)
- **ministryofjustice**: [applying-service-standards](https://github.com/ministryofjustice/applying-service-standards) (`dfe-card`)
- **nationalarchives**: [ds-catalogue-progressive-prototype](https://github.com/nationalarchives/ds-catalogue-progressive-prototype) (proto) (`tna-card`)
- **NHS-Test-Digital-Design**: [nhs-antibody-testing-registration-prototype](https://github.com/NHS-Test-Digital-Design/nhs-antibody-testing-registration-prototype) (proto) (`nhsuk-card`)
- **nhsbsa**: [ai-prototyping](https://github.com/nhsbsa/ai-prototyping) (`nhsuk-card`), [apply-healthy-start-vouchers](https://github.com/nhsbsa/apply-healthy-start-vouchers) (`nhsuk-card`), [cdr-client-prototype](https://github.com/nhsbsa/cdr-client-prototype) (proto) (`nhsuk-card`), [cip-nightapps-prototype](https://github.com/nhsbsa/cip-nightapps-prototype) (proto) (`nhsuk-card`), [data-hub](https://github.com/nhsbsa/data-hub) (`nhsuk-card`), [dentist-alpha-song-prototype](https://github.com/nhsbsa/dentist-alpha-song-prototype) (proto) (`nhsuk-card`), [hwhc-certificate-manager](https://github.com/nhsbsa/hwhc-certificate-manager) (`nhsuk-card`), [hwhc-eligibility-checker](https://github.com/nhsbsa/hwhc-eligibility-checker) (`nhsuk-card`), [learning-support-fund](https://github.com/nhsbsa/learning-support-fund) (`nhsuk-card`), [learning-support-fund-new](https://github.com/nhsbsa/learning-support-fund-new) (`nhsuk-card`), [manage-healthy-start-vouchers](https://github.com/nhsbsa/manage-healthy-start-vouchers) (`nhsuk-card`), [margin-survey](https://github.com/nhsbsa/margin-survey) (`nhsuk-card`), [match-ohs-record](https://github.com/nhsbsa/match-ohs-record) (`nhsuk-card`), [McCloud-Choice](https://github.com/nhsbsa/McCloud-Choice) (`nhsuk-card`), [medical-certificate-of-cause-of-death](https://github.com/nhsbsa/medical-certificate-of-cause-of-death) (`nhsuk-card`), [medicines-management-prototype](https://github.com/nhsbsa/medicines-management-prototype) (proto) (`nhsuk-card`), [my-hub-service-assessment](https://github.com/nhsbsa/my-hub-service-assessment) (`nhsuk-card`), [mys-pharmacy](https://github.com/nhsbsa/mys-pharmacy) (`nhsuk-card`), [nhs-student-bursaries-new](https://github.com/nhsbsa/nhs-student-bursaries-new) (`nhsuk-card`), [nhs-student-bursaries-prototype](https://github.com/nhsbsa/nhs-student-bursaries-prototype) (proto) (`nhsuk-card`), [nhsbsa-digital-playbook](https://github.com/nhsbsa/nhsbsa-digital-playbook) (`nhsuk-card`), [nhsbsa-docs](https://github.com/nhsbsa/nhsbsa-docs) (`nhsuk-card`), [nhsbsa-nihr-crp-prototype](https://github.com/nhsbsa/nhsbsa-nihr-crp-prototype) (proto) (`nhsuk-card`), [nhsbsa-volunteering-prototype](https://github.com/nhsbsa/nhsbsa-volunteering-prototype) (proto) (`nhsuk-card`), [nihr-bpor](https://github.com/nhsbsa/nihr-bpor) (`nhsuk-card`), [nihr-public-prototype](https://github.com/nhsbsa/nihr-public-prototype) (proto) (`nhsuk-card`), [practice-run](https://github.com/nhsbsa/practice-run) (`nhsuk-card`), [reference-price-prototype](https://github.com/nhsbsa/reference-price-prototype) (proto) (`nhsuk-card`), [self-assessment-test](https://github.com/nhsbsa/self-assessment-test) (`nhsuk-card`), [student-services-alpha](https://github.com/nhsbsa/student-services-alpha) (`nhsuk-card`), [suvpart2](https://github.com/nhsbsa/suvpart2) (`nhsuk-card`), [TECS-2022](https://github.com/nhsbsa/TECS-2022) (`nhsuk-card`)
- **NHSDigital**: [book-vaccinations-prototype](https://github.com/NHSDigital/book-vaccinations-prototype) (proto) (`nhsuk-card`), [healthstore-deployment-guidance-prototype](https://github.com/NHSDigital/healthstore-deployment-guidance-prototype) (proto) (`nhsuk-card`), [nhs-eps-prototype](https://github.com/NHSDigital/nhs-eps-prototype) (proto) (`nhsuk-card`), [nhs-firstcontact-prototype-maternity-self-referral](https://github.com/NHSDigital/nhs-firstcontact-prototype-maternity-self-referral) (proto) (`nhsuk-card`)
- **nhselect**: [cypmh-comms-toolbox](https://github.com/nhselect/cypmh-comms-toolbox) (`nhsuk-card`), [cypmh-index](https://github.com/nhselect/cypmh-index) (`nhsuk-card`), [matrix](https://github.com/nhselect/matrix) (`nhsuk-card`), [nhs-elect-personal-styles](https://github.com/nhselect/nhs-elect-personal-styles) (`nhsuk-card`), [resp-surge-skills-matrix](https://github.com/nhselect/resp-surge-skills-matrix) (`nhsuk-card`), [step1-proficiencies](https://github.com/nhselect/step1-proficiencies) (`nhsuk-card`), [step1-training](https://github.com/nhselect/step1-training) (`nhsuk-card`)
- **nhsengland**: [innovation-service-transactional-frontend](https://github.com/nhsengland/innovation-service-transactional-frontend) (`nhsuk-card`)
- **NHSLeadership**: [moodle-nhse](https://github.com/NHSLeadership/moodle-nhse) (`nhsuk-card`), [nhsl-laravel](https://github.com/NHSLeadership/nhsl-laravel) (`nhsuk-card`), [nightingale-2-0](https://github.com/NHSLeadership/nightingale-2-0) (`nhsuk-card`)
- **nhsx**: [skunkworks-long-stayer-risk-stratification](https://github.com/nhsx/skunkworks-long-stayer-risk-stratification) (`nhsuk-card`), [skunkworks-model-card](https://github.com/nhsx/skunkworks-model-card) (`nhsuk-card`)
- **TechnologyEnhancedLearning**: [DLSBinonTest](https://github.com/TechnologyEnhancedLearning/DLSBinonTest) (`nhsuk-card`), [DLSBinonTest2](https://github.com/TechnologyEnhancedLearning/DLSBinonTest2) (`nhsuk-card`), [DLSBinonTestUbuntu](https://github.com/TechnologyEnhancedLearning/DLSBinonTestUbuntu) (`nhsuk-card`), [DLSBinonTestWin2](https://github.com/TechnologyEnhancedLearning/DLSBinonTestWin2) (`nhsuk-card`), [DLSTestBinonWindows](https://github.com/TechnologyEnhancedLearning/DLSTestBinonWindows) (`nhsuk-card`), [DLSV2](https://github.com/TechnologyEnhancedLearning/DLSV2) (`nhsuk-card`)

</details>

## Repos by cluster and organisation

### card — 244 repos, 53 orgs (195 production)

#### ministryofjustice (64, 51 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bichard7-next-core](https://github.com/ministryofjustice/bichard7-next-core) | [`packages/ui/src/components/Card/Card.tsx`](https://github.com/ministryofjustice/bichard7-next-core/blob/HEAD/packages/ui/src/components/Card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [book-a-prison-visit-staff-ui](https://github.com/ministryofjustice/book-a-prison-visit-staff-ui) | [`assets/sass/components/_card.scss`](https://github.com/ministryofjustice/book-a-prison-visit-staff-ui/blob/HEAD/assets/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [calculate-release-dates](https://github.com/ministryofjustice/calculate-release-dates) | [`assets/scss/components/_cards.scss`](https://github.com/ministryofjustice/calculate-release-dates/blob/HEAD/assets/scss/components/_cards.scss) | SCSS/CSS only |  |  |  |
| [Claim-for-Crown-Court-Defence](https://github.com/ministryofjustice/Claim-for-Crown-Court-Defence) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/ministryofjustice/Claim-for-Crown-Court-Defence/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [create-and-vary-a-licence](https://github.com/ministryofjustice/create-and-vary-a-licence) | [`assets/sass/components/_card.scss`](https://github.com/ministryofjustice/create-and-vary-a-licence/blob/HEAD/assets/sass/components/_card.scss) | SCSS/CSS only |  |  | `moj-search`, `moj-sortable-table`, `moj-sub-navigation` |
| [digital-prison-services](https://github.com/ministryofjustice/digital-prison-services) | [`sass/components/_card.scss`](https://github.com/ministryofjustice/digital-prison-services/blob/HEAD/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [gov-reuse](https://github.com/ministryofjustice/gov-reuse) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/gov-reuse/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-search` |
| [hmpps-accredited-programmes-manage-and-deliver-ui](https://github.com/ministryofjustice/hmpps-accredited-programmes-manage-and-deliver-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-accredited-programmes-manage-and-deliver-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-multi-select` |
| [hmpps-activities-management](https://github.com/ministryofjustice/hmpps-activities-management) | [`frontend/components/card/_card.scss`](https://github.com/ministryofjustice/hmpps-activities-management/blob/HEAD/frontend/components/card/_card.scss) | SCSS/CSS only |  |  | `moj-multi-select`, `moj-sortable-table` |
| [hmpps-alerts-ui](https://github.com/ministryofjustice/hmpps-alerts-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-alerts-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-book-a-video-link-ui](https://github.com/ministryofjustice/hmpps-book-a-video-link-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-book-a-video-link-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-notification-badge`, `moj-sortable-table` |
| [hmpps-book-secure-move-frontend](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend) | [`common/components/card/_card.scss`](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend/blob/HEAD/common/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-cell-sharing-risk-assessment-ui](https://github.com/ministryofjustice/hmpps-cell-sharing-risk-assessment-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-cell-sharing-risk-assessment-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-filter`, `moj-sortable-table` |
| [hmpps-challenge-support-intervention-plan-ui](https://github.com/ministryofjustice/hmpps-challenge-support-intervention-plan-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-challenge-support-intervention-plan-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `hods-highlight`, `moj-badge` |
| [hmpps-change-someones-cell](https://github.com/ministryofjustice/hmpps-change-someones-cell) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-change-someones-cell/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-community-payback-supervisors-ui](https://github.com/ministryofjustice/hmpps-community-payback-supervisors-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-community-payback-supervisors-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-community-payback-ui](https://github.com/ministryofjustice/hmpps-community-payback-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-community-payback-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-community-support-ui](https://github.com/ministryofjustice/hmpps-community-support-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-community-support-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-contacts-ui](https://github.com/ministryofjustice/hmpps-contacts-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-contacts-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-page-header-actions` |
| [hmpps-education-employment-ui](https://github.com/ministryofjustice/hmpps-education-employment-ui) | [`assets/sass/components/_card.scss`](https://github.com/ministryofjustice/hmpps-education-employment-ui/blob/HEAD/assets/sass/components/_card.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-sub-navigation` |
| [hmpps-electronic-monitoring-crime-matching-ui](https://github.com/ministryofjustice/hmpps-electronic-monitoring-crime-matching-ui) | [`assets/js/components/card.ts`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-crime-matching-ui/blob/HEAD/assets/js/components/card.ts) | JS/TS component |  |  |  |
| [hmpps-forge](https://github.com/ministryofjustice/hmpps-forge) | [`packages/forge-moj-components/src/components/card/_card.scss`](https://github.com/ministryofjustice/hmpps-forge/blob/HEAD/packages/forge-moj-components/src/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-incentives-ui](https://github.com/ministryofjustice/hmpps-incentives-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-incentives-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-incident-reporting](https://github.com/ministryofjustice/hmpps-incident-reporting) | [`assets/js/components/dpsCard.ts`](https://github.com/ministryofjustice/hmpps-incident-reporting/blob/HEAD/assets/js/components/dpsCard.ts) | JS/TS component |  |  | `moj-scrollable-pane` |
| [hmpps-launchpad-home-ui](https://github.com/ministryofjustice/hmpps-launchpad-home-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-launchpad-home-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-ticket-panel` |
| [hmpps-locations-inside-prison](https://github.com/ministryofjustice/hmpps-locations-inside-prison) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-locations-inside-prison/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-manage-a-supervision-ui](https://github.com/ministryofjustice/hmpps-manage-a-supervision-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-manage-a-supervision-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-manage-adjudications](https://github.com/ministryofjustice/hmpps-manage-adjudications) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-manage-adjudications/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-manage-custody-mailbox-register](https://github.com/ministryofjustice/hmpps-manage-custody-mailbox-register) | [`assets/js/components/card.js`](https://github.com/ministryofjustice/hmpps-manage-custody-mailbox-register/blob/HEAD/assets/js/components/card.js) | JS/TS component |  |  | `moj-sortable-table` |
| [hmpps-manage-people-on-probation-ui](https://github.com/ministryofjustice/hmpps-manage-people-on-probation-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-manage-people-on-probation-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-search` |
| [hmpps-manage-users](https://github.com/ministryofjustice/hmpps-manage-users) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-manage-users/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-multi-select`, `moj-sortable-table` |
| [hmpps-manage-users-temp-rewrite](https://github.com/ministryofjustice/hmpps-manage-users-temp-rewrite) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-manage-users-temp-rewrite/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-nomis-sync-dashboard](https://github.com/ministryofjustice/hmpps-nomis-sync-dashboard) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-nomis-sync-dashboard/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-official-visits-ui](https://github.com/ministryofjustice/hmpps-official-visits-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-official-visits-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-alert` |
| [hmpps-prisoner-education](https://github.com/ministryofjustice/hmpps-prisoner-education) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/hmpps-prisoner-education/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only |  |  |  |
| [hmpps-prisoner-finance-sync-ui](https://github.com/ministryofjustice/hmpps-prisoner-finance-sync-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-prisoner-finance-sync-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-action-bar`, `moj-filter` |
| [hmpps-prisoner-finance-ui](https://github.com/ministryofjustice/hmpps-prisoner-finance-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-prisoner-finance-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-prisoner-pay-ui](https://github.com/ministryofjustice/hmpps-prisoner-pay-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-prisoner-pay-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-registers](https://github.com/ministryofjustice/hmpps-registers) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-registers/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-restricted-patients](https://github.com/ministryofjustice/hmpps-restricted-patients) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-restricted-patients/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-restricted-patients-ui](https://github.com/ministryofjustice/hmpps-restricted-patients-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-restricted-patients-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-send-legal-mail-staff-ui](https://github.com/ministryofjustice/hmpps-send-legal-mail-staff-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-send-legal-mail-staff-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-single-accommodation-service-ui](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-subject-access-request-ui](https://github.com/ministryofjustice/hmpps-subject-access-request-ui) | [`server/views/components/card.njk`](https://github.com/ministryofjustice/hmpps-subject-access-request-ui/blob/HEAD/server/views/components/card.njk) | template partial |  |  | `moj-multi-select`, `moj-sortable-table` |
| [hmpps-visits-internal-admin-ui](https://github.com/ministryofjustice/hmpps-visits-internal-admin-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-visits-internal-admin-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hmpps-welcome-people-into-prison-ui](https://github.com/ministryofjustice/hmpps-welcome-people-into-prison-ui) | [`assets/scss/components/_card.scss`](https://github.com/ministryofjustice/hmpps-welcome-people-into-prison-ui/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [laa-review-criminal-legal-aid](https://github.com/ministryofjustice/laa-review-criminal-legal-aid) | [`app/components/card_component.rb`](https://github.com/ministryofjustice/laa-review-criminal-legal-aid/blob/HEAD/app/components/card_component.rb) | Rails ViewComponent |  |  | `moj-alert`, `moj-sub-navigation` |
| [manage-a-workforce-ui](https://github.com/ministryofjustice/manage-a-workforce-ui) | [`server/views/components/card/macro.njk`](https://github.com/ministryofjustice/manage-a-workforce-ui/blob/HEAD/server/views/components/card/macro.njk) | Nunjucks macro |  |  | `moj-notification-badge`, `moj-scrollable-pane`, `moj-sortable-table` |
| [moj-frontend](https://github.com/ministryofjustice/moj-frontend) | [`docs/stylesheets/components/_app-card.scss`](https://github.com/ministryofjustice/moj-frontend/blob/HEAD/docs/stylesheets/components/_app-card.scss) | SCSS/CSS only |  |  |  |
| [money-to-prisoners-common](https://github.com/ministryofjustice/money-to-prisoners-common) | [`mtp_common/assets-src/mtp_common/components/card/_index.scss`](https://github.com/ministryofjustice/money-to-prisoners-common/blob/HEAD/mtp_common/assets-src/mtp_common/components/card/_index.scss) | SCSS/CSS only |  |  |  |
| [prisoner-content-hub-frontend](https://github.com/ministryofjustice/prisoner-content-hub-frontend) | [`assets/sass/components/_card.scss`](https://github.com/ministryofjustice/prisoner-content-hub-frontend/blob/HEAD/assets/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [digital-prison-reporting-mi-prototype](https://github.com/ministryofjustice/digital-prison-reporting-mi-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/digital-prison-reporting-mi-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `moj-action-bar`, `moj-scrollable-pane` |
| [dwf-prototype](https://github.com/ministryofjustice/dwf-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/dwf-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `moj-banner` |
| [hmpps-activity-management-prototype](https://github.com/ministryofjustice/hmpps-activity-management-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/hmpps-activity-management-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `moj-badge` |
| [hmpps-afer-prototype](https://github.com/ministryofjustice/hmpps-afer-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/hmpps-afer-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `moj-add-another`, `moj-badge`, `moj-banner`, `moj-search` |
| [hmpps-community-accommodation-tier-2-bail-prototypes](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `moj-side-navigation` |
| [hmpps-cvl-prototype](https://github.com/ministryofjustice/hmpps-cvl-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/hmpps-cvl-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `moj-add-another`, `moj-search` |
| [hmpps-electronic-monitoring-data-prototype](https://github.com/ministryofjustice/hmpps-electronic-monitoring-data-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-data-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `gem-c-contents-list`, `gem-c-govspeak`, `gem-c-govspeak-html-publication`, `gem-c-heading`, `gem-c-inverse-header`, `gem-c-layout-for-public`, `gem-c-organisation-logo`, `gem-c-print-link`, `gem-c-search`, `gem-c-search-with-autocomplete` |
| [hmpps-matching-prototype](https://github.com/ministryofjustice/hmpps-matching-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/hmpps-matching-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |
| [hmpps-official-visits-prototype](https://github.com/ministryofjustice/hmpps-official-visits-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/hmpps-official-visits-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |
| [hmpps-prisoner-apps-prototype](https://github.com/ministryofjustice/hmpps-prisoner-apps-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/ministryofjustice/hmpps-prisoner-apps-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [hmpps-visit-someone-in-prison-prototype](https://github.com/ministryofjustice/hmpps-visit-someone-in-prison-prototype) | [`app/views/components/card.njk`](https://github.com/ministryofjustice/hmpps-visit-someone-in-prison-prototype/blob/HEAD/app/views/components/card.njk) | template partial | yes |  | `moj-alert`, `moj-badge`, `moj-notification-badge`, `moj-search`, `moj-sortable-table`, `moj-timeline` |
| [legacy-systems-x-product-prototype](https://github.com/ministryofjustice/legacy-systems-x-product-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/legacy-systems-x-product-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |
| [mpc-prototype](https://github.com/ministryofjustice/mpc-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/ministryofjustice/mpc-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `moj-action-bar`, `moj-add-another`, `moj-alert`, `moj-badge`, `moj-banner`, `moj-button-menu`, `moj-filter`, `moj-identity-bar`, `moj-multi-file-upload`, `moj-notification-badge`, `moj-page-header-actions`, `moj-progress-bar`, `moj-scrollable-pane`, `moj-search`, `moj-search-toggle`, `moj-side-navigation`, `moj-sub-navigation`, `moj-timeline` |

#### DEFRA (20, 19 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [adp-portal](https://github.com/DEFRA/adp-portal) | [`plugins/adp/src/components/AdpData/CardComponent.tsx`](https://github.com/DEFRA/adp-portal/blob/HEAD/plugins/adp/src/components/AdpData/CardComponent.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [ai-eu-trade-accelerator](https://github.com/DEFRA/ai-eu-trade-accelerator) | [`judit/apps/web/components/ui/card.tsx`](https://github.com/DEFRA/ai-eu-trade-accelerator/blob/HEAD/judit/apps/web/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [ai-guidance-legal-grounding-checker](https://github.com/DEFRA/ai-guidance-legal-grounding-checker) | [`law-proposition-extractor/apps/web/components/ui/card.tsx`](https://github.com/DEFRA/ai-guidance-legal-grounding-checker/blob/HEAD/law-proposition-extractor/apps/web/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [ai-service-manual](https://github.com/DEFRA/ai-service-manual) | [`src/client/stylesheets/components/_card.scss`](https://github.com/DEFRA/ai-service-manual/blob/HEAD/src/client/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [ai-tech-radar-frontend](https://github.com/DEFRA/ai-tech-radar-frontend) | [`src/client/stylesheets/components/_card.scss`](https://github.com/DEFRA/ai-tech-radar-frontend/blob/HEAD/src/client/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [ai-uc-rpa-guidance-evals-fe](https://github.com/DEFRA/ai-uc-rpa-guidance-evals-fe) | [`src/client/stylesheets/components/_card.scss`](https://github.com/DEFRA/ai-uc-rpa-guidance-evals-fe/blob/HEAD/src/client/stylesheets/components/_card.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [ai-uc-rpa-guidance-fe](https://github.com/DEFRA/ai-uc-rpa-guidance-fe) | [`src/client/stylesheets/components/_card.scss`](https://github.com/DEFRA/ai-uc-rpa-guidance-fe/blob/HEAD/src/client/stylesheets/components/_card.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [aqie-front-end](https://github.com/DEFRA/aqie-front-end) | [`src/client/assets/stylesheets/sass/components/_cards.scss`](https://github.com/DEFRA/aqie-front-end/blob/HEAD/src/client/assets/stylesheets/sass/components/_cards.scss) | SCSS/CSS only |  |  |  |
| [crai-cffld-feedback-web](https://github.com/DEFRA/crai-cffld-feedback-web) | [`src/client/assets/stylesheets/components/cards.scss`](https://github.com/DEFRA/crai-cffld-feedback-web/blob/HEAD/src/client/assets/stylesheets/components/cards.scss) | SCSS/CSS only |  |  |  |
| [defra-ai-patterns](https://github.com/DEFRA/defra-ai-patterns) | [`src/stylesheets/components/card/_card.scss`](https://github.com/DEFRA/defra-ai-patterns/blob/HEAD/src/stylesheets/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [defra-atlassian-mcp-portal](https://github.com/DEFRA/defra-atlassian-mcp-portal) | [`src/client/stylesheets/components/_app-card.scss`](https://github.com/DEFRA/defra-atlassian-mcp-portal/blob/HEAD/src/client/stylesheets/components/_app-card.scss) | SCSS/CSS only |  |  |  |
| [epr-packaging-frontend](https://github.com/DEFRA/epr-packaging-frontend) | [`src/FrontendSchemeRegistration.UI/assets/scss/components/_card.scss`](https://github.com/DEFRA/epr-packaging-frontend/blob/HEAD/src/FrontendSchemeRegistration.UI/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [epr-prn-rep-exp-frontend](https://github.com/DEFRA/epr-prn-rep-exp-frontend) | [`src/Epr.Reprocessor.Exporter.UI/assets/scss/components/_card.scss`](https://github.com/DEFRA/epr-prn-rep-exp-frontend/blob/HEAD/src/Epr.Reprocessor.Exporter.UI/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [marine-licensing-frontend](https://github.com/DEFRA/marine-licensing-frontend) | [`src/client/stylesheets/components/card/_card.scss`](https://github.com/DEFRA/marine-licensing-frontend/blob/HEAD/src/client/stylesheets/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [mcp-portal](https://github.com/DEFRA/mcp-portal) | [`src/client/stylesheets/components/_card.scss`](https://github.com/DEFRA/mcp-portal/blob/HEAD/src/client/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [mural-mcp-portal](https://github.com/DEFRA/mural-mcp-portal) | [`src/client/stylesheets/components/_app-card.scss`](https://github.com/DEFRA/mural-mcp-portal/blob/HEAD/src/client/stylesheets/components/_app-card.scss) | SCSS/CSS only |  |  |  |
| [rpa-ai-guidance-hub-ui](https://github.com/DEFRA/rpa-ai-guidance-hub-ui) | [`src/client/stylesheets/components/_app-card.scss`](https://github.com/DEFRA/rpa-ai-guidance-hub-ui/blob/HEAD/src/client/stylesheets/components/_app-card.scss) | SCSS/CSS only |  |  |  |
| [trade-imports-simulator-frontend](https://github.com/DEFRA/trade-imports-simulator-frontend) | [`src/server/common/components/card/_card.scss`](https://github.com/DEFRA/trade-imports-simulator-frontend/blob/HEAD/src/server/common/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [waste-organisation-frontend](https://github.com/DEFRA/waste-organisation-frontend) | [`src/client/stylesheets/components/_card.scss`](https://github.com/DEFRA/waste-organisation-frontend/blob/HEAD/src/client/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [rpa-ai-guidance-hub-prototype](https://github.com/DEFRA/rpa-ai-guidance-hub-prototype) | [`app/assets/sass/components/_app-card.scss`](https://github.com/DEFRA/rpa-ai-guidance-hub-prototype/blob/HEAD/app/assets/sass/components/_app-card.scss) | SCSS/CSS only | yes |  |  |

#### DFE-Digital (24, 16 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [buy-for-your-school](https://github.com/DFE-Digital/buy-for-your-school) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/DFE-Digital/buy-for-your-school/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [buying-for-schools](https://github.com/DFE-Digital/buying-for-schools) | [`sass/components/_cards.scss`](https://github.com/DFE-Digital/buying-for-schools/blob/HEAD/sass/components/_cards.scss) | SCSS/CSS only |  |  |  |
| [buying-for-schools-v2](https://github.com/DFE-Digital/buying-for-schools-v2) | [`sass/components/_cards.scss`](https://github.com/DFE-Digital/buying-for-schools-v2/blob/HEAD/sass/components/_cards.scss) | SCSS/CSS only |  |  |  |
| [claim-additional-payments-for-teaching](https://github.com/DFE-Digital/claim-additional-payments-for-teaching) | [`app/assets/stylesheets/components/card.scss`](https://github.com/DFE-Digital/claim-additional-payments-for-teaching/blob/HEAD/app/assets/stylesheets/components/card.scss) | SCSS/CSS only |  |  |  |
| [d365-design-manual](https://github.com/DFE-Digital/d365-design-manual) | [`app/scss/components/_card.scss`](https://github.com/DFE-Digital/d365-design-manual/blob/HEAD/app/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [design](https://github.com/DFE-Digital/design) | [`app/views/design-system/components/card.html`](https://github.com/DFE-Digital/design/blob/HEAD/app/views/design-system/components/card.html) | template partial |  |  | `dfe-card` |
| [dfe-frontend](https://github.com/DFE-Digital/dfe-frontend) | [`packages/components/card/_card.scss`](https://github.com/DFE-Digital/dfe-frontend/blob/HEAD/packages/components/card/_card.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [DfE-School-Account-Alpha](https://github.com/DFE-Digital/DfE-School-Account-Alpha) | [`app/assets/sass/components/card.scss`](https://github.com/DFE-Digital/DfE-School-Account-Alpha/blob/HEAD/app/assets/sass/components/card.scss) | SCSS/CSS only |  |  | `dfe-card`, `gem-c-big-number`, `moj-action-bar`, `moj-button-menu`, `moj-filter`, `moj-notification-badge`, `moj-scrollable-pane`, `moj-timeline` |
| [dfefrontend](https://github.com/DFE-Digital/dfefrontend) | [`packages/dfe-frontend/src/components/card/_index.scss`](https://github.com/DFE-Digital/dfefrontend/blob/HEAD/packages/dfe-frontend/src/components/card/_index.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [find-a-lost-trn-prototype](https://github.com/DFE-Digital/find-a-lost-trn-prototype) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/DFE-Digital/find-a-lost-trn-prototype/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [get-into-teaching-app](https://github.com/DFE-Digital/get-into-teaching-app) | [`app/components/categories/card_component.rb`](https://github.com/DFE-Digital/get-into-teaching-app/blob/HEAD/app/components/categories/card_component.rb) | Rails ViewComponent |  |  |  |
| [itt-mentor-services](https://github.com/DFE-Digital/itt-mentor-services) | [`app/components/claim/card_component.rb`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/components/claim/card_component.rb) | Rails ViewComponent |  |  |  |
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [school-account](https://github.com/DFE-Digital/school-account) | [`Dfe.SchoolAccount.Web/Frontend/scss/components/card.scss`](https://github.com/DFE-Digital/school-account/blob/HEAD/Dfe.SchoolAccount.Web/Frontend/scss/components/card.scss) | SCSS/CSS only |  |  |  |
| [SchoolAccount-Web](https://github.com/DFE-Digital/SchoolAccount-Web) | [`src/SchoolAccount.Web.Mvc/Styles/components/card.scss`](https://github.com/DFE-Digital/SchoolAccount-Web/blob/HEAD/src/SchoolAccount.Web.Mvc/Styles/components/card.scss) | SCSS/CSS only |  |  |  |
| [teaching-vacancies](https://github.com/DFE-Digital/teaching-vacancies) | [`app/assets/stylesheets/components/card.scss`](https://github.com/DFE-Digital/teaching-vacancies/blob/HEAD/app/assets/stylesheets/components/card.scss) | SCSS/CSS only |  |  |  |
| [buying-for-schools-prototype](https://github.com/DFE-Digital/buying-for-schools-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/DFE-Digital/buying-for-schools-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `gem-c-contents-list`, `gem-c-document-list` |
| [claim-additional-payments-find-a-lost-trn-prototype](https://github.com/DFE-Digital/claim-additional-payments-find-a-lost-trn-prototype) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/DFE-Digital/claim-additional-payments-find-a-lost-trn-prototype/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [data-exchange-helpdesk-prototype](https://github.com/DFE-Digital/data-exchange-helpdesk-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/DFE-Digital/data-exchange-helpdesk-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |
| [fa-shortlisting-prototype](https://github.com/DFE-Digital/fa-shortlisting-prototype) | [`app/views/availability/components/card.html`](https://github.com/DFE-Digital/fa-shortlisting-prototype/blob/HEAD/app/views/availability/components/card.html) | template partial | yes |  |  |
| [get-help-with-tech-prototype](https://github.com/DFE-Digital/get-help-with-tech-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/DFE-Digital/get-help-with-tech-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [ghbfs-external-prototype](https://github.com/DFE-Digital/ghbfs-external-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/DFE-Digital/ghbfs-external-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [publish-performance-dashboard-prototype](https://github.com/DFE-Digital/publish-performance-dashboard-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/DFE-Digital/publish-performance-dashboard-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [refer-serious-misconduct-by-a-teacher-prototype](https://github.com/DFE-Digital/refer-serious-misconduct-by-a-teacher-prototype) | [`app/assets/sass/components/cards.scss`](https://github.com/DFE-Digital/refer-serious-misconduct-by-a-teacher-prototype/blob/HEAD/app/assets/sass/components/cards.scss) | SCSS/CSS only | yes |  | `x-govuk-related-navigation` |

#### nationalarchives (8, 8 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ds-caselaw-editor-ui](https://github.com/nationalarchives/ds-caselaw-editor-ui) | [`ds_caselaw_editor_ui/sass/components/_card.scss`](https://github.com/nationalarchives/ds-caselaw-editor-ui/blob/HEAD/ds_caselaw_editor_ui/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [ds-caselaw-public-ui](https://github.com/nationalarchives/ds-caselaw-public-ui) | [`ds_judgements_public_ui/sass/components/_card.scss`](https://github.com/nationalarchives/ds-caselaw-public-ui/blob/HEAD/ds_judgements_public_ui/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [ds-frontend](https://github.com/nationalarchives/ds-frontend) | [`app/templates/components/card/macro.html`](https://github.com/nationalarchives/ds-frontend/blob/HEAD/app/templates/components/card/macro.html) | Nunjucks macro |  |  | `tna-card`, `tna-hero`, `tna-picture` |
| [ds-ohos-wagtail](https://github.com/nationalarchives/ds-ohos-wagtail) | [`templates/components/card.html`](https://github.com/nationalarchives/ds-ohos-wagtail/blob/HEAD/templates/components/card.html) | template partial |  |  |  |
| [tdr-components](https://github.com/nationalarchives/tdr-components) | [`src/nationalarchives/components/card/_index.scss`](https://github.com/nationalarchives/tdr-components/blob/HEAD/src/nationalarchives/components/card/_index.scss) | SCSS/CSS only |  |  |  |
| [tna-frontend](https://github.com/nationalarchives/tna-frontend) | [`src/nationalarchives/components/card/_index.scss`](https://github.com/nationalarchives/tna-frontend/blob/HEAD/src/nationalarchives/components/card/_index.scss) | SCSS/CSS only |  |  |  |
| [tna-frontend-jinja](https://github.com/nationalarchives/tna-frontend-jinja) | [`tna_frontend_jinja/templates/components/card/macro.html`](https://github.com/nationalarchives/tna-frontend-jinja/blob/HEAD/tna_frontend_jinja/templates/components/card/macro.html) | Nunjucks macro |  |  | `tna-card`, `tna-code-block`, `tna-compound-filters`, `tna-date-search`, `tna-files-list`, `tna-gallery`, `tna-hero`, `tna-index-grid` |
| [wa-frontend](https://github.com/nationalarchives/wa-frontend) | [`app/templates/components/card.html`](https://github.com/nationalarchives/wa-frontend/blob/HEAD/app/templates/components/card.html) | template partial |  |  | `tna-picture` |

#### NHSDigital (10, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [DCH-NHS-app](https://github.com/NHSDigital/DCH-NHS-app) | [`app/assets/sass/components/_card.scss`](https://github.com/NHSDigital/DCH-NHS-app/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only |  |  | `nhsuk-card` |
| [nhs-notify-web-cms](https://github.com/NHSDigital/nhs-notify-web-cms) | [`docs/_includes/components/card.html`](https://github.com/NHSDigital/nhs-notify-web-cms/blob/HEAD/docs/_includes/components/card.html) | template partial |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-contents-list`, `nhsuk-link` |
| [nhsuk-frontend-jinja](https://github.com/NHSDigital/nhsuk-frontend-jinja) | [`nhsuk_frontend_jinja/templates/nhsuk/components/card/macro.jinja`](https://github.com/NHSDigital/nhsuk-frontend-jinja/blob/HEAD/nhsuk_frontend_jinja/templates/nhsuk/components/card/macro.jinja) | Nunjucks macro |  |  | `nhsuk-action-link`, `nhsuk-caption`, `nhsuk-card`, `nhsuk-code`, `nhsuk-contents-list` |
| [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) | [`src/components/navigation/card/Card.tsx`](https://github.com/NHSDigital/nhsuk-react-components/blob/HEAD/src/components/navigation/card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `nhsuk-do-dont-list`, `nhsuk-hero` |
| [nhsuk-react-native-components](https://github.com/NHSDigital/nhsuk-react-native-components) | [`src/components/card/Card.tsx`](https://github.com/NHSDigital/nhsuk-react-native-components/blob/HEAD/src/components/card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only |  |  | `nhsuk-link` |
| [c2c-breast-screening-prototype](https://github.com/NHSDigital/c2c-breast-screening-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/NHSDigital/c2c-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  | `nhsuk-card`, `nhsuk-search-input` |
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  | `nhsuk-link` |
| [manage-vaccinations-in-schools-prototype](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [mya-prototype](https://github.com/NHSDigital/mya-prototype) | [`app/assets/sass/components/app-card.scss`](https://github.com/NHSDigital/mya-prototype/blob/HEAD/app/assets/sass/components/app-card.scss) | SCSS/CSS only | yes |  | `nhsuk-card`, `nhsuk-link` |

#### SkillsFundingAgency (8, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-apprentice-app](https://github.com/SkillsFundingAgency/das-apprentice-app) | [`src/SFA.DAS.ApprenticeApp.Pwa/Frontend/components/card/_card.scss`](https://github.com/SkillsFundingAgency/das-apprentice-app/blob/HEAD/src/SFA.DAS.ApprenticeApp.Pwa/Frontend/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [das-campaign](https://github.com/SkillsFundingAgency/das-campaign) | [`src/SFA.DAS.Campaign.Web/wwwroot/src/components/card/_card.scss`](https://github.com/SkillsFundingAgency/das-campaign/blob/HEAD/src/SFA.DAS.Campaign.Web/wwwroot/src/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [das-campaigns-prototype](https://github.com/SkillsFundingAgency/das-campaigns-prototype) | [`src/campaign/sass/components/_card.scss`](https://github.com/SkillsFundingAgency/das-campaigns-prototype/blob/HEAD/src/campaign/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [das-epao-fireitup](https://github.com/SkillsFundingAgency/das-epao-fireitup) | [`old/src/campaign/sass/components/_card.scss`](https://github.com/SkillsFundingAgency/das-epao-fireitup/blob/HEAD/old/src/campaign/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/das/sass/components/card/_card.scss`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/das/sass/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [tl-find-provider-api](https://github.com/SkillsFundingAgency/tl-find-provider-api) | [`src/Sfa.Tl.Find.Provider.Web/Frontend/src/scss/components/_card.scss`](https://github.com/SkillsFundingAgency/tl-find-provider-api/blob/HEAD/src/Sfa.Tl.Find.Provider.Web/Frontend/src/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [das-employer-prototype](https://github.com/SkillsFundingAgency/das-employer-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/SkillsFundingAgency/das-employer-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [das-recruit-prototype](https://github.com/SkillsFundingAgency/das-recruit-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/SkillsFundingAgency/das-recruit-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |

#### nhsbsa (9, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cost-recovery-ops](https://github.com/nhsbsa/cost-recovery-ops) | [`app/assets/sass/components/_card.scss`](https://github.com/nhsbsa/cost-recovery-ops/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-link` |
| [design-system](https://github.com/nhsbsa/design-system) | [`app/assets/sass/components/_cards.scss`](https://github.com/nhsbsa/design-system/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only |  |  |  |
| [nhs-pension](https://github.com/nhsbsa/nhs-pension) | [`app/v6/assets/sass/components/_card.scss`](https://github.com/nhsbsa/nhs-pension/blob/HEAD/app/v6/assets/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [nhs-pension-dev](https://github.com/nhsbsa/nhs-pension-dev) | [`app/assets/sass/components/_card.scss`](https://github.com/nhsbsa/nhs-pension-dev/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [pregnancy-loss-certificate](https://github.com/nhsbsa/pregnancy-loss-certificate) | [`app/assets/sass/components/_card.scss`](https://github.com/nhsbsa/pregnancy-loss-certificate/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only |  |  |  |
| [blc-crm](https://github.com/nhsbsa/blc-crm) | [`app/assets/sass/components/_card.scss`](https://github.com/nhsbsa/blc-crm/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  | `gem-c-govspeak`, `hmrc-user-research-banner` |
| [claims-prototype](https://github.com/nhsbsa/claims-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/nhsbsa/claims-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  | `nhsuk-card`, `nhsuk-link` |
| [mccloud-immediate-choice-prototype](https://github.com/nhsbsa/mccloud-immediate-choice-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/nhsbsa/mccloud-immediate-choice-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  | `nhsuk-card`, `nhsuk-link` |
| [nhs-pension-prototype-swoosh](https://github.com/nhsbsa/nhs-pension-prototype-swoosh) | [`app/v6/assets/sass/components/_card.scss`](https://github.com/nhsbsa/nhs-pension-prototype-swoosh/blob/HEAD/app/v6/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |

#### alan-turing-institute (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [AssurancePlatform](https://github.com/alan-turing-institute/AssurancePlatform) | [`components/ui/card.tsx`](https://github.com/alan-turing-institute/AssurancePlatform/blob/HEAD/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [bias-cards](https://github.com/alan-turing-institute/bias-cards) | [`components/ui/card.tsx`](https://github.com/alan-turing-institute/bias-cards/blob/HEAD/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [scivision](https://github.com/alan-turing-institute/scivision) | [`frontend/src/components/Card.tsx`](https://github.com/alan-turing-institute/scivision/blob/HEAD/frontend/src/components/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [tea-techniques](https://github.com/alan-turing-institute/tea-techniques) | [`components/ui/card.tsx`](https://github.com/alan-turing-institute/tea-techniques/blob/HEAD/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [trustworthiness-framework](https://github.com/alan-turing-institute/trustworthiness-framework) | [`client/src/components/ui/card.tsx`](https://github.com/alan-turing-institute/trustworthiness-framework/blob/HEAD/client/src/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### communitiesuk (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ailg-minute](https://github.com/communitiesuk/ailg-minute) | [`frontend/components/ui/card.tsx`](https://github.com/communitiesuk/ailg-minute/blob/HEAD/frontend/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [cyber-health](https://github.com/communitiesuk/cyber-health) | [`CyberHealth/static/src/scss/components/card.scss`](https://github.com/communitiesuk/cyber-health/blob/HEAD/CyberHealth/static/src/scss/components/card.scss) | SCSS/CSS only |  |  |  |
| [localai-local-transcribe](https://github.com/communitiesuk/localai-local-transcribe) | [`frontend/components/ui/card.tsx`](https://github.com/communitiesuk/localai-local-transcribe/blob/HEAD/frontend/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [mhclg_svelte_component_library](https://github.com/communitiesuk/mhclg_svelte_component_library) | [`src/lib/components/ui/Card.svelte`](https://github.com/communitiesuk/mhclg_svelte_component_library/blob/HEAD/src/lib/components/ui/Card.svelte) | UI framework (React/Vue/Svelte lib) |  |  | `dwp-side-navigation` |
| [submit-social-housing-lettings-and-sales-data-prototype](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype) | [`app/components/card/_card.scss`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype/blob/HEAD/app/components/card/_card.scss) | SCSS/CSS only |  |  |  |

#### hmcts (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [batch-audio-transcription](https://github.com/hmcts/batch-audio-transcription) | [`frontend/components/ui/card.tsx`](https://github.com/hmcts/batch-audio-transcription/blob/HEAD/frontend/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dasi-ai-in-sdlc-aica](https://github.com/hmcts/dasi-ai-in-sdlc-aica) | [`008 - SAAS/Lovable/court-finder-express-main/src/components/ui/card.tsx`](https://github.com/hmcts/dasi-ai-in-sdlc-aica/blob/HEAD/008 - SAAS/Lovable/court-finder-express-main/src/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dts-portfolio-portal](https://github.com/hmcts/dts-portfolio-portal) | [`src/components/ui/card.tsx`](https://github.com/hmcts/dts-portfolio-portal/blob/HEAD/src/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [react-a11y-test](https://github.com/hmcts/react-a11y-test) | [`src/components/Card.tsx`](https://github.com/hmcts/react-a11y-test/blob/HEAD/src/components/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `moj-add-another`, `moj-button-menu`, `moj-date-picker`, `moj-filter`, `moj-identity-bar`, `moj-messages`, `moj-multi-select`, `moj-notification-badge`, `moj-organisation-switcher`, `moj-page-header-actions`, `moj-scrollable-pane`, `moj-search`, `moj-sortable-table`, `moj-sub-navigation`, `moj-ticket-panel`, `moj-timeline` |
| [transcribe-web](https://github.com/hmcts/transcribe-web) | [`components/recording/ui/card.tsx`](https://github.com/hmcts/transcribe-web/blob/HEAD/components/recording/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### hmrc (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [accessibility-site](https://github.com/hmrc/accessibility-site) | [`application/scss/components/_card.scss`](https://github.com/hmrc/accessibility-site/blob/HEAD/application/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [design-system](https://github.com/hmrc/design-system) | [`application/scss/components/_card.scss`](https://github.com/hmrc/design-system/blob/HEAD/application/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [hello-world-bridge-intergration-frontend](https://github.com/hmrc/hello-world-bridge-intergration-frontend) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/hmrc/hello-world-bridge-intergration-frontend/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [ndrr-proto-frontend](https://github.com/hmrc/ndrr-proto-frontend) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/hmrc/ndrr-proto-frontend/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [ngr-dashboard-frontend](https://github.com/hmrc/ngr-dashboard-frontend) | [`app/assets/stylesheets/components/_card.scss`](https://github.com/hmrc/ngr-dashboard-frontend/blob/HEAD/app/assets/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |

#### defencedigital (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [discover-my-benefits](https://github.com/defencedigital/discover-my-benefits) | [`clientside/MOD-Civilian/src/components/Card/index.tsx`](https://github.com/defencedigital/discover-my-benefits/blob/HEAD/clientside/MOD-Civilian/src/components/Card/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [moduk-frontend-guidance-site](https://github.com/defencedigital/moduk-frontend-guidance-site) | [`src/site/_includes/components/card/macro.njk`](https://github.com/defencedigital/moduk-frontend-guidance-site/blob/HEAD/src/site/_includes/components/card/macro.njk) | Nunjucks macro |  |  |  |
| [moduk-service-manual](https://github.com/defencedigital/moduk-service-manual) | [`components/cards/_cards.scss`](https://github.com/defencedigital/moduk-service-manual/blob/HEAD/components/cards/_cards.scss) | SCSS/CSS only |  |  |  |
| [moduk-service-toolkit](https://github.com/defencedigital/moduk-service-toolkit) | [`components/cards/_cards.scss`](https://github.com/defencedigital/moduk-service-toolkit/blob/HEAD/components/cards/_cards.scss) | SCSS/CSS only |  |  |  |

#### Crown-Commercial-Service (4, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ccs-frontend](https://github.com/Crown-Commercial-Service/ccs-frontend) | [`assets/styles/components/_card-list.scss`](https://github.com/Crown-Commercial-Service/ccs-frontend/blob/HEAD/assets/styles/components/_card-list.scss) | SCSS/CSS only |  |  |  |
| [CCS-Frontend-Kit](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit) | [`Assets/styles/components/_card-list.scss`](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit/blob/HEAD/Assets/styles/components/_card-list.scss) | SCSS/CSS only |  |  |  |
| [gca-Intranet](https://github.com/Crown-Commercial-Service/gca-Intranet) | [`wp-content/themes/gca-intranet-foundation/assets/scss/components/_card-list.scss`](https://github.com/Crown-Commercial-Service/gca-Intranet/blob/HEAD/wp-content/themes/gca-intranet-foundation/assets/scss/components/_card-list.scss) | SCSS/CSS only |  |  |  |
| [ccs-website-prototype](https://github.com/Crown-Commercial-Service/ccs-website-prototype) | [`app/assets/sass/components/_card-list.scss`](https://github.com/Crown-Commercial-Service/ccs-website-prototype/blob/HEAD/app/assets/sass/components/_card-list.scss) | SCSS/CSS only | yes |  |  |

#### alphagov (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [datagovuk](https://github.com/alphagov/datagovuk) | [`datagovuk/static/stylesheets/components/_card.scss`](https://github.com/alphagov/datagovuk/blob/HEAD/datagovuk/static/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |
| [datagovuk-explorer](https://github.com/alphagov/datagovuk-explorer) | [`explorer/static/css/components/cards.css`](https://github.com/alphagov/datagovuk-explorer/blob/HEAD/explorer/static/css/components/cards.css) | SCSS/CSS only |  |  |  |
| [whitehall](https://github.com/alphagov/whitehall) | [`app/components/admin/edition_images/image_card_component.rb`](https://github.com/alphagov/whitehall/blob/HEAD/app/components/admin/edition_images/image_card_component.rb) | Rails ViewComponent |  |  |  |

#### digital-land (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [config-manager](https://github.com/digital-land/config-manager) | [`src/scss/components/_card.scss`](https://github.com/digital-land/config-manager/blob/HEAD/src/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [data-standards](https://github.com/digital-land/data-standards) | [`src/scss/components/_card.scss`](https://github.com/digital-land/data-standards/blob/HEAD/src/scss/components/_card.scss) | SCSS/CSS only |  |  |  |
| [standards-manager](https://github.com/digital-land/standards-manager) | [`assets/scss/components/_card.scss`](https://github.com/digital-land/standards-manager/blob/HEAD/assets/scss/components/_card.scss) | SCSS/CSS only |  |  |  |

#### i-dot-ai (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-kit](https://github.com/i-dot-ai/design-kit) | [`packages/frontend/src/components/card/_index.scss`](https://github.com/i-dot-ai/design-kit/blob/HEAD/packages/frontend/src/components/card/_index.scss) | SCSS/CSS only |  |  |  |
| [lex](https://github.com/i-dot-ai/lex) | [`app/src/components/ui/card.tsx`](https://github.com/i-dot-ai/lex/blob/HEAD/app/src/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [minute](https://github.com/i-dot-ai/minute) | [`frontend/components/ui/card.tsx`](https://github.com/i-dot-ai/minute/blob/HEAD/frontend/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### LBHackney-IT (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [adms-frontend](https://github.com/LBHackney-IT/adms-frontend) | [`components/ui/card.tsx`](https://github.com/LBHackney-IT/adms-frontend/blob/HEAD/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [mtfh-frontend-common](https://github.com/LBHackney-IT/mtfh-frontend-common) | [`lib/components/card-list/card-list.tsx`](https://github.com/LBHackney-IT/mtfh-frontend-common/blob/HEAD/lib/components/card-list/card-list.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [ways-into-work](https://github.com/LBHackney-IT/ways-into-work) | [`app/assets/stylesheets/components/card.sass`](https://github.com/LBHackney-IT/ways-into-work/blob/HEAD/app/assets/stylesheets/components/card.sass) | SCSS/CSS only |  |  |  |

#### UKHSA-Internal (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [coronavirus-dashboard](https://github.com/UKHSA-Internal/coronavirus-dashboard) | [`src/components/Card/Card.js`](https://github.com/UKHSA-Internal/coronavirus-dashboard/blob/HEAD/src/components/Card/Card.js) | JS/TS component |  |  |  |
| [data-dashboard-frontend](https://github.com/UKHSA-Internal/data-dashboard-frontend) | [`src/app/components/ui/ukhsa/Card/Card.tsx`](https://github.com/UKHSA-Internal/data-dashboard-frontend/blob/HEAD/src/app/components/ui/ukhsa/Card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [pre-entry-tb-screening-dicom-viewer](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer) | [`platform/ui-next/src/components/Card/Card.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-dicom-viewer/blob/HEAD/platform/ui-next/src/components/Card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dwp (4, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [check-what-you-owe](https://github.com/dwp/check-what-you-owe) | [`app/assets/sass/components/_cards.scss`](https://github.com/dwp/check-what-you-owe/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only |  |  |  |
| [dwp-ask](https://github.com/dwp/dwp-ask) | [`components/ui/Card/Card.tsx`](https://github.com/dwp/dwp-ask/blob/HEAD/components/ui/Card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [debt-management-service-prototype](https://github.com/dwp/debt-management-service-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/dwp/debt-management-service-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [mcmc-prototype](https://github.com/dwp/mcmc-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/dwp/mcmc-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |

#### co-cddo (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [get-help-if-you-have-a-health-condition](https://github.com/co-cddo/get-help-if-you-have-a-health-condition) | [`src/assets/styles/components/card/_card.scss`](https://github.com/co-cddo/get-help-if-you-have-a-health-condition/blob/HEAD/src/assets/styles/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [rapid](https://github.com/co-cddo/rapid) | [`frontend/src/components/Card/Card.tsx`](https://github.com/co-cddo/rapid/blob/HEAD/frontend/src/components/Card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [lthc-prototype](https://github.com/co-cddo/lthc-prototype) | [`app/assets/sass/components/card/_card.scss`](https://github.com/co-cddo/lthc-prototype/blob/HEAD/app/assets/sass/components/card/_card.scss) | SCSS/CSS only | yes |  | `gem-c-heading`, `gem-c-lead-paragraph` |

#### lgss (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [services-directory-client](https://github.com/lgss/services-directory-client) | [`src/components/Card/index.jsx`](https://github.com/lgss/services-directory-client/blob/HEAD/src/components/Card/index.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [vuetify-material-dashboard](https://github.com/lgss/vuetify-material-dashboard) | [`src/components/base/Card.vue`](https://github.com/lgss/vuetify-material-dashboard/blob/HEAD/src/components/base/Card.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nhselect (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cieh-human-factors](https://github.com/nhselect/cieh-human-factors) | [`components/Card.vue`](https://github.com/nhselect/cieh-human-factors/blob/HEAD/components/Card.vue) | UI framework (React/Vue/Svelte lib) |  |  | `nhsuk-action-link`, `nhsuk-card` |
| [home](https://github.com/nhselect/home) | [`components/Card.vue`](https://github.com/nhselect/home/blob/HEAD/components/Card.vue) | UI framework (React/Vue/Svelte lib) |  |  | `nhsuk-card` |

#### nice-digital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [next-web](https://github.com/nice-digital/next-web) | [`web/src/components/Storyblok/CardList/CardList.tsx`](https://github.com/nice-digital/next-web/blob/HEAD/web/src/components/Storyblok/CardList/CardList.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [nice-design-system](https://github.com/nice-digital/nice-design-system) | [`components/nds-card/src/Card.tsx`](https://github.com/nice-digital/nice-design-system/blob/HEAD/components/nds-card/src/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### no10ds (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [DEPRECATED-rapid-ui](https://github.com/no10ds/DEPRECATED-rapid-ui) | [`src/components/Card/Card.tsx`](https://github.com/no10ds/DEPRECATED-rapid-ui/blob/HEAD/src/components/Card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [rapid](https://github.com/no10ds/rapid) | [`frontend/src/components/Card/Card.tsx`](https://github.com/no10ds/rapid/blob/HEAD/frontend/src/components/Card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ONSdigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/ONSdigital/design-system) | [`src/components/card/_card.scss`](https://github.com/ONSdigital/design-system/blob/HEAD/src/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [svelte-components](https://github.com/ONSdigital/svelte-components) | [`src/lib/components/Card/Card.svelte`](https://github.com/ONSdigital/svelte-components/blob/HEAD/src/lib/components/Card/Card.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### OxfordshireCountyCouncil (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [History-Centre-digital-resources](https://github.com/OxfordshireCountyCouncil/History-Centre-digital-resources) | [`source/occlss/scss/components/cards/macro.njk`](https://github.com/OxfordshireCountyCouncil/History-Centre-digital-resources/blob/HEAD/source/occlss/scss/components/cards/macro.njk) | Nunjucks macro |  |  |  |
| [occlss](https://github.com/OxfordshireCountyCouncil/occlss) | [`views/components/cards/macro.njk`](https://github.com/OxfordshireCountyCouncil/occlss/blob/HEAD/views/components/cards/macro.njk) | Nunjucks macro |  |  |  |

#### scottish-government-design-system (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/scottish-government-design-system/design-system) | [`src/components/card/_card.scss`](https://github.com/scottish-government-design-system/design-system/blob/HEAD/src/components/card/_card.scss) | SCSS/CSS only |  |  |  |
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/Card/Card.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/Card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### defra-design (9, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [defra-frontend](https://github.com/defra-design/defra-frontend) | [`packages/defra-frontend/src/defra/components/card/_index.scss`](https://github.com/defra-design/defra-frontend/blob/HEAD/packages/defra-frontend/src/defra/components/card/_index.scss) | SCSS/CSS only |  |  |  |
| [aqie-prototype](https://github.com/defra-design/aqie-prototype) | [`app/views/components/cards/_cards.scss`](https://github.com/defra-design/aqie-prototype/blob/HEAD/app/views/components/cards/_cards.scss) | SCSS/CSS only | yes |  |  |
| [check-local-aq](https://github.com/defra-design/check-local-aq) | [`app/assets/sass/components/_cards.scss`](https://github.com/defra-design/check-local-aq/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |
| [echo-certifier-prototype](https://github.com/defra-design/echo-certifier-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/defra-design/echo-certifier-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |
| [fish-prototype](https://github.com/defra-design/fish-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/defra-design/fish-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [get-air-pollution-data-prototype](https://github.com/defra-design/get-air-pollution-data-prototype) | [`app/assets/sass/phase1-map/components/_govuk-cards.scss`](https://github.com/defra-design/get-air-pollution-data-prototype/blob/HEAD/app/assets/sass/phase1-map/components/_govuk-cards.scss) | SCSS/CSS only | yes |  | `gem-c-cards` |
| [plant-exports-prototype](https://github.com/defra-design/plant-exports-prototype) | [`app/assets/sass/components/_card.scss`](https://github.com/defra-design/plant-exports-prototype/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |
| [reex-applications-prototype](https://github.com/defra-design/reex-applications-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/defra-design/reex-applications-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |
| [reex-regulator-prototype](https://github.com/defra-design/reex-regulator-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/defra-design/reex-regulator-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |

#### InnovateUKGitHub (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [innovation-funding-service](https://github.com/InnovateUKGitHub/innovation-funding-service) | [`ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_cards.scss`](https://github.com/InnovateUKGitHub/innovation-funding-service/blob/HEAD/ifs-web-service/ifs-web-core/src/main/resources/static/sass/components/_cards.scss) | SCSS/CSS only |  |  |  |
| [ifs-prototypes](https://github.com/InnovateUKGitHub/ifs-prototypes) | [`app/assets/sass/components/_cards.scss`](https://github.com/InnovateUKGitHub/ifs-prototypes/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |

#### UKHomeOffice (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hof-forms-waf](https://github.com/UKHomeOffice/hof-forms-waf) | [`admin-ui/src/components/ui/card.tsx`](https://github.com/UKHomeOffice/hof-forms-waf/blob/HEAD/admin-ui/src/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [accessibility-guide](https://github.com/UKHomeOffice/accessibility-guide) | [`app/assets/sass/components/_card.scss`](https://github.com/UKHomeOffice/accessibility-guide/blob/HEAD/app/assets/sass/components/_card.scss) | SCSS/CSS only | yes |  |  |

#### cabinetoffice (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gap-find-apply-web](https://github.com/cabinetoffice/gap-find-apply-web) | [`packages/applicant/src/components/card/Card.tsx`](https://github.com/cabinetoffice/gap-find-apply-web/blob/HEAD/packages/applicant/src/components/card/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dwpdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [check-what-you-owe](https://github.com/dwpdigital/check-what-you-owe) | [`app/assets/sass/components/_cards.scss`](https://github.com/dwpdigital/check-what-you-owe/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only |  |  |  |

#### essexcountycouncil (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [send-lgdrupal](https://github.com/essexcountycouncil/send-lgdrupal) | [`web/core/themes/claro/css/components/card.css`](https://github.com/essexcountycouncil/send-lgdrupal/blob/HEAD/web/core/themes/claro/css/components/card.css) | SCSS/CSS only |  |  |  |

#### gosh-dre (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gmsa_genomic_fhir_webapp](https://github.com/gosh-dre/gmsa_genomic_fhir_webapp) | [`src/components/UI/Card.tsx`](https://github.com/gosh-dre/gmsa_genomic_fhir_webapp/blob/HEAD/src/components/UI/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### govuk-once (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [personalised-planning](https://github.com/govuk-once/personalised-planning) | [`frontend/app/components/shared/Card.tsx`](https://github.com/govuk-once/personalised-planning/blob/HEAD/frontend/app/components/shared/Card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### GSS-Cogs (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [idpd-frontend-homepage](https://github.com/GSS-Cogs/idpd-frontend-homepage) | [`components/CardList/index.tsx`](https://github.com/GSS-Cogs/idpd-frontend-homepage/blob/HEAD/components/CardList/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### GSTT-CSC (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gstt-csc.github.io](https://github.com/GSTT-CSC/gstt-csc.github.io) | [`_sass/components/_card.scss`](https://github.com/GSTT-CSC/gstt-csc.github.io/blob/HEAD/_sass/components/_card.scss) | SCSS/CSS only |  |  |  |

#### hull-city-council (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [granicus-design-system](https://github.com/hull-city-council/granicus-design-system) | [`src/components/ImageCard.jsx`](https://github.com/hull-city-council/granicus-design-system/blob/HEAD/src/components/ImageCard.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### LandRegistry (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmlr-design-system](https://github.com/LandRegistry/hmlr-design-system) | [`src/stylesheets/components/_image-card.scss`](https://github.com/LandRegistry/hmlr-design-system/blob/HEAD/src/stylesheets/components/_image-card.scss) | SCSS/CSS only |  |  | `gem-c-contents-list` |

#### LondonBoroughSutton (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbs-frontend](https://github.com/LondonBoroughSutton/lbs-frontend) | [`package/LBS/components/card/_card.scss`](https://github.com/LondonBoroughSutton/lbs-frontend/blob/HEAD/package/LBS/components/card/_card.scss) | SCSS/CSS only |  |  |  |

#### nhsuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nhsapp-frontend](https://github.com/nhsuk/nhsapp-frontend) | [`src/components/card/_card.scss`](https://github.com/nhsuk/nhsapp-frontend/blob/HEAD/src/components/card/_card.scss) | SCSS/CSS only |  |  | `nhsuk-link` |

#### osgeouk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [foss4g-2027](https://github.com/osgeouk/foss4g-2027) | [`src/components/Card.svelte`](https://github.com/osgeouk/foss4g-2027/blob/HEAD/src/components/Card.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### RoyalBoroughKingston (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ck-component-library](https://github.com/RoyalBoroughKingston/ck-component-library) | [`src/scss/components/_card.scss`](https://github.com/RoyalBoroughKingston/ck-component-library/blob/HEAD/src/scss/components/_card.scss) | SCSS/CSS only |  |  |  |

#### smbc-digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [SMBC-Sonic-Brief-Community-Edition](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition) | [`frontend_app/src/components/ui/card.tsx`](https://github.com/smbc-digital/SMBC-Sonic-Brief-Community-Edition/blob/HEAD/frontend_app/src/components/ui/card.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### TechnologyEnhancedLearning (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [moodle-theme-nhsetel](https://github.com/TechnologyEnhancedLearning/moodle-theme-nhsetel) | [`scss/components/_card.scss`](https://github.com/TechnologyEnhancedLearning/moodle-theme-nhsetel/blob/HEAD/scss/components/_card.scss) | SCSS/CSS only |  |  | `nhsuk-action-link` |

#### trade-tariff (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [trade-tariff-frontend](https://github.com/trade-tariff/trade-tariff-frontend) | [`app/assets/stylesheets/src/components/_app-card.scss`](https://github.com/trade-tariff/trade-tariff-frontend/blob/HEAD/app/assets/stylesheets/src/components/_app-card.scss) | SCSS/CSS only |  |  |  |

#### ukaea (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [MRFUI](https://github.com/ukaea/MRFUI) | [`src/lib/components/ui/card/card.svelte`](https://github.com/ukaea/MRFUI/blob/HEAD/src/lib/components/ui/card/card.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [social-mobility-commission-website](https://github.com/ukgov-equality-hub/social-mobility-commission-website) | [`web/app/themes/smc/App_Themes/main/css/components/_cards.scss`](https://github.com/ukgov-equality-hub/social-mobility-commission-website/blob/HEAD/web/app/themes/smc/App_Themes/main/css/components/_cards.scss) | SCSS/CSS only |  |  |  |

#### UKHO (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [admiralty-design-system](https://github.com/UKHO/admiralty-design-system) | [`packages/core/src/components/card/card.scss`](https://github.com/UKHO/admiralty-design-system/blob/HEAD/packages/core/src/components/card/card.scss) | SCSS/CSS only |  |  |  |

#### ukparliament (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [parliament.uk-pugin](https://github.com/ukparliament/parliament.uk-pugin) | [`src/stylesheets/components/_card.scss`](https://github.com/ukparliament/parliament.uk-pugin/blob/HEAD/src/stylesheets/components/_card.scss) | SCSS/CSS only |  |  |  |

#### uktrade (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [redbox](https://github.com/uktrade/redbox) | [`django_app/frontend/src/interaction_design_system/ids/components/card.scss`](https://github.com/uktrade/redbox/blob/HEAD/django_app/frontend/src/interaction_design_system/ids/components/card.scss) | SCSS/CSS only |  |  |  |

#### companieshouse (2, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [acsp-verify-identity-prototype](https://github.com/companieshouse/acsp-verify-identity-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/companieshouse/acsp-verify-identity-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |
| [ch-account-prototype](https://github.com/companieshouse/ch-account-prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/companieshouse/ch-account-prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |

#### dhsc-govuk (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Get-Adult-Social-Care-Data_Prototype](https://github.com/dhsc-govuk/Get-Adult-Social-Care-Data_Prototype) | [`app/assets/sass/components/_cards.scss`](https://github.com/dhsc-govuk/Get-Adult-Social-Care-Data_Prototype/blob/HEAD/app/assets/sass/components/_cards.scss) | SCSS/CSS only | yes |  |  |

## Adjacent work

Related clusters not included here: panel (in GOV.UK Frontend, 87 repos, 44 extend it), hero, summary-card. See [page-structure drill-down](./page-structure.md) for heading/navigation clusters.
