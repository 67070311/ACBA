# ACBA redesign — Home introduction + Newsroom UI

## Scope
- Keep homepage airplane banner/video and moving IndustryTicker unchanged.
- Make the two adjacent Home sections visually distinct: introduction now an ACBA identity/story editorial panel, while the second remains an image-led focus area.
- Redesign News & Activities index into a clean editorial newsroom with ACBA's **white / vivid red** palette and blue **#0080FF** as a small accent.
- Preserve the existing news data, article routes, TH/EN functionality, category filtering, search and original external-source references.

## Code updated
- app/page-home.tsx — revised ONLY the section between hero and IndustryTicker
- app/site-v12-home-intro.css — scoped typography, editorial grid, mobile responsiveness
- app/page-news.tsx — replaced former magazine cover/edition strip with restrained editorial masthead + journal; retained NewsArticlePage unchanged
- app/news-journal.tsx — image-led featured story plus responsive three-column news grid; filters/search update lead and stories; ACBA content clearly distinguished from industry-only reports
- app/site-v13-newsroom.css — responsive, motion-safe page styles
- app/globals.css — imports v12 and v13 CSS

## Design details
- The featured story defaults to the most recent ACBA-related item, not an unrelated industry announcement. Category/search results can update the feature.
- Stock photos described as illustrative, not genuine photographs of the meetings.
- News stories link internally to /news/[slug] or /en/news/[slug]. The article pages still link to original primary sources.
- Refrain from artificial statistics or invented article text.
- No icon-first white bordered card pattern, no purple, no AI motifs.

## Verification
- File existence, relative imports, CSS imports, balanced braces, and section/link JSX tag counts pass static checks.
- Next.js recent development log reports successful compilation, but this is **not** equivalent to production verification.
- BDxA remote `npm run build` failed internally, so production build and screenshot QA remain unverified.
