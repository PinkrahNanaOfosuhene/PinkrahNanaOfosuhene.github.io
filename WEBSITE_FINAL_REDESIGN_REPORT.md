# Website Final Redesign Report

## Files Changed

- `index.html`
- `research.html`
- `projects.html`
- `publications.html`
- `cv.html`
- `contact.html`
- `climbs-project.html`
- `compound-heat-dryness.html`
- `hydro-project.html`
- `wrf-project.html`
- `tcci-project.html`
- `styles.css`
- `script.js`
- `WEBSITE_UPDATE_REPORT.md`

## Deleted / Pruned Sections

- Removed the homepage `Tools of the Trade` section.
- Removed unrelated AI/competition content from the visible portfolio and CV:
  - Kaggle references
  - Text-to-motion / sign-language retrieval project
  - TF-IDF, retrieval, ablation, and model-selection competition language
  - AnimalCLEF / unrelated computer-vision project
  - Generic machine-learning experimentation cards
- Removed duplicate or distracting metric blocks where they weakened the academic focus.
- Removed dark-theme decorative styling, glow effects, gradient-heavy visual treatment, and corrupted icon text.

## Design Changes

- Replaced the dark portfolio theme with a professional academic light theme.
- Used a restrained palette: white/off-white backgrounds, dark navy/charcoal text, muted blue accents, subtle borders, and minimal shadows.
- Standardized typography around Inter.
- Simplified cards, buttons, page headers, footer, and navigation.
- Improved mobile navigation using a semantic button and `aria-expanded` state.
- Reduced visual clutter so the site reads more like an early-career researcher profile than a student hobby portfolio.

## Wording Changes

- Rebuilt the homepage around the first 5-10 second message:
  - Pinkrah Nana Ofosuhene
  - Atmospheric Scientist | Severe-Storm Climatology | Climate Data Science
  - Graduate Research Assistant at Western Kentucky University
  - ERA5, CMIP6, WRF/WPS, Random Forest, NOAA Storm Events, HPC workflows, and Ohio River Basin severe-weather environments
- Rewrote top-level pages to prioritize atmospheric science, climate science, severe weather, hydroclimatology, numerical weather prediction, climate extremes, and climate data science.
- Reframed project pages into concise academic briefs with:
  - Objective
  - Datasets
  - Methods
  - Outputs
  - Research relevance
- Updated the contact page tone to: research collaboration, PhD opportunities, internships, and scientific communication.

## Consistency Fixes

- Official name standardized as `Pinkrah Nana Ofosuhene`.
- Phone standardized as `+1-364-219-1394`.
- Email standardized as `pinkrahnanaofosuhene9690@gmail.com`.
- Email links use `mailto:pinkrahnanaofosuhene9690@gmail.com`.
- Phone links use `tel:+13642191394`.
- Navigation standardized across pages:
  Home, Research, Projects, Publications, CV, GitHub, LinkedIn, Contact.
- Publication statuses kept conservative:
  - Kentucky Mesonet vs NOAA Atlas 14: under editorial review at JoASC.
  - Severe-weather Random Forest manuscript: in preparation.
  - Ghana heatwave manuscript: submitted for review.
  - Northern Ghana heatwave abstract: abstract published by Ghana Science Association.
- CLIMBS wording now uses `large suite of atmospheric diagnostics and predictors` and `future climate scenarios` instead of conflicting `80+`, `100+`, or unsupported high-emissions wording.

## Checks Completed

- Internal link and image scan: `missing_internal=[]`.
- Local server smoke test returned `200 OK` for:
  - `index.html`
  - `research.html`
  - `projects.html`
  - `publications.html`
  - `cv.html`
  - `contact.html`
- External HTTP checks:
  - GitHub profile: `200 OK`
  - ORB Severe Weather Data Portal: `200 OK`
  - LinkedIn: `999 Request denied` from automated request blocking
- Content scan found no remaining unwanted terms:
  - Kaggle
  - Text-to-Motion
  - Sign-Language
  - TF-IDF
  - Ablation
  - Model Selection
  - AnimalCLEF
  - Tools of the Trade
  - high-emission
  - conflicting `80+` / `100+` CLIMBS claims
  - old phone number
- `git diff --check` passed, with only normal Windows CRLF warnings.

## Remaining Uncertainties

- LinkedIn should be manually opened in a browser because LinkedIn blocks automated checks.
- A WKU email was not provided, so the Gmail address remains the public email.
- No final academic CV PDF was verified in the repository, so the CV page says: `Updated academic CV PDF coming soon.`
- I did not add or invent any publications, awards, acceptances, affiliations, or external credentials.
