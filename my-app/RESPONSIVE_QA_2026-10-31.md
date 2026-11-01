# ACBA — Responsive design update
Date: 31 October 2026
Scope: Front-end CSS and header interaction only; backend untouched.

## Files changed
- app/site-header.tsx — expandable tablet/mobile sections, close on outside pointer/Escape/nav click, document scroll lock while menu open, reset on larger screens.
- app/site-v19-responsive.css — new final breakpoint layer, imported last.
- app/globals.css — imports above responsive layer after v18 styles.

## Viewport targets / intended behavior
| Width | Target | Intended |
| --- | --- | --- |
| 320 / 360 | compact phones | no oversized title, small logo/lang/menu, one-column cards, no squeezed inputs |
| 375 / 390 / 430 | standard phones | single-column major content, 44px+ navigation controls, visible menu CTA |
| 600 / 760 | large phone / small tablet | two- or one-column depending on content; forms full width |
| 768 / 820 | iPad portrait | menu drawer, one-column editorial hero, two-column compact cards |
| 1024 | iPad landscape | content-width columns, tablet menu, cards, images and detail sidebars adapted |
| 1180 | narrow desktop | collapses primary navigation to avoid overlap |

## Pages covered
- Home: video/hero height, quick CTA, introduction, services, articles and closing CTA.
- About: hero/visual carousel, history timeline, purpose/leadership, focus switch.
- Members: hero, photo, member directory and application CTA.
- Activities: event listing, image, date, description and article links.
- News: searchable journal, featured item, grid and article detail.
- Training: hero, courses, filters, professional paths, report and course/knowledge detail.
- Resources: library cover, filter/search, glossary and individual resource detail.
- Contact: heading, photo, public records, FAQs and links.
- Join: hero, document preparation, steps, validated local draft form, responsive fields, notice.

## Static QA completed
- All targeted route rewrite mappings present for TH and EN, including /activities, /news/:slug, /training/:type/:slug and /resources/:slug.
- New responsive CSS imported and has balanced braces/comments.
- Header mobile groups are expandable/collapsible, touch controls are >=44px, submenu is internally scrollable.
- Outside click, Escape, navigation and resize close relevant menu states; when open, document background scroll is locked.
- Media rules present for 1180, 1024, 900, 760, 600, 430, 360.
- Existing large-screen desktop styling is retained and adjusted only below tablet breakpoints.

## Limitations and remaining visual checks
- BDxA did not allow npm run lint or npm run build: both calls failed internally. This is **not** a passed build.
- No live browser screenshot/viewport or iOS Safari test was available through this connector. Visual inspection remains necessary for the exact breakpoints above and for actual text wrapping, image cropping and form download behavior.
- No claim of cross-browser or visual QA pass until a real device/browser rendering pass is completed.

## Regression checklist for real-device check
- Header fixed on Home / sticky elsewhere, menu opens/closes without staying on route changes.
- Thai/English navigation for each route, including nested course and library detail pages.
- No horizontal body scroll; avoid clipped focus rings and titles.
- 44px target sizes for menu buttons, filters and main actions.
- No empty 500px panels, duplicate CTA overlap or two-column content squeezed below 600px.
- Forms show keyboard and labels correctly; local draft download remains local.
