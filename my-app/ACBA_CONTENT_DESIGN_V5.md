# ACBA Website — Content & Design V5 (28 October 2026)

## Visual changes
- Primary accent: brighter RED (#df2735), used sparingly in navigation, CTAs, category tags and icon strokes.
- Secondary: very pale SKY BLUE (#e5f6ff and #bce7fc). Navy is retained only for regular text/dark contrast, not as the secondary accent.
- HOME retains the full-bleed client-provided video in `public/home/banner`. V5 removes previous heavy/blurred dark wash and introduces a clear white primary button with a lighter secondary glass CTA.
- ABOUT: split half-photo/half-white hero inspired by supplied reference. The photo rail has working previous/next controls and selectable thumbnails. Added registration, public record timeline, industry background and FAQs.
- TRAINING: white travel/editorial-style hero with photo collage; topics, filters and image-rich verified external course directory; added CAAT Known Consignor explainer.
- MEMBERS: kept association-focused top, added sourced membership rate example and industry network evidence, plus useful FAQs.
- RESOURCES: expanded from a short link list into 8 source-backed resources with interactive category filters and explainers for KC, RA and Suvarnabhumi Free Zone.
- CONTACT: added DBD registered record, office address, historical directory phone, and explanatory FAQs, with conspicuous warnings that working contact details still need client verification.
- HOME: added non-photo factual context blocks with source links.
- NEWS & ACTIVITIES: unchanged editorial copy and articles; only accent / surfaces refined.

## Sources used (external links, not ACBA's own policies)
- DBD updated trade association register, report dated **10 March 2026**, entry 195 on page 28:
  https://www.dbd.go.th/download/regis_file/list_association_all.pdf
- Thai Chamber trade association network:
  https://www.thaichamber.or.th/about/network/trade-associations/services-supply-chain
- BAR Thailand consultant listing:
  https://barthailand.org/?page=Executive+Committee
- TAFA About US mentioning historical cooperation:
  https://www.tafathai.org/about-us
- CAAT June 2026 meeting with ACBA:
  https://www.caat.or.th/caat-media/203830/
- CAAT Known Consignor guidance:
  https://www.caat.or.th/certificate_license/180224/
- AOT Free Zone airport cargo map:
  https://freezone.airportthai.co.th/map.php
- AOT Digital Cargo initiatives:
  https://www.airportthai.co.th/en/digital-technology-and-innovation/
- TAFA publicly advertised training courses with ACBA member rates:
  https://www.tafathai.org/basic-air-cargo-tariff-course-training
  https://www.tafathai.org/en/air-cargo-load-handling
  https://www.tafathai.org/en/dangerous-goods-competency-base-training-and-assessment-cbta-3-2

## Current scope & limitations
- ACBA's official vision, objectives, member roster, governing committee, current phone/email and membership eligibility are not yet verified. Do not invent them.
- Training cards link to TAFA pages; prices are examples of published rates, not a guarantee of a current seat, schedule or entitlement. User should check with TAFA before applying.
- ACBA membership form is still a design-only preview. Not connected to an application database.
- English routes retain all primary page sections. News articles were not factually rewritten by this pass.
- Search-engine indexing is still disabled until owner approval.
- New components and styles: `app/site-verified.ts`, `app/training-course-browser.tsx`, `app/about-visual-carousel.tsx`, `app/resource-explorer.tsx`, `app/site-v5.css`, `app/site-v5-pages.css`.
- Existing app structure is file-separated, but the remote BDxA workspace's command policy still does not allow creating directories or running npm build/lint; these must be checked through a permitted local session.
- Next.js dev log reports successful recompilations after edits; this does not establish a production build or visual screenshot QA.
