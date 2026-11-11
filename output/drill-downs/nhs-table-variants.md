# NHS.UK table variants: repo drill-down

Generated 2026-11-11 by [nhs-table-variants.mjs](../nhs-table-variants.mjs).

The [NHS table component](https://service-manual.nhs.uk/design-system/components/table) has six kinds — basic, compact, striped, responsive, scrolling, sortable — plus a reverse variant for dark backgrounds. This doc counts which government repos (those depending on the `nhsuk-frontend` npm package) use each kind, detected from CSS classes and Nunjucks macro options in their view/template files.

**Caveats:** only up to 25 view files per repo are scanned (the audit's standard sample), so counts are a lower bound. Repos using NHS classes without an `nhsuk-frontend` package dependency (copied CSS, prototype kit plugins) are not covered. `data-sort`/`aria-sort` co-occurring with `nhsuk-table` is used as the sortable signal in HTML, which can over-count slightly. Macro-option detection (`compact: true` etc.) requires the file to reference the NHS table macro.

## Summary

- **134 repos across 18 orgs depend on nhsuk-frontend** (of 1359 government repos scanned; 0 unavailable)
- **62 repos across 9 orgs reference NHS tables** in sampled view files
- **44 repos across 7 orgs use at least one variant** beyond basic

| Variant | Classes / macro options | Repos | Orgs | Production | Prototypes | Of which legacy classes |
|---|---|---|---|---|---|---|
| responsive | `nhsuk-table--responsive`, legacy `nhsuk-table-responsive`, macro `responsive: true` | 43 | 7 | 31 | 12 | 41 |
| sortable | `data-sort`/`aria-sort`, macro `sort:` | 9 | 3 | 6 | 3 |  |
| striped | `nhsuk-table--striped`, macro `striped: true` | 1 | 1 | 0 | 1 |  |
| compact | `nhsuk-table--compact`, macro `compact: true` | 0 | 0 | 0 | 0 |  |
| scrolling | `nhsuk-scroll` wrapper, legacy `nhsuk-table-container`, macro `scroll: true` | 2 | 1 | 2 | 0 |  |
| reverse/dark | `nhsuk-table--reverse`, legacy `nhsuk-table-responsive--reverse`, macro `variant: "reverse"` | 0 | 0 | 0 | 0 |  |

### Declared nhsuk-frontend versions among variant users

Class names changed in **10.6.0** (August 2026): `nhsuk-table-responsive` became `nhsuk-table nhsuk-table--responsive`, `nhsuk-table-container` became the `nhsuk-scroll` wrapper, and `nhsuk-table-responsive--reverse` became `nhsuk-table--reverse`. Compact, striped, scrolling and the sortable macro options are all new in 10.6.0; the reverse macro option dates from 10.4.0 and responsive from 4.0.0. Repos on older ranges can only use the legacy class names (or hand-rolled `data-sort`/`aria-sort` markup for sorting). Before 4.0.0 (October 2020) `nhsuk-table-responsive` meant the *scrolling* wrapper, so legacy-class signals on very old versions may be misattributed between those two variants.

| Version range | Repos |
|---|---|
| `^6.1.0` | 6 |
| `^10.6.1` | 5 |
| `^10.3.1` | 5 |
| `^10.4.2` | 4 |
| `^10.0.0` | 2 |
| `^8.3.0` | 2 |
| `8.3.0` | 2 |
| `^7.0.0` | 2 |
| `^10.6.0` | 2 |
| `^10.2.2` | 1 |
| `^8.1.0` | 1 |
| `9.1.0` | 1 |
| `^8.1.1` | 1 |
| `^10.5.1` | 1 |
| `^10.5.2` | 1 |
| `^10.4.0` | 1 |
| `^7.0.0-alpha.2` | 1 |
| `^6.2.0` | 1 |
| `^9.0.1` | 1 |
| `10.0.0` | 1 |
| `^2.1.0` | 1 |
| `^6.1.2` | 1 |
| `^5.1.0` | 1 |

### ⚠️ Legacy classes on 10.6+ — likely broken styling

The legacy class names were **removed** in 10.6.0. These repos declare nhsuk-frontend 10.6.0 or later but still use the old classes, so their variant styling (for example responsive table stacking) has likely stopped working:

- [nhsbsa/cost-recovery-ops](https://github.com/nhsbsa/cost-recovery-ops) (`^10.6.1`): responsive
- [nhsbsa/cost-recovery-prototype](https://github.com/nhsbsa/cost-recovery-prototype) (`^10.6.1`): responsive
- [nhsbsa/ppc-new](https://github.com/nhsbsa/ppc-new) (`^10.6.0`): responsive
- [nhsbsa/suvpart2](https://github.com/nhsbsa/suvpart2) (`^10.6.0`): responsive
- [NHSDigital/c2c-breast-screening-prototype](https://github.com/NHSDigital/c2c-breast-screening-prototype) (`^10.6.1`): responsive
- [NHSDigital/record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) (`^10.6.1`): responsive

### Cross-references

- 2 variant-using repos **also have their own table implementation** in the audit's table clusters (see [table.md](./table.md))
- 1 variant-using repo **also consume `moj-sortable-table`** classes

## Repos by organisation

### nhsbsa (62)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [cost-recovery-ops](https://github.com/nhsbsa/cost-recovery-ops) | `^10.6.1` | **responsive** (legacy class), **sortable**, **scrolling** | [`scrolling`](https://github.com/nhsbsa/cost-recovery-ops/blob/HEAD/app/views/Archive/v1/account-requests-view.html), [`sortable`](https://github.com/nhsbsa/cost-recovery-ops/blob/HEAD/app/views/Archive/v1/account-requests-view.html), [`responsive`](https://github.com/nhsbsa/cost-recovery-ops/blob/HEAD/app/views/Archive/v1/account-requests-view.html) |  |  |
| [clean-up-dropped-employments](https://github.com/nhsbsa/clean-up-dropped-employments) | `^10.5.1` | **sortable**, **scrolling** | [`scrolling`](https://github.com/nhsbsa/clean-up-dropped-employments/blob/HEAD/app/views/concept-all/results.html), [`sortable`](https://github.com/nhsbsa/clean-up-dropped-employments/blob/HEAD/app/views/concept-all/results.html) |  |  |
| [hrt-telesales](https://github.com/nhsbsa/hrt-telesales) | `^10.0.0` | **responsive** (legacy class), **sortable** | [`responsive`](https://github.com/nhsbsa/hrt-telesales/blob/HEAD/app/views/dev-full-journey/admin/search-2.html), [`sortable`](https://github.com/nhsbsa/hrt-telesales/blob/HEAD/app/views/dev-full-journey/admin/search.html) |  |  |
| [nhs-student-bursaries-new](https://github.com/nhsbsa/nhs-student-bursaries-new) | `^10.4.2` | **responsive** (legacy class), **sortable** | [`responsive`](https://github.com/nhsbsa/nhs-student-bursaries-new/blob/HEAD/app/views/DSA-updates/DSA-needs-assessment.html), [`sortable`](https://github.com/nhsbsa/nhs-student-bursaries-new/blob/HEAD/app/views/DSA-updates/search-results.html) |  |  |
| [reference-price-prototype](https://github.com/nhsbsa/reference-price-prototype) (proto) | `^10.3.1` | **responsive** (legacy class), **sortable** | [`responsive`](https://github.com/nhsbsa/reference-price-prototype/blob/HEAD/app/views/a-vo-ca-do/dhsc/ablankspace.html), [`sortable`](https://github.com/nhsbsa/reference-price-prototype/blob/HEAD/app/views/a-vo-ca-do/dhsc/bm-portal/plr-data-view-past.html) |  | yes |
| [student-services-alpha](https://github.com/nhsbsa/student-services-alpha) | `10.0.0` | **responsive** (legacy class), **sortable** | [`responsive`](https://github.com/nhsbsa/student-services-alpha/blob/HEAD/app/views/BSA-internal/v1/bursary-application.html), [`sortable`](https://github.com/nhsbsa/student-services-alpha/blob/HEAD/app/views/BSA-internal/v1/student-details.html) |  |  |
| [additional-pensions-calculator](https://github.com/nhsbsa/additional-pensions-calculator) | `^10.4.2` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/additional-pensions-calculator/blob/HEAD/app/views/index.html) |  |  |
| [apply-healthy-start-vouchers](https://github.com/nhsbsa/apply-healthy-start-vouchers) | `^10.4.2` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/apply-healthy-start-vouchers/blob/HEAD/app/views/account/v1/(laterPhase)/check-your-details-og.html) |  |  |
| [cip-nightapps-prototype](https://github.com/nhsbsa/cip-nightapps-prototype) (proto) | `^8.1.1` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/cip-nightapps-prototype/blob/HEAD/app/views/apps/50k/dashboard.html) |  |  |
| [claims-prototype](https://github.com/nhsbsa/claims-prototype) (proto) | `^10.0.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/claims-prototype/blob/HEAD/app/views/alpha/accessibility-testing/may-2025/claims/rina/average-cost/6784-spain/history/not-started.html) |  |  |
| [contact-the-bsa](https://github.com/nhsbsa/contact-the-bsa) | `^10.5.2` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/contact-the-bsa/blob/HEAD/app/views/cookies/cookie-declaration.html) |  |  |
| [cost-recovery-prototype](https://github.com/nhsbsa/cost-recovery-prototype) (proto) | `^10.6.1` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/cost-recovery-prototype/blob/HEAD/app/views/RH/search/account-pending.html) |  |  |
| [dentist-alpha-song-prototype](https://github.com/nhsbsa/dentist-alpha-song-prototype) (proto) | `^8.3.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/dentist-alpha-song-prototype/blob/HEAD/app/views/1-general/landing-page/v1/landing-page-clinician.html) |  |  |
| [Employing-Authority-Search](https://github.com/nhsbsa/Employing-Authority-Search) | `^10.3.1` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/Employing-Authority-Search/blob/HEAD/app/views/index.html) |  |  |
| [learning-support-fund](https://github.com/nhsbsa/learning-support-fund) | `8.3.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/learning-support-fund/blob/HEAD/app/views/lsf-portal/v1/course-intake-student-status-change.html) |  |  |
| [learning-support-fund-new](https://github.com/nhsbsa/learning-support-fund-new) | `^10.4.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/learning-support-fund-new/blob/HEAD/app/views/lsf-portal/v11/COSA-all-students.html) |  |  |
| [manage-healthy-start-vouchers](https://github.com/nhsbsa/manage-healthy-start-vouchers) | `^7.0.0-alpha.2` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/manage-healthy-start-vouchers/blob/HEAD/app/views/v1/applications.html) |  |  |
| [match-ohs-record](https://github.com/nhsbsa/match-ohs-record) | `^8.3.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/match-ohs-record/blob/HEAD/app/views/archive/mvp-2-dep-happy-path/mvp2-dep-added-dependant-to-record.html) |  |  |
| [McCloud-Choice](https://github.com/nhsbsa/McCloud-Choice) | `^10.3.1` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/McCloud-Choice/blob/HEAD/app/views/index.html) |  |  |
| [medical-examiner-service](https://github.com/nhsbsa/medical-examiner-service) | `^6.2.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/medical-examiner-service/blob/HEAD/app/views/current/ME-MEO/case/comms-concerns.html) | responsive-table |  |
| [medicines-management-prototype](https://github.com/nhsbsa/medicines-management-prototype) (proto) | `^7.0.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/medicines-management-prototype/blob/HEAD/templates/cdr-mock-1/action-submission-mock-1/action-submission--check-prices.html) |  |  |
| [nhs-student-bursaries-prototype](https://github.com/nhsbsa/nhs-student-bursaries-prototype) (proto) | `8.3.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/nhs-student-bursaries-prototype/blob/HEAD/app/views/DSA-internal/manage-allowance.html) |  |  |
| [pensions-contact-the-scheme](https://github.com/nhsbsa/pensions-contact-the-scheme) | `^10.4.2` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/pensions-contact-the-scheme/blob/HEAD/app/views/index.html) |  |  |
| [pensions-form-ordering](https://github.com/nhsbsa/pensions-form-ordering) | `^10.3.1` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/pensions-form-ordering/blob/HEAD/app/views/index.html) |  |  |
| [pensions-online-contact-form](https://github.com/nhsbsa/pensions-online-contact-form) | `^9.0.1` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/pensions-online-contact-form/blob/HEAD/app/views/index.html) |  |  |
| [ppc-new](https://github.com/nhsbsa/ppc-new) | `^10.6.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/ppc-new/blob/HEAD/app/views/ppc/iteration_2/DD-confirmation-Allpay-email.html) |  |  |
| [pprs-prototype](https://github.com/nhsbsa/pprs-prototype) (proto) | `^7.0.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/pprs-prototype/blob/HEAD/templates/monthly-table-horizontal.html) |  |  |
| [practice-run](https://github.com/nhsbsa/practice-run) | `^6.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/practice-run/blob/HEAD/Dropbox/My Mac (Natasha Dodds - MacBook Air)/Documents/Prototypes/contact-the-bsa/app/views/sprint-1/doc-added.html) |  |  |
| [suvpart2](https://github.com/nhsbsa/suvpart2) | `^10.6.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsbsa/suvpart2/blob/HEAD/app/views/pecs-web/data-entry-stats.html) |  |  |
| [update-pension-details](https://github.com/nhsbsa/update-pension-details) | `^10.6.1` | **responsive** | [`responsive`](https://github.com/nhsbsa/update-pension-details/blob/HEAD/app/views/index.html) |  |  |
| [ai-prototyping](https://github.com/nhsbsa/ai-prototyping) | `^10.4.2` | basic only |  |  |  |
| [bpor-branding-poc](https://github.com/nhsbsa/bpor-branding-poc) | `^10.4.2` | basic only |  |  |  |
| [cdr-client-prototype](https://github.com/nhsbsa/cdr-client-prototype) (proto) | `^9.6.0` | basic only |  |  |  |
| [data-hub](https://github.com/nhsbsa/data-hub) | `^10.6.1` | basic only |  |  |  |
| [design-system](https://github.com/nhsbsa/design-system) | `^3.1.0` | basic only |  |  |  |
| [ehic-ghic](https://github.com/nhsbsa/ehic-ghic) | `^10.0.0` | basic only |  |  |  |
| [exemption-checker](https://github.com/nhsbsa/exemption-checker) | `^10.6.0` | basic only |  |  |  |
| [HRT-PPC](https://github.com/nhsbsa/HRT-PPC) | `^10.6.0` | basic only |  |  |  |
| [hs-design-history](https://github.com/nhsbsa/hs-design-history) | `^4.0.0` | basic only |  |  |  |
| [hwhc-certificate-manager](https://github.com/nhsbsa/hwhc-certificate-manager) | `^10.6.0` | basic only |  |  |  |
| [hwhc-eligibility-checker](https://github.com/nhsbsa/hwhc-eligibility-checker) | `^10.3.1` | basic only |  |  |  |
| [jdr-login](https://github.com/nhsbsa/jdr-login) | `^10.4.2` | basic only |  |  |  |
| [lis-apply-refresh](https://github.com/nhsbsa/lis-apply-refresh) | `^10.6.0` | basic only |  |  |  |
| [margin-survey](https://github.com/nhsbsa/margin-survey) | `^9.6.3` | basic only |  |  |  |
| [mccloud-immediate-choice-prototype](https://github.com/nhsbsa/mccloud-immediate-choice-prototype) (proto) | `^10.0.0` | basic only |  |  |  |
| [medical-certificate-of-cause-of-death](https://github.com/nhsbsa/medical-certificate-of-cause-of-death) | `^8.0.2` | basic only |  |  |  |
| [my-hub-service-assessment](https://github.com/nhsbsa/my-hub-service-assessment) | `^10.4.2` | basic only |  |  |  |
| [mys-pharmacy](https://github.com/nhsbsa/mys-pharmacy) | `^10.4.2` | basic only |  |  |  |
| [nhs-volunteering-beta-prototype](https://github.com/nhsbsa/nhs-volunteering-beta-prototype) (proto) | `^9.6.3` | basic only |  |  |  |
| [nhsbsa-design-history](https://github.com/nhsbsa/nhsbsa-design-history) | `^4.0.0` | basic only |  |  |  |
| [nhsbsa-digital-playbook](https://github.com/nhsbsa/nhsbsa-digital-playbook) | `^8.3.0` | basic only |  |  |  |
| [nhsbsa-docs](https://github.com/nhsbsa/nhsbsa-docs) | `^6.1.2` | basic only |  |  |  |
| [nhsbsa-nihr-crp-prototype](https://github.com/nhsbsa/nhsbsa-nihr-crp-prototype) (proto) | `^10.0.0` | basic only |  |  |  |
| [nhsbsa-volunteering-prototype](https://github.com/nhsbsa/nhsbsa-volunteering-prototype) (proto) | `^6.1.0` | basic only |  |  |  |
| [nhsuk-matex](https://github.com/nhsbsa/nhsuk-matex) | `^10.6.0` | basic only |  |  |  |
| [nihr-bpor](https://github.com/nhsbsa/nihr-bpor) | `^10.6.1` | basic only |  |  |  |
| [nihr-public-prototype](https://github.com/nhsbsa/nihr-public-prototype) (proto) | `^10.6.1` | basic only |  |  |  |
| [pensions-redundancy-calculator](https://github.com/nhsbsa/pensions-redundancy-calculator) | `^10.0.0` | basic only |  |  |  |
| [prescription-training-package](https://github.com/nhsbsa/prescription-training-package) | `^10.1.0` | basic only |  |  |  |
| [research-playbook](https://github.com/nhsbsa/research-playbook) | `^4.0.0` | basic only |  |  |  |
| [self-assessment-test](https://github.com/nhsbsa/self-assessment-test) | `^9.0.1` | basic only |  |  |  |
| [TECS-2022](https://github.com/nhsbsa/TECS-2022) | `^10.6.0` | basic only |  |  |  |

### TechnologyEnhancedLearning (16)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [DLSBinonTest](https://github.com/TechnologyEnhancedLearning/DLSBinonTest) | `^6.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/TechnologyEnhancedLearning/DLSBinonTest/blob/HEAD/DigitalLearningSolutions.Web/Views/CookieConsent/CookiePolicy.cshtml) |  |  |
| [DLSBinonTest2](https://github.com/TechnologyEnhancedLearning/DLSBinonTest2) | `^6.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/TechnologyEnhancedLearning/DLSBinonTest2/blob/HEAD/DigitalLearningSolutions.Web/Views/CookieConsent/CookiePolicy.cshtml) |  |  |
| [DLSBinonTestUbuntu](https://github.com/TechnologyEnhancedLearning/DLSBinonTestUbuntu) | `^6.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/TechnologyEnhancedLearning/DLSBinonTestUbuntu/blob/HEAD/DigitalLearningSolutions.Web/Views/CookieConsent/CookiePolicy.cshtml) |  |  |
| [DLSBinonTestWin2](https://github.com/TechnologyEnhancedLearning/DLSBinonTestWin2) | `^6.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/TechnologyEnhancedLearning/DLSBinonTestWin2/blob/HEAD/DigitalLearningSolutions.Web/Views/CookieConsent/CookiePolicy.cshtml) |  |  |
| [DLSTestBinonWindows](https://github.com/TechnologyEnhancedLearning/DLSTestBinonWindows) | `^6.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/TechnologyEnhancedLearning/DLSTestBinonWindows/blob/HEAD/DigitalLearningSolutions.Web/Views/CookieConsent/CookiePolicy.cshtml) |  |  |
| [DLSV2](https://github.com/TechnologyEnhancedLearning/DLSV2) | `9.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/TechnologyEnhancedLearning/DLSV2/blob/HEAD/DigitalLearningSolutions.Web/Views/CompetencyAssessments/CompetencyAssessmentWorkingGroup.cshtml) |  |  |
| [DLS-LDACompetencyFrameworkPrototype](https://github.com/TechnologyEnhancedLearning/DLS-LDACompetencyFrameworkPrototype) (proto) | `^3.1.0` | basic only |  |  |  |
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
| [step1-proficiency-demo](https://github.com/nhselect/step1-proficiency-demo) | `^6.1.2` | **responsive** (legacy class) | [`responsive`](https://github.com/nhselect/step1-proficiency-demo/blob/HEAD/components/ProficiencyGroup.vue) |  |  |
| [cieh-human-factors](https://github.com/nhselect/cieh-human-factors) | `^5.2.1` | basic only |  |  |  |
| [cypmh-comms-toolbox](https://github.com/nhselect/cypmh-comms-toolbox) | `^5.2.1` | basic only |  |  |  |
| [cypmh-index](https://github.com/nhselect/cypmh-index) | `^5.2.1` | basic only |  |  |  |
| [home](https://github.com/nhselect/home) | `^5.2.1` | basic only |  |  |  |
| [matrix](https://github.com/nhselect/matrix) | `^5.2.1` | basic only |  |  |  |
| [nhs-elect-personal-styles](https://github.com/nhselect/nhs-elect-personal-styles) | `^5.2.1` | basic only |  |  |  |
| [resp-surge-skills-matrix](https://github.com/nhselect/resp-surge-skills-matrix) | `^6.1.0` | basic only |  |  |  |
| [step1-proficiencies](https://github.com/nhselect/step1-proficiencies) | `^6.1.0` | basic only |  |  |  |
| [step1-training](https://github.com/nhselect/step1-training) | `^5.2.1` | basic only |  |  |  |

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

### nhsconnect (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [nhslogin-partners](https://github.com/nhsconnect/nhslogin-partners) | `^2.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/nhsconnect/nhslogin-partners/blob/HEAD/app/views/features-and-roadmap.html) |  |  |

### nhsengland (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [innovation-service-transactional-frontend](https://github.com/nhsengland/innovation-service-transactional-frontend) | `^10.3.1` | **responsive** (legacy class), **sortable** | [`sortable`](https://github.com/nhsengland/innovation-service-transactional-frontend/blob/HEAD/src/modules/feature-modules/accessor/pages/innovations-needing-action/innovations-needing-action.component.html), [`responsive`](https://github.com/nhsengland/innovation-service-transactional-frontend/blob/HEAD/src/modules/feature-modules/accessor/pages/innovations-needing-action/innovations-needing-action.component.html) |  |  |

### NHSDigital (17)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [c2c-breast-screening-prototype](https://github.com/NHSDigital/c2c-breast-screening-prototype) (proto) | `^10.6.1` | **responsive** (legacy class), **sortable**, **striped** | [`striped`](https://github.com/NHSDigital/c2c-breast-screening-prototype/blob/HEAD/app/views/_macros/clinic-listing.html), [`sortable`](https://github.com/NHSDigital/c2c-breast-screening-prototype/blob/HEAD/app/views/batches/participants/index.html), [`responsive`](https://github.com/NHSDigital/c2c-breast-screening-prototype/blob/HEAD/app/views/batches/participants/index.html) |  |  |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) (proto) | `^10.6.1` | **responsive** (legacy class), **sortable** | [`sortable`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/views/appointments/_cancelled.html), [`responsive`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/views/appointments/_cancelled.html) | table |  |
| [mya-prototype](https://github.com/NHSDigital/mya-prototype) (proto) | `^10.2.2` | **responsive** (legacy class) | [`responsive`](https://github.com/NHSDigital/mya-prototype/blob/HEAD/app/views/site/cancel-a-date-range/sessions-and-bookings.html) |  |  |
| [nhs-eps-prototype](https://github.com/NHSDigital/nhs-eps-prototype) (proto) | `^8.1.0` | **responsive** (legacy class) | [`responsive`](https://github.com/NHSDigital/nhs-eps-prototype/blob/HEAD/app/views/epsmvp/_includes/clinical-details.html) |  |  |
| [book-vaccinations-prototype](https://github.com/NHSDigital/book-vaccinations-prototype) (proto) | `^10.3.1` | basic only |  |  |  |
| [cdp-portal](https://github.com/NHSDigital/cdp-portal) | `^8.1.1` | basic only |  |  |  |
| [DCH-NHS-app](https://github.com/NHSDigital/DCH-NHS-app) | `^10.3.1` | basic only |  |  |  |
| [healthstore-deployment-guidance-prototype](https://github.com/NHSDigital/healthstore-deployment-guidance-prototype) (proto) | `^10.4.2` | basic only |  |  |  |
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) (proto) | `^10.6.1` | basic only |  |  |  |
| [manage-vaccinations-in-schools-prototype](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype) (proto) | `^10.6.1` | basic only |  | table |  |
| [mya-provocotype](https://github.com/NHSDigital/mya-provocotype) | `^10.3.1` | basic only |  |  |  |
| [nhs-firstcontact-prototype-maternity-self-referral](https://github.com/NHSDigital/nhs-firstcontact-prototype-maternity-self-referral) (proto) | `^8.3.0` | basic only |  |  |  |
| [nhs-notify-web-cms](https://github.com/NHSDigital/nhs-notify-web-cms) | `^10.1.0` | basic only |  |  |  |
| [nhsuk-frontend-jinja](https://github.com/NHSDigital/nhsuk-frontend-jinja) | `^10.7.0` | basic only |  | table |  |
| [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components) | `^10.3.1` | basic only |  | table |  |
| [prototype-gp-registration](https://github.com/NHSDigital/prototype-gp-registration) (proto) | `^10.3.1` | basic only |  |  |  |
| [prototype-lung-health-check](https://github.com/NHSDigital/prototype-lung-health-check) (proto) | `^10.6.1` | basic only |  |  |  |

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

### ukhsa-collaboration (1)

| Repo | nhsuk-frontend | Variants used | Example files | Own table? | `moj-sortable-table`? |
|---|---|---|---|---|---|
| [ntbs_Beta](https://github.com/ukhsa-collaboration/ntbs_Beta) | `6.1.0` | basic only |  |  |  |

