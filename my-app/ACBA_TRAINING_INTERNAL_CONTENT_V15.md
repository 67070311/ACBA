# ACBA V15 — Training information stays on-site

## Request
- Remove the **Location / สถานที่** row in the left sidebar of every News article.
- Move the three **training knowledge topics** to below the list of courses.
- Replace training buttons that led directly to third-party websites with internal ACBA pages that actually explain the subject.
- Preserve approved hero/banner layouts and colors.

## Changes made
1. `app/page-news.tsx` — deleted the sidebar's event location field; retained date, publishing agency, and the one original-source reference link. Adjusted 2-column small-screen layout in `app/site-v14-news-articles.css`.
2. `app/page-training.tsx` — reordered to **hero → trust strip → courses → learning topics → security feature → training report → pre-registration checklist**. Three learning topics now have internal read links. Security feature points to `/training/knowledge/security` and existing `/news/known-consignor-caat-june-2026`, not external CAAT domains. No hero code changes.
3. `app/training-course-browser.tsx` — 3 TAFA course cards now open internal course detail routes instead of TAFA URLs. No fake registration flow created.
4. `app/training-learning-data.ts` — added curated TH/EN educational summaries with organized sections, published fees/conditions and explicit organizer/source labels. Topics: basic air cargo tariff, air cargo load handling, dangerous goods/CBTA, ecosystem, operations, and known consignor security.
5. `app/page-training-detail.tsx` — six reader-friendly detail pages with article headings, on-page index, course facts, source notes, disclaimers, and links back to the ACBA site.
6. `next.config.ts` + `app/page.tsx` — rewrites and renderer for `/training/course/:slug`, `/training/knowledge/:slug`, and `/en/` equivalents.
7. `app/site-v15-training-details.css` imported via `app/globals.css`; style scoped to details only; no approved banner styling changed.
8. `app/site-verified.ts` — corrected ambiguous DGR course card title because the linked TAFA page includes more than one DGR course type.

## Representative URLs
- `/training/course/basic`
- `/training/course/handling`
- `/training/course/dgr`
- `/training/knowledge/ecosystem`
- `/training/knowledge/operations`
- `/training/knowledge/security`
- English: prepend `/en` to each path.

## Source checks (29 October 2026)
- TAFA Basic Air Cargo Tariff: https://www.tafathai.org/basic-air-cargo-tariff-course-training
- TAFA Air Cargo Load Handling: https://www.tafathai.org/en/air-cargo-load-handling
- TAFA Dangerous Goods/CBTA: https://www.tafathai.org/en/dangerous-goods-competency-base-training-and-assessment-cbta-3-2
- CAAT Known Consignor manual listing (last updated September 2026): https://www.caat.or.th/certificate_license/180224/
- Existing ACBA meeting report on CAAT KC: `/news/known-consignor-caat-june-2026`

**Important:** The course material summarizes the organizers' published information and does **not** represent current seat availability, official certification, legal advice, or registration managed by ACBA. Source names are displayed on each detail page; the primary clickable actions stay inside the ACBA website.

## QA status
- Static checks: the left news location row is absent; internal links, six data slugs and both language route rewrites exist; no external href remains in training page/cards; imports and braces verified.
- Next development log observed compilation with no recent errors; cannot prove these latest changes compiled without a fresh build.
- Production `npm run build` could not be verified because BDxA returned an internal tool error. Browser/visual QA also remains unverified.
