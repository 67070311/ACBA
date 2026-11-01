# ACBA Website V8 — redesign review (28 October 2026)

## Brief
1. **BLUE SAMPLE IS #0080FF / RGB (0,128,255)**, sampled directly from the user-provided swatch. It is a restrained accent (thin rule, category/status, focus outline) — never a full-page background.
2. **Reduce blue everywhere.** Large panels are neutral white and near-white gray. Footer, Home impact, About reports, Training courses, Library and related pages no longer use pale sky blue as dominant surfaces. Bright red remains the primary association brand accent.
3. **Never use the forbidden card style**: large thin-outline rounded white boxes with a blue rounded-square icon at top, title and description, small number in a corner. Relevant structures have been changed rather than merely recolored:
   - Training `learning-topic-card` is a slim numbered editorial row, no icon.
   - Members `members-v7-role` is a numbered text list, no icon.
   - Members `member-journey-item` is a timeline list, no icon.
   - Join `join-information-grid` is a reading list, no icon.
   - About `about-v7-switch-menu` uses text tabs without icons.
   - About facts remove icon ornaments.
   - Contact info panel removes top icon.
   - Home impact removes the icon badge and decorative circle cluster.
   - Photo-led cards are retained where structurally different from the forbidden design.
4. **News & Training**: preserve the approved layouts; use white/neutral tones and bright red; removed pink headline highlight on News image, reduced the cool/cyan cast and neutralized the split CTA icon panel. Training structure remains, only its older icon-led cards are converted to editorial rows and blue panels neutralized.
5. **Members**: replaced busy full-image background with split white editorial hero, large clean headline, just one isolated aircraft image, internal CTAs, no float/glass card.
6. **Library**: replaced every prior hero concept (stacked papers and two layered photo collage) with a spacious editorial masthead and ONE wide photo underneath. Rebuilt main directory component with a horizontal category bar, inline search and well-spaced text-row document index. FAQ glossary is an accordion, no cards.

## Implementation
New styles in:
- `app/site-v8-foundation.css`
- `app/site-v8-layout.css`
- `app/site-v8-responsive.css`

All imported last by `app/globals.css`.
Revised TSX:
- `app/page-members.tsx`
- `app/page-training.tsx`
- `app/page-resources.tsx`
- `app/resource-explorer.tsx`
- `app/page-about.tsx`
- `app/about-focus-switch.tsx`
- `app/page-contact.tsx`
- `app/page-home.tsx`
- `app/join-information.tsx`
- `app/ui-icons.tsx` — registered phone icon for existing Contact icon use.

No changes to verified news facts, URL slugs or members policy. Existing TH/EN routes remain.

## Verification
- Reviewed key page files across Home, About, Members, News, Training, Library, Contact, Join TH and EN.
- Checked relative imports and CSS brace balance for new files. Relative imports exist; all new CSS braces are balanced.
- Development Log's recent entries report successful recompiles, with no new errors in the latest log slice at verification time.
- The BDxA remote command runner still errors internally for `npm run build`, so **production build and browser visual QA remain unverified**.
- User can inspect in local dev at localhost:3000; Cmd+Shift+R if cached styles remain.

## Design constraints to preserve
- Do not restore the forbidden icon-first outline card.
- Do not promote vivid blue to background; exact accent #0080FF only.
- Primary brand colors remain red, white and dark neutral type; navy is not a supporting background color.
- No sparkles/AI-related motifs.
- About's split hero remains as previously approved.
- Do not present general industry information as official ACBA member records or policies.
