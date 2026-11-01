# ACBA / About Timeline — V10 (29 October 2026)

## Scope
The user rejected the four-column "ตั้งแต่ต้นทางจนถึงปลายทาง" design, and requested a historical vertical timeline matching their archival-style visual reference. Banner/hero remains unchanged under the previously established rule.

## Design implemented
- Removed the rejected `about-v7-flow` section and the old minimal three-row timeline.
- Installed `AboutHistoryTimeline` after verified registration facts, before subsequent About content.
- Timeline uses a vertical dotted spine, red progress line on scroll, oversize serif year labels, circular date markers, archival-looking image borders, alternating photo/text placement, readable bilingual copy and reduced-motion fallback.
- Year 2002 uses a **graphic re-creation of the registry metadata**, NOT a falsified archive photo.
- Later pictures are explicitly labeled illustrative, **not** photographs of the meetings or original historical events.
- No new external links/buttons were added to About; source organizations are shown as plain text.
- The 2002 and 2026 news events are specific to ACBA. Training numbers are clearly attributed to TAFA/FAPAA collaborative-course reports, not falsely treated as ACBA member headcounts.

## Timeline and verification
1. **5 September 2002**: ACBA Thai trade association registration 0109545000103. Source: DBD official active associations list (PDF p.28), https://www.dbd.go.th/download/regis_file/list_association_all.pdf
2. **2021–2022 report**, shown as 2022: TAFA Education and Training Report mentions ACBA and Thai Flight Training as industry course collaborators. Source: FAPAA, https://www.fapaa.org/pdf/2022/TAFA_Annual_Report_2021-2022__Training.pdf. The document's exact individual training dates are not asserted.
3. **2023 training data**: TAFA Education Report 2023 documents ACBA/TAFA/Thai Flight Training joint training: Dangerous Goods Regulations 9 classes / 160 participants; Basic Air Cargo Tariff 2 classes / 58 participants; combined 11 classes / 218 participants. Presented at FAPAA AGM **13–15 June 2024**. Source: https://www.fapaa.org/wp-content/uploads/2024/05/2024-Education-report-Thailand-TAFA.pdf page 2.
4. **4 June 2026**: ACBA was one of the participants in CAAT's Known Consignor discussion. Source: https://www.caat.or.th/caat-media/203830/ (release 5 June 2026).
5. **20 October 2026**: ACBA participated in a Suvarnabhumi cargo-warehouse congestion coordination meeting with customs, AOT, TG, BFS and TAFA. Source: https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89798.

## Files
- NEW `app/about-history-timeline.tsx`
- NEW `app/site-v10-about-timeline.css`
- EDITED `app/page-about.tsx` (old flow and old row timeline removed, hero not edited)
- EDITED `app/globals.css` (v10 stylesheet imported last)

## QA
- Relative file references and CSS imports verified present.
- Braces and structural JSX tags checked for balance in modified files.
- Recent Next.js dev logs show compilation success and no new errors in examined log tail.
- `npm run build` on the connected machine cannot be verified: BDxA run_command failed internally. **Do not claim production build or browser visual testing has passed.**

## Design guardrails
Do not alter the approved About hero, home/video banner, other page banners, navbar, footer or language switching. No AI-looking icons, sparkles or icon-first bordered cards. Preserve clean white, red and neutral palette, with #0080ff sparingly.
