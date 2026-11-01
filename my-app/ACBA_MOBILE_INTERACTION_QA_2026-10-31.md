# ACBA mobile interaction polish — 31 October 2026

## Completed in working tree
- **Home latest-news row:** horizontal touch carousel with scroll snapping at <=760px, next card peeks into frame, swipe hint. Desktop news cards retain normal grid.
- **Training catalog:** tablet/phone grid is **two cards per row** (including 320/393px); compact images, title/description truncation, published fee. Desktop has five explicit category tabs with item counts; phone has a native category selector with count, keyboard support and focus ring.
- **About banner:** repaired image/carousel/heading geometry. At <=1024px image has an explicit height and text follows beneath it. Thumbnails/arrow controls are inside the photo and cannot overlap title.
- **Buttons:** controls, tabs, CTAs and arrow buttons now have consistent rectangular 8–10px corner rounding on both desktop and mobile, while preserving link text and card styles.
- **Mobile navigation:** fixed right-side drawer with width about 58% on typical phones (62% on <=430px to keep menu labels usable). Dark 68% overlay occupies the remaining viewport and closes menu when tapped. Internal menu scroll area separate from fixed join/contact footer. Nested member/training links are toggled in-place (accordion), not shown as a very long list. Focus trap, close button, Escape, resize handling and background scroll lock included.
- **About timeline:** new client-side requestAnimationFrame scroll listener updates CSS custom property so the red rail grows down to the viewport scroll playhead. ResizeObserver handles page size changes; no dependence on experimental view-timeline animation.

## Files
- app/site-header.tsx (drawer, scrim, focus management)
- app/training-course-browser.tsx (category options and two-column layout)
- app/about-timeline-progress.tsx (new)
- app/about-history-timeline.tsx (wraps scroll progress)
- app/page-home.tsx (news swipe hint)
- app/site-v20-mobile-polish.css (new)
- app/globals.css (last import)

## Static verification
- New stylesheet imported last and balanced CSS braces/comments.
- Course-browser icon names compatible with app/ui-icons.tsx.
- Mobile drawer close/scrim/trap and submenu accordion present.
- Two-column mobile course grid has a dedicated post-V19 override.
- Scroll progress client wrapper mounted around actual timeline spine/list.
- Responsive About carousel sets min-height:0 and fixed photo heights at phone breakpoints.

## Pending visual/browser QA
- **393px / iPhone 15**: Home news swipes; course has exactly two cards per row; About title begins *after* image; side drawer ~58–62% screen; tap dimmed area dismisses. Try expanding training while scrolling the drawer.
- **320px and 430px:** labels, fees, form and course items must not overflow.
- **768px and 1024px:** desktop-to-tablet transitions, carousel controls and document/hero alignment.
- **Desktop:** verify rectangular CTAs and unaffected desktop nav.
- **Timeline:** scroll forward/back through multiple years and verify red rail follows; viewport resize and reduced-motion.
- Commands attempted via BDxA: `npm run lint` and `npm run build` both failed internally. Neither is counted as a successful test. Backend untouched.
