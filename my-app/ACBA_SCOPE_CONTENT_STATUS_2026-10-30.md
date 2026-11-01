# ACBA — Website scope / editorial decisions
Date: 30 October 2026

## Public website sections retained
1. Home — overview of ACBA, three documented collaboration themes, latest news, visible application CTA.
2. About — registration/history, clearly labeled editorial description of vision/purpose, documented work areas, current committee verification status. Formal objectives/mission are not invented.
3. Membership — visible ACBA member-directory section awaiting confirmation of names, airline logos, member details; clear membership application guide and draft form. No falsely labeled TAFA membership.
4. Association activities — separate /activities and /en/activities with source-backed ACBA meetings, dates, descriptions, illustrative images identified as stock, links to full source-based articles.
5. Industry news — /news and /en/news show industry stories without ACBA participation; no duplicate listing in activities.
6. Training + resources — retained as supplementary information due to previous user requirements; not presented as official ACBA training or services.
7. Contact — DBD historical registration facts clearly separated from current confirmed contacts.

## Removed from visible primary pages
- 16 unrelated TAFA member directory example entries from ACBA member page.
- TAFA membership condition comparison panel from ACBA member page.
- Redundant member journey/role grid, extra repeating knowledge/evidence blocks.
- Duplicate Home impact bento and overlapping association-story section.
- Repeated About narrative/bridge/industry-links/FAQ sections already covered by history, role overview or primary sourced activity records.
- Duplicate association activities in news lists. Articles remain as a single canonical detail page for each source record.

## Requires signed/verified association content to finish
- Official vision, mission, objectives and working guidelines (wording from approved bylaws).
- Current board and subcommittees: names, terms, titles, portraits and permission to publish.
- Actual member-company and airline lists, names/logos, Primary/Excess categories (definition, eligibility, permissions), member details.
- DIP: meaning, scope, official content and whether a dedicated page is required. Do not infer this term.
- Live membership workflow, supporting document rules, dues and approval.
- Photos and details for any unpublished association events.
- Admin system for updating activities, news, members and the committee (out of scope for current front-end-only change).

## Verification
- Registrar: https://www.dbd.go.th/download/downloads/05_ta/list_association_all.pdf
- Chamber: https://www.thaichamber.or.th/about/network/trade-associations/services-supply-chain
- CAAT: https://www.caat.or.th/caat-media/203830/
- Suvarnabhumi cargo customs: https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89798
- TAFA source used only to distinguish TAFA membership from ACBA; no TAFA member company is represented as an ACBA member.

## Build and testing limitations
Changes statically checked for route declarations, removed page sections, array/data references, CSS import and source-category split. Lint via BDxA failed internally and npx tsc was refused by connector permission. No claim of production build/browser-level QA.
