# Shuai Xiao — Academic Homepage

English academic homepage for Shuai Xiao at Tianjin University.

- Public site: https://xiaoshuai-tech.github.io/
- Repository: https://github.com/xiaoshuai-tech/xiaoshuai-tech.github.io
- GitHub Pages: main branch, / (root).

## Sections

Profile, Brief Bio, Education & Experience, Publications, Awards, and Academic Services. No News or Projects. The publication section contains 30 journal papers from 2022–2026, grouped by year in descending order. Each title and [Paper] links to its registered DOI.

The presentation follows the simple white-background academic layout requested by the site owner: portrait on the left, profile on the right.

## Preview

Run a static HTTP server from this directory, then open http://localhost:8000/:

~~~powershell
python -m http.server 8000
~~~

## Editing

- index.html: profile and publication content
- styles.css: desktop, mobile, and print layouts
- script.js: mobile navigation and print button
- assets/shuai-xiao.jpg: portrait

All paths are relative so the site can be served both at the account root and under a project path. A build framework is not required; .nojekyll disables Jekyll processing.

## Content sources and review status

- Faculty biography, appointments, awards, and reviewing: https://seea.tju.edu.cn/info/1015/3742.htm
- Publication identity and DOI discovery: https://dblp.org/pid/120/4356-1.html
- Article titles, complete author lists, venues, volumes, pages, and years: publisher-deposited Crossref metadata for each DOI, with PubMed checks for the 2026 TNNLS and JBHI papers.
- Google Scholar profile link: https://scholar.google.com/citations?user=A52OoroAAAAJ&hl=en
- Layout reference: https://ruizhao26.github.io/

Google Scholar could not be read automatically during this update; it was not used as the sole metadata source. This is a 30-paper selected-publication review list, not a certified CAS-ranking list. Public university-library JCR records were consulted to prioritize Q1 journals (records showing 2024 impact-factor data). JCR quartiles and CAS divisions/Top designations are different; the requested CAS-specific screening remains subject to the owner's confirmation and verification. No unverified ranking or corresponding-author symbols are shown.

The faculty page does not provide award years or editorial-board appointments, so these have not been invented. Professor Xiao should confirm the English translations of appointment and award names before using the page for an AE application.

Local metadata, candidate lists, QA scripts/screenshots, and sources.md are review materials and are not part of the published site.
