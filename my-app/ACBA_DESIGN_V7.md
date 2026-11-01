# ACBA Website / V7 — 28 October 2026

## Scope completed

### Color system
Use bright red + white + **sky blue (ฟ้าอ่อน)**, NOT navy as a supporting brand color.
Current V7 CSS overrides previous dark-blue section backgrounds in Home impact, About report statistics and Footer with pale sky. Charcoal remains as accessible text color. New styles are split into app/site-v7.css and app/site-v7-responsive.css and imported by app/globals.css.

### About
- Existing split hero is preserved.
- Removed all outbound external links in the About page (DBD, AOT, BAR, TAFA, FAPAA and timelines are now read-only text/citation labels).
- Adjusted alternating white + pale-sky sections to avoid adjacent oversized colored panels.
- Added accessible interactive tab-switching section, with 3 evidence-based themes (industry collaboration, Known Consignor, training) and animated photo/content transition, respecting reduced-motion settings.
- Added a 4-step air-cargo ecosystem explainer with a clear disclaimer that it is general industry education rather than an ACBA-owned service.
- Kept verified DBD facts, historical FAPAA report data, external network references in plain readable text and FAQ.

### Members
- Replaced previous split hero with full cargo photo, light white-to-transparent fade, large editorial headline, internal member enquiry CTA and an overlay caption.
- Removed the previously oversized THB 9,500 member fee card from the Members page.
- Added 4 stakeholder-role explanations (airlines, forwarders, ground/cargo terminals, regulators), all explicitly distinguished from an official ACBA membership roster.
- Added historical education collaboration coverage, with 11 training classes and 218 participants from TAFA's Education Report 2023.
- Retained source-backed industry evidence and membership enquiry workflow section; does not claim that TAFA/AOT/BAR entities are ACBA members.

### News & Activities
- Kept existing Cargo Journal concept, replaced the photo CTA with a rectangular white editorial action and pale-pink icon tile.
- Added 4 **industry news** entries to app/site-content.ts:
  1. 21 Oct 2026 electronic air transshipment progress
     https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89810
  2. 8 Oct 2026 JICA/EAC delegation visit
     https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89671
  3. 7 Oct 2026 Myanmar Customs Brokers Association visit
     https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89662
  4. 5 Oct 2026 AOT Cargo Clearhouse discussion
     https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89643
- Those four releases do NOT indicate ACBA participation: each is explicitly flagged 'INDUSTRY NEWS' with associationInvolved:false.
- News collection now totals 7 entries and includes search and 5 filter choices (all, ACBA activities, industry news, cargo operations, aviation security).
- news-content.ts centralizes bilingual title, description and dates; articles render English for all seven entries. New pages are sorted by date.
- Home still shows just three cards, not all seven.

### Training
- Original design preserved.
- Added sourced education statistics plus a clear 4-item enrollment preparation checklist (topics, schedule, requirements and eligibility).
- TAFA's Basic Air Cargo Tariff 4-day/80% assessment requirement is sourced from TAFA training page.
- Stated that report statistics are historical and that published course schedules, fees and enrollment conditions need checking.

### Resources / Library
- Replaced old 'stacked paper sheet' banner with split white-to-sky-blue hero and overlapping photos of air cargo / aircraft.
- Kept functional collection sidebar filters, search box and inline glossary.
- Hero internal CTA scrolls to collection (not a dead control).

## Verification and limitations
- Current code files and relative imports checked; none missing. About outbound links count = 0.
- New CSS braces balanced.
- Dev server log shows recent 'Compiled' records after edits but includes historical CSS errors from earlier V5; current V5 malformed '..' selector was previously fixed.
- BDxA remote command runner returned an internal tool error for npm run build and npm run lint even with fully scoped workspace. **Production build, TypeScript validation and visual browser checks remain unverified**, do not claim they passed.
- All photos are illustrative and are not photographs of the referenced meetings. Never imply otherwise.
- Current committee, member roster, formal membership criteria and current ACBA email/phone still need association confirmation.
- The signup form is still preview-only and not connected to backend/database.

## Files touched
app/site-content.ts, app/news-content.ts, app/news-journal.tsx, app/page-news.tsx, app/page-home.tsx, app/page-about.tsx, app/about-focus-switch.tsx, app/page-members.tsx, app/page-training.tsx, app/page-resources.tsx, app/globals.css, app/site-v7.css, app/site-v7-responsive.css.
