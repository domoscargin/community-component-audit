# Page structure, headings and navigation: service repo drill-down

Generated 2026-11-11 from the audit snapshot of 2026-11-04 ([clusters.json](../clusters.json)) combined with class usage data ([class-usage.json](../class-usage.json)). See [report.md](../report.md) for methodology.

**Read this first:** the audit detects *components*, so "page structure" and "service patterns" only show up here as their component-shaped shadows — page-heading, heading, and the navigation/contents components that make up page furniture. A service pattern like "apply for something" spans pages and cannot appear in this data at all. Treat this doc as a starting sample of repos to look at, not as evidence of scale for the service-patterns idea.

The clusters below fall into two groups: **headings** (page-heading, heading) and **page furniture** (contents-list, sub-navigation, related-navigation) — the components teams build to structure and navigate within pages and sections.

Each repo appears once per cluster, with a link to the file the audit matched. "Extends GOV.UK" means the implementation builds on or imports the GOV.UK Frontend component rather than being written from scratch. The "Community classes used" column lists *all* community design system classes detected in that repo (any component) — repos consuming another organisation's component rather than, or as well as, building their own.

Caveats: detection is filename/class-name based, so some hits may be false positives, and one hit per repo means the audit shows *an* example file, not every instance. Class usage and component detection are independent scans: a repo can use a community class without having its own matching file, and vice versa.

## At a glance

| Cluster | Status | Score | Repos (production / prototype) | Extend GOV.UK |
|---|---|---|---|---|
| page-heading | not in GOV.UK Frontend | 47.7 | 65 (57 / 8) |  |
| heading | not in GOV.UK Frontend | 36.2 | 43 (39 / 4) |  |
| contents-list | not in GOV.UK Frontend | 53.4 | 31 (30 / 1) |  |
| sub-navigation | partially covered | 56.8 | 76 (57 / 19) |  |
| related-navigation | not in GOV.UK Frontend | 55.3 | 41 (31 / 10) |  |

## Community class adoption

Repos using another design system's classes. These are *consumers* of a community component — evidence of which existing implementation teams reach for.

| Class | Source design system | Repos using it | Production | Prototypes |
|---|---|---|---|---|
| `gem-c-heading` | govuk-publishing-components | 27 | 12 | 15 |
| `nhsuk-heading` | nhsuk-frontend | 2 | 1 | 1 |
| `moj-page-header-actions` | moj-frontend | 16 | 12 | 4 |
| `gem-c-contents-list` | govuk-publishing-components | 26 | 12 | 14 |
| `nhsuk-contents-list` | nhsuk-frontend | 9 | 8 | 1 |
| `ons-table-of-contents` | ons-design-system | 2 | 1 | 1 |
| `moj-sub-navigation` | moj-frontend | 39 | 22 | 17 |
| `moj-side-navigation` | moj-frontend | 25 | 14 | 11 |
| `gem-c-related-navigation` | govuk-publishing-components | 13 | 5 | 8 |
| `x-govuk-related-navigation` | x-govuk-prototype-components | 4 | 2 | 2 |
| `dwp-horizontal-navigation` | dwp-design-system | 5 | 3 | 2 |
| `dwp-side-navigation` | dwp-design-system | 4 | 2 | 2 |
| `x-govuk-secondary-navigation` | x-govuk-prototype-components | 2 | 2 | 0 |

**15 repos both consume a community class and have their own implementation** in the clusters below; **126 consume a community class with no matching own implementation detected**.

<details><summary>Consumers without their own implementation (126 repos)</summary>

- **alphagov**: [data-marketplace-prototype](https://github.com/alphagov/data-marketplace-prototype) (proto) (`gem-c-related-navigation`, `gem-c-contents-list`, `gem-c-heading`), [emergency-alerts-admin-ui-prototype-new](https://github.com/alphagov/emergency-alerts-admin-ui-prototype-new) (proto) (`gem-c-heading`), [govuk-dark-mode-prototype](https://github.com/alphagov/govuk-dark-mode-prototype) (proto) (`gem-c-contents-list`, `gem-c-heading`)
- **co-cddo**: [cms-prototype](https://github.com/co-cddo/cms-prototype) (proto) (`gem-c-heading`), [dds](https://github.com/co-cddo/dds) (`gem-c-related-navigation`, `gem-c-contents-list`, `gem-c-heading`)
- **communitiesuk**: [design-manual-mhclg](https://github.com/communitiesuk/design-manual-mhclg) (`x-govuk-secondary-navigation`)
- **companieshouse**: [ch-design-system](https://github.com/companieshouse/ch-design-system) (`moj-side-navigation`)
- **CPS-Innovation**: [assurance-frontend](https://github.com/CPS-Innovation/assurance-frontend) (`gem-c-contents-list`)
- **DEFRA**: [assurance-frontend](https://github.com/DEFRA/assurance-frontend) (`gem-c-contents-list`), [cyltfr](https://github.com/DEFRA/cyltfr) (`gem-c-contents-list`), [cyltfr-app](https://github.com/DEFRA/cyltfr-app) (`gem-c-contents-list`), [digital-sus-actions-prototype](https://github.com/DEFRA/digital-sus-actions-prototype) (proto) (`gem-c-contents-list`, `gem-c-heading`), [epr-obligationchecker-frontend](https://github.com/DEFRA/epr-obligationchecker-frontend) (`gem-c-heading`), [service-manual-prototype](https://github.com/DEFRA/service-manual-prototype) (proto) (`gem-c-contents-list`)
- **defra-design**: [echo-prototype](https://github.com/defra-design/echo-prototype) (proto) (`gem-c-related-navigation`, `gem-c-contents-list`, `gem-c-heading`), [fcp-animal-health](https://github.com/defra-design/fcp-animal-health) (`gem-c-related-navigation`, `gem-c-contents-list`, `gem-c-heading`), [fcp-farming-front-door](https://github.com/defra-design/fcp-farming-front-door) (`gem-c-contents-list`), [ff-ss](https://github.com/defra-design/ff-ss) (`gem-c-heading`), [ffc-regulation-and-enforcement-prototype](https://github.com/defra-design/ffc-regulation-and-enforcement-prototype) (proto) (`gem-c-related-navigation`, `gem-c-contents-list`), [forms-prototype](https://github.com/defra-design/forms-prototype) (proto) (`moj-sub-navigation`, `gem-c-contents-list`), [Import-risk-categorisation](https://github.com/defra-design/Import-risk-categorisation) (`gem-c-contents-list`, `gem-c-heading`), [ltfri-prototype](https://github.com/defra-design/ltfri-prototype) (proto) (`gem-c-contents-list`), [manage-biodiversity-gains](https://github.com/defra-design/manage-biodiversity-gains) (`gem-c-heading`), [whitehall-template](https://github.com/defra-design/whitehall-template) (`gem-c-related-navigation`, `gem-c-contents-list`)
- **DFE-Digital**: [apply-for-qts-prototype](https://github.com/DFE-Digital/apply-for-qts-prototype) (proto) (`gem-c-contents-list`), [assure-prototype-2](https://github.com/DFE-Digital/assure-prototype-2) (proto) (`gem-c-heading`), [buying-for-schools-prototype](https://github.com/DFE-Digital/buying-for-schools-prototype) (proto) (`gem-c-contents-list`), [check-free-school-meals-eligibility-admin](https://github.com/DFE-Digital/check-free-school-meals-eligibility-admin) (`moj-page-header-actions`), [check-performance-data-prototype](https://github.com/DFE-Digital/check-performance-data-prototype) (proto) (`moj-side-navigation`), [check-the-record-of-a-teacher-prototype](https://github.com/DFE-Digital/check-the-record-of-a-teacher-prototype) (proto) (`x-govuk-related-navigation`), [check-your-eligibility-prototype](https://github.com/DFE-Digital/check-your-eligibility-prototype) (proto) (`gem-c-related-navigation`), [communicating-funding-prototype](https://github.com/DFE-Digital/communicating-funding-prototype) (proto) (`gem-c-related-navigation`), [dfe-complete-conversions-transfers-and-changes](https://github.com/DFE-Digital/dfe-complete-conversions-transfers-and-changes) (`moj-sub-navigation`), [DfE-Connect-Prototype](https://github.com/DFE-Digital/DfE-Connect-Prototype) (proto) (`moj-sub-navigation`), [dfe-covid-content-prototype](https://github.com/DFE-Digital/dfe-covid-content-prototype) (proto) (`gem-c-related-navigation`, `gem-c-contents-list`, `gem-c-heading`), [eduk-prototype](https://github.com/DFE-Digital/eduk-prototype) (proto) (`gem-c-heading`), [external-applications-prototype](https://github.com/DFE-Digital/external-applications-prototype) (proto) (`gem-c-contents-list`, `gem-c-heading`), [ey-recovery-prototype](https://github.com/DFE-Digital/ey-recovery-prototype) (proto) (`moj-side-navigation`), [feat](https://github.com/DFE-Digital/feat) (`x-govuk-related-navigation`), [find-teacher-training-accounts-prototype](https://github.com/DFE-Digital/find-teacher-training-accounts-prototype) (proto) (`moj-sub-navigation`), [fips-v4](https://github.com/DFE-Digital/fips-v4) (`gem-c-related-navigation`), [ghbs-school-collab](https://github.com/DFE-Digital/ghbs-school-collab) (`moj-sub-navigation`), [gias-transformation-prototype](https://github.com/DFE-Digital/gias-transformation-prototype) (proto) (`moj-side-navigation`), [itt-mentor-payment-sampling-clawback](https://github.com/DFE-Digital/itt-mentor-payment-sampling-clawback) (`x-govuk-related-navigation`), [new-npq-prototype](https://github.com/DFE-Digital/new-npq-prototype) (proto) (`moj-side-navigation`), [record-concerns-and-support](https://github.com/DFE-Digital/record-concerns-and-support) (`moj-sub-navigation`), [refer-serious-misconduct-by-a-teacher-prototype](https://github.com/DFE-Digital/refer-serious-misconduct-by-a-teacher-prototype) (proto) (`x-govuk-related-navigation`), [rsd-reep](https://github.com/DFE-Digital/rsd-reep) (`gem-c-heading`), [sap-public](https://github.com/DFE-Digital/sap-public) (`moj-sub-navigation`), [school-complaints-prototype](https://github.com/DFE-Digital/school-complaints-prototype) (proto) (`gem-c-heading`), [sip-public](https://github.com/DFE-Digital/sip-public) (`moj-sub-navigation`, `moj-side-navigation`), [trs-post-mvp](https://github.com/DFE-Digital/trs-post-mvp) (`x-govuk-secondary-navigation`), [tte-prototype](https://github.com/DFE-Digital/tte-prototype) (proto) (`moj-side-navigation`)
- **DFID**: [devtracker-from-api](https://github.com/DFID/devtracker-from-api) (`moj-sub-navigation`)
- **dwp**: [attendance-allowance-agent](https://github.com/dwp/attendance-allowance-agent) (`dwp-horizontal-navigation`), [bsp-prototype](https://github.com/dwp/bsp-prototype) (proto) (`gem-c-related-navigation`, `gem-c-contents-list`, `gem-c-heading`), [cfems-ucd](https://github.com/dwp/cfems-ucd) (`dwp-horizontal-navigation`, `moj-side-navigation`), [cmg-employers-prototype](https://github.com/dwp/cmg-employers-prototype) (proto) (`moj-sub-navigation`), [common-capabilities-mmw](https://github.com/dwp/common-capabilities-mmw) (`moj-page-header-actions`), [evidence-prototype](https://github.com/dwp/evidence-prototype) (proto) (`dwp-horizontal-navigation`), [fed-bill](https://github.com/dwp/fed-bill) (`dwp-horizontal-navigation`), [fqm-prototype](https://github.com/dwp/fqm-prototype) (proto) (`dwp-side-navigation`), [gateway-services-prototype](https://github.com/dwp/gateway-services-prototype) (proto) (`dwp-side-navigation`), [health-assessments](https://github.com/dwp/health-assessments) (`moj-side-navigation`), [health-workflow-prototype](https://github.com/dwp/health-workflow-prototype) (proto) (`dwp-horizontal-navigation`), [phoenix-service](https://github.com/dwp/phoenix-service) (`moj-sub-navigation`), [PIP-new-claims-triage](https://github.com/dwp/PIP-new-claims-triage) (`moj-side-navigation`), [SRA-UCD-sandpit](https://github.com/dwp/SRA-UCD-sandpit) (`dwp-side-navigation`)
- **hmcts**: [opal-rm-prototype](https://github.com/hmcts/opal-rm-prototype) (proto) (`moj-page-header-actions`)
- **LandRegistry**: [create-web-services-using-hmlr-apis](https://github.com/LandRegistry/create-web-services-using-hmlr-apis) (`moj-side-navigation`, `gem-c-heading`)
- **ministryofjustice**: [accredited-programmes-community-prototype](https://github.com/ministryofjustice/accredited-programmes-community-prototype) (proto) (`moj-sub-navigation`, `moj-side-navigation`), [accredited-programmes-prototype](https://github.com/ministryofjustice/accredited-programmes-prototype) (proto) (`moj-sub-navigation`, `moj-side-navigation`, `moj-page-header-actions`), [analytical-platform-dashboard-service](https://github.com/ministryofjustice/analytical-platform-dashboard-service) (`moj-sub-navigation`), [analytics-platform-control-panel](https://github.com/ministryofjustice/analytics-platform-control-panel) (`moj-sub-navigation`), [approved-premises-prototype](https://github.com/ministryofjustice/approved-premises-prototype) (proto) (`moj-sub-navigation`, `moj-page-header-actions`), [create-and-vary-a-licence](https://github.com/ministryofjustice/create-and-vary-a-licence) (`moj-sub-navigation`), [cvl-improvements-prototype](https://github.com/ministryofjustice/cvl-improvements-prototype) (proto) (`moj-sub-navigation`), [hdc-cvl-prototype](https://github.com/ministryofjustice/hdc-cvl-prototype) (proto) (`moj-sub-navigation`), [hmpps-arns-assessment-platform-ui](https://github.com/ministryofjustice/hmpps-arns-assessment-platform-ui) (`moj-page-header-actions`), [hmpps-breach-notice-ui](https://github.com/ministryofjustice/hmpps-breach-notice-ui) (`moj-side-navigation`), [hmpps-breach-report-co-sso-ui](https://github.com/ministryofjustice/hmpps-breach-report-co-sso-ui) (`moj-side-navigation`), [hmpps-community-accommodation-tier-2-bail-prototypes](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes) (proto) (`moj-side-navigation`), [hmpps-contacts-ui](https://github.com/ministryofjustice/hmpps-contacts-ui) (`moj-page-header-actions`), [hmpps-education-employment-ui](https://github.com/ministryofjustice/hmpps-education-employment-ui) (`moj-sub-navigation`), [hmpps-electronic-monitoring-data-prototype](https://github.com/ministryofjustice/hmpps-electronic-monitoring-data-prototype) (proto) (`gem-c-contents-list`, `gem-c-heading`), [hmpps-interventions-prototype](https://github.com/ministryofjustice/hmpps-interventions-prototype) (proto) (`moj-sub-navigation`), [hmpps-jobs-board-reporting-ui](https://github.com/ministryofjustice/hmpps-jobs-board-reporting-ui) (`moj-sub-navigation`), [hmpps-jobs-board-ui](https://github.com/ministryofjustice/hmpps-jobs-board-ui) (`moj-sub-navigation`), [hmpps-parom-service-ui](https://github.com/ministryofjustice/hmpps-parom-service-ui) (`moj-side-navigation`), [hmpps-people-on-probation-ui](https://github.com/ministryofjustice/hmpps-people-on-probation-ui) (`moj-sub-navigation`), [hmpps-probation-supervision-contacts-ui](https://github.com/ministryofjustice/hmpps-probation-supervision-contacts-ui) (`moj-sub-navigation`, `moj-page-header-actions`), [hmpps-probation-supervision-early-termination-ui](https://github.com/ministryofjustice/hmpps-probation-supervision-early-termination-ui) (`moj-page-header-actions`), [hmpps-probation-supervision-reminders-ui](https://github.com/ministryofjustice/hmpps-probation-supervision-reminders-ui) (`moj-page-header-actions`), [hmpps-sentence-plan-prototype](https://github.com/ministryofjustice/hmpps-sentence-plan-prototype) (proto) (`moj-sub-navigation`), [hmpps-strengths-based-needs-assessments-ui](https://github.com/ministryofjustice/hmpps-strengths-based-needs-assessments-ui) (`moj-side-navigation`), [hmpps-suicide-risk-form-ui](https://github.com/ministryofjustice/hmpps-suicide-risk-form-ui) (`moj-side-navigation`), [hmpps-warrant-risk-assessment-ui](https://github.com/ministryofjustice/hmpps-warrant-risk-assessment-ui) (`moj-side-navigation`), [laa-amend-a-claim](https://github.com/ministryofjustice/laa-amend-a-claim) (`moj-sub-navigation`), [laa-decide-prototype](https://github.com/ministryofjustice/laa-decide-prototype) (proto) (`moj-sub-navigation`), [laa-means-match-prototype](https://github.com/ministryofjustice/laa-means-match-prototype) (proto) (`moj-sub-navigation`), [laa-review-criminal-legal-aid](https://github.com/ministryofjustice/laa-review-criminal-legal-aid) (`moj-sub-navigation`), [laa-submit-a-bulk-claim](https://github.com/ministryofjustice/laa-submit-a-bulk-claim) (`moj-sub-navigation`), [launchpad-prototype](https://github.com/ministryofjustice/launchpad-prototype) (proto) (`moj-side-navigation`), [mpc-prototype](https://github.com/ministryofjustice/mpc-prototype) (proto) (`moj-sub-navigation`, `moj-side-navigation`, `moj-page-header-actions`), [offender-management-allocation-manager](https://github.com/ministryofjustice/offender-management-allocation-manager) (`moj-page-header-actions`), [prototype-kit-training](https://github.com/ministryofjustice/prototype-kit-training) (proto) (`moj-side-navigation`), [track-my-case](https://github.com/ministryofjustice/track-my-case) (`gem-c-contents-list`, `gem-c-heading`)
- **nhsbsa**: [nhs-student-bursaries-new](https://github.com/nhsbsa/nhs-student-bursaries-new) (`nhsuk-heading`), [nhs-volunteering-beta-prototype](https://github.com/nhsbsa/nhs-volunteering-beta-prototype) (proto) (`nhsuk-heading`), [nhsbsa-asc-tfrs](https://github.com/nhsbsa/nhsbsa-asc-tfrs) (`moj-page-header-actions`)
- **NHSDigital**: [healthstore-deployment-guidance-prototype](https://github.com/NHSDigital/healthstore-deployment-guidance-prototype) (proto) (`nhsuk-contents-list`)
- **nhselect**: [cypmh-comms-toolbox](https://github.com/nhselect/cypmh-comms-toolbox) (`nhsuk-contents-list`), [cypmh-index](https://github.com/nhselect/cypmh-index) (`nhsuk-contents-list`), [resp-surge-skills-matrix](https://github.com/nhselect/resp-surge-skills-matrix) (`nhsuk-contents-list`), [step1-proficiencies](https://github.com/nhselect/step1-proficiencies) (`nhsuk-contents-list`), [step1-training](https://github.com/nhselect/step1-training) (`nhsuk-contents-list`)
- **NHSLeadership**: [nhsblocks](https://github.com/NHSLeadership/nhsblocks) (`nhsuk-contents-list`)
- **ONSdigital**: [spp-self-service-prototype](https://github.com/ONSdigital/spp-self-service-prototype) (proto) (`ons-table-of-contents`), [web-2026](https://github.com/ONSdigital/web-2026) (`ons-table-of-contents`)
- **Planning-Inspectorate**: [local-plans-examinations-prototype](https://github.com/Planning-Inspectorate/local-plans-examinations-prototype) (proto) (`moj-sub-navigation`), [section-62a-prototype](https://github.com/Planning-Inspectorate/section-62a-prototype) (proto) (`moj-sub-navigation`)
- **SkillsFundingAgency**: [das-aodp-web](https://github.com/SkillsFundingAgency/das-aodp-web) (`gem-c-heading`), [DS-DocumentationServicePrototype-Public](https://github.com/SkillsFundingAgency/DS-DocumentationServicePrototype-Public) (proto) (`gem-c-related-navigation`), [tl-employersupport-prototype](https://github.com/SkillsFundingAgency/tl-employersupport-prototype) (proto) (`gem-c-heading`)
- **UKHSA-Internal**: [coronavirus-dashboard-easy-read](https://github.com/UKHSA-Internal/coronavirus-dashboard-easy-read) (`moj-side-navigation`), [coronavirus-dashboard-frontend-server](https://github.com/UKHSA-Internal/coronavirus-dashboard-frontend-server) (`moj-side-navigation`)

</details>

## Repos by cluster and organisation

### page-heading — 65 repos (57 production)

HMRC ships page-heading and page-title patterns; Scottish Government a page-header.

#### ministryofjustice (7, 7 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmpps-community-payback-ui](https://github.com/ministryofjustice/hmpps-community-payback-ui) | [`assets/scss/components/_page-header.scss`](https://github.com/ministryofjustice/hmpps-community-payback-ui/blob/HEAD/assets/scss/components/_page-header.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-esupervision-ui](https://github.com/ministryofjustice/hmpps-esupervision-ui) | [`assets/scss/components/_page-header.scss`](https://github.com/ministryofjustice/hmpps-esupervision-ui/blob/HEAD/assets/scss/components/_page-header.scss) | SCSS/CSS only |  |  | `moj-sortable-table` |
| [hmpps-probation-check-in-ui](https://github.com/ministryofjustice/hmpps-probation-check-in-ui) | [`assets/scss/components/_page-header.scss`](https://github.com/ministryofjustice/hmpps-probation-check-in-ui/blob/HEAD/assets/scss/components/_page-header.scss) | SCSS/CSS only |  |  |  |
| [justice-redact-frontend](https://github.com/ministryofjustice/justice-redact-frontend) | [`app/components/PageTitle.tsx`](https://github.com/ministryofjustice/justice-redact-frontend/blob/HEAD/app/components/PageTitle.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [laa-access-civil-legal-aid](https://github.com/ministryofjustice/laa-access-civil-legal-aid) | [`app/templates/find_a_legal_adviser/components/page-header.html`](https://github.com/ministryofjustice/laa-access-civil-legal-aid/blob/HEAD/app/templates/find_a_legal_adviser/components/page-header.html) | template partial |  |  |  |
| [laa-fee-scheme-ui](https://github.com/ministryofjustice/laa-fee-scheme-ui) | [`src/components/PageHeading.jsx`](https://github.com/ministryofjustice/laa-fee-scheme-ui/blob/HEAD/src/components/PageHeading.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [serve-opg](https://github.com/ministryofjustice/serve-opg) | [`serve-web/assets/css/components/_moj_page_header.scss`](https://github.com/ministryofjustice/serve-opg/blob/HEAD/serve-web/assets/css/components/_moj_page_header.scss) | SCSS/CSS only |  |  |  |

#### UKHomeOffice (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [eta-web-messenger](https://github.com/UKHomeOffice/eta-web-messenger) | [`src/components/content/page-heading.jsx`](https://github.com/UKHomeOffice/eta-web-messenger/blob/HEAD/src/components/content/page-heading.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [euss-web-messenger](https://github.com/UKHomeOffice/euss-web-messenger) | [`src/components/content/page-heading.jsx`](https://github.com/UKHomeOffice/euss-web-messenger/blob/HEAD/src/components/content/page-heading.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [evisa-web-messenger](https://github.com/UKHomeOffice/evisa-web-messenger) | [`src/components/content/page-heading.jsx`](https://github.com/UKHomeOffice/evisa-web-messenger/blob/HEAD/src/components/content/page-heading.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [hof-genesys-chat-component](https://github.com/UKHomeOffice/hof-genesys-chat-component) | [`sandbox/src/components/content/page-heading.jsx`](https://github.com/UKHomeOffice/hof-genesys-chat-component/blob/HEAD/sandbox/src/components/content/page-heading.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [visa-web-messenger](https://github.com/UKHomeOffice/visa-web-messenger) | [`src/components/content/page-heading.jsx`](https://github.com/UKHomeOffice/visa-web-messenger/blob/HEAD/src/components/content/page-heading.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ukhsa-collaboration (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nsc-recommendationsp](https://github.com/ukhsa-collaboration/nsc-recommendationsp) | [`frontend/src/components/title.scss`](https://github.com/ukhsa-collaboration/nsc-recommendationsp/blob/HEAD/frontend/src/components/title.scss) | SCSS/CSS only |  |  |  |
| [science-research-site](https://github.com/ukhsa-collaboration/science-research-site) | [`themes/phe/src/scss/components/_page-title.scss`](https://github.com/ukhsa-collaboration/science-research-site/blob/HEAD/themes/phe/src/scss/components/_page-title.scss) | SCSS/CSS only |  |  |  |
| [ukhsa-science-research-site](https://github.com/ukhsa-collaboration/ukhsa-science-research-site) | [`themes/phe/src/scss/components/_page-title.scss`](https://github.com/ukhsa-collaboration/ukhsa-science-research-site/blob/HEAD/themes/phe/src/scss/components/_page-title.scss) | SCSS/CSS only |  |  |  |
| [ukhsa-science-research-site-dev](https://github.com/ukhsa-collaboration/ukhsa-science-research-site-dev) | [`themes/phe/src/scss/components/_page-title.scss`](https://github.com/ukhsa-collaboration/ukhsa-science-research-site-dev/blob/HEAD/themes/phe/src/scss/components/_page-title.scss) | SCSS/CSS only |  |  |  |

#### dwp (4, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dwp-ask](https://github.com/dwp/dwp-ask) | [`components/ui/Title/Title.tsx`](https://github.com/dwp/dwp-ask/blob/HEAD/components/ui/Title/Title.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [dwp-kbv-uplift](https://github.com/dwp/dwp-kbv-uplift) | [`.tmp/backup-nunjucks/hmrc/components/page-heading/macro.html`](https://github.com/dwp/dwp-kbv-uplift/blob/HEAD/.tmp/backup-nunjucks/hmrc/components/page-heading/macro.html) | Nunjucks macro |  |  |  |
| [Searchlight](https://github.com/dwp/Searchlight) | [`app/v6/views/update/address/components/title.njk`](https://github.com/dwp/Searchlight/blob/HEAD/app/v6/views/update/address/components/title.njk) | template partial |  |  |  |
| [kbv-prototype](https://github.com/dwp/kbv-prototype) | [`.tmp/backup-nunjucks/hmrc/components/page-heading/macro.html`](https://github.com/dwp/kbv-prototype/blob/HEAD/.tmp/backup-nunjucks/hmrc/components/page-heading/macro.html) | Nunjucks macro | yes |  |  |

#### alphagov (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [emergency-alerts-admin](https://github.com/alphagov/emergency-alerts-admin) | [`app/templates/components/page-header.html`](https://github.com/alphagov/emergency-alerts-admin/blob/HEAD/app/templates/components/page-header.html) | template partial |  |  |  |
| [notifications-admin](https://github.com/alphagov/notifications-admin) | [`app/templates/components/govuk-page-header.html`](https://github.com/alphagov/notifications-admin/blob/HEAD/app/templates/components/govuk-page-header.html) | template partial |  |  |  |
| [publisher](https://github.com/alphagov/publisher) | [`app/views/editions/secondary_nav_tabs/edit/editable/components/_title.html.erb`](https://github.com/alphagov/publisher/blob/HEAD/app/views/editions/secondary_nav_tabs/edit/editable/components/_title.html.erb) | template partial |  |  |  |

#### DEFRA (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cdp-portal-frontend](https://github.com/DEFRA/cdp-portal-frontend) | [`src/server/common/components/page-heading/_page-heading.scss`](https://github.com/DEFRA/cdp-portal-frontend/blob/HEAD/src/server/common/components/page-heading/_page-heading.scss) | SCSS/CSS only |  |  |  |
| [eutd-mmo-fes-external-frontend](https://github.com/DEFRA/eutd-mmo-fes-external-frontend) | [`app/components/title.tsx`](https://github.com/DEFRA/eutd-mmo-fes-external-frontend/blob/HEAD/app/components/title.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [ncea-geonetwork](https://github.com/DEFRA/ncea-geonetwork) | [`core-geonetwork/web-ui/src/main/resources/catalog/lib/style/bootstrap/docs/_includes/components/page-header.html`](https://github.com/DEFRA/ncea-geonetwork/blob/HEAD/core-geonetwork/web-ui/src/main/resources/catalog/lib/style/bootstrap/docs/_includes/components/page-header.html) | template partial |  |  |  |

#### SkillsFundingAgency (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [das-apprentice-app](https://github.com/SkillsFundingAgency/das-apprentice-app) | [`src/SFA.DAS.ApprenticeApp.Pwa/Frontend/components/page-header/_index.scss`](https://github.com/SkillsFundingAgency/das-apprentice-app/blob/HEAD/src/SFA.DAS.ApprenticeApp.Pwa/Frontend/components/page-header/_index.scss) | SCSS/CSS only |  |  |  |
| [das-campaign](https://github.com/SkillsFundingAgency/das-campaign) | [`src/SFA.DAS.Campaign.Web/wwwroot/src/components/page-header/_page-header.scss`](https://github.com/SkillsFundingAgency/das-campaign/blob/HEAD/src/SFA.DAS.Campaign.Web/wwwroot/src/components/page-header/_page-header.scss) | SCSS/CSS only |  |  |  |
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | [`src/apprentice/components/page-header/_page-header.scss`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/src/apprentice/components/page-header/_page-header.scss) | SCSS/CSS only |  |  |  |

#### alan-turing-institute (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [AssurancePlatform](https://github.com/alan-turing-institute/AssurancePlatform) | [`components/ui/page-heading.tsx`](https://github.com/alan-turing-institute/AssurancePlatform/blob/HEAD/components/ui/page-heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [bias-cards](https://github.com/alan-turing-institute/bias-cards) | [`components/page-header.tsx`](https://github.com/alan-turing-institute/bias-cards/blob/HEAD/components/page-header.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dfe-analytical-services (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [chatbot-prototype](https://github.com/dfe-analytical-services/chatbot-prototype) | [`chatbot-ui/components/PageHeader.tsx`](https://github.com/dfe-analytical-services/chatbot-prototype/blob/HEAD/chatbot-ui/components/PageHeader.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-admin/src/components/PageHeader.tsx`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-admin/src/components/PageHeader.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### digital-land (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [extract-alpha](https://github.com/digital-land/extract-alpha) | [`extract/frontend-components/components/title/macro.html`](https://github.com/digital-land/extract-alpha/blob/HEAD/extract/frontend-components/components/title/macro.html) | Nunjucks macro |  |  |  |
| [standards-manager](https://github.com/digital-land/standards-manager) | [`assets/scss/components/_page-header.scss`](https://github.com/digital-land/standards-manager/blob/HEAD/assets/scss/components/_page-header.scss) | SCSS/CSS only |  |  |  |

#### hmcts (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cath-service](https://github.com/hmcts/cath-service) | [`libs/web-core/src/views/components/page-title.njk`](https://github.com/hmcts/cath-service/blob/HEAD/libs/web-core/src/views/components/page-title.njk) | template partial |  |  |  |
| [dts-portfolio-portal](https://github.com/hmcts/dts-portfolio-portal) | [`src/components/ui/page-header.tsx`](https://github.com/hmcts/dts-portfolio-portal/blob/HEAD/src/components/ui/page-header.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### InnovateUKGitHub (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [een-webapp](https://github.com/InnovateUKGitHub/een-webapp) | [`drupal/core/themes/bartik/css/components/page-title.css`](https://github.com/InnovateUKGitHub/een-webapp/blob/HEAD/drupal/core/themes/bartik/css/components/page-title.css) | SCSS/CSS only |  |  |  |
| [innovation-funding-service-post-award](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award) | [`packages/app/src/ui/components/organisms/projects/ProjectTitle/title.tsx`](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award/blob/HEAD/packages/app/src/ui/components/organisms/projects/ProjectTitle/title.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### scottish-government-design-system (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/scottish-government-design-system/design-system) | [`src/components/page-header/_index.scss`](https://github.com/scottish-government-design-system/design-system/blob/HEAD/src/components/page-header/_index.scss) | SCSS/CSS only |  |  |  |
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/PageHeader/PageHeader.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/PageHeader/PageHeader.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### DFE-Digital (5, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/components/page_title.html.erb`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/components/page_title.html.erb) | template partial |  |  |  |
| [find-a-prototype](https://github.com/DFE-Digital/find-a-prototype) | [`app/assets/sass/components/_page-header.scss`](https://github.com/DFE-Digital/find-a-prototype/blob/HEAD/app/assets/sass/components/_page-header.scss) | SCSS/CSS only | yes |  | `dfe-card` |
| [manage-teaching-jobs-prototype](https://github.com/DFE-Digital/manage-teaching-jobs-prototype) | [`app/views/components/page-header/_page-header.scss`](https://github.com/DFE-Digital/manage-teaching-jobs-prototype/blob/HEAD/app/views/components/page-header/_page-header.scss) | SCSS/CSS only | yes |  |  |
| [teacher-services-landing-page-prototype](https://github.com/DFE-Digital/teacher-services-landing-page-prototype) | [`app/views/components/page-header/_page-header.scss`](https://github.com/DFE-Digital/teacher-services-landing-page-prototype/blob/HEAD/app/views/components/page-header/_page-header.scss) | SCSS/CSS only | yes |  |  |
| [teaching-vacancies-prototype](https://github.com/DFE-Digital/teaching-vacancies-prototype) | [`app/versions/1-0/views/components/page-header/_page-header.scss`](https://github.com/DFE-Digital/teaching-vacancies-prototype/blob/HEAD/app/versions/1-0/views/components/page-header/_page-header.scss) | SCSS/CSS only | yes |  |  |

#### Planning-Inspectorate (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [appeals-back-office](https://github.com/Planning-Inspectorate/appeals-back-office) | [`appeals/web/src/server/views/app/components/page-heading.njk`](https://github.com/Planning-Inspectorate/appeals-back-office/blob/HEAD/appeals/web/src/server/views/app/components/page-heading.njk) | template partial |  |  |  |
| [applications-backoffice-prototype](https://github.com/Planning-Inspectorate/applications-backoffice-prototype) | [`app/assets/sass/components/_page-header.scss`](https://github.com/Planning-Inspectorate/applications-backoffice-prototype/blob/HEAD/app/assets/sass/components/_page-header.scss) | SCSS/CSS only | yes |  |  |

#### antarctica (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [zap](https://github.com/antarctica/zap) | [`src/components/sections/elements/Title.vue`](https://github.com/antarctica/zap/blob/HEAD/src/components/sections/elements/Title.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### dvsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [vol-app](https://github.com/dvsa/vol-app) | [`app/cdn/assets/_styles/components/page-header.scss`](https://github.com/dvsa/vol-app/blob/HEAD/app/cdn/assets/_styles/components/page-header.scss) | SCSS/CSS only |  |  |  |

#### essexcountycouncil (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [send-lgdrupal](https://github.com/essexcountycouncil/send-lgdrupal) | [`web/core/themes/bartik/css/components/page-title.css`](https://github.com/essexcountycouncil/send-lgdrupal/blob/HEAD/web/core/themes/bartik/css/components/page-title.css) | SCSS/CSS only |  |  |  |

#### gchq (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [LD-Explorer](https://github.com/gchq/LD-Explorer) | [`src/lib/components/ui/PageHeader.svelte`](https://github.com/gchq/LD-Explorer/blob/HEAD/src/lib/components/ui/PageHeader.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### GSTT-CSC (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [NHSFCAI](https://github.com/GSTT-CSC/NHSFCAI) | [`_sass/components/_title.scss`](https://github.com/GSTT-CSC/NHSFCAI/blob/HEAD/_sass/components/_title.scss) | SCSS/CSS only |  |  |  |

#### hmrc (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmrc-frontend](https://github.com/hmrc/hmrc-frontend) | [`src/components/page-heading/_page-heading.scss`](https://github.com/hmrc/hmrc-frontend/blob/HEAD/src/components/page-heading/_page-heading.scss) | SCSS/CSS only |  |  | `hmrc-banner`, `hmrc-caseworker-banner`, `hmrc-print-link` |

#### i-dot-ai (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [consult](https://github.com/i-dot-ai/consult) | [`frontend/src/components/Title.svelte`](https://github.com/i-dot-ai/consult/blob/HEAD/frontend/src/components/Title.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### lgss (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [services-directory-client](https://github.com/lgss/services-directory-client) | [`src/components/PageHeader/index.jsx`](https://github.com/lgss/services-directory-client/blob/HEAD/src/components/PageHeader/index.jsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### LondonBoroughSutton (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbs-frontend](https://github.com/LondonBoroughSutton/lbs-frontend) | [`package/LBS/components/page-header/_index.scss`](https://github.com/LondonBoroughSutton/lbs-frontend/blob/HEAD/package/LBS/components/page-header/_index.scss) | SCSS/CSS only |  |  |  |

#### mcagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [beacons](https://github.com/mcagov/beacons) | [`backoffice/src/components/layout/PageHeader.tsx`](https://github.com/mcagov/beacons/blob/HEAD/backoffice/src/components/layout/PageHeader.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nationalarchives (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [wa-frontend](https://github.com/nationalarchives/wa-frontend) | [`app/templates/components/page_header.html`](https://github.com/nationalarchives/wa-frontend/blob/HEAD/app/templates/components/page_header.html) | template partial |  |  | `tna-picture` |

#### nhsx (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [audere](https://github.com/nhsx/audere) | [`Covid19_Antibody_uk/src/ui/components/Title.tsx`](https://github.com/nhsx/audere/blob/HEAD/Covid19_Antibody_uk/src/ui/components/Title.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nice-digital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nice-design-system](https://github.com/nice-digital/nice-design-system) | [`components/nds-page-header/src/PageHeader.tsx`](https://github.com/nice-digital/nice-design-system/blob/HEAD/components/nds-page-header/src/PageHeader.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHSA-Internal (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [coronavirus-dashboard](https://github.com/UKHSA-Internal/coronavirus-dashboard) | [`src/components/PageTitle/PageTitle.js`](https://github.com/UKHSA-Internal/coronavirus-dashboard/blob/HEAD/src/components/PageTitle/PageTitle.js) | JS/TS component |  |  |  |

#### ukparliament (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [shop.parliament.uk](https://github.com/ukparliament/shop.parliament.uk) | [`src/styles/components/page-heading.scss`](https://github.com/ukparliament/shop.parliament.uk/blob/HEAD/src/styles/components/page-heading.scss) | SCSS/CSS only |  |  |  |

#### communitiesuk (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lg-webcaf-prototype](https://github.com/communitiesuk/lg-webcaf-prototype) | [`app/views/components/page-header.njk`](https://github.com/communitiesuk/lg-webcaf-prototype/blob/HEAD/app/views/components/page-header.njk) | template partial | yes |  |  |

#### defra-design (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [reex-applications-prototype](https://github.com/defra-design/reex-applications-prototype) | [`app/assets/sass/components/_page-header.scss`](https://github.com/defra-design/reex-applications-prototype/blob/HEAD/app/assets/sass/components/_page-header.scss) | SCSS/CSS only | yes |  |  |


### heading — 43 repos (39 production)

#### DEFRA (15, 14 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ai-platform-frontend](https://github.com/DEFRA/ai-platform-frontend) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/ai-platform-frontend/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  |  |
| [aqie-dataselector-frontend](https://github.com/DEFRA/aqie-dataselector-frontend) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/aqie-dataselector-frontend/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  | `moj-sub-navigation` |
| [aqie-dc-frontend](https://github.com/DEFRA/aqie-dc-frontend) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/aqie-dc-frontend/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  |  |
| [aqie-front-end](https://github.com/DEFRA/aqie-front-end) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/aqie-front-end/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  |  |
| [bng-metric-frontend](https://github.com/DEFRA/bng-metric-frontend) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/bng-metric-frontend/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  | `moj-scrollable-pane`, `moj-sortable-table` |
| [btms-frontend](https://github.com/DEFRA/btms-frontend) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/btms-frontend/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  |  |
| [digital-waste-tracking-admin-ui](https://github.com/DEFRA/digital-waste-tracking-admin-ui) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/digital-waste-tracking-admin-ui/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-ticket-panel` |
| [fg-cw-frontend](https://github.com/DEFRA/fg-cw-frontend) | [`src/cases/views/components/dynamic-content/components/heading.njk`](https://github.com/DEFRA/fg-cw-frontend/blob/HEAD/src/cases/views/components/dynamic-content/components/heading.njk) | template partial |  |  | `moj-page-header-actions` |
| [fg-grants-platform-admin](https://github.com/DEFRA/fg-grants-platform-admin) | [`src/common/views/components/defra-heading/_defra-heading.scss`](https://github.com/DEFRA/fg-grants-platform-admin/blob/HEAD/src/common/views/components/defra-heading/_defra-heading.scss) | SCSS/CSS only |  |  |  |
| [forms-designer](https://github.com/DEFRA/forms-designer) | [`server/src/common/components/heading/macro.njk`](https://github.com/DEFRA/forms-designer/blob/HEAD/server/src/common/components/heading/macro.njk) | Nunjucks macro |  |  |  |
| [lis-fake-idp](https://github.com/DEFRA/lis-fake-idp) | [`src/server/common/components/heading/macro.njk`](https://github.com/DEFRA/lis-fake-idp/blob/HEAD/src/server/common/components/heading/macro.njk) | Nunjucks macro |  |  |  |
| [lis-infra-ui-services](https://github.com/DEFRA/lis-infra-ui-services) | [`src/nunjucks/components/heading/macro.njk`](https://github.com/DEFRA/lis-infra-ui-services/blob/HEAD/src/nunjucks/components/heading/macro.njk) | Nunjucks macro |  |  |  |
| [pafs-portal-frontend](https://github.com/DEFRA/pafs-portal-frontend) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/pafs-portal-frontend/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  |  |
| [trade-imports-simulator-frontend](https://github.com/DEFRA/trade-imports-simulator-frontend) | [`src/server/common/components/heading/_heading.scss`](https://github.com/DEFRA/trade-imports-simulator-frontend/blob/HEAD/src/server/common/components/heading/_heading.scss) | SCSS/CSS only |  |  |  |
| [cff-chart-prototype](https://github.com/DEFRA/cff-chart-prototype) | [`src/client/stylesheets/components/heading/_heading.scss`](https://github.com/DEFRA/cff-chart-prototype/blob/HEAD/src/client/stylesheets/components/heading/_heading.scss) | SCSS/CSS only | yes |  |  |

#### Crown-Commercial-Service (4, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ccs-frontend](https://github.com/Crown-Commercial-Service/ccs-frontend) | [`assets/styles/components/_headings.scss`](https://github.com/Crown-Commercial-Service/ccs-frontend/blob/HEAD/assets/styles/components/_headings.scss) | SCSS/CSS only |  |  |  |
| [CCS-Frontend-Kit](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit) | [`Assets/styles/components/_headings.scss`](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit/blob/HEAD/Assets/styles/components/_headings.scss) | SCSS/CSS only |  |  |  |
| [gca-Intranet](https://github.com/Crown-Commercial-Service/gca-Intranet) | [`wp-content/themes/gca-intranet-foundation/assets/scss/components/_headings.scss`](https://github.com/Crown-Commercial-Service/gca-Intranet/blob/HEAD/wp-content/themes/gca-intranet-foundation/assets/scss/components/_headings.scss) | SCSS/CSS only |  |  |  |
| [ccs-website-prototype](https://github.com/Crown-Commercial-Service/ccs-website-prototype) | [`app/assets/sass/components/_headings.scss`](https://github.com/Crown-Commercial-Service/ccs-website-prototype/blob/HEAD/app/assets/sass/components/_headings.scss) | SCSS/CSS only | yes |  |  |

#### LBHackney-IT (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbh-housing-register](https://github.com/LBHackney-IT/lbh-housing-register) | [`components/content/headings.tsx`](https://github.com/LBHackney-IT/lbh-housing-register/blob/HEAD/components/content/headings.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [mtfh-frontend](https://github.com/LBHackney-IT/mtfh-frontend) | [`packages/react/src/components/heading/heading.tsx`](https://github.com/LBHackney-IT/mtfh-frontend/blob/HEAD/packages/react/src/components/heading/heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [mtfh-frontend-common](https://github.com/LBHackney-IT/mtfh-frontend-common) | [`lib/components/heading/heading.tsx`](https://github.com/LBHackney-IT/mtfh-frontend-common/blob/HEAD/lib/components/heading/heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ministryofjustice (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmpps-forge](https://github.com/ministryofjustice/hmpps-forge) | [`packages/forge-govuk-components/src/components/heading/govukHeading.tsx`](https://github.com/ministryofjustice/hmpps-forge/blob/HEAD/packages/forge-govuk-components/src/components/heading/govukHeading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [make-recall-decision-ui](https://github.com/ministryofjustice/make-recall-decision-ui) | [`server/views/components/heading/macro.njk`](https://github.com/ministryofjustice/make-recall-decision-ui/blob/HEAD/server/views/components/heading/macro.njk) | Nunjucks macro |  |  |  |
| [hmpps-prepare-a-case-prototype](https://github.com/ministryofjustice/hmpps-prepare-a-case-prototype) | [`app/assets/sass/components/_headings.scss`](https://github.com/ministryofjustice/hmpps-prepare-a-case-prototype/blob/HEAD/app/assets/sass/components/_headings.scss) | SCSS/CSS only | yes |  | `moj-search`, `moj-search-toggle`, `moj-sub-navigation`, `moj-timeline` |

#### DFE-Digital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [get-into-teaching-app](https://github.com/DFE-Digital/get-into-teaching-app) | [`app/components/content/heading_component.rb`](https://github.com/DFE-Digital/get-into-teaching-app/blob/HEAD/app/components/content/heading_component.rb) | Rails ViewComponent |  |  |  |
| [itt-mentor-services](https://github.com/DFE-Digital/itt-mentor-services) | [`app/assets/stylesheets/components/_heading.scss`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/assets/stylesheets/components/_heading.scss) | SCSS/CSS only |  |  |  |

#### nationalarchives (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ds-caselaw-editor-ui](https://github.com/nationalarchives/ds-caselaw-editor-ui) | [`ds_caselaw_editor_ui/sass/components/_heading.scss`](https://github.com/nationalarchives/ds-caselaw-editor-ui/blob/HEAD/ds_caselaw_editor_ui/sass/components/_heading.scss) | SCSS/CSS only |  |  |  |
| [ds-caselaw-public-ui](https://github.com/nationalarchives/ds-caselaw-public-ui) | [`ds_judgements_public_ui/sass/components/_heading.scss`](https://github.com/nationalarchives/ds-caselaw-public-ui/blob/HEAD/ds_judgements_public_ui/sass/components/_heading.scss) | SCSS/CSS only |  |  |  |

#### nhsbsa (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [mccd-service-showcase](https://github.com/nhsbsa/mccd-service-showcase) | [`src/components/Heading.tsx`](https://github.com/nhsbsa/mccd-service-showcase/blob/HEAD/src/components/Heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `gem-c-document-list`, `gem-c-heading` |
| [nhsbsa-asc-tfrs-showcase](https://github.com/nhsbsa/nhsbsa-asc-tfrs-showcase) | [`src/components/Heading.tsx`](https://github.com/nhsbsa/nhsbsa-asc-tfrs-showcase/blob/HEAD/src/components/Heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `gem-c-document-list`, `gem-c-heading` |

#### NHSDigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nhsuk-frontend-jinja](https://github.com/NHSDigital/nhsuk-frontend-jinja) | [`nhsuk_frontend_jinja/templates/nhsuk/components/heading/macro.jinja`](https://github.com/NHSDigital/nhsuk-frontend-jinja/blob/HEAD/nhsuk_frontend_jinja/templates/nhsuk/components/heading/macro.jinja) | Nunjucks macro |  |  | `nhsuk-action-link`, `nhsuk-caption`, `nhsuk-card`, `nhsuk-code`, `nhsuk-contents-list` |
| [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) | [`src/components/typography/Heading.tsx`](https://github.com/NHSDigital/nhsuk-react-components/blob/HEAD/src/components/typography/Heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `nhsuk-do-dont-list`, `nhsuk-hero` |

#### UKHSA-Internal (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [data-dashboard-frontend](https://github.com/UKHSA-Internal/data-dashboard-frontend) | [`src/app/components/ui/ukhsa/View/Heading/Heading.tsx`](https://github.com/UKHSA-Internal/data-dashboard-frontend/blob/HEAD/src/app/components/ui/ukhsa/View/Heading/Heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [pre-entry-tb-screening-app](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app) | [`pets-ui/src/components/heading/heading.tsx`](https://github.com/UKHSA-Internal/pre-entry-tb-screening-app/blob/HEAD/pets-ui/src/components/heading/heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### communitiesuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [localai-local-transcribe](https://github.com/communitiesuk/localai-local-transcribe) | [`frontend/components/govuk/heading.tsx`](https://github.com/communitiesuk/localai-local-transcribe/blob/HEAD/frontend/components/govuk/heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### gchq (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [LD-Explorer](https://github.com/gchq/LD-Explorer) | [`src/lib/components/ui/Heading.svelte`](https://github.com/gchq/LD-Explorer/blob/HEAD/src/lib/components/ui/Heading.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### govuk-once (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [personalised-planning](https://github.com/govuk-once/personalised-planning) | [`frontend/app/components/shared/Heading.tsx`](https://github.com/govuk-once/personalised-planning/blob/HEAD/frontend/app/components/shared/Heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### InnovateUKGitHub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [innovation-funding-service-post-award](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award) | [`packages/app/src/ui/components/atoms/Heading/Heading.tsx`](https://github.com/InnovateUKGitHub/innovation-funding-service-post-award/blob/HEAD/packages/app/src/ui/components/atoms/Heading/Heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### lgss (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [northants-design-system](https://github.com/lgss/northants-design-system) | [`src/library/components/Heading/Heading.tsx`](https://github.com/lgss/northants-design-system/blob/HEAD/src/library/components/Heading/Heading.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### osgeouk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [foss4g-2027](https://github.com/osgeouk/foss4g-2027) | [`src/components/Heading.svelte`](https://github.com/osgeouk/foss4g-2027/blob/HEAD/src/components/Heading.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### x-govuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [govuk-eleventy-plugin](https://github.com/x-govuk/govuk-eleventy-plugin) | [`src/components/heading/macro.njk`](https://github.com/x-govuk/govuk-eleventy-plugin/blob/HEAD/src/components/heading/macro.njk) | Nunjucks macro |  |  |  |

#### trade-tariff (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ott-prototype](https://github.com/trade-tariff/ott-prototype) | [`app/assets/sass/components/_heading.scss`](https://github.com/trade-tariff/ott-prototype/blob/HEAD/app/assets/sass/components/_heading.scss) | SCSS/CSS only | yes |  |  |


### contents-list — 31 repos (30 production)

⚠️ Only 15% structural similarity across implementations — these may not be the same component.

#### DFE-Digital (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [claim-additional-payments-for-teaching](https://github.com/DFE-Digital/claim-additional-payments-for-teaching) | [`app/assets/stylesheets/components/contents_list.scss`](https://github.com/DFE-Digital/claim-additional-payments-for-teaching/blob/HEAD/app/assets/stylesheets/components/contents_list.scss) | SCSS/CSS only |  |  |  |
| [d365-design-manual](https://github.com/DFE-Digital/d365-design-manual) | [`app/scss/components/_contents-list.scss`](https://github.com/DFE-Digital/d365-design-manual/blob/HEAD/app/scss/components/_contents-list.scss) | SCSS/CSS only |  |  |  |
| [early-careers-framework](https://github.com/DFE-Digital/early-careers-framework) | [`app/components/content_list_component.html.erb`](https://github.com/DFE-Digital/early-careers-framework/blob/HEAD/app/components/content_list_component.html.erb) | template partial |  |  |  |

#### digital-land (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [data-standards](https://github.com/digital-land/data-standards) | [`src/scss/components/_content-list.scss`](https://github.com/digital-land/data-standards/blob/HEAD/src/scss/components/_content-list.scss) | SCSS/CSS only |  |  |  |
| [mini-cms](https://github.com/digital-land/mini-cms) | [`src/static/scss/components/_content-list.scss`](https://github.com/digital-land/mini-cms/blob/HEAD/src/static/scss/components/_content-list.scss) | SCSS/CSS only |  |  |  |
| [planning-data-design](https://github.com/digital-land/planning-data-design) | [`src/scss/components/_content-list.scss`](https://github.com/digital-land/planning-data-design/blob/HEAD/src/scss/components/_content-list.scss) | SCSS/CSS only |  |  | `moj-timeline` |

#### NHSDigital (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nhs-notify-web-cms](https://github.com/NHSDigital/nhs-notify-web-cms) | [`docs/_includes/components/contents-list.html`](https://github.com/NHSDigital/nhs-notify-web-cms/blob/HEAD/docs/_includes/components/contents-list.html) | template partial |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-contents-list`, `nhsuk-link` |
| [nhsuk-frontend-jinja](https://github.com/NHSDigital/nhsuk-frontend-jinja) | [`nhsuk_frontend_jinja/templates/nhsuk/components/contents-list/macro.jinja`](https://github.com/NHSDigital/nhsuk-frontend-jinja/blob/HEAD/nhsuk_frontend_jinja/templates/nhsuk/components/contents-list/macro.jinja) | Nunjucks macro |  |  | `nhsuk-action-link`, `nhsuk-caption`, `nhsuk-card`, `nhsuk-code`, `nhsuk-contents-list` |
| [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) | [`src/components/navigation/contents-list/ContentsList.tsx`](https://github.com/NHSDigital/nhsuk-react-components/blob/HEAD/src/components/navigation/contents-list/ContentsList.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `nhsuk-do-dont-list`, `nhsuk-hero` |

#### alan-turing-institute (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [bias-cards](https://github.com/alan-turing-institute/bias-cards) | [`components/mdx/table-of-contents.tsx`](https://github.com/alan-turing-institute/bias-cards/blob/HEAD/components/mdx/table-of-contents.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [tea-techniques](https://github.com/alan-turing-institute/tea-techniques) | [`components/mdx/table-of-contents.tsx`](https://github.com/alan-turing-institute/tea-techniques/blob/HEAD/components/mdx/table-of-contents.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### defencedigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [moduk-service-manual](https://github.com/defencedigital/moduk-service-manual) | [`components/contents-list/_contents-list.scss`](https://github.com/defencedigital/moduk-service-manual/blob/HEAD/components/contents-list/_contents-list.scss) | SCSS/CSS only |  |  |  |
| [moduk-service-toolkit](https://github.com/defencedigital/moduk-service-toolkit) | [`components/contents-list/_contents-list.scss`](https://github.com/defencedigital/moduk-service-toolkit/blob/HEAD/components/contents-list/_contents-list.scss) | SCSS/CSS only |  |  |  |

#### ministryofjustice (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [calculate-release-dates](https://github.com/ministryofjustice/calculate-release-dates) | [`assets/scss/components/_contents-list.scss`](https://github.com/ministryofjustice/calculate-release-dates/blob/HEAD/assets/scss/components/_contents-list.scss) | SCSS/CSS only |  |  |  |
| [hmpps-probation-check-in-ui](https://github.com/ministryofjustice/hmpps-probation-check-in-ui) | [`assets/scss/components/_contents-list.scss`](https://github.com/ministryofjustice/hmpps-probation-check-in-ui/blob/HEAD/assets/scss/components/_contents-list.scss) | SCSS/CSS only |  |  |  |

#### ONSdigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/ONSdigital/design-system) | [`src/components/table-of-contents/_table-of-contents.scss`](https://github.com/ONSdigital/design-system/blob/HEAD/src/components/table-of-contents/_table-of-contents.scss) | SCSS/CSS only |  |  |  |
| [sixteens](https://github.com/ONSdigital/sixteens) | [`scss/components/_table-of-contents.scss`](https://github.com/ONSdigital/sixteens/blob/HEAD/scss/components/_table-of-contents.scss) | SCSS/CSS only |  |  |  |

#### scottish-government-design-system (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/scottish-government-design-system/design-system) | [`src/components/contents-nav/_contents-nav.scss`](https://github.com/scottish-government-design-system/design-system/blob/HEAD/src/components/contents-nav/_contents-nav.scss) | SCSS/CSS only |  |  |  |
| [designsystem-react](https://github.com/scottish-government-design-system/designsystem-react) | [`src/components/ContentsNav/ContentsNav.tsx`](https://github.com/scottish-government-design-system/designsystem-react/blob/HEAD/src/components/ContentsNav/ContentsNav.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### co-cddo (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [find-support-after-a-fit-note](https://github.com/co-cddo/find-support-after-a-fit-note) | [`src/assets/styles/components/_contents-list.scss`](https://github.com/co-cddo/find-support-after-a-fit-note/blob/HEAD/src/assets/styles/components/_contents-list.scss) | SCSS/CSS only |  |  | `gem-c-contents-list`, `gem-c-related-navigation` |
| [lthc-prototype](https://github.com/co-cddo/lthc-prototype) | [`app/assets/sass/components/contents-list/_contents-list.scss`](https://github.com/co-cddo/lthc-prototype/blob/HEAD/app/assets/sass/components/contents-list/_contents-list.scss) | SCSS/CSS only | yes |  | `gem-c-heading`, `gem-c-lead-paragraph` |

#### antarctica (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [zap](https://github.com/antarctica/zap) | [`src/components/sections/info/TableOfContents.vue`](https://github.com/antarctica/zap/blob/HEAD/src/components/sections/info/TableOfContents.vue) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### communitiesuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [mhclg_svelte_component_library](https://github.com/communitiesuk/mhclg_svelte_component_library) | [`src/lib/components/ui/ContentsList.svelte`](https://github.com/communitiesuk/mhclg_svelte_component_library/blob/HEAD/src/lib/components/ui/ContentsList.svelte) | UI framework (React/Vue/Svelte lib) |  |  | `dwp-side-navigation` |

#### Crown-Commercial-Service (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ccs-scale-cat-buyer-ui](https://github.com/Crown-Commercial-Service/ccs-scale-cat-buyer-ui) | [`src/main/views/components/tableOfContents.njk`](https://github.com/Crown-Commercial-Service/ccs-scale-cat-buyer-ui/blob/HEAD/src/main/views/components/tableOfContents.njk) | template partial |  |  |  |

#### defra-design (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [digital-waste-reporting](https://github.com/defra-design/digital-waste-reporting) | [`app/assets/sass/components/_contents-list.scss`](https://github.com/defra-design/digital-waste-reporting/blob/HEAD/app/assets/sass/components/_contents-list.scss) | SCSS/CSS only |  |  |  |

#### hmcts (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [transcribe-web](https://github.com/hmcts/transcribe-web) | [`components/help/table-of-contents.tsx`](https://github.com/hmcts/transcribe-web/blob/HEAD/components/help/table-of-contents.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### hmrc (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [trader-services-route-one-frontend](https://github.com/hmrc/trader-services-route-one-frontend) | [`app/assets/stylesheets/components/_contents-list.scss`](https://github.com/hmrc/trader-services-route-one-frontend/blob/HEAD/app/assets/stylesheets/components/_contents-list.scss) | SCSS/CSS only |  |  |  |

#### nhsbsa (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [nhsuk-frontend](https://github.com/nhsbsa/nhsuk-frontend) | [`packages/components/contents-list/_contents-list.scss`](https://github.com/nhsbsa/nhsuk-frontend/blob/HEAD/packages/components/contents-list/_contents-list.scss) | SCSS/CSS only |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ethnicity-facts-and-figures](https://github.com/ukgov-equality-hub/ethnicity-facts-and-figures) | [`application/src/sass/components/_table_of_contents.scss`](https://github.com/ukgov-equality-hub/ethnicity-facts-and-figures/blob/HEAD/application/src/sass/components/_table_of_contents.scss) | SCSS/CSS only |  |  |  |

#### ukparliament (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [email-components](https://github.com/ukparliament/email-components) | [`src/stylesheets/components/_table-of-contents.scss`](https://github.com/ukparliament/email-components/blob/HEAD/src/stylesheets/components/_table-of-contents.scss) | SCSS/CSS only |  |  |  |

#### x-govuk (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [govuk-eleventy-plugin](https://github.com/x-govuk/govuk-eleventy-plugin) | [`src/components/contents-list/_index.scss`](https://github.com/x-govuk/govuk-eleventy-plugin/blob/HEAD/src/components/contents-list/_index.scss) | SCSS/CSS only |  |  |  |


### sub-navigation — 76 repos (57 production)

Partially covered by service-navigation.

#### DFE-Digital (16, 9 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [d365-design-manual](https://github.com/DFE-Digital/d365-design-manual) | [`app/scss/components/_sub-navigation.scss`](https://github.com/DFE-Digital/d365-design-manual/blob/HEAD/app/scss/components/_sub-navigation.scss) | SCSS/CSS only |  |  |  |
| [dfefrontend](https://github.com/DFE-Digital/dfefrontend) | [`packages/dfe-frontend/src/components/sub-navigation/_index.scss`](https://github.com/DFE-Digital/dfefrontend/blob/HEAD/packages/dfe-frontend/src/components/sub-navigation/_index.scss) | SCSS/CSS only |  |  | `dfe-card` |
| [dsi-platform](https://github.com/DFE-Digital/dsi-platform) | [`frontend/src/components/subnav.scss`](https://github.com/DFE-Digital/dsi-platform/blob/HEAD/frontend/src/components/subnav.scss) | SCSS/CSS only |  |  |  |
| [early-careers-framework](https://github.com/DFE-Digital/early-careers-framework) | [`app/components/subnav_component.html.erb`](https://github.com/DFE-Digital/early-careers-framework/blob/HEAD/app/components/subnav_component.html.erb) | template partial |  |  |  |
| [itt-mentor-services](https://github.com/DFE-Digital/itt-mentor-services) | [`app/assets/stylesheets/components/_secondary_navigation.scss`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/assets/stylesheets/components/_secondary_navigation.scss) | SCSS/CSS only |  |  |  |
| [npq-registration](https://github.com/DFE-Digital/npq-registration) | [`app/components/sub_navigation_component.html.erb`](https://github.com/DFE-Digital/npq-registration/blob/HEAD/app/components/sub_navigation_component.html.erb) | template partial |  |  |  |
| [publish-teacher-training](https://github.com/DFE-Digital/publish-teacher-training) | [`app/assets/stylesheets/publish/components/_secondary-navigation.scss`](https://github.com/DFE-Digital/publish-teacher-training/blob/HEAD/app/assets/stylesheets/publish/components/_secondary-navigation.scss) | SCSS/CSS only |  |  |  |
| [register-early-career-teachers-public](https://github.com/DFE-Digital/register-early-career-teachers-public) | [`app/components/navigation/secondary_navigation_component.rb`](https://github.com/DFE-Digital/register-early-career-teachers-public/blob/HEAD/app/components/navigation/secondary_navigation_component.rb) | Rails ViewComponent |  |  |  |
| [teacher-training-entitlement](https://github.com/DFE-Digital/teacher-training-entitlement) | [`app/components/sub_navigation_component.html.erb`](https://github.com/DFE-Digital/teacher-training-entitlement/blob/HEAD/app/components/sub_navigation_component.html.erb) | template partial |  |  |  |
| [manage-teaching-jobs-prototype](https://github.com/DFE-Digital/manage-teaching-jobs-prototype) | [`app/views/components/sub-navigation/_sub-navigation.scss`](https://github.com/DFE-Digital/manage-teaching-jobs-prototype/blob/HEAD/app/views/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only | yes |  |  |
| [pre-ab-transfers](https://github.com/DFE-Digital/pre-ab-transfers) | [`app/assets/sass/components/_sub-navigation.scss`](https://github.com/DFE-Digital/pre-ab-transfers/blob/HEAD/app/assets/sass/components/_sub-navigation.scss) | SCSS/CSS only | yes |  | `moj-filter` |
| [sdd-concerns-prototype](https://github.com/DFE-Digital/sdd-concerns-prototype) | [`app/assets/sass/components/_sub-navigation.scss`](https://github.com/DFE-Digital/sdd-concerns-prototype/blob/HEAD/app/assets/sass/components/_sub-navigation.scss) | SCSS/CSS only | yes |  | `moj-filter` |
| [sdd-services-prototype](https://github.com/DFE-Digital/sdd-services-prototype) | [`app/assets/sass/components/_sub-navigation.scss`](https://github.com/DFE-Digital/sdd-services-prototype/blob/HEAD/app/assets/sass/components/_sub-navigation.scss) | SCSS/CSS only | yes |  |  |
| [teacher-self-service-prototype](https://github.com/DFE-Digital/teacher-self-service-prototype) | [`app/assets/stylesheets/components/_sub-navigation.scss`](https://github.com/DFE-Digital/teacher-self-service-prototype/blob/HEAD/app/assets/stylesheets/components/_sub-navigation.scss) | SCSS/CSS only | yes |  |  |
| [teacher-services-landing-page-prototype](https://github.com/DFE-Digital/teacher-services-landing-page-prototype) | [`app/views/components/sub-navigation/_sub-navigation.scss`](https://github.com/DFE-Digital/teacher-services-landing-page-prototype/blob/HEAD/app/views/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only | yes |  |  |
| [teaching-vacancies-prototype](https://github.com/DFE-Digital/teaching-vacancies-prototype) | [`app/versions/1-0/views/components/sub-navigation/_sub-navigation.scss`](https://github.com/DFE-Digital/teaching-vacancies-prototype/blob/HEAD/app/versions/1-0/views/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only | yes |  |  |

#### alphagov (9, 8 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [content-block-manager](https://github.com/alphagov/content-block-manager) | [`app/views/components/_sub_navigation.html.erb`](https://github.com/alphagov/content-block-manager/blob/HEAD/app/views/components/_sub_navigation.html.erb) | template partial |  |  |  |
| [datagovuk-explorer](https://github.com/alphagov/datagovuk-explorer) | [`explorer/static/css/components/subnav.css`](https://github.com/alphagov/datagovuk-explorer/blob/HEAD/explorer/static/css/components/subnav.css) | SCSS/CSS only |  |  |  |
| [emergency-alerts-admin](https://github.com/alphagov/emergency-alerts-admin) | [`app/templates/components/sub-navigation.html`](https://github.com/alphagov/emergency-alerts-admin/blob/HEAD/app/templates/components/sub-navigation.html) | template partial |  |  |  |
| [forms-product-page](https://github.com/alphagov/forms-product-page) | [`app/components/sub_navigation_component/_index.scss`](https://github.com/alphagov/forms-product-page/blob/HEAD/app/components/sub_navigation_component/_index.scss) | SCSS/CSS only |  |  |  |
| [govuk-prototype-kit-docs-investigation](https://github.com/alphagov/govuk-prototype-kit-docs-investigation) | [`src/stylesheets/components/_subnav.scss`](https://github.com/alphagov/govuk-prototype-kit-docs-investigation/blob/HEAD/src/stylesheets/components/_subnav.scss) | SCSS/CSS only |  |  |  |
| [notifications-admin](https://github.com/alphagov/notifications-admin) | [`app/templates/components/sub-navigation.html`](https://github.com/alphagov/notifications-admin/blob/HEAD/app/templates/components/sub-navigation.html) | template partial |  |  |  |
| [pay-selfservice](https://github.com/alphagov/pay-selfservice) | [`src/assets/sass/components/sub-navigation.scss`](https://github.com/alphagov/pay-selfservice/blob/HEAD/src/assets/sass/components/sub-navigation.scss) | SCSS/CSS only |  |  |  |
| [whitehall](https://github.com/alphagov/whitehall) | [`app/assets/stylesheets/components/_secondary-navigation.scss`](https://github.com/alphagov/whitehall/blob/HEAD/app/assets/stylesheets/components/_secondary-navigation.scss) | SCSS/CSS only |  |  |  |
| [govuk-content-publisher-prototype](https://github.com/alphagov/govuk-content-publisher-prototype) | [`app/assets/sass/components/_sub-navigation.scss`](https://github.com/alphagov/govuk-content-publisher-prototype/blob/HEAD/app/assets/sass/components/_sub-navigation.scss) | SCSS/CSS only | yes |  |  |

#### ministryofjustice (7, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmpps-allocate-key-workers-ui](https://github.com/ministryofjustice/hmpps-allocate-key-workers-ui) | [`assets/scss/components/_sub-navigation.scss`](https://github.com/ministryofjustice/hmpps-allocate-key-workers-ui/blob/HEAD/assets/scss/components/_sub-navigation.scss) | SCSS/CSS only |  |  | `moj-sortable-table`, `moj-sub-navigation` |
| [hmpps-approved-premises-ui](https://github.com/ministryofjustice/hmpps-approved-premises-ui) | [`assets/scss/components/_sub-navigation.scss`](https://github.com/ministryofjustice/hmpps-approved-premises-ui/blob/HEAD/assets/scss/components/_sub-navigation.scss) | SCSS/CSS only |  |  | `moj-page-header-actions`, `moj-sortable-table` |
| [hmpps-visits-internal-admin-ui](https://github.com/ministryofjustice/hmpps-visits-internal-admin-ui) | [`server/views/components/subNavigation.njk`](https://github.com/ministryofjustice/hmpps-visits-internal-admin-ui/blob/HEAD/server/views/components/subNavigation.njk) | template partial |  |  |  |
| [moj-components](https://github.com/ministryofjustice/moj-components) | [`app/components/moj_component/sub_navigation_component.rb`](https://github.com/ministryofjustice/moj-components/blob/HEAD/app/components/moj_component/sub_navigation_component.rb) | Rails ViewComponent |  |  |  |
| [moj-frontend](https://github.com/ministryofjustice/moj-frontend) | [`src/moj/components/sub-navigation/_sub-navigation.scss`](https://github.com/ministryofjustice/moj-frontend/blob/HEAD/src/moj/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only |  |  |  |
| [money-to-prisoners-common](https://github.com/ministryofjustice/money-to-prisoners-common) | [`mtp_common/assets-src/mtp_common/components/sub-navigation/_index.scss`](https://github.com/ministryofjustice/money-to-prisoners-common/blob/HEAD/mtp_common/assets-src/mtp_common/components/sub-navigation/_index.scss) | SCSS/CSS only |  |  |  |
| [pre-sentence-service-prototype](https://github.com/ministryofjustice/pre-sentence-service-prototype) | [`app/assets/sass/components/_subnav.scss`](https://github.com/ministryofjustice/pre-sentence-service-prototype/blob/HEAD/app/assets/sass/components/_subnav.scss) | SCSS/CSS only | yes |  | `moj-ticket-panel` |

#### DEFRA (6, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ai-platform-frontend](https://github.com/DEFRA/ai-platform-frontend) | [`src/server/common/components/sub-navigation/_sub-navigation.scss`](https://github.com/DEFRA/ai-platform-frontend/blob/HEAD/src/server/common/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only |  |  |  |
| [ai-sdlc-content-audit](https://github.com/DEFRA/ai-sdlc-content-audit) | [`src/client/stylesheets/components/_defra-subnav.scss`](https://github.com/DEFRA/ai-sdlc-content-audit/blob/HEAD/src/client/stylesheets/components/_defra-subnav.scss) | SCSS/CSS only |  |  |  |
| [ai-sdlc-prompt-library-frontend](https://github.com/DEFRA/ai-sdlc-prompt-library-frontend) | [`src/client/stylesheets/components/_defra-subnav.scss`](https://github.com/DEFRA/ai-sdlc-prompt-library-frontend/blob/HEAD/src/client/stylesheets/components/_defra-subnav.scss) | SCSS/CSS only |  |  |  |
| [cads-admin-frontend](https://github.com/DEFRA/cads-admin-frontend) | [`src/server/common/components/sub-navigation/_sub-navigation.scss`](https://github.com/DEFRA/cads-admin-frontend/blob/HEAD/src/server/common/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only |  |  |  |
| [lis-infra-ui-services](https://github.com/DEFRA/lis-infra-ui-services) | [`src/components/sub-navigation.scss`](https://github.com/DEFRA/lis-infra-ui-services/blob/HEAD/src/components/sub-navigation.scss) | SCSS/CSS only |  |  |  |
| [trade-imports-simulator-frontend](https://github.com/DEFRA/trade-imports-simulator-frontend) | [`src/server/common/components/sub-navigation/_sub-navigation.scss`](https://github.com/DEFRA/trade-imports-simulator-frontend/blob/HEAD/src/server/common/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only |  |  |  |

#### digital-land (6, 6 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [data-standards](https://github.com/digital-land/data-standards) | [`src/scss/components/_subnavigation.scss`](https://github.com/digital-land/data-standards/blob/HEAD/src/scss/components/_subnavigation.scss) | SCSS/CSS only |  |  |  |
| [digital-land-flask-app-template](https://github.com/digital-land/digital-land-flask-app-template) | [`src/scss/components/_subnavigation.scss`](https://github.com/digital-land/digital-land-flask-app-template/blob/HEAD/src/scss/components/_subnavigation.scss) | SCSS/CSS only |  |  |  |
| [digital-land.info](https://github.com/digital-land/digital-land.info) | [`application/templates/components/sub-navigation/macro.jinja`](https://github.com/digital-land/digital-land.info/blob/HEAD/application/templates/components/sub-navigation/macro.jinja) | Nunjucks macro |  |  |  |
| [planning-data-design](https://github.com/digital-land/planning-data-design) | [`src/scss/components/_subnavigation.scss`](https://github.com/digital-land/planning-data-design/blob/HEAD/src/scss/components/_subnavigation.scss) | SCSS/CSS only |  |  | `moj-timeline` |
| [standards-manager](https://github.com/digital-land/standards-manager) | [`application/templates/components/sub-navigation/macro.jinja`](https://github.com/digital-land/standards-manager/blob/HEAD/application/templates/components/sub-navigation/macro.jinja) | Nunjucks macro |  |  |  |
| [submit](https://github.com/digital-land/submit) | [`src/assets/scss/components/_sub-navigation.scss`](https://github.com/digital-land/submit/blob/HEAD/src/assets/scss/components/_sub-navigation.scss) | SCSS/CSS only |  |  |  |

#### hmcts (4, 4 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/hmcts/design-system) | [`app/components/subnav/_subnav.scss`](https://github.com/hmcts/design-system/blob/HEAD/app/components/subnav/_subnav.scss) | SCSS/CSS only |  |  |  |
| [frontend](https://github.com/hmcts/frontend) | [`package/components/hmcts-sub-navigation/macro.njk`](https://github.com/hmcts/frontend/blob/HEAD/package/components/hmcts-sub-navigation/macro.njk) | Nunjucks macro |  |  |  |
| [react-a11y-test](https://github.com/hmcts/react-a11y-test) | [`src/components/MojSubNavigation.tsx`](https://github.com/hmcts/react-a11y-test/blob/HEAD/src/components/MojSubNavigation.tsx) | UI framework (React/Vue/Svelte lib) |  |  | `moj-add-another`, `moj-button-menu`, `moj-date-picker`, `moj-filter`, `moj-identity-bar`, `moj-messages`, `moj-multi-select`, `moj-notification-badge`, `moj-organisation-switcher`, `moj-page-header-actions`, `moj-scrollable-pane`, `moj-search`, `moj-sortable-table`, `moj-sub-navigation`, `moj-ticket-panel`, `moj-timeline` |
| [rpa-jui-webapp](https://github.com/hmcts/rpa-jui-webapp) | [`documentation/components/HmctsSubNavigationComponent.html`](https://github.com/hmcts/rpa-jui-webapp/blob/HEAD/documentation/components/HmctsSubNavigationComponent.html) | template partial |  |  |  |

#### NHSDigital (5, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [mya-provocotype](https://github.com/NHSDigital/mya-provocotype) | [`app/assets/sass/components/_secondary-navigation.scss`](https://github.com/NHSDigital/mya-provocotype/blob/HEAD/app/assets/sass/components/_secondary-navigation.scss) | SCSS/CSS only |  |  |  |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) | [`app/components/x-govuk-sub-navigation/macro.njk`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/components/x-govuk-sub-navigation/macro.njk) | Nunjucks macro |  |  | `nhsuk-link` |
| [c2c-breast-screening-prototype](https://github.com/NHSDigital/c2c-breast-screening-prototype) | [`app/assets/sass/components/_secondary-navigation.scss`](https://github.com/NHSDigital/c2c-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_secondary-navigation.scss) | SCSS/CSS only | yes |  | `nhsuk-card`, `nhsuk-search-input` |
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) | [`app/assets/sass/components/_secondary-navigation.scss`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_secondary-navigation.scss) | SCSS/CSS only | yes |  | `nhsuk-link` |
| [mya-prototype](https://github.com/NHSDigital/mya-prototype) | [`app/assets/sass/components/secondary-navigation.scss`](https://github.com/NHSDigital/mya-prototype/blob/HEAD/app/assets/sass/components/secondary-navigation.scss) | SCSS/CSS only | yes |  | `nhsuk-card`, `nhsuk-link` |

#### defra-design (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [defra-frontend](https://github.com/defra-design/defra-frontend) | [`packages/defra-frontend/src/defra/components/sub-navigation/_index.scss`](https://github.com/defra-design/defra-frontend/blob/HEAD/packages/defra-frontend/src/defra/components/sub-navigation/_index.scss) | SCSS/CSS only |  |  |  |
| [digital-waste-reporting](https://github.com/defra-design/digital-waste-reporting) | [`app/assets/sass/components/_subnav.scss`](https://github.com/defra-design/digital-waste-reporting/blob/HEAD/app/assets/sass/components/_subnav.scss) | SCSS/CSS only |  |  |  |
| [get-air-pollution-data-prototype](https://github.com/defra-design/get-air-pollution-data-prototype) | [`app/assets/sass/mvp/components/_sub-navigation.scss`](https://github.com/defra-design/get-air-pollution-data-prototype/blob/HEAD/app/assets/sass/mvp/components/_sub-navigation.scss) | SCSS/CSS only | yes |  | `gem-c-cards` |

#### communitiesuk (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [submit-social-housing-lettings-and-sales-data](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data) | [`app/components/sub_navigation_component.html.erb`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data/blob/HEAD/app/components/sub_navigation_component.html.erb) | template partial |  |  |  |
| [submit-social-housing-lettings-and-sales-data-prototype](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype) | [`app/components/sub-navigation/_sub-navigation.scss`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data-prototype/blob/HEAD/app/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only |  |  |  |

#### hmrc (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [accessibility-site](https://github.com/hmrc/accessibility-site) | [`application/scss/components/_subnav.scss`](https://github.com/hmrc/accessibility-site/blob/HEAD/application/scss/components/_subnav.scss) | SCSS/CSS only |  |  |  |
| [design-system](https://github.com/hmrc/design-system) | [`application/assets/javascripts/components/subnav.js`](https://github.com/hmrc/design-system/blob/HEAD/application/assets/javascripts/components/subnav.js) | JS/TS component |  |  |  |

#### nationalarchives (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [tna-frontend](https://github.com/nationalarchives/tna-frontend) | [`src/nationalarchives/components/secondary-navigation/_index.scss`](https://github.com/nationalarchives/tna-frontend/blob/HEAD/src/nationalarchives/components/secondary-navigation/_index.scss) | SCSS/CSS only |  |  |  |
| [tna-frontend-jinja](https://github.com/nationalarchives/tna-frontend-jinja) | [`tna_frontend_jinja/templates/components/secondary-navigation/macro.html`](https://github.com/nationalarchives/tna-frontend-jinja/blob/HEAD/tna_frontend_jinja/templates/components/secondary-navigation/macro.html) | Nunjucks macro |  |  | `tna-card`, `tna-code-block`, `tna-compound-filters`, `tna-date-search`, `tna-files-list`, `tna-gallery`, `tna-hero`, `tna-index-grid` |

#### dvsa (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dvsa-design-system](https://github.com/dvsa/dvsa-design-system) | [`src/stylesheets/components/_subnav.scss`](https://github.com/dvsa/dvsa-design-system/blob/HEAD/src/stylesheets/components/_subnav.scss) | SCSS/CSS only |  |  |  |
| [cvs-apply-for-vehicle-test](https://github.com/dvsa/cvs-apply-for-vehicle-test) | [`src/moj/components/sub-navigation/_sub-navigation.scss`](https://github.com/dvsa/cvs-apply-for-vehicle-test/blob/HEAD/src/moj/components/sub-navigation/_sub-navigation.scss) | SCSS/CSS only | yes |  |  |

#### dwp (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [accessibility-manual](https://github.com/dwp/accessibility-manual) | [`app/views/components/subnav/_subnav.scss`](https://github.com/dwp/accessibility-manual/blob/HEAD/app/views/components/subnav/_subnav.scss) | SCSS/CSS only |  |  |  |
| [newstylejsa-admin](https://github.com/dwp/newstylejsa-admin) | [`app/views/components/dwp-secondary-navigation/_dwp-secondary-navigation.scss`](https://github.com/dwp/newstylejsa-admin/blob/HEAD/app/views/components/dwp-secondary-navigation/_dwp-secondary-navigation.scss) | SCSS/CSS only | yes |  | `dwp-timeline` |

#### govuk-forms (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [forms-product-page](https://github.com/govuk-forms/forms-product-page) | [`app/components/sub_navigation_component/_index.scss`](https://github.com/govuk-forms/forms-product-page/blob/HEAD/app/components/sub_navigation_component/_index.scss) | SCSS/CSS only |  |  |  |

#### govuk-pay (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pay-selfservice](https://github.com/govuk-pay/pay-selfservice) | [`src/assets/sass/components/sub-navigation.scss`](https://github.com/govuk-pay/pay-selfservice/blob/HEAD/src/assets/sass/components/sub-navigation.scss) | SCSS/CSS only |  |  |  |

#### LandRegistry (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmlr-design-system](https://github.com/LandRegistry/hmlr-design-system) | [`src/stylesheets/components/_subnav.scss`](https://github.com/LandRegistry/hmlr-design-system/blob/HEAD/src/stylesheets/components/_subnav.scss) | SCSS/CSS only |  |  | `gem-c-contents-list` |

#### LondonBoroughSutton (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lbs-design-system](https://github.com/LondonBoroughSutton/lbs-design-system) | [`src/stylesheets/components/_subnav.scss`](https://github.com/LondonBoroughSutton/lbs-design-system/blob/HEAD/src/stylesheets/components/_subnav.scss) | SCSS/CSS only |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [social-mobility-commission-website](https://github.com/ukgov-equality-hub/social-mobility-commission-website) | [`web/app/themes/smc/App_Themes/main/css/components/_subnav.scss`](https://github.com/ukgov-equality-hub/social-mobility-commission-website/blob/HEAD/web/app/themes/smc/App_Themes/main/css/components/_subnav.scss) | SCSS/CSS only |  |  |  |

#### UKGovernmentBEIS (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [energy-label-service](https://github.com/UKGovernmentBEIS/energy-label-service) | [`src/main/resources/scss/components/_sub-navigation.scss`](https://github.com/UKGovernmentBEIS/energy-label-service/blob/HEAD/src/main/resources/scss/components/_sub-navigation.scss) | SCSS/CSS only |  |  |  |

#### Government-People-Group (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [csj-ra-dash](https://github.com/Government-People-Group/csj-ra-dash) | [`app/assets/sass/components/_sub-navigation.scss`](https://github.com/Government-People-Group/csj-ra-dash/blob/HEAD/app/assets/sass/components/_sub-navigation.scss) | SCSS/CSS only | yes |  |  |

#### InnovateUKGitHub (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ifs-prototypes](https://github.com/InnovateUKGitHub/ifs-prototypes) | [`app/views/pattern-library/components/sub-navigation.html`](https://github.com/InnovateUKGitHub/ifs-prototypes/blob/HEAD/app/views/pattern-library/components/sub-navigation.html) | template partial | yes |  |  |

#### nhsbsa (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [mccloud-immediate-choice-prototype](https://github.com/nhsbsa/mccloud-immediate-choice-prototype) | [`app/assets/sass/components/_sub-navigation.scss`](https://github.com/nhsbsa/mccloud-immediate-choice-prototype/blob/HEAD/app/assets/sass/components/_sub-navigation.scss) | SCSS/CSS only | yes |  | `nhsuk-card`, `nhsuk-link` |

#### Planning-Inspectorate (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-patterns](https://github.com/Planning-Inspectorate/design-patterns) | [`app/views/components/subnav.html`](https://github.com/Planning-Inspectorate/design-patterns/blob/HEAD/app/views/components/subnav.html) | template partial | yes |  | `moj-sub-navigation` |


### related-navigation — 41 repos (31 production)

#### nhsbsa (9, 8 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cost-recovery-ops](https://github.com/nhsbsa/cost-recovery-ops) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/cost-recovery-ops/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-link` |
| [data-hub](https://github.com/nhsbsa/data-hub) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/data-hub/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-link` |
| [exemption-checker](https://github.com/nhsbsa/exemption-checker) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/exemption-checker/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-do-dont-list`, `nhsuk-link` |
| [HRT-PPC](https://github.com/nhsbsa/HRT-PPC) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/HRT-PPC/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-action-link` |
| [hwhc-eligibility-checker](https://github.com/nhsbsa/hwhc-eligibility-checker) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/hwhc-eligibility-checker/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-do-dont-list` |
| [mys-pharmacy](https://github.com/nhsbsa/mys-pharmacy) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/mys-pharmacy/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-link` |
| [nhsuk-matex](https://github.com/nhsbsa/nhsuk-matex) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/nhsuk-matex/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  |  |
| [TECS-2022](https://github.com/nhsbsa/TECS-2022) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/TECS-2022/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-action-link`, `nhsuk-card`, `nhsuk-link` |
| [cost-recovery-prototype](https://github.com/nhsbsa/cost-recovery-prototype) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/nhsbsa/cost-recovery-prototype/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only | yes |  |  |

#### DEFRA (3, 3 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [flood-app](https://github.com/DEFRA/flood-app) | [`server/src/sass/components/_related-items.scss`](https://github.com/DEFRA/flood-app/blob/HEAD/server/src/sass/components/_related-items.scss) | SCSS/CSS only |  |  |  |
| [flood-app-temp](https://github.com/DEFRA/flood-app-temp) | [`server/src/sass/components/_related-items.scss`](https://github.com/DEFRA/flood-app-temp/blob/HEAD/server/src/sass/components/_related-items.scss) | SCSS/CSS only |  |  |  |
| [waste-organisation-frontend](https://github.com/DEFRA/waste-organisation-frontend) | [`src/client/stylesheets/components/_related-content.scss`](https://github.com/DEFRA/waste-organisation-frontend/blob/HEAD/src/client/stylesheets/components/_related-content.scss) | SCSS/CSS only |  |  |  |

#### NHSDigital (4, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [DCH-NHS-app](https://github.com/NHSDigital/DCH-NHS-app) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/NHSDigital/DCH-NHS-app/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-card` |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-link` |
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only | yes |  | `nhsuk-link` |
| [prototype-eps-suppliertool](https://github.com/NHSDigital/prototype-eps-suppliertool) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/NHSDigital/prototype-eps-suppliertool/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only | yes |  |  |

#### communitiesuk (3, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [epb-frontend](https://github.com/communitiesuk/epb-frontend) | [`assets/components/_related-items.scss`](https://github.com/communitiesuk/epb-frontend/blob/HEAD/assets/components/_related-items.scss) | SCSS/CSS only |  |  |  |
| [mhclg_svelte_component_library](https://github.com/communitiesuk/mhclg_svelte_component_library) | [`src/lib/components/ui/RelatedContent.svelte`](https://github.com/communitiesuk/mhclg_svelte_component_library/blob/HEAD/src/lib/components/ui/RelatedContent.svelte) | UI framework (React/Vue/Svelte lib) |  |  | `dwp-side-navigation` |
| [epb-prototypes](https://github.com/communitiesuk/epb-prototypes) | [`app/assets/sass/epb-frontend/components/_related-items.scss`](https://github.com/communitiesuk/epb-prototypes/blob/HEAD/app/assets/sass/epb-frontend/components/_related-items.scss) | SCSS/CSS only | yes |  |  |

#### cabinetoffice (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [gap-find-apply-web](https://github.com/cabinetoffice/gap-find-apply-web) | [`packages/applicant/src/components/related-content.tsx`](https://github.com/cabinetoffice/gap-find-apply-web/blob/HEAD/packages/applicant/src/components/related-content.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [gap-find-web](https://github.com/cabinetoffice/gap-find-web) | [`src/components/related-content.tsx`](https://github.com/cabinetoffice/gap-find-web/blob/HEAD/src/components/related-content.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### ONSdigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/ONSdigital/design-system) | [`src/components/related-content/_related-content.scss`](https://github.com/ONSdigital/design-system/blob/HEAD/src/components/related-content/_related-content.scss) | SCSS/CSS only |  |  |  |
| [svelte-components](https://github.com/ONSdigital/svelte-components) | [`src/lib/components/RelatedContent/RelatedContent.svelte`](https://github.com/ONSdigital/svelte-components/blob/HEAD/src/lib/components/RelatedContent/RelatedContent.svelte) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### co-cddo (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [find-support-after-a-fit-note](https://github.com/co-cddo/find-support-after-a-fit-note) | [`src/assets/styles/components/_related-items.scss`](https://github.com/co-cddo/find-support-after-a-fit-note/blob/HEAD/src/assets/styles/components/_related-items.scss) | SCSS/CSS only |  |  | `gem-c-contents-list`, `gem-c-related-navigation` |
| [lthc-prototype](https://github.com/co-cddo/lthc-prototype) | [`app/assets/sass/components/related-navigation/_related-navigation.scss`](https://github.com/co-cddo/lthc-prototype/blob/HEAD/app/assets/sass/components/related-navigation/_related-navigation.scss) | SCSS/CSS only | yes |  | `gem-c-heading`, `gem-c-lead-paragraph` |

#### digital-land (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [design-system](https://github.com/digital-land/design-system) | [`templates/design-system/components/related-content/macro.html`](https://github.com/digital-land/design-system/blob/HEAD/templates/design-system/components/related-content/macro.html) | Nunjucks macro |  |  |  |
| [local-plans-prototype](https://github.com/digital-land/local-plans-prototype) | [`src/scss/components/_related-items.scss`](https://github.com/digital-land/local-plans-prototype/blob/HEAD/src/scss/components/_related-items.scss) | SCSS/CSS only | yes |  |  |

#### alphagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [emergency-alerts-govuk](https://github.com/alphagov/emergency-alerts-govuk) | [`app/assets/stylesheets/components/related_content.scss`](https://github.com/alphagov/emergency-alerts-govuk/blob/HEAD/app/assets/stylesheets/components/related_content.scss) | SCSS/CSS only |  |  |  |

#### Civil-Service-Human-Resources (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [lpg-services](https://github.com/Civil-Service-Human-Resources/lpg-services) | [`views/assets/styles/components/_govuk-related-items.scss`](https://github.com/Civil-Service-Human-Resources/lpg-services/blob/HEAD/views/assets/styles/components/_govuk-related-items.scss) | SCSS/CSS only |  |  |  |

#### defencedigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [moduk-service-manual](https://github.com/defencedigital/moduk-service-manual) | [`components/related-content/_related-content.scss`](https://github.com/defencedigital/moduk-service-manual/blob/HEAD/components/related-content/_related-content.scss) | SCSS/CSS only |  |  |  |

#### dfe-analytical-services (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [explore-education-statistics](https://github.com/dfe-analytical-services/explore-education-statistics) | [`src/explore-education-statistics-common/src/components/RelatedContent.tsx`](https://github.com/dfe-analytical-services/explore-education-statistics/blob/HEAD/src/explore-education-statistics-common/src/components/RelatedContent.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### nationalarchives (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [wa-frontend](https://github.com/nationalarchives/wa-frontend) | [`app/templates/components/related_content.html`](https://github.com/nationalarchives/wa-frontend/blob/HEAD/app/templates/components/related_content.html) | template partial |  |  | `tna-picture` |

#### TechnologyEnhancedLearning (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [Prototyping](https://github.com/TechnologyEnhancedLearning/Prototyping) | [`app/assets/sass/components/_related-nav.scss`](https://github.com/TechnologyEnhancedLearning/Prototyping/blob/HEAD/app/assets/sass/components/_related-nav.scss) | SCSS/CSS only |  |  | `nhsuk-link` |

#### trade-tariff (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [trade-tariff-frontend](https://github.com/trade-tariff/trade-tariff-frontend) | [`app/assets/stylesheets/src/components/_related-navigation.scss`](https://github.com/trade-tariff/trade-tariff-frontend/blob/HEAD/app/assets/stylesheets/src/components/_related-navigation.scss) | SCSS/CSS only |  |  |  |

#### ukgov-equality-hub (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ethnicity-facts-and-figures](https://github.com/ukgov-equality-hub/ethnicity-facts-and-figures) | [`application/src/sass/components/_related_content.scss`](https://github.com/ukgov-equality-hub/ethnicity-facts-and-figures/blob/HEAD/application/src/sass/components/_related_content.scss) | SCSS/CSS only |  |  |  |

#### UKGovernmentBEIS (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [rpr-alpha-phase-prototype1](https://github.com/UKGovernmentBEIS/rpr-alpha-phase-prototype1) | [`src/components/related-items/related-items.tsx`](https://github.com/UKGovernmentBEIS/rpr-alpha-phase-prototype1/blob/HEAD/src/components/related-items/related-items.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### UKHSA-Internal (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [data-dashboard-frontend](https://github.com/UKHSA-Internal/data-dashboard-frontend) | [`src/app/components/ui/ukhsa/RelatedLinks/RelatedLinks.tsx`](https://github.com/UKHSA-Internal/data-dashboard-frontend/blob/HEAD/src/app/components/ui/ukhsa/RelatedLinks/RelatedLinks.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |

#### defra-design (3, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [cap-flood-warning-codes](https://github.com/defra-design/cap-flood-warning-codes) | [`app/assets/sass/components/_related-items.scss`](https://github.com/defra-design/cap-flood-warning-codes/blob/HEAD/app/assets/sass/components/_related-items.scss) | SCSS/CSS only | yes |  |  |
| [check-for-flooding](https://github.com/defra-design/check-for-flooding) | [`app/assets/sass/components/_related-items.scss`](https://github.com/defra-design/check-for-flooding/blob/HEAD/app/assets/sass/components/_related-items.scss) | SCSS/CSS only | yes |  |  |
| [check-for-flooding-prototype](https://github.com/defra-design/check-for-flooding-prototype) | [`app/assets/sass/components/_related-items.scss`](https://github.com/defra-design/check-for-flooding-prototype/blob/HEAD/app/assets/sass/components/_related-items.scss) | SCSS/CSS only | yes |  |  |

#### DFE-Digital (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [get-help-with-tech-prototype](https://github.com/DFE-Digital/get-help-with-tech-prototype) | [`app/assets/sass/components/_related-items.scss`](https://github.com/DFE-Digital/get-help-with-tech-prototype/blob/HEAD/app/assets/sass/components/_related-items.scss) | SCSS/CSS only | yes |  |  |

## Adjacent work

Related clusters not included here: back-to-top, sidebar, hero, masthead (x-govuk-masthead, 8 repos), inverse-header (gem-c-inverse-header, 10 repos). None of this data speaks to whole-service patterns — that evidence has to come from discovery research.
