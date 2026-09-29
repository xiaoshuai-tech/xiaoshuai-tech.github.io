# Shuai Xiao — Academic Homepage

English academic homepage for Shuai Xiao at Tianjin University.

- Public site: https://xiaoshuai-tech.github.io/
- Repository: https://github.com/xiaoshuai-tech/xiaoshuai-tech.github.io
- GitHub Pages: main branch, / (root).

## Sections

Profile, Brief Bio, Education & Experience, Publications, Awards, and Academic Services. No News or Projects. The publication section currently contains 13 selected first- or corresponding-author papers from the supplied application, grouped by year (2021–2026) and then by venue prominence. Each title and [Paper] opens an article or official conference page.

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
- New application source: `C:/Users/lxd/Desktop/附件1.“攀登计划”项目申请书.doc` (private review material; never publish the full document). It provides the selected papers, awards, and editorial/committee service.
- Article titles, author lists, venues, volumes, pages, and years: publisher-deposited Crossref metadata and official conference/publisher pages where available.
- Google Scholar profile link: https://scholar.google.com/citations?user=A52OoroAAAAJ&hl=en
- Original content/section reference: https://ruizhao26.github.io/
- Current theme: https://github.com/HugoBlox/hugo-theme-academic-cv

Google Scholar is linked but was not used as the sole metadata source. The supplied application lists 15 papers; two Jiasai Wu first-author 2026 papers in TIP and TCSVT do not explicitly mark Xiao as corresponding author. They are withheld until that role is confirmed. The ACM Multimedia-associated 2022 quality-assessment paper is a QoEVMA workshop paper, not an ACM Multimedia main-conference paper. No unverified CAS/JCR ranking or corresponding-author symbols are shown.

Three student-competition prizes in the application have not been added to Xiao's personal Awards section pending clarification of his role. Professor Xiao should confirm the English translations of titles, awards, and service appointments before using the page for an AE application.

Local metadata, candidate lists, QA scripts/screenshots, and sources.md are review materials and are not part of the published site.
