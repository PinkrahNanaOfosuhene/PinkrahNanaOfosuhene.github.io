# Website Update Report

## Files Changed

- `index.html`
- `research.html`
- `projects.html`
- `climbs-project.html`
- `hydro-project.html`
- `tcci-project.html`
- `wrf-project.html`
- `publications.html`
- `cv.html`
- `contact.html`
- `blog.html`
- `styles.css`

## Major Wording Changes

- Standardized public branding from informal `Nana` / `Nana Pinkrah` usage to `Pinkrah Nana Ofosuhene`.
- Updated the homepage hero identity to: `Atmospheric Scientist | Severe-Storm Climatology | Climate Data Science`.
- Rewrote the homepage profile around WKU Graduate Research Assistant work, ERA5, CMIP6, WRF/WPS, Random Forest, NOAA Storm Events, NCAR Derecho/Casper, TACC, and Ohio River Basin severe-weather environments.
- Removed the redundant homepage statistics strip so the hero panel is the only academic metric snapshot.
- Replaced weak machine-learning wording such as `Kaggle-style` and `leaderboard-driven` with professional language around machine-learning model development, validation, ablation, reproducible workflows, and environmental hazard prediction.
- Reframed project cards to state objectives, datasets, methods, outputs, and research relevance more clearly.
- Updated the CLIMBS project page to use conservative SSP4.5 wording and to emphasize Random Forest classification, NOAA Storm Events, ERA5-to-CMIP6 calibration, WRF/WPS workflows, and regional severe-storm projection relevance.
- Updated CV research bullets to better reflect severe-storm climatology, ERA5/CMIP6 workflows, Random Forest modeling, NOAA Storm Events, and HPC.

## Publication Status Changes

- Added the Kentucky Mesonet vs NOAA Atlas 14 manuscript with the status: under editorial review at Journal of Applied and Service Climatology (JoASC).
- Added the severe-weather Random Forest manuscript with the status: in preparation.
- Updated the Ghana heatwave manuscript status to: submitted for review.
- Updated the Northern Ghana heatwave abstract status to: abstract published by Ghana Science Association.
- Removed wording that could imply acceptance, in-press status, or publication where that was not stated.

## Links Fixed / Checked

- Confirmed no missing internal `href` or image `src` targets.
- Kept email links as proper `mailto:` links using the current Gmail address because no WKU email was available in the local site files.
- Added the LinkedIn profile link found in the existing GitHub profile README: `https://linkedin.com/in/nana-pinkrah-4a4a73212`.
- Kept GitHub links pointed to `https://github.com/PinkrahNanaOfosuhene`.
- Added a clean ORB Severe Weather Data Portal link label pointing to `https://orb-portal.vercel.app/`.
- Verified by HTTP check:
  - GitHub returned `200 OK`.
  - ORB Severe Weather Data Portal returned `200 OK`.
  - ForWEB profile returned `200 OK`.
  - LinkedIn returned `999 Request denied`, which is common for automated curl checks; the URL should be manually opened in a browser to confirm.

## Visual / Responsive Changes

- Adjusted the navigation brand to `Pinkrah.` and reduced its font size slightly to avoid crowding.
- Added grid/card stretching rules for cleaner card alignment.
- Added small mobile safeguards for hero panel text wrapping and hero panel heading size.
- Preserved the existing clean academic visual system and avoided major layout disruption.

## Remaining Issues To Manually Confirm

- Confirm whether `pinkrahnanaofosuhene9690@gmail.com` should remain public, or provide a WKU email address if you want institutional contact branding.
- Confirm the LinkedIn URL in a normal browser session because LinkedIn blocks automated checks.
- Confirm whether the TCCI Ghana page should display a formal manuscript status; I changed the visible status to a safer `Applied Climatology Project`.
- Confirm whether a downloadable PDF CV exists. The CV page is currently labeled as a web CV with print/save behavior.
- Review the final site visually in a browser before publishing because this was edited as a static site without a browser screenshot pass.
