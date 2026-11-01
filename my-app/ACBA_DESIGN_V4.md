# ACBA Website — UI refinement 28 October 2026

## Design system
- Follow compact Wonderfly-style navigation reference: small rounded white bar, centered links, TH/EN, a single coral-red Contact CTA at right; mobile-only hamburger menu.
- Primary colors: clean white/near-white, muted red, subtle pale blue; main logo remains \`public/logo/logo.png\`.
- Preserve original full-width Home video hero, with typography directly overlaying the moving footage, no opaque text panel.
- Buttons: uncomplicated pill CTAs. Repeated arrows have been removed.
- Icons: custom handcrafted line SVGs from \`app/ui-icons.tsx\` representing cargo, package, plane, users, shield, training, documentation and contact. No AI-sparkle motifs.
- Motion: existing reveal-on-scroll, subtle image hover and cinematic Home video movement. Reduced-motion preferences respected.

## Navigation
- Home /
- About ACBA /about
- Members /members
- News & Activities /news (consolidated). Historic /activities and /en/activities redirect to the combined page.
- Training /training
- Resources /resources
- Contact /contact (single right-side CTA on desktop; menu item on mobile)
- Language uses Thai and English paths (e.g. /news and /en/news). Clicking TH/EN preserves the current page.

## Layout variations (not copies of the same template)
- Home: preserved full-width video hero, image-based focus tiles and bento layout.
- About: asymmetrical image collage, editorial statement, oversized 2002 milestone, icon-based focus list.
- Members: blue sky split hero, prospective directory status, panoramic aircraft photograph, horizontal member journey.
- News & Activities: magazine-style featured article with thumbnail list and article detail pages, backed by sources that mention ACBA.
- Training: dark split hero, open-format learning rows and source organization CTA.
- Resources: two-column index with sticky explainer and icon-based organization links.
- Contact: large typography, asymmetric image/location panel, quick links.
- Join: preview-only form; does not submit to a backend.

## Source and product boundaries
- Data is from ACBA sources/public mentions and the user proposal, not TAFA's institution-specific mission.
- Member list, current committee, official office contact, DIP and insurance materials are awaiting ACBA confirmation.
- Course topics are examples, not claimed to be an active course schedule.
- The user's uploaded PDF proposal requests real admin/content management, a membership application database/workflow, production deployment and a proper backend. These are NOT implemented by this UI pass; membership form is still a design-only preview.

## Code location
All code in \`my-app/app/\`, split into \`page-*.tsx\`, \`site-*.tsx/css\`, \`ui-*.tsx\`. New layer \`app/site-v4.css\`. The BDxA connector currently blocks directory creation via the command runner. After permission to mkdir, rehome into /components, /features, /data folders; adjust relative imports.

## Verification
Development compilation observed in Next.js log. \`npm run build\` and \`npm run lint\` through the restricted BDxA command runner currently error at tool level; production build/browser visual QA need a local interactive run. After a prior icon-link manipulation caused a browser removeChild error, that DOM-manipulation code was removed.
