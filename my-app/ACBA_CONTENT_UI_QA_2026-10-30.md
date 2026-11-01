# ACBA Website — UI & Content QA (30 October 2026)

This is an editorial/source-trace document for the ACBA website preview, not an official statement by the association.

## UI fixes made

- Header submenus now use controlled state instead of a persistent CSS `:hover/:focus-within` combination. They close on link selection, pointer leave, outside pointerdown, Escape, and leaving keyboard focus. The active dropdown is tied to the current pathname.
- About focus tabs and image/text panel have bounded proportions and no oversized empty tail. Responsive tab layout remains available for mobile.
- Course detail headings and header spacing have been reduced.
- Home page "latest" news cards use publication-date sorting rather than the first three entries in the data array.
- TH/EN labels are retained for the changes.

## Primary-source content audit

| Website section | Check | Evidence / notes |
| --- | --- | --- |
| Association & collaboration | Publicly supported | ACBA appears in the Thai Chamber of Commerce transport/supply-chain association network and TAFA history. CAAT's 5 June 2026 release names ACBA among meeting participants. |
| Recent seven industry/association news records | Verified against primary announcements and discovery extracts | CAAT 5 June; Customs 5, 7, 8, 14, 20 and 21 Oct 2026. News explicitly distinguishes ACBA-participation stories from general industry news. |
| Basic Air Cargo Tariff | Published member THB 9,500, general THB 12,000 | TAFA 2026 course page; 4 days, minimum 80% assessment, requires full attendance. Published schedules are not live availability confirmations. |
| Air Cargo Load Handling | Published member THB 7,000, general THB 8,500 | TAFA course page; 2 days, full attendance, 80% test. |
| DGR 7.3 / CBTA Initial | Published member THB 14,000, general THB 17,500 (VAT excluded) | TAFA DGR CBTA notice. **Not** the same fee as DGR 7.1 or recurrent. |
| DGR 7.1 / DGR 7.3 Recurrent | Fee not confirmed for each separate course | Distinct roles; recurrent requires prior DGR 7.3 and a still-valid certificate; recurrent training listed as 3 days. |
| TAFA air import-export business course and international distribution | Published course fee THB 7,500 | TAFA course page, but training dates are blank; show a published example, not a currently open intake. |
| TPQI level 3 occupational qualification | 4-month TPQI-NET minimum; separate TAFA application requirements | TPQI-NET level-3 primary record lists at least four months of work/internship/probation plus evidence. TAFA assessment notices can ask for 6 months or different evidence; don't conflate eligibility routes. |
| 2023 training report | 11 classes; 218 people | FAPAA/TAFA Education Report for 2023: DGR 9 classes/160, Basic Tariff 2 classes/58. These are historical, not present enrollment. |
| TAFA sample company directory | 16 selected names; **not ACBA members** | Verified against TAFA ordinary/associate lists. The public TAFA Members Directory 2026 says last updated 11 May 2026; classifications should not be assumed current without checking. |
| ACBA registration/contact | Conservative | DBD registration record can be cited; historical office and phone are not presented as verified current contact data. |

## Remaining verification blockers — DO NOT assert as confirmed

- Official ACBA member roster, executive board names, membership categories, dues, eligibility, signed association by-laws, current email/phone/address: require confirmation directly by ACBA.
- Live availability, current application deadlines, and updated course fees: require fresh organizer confirmation. Published archived prices are labeled as such.
- Physical browser/mobile visual QA and production build/lint: local command execution through the desktop connector was unavailable in this session. The updates have been statically inspected, but are not being described as a successful build or rendered browser test.
- The site's stock photography is illustrative, not photography of any specific reported event.

## Sources checked

- https://www.thaichamber.or.th/about/network/trade-associations/services-supply-chain
- https://www.tafathai.org/about-us
- https://www.caat.or.th/caat-media/203830/
- https://www.caat.or.th/certificate_license/180224/
- https://www.tafathai.org/basic-air-cargo-tariff-course-training
- https://www.tafathai.org/en/air-cargo-load-handling
- https://www.tafathai.org/dangerous-goods-competency-base-training-and-assessment-cbta
- https://www.tafathai.org/คอร์สอบรม-air-freight-forwarder
- https://tpqi-net.tpqi.go.th/index.php/qualifications/4701
- https://www.tafathai.org/สถาบันคุณวุฒิวิชาชีพ-องค์การมหาชน
- https://www.tafathai.org/en/สมาชิกสามัญ
- https://www.tafathai.org/en/สมาชิกสมทบ
- https://www.tafathai.org/en/blog/13461/tafa-members-directory-2026
- https://www.fapaa.org/wp-content/uploads/2024/05/2024-Education-report-Thailand-TAFA.pdf
- https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89798
- https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89727
- https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89810
- https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89671
- https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89662
- https://suvarnabhumicargo.customs.go.th/th/news-activities-public-relations/89643
