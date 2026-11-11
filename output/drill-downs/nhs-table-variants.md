# NHS.UK table variants: repo drill-down

Generated 2026-11-11 by [nhs-table-variants.mjs](../nhs-table-variants.mjs).

The [NHS table component](https://service-manual.nhs.uk/design-system/components/table) has six kinds — basic, compact, striped, responsive, scrolling, sortable — plus a reverse variant for dark backgrounds. This doc counts which government repos (those depending on the `nhsuk-frontend` npm package) use each kind, detected from CSS classes and Nunjucks macro options in their view/template files.

**Caveats:** only up to 25 view files per repo are scanned (the audit's standard sample), so counts are a lower bound. Repos using NHS classes without an `nhsuk-frontend` package dependency (copied CSS, prototype kit plugins) are not covered. `data-sort`/`aria-sort` co-occurring with `nhsuk-table` is used as the sortable signal in HTML, which can over-count slightly. Macro-option detection (`compact: true` etc.) requires the file to reference the NHS table macro.

## Summary

- **134 repos depend on nhsuk-frontend** (of 1359 government repos scanned; 0 unavailable)
- **62 repos reference NHS tables** in sampled view files
- **11 repos use at least one variant** beyond basic

| Variant | Classes / macro options | Repos | Production | Prototypes |
|---|---|---|---|---|
| responsive | `nhsuk-table--responsive`, macro `responsive: true` | 2 | 2 | 0 |
| sortable | `data-sort`/`aria-sort`, macro `sort:` | 9 | 6 | 3 |
| striped | `nhsuk-table--striped`, macro `striped: true` | 1 | 0 | 1 |
| compact | `nhsuk-table--compact`, macro `compact: true` | 0 | 0 | 0 |
| scrolling | `nhsuk-scroll` wrapper, macro `scroll: true` | 2 | 2 | 0 |
| reverse/dark | `nhsuk-table--reverse`, macro `variant: "reverse"` | 0 | 0 | 0 |

### Declared nhsuk-frontend versions among variant users

Compact, striped, scrolling and the sortable macro options need **10.6.0**; reverse needs **10.4.0**; responsive dates from **4.0.0**. Repos on older ranges using variant *classes* directly may have copied styles.

| Version range | Repos |
|---|---|
| `^10.6.1` | 4 |
| `^10.3.1` | 2 |
| `^10.5.1` | 1 |
| `^10.0.0` | 1 |
| `^10.4.2` | 1 |
| `10.0.0` | 1 |
| `^5.1.0` | 1 |

### Cross-references

- 1 variant-using repo **also have their own table implementation** in the audit's table clusters (see [table.md](./table.md))
- 1 variant-using repo **also consume `moj-sortable-table`** classes

## Repos by organisation

### nhsbsa (62)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [clean-up-dropped-employments](https://github.com/nhsbsa/clean-up-dropped-employments) | `^10.5.1` | **sortable**, **scrolling** | [`scrolling`](https://github.com/nhsbsa/clean-up-dropped-employments/blob/HEAD/app/views/concept-all/results.html), [`sortable`](https://github.com/nhsbsa/clean-up-dropped-employments/blob/HEAD/app/views/concept-all/results.html) |  |  |
| [cost-recovery-ops](https://github.com/nhsbsa/cost-recovery-ops) | `^10.6.1` | **sortable**, **scrolling** | [`scrolling`](https://github.com/nhsbsa/cost-recovery-ops/blob/HEAD/app/views/Archive/v1/account-requests-view.html), [`sortable`](https://github.com/nhsbsa/cost-recovery-ops/blob/HEAD/app/views/Archive/v1/account-requests-view.html) |  |  |
| [hrt-telesales](https://github.com/nhsbsa/hrt-telesales) | `^10.0.0` | **sortable** | [`sortable`](https://github.com/nhsbsa/hrt-telesales/blob/HEAD/app/views/dev-full-journey/admin/search.html) |  |  |
| [nhs-student-bursaries-new](https://github.com/nhsbsa/nhs-student-bursaries-new) | `^10.4.2` | **sortable** | [`sortable`](https://github.com/nhsbsa/nhs-student-bursaries-new/blob/HEAD/app/views/DSA-updates/search-results.html) |  |  |
| [reference-price-prototype](https://github.com/nhsbsa/reference-price-prototype) (proto) | `^10.3.1` | **sortable** | [`sortable`](https://github.com/nhsbsa/reference-price-prototype/blob/HEAD/app/views/a-vo-ca-do/dhsc/bm-portal/plr-data-view-past.html) |  | yes |
| [student-services-alpha](https://github.com/nhsbsa/student-services-alpha) | `10.0.0` | **sortable** | [`sortable`](https://github.com/nhsbsa/student-services-alpha/blob/HEAD/app/views/BSA-internal/v1/student-details.html) |  |  |
| [update-pension-details](https://github.com/nhsbsa/update-pension-details) | `^10.6.1` | **responsive** | [`responsive`](https://github.com/nhsbsa/update-pension-details/blob/HEAD/app/views/index.html) |  |  |
| [additional-pensions-calculator](https://github.com/nhsbsa/additional-pensions-calculator) | `^10.4.2` | basic only |  |  |  |
| [ai-prototyping](https://github.com/nhsbsa/ai-prototyping) | `^10.4.2` | basic only |  |  |  |
| [apply-healthy-start-vouchers](https://github.com/nhsbsa/apply-healthy-start-vouchers) | `^10.4.2` | basic only |  |  |  |
| [bpor-branding-poc](https://github.com/nhsbsa/bpor-branding-poc) | `^10.4.2` | basic only |  |  |  |
| [cdr-client-prototype](https://github.com/nhsbsa/cdr-client-prototype) (proto) | `^9.6.0` | basic only |  |  |  |
| [cip-nightapps-prototype](https://github.com/nhsbsa/cip-nightapps-prototype) (proto) | `^8.1.1` | basic only |  |  |  |
| [claims-prototype](https://github.com/nhsbsa/claims-prototype) (proto) | `^10.0.0` | basic only |  |  |  |
| [contact-the-bsa](https://github.com/nhsbsa/contact-the-bsa) | `^10.5.2` | basic only |  |  |  |
| [cost-recovery-prototype](https://github.com/nhsbsa/cost-recovery-prototype) (proto) | `^10.6.1` | basic only |  |  |  |
| [data-hub](https://github.com/nhsbsa/data-hub) | `^10.6.1` | basic only |  |  |  |
| [dentist-alpha-song-prototype](https://github.com/nhsbsa/dentist-alpha-song-prototype) (proto) | `^8.3.0` | basic only |  |  |  |
| [design-system](https://github.com/nhsbsa/design-system) | `^3.1.0` | basic only |  |  |  |
| [ehic-ghic](https://github.com/nhsbsa/ehic-ghic) | `^10.0.0` | basic only |  |  |  |
| [Employing-Authority-Search](https://github.com/nhsbsa/Employing-Authority-Search) | `^10.3.1` | basic only |  |  |  |
| [exemption-checker](https://github.com/nhsbsa/exemption-checker) | `^10.6.0` | basic only |  |  |  |
| [HRT-PPC](https://github.com/nhsbsa/HRT-PPC) | `^10.6.0` | basic only |  |  |  |
| [hs-design-history](https://github.com/nhsbsa/hs-design-history) | `^4.0.0` | basic only |  |  |  |
| [hwhc-certificate-manager](https://github.com/nhsbsa/hwhc-certificate-manager) | `^10.6.0` | basic only |  |  |  |
| [hwhc-eligibility-checker](https://github.com/nhsbsa/hwhc-eligibility-checker) | `^10.3.1` | basic only |  |  |  |
| [jdr-login](https://github.com/nhsbsa/jdr-login) | `^10.4.2` | basic only |  |  |  |
| [learning-support-fund](https://github.com/nhsbsa/learning-support-fund) | `8.3.0` | basic only |  |  |  |
| [learning-support-fund-new](https://github.com/nhsbsa/learning-support-fund-new) | `^10.4.0` | basic only |  |  |  |
| [lis-apply-refresh](https://github.com/nhsbsa/lis-apply-refresh) | `^10.6.0` | basic only |  |  |  |
| [manage-healthy-start-vouchers](https://github.com/nhsbsa/manage-healthy-start-vouchers) | `^7.0.0-alpha.2` | basic only |  |  |  |
| [margin-survey](https://github.com/nhsbsa/margin-survey) | `^9.6.3` | basic only |  |  |  |
| [match-ohs-record](https://github.com/nhsbsa/match-ohs-record) | `^8.3.0` | basic only |  |  |  |
| [McCloud-Choice](https://github.com/nhsbsa/McCloud-Choice) | `^10.3.1` | basic only |  |  |  |
| [mccloud-immediate-choice-prototype](https://github.com/nhsbsa/mccloud-immediate-choice-prototype) (proto) | `^10.0.0` | basic only |  |  |  |
| [medical-certificate-of-cause-of-death](https://github.com/nhsbsa/medical-certificate-of-cause-of-death) | `^8.0.2` | basic only |  |  |  |
| [medical-examiner-service](https://github.com/nhsbsa/medical-examiner-service) | `^6.2.0` | basic only |  | responsive-table |  |
| [medicines-management-prototype](https://github.com/nhsbsa/medicines-management-prototype) (proto) | `^7.0.0` | basic only |  |  |  |
| [my-hub-service-assessment](https://github.com/nhsbsa/my-hub-service-assessment) | `^10.4.2` | basic only |  |  |  |
| [mys-pharmacy](https://github.com/nhsbsa/mys-pharmacy) | `^10.4.2` | basic only |  |  |  |
| [nhs-student-bursaries-prototype](https://github.com/nhsbsa/nhs-student-bursaries-prototype) (proto) | `8.3.0` | basic only |  |  |  |
| [nhs-volunteering-beta-prototype](https://github.com/nhsbsa/nhs-volunteering-beta-prototype) (proto) | `^9.6.3` | basic only |  |  |  |
| [nhsbsa-design-history](https://github.com/nhsbsa/nhsbsa-design-history) | `^4.0.0` | basic only |  |  |  |
| [nhsbsa-digital-playbook](https://github.com/nhsbsa/nhsbsa-digital-playbook) | `^8.3.0` | basic only |  |  |  |
| [nhsbsa-docs](https://github.com/nhsbsa/nhsbsa-docs) | `^6.1.2` | basic only |  |  |  |
| [nhsbsa-nihr-crp-prototype](https://github.com/nhsbsa/nhsbsa-nihr-crp-prototype) (proto) | `^10.0.0` | basic only |  |  |  |
| [nhsbsa-volunteering-prototype](https://github.com/nhsbsa/nhsbsa-volunteering-prototype) (proto) | `^6.1.0` | basic only |  |  |  |
| [nhsuk-matex](https://github.com/nhsbsa/nhsuk-matex) | `^10.6.0` | basic only |  |  |  |
| [nihr-bpor](https://github.com/nhsbsa/nihr-bpor) | `^10.6.1` | basic only |  |  |  |
| [nihr-public-prototype](https://github.com/nhsbsa/nihr-public-prototype) (proto) | `^10.6.1` | basic only |  |  |  |
| [pensions-contact-the-scheme](https://github.com/nhsbsa/pensions-contact-the-scheme) | `^10.4.2` | basic only |  |  |  |
| [pensions-form-ordering](https://github.com/nhsbsa/pensions-form-ordering) | `^10.3.1` | basic only |  |  |  |
| [pensions-online-contact-form](https://github.com/nhsbsa/pensions-online-contact-form) | `^9.0.1` | basic only |  |  |  |
| [pensions-redundancy-calculator](https://github.com/nhsbsa/pensions-redundancy-calculator) | `^10.0.0` | basic only |  |  |  |
| [ppc-new](https://github.com/nhsbsa/ppc-new) | `^10.6.0` | basic only |  |  |  |
| [pprs-prototype](https://github.com/nhsbsa/pprs-prototype) (proto) | `^7.0.0` | basic only |  |  |  |
| [practice-run](https://github.com/nhsbsa/practice-run) | `^6.1.0` | basic only |  |  |  |
| [prescription-training-package](https://github.com/nhsbsa/prescription-training-package) | `^10.1.0` | basic only |  |  |  |
| [research-playbook](https://github.com/nhsbsa/research-playbook) | `^4.0.0` | basic only |  |  |  |
| [self-assessment-test](https://github.com/nhsbsa/self-assessment-test) | `^9.0.1` | basic only |  |  |  |
| [suvpart2](https://github.com/nhsbsa/suvpart2) | `^10.6.0` | basic only |  |  |  |
| [TECS-2022](https://github.com/nhsbsa/TECS-2022) | `^10.6.0` | basic only |  |  |  |

### nhsx (7)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [skunkworks-model-card](https://github.com/nhsx/skunkworks-model-card) | `^5.1.0` | **responsive** | [`responsive`](https://github.com/nhsx/skunkworks-model-card/blob/HEAD/app/views/model-card.html) |  |  |
| [admitme](https://github.com/nhsx/admitme) | `^4.1.0` | basic only |  |  |  |
| [antibody-web](https://github.com/nhsx/antibody-web) | `^3.0.1` | basic only |  |  |  |
| [il-qr-form](https://github.com/nhsx/il-qr-form) | `^4.1.0` | basic only |  |  |  |
| [self-isolation-prototype](https://github.com/nhsx/self-isolation-prototype) (proto) | `^3.0.3` | basic only |  |  |  |
| [skunkworks-long-stayer-risk-stratification](https://github.com/nhsx/skunkworks-long-stayer-risk-stratification) | `^5.1.0` | basic only |  |  |  |
| [standards-registry](https://github.com/nhsx/standards-registry) | `^5.2.0` | basic only |  |  |  |

### nhsengland (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [innovation-service-transactional-frontend](https://github.com/nhsengland/innovation-service-transactional-frontend) | `^10.3.1` | **sortable** | [`sortable`](https://github.com/nhsengland/innovation-service-transactional-frontend/blob/HEAD/src/modules/feature-modules/accessor/pages/innovations-needing-action/innovations-needing-action.component.html) |  |  |

### NHSDigital (17)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [c2c-breast-screening-prototype](https://github.com/NHSDigital/c2c-breast-screening-prototype) (proto) | `^10.6.1` | **sortable**, **striped** | [`striped`](https://github.com/NHSDigital/c2c-breast-screening-prototype/blob/HEAD/app/views/_macros/clinic-listing.html), [`sortable`](https://github.com/NHSDigital/c2c-breast-screening-prototype/blob/HEAD/app/views/batches/participants/index.html) |  |  |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) (proto) | `^10.6.1` | **sortable** | [`sortable`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/views/appointments/_cancelled.html) | table |  |
| [book-vaccinations-prototype](https://github.com/NHSDigital/book-vaccinations-prototype) (proto) | `^10.3.1` | basic only |  |  |  |
| [cdp-portal](https://github.com/NHSDigital/cdp-portal) | `^8.1.1` | basic only |  |  |  |
| [DCH-NHS-app](https://github.com/NHSDigital/DCH-NHS-app) | `^10.3.1` | basic only |  |  |  |
| [healthstore-deployment-guidance-prototype](https://github.com/NHSDigital/healthstore-deployment-guidance-prototype) (proto) | `^10.4.2` | basic only |  |  |  |
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) (proto) | `^10.6.1` | basic only |  |  |  |
| [manage-vaccinations-in-schools-prototype](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype) (proto) | `^10.6.1` | basic only |  | table |  |
| [mya-prototype](https://github.com/NHSDigital/mya-prototype) (proto) | `^10.2.2` | basic only |  |  |  |
| [mya-provocotype](https://github.com/NHSDigital/mya-provocotype) | `^10.3.1` | basic only |  |  |  |
| [nhs-eps-prototype](https://github.com/NHSDigital/nhs-eps-prototype) (proto) | `^8.1.0` | basic only |  |  |  |
| [nhs-firstcontact-prototype-maternity-self-referral](https://github.com/NHSDigital/nhs-firstcontact-prototype-maternity-self-referral) (proto) | `^8.3.0` | basic only |  |  |  |
| [nhs-notify-web-cms](https://github.com/NHSDigital/nhs-notify-web-cms) | `^10.1.0` | basic only |  |  |  |
| [nhsuk-frontend-jinja](https://github.com/NHSDigital/nhsuk-frontend-jinja) | `^10.7.0` | basic only |  | table |  |
| [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) | `^10.3.1` | basic only |  | table |  |
| [prototype-gp-registration](https://github.com/NHSDigital/prototype-gp-registration) (proto) | `^10.3.1` | basic only |  |  |  |
| [prototype-lung-health-check](https://github.com/NHSDigital/prototype-lung-health-check) (proto) | `^10.6.1` | basic only |  |  |  |

### TechnologyEnhancedLearning (16)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [DLS-LDACompetencyFrameworkPrototype](https://github.com/TechnologyEnhancedLearning/DLS-LDACompetencyFrameworkPrototype) (proto) | `^3.1.0` | basic only |  |  |  |
| [DLSBinonTest](https://github.com/TechnologyEnhancedLearning/DLSBinonTest) | `^6.1.0` | basic only |  |  |  |
| [DLSBinonTest2](https://github.com/TechnologyEnhancedLearning/DLSBinonTest2) | `^6.1.0` | basic only |  |  |  |
| [DLSBinonTestUbuntu](https://github.com/TechnologyEnhancedLearning/DLSBinonTestUbuntu) | `^6.1.0` | basic only |  |  |  |
| [DLSBinonTestWin2](https://github.com/TechnologyEnhancedLearning/DLSBinonTestWin2) | `^6.1.0` | basic only |  |  |  |
| [DLSTestBinonWindows](https://github.com/TechnologyEnhancedLearning/DLSTestBinonWindows) | `^6.1.0` | basic only |  |  |  |
| [DLSV2](https://github.com/TechnologyEnhancedLearning/DLSV2) | `9.1.0` | basic only |  |  |  |
| [LearningHub.Nhs.UserApi](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.UserApi) | `^7.0.0` | basic only |  |  |  |
| [LearningHub.Nhs.UserApi.Forked](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.UserApi.Forked) | `^7.0.0` | basic only |  |  |  |
| [LearningHub.Nhs.WebUI](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI) | `^10.1.0` | basic only |  |  |  |
| [LearningHub.Nhs.WebUI.Forked](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked) | `^6.1.2` | basic only |  |  |  |
| [LearningHub.Nhs.WebUI.Forked.B](https://github.com/TechnologyEnhancedLearning/LearningHub.Nhs.WebUI.Forked.B) | `^6.1.2` | basic only |  |  |  |
| [moodle-theme-nhsetel](https://github.com/TechnologyEnhancedLearning/moodle-theme-nhsetel) | `^10.0.0` | basic only |  |  |  |
| [MVCBlazor](https://github.com/TechnologyEnhancedLearning/MVCBlazor) | `^9.0.1` | basic only |  |  |  |
| [Prototyping](https://github.com/TechnologyEnhancedLearning/Prototyping) | `^9.5.2` | basic only |  |  |  |
| [tel-frontend](https://github.com/TechnologyEnhancedLearning/tel-frontend) | `^10.4.0` | basic only |  |  |  |

### nhselect (10)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [cieh-human-factors](https://github.com/nhselect/cieh-human-factors) | `^5.2.1` | basic only |  |  |  |
| [cypmh-comms-toolbox](https://github.com/nhselect/cypmh-comms-toolbox) | `^5.2.1` | basic only |  |  |  |
| [cypmh-index](https://github.com/nhselect/cypmh-index) | `^5.2.1` | basic only |  |  |  |
| [home](https://github.com/nhselect/home) | `^5.2.1` | basic only |  |  |  |
| [matrix](https://github.com/nhselect/matrix) | `^5.2.1` | basic only |  |  |  |
| [nhs-elect-personal-styles](https://github.com/nhselect/nhs-elect-personal-styles) | `^5.2.1` | basic only |  |  |  |
| [resp-surge-skills-matrix](https://github.com/nhselect/resp-surge-skills-matrix) | `^6.1.0` | basic only |  |  |  |
| [step1-proficiencies](https://github.com/nhselect/step1-proficiencies) | `^6.1.0` | basic only |  |  |  |
| [step1-proficiency-demo](https://github.com/nhselect/step1-proficiency-demo) | `^6.1.2` | basic only |  |  |  |
| [step1-training](https://github.com/nhselect/step1-training) | `^5.2.1` | basic only |  |  |  |

### NHSLeadership (5)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [assess](https://github.com/NHSLeadership/assess) | `^10.6.1` | basic only |  |  |  |
| [moodle-nhse](https://github.com/NHSLeadership/moodle-nhse) | `^9.0.0` | basic only |  |  |  |
| [nhsblocks](https://github.com/NHSLeadership/nhsblocks) | `^8.0.2` | basic only |  |  |  |
| [nhsl-laravel](https://github.com/NHSLeadership/nhsl-laravel) | `^9.3.0` | basic only |  |  |  |
| [nightingale-2-0](https://github.com/NHSLeadership/nightingale-2-0) | `^8.3.0` | basic only |  |  |  |

### nhsuk (4)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [nhsapp-frontend](https://github.com/nhsuk/nhsapp-frontend) | `^10.6.1` | basic only |  |  |  |
| [nhsuk-frontend](https://github.com/nhsuk/nhsuk-frontend) | `*` | basic only |  |  |  |
| [nhsuk-prototype-kit-package](https://github.com/nhsuk/nhsuk-prototype-kit-package) (proto) | `^10.6.1` | basic only |  |  |  |
| [nhsuk-service-manual](https://github.com/nhsuk/nhsuk-service-manual) | `^10.7.0` | basic only |  |  |  |

### dwp (3)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [atw-payment-claims-grant](https://github.com/dwp/atw-payment-claims-grant) | `6.2.0` | basic only |  |  |  |
| [atw-payment-claims-service](https://github.com/dwp/atw-payment-claims-service) | `^6.1.2` | basic only |  |  |  |
| [ui-atw-claim](https://github.com/dwp/ui-atw-claim) | `8.3.0` | basic only |  |  |  |

### 111Online (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [nhs111-resources](https://github.com/111Online/nhs111-resources) | `^6.1.0` | basic only |  |  |  |

### DFE-Digital (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [neet-digital](https://github.com/DFE-Digital/neet-digital) | `^10.5.2` | basic only |  |  |  |

### NHS-Test-Digital-Design (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [nhs-antibody-testing-registration-prototype](https://github.com/NHS-Test-Digital-Design/nhs-antibody-testing-registration-prototype) (proto) | `^3.1.0` | basic only |  |  |  |

### NHS-digital-website (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [headless-prototype](https://github.com/NHS-digital-website/headless-prototype) (proto) | `^10.6.1` | basic only |  |  |  |

### defencedigital (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [moduk-prototype-kit](https://github.com/defencedigital/moduk-prototype-kit) (proto) | `^6.1.0` | basic only |  |  |  |

### ministryofjustice (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [hmpps-community-accommodation-tier-2-bail-prototypes](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes) (proto) | `^9.3.0` | basic only |  |  |  |

### nhs-digital-gp-it-futures (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [GPITBuyingCatalogue](https://github.com/nhs-digital-gp-it-futures/GPITBuyingCatalogue) | `^8.3.0` | basic only |  |  |  |

### nhsconnect (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [nhslogin-partners](https://github.com/nhsconnect/nhslogin-partners) | `^2.1.0` | basic only |  |  |  |

### ukhsa-collaboration (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [ntbs_Beta](https://github.com/ukhsa-collaboration/ntbs_Beta) | `6.1.0` | basic only |  |  |  |

