# ACBA Website — Initial Home Concept

## Scope
A new responsive homepage concept for the Airline Cargo Business Association (ACBA), not the Thai Airfreight Forwarders Association (TAFA). Top-level content categories follow TAFA's public navigation architecture (Home, Association, Members, Training, Activities, Library, Contact) without copying TAFA's institutional claims.

## Current file map
- app/page.tsx — Home composition only
- app/layout.tsx — Site shell, SEO metadata, header and footer
- app/globals.css — CSS entry point
- app/site-styles.css — Brand design system & responsive styles
- app/site-content.ts — Navigation, evidence-backed news and image credits
- app/site-header.tsx / site-footer.tsx — shared chrome
- app/site-photo.tsx / site-section-heading.tsx — reusable presentation parts
- app/section-hero.tsx — fullscreen hero with existing video
- app/section-about.tsx — About / association overview
- app/section-focus.tsx — industry work areas
- app/section-news.tsx — real source-linked news
- app/section-community.tsx — members, training and industry resources
- public/home/banner/13371669-uhd_3840_2160_24fps.mp4 — **original client-provided hero video, untouched**

NOTE: The connected BDxA workspace is currently in restricted command mode and refused \`mkdir\`. All UI concerns are still separated into dedicated files. When folder creation is permitted, move these files into app/components, app/sections, and app/data, and update imports.

## Verification and publication notes
- News entries directly reference CAAT and Suvarnabhumi Airport Cargo Customs Office source pages.
- ACBA registration year 2002 comes from historical government association records.
- Industry work descriptions are summaries of documented activities. They are **not ACBA's official legal objectives, vision, or mission**.
- The historical contact email and phone records have not been used because ownership/current availability is unverified.
- A members directory, committee biographies, membership types, and official contact details require confirmation from ACBA.
- The provisional mark is NOT the registered ACBA logo. Replace on receipt of a brand file.
- Site indexation is disabled via metadata robots in app/layout.tsx until client approval. Remove this directive on launch.

## Media
Hero: Client-provided video.
Other editorial photographs: Pexels free-stock media, remotely loaded (no generated AI images).
1. https://www.pexels.com/photo/airplane-cargo-loading-at-airport-terminal-32642359/ — Anderson Wei
2. https://www.pexels.com/photo/boxes-being-loaded-onto-an-airplane-9749472/ — Ethan Nguyen
3. https://www.pexels.com/photo/cargo-airplane-loading-at-night-at-airport-35424560/ — Pexels contributor
For production, consider downloading, compressing and locally hosting authorized photos. Follow https://www.pexels.com/license/.

## Content references
- TAFA public structure reference: https://www.tafathai.org/objectives
- ACBA mentioned in CAAT announcement: https://www.caat.or.th/caat-media/203830/
- ACBA participation in customs meeting (Oct 20 2026): https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89798
- ACBA participation in customs meeting (Oct 14 2026): https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89727

## Development
- Next.js 16.4.3, React 19.3.0, Tailwind CSS 4.
- npm run dev / npm run build / npm run lint.
- BDxA \`run_command\` currently reports a tool error on npm run commands; the build has not yet been confirmed.
