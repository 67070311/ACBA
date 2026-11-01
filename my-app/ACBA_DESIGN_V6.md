# ACBA — V6 design/content update — 28 Oct 2026

## User's seven requested changes
1. Replace Home three pastel verified cards: done, now editorial split with large 2002 year and three sourced timeline entries (DBD, AOT, FAPAA).
2. Change Home hero CTA buttons to compact airline check-in / flight status style: done, two white quick-link tiles, compact icons, chevron.
3. Expand About: official DBD registration and date, Thai Chamber listing, TAFA collaboration, BAR adviser listing, AOT Free Zone useful links; FAPAA education report with course statistics.
4. Expand Members: a clearly labeled industry evidence ledger (FAPAA, AOT and BAR), plus existing TAFA course-member rate references and FAQs. Do not label these organizations as current ACBA members.
5. Redesign News & Activities fully: editorial journal header, image-led cover, interactive category filters and keyword search, horizontal stories, new article detail layout. Article source facts remain unchanged.
6. Remove the icon from the floating text banner on Training: done.
7. Redesign Resources: Reading Room hero with decorative paper illustration, sidebar filter, search, list-style source documents, expandable terminology.

## Important factual distinction
The FAPAA PDF published/presented in **June 2024** is titled **Education Report 2023**. Its course stats (11 classes, 218 trainees; 9 DGR classes/160 and 2 tariff classes/58) describe the report's period, not 2024 enrollment figures. All revised website claims explicitly label it "Education Report 2023, presented in 2024."

## Verifiable sources
- DBD association list: https://www.dbd.go.th/download/regis_file/list_association_all.pdf
- AOT Free Zone resource directory listing ACBA: https://freezone.airportthai.co.th/fz_useful_link.php
- FAPAA/TAFA Education Report 2023 (presented in June 2024): https://www.fapaa.org/wp-content/uploads/2024/05/2024-Education-report-Thailand-TAFA.pdf
- Thai Chamber group listing: https://www.thaichamber.or.th/about/network/trade-associations/services-supply-chain
- TAFA About Us: https://www.tafathai.org/about-us
- BAR Thailand advisory listing: https://barthailand.org/?page=Executive+Committee
- TAFA Basic Air Cargo Tariff fees: https://www.tafathai.org/basic-air-cargo-tariff-course-training

## Files
New:
- app/home-association-story.tsx
- app/news-journal.tsx
- app/site-v6.css
- app/site-v6-pages.css

Edited:
- app/page-home.tsx, page-news.tsx, page-about.tsx, page-members.tsx, page-resources.tsx, page-training.tsx
- app/resource-explorer.tsx, site-verified.ts, globals.css

## Testing / known limits
- New files and imports checked and no missing file imports detected.
- CSS braces match; the earlier double-dot CSS selector in site-v5-pages.css is already corrected.
- Last development log entries report compilation success. Historical log still includes earlier CSS and favicon errors, not confirmed new errors.
- Production npm build/lint cannot be launched from BDxA command runner owing to restriction; final production build and browser visual QA remain unverified.
- BDxA currently cannot mkdir nested route/component directories, so files remain modularized in app/ until permission changes.
- All membership application forms remain demonstration-only pending an approved backend.
