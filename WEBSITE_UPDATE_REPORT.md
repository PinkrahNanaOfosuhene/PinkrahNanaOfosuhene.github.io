# Website Update Report

## Files Changed

- `index.html`
- `research.html`
- `projects.html`
- `climbs-project.html`
- `compound-heat-dryness.html`
- `hydro-project.html`
- `tcci-project.html`
- `wrf-project.html`
- `publications.html`
- `cv.html`
- `contact.html`
- `404.html`
- `blog.html`
- `styles.css`
- `script.js`

## Major Content Changes

- Standardized the public name and navigation branding to `Pinkrah Nana Ofosuhene`.
- Updated global navigation order to: Home, Research, Projects, Publications, CV, GitHub, LinkedIn, Contact.
- Added GitHub and LinkedIn to the primary navigation and footer on all pages.
- Strengthened the homepage hero around atmospheric science, severe-storm climatology, climate data science, ERA5/CMIP6, WRF/WPS, Random Forest, NOAA Storm Events, NCAR Derecho/Casper, TACC, and Ohio River Basin severe-weather environments.
- Added homepage sections for selected publications and research collaboration/contact.
- Corrected the homepage compound heat-dryness card so it describes the Kentucky hot-dry workflow rather than the Ghana heatwave manuscript.
- Updated the publications page heading from `Publi cations` styling to `Publications`.
- Updated publication status language conservatively:
  - Kentucky Mesonet vs NOAA Atlas 14: under editorial review at Journal of Applied and Service Climatology (JoASC).
  - Severe-weather Random Forest manuscript: in preparation.
  - Ghana heatwave manuscript: submitted for review.
  - Northern Ghana heatwave abstract: abstract published by Ghana Science Association.
- Updated the CV page to state: `Academic CV PDF coming soon. Current research resume available upon request.`
- Replaced outdated phone references with `+1-364-219-1394`.
- Removed raw GitHub URL display from the contact detail area and used a clean `GitHub` label.
- Cleaned corrupted icon/dash text caused by previous character encoding issues.

## Design Changes

- Kept the dark academic theme because it remains readable and consistent with the existing site.
- Reduced navbar link sizing and widened the navbar max width so the added GitHub/LinkedIn links fit better on desktop.
- Improved mobile menu semantics with a button element and `aria-expanded` behavior.
- Removed broken/corrupted emoji-style icons and replaced them with simple text markers.
- Preserved subdued cards, restrained accent colors, and academic spacing.

## Links Fixed / Checked

- Internal links and image paths: no missing local targets found.
- Local server smoke test returned `200 OK` for:
  - `index.html`
  - `projects.html`
  - `publications.html`
- External HTTP checks:
  - GitHub profile returned `200 OK`.
  - ORB Severe Weather Data Portal returned `200 OK`.
  - LinkedIn returned `999 Request denied`, which is a LinkedIn automated-request block rather than a confirmed broken link.
- Email links use `mailto:pinkrahnanaofosuhene9690@gmail.com`.
- Phone links use `tel:+13642191394`.

## Remaining Manual Confirmations Needed

- Confirm the LinkedIn profile in a normal browser session because automated checks are blocked by LinkedIn.
- Confirm whether a WKU email should replace the Gmail address when available.
- Confirm when the final academic CV PDF is ready so the CV page can link to it directly.
- Confirm whether the CLIMBS project should explicitly name `SSP4.5 intermediate-emissions scenario`; I used broader `future climate scenarios` wording where the scenario documentation was uncertain.

## Content Not Changed Because Uncertain

- I did not invent new publications, awards, acceptances, affiliations, or external URLs.
- I did not mark any manuscript as accepted, published, or in press.
- I did not add a downloadable CV file because no current PDF CV was verified in the repository.
