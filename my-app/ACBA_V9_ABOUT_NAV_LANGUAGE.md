# ACBA V9 — About, single-pill navigation and language polish

Date: 29 October 2026

## User instructions
- About should be more engaging, less flat/odd.
- Navbar must have ONE rounded white pill only, with no full-width white backdrop.
- TH/EN switch should keep the current page, translate content reliably, and respect Thai/English typography.
- Previous requirement retained: DO NOT change any page banners/heroes.

## Completed
**Navigation**
- The outer .nav-shell.nav-v4 is now transparent; only .nav-inner remains white, round and slightly elevated.
- Mobile menu still functions. Main-nav active styling also applies when viewing child news articles.
- TH / EN switch shows a clearer selected segment, exposes accessible language labels, and links to the equivalent URL (including article slug), not Home.
- Root document language is updated from route for client navigation.

**About below the existing hero**
- Kept approved split-image hero markup unchanged.
- Registration facts now have editorial typography and lighter keyline accents.
- Reworked narrative into 3-column editorial story (headline, text, real cargo-related stock image clearly marked as illustrative).
- Existing interactive three-topic section remains functional with improved spacing and active state.
- Flattened the 218/09/02 report statistics into editorial number treatments instead of repeated cards.
- Added an elegant charcoal/red typography interlude about cross-industry cooperation, with reduced-motion-friendly entrance.
- Refined stakeholder list and scroll timeline styling. No new outbound website buttons on About.
- Red remains ACBA primary; blue #0080FF stays a small accent.

**Language & typography**
- Replaced English-only headings/section labels left visible on Thai pages across Home, About, Members, News, Training, Library and Footer.
- Kept standards/proper names such as ACBA, Air Cargo, TAFA and CAAT untranslated.
- Translated industry/news/resource category labels where they previously appeared in English even on TH.
- Set Thai font metrics and line breaking for below-banner sections (Anuphan; normal Thai letter spacing and loose line breaking), while leaving banner type styling intact.
- Preserved language-specific article URLs /en/news/[slug] and /news/[slug].

## Updated files
- app/site-v9-about-nav-locale.css (new)
- app/globals.css
- app/site-header.tsx
- app/page-about.tsx
- app/page-home.tsx
- app/page-members.tsx
- app/page-news.tsx
- app/page-training.tsx
- app/page-resources.tsx
- app/news-content.ts
- app/resource-explorer.tsx
- app/site-footer.tsx

## QA
- Static checks of imports, referenced CSS, braces and core JSX structural tags found no missing references or mismatches.
- Checked language-path normalization for Home, About and News article URL examples.
- Next development log records successful compiles after updates.
- BDxA run_command fails internally for `npm run build`; a production build and visual browser QA were **not** verified.
- No banner/hero markup and no hero-specific CSS rules were changed in this pass.
