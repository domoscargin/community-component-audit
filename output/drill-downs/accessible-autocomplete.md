# accessible-autocomplete: repo drill-down

Generated 2026-11-11 by [accessible-autocomplete-usage.mjs](../accessible-autocomplete-usage.mjs).

Which government repos use [alphagov/accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete) (latest npm release: 3.0.2). Repos are picked up via their package manifests: either a direct `accessible-autocomplete` dependency, or a transitive route — `hmrc-frontend` and `x-govuk-prototype-components` both bundle it (their wrapper components). `govuk-country-and-territory-autocomplete` (alphagov's specialised fork, latest 2.0.0) is tracked separately.

**Signals** come from scanning view/template files and autocomplete-named JS files: `init-call` (calls `accessibleAutocomplete`), `enhance-select` (the select-enhancement mode), `standalone-init` (free-text input mode), `rendered-classes` (`autocomplete__*` markup), and wrapper usage (HMRC, x-govuk, gem-c). Absence of signals usually means the initialisation lives in JS files outside the sampled paths — treat "no signals" as unknown, not unused.

## Summary

- **263 repos across 39 orgs use accessible-autocomplete** in some form (of 1359 scanned; 0 unavailable)
- **199 depend on it directly** (162 production, 37 prototypes) across **35 orgs**
- **11 use the country/territory package** (4 orgs)
- **59 get it only via hmrc-frontend** (11 orgs), **0 only via x-govuk-prototype-components**
- **148 have usage signals in sampled files**; modes seen: 105 select enhancement, 20 standalone input, 10 both
- Cross-refs: **76 also have their own autocomplete implementation** (18 orgs) in the audit cluster (see [autocomplete.md](./autocomplete.md)); 0 consume gem-c wrapper classes

## Repos by organisation

### ministryofjustice (55)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [analytics-platform-control-panel](https://github.com/ministryofjustice/analytics-platform-control-panel) | direct `2.0.4` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/analytics-platform-control-panel/blob/HEAD/controlpanel/frontend/static/components/autocomplete/autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/analytics-platform-control-panel/blob/HEAD/controlpanel/frontend/static/components/autocomplete/autocomplete.js), [`rendered-classes`](https://github.com/ministryofjustice/analytics-platform-control-panel/blob/HEAD/controlpanel/frontend/static/components/autocomplete/autocomplete.js) | yes |
| [data-platform-app](https://github.com/ministryofjustice/data-platform-app) | direct `3.0.2` | standalone input | `rendered-classes`, `init-call`, `standalone-init` | [`rendered-classes`](https://github.com/ministryofjustice/data-platform-app/blob/HEAD/js/components/add-another-autocomplete/add-another-autocomplete.js), [`init-call`](https://github.com/ministryofjustice/data-platform-app/blob/HEAD/js/components/entra-user-autocomplete/entra-user-autocomplete.js), [`standalone-init`](https://github.com/ministryofjustice/data-platform-app/blob/HEAD/js/components/entra-user-autocomplete/entra-user-autocomplete.js) |  |
| [hmpps-activities-management](https://github.com/ministryofjustice/hmpps-activities-management) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-activities-management/blob/HEAD/frontend/components/autocomplete/autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-activities-management/blob/HEAD/frontend/components/autocomplete/autocomplete.js), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-activities-management/blob/HEAD/frontend/components/autocomplete/autocomplete.js) | yes |
| [hmpps-court-appearance-scheduler-ui](https://github.com/ministryofjustice/hmpps-court-appearance-scheduler-ui) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-court-appearance-scheduler-ui/blob/HEAD/assets/js/autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-court-appearance-scheduler-ui/blob/HEAD/assets/js/autocomplete.js), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-court-appearance-scheduler-ui/blob/HEAD/assets/js/autocomplete.js) |  |
| [hmpps-electronic-monitoring-create-an-order](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order) | direct `^3.0.1` | both | `init-call`, `enhance-select`, `standalone-init` | [`init-call`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order/blob/HEAD/server/views/components/accessible-autocomplete/macro.njk), [`enhance-select`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order/blob/HEAD/server/views/components/accessible-autocomplete/template.njk), [`standalone-init`](https://github.com/ministryofjustice/hmpps-electronic-monitoring-create-an-order/blob/HEAD/server/views/pages/order/about-the-device-wearer/device-wearer.njk) | yes |
| [hmpps-external-movements-ui](https://github.com/ministryofjustice/hmpps-external-movements-ui) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-external-movements-ui/blob/HEAD/assets/js/autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-external-movements-ui/blob/HEAD/assets/js/autocomplete.js), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-external-movements-ui/blob/HEAD/assets/js/autocomplete.js) |  |
| [hmpps-incident-reporting](https://github.com/ministryofjustice/hmpps-incident-reporting) | direct `^3.0.2` | both | `init-call`, `standalone-init`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-incident-reporting/blob/HEAD/server/views/macros/accessible-autocomplete/macro.njk), [`standalone-init`](https://github.com/ministryofjustice/hmpps-incident-reporting/blob/HEAD/server/views/pages/dashboard/index.njk), [`enhance-select`](https://github.com/ministryofjustice/hmpps-incident-reporting/blob/HEAD/assets/js/components/accessibleAutocomplete.ts) | yes |
| [hmpps-prisoner-profile](https://github.com/ministryofjustice/hmpps-prisoner-profile) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-prisoner-profile/blob/HEAD/assets/js/shared/autocomplete.ts), [`enhance-select`](https://github.com/ministryofjustice/hmpps-prisoner-profile/blob/HEAD/assets/js/shared/autocomplete.ts), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-prisoner-profile/blob/HEAD/assets/js/shared/autocomplete.ts) | yes |
| [hmpps-release-scheduler-ui](https://github.com/ministryofjustice/hmpps-release-scheduler-ui) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-release-scheduler-ui/blob/HEAD/assets/js/autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-release-scheduler-ui/blob/HEAD/assets/js/autocomplete.js), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-release-scheduler-ui/blob/HEAD/assets/js/autocomplete.js) |  |
| [hmpps-remand-and-sentencing](https://github.com/ministryofjustice/hmpps-remand-and-sentencing) | direct `3.0.2` | both | `init-call`, `standalone-init`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-remand-and-sentencing/blob/HEAD/assets/js/autoCompleteCourtName.js), [`standalone-init`](https://github.com/ministryofjustice/hmpps-remand-and-sentencing/blob/HEAD/assets/js/autoCompleteCourtName.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-remand-and-sentencing/blob/HEAD/assets/js/autoCompleteLegacySentenceType.js) |  |
| [hmpps-restricted-patients-ui](https://github.com/ministryofjustice/hmpps-restricted-patients-ui) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-restricted-patients-ui/blob/HEAD/assets/js/autocomplete-agency.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-restricted-patients-ui/blob/HEAD/assets/js/autocomplete-agency.js), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-restricted-patients-ui/blob/HEAD/assets/js/autocomplete-agency.js) | yes |
| [hmpps-single-accommodation-service-ui](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui/blob/HEAD/assets/js/accessibleAutocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui/blob/HEAD/assets/js/accessibleAutocomplete.js), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-single-accommodation-service-ui/blob/HEAD/assets/js/accessibleAutocomplete.js) | yes |
| [hmpps-transfer-scheduler-ui](https://github.com/ministryofjustice/hmpps-transfer-scheduler-ui) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-transfer-scheduler-ui/blob/HEAD/assets/js/autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-transfer-scheduler-ui/blob/HEAD/assets/js/autocomplete.js), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-transfer-scheduler-ui/blob/HEAD/assets/js/autocomplete.js) |  |
| [hmpps-video-conference-schedule-ui](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui/blob/HEAD/assets/js/autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui/blob/HEAD/assets/js/autocomplete.js), [`rendered-classes`](https://github.com/ministryofjustice/hmpps-video-conference-schedule-ui/blob/HEAD/assets/js/autocomplete.js) | yes |
| [manage-a-workforce-ui](https://github.com/ministryofjustice/manage-a-workforce-ui) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/ministryofjustice/manage-a-workforce-ui/blob/HEAD/assets/js/autocomplete-email-v2.js), [`enhance-select`](https://github.com/ministryofjustice/manage-a-workforce-ui/blob/HEAD/assets/js/autocomplete-email-v2.js), [`rendered-classes`](https://github.com/ministryofjustice/manage-a-workforce-ui/blob/HEAD/assets/js/autocomplete-email-v2.js) |  |
| [apply-for-legal-aid-prototype](https://github.com/ministryofjustice/apply-for-legal-aid-prototype) (proto) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/apply-for-legal-aid-prototype/blob/HEAD/app/assets/autocomplete/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/ministryofjustice/apply-for-legal-aid-prototype/blob/HEAD/app/assets/autocomplete/accessible-autocomplete.min.js) |  |
| [calculate-release-dates](https://github.com/ministryofjustice/calculate-release-dates) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/calculate-release-dates/blob/HEAD/assets/js/autoCompletePrisonName.js), [`enhance-select`](https://github.com/ministryofjustice/calculate-release-dates/blob/HEAD/assets/js/autoCompletePrisonName.js) |  |
| [Claim-for-Crown-Court-Defence](https://github.com/ministryofjustice/Claim-for-Crown-Court-Defence) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/Claim-for-Crown-Court-Defence/blob/HEAD/app/javascript/modules/Helpers.Autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/Claim-for-Crown-Court-Defence/blob/HEAD/app/javascript/modules/Helpers.Autocomplete.js) |  |
| [crmfour-proto](https://github.com/ministryofjustice/crmfour-proto) | direct `^2.0.4` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/crmfour-proto/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/ministryofjustice/crmfour-proto/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [dwf-prototype](https://github.com/ministryofjustice/dwf-prototype) (proto) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/dwf-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/ministryofjustice/dwf-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [hmpps-activity-management-prototype](https://github.com/ministryofjustice/hmpps-activity-management-prototype) (proto) | direct `^2.0.4` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-activity-management-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-activity-management-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) | yes |
| [hmpps-approved-premises-ui](https://github.com/ministryofjustice/hmpps-approved-premises-ui) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-approved-premises-ui/blob/HEAD/assets/js/accessibleAutocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-approved-premises-ui/blob/HEAD/assets/js/accessibleAutocomplete.js) | yes |
| [hmpps-arns-assessment-platform-ui](https://github.com/ministryofjustice/hmpps-arns-assessment-platform-ui) | direct `^3.0.2` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/ministryofjustice/hmpps-arns-assessment-platform-ui/blob/HEAD/server/forms/sentence-plan/components/accessible-autocomplete/accessibleAutocomplete.tsx), [`standalone-init`](https://github.com/ministryofjustice/hmpps-arns-assessment-platform-ui/blob/HEAD/server/forms/sentence-plan/components/accessible-autocomplete/accessible-autocomplete.mjs) | yes |
| [hmpps-community-accommodation-tier-2-bail-prototypes](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes) (proto) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes/blob/HEAD/app/assets/javascripts/autocomplete.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-bail-prototypes/blob/HEAD/app/assets/javascripts/autocomplete.js) | yes |
| [hmpps-court-cases-release-dates](https://github.com/ministryofjustice/hmpps-court-cases-release-dates) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-court-cases-release-dates/blob/HEAD/assets/js/components/autocompleteFilter.ts), [`enhance-select`](https://github.com/ministryofjustice/hmpps-court-cases-release-dates/blob/HEAD/assets/js/components/autocompleteFilter.ts) |  |
| [hmpps-identify-remand-periods](https://github.com/ministryofjustice/hmpps-identify-remand-periods) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-identify-remand-periods/blob/HEAD/assets/js/autoCompletePrisonName.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-identify-remand-periods/blob/HEAD/assets/js/autoCompletePrisonName.js) |  |
| [hmpps-interventions-ui](https://github.com/ministryofjustice/hmpps-interventions-ui) | direct `^3.0.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-interventions-ui/blob/HEAD/server/views/amendAReferral/amendProbationOffice.njk), [`enhance-select`](https://github.com/ministryofjustice/hmpps-interventions-ui/blob/HEAD/server/views/amendAReferral/amendProbationOffice.njk) | yes |
| [hmpps-jobs-board-ui](https://github.com/ministryofjustice/hmpps-jobs-board-ui) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-jobs-board-ui/blob/HEAD/server/views/macros/accessible-autocomplete/macro.njk), [`enhance-select`](https://github.com/ministryofjustice/hmpps-jobs-board-ui/blob/HEAD/server/views/macros/accessible-autocomplete/template.njk) | yes |
| [hmpps-manage-users](https://github.com/ministryofjustice/hmpps-manage-users) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-manage-users/blob/HEAD/assets/js/autoComplete.ts), [`enhance-select`](https://github.com/ministryofjustice/hmpps-manage-users/blob/HEAD/assets/js/autoComplete.ts) | yes |
| [hmpps-manage-users-temp-rewrite](https://github.com/ministryofjustice/hmpps-manage-users-temp-rewrite) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-manage-users-temp-rewrite/blob/HEAD/assets/js/autoComplete.ts), [`enhance-select`](https://github.com/ministryofjustice/hmpps-manage-users-temp-rewrite/blob/HEAD/assets/js/autoComplete.ts) | yes |
| [hmpps-managing-prisoner-apps-staff-ui](https://github.com/ministryofjustice/hmpps-managing-prisoner-apps-staff-ui) | direct `^3.0.2` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/ministryofjustice/hmpps-managing-prisoner-apps-staff-ui/blob/HEAD/server/views/components/accessibleAutocomplete/macro.njk), [`standalone-init`](https://github.com/ministryofjustice/hmpps-managing-prisoner-apps-staff-ui/blob/HEAD/server/views/components/accessibleAutocomplete/macro.njk) | yes |
| [hmpps-registers](https://github.com/ministryofjustice/hmpps-registers) | direct `3.0.2` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/ministryofjustice/hmpps-registers/blob/HEAD/assets/js/autoCompleteCounty.js), [`standalone-init`](https://github.com/ministryofjustice/hmpps-registers/blob/HEAD/assets/js/autoCompleteCounty.js) |  |
| [hmpps-temporary-accommodation-ui](https://github.com/ministryofjustice/hmpps-temporary-accommodation-ui) | direct `^3.0.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-temporary-accommodation-ui/blob/HEAD/server/views/applications/pages/accommodation-need/contact-details/practitioner-pdu.njk), [`enhance-select`](https://github.com/ministryofjustice/hmpps-temporary-accommodation-ui/blob/HEAD/server/views/applications/pages/accommodation-need/contact-details/practitioner-pdu.njk) |  |
| [make-recall-decision-ui](https://github.com/ministryofjustice/make-recall-decision-ui) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/make-recall-decision-ui/blob/HEAD/server/views/components/accessible-autocomplete/macro.njk), [`enhance-select`](https://github.com/ministryofjustice/make-recall-decision-ui/blob/HEAD/server/views/components/accessible-autocomplete/template.njk) | yes |
| [prepare-a-case](https://github.com/ministryofjustice/prepare-a-case) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/prepare-a-case/blob/HEAD/server/views/components/accessible-autocomplete/template.njk), [`enhance-select`](https://github.com/ministryofjustice/prepare-a-case/blob/HEAD/server/views/components/accessible-autocomplete/template.njk) | yes |
| [fb-editor](https://github.com/ministryofjustice/fb-editor) | direct `^2.0.4` |  |  |  |  |
| [fb-runner](https://github.com/ministryofjustice/fb-runner) | direct `^2.0.4` |  |  |  |  |
| [hmpps-accredited-programmes-manage-and-deliver-ui](https://github.com/ministryofjustice/hmpps-accredited-programmes-manage-and-deliver-ui) | direct `^3.0.2` |  |  |  | yes |
| [hmpps-book-a-prison-visit-ui](https://github.com/ministryofjustice/hmpps-book-a-prison-visit-ui) | direct `^3.0.2` |  |  |  |  |
| [hmpps-book-secure-move-frontend](https://github.com/ministryofjustice/hmpps-book-secure-move-frontend) | direct `2.0.4`<br>hmrc `7.30.0` |  |  |  | yes |
| [hmpps-community-support-ui](https://github.com/ministryofjustice/hmpps-community-support-ui) | direct `3.0.2` |  |  |  |  |
| [hmpps-contacts-ui](https://github.com/ministryofjustice/hmpps-contacts-ui) | direct `^3.0.2` |  |  |  | yes |
| [hmpps-official-visits-prototype](https://github.com/ministryofjustice/hmpps-official-visits-prototype) (proto) | direct `^2.0.4` |  |  |  | yes |
| [hmpps-probation-supervision-contacts-ui](https://github.com/ministryofjustice/hmpps-probation-supervision-contacts-ui) | direct `3.0.2` |  |  |  | yes |
| [hmpps-send-legal-mail-staff-ui](https://github.com/ministryofjustice/hmpps-send-legal-mail-staff-ui) | direct `^3.0.2` |  |  |  |  |
| [hmpps-strengths-based-needs-assessments-ui](https://github.com/ministryofjustice/hmpps-strengths-based-needs-assessments-ui) | direct `^3.0.1` |  |  |  |  |
| [hmpps-visit-someone-in-prison-prototype](https://github.com/ministryofjustice/hmpps-visit-someone-in-prison-prototype) (proto) | direct `^3.0.2`<br>hmrc `7.44.0` |  |  |  |  |
| [laa-amend-a-claim](https://github.com/ministryofjustice/laa-amend-a-claim) | direct `^3.0.2` |  |  |  |  |
| [laa-apply-for-criminal-legal-aid](https://github.com/ministryofjustice/laa-apply-for-criminal-legal-aid) | direct `^3.0.2` |  |  |  |  |
| [laa-submit-a-bulk-claim](https://github.com/ministryofjustice/laa-submit-a-bulk-claim) | direct `^3.0.2` |  |  |  |  |
| [launchpad-prototype](https://github.com/ministryofjustice/launchpad-prototype) (proto) | direct `^3.0.0` |  |  |  |  |
| [send-legal-mail-to-prisons](https://github.com/ministryofjustice/send-legal-mail-to-prisons) | direct `^3.0.2` |  |  |  |  |
| [hmpps-interventions-prototype](https://github.com/ministryofjustice/hmpps-interventions-prototype) (proto) | hmrc `7.34.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ministryofjustice/hmpps-interventions-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/ministryofjustice/hmpps-interventions-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) | yes |
| [accredited-programmes-community-prototype](https://github.com/ministryofjustice/accredited-programmes-community-prototype) (proto) | hmrc `6.53.0` |  |  |  |  |
| [cvl-improvements-prototype](https://github.com/ministryofjustice/cvl-improvements-prototype) (proto) | hmrc `^7.41.0` |  |  |  |  |

### DFE-Digital (35)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [fips-v4](https://github.com/DFE-Digital/fips-v4) | direct `^3.0.1` | both | `init-call`, `standalone-init`, `rendered-classes`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/fips-v4/blob/HEAD/app/views/v-spk-assessments/products/index.html), [`standalone-init`](https://github.com/DFE-Digital/fips-v4/blob/HEAD/app/views/v-spk-assessments/products/index.html), [`rendered-classes`](https://github.com/DFE-Digital/fips-v4/blob/HEAD/app/views/v-spk-assessments/products/index.html), [`enhance-select`](https://github.com/DFE-Digital/fips-v4/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [govuk-ghwt-prototype](https://github.com/DFE-Digital/govuk-ghwt-prototype) (proto) | direct `^2.0.3` | both | `init-call`, `enhance-select`, `rendered-classes`, `standalone-init` | [`init-call`](https://github.com/DFE-Digital/govuk-ghwt-prototype/blob/HEAD/app/views/_components/autocomplete/template.njk), [`enhance-select`](https://github.com/DFE-Digital/govuk-ghwt-prototype/blob/HEAD/app/views/_components/autocomplete/template.njk), [`rendered-classes`](https://github.com/DFE-Digital/govuk-ghwt-prototype/blob/HEAD/app/views/_components/autocomplete/template.njk), [`standalone-init`](https://github.com/DFE-Digital/govuk-ghwt-prototype/blob/HEAD/app/views/getsupport/describe/local-authority-with-autocomplete.html) | yes |
| [apply-for-qts-prototype](https://github.com/DFE-Digital/apply-for-qts-prototype) (proto) | direct `^2.0.4`<br>country `^1.0.2` | select enhancement | `country-package-markup`, `init-call`, `enhance-select` | [`country-package-markup`](https://github.com/DFE-Digital/apply-for-qts-prototype/blob/HEAD/app/views/eligibility-checker/ineligible-country-no-links.html), [`init-call`](https://github.com/DFE-Digital/apply-for-qts-prototype/blob/HEAD/app/views/eligibility-checker/policy-led/experiments/question-age-range.html), [`enhance-select`](https://github.com/DFE-Digital/apply-for-qts-prototype/blob/HEAD/app/views/eligibility-checker/policy-led/experiments/question-age-range.html) | yes |
| [apply-for-teacher-training](https://github.com/DFE-Digital/apply-for-teacher-training) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/DFE-Digital/apply-for-teacher-training/blob/HEAD/app/javascript/autocompletes/init-autocomplete.js), [`enhance-select`](https://github.com/DFE-Digital/apply-for-teacher-training/blob/HEAD/app/javascript/autocompletes/init-autocomplete.js), [`rendered-classes`](https://github.com/DFE-Digital/apply-for-teacher-training/blob/HEAD/app/javascript/autocompletes/init-dfe-autocomplete.spec.js) |  |
| [find-information-about-schools-and-trusts](https://github.com/DFE-Digital/find-information-about-schools-and-trusts) | direct `^3.0.0` | standalone input | `init-call`, `standalone-init`, `rendered-classes` | [`init-call`](https://github.com/DFE-Digital/find-information-about-schools-and-trusts/blob/HEAD/DfE.FindInformationAcademiesTrusts/assets/javascripts/autocomplete.js), [`standalone-init`](https://github.com/DFE-Digital/find-information-about-schools-and-trusts/blob/HEAD/DfE.FindInformationAcademiesTrusts/assets/javascripts/autocomplete.js), [`rendered-classes`](https://github.com/DFE-Digital/find-information-about-schools-and-trusts/blob/HEAD/DfE.FindInformationAcademiesTrusts/assets/javascripts/autocomplete.js) |  |
| [itt-mentor-services](https://github.com/DFE-Digital/itt-mentor-services) | direct `^3.0.2` | standalone input | `init-call`, `standalone-init`, `rendered-classes` | [`init-call`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/javascript/controllers/autocomplete_controller.js), [`standalone-init`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/javascript/controllers/autocomplete_controller.js), [`rendered-classes`](https://github.com/DFE-Digital/itt-mentor-services/blob/HEAD/app/javascript/controllers/autocomplete_controller.js) | yes |
| [record-concerns-support-trusts](https://github.com/DFE-Digital/record-concerns-support-trusts) | direct `^2.0.3` | standalone input | `init-call`, `standalone-init`, `rendered-classes` | [`init-call`](https://github.com/DFE-Digital/record-concerns-support-trusts/blob/HEAD/ConcernsCaseWork/ConcernsCaseWork/Pages/Case/CreateCase/SelectTeamLeader.cshtml), [`standalone-init`](https://github.com/DFE-Digital/record-concerns-support-trusts/blob/HEAD/ConcernsCaseWork/ConcernsCaseWork/Pages/Case/CreateCase/SelectTeamLeader.cshtml), [`rendered-classes`](https://github.com/DFE-Digital/record-concerns-support-trusts/blob/HEAD/ConcernsCaseWork/ConcernsCaseWork/Pages/Case/CreateCase/SelectTeamLeader.cshtml) |  |
| [register-trainee-teachers](https://github.com/DFE-Digital/register-trainee-teachers) | direct `^3.0.1`<br>country `^2.0.0` | select enhancement | `rendered-classes`, `init-call`, `enhance-select` | [`rendered-classes`](https://github.com/DFE-Digital/register-trainee-teachers/blob/HEAD/app/javascript/scripts/components/form_components/autocomplete/helpers.js), [`init-call`](https://github.com/DFE-Digital/register-trainee-teachers/blob/HEAD/app/javascript/scripts/components/form_components/autocomplete/script.js), [`enhance-select`](https://github.com/DFE-Digital/register-trainee-teachers/blob/HEAD/app/javascript/scripts/components/form_components/autocomplete/script.js) | yes |
| [register-training-providers](https://github.com/DFE-Digital/register-training-providers) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/DFE-Digital/register-training-providers/blob/HEAD/app/javascript/autocomplete.js), [`enhance-select`](https://github.com/DFE-Digital/register-training-providers/blob/HEAD/app/javascript/autocomplete.js), [`rendered-classes`](https://github.com/DFE-Digital/register-training-providers/blob/HEAD/app/javascript/autocomplete.js) | yes |
| [teaching-vacancies](https://github.com/DFE-Digital/teaching-vacancies) | direct `^3.0.2` | standalone input | `init-call`, `standalone-init`, `rendered-classes` | [`init-call`](https://github.com/DFE-Digital/teaching-vacancies/blob/HEAD/app/assets/javascript/js_components/autocomplete/autocomplete.js), [`standalone-init`](https://github.com/DFE-Digital/teaching-vacancies/blob/HEAD/app/assets/javascript/js_components/autocomplete/autocomplete.js), [`rendered-classes`](https://github.com/DFE-Digital/teaching-vacancies/blob/HEAD/app/assets/javascript/js_components/autocomplete/autocomplete.js) |  |
| [csc-swr-ur-prototype](https://github.com/DFE-Digital/csc-swr-ur-prototype) (proto) | direct `^2.0.3` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/csc-swr-ur-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/DFE-Digital/csc-swr-ur-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) | yes |
| [dfe-complete-conversions-transfers-and-changes](https://github.com/DFE-Digital/dfe-complete-conversions-transfers-and-changes) | direct `^3.0.0` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/DFE-Digital/dfe-complete-conversions-transfers-and-changes/blob/HEAD/app/javascript/user_autocomplete.js), [`standalone-init`](https://github.com/DFE-Digital/dfe-complete-conversions-transfers-and-changes/blob/HEAD/app/javascript/user_autocomplete.js) |  |
| [early-years-foundation-recovery](https://github.com/DFE-Digital/early-years-foundation-recovery) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/early-years-foundation-recovery/blob/HEAD/app/javascript/controllers/autocomplete_controller.js), [`enhance-select`](https://github.com/DFE-Digital/early-years-foundation-recovery/blob/HEAD/app/javascript/controllers/autocomplete_controller.js) |  |
| [early-years-foundation-recovery-dotnet](https://github.com/DFE-Digital/early-years-foundation-recovery-dotnet) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/early-years-foundation-recovery-dotnet/blob/HEAD/app/javascript/controllers/autocomplete_controller.js), [`enhance-select`](https://github.com/DFE-Digital/early-years-foundation-recovery-dotnet/blob/HEAD/app/javascript/controllers/autocomplete_controller.js) |  |
| [education-benchmarking-and-insights](https://github.com/DFE-Digital/education-benchmarking-and-insights) | direct `^3.0.2` | select enhancement | `enhance-select`, `init-call` | [`enhance-select`](https://github.com/DFE-Digital/education-benchmarking-and-insights/blob/HEAD/front-end-components/src/types/accessible-autocomplete.d.ts), [`init-call`](https://github.com/DFE-Digital/education-benchmarking-and-insights/blob/HEAD/web/src/Web.App/types/accessible-autocomplete.d.ts) | yes |
| [education-provider-registry-web](https://github.com/DFE-Digital/education-provider-registry-web) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/education-provider-registry-web/blob/HEAD/src/DfE.EducationProviderRegistry.Web.Mvc/wwwroot/js/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/DFE-Digital/education-provider-registry-web/blob/HEAD/src/DfE.EducationProviderRegistry.Web.Mvc/wwwroot/js/accessible-autocomplete.min.js) |  |
| [feat](https://github.com/DFE-Digital/feat) | direct `^3.0.1` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/DFE-Digital/feat/blob/HEAD/web/feat.web/Pages/Location.cshtml), [`standalone-init`](https://github.com/DFE-Digital/feat/blob/HEAD/web/feat.web/Pages/Location.cshtml) |  |
| [fiat-prototype](https://github.com/DFE-Digital/fiat-prototype) (proto) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/fiat-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/DFE-Digital/fiat-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [gias-transformation-prototype](https://github.com/DFE-Digital/gias-transformation-prototype) (proto) | direct `^3.0.1` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/DFE-Digital/gias-transformation-prototype/blob/HEAD/app/views/results.html), [`standalone-init`](https://github.com/DFE-Digital/gias-transformation-prototype/blob/HEAD/app/views/results.html) |  |
| [register-early-career-teachers-public](https://github.com/DFE-Digital/register-early-career-teachers-public) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/register-early-career-teachers-public/blob/HEAD/app/assets/javascripts/autocomplete.js), [`enhance-select`](https://github.com/DFE-Digital/register-early-career-teachers-public/blob/HEAD/app/assets/javascripts/autocomplete.js) |  |
| [trs-support-console](https://github.com/DFE-Digital/trs-support-console) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/trs-support-console/blob/HEAD/app/assets/javascripts/components/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/DFE-Digital/trs-support-console/blob/HEAD/app/assets/javascripts/components/accessible-autocomplete.min.js) | yes |
| [tte-prototype](https://github.com/DFE-Digital/tte-prototype) (proto) | direct `^3.0.1`<br>hmrc `7.41.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/tte-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.js), [`enhance-select`](https://github.com/DFE-Digital/tte-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.js) |  |
| [buy-for-your-school](https://github.com/DFE-Digital/buy-for-your-school) | direct `^3.0.0` |  | `init-call` | [`init-call`](https://github.com/DFE-Digital/buy-for-your-school/blob/HEAD/app/javascript/components/autocomplete.js) | yes |
| [get-into-teaching-app](https://github.com/DFE-Digital/get-into-teaching-app) | direct `^3.0.1` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/DFE-Digital/get-into-teaching-app/blob/HEAD/app/webpacker/packs/accessible_autocomplete.js) |  |
| [claim-additional-payments-for-teaching](https://github.com/DFE-Digital/claim-additional-payments-for-teaching) | direct `^3.0.1` |  |  |  |  |
| [dfe-mps-prototype](https://github.com/DFE-Digital/dfe-mps-prototype) (proto) | direct `^1.6.2` |  |  |  |  |
| [find-a-lost-trn](https://github.com/DFE-Digital/find-a-lost-trn) | direct `^3.0.2` |  |  |  |  |
| [manage-free-school-projects](https://github.com/DFE-Digital/manage-free-school-projects) | direct `^3.0.0` |  |  |  |  |
| [npq-registration](https://github.com/DFE-Digital/npq-registration) | direct `^3.0.2`<br>country `^2.0.0` |  |  |  |  |
| [teacher-training-entitlement](https://github.com/DFE-Digital/teacher-training-entitlement) | direct `^3.0.2`<br>country `^2.0.0`<br>hmrc `^7.38.0` |  |  |  |  |
| [check-your-eligibility-prototype](https://github.com/DFE-Digital/check-your-eligibility-prototype) (proto) | hmrc `^6.97.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DFE-Digital/check-your-eligibility-prototype/blob/HEAD/app/assets/javascripts/autocomplete.js), [`enhance-select`](https://github.com/DFE-Digital/check-your-eligibility-prototype/blob/HEAD/app/assets/javascripts/autocomplete.js) | yes |
| [apply-for-qualified-teacher-status](https://github.com/DFE-Digital/apply-for-qualified-teacher-status) | country `^2.0.0` |  | `country-package-markup` | [`country-package-markup`](https://github.com/DFE-Digital/apply-for-qualified-teacher-status/blob/HEAD/app/javascript/controllers/location_picker_autocomplete_controller.js) |  |
| [aqts-prototype](https://github.com/DFE-Digital/aqts-prototype) (proto) | hmrc `^6.3.0` |  | `country-package-markup` | [`country-package-markup`](https://github.com/DFE-Digital/aqts-prototype/blob/HEAD/app/views/apply/AQTS-372/new-quals-v1-p2.html) |  |
| [ecf2-prototype](https://github.com/DFE-Digital/ecf2-prototype) (proto) | hmrc `^7.27.0` |  |  |  |  |
| [itt-mentor-payment-sampling-clawback](https://github.com/DFE-Digital/itt-mentor-payment-sampling-clawback) | hmrc `^6.27.0` |  |  |  |  |

### DEFRA (24)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [aqie-dataselector-frontend](https://github.com/DEFRA/aqie-dataselector-frontend) | direct `^3.0.1` | both | `init-call`, `standalone-init`, `rendered-classes`, `enhance-select` | [`init-call`](https://github.com/DEFRA/aqie-dataselector-frontend/blob/HEAD/src/server/add_pollutant/index.njk), [`standalone-init`](https://github.com/DEFRA/aqie-dataselector-frontend/blob/HEAD/src/server/add_pollutant/index.njk), [`rendered-classes`](https://github.com/DEFRA/aqie-dataselector-frontend/blob/HEAD/src/server/add_pollutant/index.njk), [`enhance-select`](https://github.com/DEFRA/aqie-dataselector-frontend/blob/HEAD/src/client/javascripts/accessible-autocomplete.js) |  |
| [lis-infra-ui-services](https://github.com/DEFRA/lis-infra-ui-services) | direct `3.0.1` | standalone input | `rendered-classes`, `init-call`, `standalone-init` | [`rendered-classes`](https://github.com/DEFRA/lis-infra-ui-services/blob/HEAD/src/nunjucks/components/autocomplete/macro.njk), [`init-call`](https://github.com/DEFRA/lis-infra-ui-services/blob/HEAD/src/components/autocomplete.js), [`standalone-init`](https://github.com/DEFRA/lis-infra-ui-services/blob/HEAD/src/components/autocomplete.js) | yes |
| [marine-licensing-frontend](https://github.com/DEFRA/marine-licensing-frontend) | direct `3.0.2` | select enhancement | `rendered-classes`, `init-call`, `enhance-select` | [`rendered-classes`](https://github.com/DEFRA/marine-licensing-frontend/blob/HEAD/src/client/javascripts/accessible-autocomplete/dropdown-arrow-down.test.js), [`init-call`](https://github.com/DEFRA/marine-licensing-frontend/blob/HEAD/src/client/javascripts/accessible-autocomplete/index.js), [`enhance-select`](https://github.com/DEFRA/marine-licensing-frontend/blob/HEAD/src/client/javascripts/accessible-autocomplete/index.js) | yes |
| [trade-imports-animals-frontend](https://github.com/DEFRA/trade-imports-animals-frontend) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/DEFRA/trade-imports-animals-frontend/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js), [`enhance-select`](https://github.com/DEFRA/trade-imports-animals-frontend/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js), [`rendered-classes`](https://github.com/DEFRA/trade-imports-animals-frontend/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js) | yes |
| [trade-imports-plants-frontend](https://github.com/DEFRA/trade-imports-plants-frontend) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/DEFRA/trade-imports-plants-frontend/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js), [`enhance-select`](https://github.com/DEFRA/trade-imports-plants-frontend/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js), [`rendered-classes`](https://github.com/DEFRA/trade-imports-plants-frontend/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js) | yes |
| [forms-designer](https://github.com/DEFRA/forms-designer) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DEFRA/forms-designer/blob/HEAD/client/src/javascripts/accessible-autocomplete-enhance.js), [`enhance-select`](https://github.com/DEFRA/forms-designer/blob/HEAD/client/src/javascripts/accessible-autocomplete-enhance.js) | yes |
| [forms-engine-plugin](https://github.com/DEFRA/forms-engine-plugin) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DEFRA/forms-engine-plugin/blob/HEAD/src/client/javascripts/autocomplete.js), [`enhance-select`](https://github.com/DEFRA/forms-engine-plugin/blob/HEAD/src/client/javascripts/autocomplete.js) |  |
| [phi-frontend](https://github.com/DEFRA/phi-frontend) | direct `3.0.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DEFRA/phi-frontend/blob/HEAD/src/client/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/DEFRA/phi-frontend/blob/HEAD/src/client/assets/javascripts/accessible-autocomplete.min.js) |  |
| [rpa-ai-guidance-hub-prototype](https://github.com/DEFRA/rpa-ai-guidance-hub-prototype) (proto) | direct `3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DEFRA/rpa-ai-guidance-hub-prototype/blob/HEAD/app/views/2026-09-24-context-pane/hub/page.njk), [`enhance-select`](https://github.com/DEFRA/rpa-ai-guidance-hub-prototype/blob/HEAD/app/views/2026-09-24-context-pane/hub/page.njk) |  |
| [trade-imports-plants-prototype](https://github.com/DEFRA/trade-imports-plants-prototype) (proto) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/DEFRA/trade-imports-plants-prototype/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js), [`enhance-select`](https://github.com/DEFRA/trade-imports-plants-prototype/blob/HEAD/src/client/javascripts/components/accessible-autocomplete.js) | yes |
| [aphw-ddi-enforcement](https://github.com/DEFRA/aphw-ddi-enforcement) | direct `^2.0.4` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/DEFRA/aphw-ddi-enforcement/blob/HEAD/app/frontend/accessible-autocomplete/index.js) | yes |
| [aphw-ddi-portal](https://github.com/DEFRA/aphw-ddi-portal) | direct `^2.0.4` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/DEFRA/aphw-ddi-portal/blob/HEAD/app/frontend/accessible-autocomplete/index.js) | yes |
| [eutd-mmo-fes-external-frontend](https://github.com/DEFRA/eutd-mmo-fes-external-frontend) | direct `3.0.0` |  | `rendered-classes` | [`rendered-classes`](https://github.com/DEFRA/eutd-mmo-fes-external-frontend/blob/HEAD/app/components/autocompleteFormField-v2.tsx) |  |
| [mmo-cr-external-frontend](https://github.com/DEFRA/mmo-cr-external-frontend) | direct `3.0.2` |  | `rendered-classes` | [`rendered-classes`](https://github.com/DEFRA/mmo-cr-external-frontend/blob/HEAD/src/server/routes/add-port/index.njk) |  |
| [apha-apps-perms-move-animal-ui](https://github.com/DEFRA/apha-apps-perms-move-animal-ui) | direct `3.0.1` |  |  |  | yes |
| [assurance-frontend](https://github.com/DEFRA/assurance-frontend) | direct `^3.0.1` |  |  |  |  |
| [cites-pegasus](https://github.com/DEFRA/cites-pegasus) | direct `^2.0.4` |  |  |  |  |
| [epr-frontend](https://github.com/DEFRA/epr-frontend) | direct `3.0.2` |  |  |  |  |
| [epr-register-enrol-frontend](https://github.com/DEFRA/epr-register-enrol-frontend) | direct `3.0.1` |  |  |  |  |
| [grants-ui](https://github.com/DEFRA/grants-ui) | direct `3.0.2` |  |  |  |  |
| [interactive-map](https://github.com/DEFRA/interactive-map) | direct `^3.0.1` |  |  |  |  |
| [service-manual-ui](https://github.com/DEFRA/service-manual-ui) | direct `3.0.1` |  |  |  |  |
| [trade-imports-simulator-frontend](https://github.com/DEFRA/trade-imports-simulator-frontend) | direct `3.0.2` |  |  |  |  |
| [phi-prototype](https://github.com/DEFRA/phi-prototype) (proto) | hmrc `5.60.0` |  |  |  |  |

### Planning-Inspectorate (18)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [back-office-prototype](https://github.com/Planning-Inspectorate/back-office-prototype) (proto) | direct `^2.0.4` | select enhancement | `rendered-classes`, `init-call`, `enhance-select` | [`rendered-classes`](https://github.com/Planning-Inspectorate/back-office-prototype/blob/HEAD/app/views/banners-1418/create/index 2.html), [`init-call`](https://github.com/Planning-Inspectorate/back-office-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/Planning-Inspectorate/back-office-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [identify-consultees](https://github.com/Planning-Inspectorate/identify-consultees) | direct `*` | standalone input | `init-call`, `standalone-init`, `rendered-classes` | [`init-call`](https://github.com/Planning-Inspectorate/identify-consultees/blob/HEAD/apps/manage/src/app/views/consultees/report/consultees/add/view.njk), [`standalone-init`](https://github.com/Planning-Inspectorate/identify-consultees/blob/HEAD/apps/manage/src/public/javascripts/consultee-autocomplete.js), [`rendered-classes`](https://github.com/Planning-Inspectorate/identify-consultees/blob/HEAD/apps/manage/src/public/javascripts/consultee-autocomplete.js) |  |
| [mpesc-prototype](https://github.com/Planning-Inspectorate/mpesc-prototype) (proto) | direct `^3.0.1` | both | `init-call`, `standalone-init`, `enhance-select` | [`init-call`](https://github.com/Planning-Inspectorate/mpesc-prototype/blob/HEAD/app/views/assigned-to-me-search.html), [`standalone-init`](https://github.com/Planning-Inspectorate/mpesc-prototype/blob/HEAD/app/views/assigned-to-me-search.html), [`enhance-select`](https://github.com/Planning-Inspectorate/mpesc-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [appeals-back-office](https://github.com/Planning-Inspectorate/appeals-back-office) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/Planning-Inspectorate/appeals-back-office/blob/HEAD/appeals/web/src/client/components/accessible-autocomplete.js), [`enhance-select`](https://github.com/Planning-Inspectorate/appeals-back-office/blob/HEAD/appeals/web/src/client/components/accessible-autocomplete.js) |  |
| [back-office](https://github.com/Planning-Inspectorate/back-office) | direct `*` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/Planning-Inspectorate/back-office/blob/HEAD/apps/web/src/client/components/accessible-autocomplete.js), [`enhance-select`](https://github.com/Planning-Inspectorate/back-office/blob/HEAD/apps/web/src/client/components/accessible-autocomplete.js) |  |
| [inspector-programming](https://github.com/Planning-Inspectorate/inspector-programming) | direct `*` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/Planning-Inspectorate/inspector-programming/blob/HEAD/apps/web/src/app/views/assignments/view.njk), [`enhance-select`](https://github.com/Planning-Inspectorate/inspector-programming/blob/HEAD/apps/web/src/app/views/assignments/view.njk) |  |
| [peas-row-commons](https://github.com/Planning-Inspectorate/peas-row-commons) | direct `*` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/Planning-Inspectorate/peas-row-commons/blob/HEAD/apps/manage/src/app/views/cases/personal-list/select-user.njk), [`standalone-init`](https://github.com/Planning-Inspectorate/peas-row-commons/blob/HEAD/apps/manage/src/app/views/cases/personal-list/select-user.njk) | yes |
| [section-62a-prototype](https://github.com/Planning-Inspectorate/section-62a-prototype) (proto) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/Planning-Inspectorate/section-62a-prototype/blob/HEAD/app/views/current-service/back-office/create-a-case/03-what-is-the-pre-application-reference-pins.html), [`enhance-select`](https://github.com/Planning-Inspectorate/section-62a-prototype/blob/HEAD/app/views/current-service/back-office/create-a-case/03-what-is-the-pre-application-reference-pins.html) |  |
| [appeal-planning-decision](https://github.com/Planning-Inspectorate/appeal-planning-decision) | direct `^3.0.2` |  |  |  |  |
| [applications-dco-portal](https://github.com/Planning-Inspectorate/applications-dco-portal) | direct `*` |  |  |  |  |
| [casework-portal](https://github.com/Planning-Inspectorate/casework-portal) | direct `*` |  |  |  |  |
| [crown-developments](https://github.com/Planning-Inspectorate/crown-developments) | direct `*` |  |  |  |  |
| [local-plans-examinations](https://github.com/Planning-Inspectorate/local-plans-examinations) | direct `*` |  |  |  |  |
| [template-service](https://github.com/Planning-Inspectorate/template-service) | direct `*` |  |  |  |  |
| [appeals-prototype](https://github.com/Planning-Inspectorate/appeals-prototype) (proto) | hmrc `^6.0.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/Planning-Inspectorate/appeals-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/Planning-Inspectorate/appeals-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) | yes |
| [back-office-appeals-prototype](https://github.com/Planning-Inspectorate/back-office-appeals-prototype) (proto) | hmrc `^6.65.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/Planning-Inspectorate/back-office-appeals-prototype/blob/HEAD/app/assets/javascripts/components/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/Planning-Inspectorate/back-office-appeals-prototype/blob/HEAD/app/assets/javascripts/components/accessible-autocomplete.min.js) |  |
| [applications-backoffice-prototype](https://github.com/Planning-Inspectorate/applications-backoffice-prototype) (proto) | hmrc `6.64.0` |  |  |  |  |
| [local-plans-examinations-prototype](https://github.com/Planning-Inspectorate/local-plans-examinations-prototype) (proto) | hmrc `7.41.0` |  |  |  |  |

### nhsbsa (8)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [cdr-client-prototype](https://github.com/nhsbsa/cdr-client-prototype) (proto) | direct `^3.0.1` | select enhancement | `rendered-classes`, `init-call`, `enhance-select` | [`rendered-classes`](https://github.com/nhsbsa/cdr-client-prototype/blob/HEAD/templates/Do-not-use-tce-2465/amp-update-attribute.html), [`init-call`](https://github.com/nhsbsa/cdr-client-prototype/blob/HEAD/public/js/autocomplete.js), [`enhance-select`](https://github.com/nhsbsa/cdr-client-prototype/blob/HEAD/public/js/autocomplete.js) |  |
| [clean-up-dropped-employments](https://github.com/nhsbsa/clean-up-dropped-employments) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/nhsbsa/clean-up-dropped-employments/blob/HEAD/app/assets/javascript/autocomplete.js), [`enhance-select`](https://github.com/nhsbsa/clean-up-dropped-employments/blob/HEAD/app/assets/javascript/autocomplete.js) |  |
| [medicines-management-prototype](https://github.com/nhsbsa/medicines-management-prototype) (proto) | direct `^2.0.4` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/nhsbsa/medicines-management-prototype/blob/HEAD/public/js/autocomplete.js), [`enhance-select`](https://github.com/nhsbsa/medicines-management-prototype/blob/HEAD/public/js/autocomplete.js) |  |
| [mys-pharmacy](https://github.com/nhsbsa/mys-pharmacy) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/nhsbsa/mys-pharmacy/blob/HEAD/app/assets/javascript/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/nhsbsa/mys-pharmacy/blob/HEAD/app/assets/javascript/accessible-autocomplete.min.js) |  |
| [nhsuk-frontend](https://github.com/nhsbsa/nhsuk-frontend) | direct `^2.0.2` |  | `init-call` | [`init-call`](https://github.com/nhsbsa/nhsuk-frontend/blob/HEAD/packages/components/header/autoCompleteConfig.js) |  |
| [hs-design-history](https://github.com/nhsbsa/hs-design-history) | direct `^2.0.3` |  |  |  |  |
| [nhsbsa-design-history](https://github.com/nhsbsa/nhsbsa-design-history) | direct `^2.0.3` |  |  |  |  |
| [research-playbook](https://github.com/nhsbsa/research-playbook) | direct `^2.0.3` |  |  |  |  |

### hmcts (6)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [cath-service](https://github.com/hmcts/cath-service) | direct `^3.0.1` | standalone input | `rendered-classes`, `init-call`, `standalone-init` | [`rendered-classes`](https://github.com/hmcts/cath-service/blob/HEAD/apps/web/src/pages/(admin)/manual-upload/index.njk), [`init-call`](https://github.com/hmcts/cath-service/blob/HEAD/apps/web/src/assets/js/search-autocomplete.ts), [`standalone-init`](https://github.com/hmcts/cath-service/blob/HEAD/apps/web/src/assets/js/search-autocomplete.ts) |  |
| [cui-ra](https://github.com/hmcts/cui-ra) | direct `^3.0.0` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/hmcts/cui-ra/blob/HEAD/src/main/views/components/accessible-autocomplete/macro.njk), [`standalone-init`](https://github.com/hmcts/cui-ra/blob/HEAD/src/main/views/dynamic-form.njk) | yes |
| [darts-portal](https://github.com/hmcts/darts-portal) | direct `^3.0.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/hmcts/darts-portal/blob/HEAD/src/app/core/models/courthouse/modules/accessible-autocomplete.d.ts), [`enhance-select`](https://github.com/hmcts/darts-portal/blob/HEAD/src/app/core/models/courthouse/modules/accessible-autocomplete.d.ts) |  |
| [deed-poll-admin](https://github.com/hmcts/deed-poll-admin) | direct `3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/hmcts/deed-poll-admin/blob/HEAD/src/assets/js/accessible-autocomplete.d.ts), [`enhance-select`](https://github.com/hmcts/deed-poll-admin/blob/HEAD/src/assets/js/accessible-autocomplete.d.ts) |  |
| [juror-bureau](https://github.com/hmcts/juror-bureau) | direct `^3.0.1` |  |  |  |  |
| [sscs-submit-your-appeal](https://github.com/hmcts/sscs-submit-your-appeal) | direct `^3.0.1` |  |  |  |  |

### dwp (43)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [attendance-allowance-agent](https://github.com/dwp/attendance-allowance-agent) | direct `^3.0.1`<br>country `^2.0.0`<br>hmrc `6.97.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/dwp/attendance-allowance-agent/blob/HEAD/app/assets/accessible-autocomplete2.min.js), [`enhance-select`](https://github.com/dwp/attendance-allowance-agent/blob/HEAD/app/assets/accessible-autocomplete2.min.js) |  |
| [carers-alerts-prototype](https://github.com/dwp/carers-alerts-prototype) (proto) | direct `2.0.4` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/dwp/carers-alerts-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/dwp/carers-alerts-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [common-capabilities-task](https://github.com/dwp/common-capabilities-task) | direct `2.0.4` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/dwp/common-capabilities-task/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/dwp/common-capabilities-task/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [dwp-mwac-prototype](https://github.com/dwp/dwp-mwac-prototype) (proto) | direct `^2.0.4` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/dwp/dwp-mwac-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/dwp/dwp-mwac-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [has-supporting-docs](https://github.com/dwp/has-supporting-docs) | direct `3.0.1`<br>country `1.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/dwp/has-supporting-docs/blob/HEAD/app/assets/javascripts/accessible-autocomplete.js), [`enhance-select`](https://github.com/dwp/has-supporting-docs/blob/HEAD/app/assets/javascripts/accessible-autocomplete.js) |  |
| [dwp-task-master](https://github.com/dwp/dwp-task-master) | direct `^2.0.3` |  |  |  |  |
| [evidence-prototype](https://github.com/dwp/evidence-prototype) (proto) | direct `3.0.2`<br>hmrc `7.38.0` |  |  |  |  |
| [workplace-subsidy-prototype](https://github.com/dwp/workplace-subsidy-prototype) (proto) | hmrc `6.117.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/dwp/workplace-subsidy-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/dwp/workplace-subsidy-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [pyca-hrt-review](https://github.com/dwp/pyca-hrt-review) | country `^1.0.0` |  | `country-package-markup` | [`country-package-markup`](https://github.com/dwp/pyca-hrt-review/blob/HEAD/app/views/includes/scripts.html) | yes |
| [pyca-prototype](https://github.com/dwp/pyca-prototype) (proto) | country `^1.0.1` |  | `country-package-markup` | [`country-package-markup`](https://github.com/dwp/pyca-prototype/blob/HEAD/app/views/includes/scripts.html) | yes |
| [retirement-maintain](https://github.com/dwp/retirement-maintain) | hmrc `7.35.0` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/dwp/retirement-maintain/blob/HEAD/app/assets/javascripts/location-autocomplete.min.js) |  |
| [atw-application-service](https://github.com/dwp/atw-application-service) | hmrc `^2.7.0` |  |  |  |  |
| [atw-payment-claims-grant](https://github.com/dwp/atw-payment-claims-grant) | hmrc `5.67.1` |  |  |  |  |
| [atw-payment-claims-service](https://github.com/dwp/atw-payment-claims-service) | hmrc `^5.2.0` |  |  |  |  |
| [beam-prototype](https://github.com/dwp/beam-prototype) (proto) | hmrc `7.35.0` |  |  |  |  |
| [bsp-prototype](https://github.com/dwp/bsp-prototype) (proto) | hmrc `7.35.0` |  |  |  |  |
| [case-manager-review-prototype](https://github.com/dwp/case-manager-review-prototype) (proto) | hmrc `6.117.0` |  |  |  |  |
| [cmg-employers-prototype](https://github.com/dwp/cmg-employers-prototype) (proto) | hmrc `7.35.0` |  |  |  |  |
| [cms-enforcement-prototype](https://github.com/dwp/cms-enforcement-prototype) (proto) | hmrc `7.32.0` |  |  |  |  |
| [cold-weather-payments](https://github.com/dwp/cold-weather-payments) | hmrc `6.117.0` |  |  |  |  |
| [colleague-view-prototype](https://github.com/dwp/colleague-view-prototype) (proto) | hmrc `7.36.0` |  |  |  |  |
| [dwp-kbv-uplift](https://github.com/dwp/dwp-kbv-uplift) | hmrc `7.40.0` |  |  |  | yes |
| [fqm-prototype](https://github.com/dwp/fqm-prototype) (proto) | hmrc `6.66.0` |  |  |  |  |
| [funeral-payments-manager](https://github.com/dwp/funeral-payments-manager) | hmrc `7.35.0` |  |  |  |  |
| [gateway-services-prototype](https://github.com/dwp/gateway-services-prototype) (proto) | hmrc `7.40.0` |  |  |  |  |
| [get-a-nino](https://github.com/dwp/get-a-nino) | hmrc `6.117.0` |  |  |  |  |
| [laterlife-agent-prototype](https://github.com/dwp/laterlife-agent-prototype) (proto) | hmrc `6.104.0` |  |  |  |  |
| [mcmc-prototype](https://github.com/dwp/mcmc-prototype) (proto) | hmrc `7.23.0` |  |  |  |  |
| [newstyle-modernisation](https://github.com/dwp/newstyle-modernisation) | hmrc `6.65.0` |  |  |  |  |
| [one-view-prototype](https://github.com/dwp/one-view-prototype) (proto) | hmrc `6.117.0` |  |  |  |  |
| [pc-prototype](https://github.com/dwp/pc-prototype) (proto) | hmrc `^5.11.3` |  |  |  |  |
| [preferences-evidence-notify](https://github.com/dwp/preferences-evidence-notify) | hmrc `6.117.0` |  |  |  |  |
| [prototype-dth](https://github.com/dwp/prototype-dth) (proto) | hmrc `6.117.0` |  |  |  |  |
| [prototype-residency-test](https://github.com/dwp/prototype-residency-test) (proto) | hmrc `7.40.0` |  |  |  |  |
| [ref-data-services](https://github.com/dwp/ref-data-services) | hmrc `7.35.0` |  |  |  |  |
| [repay-my-debt-prototype](https://github.com/dwp/repay-my-debt-prototype) (proto) | hmrc `7.40.0` |  |  |  |  |
| [retirement-change-of-circs](https://github.com/dwp/retirement-change-of-circs) | hmrc `^7.19.0` |  |  |  |  |
| [send-fit-note](https://github.com/dwp/send-fit-note) | hmrc `6.117.0` |  |  |  |  |
| [SRA-UCD-sandpit](https://github.com/dwp/SRA-UCD-sandpit) | hmrc `7.38.0` |  |  |  |  |
| [ui-atw-claim](https://github.com/dwp/ui-atw-claim) | hmrc `5.67.1` |  |  |  |  |
| [ui-atw-claim-counter-sign](https://github.com/dwp/ui-atw-claim-counter-sign) | hmrc `6.97.0` |  |  |  |  |
| [ui-ds1500-frontend](https://github.com/dwp/ui-ds1500-frontend) | hmrc `6.56.0` |  |  |  |  |
| [ui-fitnote-frontend](https://github.com/dwp/ui-fitnote-frontend) | hmrc `7.28.0` |  |  |  |  |

### SkillsFundingAgency (8)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [das-frontend](https://github.com/SkillsFundingAgency/das-frontend) | direct `^3.0.1` | both | `init-call`, `enhance-select`, `standalone-init` | [`init-call`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/app/views/demos/autocomplete.html), [`enhance-select`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/app/views/demos/autocomplete.html), [`standalone-init`](https://github.com/SkillsFundingAgency/das-frontend/blob/HEAD/app/views/demos/autocomplete.html) | yes |
| [das-apar-prototype](https://github.com/SkillsFundingAgency/das-apar-prototype) (proto) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/SkillsFundingAgency/das-apar-prototype/blob/HEAD/app/views/layouts/main.html), [`enhance-select`](https://github.com/SkillsFundingAgency/das-apar-prototype/blob/HEAD/app/views/layouts/main.html) |  |
| [das-employer-prototype](https://github.com/SkillsFundingAgency/das-employer-prototype) (proto) | direct `^2.0.4`<br>hmrc `6.59.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/SkillsFundingAgency/das-employer-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/SkillsFundingAgency/das-employer-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) | yes |
| [das-flexible-payment-models-prototype](https://github.com/SkillsFundingAgency/das-flexible-payment-models-prototype) (proto) | direct `^2.0.4`<br>hmrc `6.58.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/SkillsFundingAgency/das-flexible-payment-models-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/SkillsFundingAgency/das-flexible-payment-models-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [das-incentive-pay-prototype](https://github.com/SkillsFundingAgency/das-incentive-pay-prototype) (proto) | direct `^2.0.3`<br>hmrc `^4.4.0` |  |  |  |  |
| [tl-marketing-and-communication](https://github.com/SkillsFundingAgency/tl-marketing-and-communication) | direct `^2.0.4` |  |  |  | yes |
| [tl-poc-results-and-certification](https://github.com/SkillsFundingAgency/tl-poc-results-and-certification) | direct `^2.0.2` |  |  |  | yes |
| [tl-results-and-certification](https://github.com/SkillsFundingAgency/tl-results-and-certification) | direct `^2.0.2` |  |  |  | yes |

### alphagov (5)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [signon](https://github.com/alphagov/signon) | direct `^3.0.2` | select enhancement | `rendered-classes`, `init-call`, `enhance-select` | [`rendered-classes`](https://github.com/alphagov/signon/blob/HEAD/app/views/account/organisations/edit.html.erb), [`init-call`](https://github.com/alphagov/signon/blob/HEAD/app/assets/javascripts/modules/accessible-autocomplete.js), [`enhance-select`](https://github.com/alphagov/signon/blob/HEAD/app/assets/javascripts/modules/accessible-autocomplete.js) | yes |
| [collections-publisher](https://github.com/alphagov/collections-publisher) | direct `^3.0.2` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/alphagov/collections-publisher/blob/HEAD/app/assets/javascripts/components/autocomplete.js), [`standalone-init`](https://github.com/alphagov/collections-publisher/blob/HEAD/app/assets/javascripts/components/autocomplete.js) | yes |
| [content-data-admin](https://github.com/alphagov/content-data-admin) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/alphagov/content-data-admin/blob/HEAD/app/assets/javascripts/components/accessible-autocomplete.js), [`enhance-select`](https://github.com/alphagov/content-data-admin/blob/HEAD/app/assets/javascripts/components/accessible-autocomplete.js) | yes |
| [datagovuk_find](https://github.com/alphagov/datagovuk_find) | direct `^2.0.2` |  |  |  |  |
| [data-marketplace-prototype](https://github.com/alphagov/data-marketplace-prototype) (proto) | hmrc `^6.35.0` |  |  |  |  |

### communitiesuk (5)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [epb-data-frontend](https://github.com/communitiesuk/epb-data-frontend) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/communitiesuk/epb-data-frontend/blob/HEAD/lib/views/component__filter_options.erb), [`enhance-select`](https://github.com/communitiesuk/epb-data-frontend/blob/HEAD/lib/views/component__filter_options.erb), [`rendered-classes`](https://github.com/communitiesuk/epb-data-frontend/blob/HEAD/assets/javascript/accessible-autocomplete.min.js) |  |
| [submit-social-housing-lettings-and-sales-data](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data) | direct `^2.0.3` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data/blob/HEAD/app/frontend/controllers/accessible_autocomplete_controller.js), [`enhance-select`](https://github.com/communitiesuk/submit-social-housing-lettings-and-sales-data/blob/HEAD/app/frontend/controllers/accessible_autocomplete_controller.js) |  |
| [funding-service](https://github.com/communitiesuk/funding-service) | direct `3.0.2` |  |  |  | yes |
| [funding-service-prototypes](https://github.com/communitiesuk/funding-service-prototypes) (proto) | direct `^3.0.1` |  |  |  | yes |
| [mhclg_svelte_component_library](https://github.com/communitiesuk/mhclg_svelte_component_library) | direct `^3.0.1` |  |  |  |  |

### CPS-Innovation (3)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [advocate-panel-application](https://github.com/CPS-Innovation/advocate-panel-application) | direct `^3.0.1`<br>hmrc `6.115.0` |  |  |  |  |
| [assurance-frontend](https://github.com/CPS-Innovation/assurance-frontend) | direct `^3.0.1` |  |  |  |  |
| [Case-Management-Register-a-Case](https://github.com/CPS-Innovation/Case-Management-Register-a-Case) | direct `^3.0.1` |  |  |  | yes |

### ukhsa-collaboration (3)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [digital-form-builder](https://github.com/ukhsa-collaboration/digital-form-builder) | direct `^2.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/ukhsa-collaboration/digital-form-builder/blob/HEAD/runner/src/server/plugins/engine/views/components/autocompletefield.html), [`enhance-select`](https://github.com/ukhsa-collaboration/digital-form-builder/blob/HEAD/runner/src/server/plugins/engine/views/components/autocompletefield.html) | yes |
| [nsc-recommendationsp](https://github.com/ukhsa-collaboration/nsc-recommendationsp) | direct `^3.0.1` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/ukhsa-collaboration/nsc-recommendationsp/blob/HEAD/frontend/src/autocomplete/index.js), [`standalone-init`](https://github.com/ukhsa-collaboration/nsc-recommendationsp/blob/HEAD/frontend/src/autocomplete/index.js) |  |
| [ntbs_Beta](https://github.com/ukhsa-collaboration/ntbs_Beta) | direct `2.0.4` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/ukhsa-collaboration/ntbs_Beta/blob/HEAD/ntbs-service/wwwroot/source/Components/AutocompleteSelect.ts) |  |

### cabinetoffice (3)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [fb-editor](https://github.com/cabinetoffice/fb-editor) | direct `^2.0.4` |  |  |  |  |
| [fb-runner](https://github.com/cabinetoffice/fb-runner) | direct `^2.0.4` |  |  |  |  |
| [ggis-prototypes](https://github.com/cabinetoffice/ggis-prototypes) (proto) | hmrc `5.39.0` |  |  |  |  |

### dhsc-govuk (3)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [gamblinglevy](https://github.com/dhsc-govuk/gamblinglevy) | direct `^3.0.1` |  | `init-call` | [`init-call`](https://github.com/dhsc-govuk/gamblinglevy/blob/HEAD/client/src/types/accessible-autocomplete.d.ts) |  |
| [HealthyBabies](https://github.com/dhsc-govuk/HealthyBabies) | direct `^3.0.1` |  | `init-call` | [`init-call`](https://github.com/dhsc-govuk/HealthyBabies/blob/HEAD/client/src/types/accessible-autocomplete.d.ts) |  |
| [Get-Adult-Social-Care-Data_Prototype](https://github.com/dhsc-govuk/Get-Adult-Social-Care-Data_Prototype) (proto) | direct `^3.0.1`<br>hmrc `6.112.0` |  |  |  |  |

### LandRegistry (2)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [search-local-land-charges-ui](https://github.com/LandRegistry/search-local-land-charges-ui) | direct `^3.0.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/LandRegistry/search-local-land-charges-ui/blob/HEAD/server/assets/src/js/modules/accessible-autocomplete.js), [`enhance-select`](https://github.com/LandRegistry/search-local-land-charges-ui/blob/HEAD/server/assets/src/js/modules/accessible-autocomplete.js) |  |
| [hmlr-design-system](https://github.com/LandRegistry/hmlr-design-system) | direct `^2.0.4` |  |  |  |  |

### UK-Export-Finance (2)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [dtfs2](https://github.com/UK-Export-Finance/dtfs2) | direct `^3.0.2` | select enhancement | `rendered-classes`, `init-call`, `enhance-select` | [`rendered-classes`](https://github.com/UK-Export-Finance/dtfs2/blob/HEAD/e2e-tests/tfm/cypress/e2e/common-tests/autocomplete-assertions/index.js), [`init-call`](https://github.com/UK-Export-Finance/dtfs2/blob/HEAD/trade-finance-manager-ui/component-tests/_macros/accessible-autocomplete-select.component-test.js), [`enhance-select`](https://github.com/UK-Export-Finance/dtfs2/blob/HEAD/trade-finance-manager-ui/public/js/accessibleAutocomplete.js) |  |
| [exip](https://github.com/UK-Export-Finance/exip) | direct `^3.0.1` | select enhancement | `init-call`, `rendered-classes`, `enhance-select` | [`init-call`](https://github.com/UK-Export-Finance/exip/blob/HEAD/src/ui/templates/components/accessible-autocomplete-select.njk), [`rendered-classes`](https://github.com/UK-Export-Finance/exip/blob/HEAD/e2e-tests/pages/shared/autoCompleteField.js), [`enhance-select`](https://github.com/UK-Export-Finance/exip/blob/HEAD/src/ui/public/js/accessibleAutocomplete.js) |  |

### digital-land (2)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [config-manager](https://github.com/digital-land/config-manager) | direct `^2.0.4` | both | `init-call`, `enhance-select`, `standalone-init` | [`init-call`](https://github.com/digital-land/config-manager/blob/HEAD/application/templates/datamanager/add-data.html), [`enhance-select`](https://github.com/digital-land/config-manager/blob/HEAD/application/templates/datamanager/add-data.html), [`standalone-init`](https://github.com/digital-land/config-manager/blob/HEAD/application/templates/datamanager/dashboard_add.html) | yes |
| [submit](https://github.com/digital-land/submit) | direct `^3.0.2` |  |  |  |  |

### dvsa (2)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [cvs-app-vtm](https://github.com/dvsa/cvs-app-vtm) | direct `^3.0.1` | select enhancement | `enhance-select`, `rendered-classes` | [`enhance-select`](https://github.com/dvsa/cvs-app-vtm/blob/HEAD/src/app/accessible-autocomplete.d.ts), [`rendered-classes`](https://github.com/dvsa/cvs-app-vtm/blob/HEAD/src/app/forms/components/autocomplete/autocomplete.component.ts) |  |
| [front-end](https://github.com/dvsa/front-end) | direct `^1.6.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/dvsa/front-end/blob/HEAD/src/assets/js/development/modules/autocomplete/autocomplete.js), [`enhance-select`](https://github.com/dvsa/front-end/blob/HEAD/src/assets/js/development/modules/autocomplete/autocomplete.js) |  |

### defra-design (7)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [get-air-pollution-data-prototype](https://github.com/defra-design/get-air-pollution-data-prototype) (proto) | direct `^3.0.1`<br>hmrc `6.112.0` | select enhancement | `enhance-select`, `rendered-classes` | [`enhance-select`](https://github.com/defra-design/get-air-pollution-data-prototype/blob/HEAD/app/assets/javascripts/bundles/autocomplete.bundle.js), [`rendered-classes`](https://github.com/defra-design/get-air-pollution-data-prototype/blob/HEAD/app/assets/javascripts/bundles/autocomplete.bundle.js) | yes |
| [caseworking-ai-test](https://github.com/defra-design/caseworking-ai-test) | direct `^3.0.1` |  |  |  |  |
| [defra-forms-mvp-prototype](https://github.com/defra-design/defra-forms-mvp-prototype) (proto) | direct `^3.0.0`<br>hmrc `^6.22.0` |  |  |  |  |
| [forms-prototype](https://github.com/defra-design/forms-prototype) (proto) | direct `^3.0.0`<br>hmrc `^6.22.0` |  |  |  |  |
| [new-cites-prototype](https://github.com/defra-design/new-cites-prototype) (proto) | hmrc `^6.113.0` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/defra-design/new-cites-prototype/blob/HEAD/app/views/common-data.html), [`standalone-init`](https://github.com/defra-design/new-cites-prototype/blob/HEAD/app/views/common-data.html) |  |
| [wtp-glw-prototype](https://github.com/defra-design/wtp-glw-prototype) (proto) | hmrc `^5.3.0` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/defra-design/wtp-glw-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/defra-design/wtp-glw-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) | yes |
| [fcp-farming-front-door](https://github.com/defra-design/fcp-farming-front-door) | hmrc `^6.78.0` |  |  |  |  |

### hmrc (7)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [hmrc-frontend](https://github.com/hmrc/hmrc-frontend) | direct `^3.0.2` | select enhancement | `hmrc-wrapper`, `enhance-select`, `rendered-classes` | [`hmrc-wrapper`](https://github.com/hmrc/hmrc-frontend/blob/HEAD/src/accessible-autocomplete.js), [`enhance-select`](https://github.com/hmrc/hmrc-frontend/blob/HEAD/src/components/accessible-autocomplete/accessible-autocomplete.js), [`rendered-classes`](https://github.com/hmrc/hmrc-frontend/blob/HEAD/src/components/accessible-autocomplete/browser.test.js) | yes |
| [design-system](https://github.com/hmrc/design-system) | hmrc `^7.20.0` |  | `init-call` | [`init-call`](https://github.com/hmrc/design-system/blob/HEAD/application/templates/layout-example.njk) |  |
| [odx-child-benefit-frontend](https://github.com/hmrc/odx-child-benefit-frontend) | hmrc `6.31.0` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/hmrc/odx-child-benefit-frontend/blob/HEAD/assets/lib/location-autocomplete.min.js) | yes |
| [odx-paye-hicbc-frontend](https://github.com/hmrc/odx-paye-hicbc-frontend) | hmrc `^6.75.0` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/hmrc/odx-paye-hicbc-frontend/blob/HEAD/assets/lib/location-autocomplete.min.js) | yes |
| [odx-paye-iabd-frontend](https://github.com/hmrc/odx-paye-iabd-frontend) | hmrc `6.58.0` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/hmrc/odx-paye-iabd-frontend/blob/HEAD/assets/lib/location-autocomplete.min.js) | yes |
| [odx-self-assessment-frontend](https://github.com/hmrc/odx-self-assessment-frontend) | hmrc `6.58.0` | select enhancement | `enhance-select` | [`enhance-select`](https://github.com/hmrc/odx-self-assessment-frontend/blob/HEAD/assets/lib/location-autocomplete.min.js) | yes |
| [calculate-ni-frontend](https://github.com/hmrc/calculate-ni-frontend) | hmrc `^7.27.0` |  |  |  |  |

### Civil-Service-Human-Resources (2)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [prototype](https://github.com/Civil-Service-Human-Resources/prototype) (proto) | direct `^2.0.4` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/Civil-Service-Human-Resources/prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/Civil-Service-Human-Resources/prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`rendered-classes`](https://github.com/Civil-Service-Human-Resources/prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |
| [lpg-services](https://github.com/Civil-Service-Human-Resources/lpg-services) | direct `^3.0.1` |  |  |  |  |

### Crown-Commercial-Service (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [DataSubmissionServiceAPI](https://github.com/Crown-Commercial-Service/DataSubmissionServiceAPI) | direct `^1.6.2` |  |  |  | yes |

### FoodStandardsAgency (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [register-a-food-business-front-end](https://github.com/FoodStandardsAgency/register-a-food-business-front-end) | direct `3.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/FoodStandardsAgency/register-a-food-business-front-end/blob/HEAD/pages/la-selector.njk), [`enhance-select`](https://github.com/FoodStandardsAgency/register-a-food-business-front-end/blob/HEAD/pages/la-selector.njk) |  |

### InnovateUKGitHub (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [innovation-funding-service](https://github.com/InnovateUKGitHub/innovation-funding-service) | direct `^1.6.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/InnovateUKGitHub/innovation-funding-service/blob/HEAD/ifs-web-service/ifs-web-core/src/main/resources/static/js/ifs_modules/autoComplete.js), [`enhance-select`](https://github.com/InnovateUKGitHub/innovation-funding-service/blob/HEAD/ifs-web-service/ifs-web-core/src/main/resources/static/js/ifs_modules/autoComplete.js), [`rendered-classes`](https://github.com/InnovateUKGitHub/innovation-funding-service/blob/HEAD/ifs-web-service/ifs-web-core/src/main/resources/static/js/ifs_modules/autoComplete.js) | yes |

### LondonBoroughSutton (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [lbs-design-system](https://github.com/LondonBoroughSutton/lbs-design-system) | direct `^2.0.2` |  |  |  |  |

### UKForeignOffice (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [lists](https://github.com/UKForeignOffice/lists) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/UKForeignOffice/lists/blob/HEAD/src/server/views/apply/which-country-list-do-you-want-to-be-added-to.njk), [`enhance-select`](https://github.com/UKForeignOffice/lists/blob/HEAD/src/server/views/apply/which-country-list-do-you-want-to-be-added-to.njk), [`rendered-classes`](https://github.com/UKForeignOffice/lists/blob/HEAD/src/server/middlewares/__tests__/accessible-autocomplete.test.ts) |  |

### UKHSA-Internal (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [talktofrank-beta](https://github.com/UKHSA-Internal/talktofrank-beta) | direct `^2.0.3` |  | `rendered-classes` | [`rendered-classes`](https://github.com/UKHSA-Internal/talktofrank-beta/blob/HEAD/app/shared/components/AccessibleSearch/component.jsx) |  |

### UKHomeOffice (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [aspel-workspace](https://github.com/UKHomeOffice/aspel-workspace) | direct `^3.0.1` |  |  |  |  |

### UKHomeOfficeForms (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [hof](https://github.com/UKHomeOfficeForms/hof) | direct `^3.0.2` |  |  |  |  |

### govuk-one-login (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [ipv-cri-address-front](https://github.com/govuk-one-login/ipv-cri-address-front) | direct `3.0.1` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/govuk-one-login/ipv-cri-address-front/blob/HEAD/src/views/address/what-country.njk), [`enhance-select`](https://github.com/govuk-one-login/ipv-cri-address-front/blob/HEAD/src/views/address/what-country.njk), [`rendered-classes`](https://github.com/govuk-one-login/ipv-cri-address-front/blob/HEAD/src/views/address/what-country.njk) |  |

### govuk-pay (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [pay-selfservice](https://github.com/govuk-pay/pay-selfservice) | direct `2.0.4` | standalone input | `init-call`, `standalone-init` | [`init-call`](https://github.com/govuk-pay/pay-selfservice/blob/HEAD/src/client-side/autocomplete.js), [`standalone-init`](https://github.com/govuk-pay/pay-selfservice/blob/HEAD/src/client-side/autocomplete.js) | yes |

### nhs-digital-gp-it-futures (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [GPITBuyingCatalogue](https://github.com/nhs-digital-gp-it-futures/GPITBuyingCatalogue) | direct `^2.0.3` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/nhs-digital-gp-it-futures/GPITBuyingCatalogue/blob/HEAD/src/NHSD.GPIT.BuyingCatalogue.WebApp/wwwroot/js/accessible-autocomplete/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/nhs-digital-gp-it-futures/GPITBuyingCatalogue/blob/HEAD/src/NHSD.GPIT.BuyingCatalogue.WebApp/wwwroot/js/accessible-autocomplete/accessible-autocomplete.min.js) |  |

### nhsuk (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [nhsuk-service-manual](https://github.com/nhsuk/nhsuk-service-manual) | direct `^3.0.2` |  | `init-call` | [`init-call`](https://github.com/nhsuk/nhsuk-service-manual/blob/HEAD/app/javascripts/accessible-autocomplete.mjs) |  |

### uktrade (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [redbox](https://github.com/uktrade/redbox) | direct `^3.0.1` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/uktrade/redbox/blob/HEAD/django_app/frontend/src/interaction_design_system/ids/components/accessible-autocomplete.js), [`enhance-select`](https://github.com/uktrade/redbox/blob/HEAD/django_app/frontend/src/interaction_design_system/ids/components/accessible-autocomplete.js), [`rendered-classes`](https://github.com/uktrade/redbox/blob/HEAD/django_app/frontend/src/interaction_design_system/ids/components/accessible-autocomplete.js) |  |

### NHSDigital (3)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [manage-breast-screening-prototype](https://github.com/NHSDigital/manage-breast-screening-prototype) (proto) | direct `^3.0.2` | both | `x-govuk-wrapper`, `init-call`, `enhance-select`, `standalone-init`, `rendered-classes` | [`x-govuk-wrapper`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/views/_components/autocomplete/macro.njk), [`init-call`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/javascript/autocomplete.js), [`enhance-select`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/javascript/autocomplete.js), [`standalone-init`](https://github.com/NHSDigital/manage-breast-screening-prototype/blob/HEAD/app/assets/javascript/autocomplete.js) | yes |
| [manage-vaccinations-in-schools-prototype](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype) (proto) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select`, `rendered-classes` | [`init-call`](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype/blob/HEAD/app/assets/javascripts/components/autocomplete.js), [`enhance-select`](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype/blob/HEAD/app/assets/javascripts/components/autocomplete.js), [`rendered-classes`](https://github.com/NHSDigital/manage-vaccinations-in-schools-prototype/blob/HEAD/app/assets/javascripts/components/autocomplete.js) | yes |
| [record-a-vaccination-prototype](https://github.com/NHSDigital/record-a-vaccination-prototype) (proto) | direct `^3.0.2` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/javascript/autocomplete.js), [`enhance-select`](https://github.com/NHSDigital/record-a-vaccination-prototype/blob/HEAD/app/assets/javascript/autocomplete.js) | yes |

### NHS-Test-Digital-Design (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [nhs-antibody-testing-registration-prototype](https://github.com/NHS-Test-Digital-Design/nhs-antibody-testing-registration-prototype) (proto) | country `^1.0.1` | select enhancement | `init-call`, `enhance-select` | [`init-call`](https://github.com/NHS-Test-Digital-Design/nhs-antibody-testing-registration-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js), [`enhance-select`](https://github.com/NHS-Test-Digital-Design/nhs-antibody-testing-registration-prototype/blob/HEAD/app/assets/javascripts/accessible-autocomplete.min.js) |  |

### co-cddo (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [dds](https://github.com/co-cddo/dds) | hmrc `^5.24.0` |  |  |  |  |

### nationalarchives (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [ds-caselaw-public-ui](https://github.com/nationalarchives/ds-caselaw-public-ui) | country `2.0.0` |  |  |  |  |

### ukgov-equality-hub (1)

| Repo | Route | Mode | Signals | Example files | Own autocomplete? |
|---|---|---|---|---|---|
| [equality-action-plans-prototypes](https://github.com/ukgov-equality-hub/equality-action-plans-prototypes) (proto) | hmrc `7.15.0` |  |  |  |  |

