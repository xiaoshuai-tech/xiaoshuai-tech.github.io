# Shuai Xiao — Academic Homepage

English academic homepage for Shuai Xiao at Tianjin University.

- Public site: https://xiaoshuai-tech.github.io/
- Repository: https://github.com/xiaoshuai-tech/xiaoshuai-tech.github.io
- GitHub Pages: main branch, / (root).

## Sections

Profile, Brief Bio, Education & Experience, Publications, Awards, and Academic Services. No News or Projects. The publication section currently contains 32 selected papers from 2021 onward in JCR-Q1/CAS-Zone-1 journals or conferences classified A in the [2026 CCF seventh edition](https://www.ccf.org.cn/Academic_Evaluation/By_category/). Xiao's position in the author list is not an inclusion criterion. Papers are grouped by year and then by venue prominence. Each title and [Paper] opens a DOI or official conference page. Asterisks indicate only author-role attributions supported by an original paper or the university's faculty profile; an unmarked name makes no corresponding-author claim. See [the paper-by-paper audit](publication-audit.md) for sources and unresolved roles.

The site uses the actual [HugoBlox Academic CV starter](https://github.com/HugoBlox/hugo-theme-academic-cv), with its biography block, responsive navigation, gradient background, academic typography, and light/dark mode. The accepted content and section order were preserved during the template migration; no News, Projects, or sample CV were added.

Template baseline: `19c27e3de0c3dd5449b6908b08de3a17303fa186`. HugoBlox Kit module: `v0.0.0-20260527025321-61f41d3667f1`. Hugo Extended: `0.162.0`. The theme's MIT license is included in `hugoblox-site/LICENSE.md`, and its attribution remains in the footer.

## Preview

Run a static HTTP server from this directory, then open http://localhost:8000/:

~~~powershell
python -m http.server 8000
~~~

## Editing and rebuilding

- `hugoblox-site/content-shuai/_index.md`: biography, education, selected publications, awards, academic services
- `hugoblox-site/data/authors/me.yaml`: name, appointments, affiliations, contact links
- `hugoblox-site/config/_default/`: site address, theme settings, navigation
- `hugoblox-site/assets/media/authors/me.jpg`: original portrait
- `hugoblox-site/assets/css/shuai-custom.css`: small publication-spacing, mobile, dark-mode, and print adaptations
- `hugoblox-site/assets/js/shuai-navigation.js`: keyboard-accessible mobile menu and close-on-navigation

The root `index.html`, `css/`, `js/`, and `media/` are compiled output, not the editing source. GitHub Pages continues to publish `main` / root; `.nojekyll` disables Jekyll. Rebuild the Hugo source and copy its generated `public/` contents to the repository root when publishing an update. Do not copy the `public` directory itself or publish sample content, `node_modules`, Go/Hugo caches, or local QA files.

With Node.js, Go, Hugo Extended 0.162.0, and pnpm 10.14.0 installed:

~~~sh
cd hugoblox-site
pnpm install --frozen-lockfile --ignore-scripts
hugo --minify
~~~

Search is disabled, so a Pagefind index is not required. The current release was built and checked on Windows. Hugo 0.162.0 can misread the NODE_PATH preamble in pnpm 11's Windows Tailwind wrapper; for that combination, use `node tools/build.cjs` instead of invoking Hugo directly. The helper only fixes the generated local wrapper before running Hugo and does not modify site content.

## Content sources and review status

- Faculty biography, appointments, awards, and reviewing: https://seea.tju.edu.cn/info/1015/3742.htm
- Publication identity and DOI discovery: https://dblp.org/pid/120/4356-1.html
- Owner-provided application document (private review material; not published). It provides the selected papers, awards, and editorial/committee service.
- Article titles, author lists, venues, volumes, pages, and years: publisher-deposited Crossref metadata and official conference/publisher pages where available.
- Google Scholar profile link: https://scholar.google.com/citations?user=A52OoroAAAAJ&hl=en
- Original content/section reference: https://ruizhao26.github.io/
- Current theme: https://github.com/HugoBlox/hugo-theme-academic-cv

Google Scholar was used to find candidate papers, with publication metadata checked against DOI records, publisher/conference pages, and the supplied application. The 2026 TIP paper is included without a corresponding-author asterisk because that role is unconfirmed. The 2026 ICML stenosis-editing paper also has no Xiao asterisk: its original manuscript names Zhuo Zhang for correspondence. The 2026 TCSVT paper was not included because the application and an institutional publication record conflict on whether Xiao is an author. The ACM Multimedia-associated 2022 quality-assessment paper is a QoEVMA workshop paper, not an ACM Multimedia main-conference paper, so it is excluded. Quartile classifications depend on the ranking year and system and should be rechecked for a formal AE application. The audit intentionally leaves author roles unresolved where no reliable paper footnote was accessible, rather than inferring them from author order.

Three student-competition prizes in the application have not been added to Xiao's personal Awards section pending clarification of his role. Professor Xiao should confirm the English translations of titles, awards, and service appointments before using the page for an AE application.

Local metadata, candidate lists, QA scripts/screenshots, and sources.md are review materials and are not part of the published site.

