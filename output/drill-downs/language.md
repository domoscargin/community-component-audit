# Language navigation (language switcher): service repo drill-down

Generated 2026-11-16 from the audit snapshot of 2026-11-04 ([clusters.json](../clusters.json)) combined with class usage data ([class-usage.json](../class-usage.json)) plus an additional class usage scan for language-switcher classes (the main scan only covered gap/partial clusters; language-navigation is "covered"). See [report.md](../report.md) for methodology.

Language navigation is #58 overall (34.1) and is **covered**: GOV.UK Frontend added the [Language navigation component](https://design-system.service.gov.uk/components/language-navigation/) in v6.5.0 (trial status, [PR #7226](https://github.com/alphagov/govuk-frontend/pull/7226)). Despite that, 26 service repos still ship their own switcher — most predate the component (first commits August 2026) — and 15 of them already extend GOV.UK Frontend, so migration should be a class-and-macro swap rather than a rebuild for most teams.

Demand is concentrated on English/Welsh toggles: HMRC ships a [welsh-language-toggle pattern](https://github.com/hmrc/design-system/tree/main/src/hmrc-design-patterns/welsh-language-toggle) and the [service-navigation-language-select component](https://github.com/hmrc/hmrc-frontend/tree/main/src/components/service-navigation-language-select), ONS a [change-language pattern](https://github.com/ONSdigital/design-system/tree/main/src/patterns/change-language) and [language-selector component](https://github.com/ONSdigital/design-system/tree/main/src/components/language-selector), DWP a [language-toggle component](https://design-system.dwp.gov.uk/components/language-toggle) and [toggle-to-welsh pattern](https://design-system.dwp.gov.uk/patterns/toggle-to-welsh), and GOV.UK Publishing a [translation-nav component](https://github.com/alphagov/govuk_publishing_components/tree/main/app/views/govuk_publishing_components/components/docs/translation_nav.yml). Welsh-language support is a legal requirement for many services, which is why the 18-comment ["Supporting multiple languages"](https://github.com/alphagov/govuk-design-system/discussions/6136) backlog discussion keeps resurfacing.

The language-select cluster is included because teams keep shipping components by that exact name (#642 overall, 19.7) even though no current design system exports one: HMRC's old `language-select` component was removed in hmrc-frontend v7 (replaced by service-navigation-language-select), and the two DWP hits here are vendored backup copies of that deleted macro.

Each repo appears once per cluster, with a link to the file the audit matched. "Extends GOV.UK" means the implementation builds on or imports the GOV.UK Frontend component rather than being written from scratch. The "Community classes used" column lists *all* community design system classes detected in that repo (any component) — repos consuming another organisation's component rather than, or as well as, building their own. "Orgs" counts unique GitHub organisations.

Caveats: detection is filename/class-name based, so some hits may be false positives, and one hit per repo means the audit shows *an* example file, not every instance. Class usage and component detection are independent scans: a repo can use a community class without having its own matching file, and vice versa. Org renames double-count two repos: `forms-runner` appears under both alphagov and govuk-forms, and `check-what-you-owe` under both dwp and dwpdigital.

## At a glance

| Cluster | Status | Score | Repos (production / prototype) | Orgs | Extend GOV.UK |
|---|---|---|---|---|---|
| language-navigation | in GOV.UK Frontend (v6.5.0, trial) | 34.1 | 26 (24 / 2) | 13 | 15 |
| language-select | not in GOV.UK Frontend | 19.7 | 6 (3 / 3) | 4 |  |

## Community class adoption

Repos using another design system's classes. These are *consumers* of a community component — evidence of which existing implementation teams reach for. Note the low counts: the most-reused class is HMRC's legacy `language-select`, which hmrc-frontend v7 has removed, and nobody consumes ONS's language-selector — teams mostly rebuild.

| Class | Source design system | Repos | Orgs | Production | Prototypes |
|---|---|---|---|---|---|
| `hmrc-language-select` | hmrc-frontend (removed in v7) | 7 | 5 | 4 | 3 |
| `dwp-language-toggle` | dwp-design-system | 4 | 2 | 1 | 3 |
| `gem-c-translation-nav` | govuk-publishing-components | 2 | 2 | 0 | 2 |
| `hmrc-service-navigation-language-select` | hmrc-frontend | 1 | 1 | 1 | 0 |
| `ons-language-selector` | ons-design-system | 0 | 0 | 0 | 0 |

**1 repo both consumes a community class and has its own implementation** in the clusters below ([alphagov/emergency-alerts-govuk](https://github.com/alphagov/emergency-alerts-govuk), whose own language-select styles build on `hmrc-language-select`); **13 consume a community class with no matching own implementation detected**.

<details><summary>Consumers without their own implementation (13 repos, 7 orgs)</summary>

Production:

- **nhsbsa**: [blc-wales](https://github.com/nhsbsa/blc-wales) (`hmrc-service-navigation-language-select`)
- **nhsbsa**: [blc-crm](https://github.com/nhsbsa/blc-crm) (`hmrc-language-select`)
- **dwp**: [ui-atw-claim-counter-sign](https://github.com/dwp/ui-atw-claim-counter-sign) (`hmrc-language-select`)
- **ministryofjustice**: [track-my-case](https://github.com/ministryofjustice/track-my-case) (`hmrc-language-select`)
- **DEFRA**: [epr-laps-frontend](https://github.com/DEFRA/epr-laps-frontend) (`dwp-language-toggle`)

Prototypes:

- **defra-design**: [echo-prototype](https://github.com/defra-design/echo-prototype) (`gem-c-translation-nav`)
- **dwp**: [bsp-prototype](https://github.com/dwp/bsp-prototype) (`gem-c-translation-nav`)
- **alphagov**: [emergency-alerts-admin-ui-prototype-new](https://github.com/alphagov/emergency-alerts-admin-ui-prototype-new) (`hmrc-language-select`)
- **defra-design**: [applications-and-permissions-prototype](https://github.com/defra-design/applications-and-permissions-prototype) (`hmrc-language-select`)
- **defra-design**: [laps-prototype](https://github.com/defra-design/laps-prototype) (`hmrc-language-select`)
- **dwp**: [mcmc-prototype](https://github.com/dwp/mcmc-prototype) (`dwp-language-toggle`)
- **dwp**: [prototype-repay-my-debt](https://github.com/dwp/prototype-repay-my-debt) (`dwp-language-toggle`)
- **dwp**: [repay-my-debt-prototype](https://github.com/dwp/repay-my-debt-prototype) (`dwp-language-toggle`)

</details>

## Repos by cluster and organisation

### language-navigation — 26 repos, 13 orgs (24 production)

All five design-system implementations cover the same job: a list of language links, usually in the header or service navigation. 15 of the 26 repos extend GOV.UK Frontend already.

#### DEFRA (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [aqie-front-end](https://github.com/DEFRA/aqie-front-end) | [`src/client/assets/stylesheets/sass/components/_dwp-language-toggle.scss`](https://github.com/DEFRA/aqie-front-end/blob/HEAD/src/client/assets/stylesheets/sass/components/_dwp-language-toggle.scss) | SCSS/CSS only |  | yes |  |
| [epr-payment-frontend](https://github.com/DEFRA/epr-payment-frontend) | [`src/EPR.Payment.Portal/assets/scss/components/_language-toggle.scss`](https://github.com/DEFRA/epr-payment-frontend/blob/HEAD/src/EPR.Payment.Portal/assets/scss/components/_language-toggle.scss) | SCSS/CSS only |  | yes |  |
| [epr-register-enrol-frontend](https://github.com/DEFRA/epr-register-enrol-frontend) | [`src/client/stylesheets/components/_language-switcher.scss`](https://github.com/DEFRA/epr-register-enrol-frontend/blob/HEAD/src/client/stylesheets/components/_language-switcher.scss) | SCSS/CSS only |  |  |  |
| [eutd-mmo-fes-external-frontend](https://github.com/DEFRA/eutd-mmo-fes-external-frontend) | [`app/components/languageToggle.tsx`](https://github.com/DEFRA/eutd-mmo-fes-external-frontend/blob/HEAD/app/components/languageToggle.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [waste-organisation-frontend](https://github.com/DEFRA/waste-organisation-frontend) | [`src/server/common/components/languageToggle/macro.njk`](https://github.com/DEFRA/waste-organisation-frontend/blob/HEAD/src/server/common/components/languageToggle/macro.njk) | Nunjucks macro |  |  |  |

#### hmrc (5, 5 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmrc-frontend](https://github.com/hmrc/hmrc-frontend) | [`src/components/service-navigation-language-select/_service-navigation-language-select.scss`](https://github.com/hmrc/hmrc-frontend/blob/HEAD/src/components/service-navigation-language-select/_service-navigation-language-select.scss) | SCSS/CSS only |  | yes | `hmrc-banner`, `hmrc-caseworker-banner`, `hmrc-print-link` |
| [odx-child-benefit-frontend](https://github.com/hmrc/odx-child-benefit-frontend) | [`src/components/AppComponents/LanguageToggle/index.tsx`](https://github.com/hmrc/odx-child-benefit-frontend/blob/HEAD/src/components/AppComponents/LanguageToggle/index.tsx) | UI framework (React/Vue/Svelte lib) |  |  |  |
| [odx-paye-hicbc-frontend](https://github.com/hmrc/odx-paye-hicbc-frontend) | [`src/components/AppComponents/LanguageToggle/index.tsx`](https://github.com/hmrc/odx-paye-hicbc-frontend/blob/HEAD/src/components/AppComponents/LanguageToggle/index.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [odx-paye-iabd-frontend](https://github.com/hmrc/odx-paye-iabd-frontend) | [`src/components/AppComponents/LanguageToggle/index.tsx`](https://github.com/hmrc/odx-paye-iabd-frontend/blob/HEAD/src/components/AppComponents/LanguageToggle/index.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |
| [odx-self-assessment-frontend](https://github.com/hmrc/odx-self-assessment-frontend) | [`src/components/AppComponents/LanguageToggle/index.tsx`](https://github.com/hmrc/odx-self-assessment-frontend/blob/HEAD/src/components/AppComponents/LanguageToggle/index.tsx) | UI framework (React/Vue/Svelte lib) |  | yes |  |

#### communitiesuk (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [epb-data-frontend](https://github.com/communitiesuk/epb-data-frontend) | [`assets/components/_toggle-to-welsh.scss`](https://github.com/communitiesuk/epb-data-frontend/blob/HEAD/assets/components/_toggle-to-welsh.scss) | SCSS/CSS only |  |  |  |
| [epb-frontend](https://github.com/communitiesuk/epb-frontend) | [`assets/components/_toggle-to-welsh.scss`](https://github.com/communitiesuk/epb-frontend/blob/HEAD/assets/components/_toggle-to-welsh.scss) | SCSS/CSS only |  |  |  |

#### DFE-Digital (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [check-your-eligibility-prototype](https://github.com/DFE-Digital/check-your-eligibility-prototype) | [`app/assets/sass/components/_dwp-language-toggle.scss`](https://github.com/DFE-Digital/check-your-eligibility-prototype/blob/HEAD/app/assets/sass/components/_dwp-language-toggle.scss) | SCSS/CSS only | yes |  | `gem-c-contextual-footer`, `gem-c-contextual-sidebar`, `gem-c-govspeak`, `gem-c-related-navigation`, `moj-add-another`, `moj-scrollable-pane` |
| [govuk-frontend-aspnetcore](https://github.com/DFE-Digital/govuk-frontend-aspnetcore) | [`src/GovUk.Frontend.AspNetCore.Docs/Templates/components/language-navigation.liquid`](https://github.com/DFE-Digital/govuk-frontend-aspnetcore/blob/HEAD/src/GovUk.Frontend.AspNetCore.Docs/Templates/components/language-navigation.liquid) | template partial |  |  |  |

#### dwp (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [check-what-you-owe](https://github.com/dwp/check-what-you-owe) | [`app/assets/sass/components/_language-selector.scss`](https://github.com/dwp/check-what-you-owe/blob/HEAD/app/assets/sass/components/_language-selector.scss) | SCSS/CSS only |  | yes |  |
| [Searchlight](https://github.com/dwp/Searchlight) | [`app/v6/views/update/person/update/components/language-selector.njk`](https://github.com/dwp/Searchlight/blob/HEAD/app/v6/views/update/person/update/components/language-selector.njk) | template partial |  |  |  |

#### ministryofjustice (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [hmpps-book-a-prison-visit-ui](https://github.com/ministryofjustice/hmpps-book-a-prison-visit-ui) | [`assets/scss/components/_language-toggle.scss`](https://github.com/ministryofjustice/hmpps-book-a-prison-visit-ui/blob/HEAD/assets/scss/components/_language-toggle.scss) | SCSS/CSS only |  | yes |  |
| [hmpps-probation-check-in-ui](https://github.com/ministryofjustice/hmpps-probation-check-in-ui) | [`assets/scss/components/_language-toggle.scss`](https://github.com/ministryofjustice/hmpps-probation-check-in-ui/blob/HEAD/assets/scss/components/_language-toggle.scss) | SCSS/CSS only |  | yes |  |

#### ONSdigital (2, 2 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dis-design-system-go](https://github.com/ONSdigital/dis-design-system-go) | [`assets/scss/dp/overrides/components/_language-toggle.scss`](https://github.com/ONSdigital/dis-design-system-go/blob/HEAD/assets/scss/dp/overrides/components/_language-toggle.scss) | SCSS/CSS only |  |  |  |
| [sixteens](https://github.com/ONSdigital/sixteens) | [`scss/components/_language-toggle.scss`](https://github.com/ONSdigital/sixteens/blob/HEAD/scss/components/_language-toggle.scss) | SCSS/CSS only |  |  |  |

#### alphagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [forms-runner](https://github.com/alphagov/forms-runner) | [`app/components/language_switcher_component/_index.scss`](https://github.com/alphagov/forms-runner/blob/HEAD/app/components/language_switcher_component/_index.scss) | SCSS/CSS only |  | yes |  |

#### companieshouse (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [ch-design-system](https://github.com/companieshouse/ch-design-system) | [`app/views/components/language_toggle.html`](https://github.com/companieshouse/ch-design-system/blob/HEAD/app/views/components/language_toggle.html) | template partial |  | yes | `moj-side-navigation` |

#### defra-design (1, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [check-local-aq](https://github.com/defra-design/check-local-aq) | [`app/assets/sass/post-mvp-fixes/components/_language-toggle.scss`](https://github.com/defra-design/check-local-aq/blob/HEAD/app/assets/sass/post-mvp-fixes/components/_language-toggle.scss) | SCSS/CSS only | yes | yes |  |

#### dwpdigital (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [check-what-you-owe](https://github.com/dwpdigital/check-what-you-owe) | [`app/assets/sass/components/_language-selector.scss`](https://github.com/dwpdigital/check-what-you-owe/blob/HEAD/app/assets/sass/components/_language-selector.scss) | SCSS/CSS only |  | yes |  |

#### govuk-forms (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [forms-runner](https://github.com/govuk-forms/forms-runner) | [`app/components/language_switcher_component/_index.scss`](https://github.com/govuk-forms/forms-runner/blob/HEAD/app/components/language_switcher_component/_index.scss) | SCSS/CSS only |  | yes |  |

#### guidance-guarantee-programme (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [pension_guidance](https://github.com/guidance-guarantee-programme/pension_guidance) | [`app/assets/stylesheets/components/_language-toggle.scss`](https://github.com/guidance-guarantee-programme/pension_guidance/blob/HEAD/app/assets/stylesheets/components/_language-toggle.scss) | SCSS/CSS only |  |  |  |

### language-select — 6 repos, 4 orgs (3 production)

No design system exports a component under this name today. The DWP hits are vendored backup copies of HMRC's pre-v7 `language-select` macro; emergency-alerts-govuk's own styles build on the corresponding `hmrc-language-select` class. GOV.UK One Login's `frontend-ui` package is the closest thing to a shared implementation.

#### companieshouse (2, 0 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [acsp-verify-identity-prototype](https://github.com/companieshouse/acsp-verify-identity-prototype) | [`app/assets/sass/components/govuk-language-select.scss`](https://github.com/companieshouse/acsp-verify-identity-prototype/blob/HEAD/app/assets/sass/components/govuk-language-select.scss) | SCSS/CSS only | yes |  |  |
| [ch-account-prototype](https://github.com/companieshouse/ch-account-prototype) | [`app/assets/sass/components/govuk-language-select.scss`](https://github.com/companieshouse/ch-account-prototype/blob/HEAD/app/assets/sass/components/govuk-language-select.scss) | SCSS/CSS only | yes |  |  |

#### dwp (2, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [dwp-kbv-uplift](https://github.com/dwp/dwp-kbv-uplift) | [`.tmp/backup-nunjucks/hmrc/components/language-select/macro.html`](https://github.com/dwp/dwp-kbv-uplift/blob/HEAD/.tmp/backup-nunjucks/hmrc/components/language-select/macro.html) | Nunjucks macro |  |  |  |
| [kbv-prototype](https://github.com/dwp/kbv-prototype) | [`.tmp/backup-nunjucks/hmrc/components/language-select/macro.html`](https://github.com/dwp/kbv-prototype/blob/HEAD/.tmp/backup-nunjucks/hmrc/components/language-select/macro.html) | Nunjucks macro | yes |  |  |

#### alphagov (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [emergency-alerts-govuk](https://github.com/alphagov/emergency-alerts-govuk) | [`app/assets/stylesheets/components/language-select.scss`](https://github.com/alphagov/emergency-alerts-govuk/blob/HEAD/app/assets/stylesheets/components/language-select.scss) | SCSS/CSS only |  |  | `hmrc-language-select` |

#### govuk-one-login (1, 1 production)

| Repo | Example file | Technique | Proto? | Extends GOV.UK? | Community classes used |
|---|---|---|---|---|---|
| [govuk-one-login-frontend](https://github.com/govuk-one-login/govuk-one-login-frontend) | [`packages/frontend-ui/components/language-select/_index.scss`](https://github.com/govuk-one-login/govuk-one-login-frontend/blob/HEAD/packages/frontend-ui/components/language-select/_index.scss) | SCSS/CSS only |  |  |  |

## Adjacent work

Related backlog discussion: ["Supporting multiple languages"](https://github.com/alphagov/govuk-design-system/discussions/6136) (18 comments) — how to make a service work in multiple languages, the legal position on Welsh, and how to let users switch. Open design questions already tracked: right-aligning the switcher at each breakpoint ([govuk-frontend#7245](https://github.com/alphagov/govuk-frontend/issues/7245)), not losing form data when switching language ([govuk-design-system#5751](https://github.com/alphagov/govuk-design-system/issues/5751)) and whether the navigation needs a heading ([govuk-design-system#5576](https://github.com/alphagov/govuk-design-system/issues/5576)). Community-side, translation-nav doesn't validate the languages it's given ([govuk_publishing_components#5532](https://github.com/alphagov/govuk_publishing_components/issues/5532)) and ONS's language selector breaks without JS ([ONSdigital/design-system#3807](https://github.com/ONSdigital/design-system/issues/3807)). The migration question for the 15 repos already extending GOV.UK Frontend — swap to the v6.5.0 trial component or keep local markup — is a service-team decision, not visible in this data.
