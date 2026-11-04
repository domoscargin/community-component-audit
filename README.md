# Community component audit

Finds components and patterns that UK public sector design systems have built, groups equivalent ones together, and scores them on how useful they'd be to add to (or improve in) GOV.UK Frontend.

It answers:

- what do lots of other design systems have that we don't?
- which of those does the community backlog ask for?
- which of our components have other teams rebuilt (worth comparing for improvements)?
- which components have government services built for themselves, whether or not any design system has them?
- which community implementations have lots of open issues, especially accessibility ones?

## Running it

You need Node.js 22.15 or later and a GitHub token. The script uses `GITHUB_TOKEN` if it's set, otherwise `gh auth token`.

The npm scripts run Node with `--use-system-ca` so it trusts your operating system's certificate store. This is needed on networks with a TLS-inspecting proxy (such as Zscaler), where the proxy's root certificate is only in the OS store. If you run `node audit.mjs` directly on such a network, add the flag yourself.

```sh
npm run audit
```

This writes to `output/`:

- `report.md` – ranked candidates, components built only in services, our components implemented elsewhere, unmatched backlog discussions and a list of sources
- `scores.csv` – every cluster with its score, each signal and links to every implementation, for sorting and filtering in a spreadsheet
- `clusters.json` – everything, including the matched issues and discussions

API responses are cached in `.cache/` for 30 days, so you can re-run it quickly after changing synonyms or weights. Use `--refresh` to ignore the cache or `--max-age=HOURS` to change the lifetime. The first run scans about 1,200 service repos and takes a few minutes.

### Scanning all UK government repos

`scan-gov-repos.mjs` sweeps a wider list than the audit's service scan. It scans the repos in the [xgov-opensource-repo-scraper](https://www.uk-x-gov-software-community.org.uk/xgov-opensource-repo-scraper/) data (about 14,000 non-archived repos from around 175 government organisations, refreshed daily), using the design-system-github-stats dependents list to mark repos the audit already scans and to detect prototypes.

```sh
npm run scan:gov
```

It scans the repos with the same rules as the audit's service scan (skipping archived repos and anything not pushed to since 2019), and writes to `output/`:

- `gov-repos.md` – components not matched to any design system, most-built components, and repos with the most bespoke components
- `gov-repos.csv` – every implementation with its repo, path and cluster
- `gov-repos-hits.json` – the raw hits, which `audit.mjs` merges into its service scan automatically when the file exists in the output directory (`--services-extra=FILE` to use another file)

About 14,000 repos means about 14,000 API calls, so the first full run takes a couple of hours against GitHub's 5,000-requests-an-hour limit. Trees are cached for 30 days, so an interrupted run resumes quickly. Use `--enumerate-only` to list the repos without scanning, `--only-orgs=a,b` to restrict the sweep, or `--since=DATE` to change the cutoff.

### Options

| Option | Description |
|---|---|
| `--adoption` | Count GitHub code search hits for each community component's CSS class (for example `"moj-timeline"`). Only a fallback: when `class-usage.json` from the repo scan exists, adoption instead counts government repos using each class. Results are cached for 30 days. |
| `--adoption-scope=gaps` | Only run code searches for components that aren't in GOV.UK Frontend |
| `--skip-services` | Don't scan government service repos |
| `--services-extra=FILE` | Extra service hits to merge in (default: gov-repos-hits.json in the output directory, if it exists) |
| `--class-usage=FILE` | Government repo class usage from `scan-gov-repos.mjs --class-usage` (default: class-usage.json in the output directory, if it exists) |
| `--quality=FILE` | axe results from `quality-check.mjs` (default: quality.json in the output directory, if it exists) |
| `--skip-overrides` | Don't classify whether services' versions of covered components extend GOV.UK Frontend (saves a few thousand cached file fetches on the first run) |
| `--services-data=URL` | JSON list of repos to scan, in the [design-system-github-stats](https://github.com/alphagov/design-system-github-stats) `filtered-data.json` format (default is set in `scoring.mjs`) |
| `--only=moj-frontend,hmrc-frontend` | Only include these sources (our sources are always included) |
| `--top=N` | Number of rows in the report's candidates table (default 50) |
| `--out=DIR` | Output directory (default `output`) |
| `--refresh` | Ignore the cache |
| `--max-age=HOURS` | Cache lifetime (default 720 hours, 30 days) |

The audit and the repo scan share the `.cache/` directory.

## How it works

1. **Inventory** – reads each design system repo's file tree with one API call and extracts component and pattern names using the path rules in [`sources.mjs`](./sources.mjs). Sources without a public repo (DWP) are read from their documentation site's index pages instead, and only links on that site count, so links to the GOV.UK Design System are ignored.
2. **Services** – scans every `builtByGovernment` repo (including prototypes) in [design-system-github-stats](https://github.com/alphagov/design-system-github-stats) for components the service built itself. See [Service scanning](#service-scanning).
3. **Cluster** – normalises names (removes prefixes like `moj-` and `hmrc-`, converts `snake_case`, singularises) and merges them using [`synonyms.mjs`](./synonyms.mjs). Each cluster gets a status:
   - `covered` – GOV.UK Frontend has the component
   - `pattern` – the GOV.UK Design System has a pattern but no component
   - `partial` – related to one of ours, as listed in `related` in `synonyms.mjs` (for example date picker → date input)
   - `gap` – we have nothing

   Components found only in services get their own cluster when at least 3 repos have built them.
4. **Signals** – matches these to clusters by title and label, and by body text for distinctive phrases (multi-word or 6+ letters; body-only matches count half):
   - open discussions in the [Community backlog](https://github.com/alphagov/govuk-design-system/discussions/categories/community-backlog)
   - open issues in govuk-frontend and govuk-design-system
   - open issues in each community repo (only counted against that repo's components)
   - adoption: how many government repos use each component's CSS class (from `scan-gov-repos.mjs --class-usage`), with global code search hits as a fallback
   - quality: axe violations found by rendering community implementations (from `quality-check.mjs`)
   - for covered components, whether services' implementations extend GOV.UK Frontend (their file references our macros or classes) or re-implement it
5. **Score** – see [`scoring.mjs`](./scoring.mjs). Each signal is normalised to 0–1, weighted, and the total is out of 100.

| Signal | Default weight | What it means |
|---|---|---|
| prevalence | 0.3 | Other design system organisations with an implementation, discounted when the organisation's sources are stale (18+ months without a push) and scaled by its packages' npm downloads. Many teams building the same thing is the strongest sign of a gap. |
| services | 0.15 | Government repos that built their own version. Markup-bearing files (Nunjucks macros, ViewComponents, template partials, React/Vue components) count fully; lone stylesheets or scripts count 0.4; prototypes count half; repos not pushed to in 3+ years decay to a 0.5 floor at 7 years. |
| backlog | 0.2 | Engagement on matching community backlog discussions (mostly comments – upvotes are nearly always 1) |
| gap | 0.2 | 1 gap, 0.6 partial, 0.5 pattern only, 0 covered |
| ourIssues | 0.1 | Open issues in our repos that mention it |
| communityIssues | 0.05 | Open issues on community implementations, accessibility issues count double |
| quality | 0.1 | axe violations in rendered implementations (only when `quality-check.mjs` has run, otherwise the weight is dropped and the rest rescaled) |
| adoption | 0.1 | Government repos using the class (only when class usage or `--adoption` data exists, otherwise the weight is dropped and the rest rescaled) |

Sources from the GOV.UK Design System organisation (govuk-frontend and govuk-design-system) only decide coverage. They never count towards prevalence, adoption, services or community issues. This is enforced by organisation, so a new source with `org: 'GOV.UK Design System'` is treated as ours even without `ours: true`. GOV.UK Publishing Components counts as a community source.

Covered components appear in a separate section of the report. Their score shows how much activity there is around a component we already have, which is useful for spotting where community versions might improve ours.

## Service scanning

For each repo, the scan looks for files that define a UI component:

| Convention | Example |
|---|---|
| Rails ViewComponent | `app/components/timeline_component.rb` |
| Nunjucks/Jinja component | `components/date-picker/macro.njk` |
| Template partial in a components folder | `app/views/components/_status_card.html.erb` |
| React, Vue or Svelte component | `src/components/SearchBar.tsx` |
| Component script | `assets/javascripts/components/miller-columns.js` |
| Component styles | `assets/sass/components/_back-to-top.scss` |

To avoid counting things that aren't the service's own work, it:

- skips vendored and generated code (`node_modules`, `vendor`, `dist`, `public`, copies of GOV.UK Frontend and other design systems), tests and stories
- skips structural names like `base`, `layout` or `application` (`serviceNameExclude` in [`lib/services.mjs`](./lib/services.mjs))
- drops files whose content (git blob hash) is identical in 5 or more repos, such as Prototype Kit or Rails template boilerplate
- skips repos that are already sources or are kits and framework ports (`serviceRepoExclude` in `sources.mjs`)
- counts each component once per repo

For our own components, a service count often means a service has overridden or extended our component, which is worth looking at for improvements.

## Improving the results

Clustering and matching use names only, so check the output before acting on it.

- **Two things split that should be one** (or merged that shouldn't be) – edit `synonyms` in `synonyms.mjs`.
- **A community thing that extends one of ours** – add it to `related` in `synonyms.mjs` so it's scored as `partial`.
- **Generic words causing false matches** (for example "details" matching "Personal details") – add them to `textMatchStoplist`. They'll then only match a whole title, a title prefix like `Details: …` or `[Details]`, or "details component".
- **Backlog discussions that should match something** – check "Backlog discussions with no implementation found" in the report and add the phrase as a synonym.
- **A new design system** – add an entry to `sources.mjs` with a path regex whose first capture group is the component name. If it has no public repo, use `site` and a `page` per rule instead.
- **Noise in "Built in services"** – add generic names to `serviceNameExclude`, or service-specific spellings (like `datepicker`) to `synonyms`. Single-word names found only in services match issue and discussion titles strictly, like the stoplist.

## Sources

The current sources are GOV.UK Frontend, GOV.UK Design System patterns, GOV.UK Publishing Components, MOJ, HMRC, NHS.UK, NHS App, ONS, Home Office, The National Archives, Scottish Government, DfE, X-GOVUK, HM Land Registry and DWP.

- HM Land Registry components come from `LandRegistry/hmlr-frontend` and patterns from `LandRegistry/hmlr-design-system`.
- DWP Frontend's source isn't public on GitHub, so DWP components and patterns come from the index pages of [design-system.dwp.gov.uk](https://design-system.dwp.gov.uk/). There are no community issues for DWP. The retired key details bar is excluded.

Considered but not included:

- the DVSA design system repo – mostly the documentation website rather than components
- CCS `ccs-frontend` – CMS templates rather than a design system
- ports of GOV.UK Frontend to other frameworks (such as Rails `govuk-components`) – these mostly re-implement our components

### Checking implementation quality

`quality-check.mjs` renders the community implementations of the top-scoring gaps with Nunjucks (using your local govuk-frontend checkout so templates that use our macros work) and runs axe-core on the output:

```sh
npm run quality              # top 30 gaps
npm run quality -- --only=timeline,modal
```

Results go to `output/quality.json` and feed the audit's `quality` signal on its next run. Render and fetch failures are recorded but don't count. Colour contrast is skipped because jsdom has no layout.

The audit also compares the structure (tags and ARIA roles) of each top candidate's implementations and flags clusters whose implementations differ enough that they might not be the same component.

### Adoption via class usage

`scan-gov-repos.mjs --class-usage` finds repos that depend on a community npm package (moj-frontend, hmrc-frontend, @dwp/dwp-frontend and friends), then searches their view and template files for each component's CSS class. The result (`class-usage.json`) becomes the audit's adoption signal: government usage rather than global GitHub hits. The first run fetches a lot of files (all cached for 30 days), so allow a couple of hours.

## Tests

```sh
npm test
```
