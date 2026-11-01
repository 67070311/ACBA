# ACBA — TH/EN language and navigation QA (31 October 2026)

## Completed and changed
- Unified header/footer navigation labels in Thai and English.
- On /news and /en/news the language selector preserves category=activities or category=industry.
- Localized English publisher labels in news detail pages while retaining Thai originals on Thai pages.
- Localized the CAAT Known Consignor reference name on English training detail pages.
- Home news CTA now explicitly covers both news and activities.
- Localized the previously English-only training image alt text.
- Added lang={lang} to all ten main page components, including news and training details.
- Added localized titles, descriptions and Open Graph locale in page metadata.

## Static checks
- All seven news entries match a detailed article, and all seven catalog courses have route detail data.
- Primary route menus and English translations share the same five-item structure.
- Both language/category search views and legacy /activities redirects remain wired.

## Not yet confirmed
- The connector returned internal errors for npm run lint and npm run build.
- Live browser responsive and interactive QA has not been completed here.
- The shared server root currently sets html lang=th; main has explicit TH/EN and client navigation sets document language after hydration. A future routing improvement could set root lang on the server.

## Browser test checklist
- /news?category=activities -> /en/news?category=activities; verify 3 stories.
- /news?category=industry -> /en/news?category=industry; verify 4 stories.
- Check news search, browser back, seven article links, category fallback, old /activities redirect.
- Check English training/source text, courses, and Join fields.
- Check header/footer labels and text wrapping at mobile, iPad, desktop widths.