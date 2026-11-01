# ACBA — Content polish (Banner-preservation pass)

## Explicit user instruction
**Do not modify ANY banner/hero.** This pass preserves the existing Home video hero, About split-image banner, Members banner, News journal cover, Training hero, Library banner, Contact hero and Join hero. No banner copy, images, layout, button designs or hero motion were intentionally changed.

## Completed (below-banner content only)
- **Typography and readability:** scoped styling for section headings, body copy, source captions and document summaries. Improved contrast of previously pale text. Balanced line breaks, overflow wrapping and spacing on narrow screens.
- **About:** a scroll-driven progress rule on the existing timeline where supported, responsive fallback, distinct section-entry motion; the interactive 3-topic content switch now supports arrow-key/Home/End navigation, maintains tab semantics and honors reduced motion.
- **Members:** in the training/knowledge section BELOW the hero, changed illustrative photograph from the more generic apron shot to a cargo loading photo. The directory placeholder has an unobtrusive editorial rule instead of a large bordered card. No false member directory entries added.
- **News:** improved article-row imagery motion and search input focus; results count updates with filters/search, and stock-photo alt text explicitly describes it as illustrative instead of pretending it is the original event.
- **Training:** course photographs now use responsive source widths, descriptive text legibility improved; layout and hero unchanged.
- **Resources:** long catalog entries and category filters are more responsive; mobile filter strips scroll horizontally rather than wrapping into dense stacks; glossary opens with a restrained transition.
- **Navigation:** active News tab remains highlighted when reading an individual article; desktop and mobile navigation current-state semantics improved. TH/EN routes preserved.
- **Performance:** created `app/content-photo.tsx` for **below-banner** Pexels images only, using `srcSet`, `sizes`, lazy-loading, async decoding and low-fuss no-referrer handling. It is used only by Home service/news/impact content, Members knowledge image, News listing thumbnails, About topic-switching imagery and Training course thumbnails. `app/site-photo.tsx` and all existing hero image/video markup are unchanged.
- **CSS maintainability:** added scoped polish rules directly to existing `app/site-v8-layout.css` and `app/site-v8-responsive.css`, avoiding a new global theme layer. Legacy V4–V8 CSS was **not globally consolidated**, because a broad CSS refactor could change approved banners without browser visual verification. No broad selectors that target the hero were added.

## Files
- NEW: `app/content-photo.tsx`
- UPDATED: `app/page-home.tsx`, `app/page-members.tsx`, `app/news-journal.tsx`, `app/about-focus-switch.tsx`, `app/training-course-browser.tsx`, `app/site-header.tsx`, `app/site-v8-layout.css`, `app/site-v8-responsive.css`
- UNCHANGED: `app/page-about.tsx`, `app/page-news.tsx`, `app/page-training.tsx`, `app/page-resources.tsx`, `app/page-contact.tsx`, `app/page-join.tsx`, `app/page-join-english.tsx`, `app/site-photo.tsx`, `app/globals.css`

## QA
- Relative imports and CSS imports checked — no missing referenced files in app.
- Edited TSX and CSS files checked for matching curly brackets (static check only).
- Latest available Next.js development log includes successful compilation messages.
- Production `npm run build` could not be executed through BDxA: tool returned an internal error. No production build or browser-based visual regression test is claimed.
- Before shipping, run `npm run build`, `npm run lint`, check key breakpoints (375, 768, 1440) and verify banners are pixel-identical to the approved version.

## Avoid changing without user approval
- All banner/hero visuals, interactions and copy
- Primary red/white, and blue #0080FF as a rare accent
- No forbidden icon-first bordered cards; no AI-sparkle motifs
- Do not turn external industry sources into official ACBA member records
