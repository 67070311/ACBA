/** Source-grounded article summaries for the seven published news records.
 * Preserve the underlying source links in site-content.ts.
 * Avoid claims about resolutions, approvals or participation absent from those sources.
 */
export type NewsArticleSection={headingTh:string;headingEn:string;paragraphsTh:string[];paragraphsEn:string[]};
export type NewsArticleRecord={leadTh:string;leadEn:string;eventTh:string;eventEn:string;locationTh:string;locationEn:string;sections:NewsArticleSection[]};
export const NEWS_ARTICLES:Record<string,NewsArticleRecord>={
 "suvarnabhumi-cargo-coordination-oct-2026":{
  eventTh:"19–20 ตุลาคม 2569",eventEn:"19–20 October 2026",
  locationTh:"อาคาร BFZ เขตปลอดอากรท่าอากาศยานสุวรรณภูมิ",locationEn:"BFZ Building, Suvarnabhumi Airport Free Zone",
  leadTh:"สำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิร่วมติดตามปัญหาความแออัดภายในคลังสินค้า โดยมีการลงพื้นที่สำรวจและประชุมกับผู้ประกอบการและหน่วยงานที่เกี่ยวข้องต่อเนื่องสองวัน",
  leadEn:"Suvarnabhumi Airport Cargo Customs Office conducted site inspections and coordinated with cargo-terminal operators and industry stakeholders over two days to follow up on congestion in the airport's free-zone warehouses.",
  sections:[
   {headingTh:"สำรวจสถานการณ์ในคลังสินค้า",headingEn:"Inspecting cargo-terminal conditions",
    paragraphsTh:["วันที่ 19 ตุลาคม 2569 นายกฤดิพรรธน์ สิงห์อุบลปิติกุล ผู้อำนวยการสำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ พร้อมด้วยนายนรินทร กลันทกพันธุ์ ผู้เชี่ยวชาญด้านเทคนิคการตรวจสอบสินค้า และคณะผู้บริหาร ร่วมประชุมกับผู้ประกอบการคลังสินค้าของบริษัท การบินไทย จำกัด (มหาชน) ก่อนลงพื้นที่สำรวจสภาพความแออัดภายในคลังสินค้าเขตปลอดอากร"],
    paragraphsEn:["On 19 October 2026, Customs Office director Krittipat Singh-ubonpitikun, technical inspection specialist Narin Klantakphan and senior officials met with Thai Airways cargo-warehouse operators and visited the airport free-zone facilities to examine congestion conditions."]},
   {headingTh:"หารือร่วมภาครัฐและเอกชน",headingEn:"Public–private follow-up meeting",
    paragraphsTh:["วันที่ 20 ตุลาคม สำนักงานศุลกากรประชุมต่อร่วมกับบริษัท ท่าอากาศยานไทย จำกัด (มหาชน) หรือ AOT ผู้ประกอบการคลังสินค้า TG และ BFS สมาคมตัวแทนขนส่งสินค้าทางอากาศไทย (TAFA) และสมาคมการค้าธุรกิจการบินขนส่งสินค้า (ACBA) ณ อาคาร BFZ","การประชุมมีเป้าหมายให้หน่วยงานภาครัฐและเอกชนบูรณาการการทำงาน และติดตามการบริหารจัดการเพื่อแก้ปัญหาความแออัดในคลังสินค้า ประกาศต้นทางกล่าวถึงการติดตามความคืบหน้า แต่ไม่ได้ยืนยันว่าปัญหาได้รับการแก้ไขเสร็จสิ้นแล้ว"],
    paragraphsEn:["On 20 October, the Customs Office met with Airports of Thailand (AOT), the TG and BFS cargo operators, the Thai Airfreight Forwarders Association (TAFA) and the Airline Cargo Business Association (ACBA) at the BFZ Building.","The meeting focused on coordinating public and private work and reviewing ongoing measures to address warehouse congestion. The agency announcement reports follow-up action, not a final resolution of the issue."]}
  ]
 },
 "suvarnabhumi-free-zone-discussion-oct-2026":{
  eventTh:"14 ตุลาคม 2569 เวลา 14.00 น.",eventEn:"14 October 2026, 2:00 p.m.",
  locationTh:"อาคาร BFZ เขตปลอดอากรท่าอากาศยานสุวรรณภูมิ",locationEn:"BFZ Building, Suvarnabhumi Airport Free Zone",
  leadTh:"สำนักงานศุลกากรสุวรรณภูมิจัดการประชุมติดตามสถานการณ์ความแออัดในคลังสินค้าเขตปลอดอากร พร้อมรับฟังปัญหาและข้อเสนอแนะจากหน่วยงานและสมาคมในอุตสาหกรรม",
  leadEn:"The airport cargo customs office convened industry stakeholders to assess ongoing warehouse congestion in Suvarnabhumi's free zone and exchange operational challenges and proposed responses.",
  sections:[
   {headingTh:"หน่วยงานและผู้ประกอบการที่เข้าร่วม",headingEn:"Participating organizations",
    paragraphsTh:["การประชุมวันที่ 14 ตุลาคม 2569 นำโดยนายกฤดิพรรธน์ สิงห์อุบลปิติกุล ผู้อำนวยการสำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ นายนรินทร กลันทกพันธุ์ ผู้เชี่ยวชาญด้านเทคนิคการตรวจสอบสินค้า และคณะผู้บริหารของสำนักงาน","ผู้เข้าร่วมประกอบด้วย AOT ผู้ประกอบการคลังสินค้า TG และ BFS สมาคมตัวแทนขนส่งสินค้าทางอากาศไทย (TAFA) สมาคมตัวแทนออกของรับอนุญาตไทย (TACBA) และสมาคมการค้าธุรกิจการบินขนส่งสินค้า (ACBA)"],
    paragraphsEn:["The meeting was led by Customs Office director Krittipat Singh-ubonpitikun, technical inspection specialist Narin Klantakphan and the office's management team.","Participants included Airports of Thailand (AOT), TG and BFS warehouse operators, TAFA, the Thai Authorized Customs Brokers Association (TACBA), and ACBA."]},
   {headingTh:"ประเด็นสำคัญในการประชุม",headingEn:"Issues under discussion",
    paragraphsTh:["ที่ประชุมติดตามความคืบหน้าการแก้ไขปัญหาความแออัด วิเคราะห์สถานการณ์ปัจจุบัน ปัญหาและอุปสรรคในการปฏิบัติงานภายในคลังสินค้า รวมถึงแลกเปลี่ยนความคิดเห็นและข้อเสนอแนะระหว่างหน่วยงานที่เกี่ยวข้อง","เป้าหมายของการหารือคือร่วมกำหนดแนวทางแก้ปัญหาอย่างเป็นระบบและมีประสิทธิภาพ ประกาศดังกล่าวเป็นรายงานการประชุม ไม่ได้ระบุว่ามีมาตรการใดผ่านอนุมัติหรือบรรลุผลแล้ว"],
    paragraphsEn:["The participants reviewed progress on congestion relief, the current operational situation and obstacles affecting cargo-terminal work. They also exchanged comments and proposals across the organizations.","The objective was to develop a coordinated and effective approach. The publication does not state that a particular measure was formally approved or that congestion had been resolved."]}
  ]
 },
 "known-consignor-caat-june-2026":{
  eventTh:"4 มิถุนายน 2569 (เผยแพร่ข่าว 5 มิถุนายน)",eventEn:"4 June 2026 (released 5 June)",
  locationTh:"สำนักงานการบินพลเรือนแห่งประเทศไทย (CAAT)",locationEn:"Civil Aviation Authority of Thailand (CAAT)",
  leadTh:"สำนักงานการบินพลเรือนแห่งประเทศไทยเปิดเวทีหารือแนวทางส่งเสริมระบบ Known Consignor เพื่อพัฒนาการขนส่งสินค้าทางอากาศให้คล่องตัวขึ้น พร้อมรักษามาตรฐานการรักษาความปลอดภัยการบิน",
  leadEn:"The Civil Aviation Authority of Thailand convened industry representatives to explore a Known Consignor system that could improve cargo handling efficiency while maintaining international aviation-security standards.",
  sections:[
   {headingTh:"การประชุมและผู้มีส่วนเกี่ยวข้อง",headingEn:"The meeting and its participants",
    paragraphsTh:["เมื่อวันที่ 4 มิถุนายน 2569 พลอากาศเอก มนัท ชวนะประยูร ผู้อำนวยการ CAAT เป็นประธานการประชุม โดยมีผู้แทนจากกรมศุลกากร บริษัท ท่าอากาศยานไทย จำกัด (มหาชน) บริษัท การบินไทย จำกัด (มหาชน) บริษัท ดับบลิวเอสเอฟซีพีจีคาร์โก้ จำกัด สมาคมตัวแทนขนส่งสินค้าทางอากาศไทย (TAFA) และสมาคมการค้าธุรกิจการบินขนส่งสินค้า (ACBA) เข้าร่วม","วัตถุประสงค์คือสร้างความเข้าใจร่วมกันเกี่ยวกับการพัฒนาระบบ Known Consignor (KC) รับฟังข้อคิดเห็นเชิงนโยบายจากผู้มีส่วนได้ส่วนเสีย และพิจารณาความท้าทายที่อาจเกิดขึ้นในการใช้งานจริง"],
    paragraphsEn:["On 4 June 2026, CAAT director Air Chief Marshal Manat Chavanaprayoon chaired a meeting involving Customs, Airports of Thailand, Thai Airways, WSFC PG Cargo, TAFA and ACBA.","Participants discussed the proposed Known Consignor (KC) framework, exchanged policy perspectives and identified challenges relevant to future implementation."]},
   {headingTh:"เหตุผลที่ศึกษา Known Consignor",headingEn:"Why Known Consignor is being considered",
    paragraphsTh:["CAAT ระบุว่าสินค้าขนส่งทางอากาศส่วนใหญ่ยังเข้าสู่กระบวนการตรวจค้นความปลอดภัยที่สนามบินในฐานะสินค้าจากผู้ส่งที่ไม่อยู่ในระบบ Known Consignor หรือ Unknown Cargo โดยต้องผ่านการตรวจค้นในอัตรา 100% ซึ่งอาจเพิ่มเวลาและความซับซ้อนของการปฏิบัติงาน โดยเฉพาะสินค้าที่ตรวจผ่านได้ยาก","แนวทาง Known Consignor อาจช่วยลดการตรวจค้นซ้ำซ้อน เพิ่มความรวดเร็ว ลดภาระคลังสินค้า และส่งเสริมขีดความสามารถด้านโลจิสติกส์ แต่ทั้งหมดเป็นประโยชน์ที่อยู่ระหว่างการศึกษา ไม่ใช่ผลลัพธ์ที่เกิดขึ้นแล้ว"],
    paragraphsEn:["CAAT explained that most air cargo is currently screened at the airport as Unknown Cargo, generally requiring 100% security screening. This creates time and handling challenges, especially for opaque or difficult-to-inspect consignments.","A Known Consignor framework could reduce duplicated screening, improve throughput and ease warehouse congestion. These are potential benefits under study, not completed outcomes."]},
   {headingTh:"ประเด็นด้านความปลอดภัยและกฎระเบียบ",headingEn:"Security and regulatory considerations",
    paragraphsTh:["ที่ประชุมยังพิจารณาการไหลของสินค้า ความพร้อมของพื้นที่คลังสินค้า ความสามารถในการรองรับปริมาณสินค้าที่อาจเพิ่มขึ้น และการปรับปรุงกฎหมายกับข้อกำหนดของ Regulated Agent (RA) เพื่อให้การเข้าร่วมระบบห่วงโซ่อุปทานปลอดภัยมีความเหมาะสม","CAAT จะนำข้อคิดเห็นและข้อเสนอแนะจากภาคธุรกิจไปประกอบการศึกษาความเป็นไปได้และวางแนวทางพัฒนาระบบ KC และ RA ในอนาคต โดยยึดมาตรฐานความปลอดภัยการบินสากล"],
    paragraphsEn:["The discussion also covered cargo flows, warehouse space and capacity, and possible revisions to legislation and Regulated Agent (RA) requirements to support additional qualified participants in a secure supply chain.","CAAT said the feedback would inform its feasibility work and potential future policy development for KC and RA while preserving internationally required aviation-security standards."]}
  ]
 },
 "customs-electronic-air-transshipment-oct-2026":{
  eventTh:"21 ตุลาคม 2569 เวลา 09.30 น.",eventEn:"21 October 2026, 9:30 a.m.",
  locationTh:"ห้องประชุมศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร กรมศุลกากร",locationEn:"ICT Center meeting room, Thai Customs Department",
  leadTh:"ศุลกากรสุวรรณภูมิและศูนย์เทคโนโลยีสารสนเทศและการสื่อสารของกรมศุลกากรประชุมเพื่อติดตามการพัฒนาระบบงานถ่ายลำสินค้าทางอากาศด้วยวิธีอิเล็กทรอนิกส์",
  leadEn:"Suvarnabhumi Airport Cargo Customs Office and the Customs ICT Center met to review progress in developing electronic procedures for air cargo transshipment.",
  sections:[
   {headingTh:"การติดตามความคืบหน้าของระบบ",headingEn:"Tracking system development",
    paragraphsTh:["วันที่ 21 ตุลาคม 2569 เวลา 09.30 น. นายกฤดิพรรธน์ สิงห์อุบลปิติกุล ผู้อำนวยการสำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ พร้อมนายนรินทร กลันทกพันธุ์ ผู้เชี่ยวชาญด้านเทคนิคการตรวจสอบสินค้า และผู้บริหารสำนักงาน เข้าร่วมประชุมกับนางอัญชลี อินโต ผู้อำนวยการศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร (ศทส.)","หัวข้อการประชุมคือความคืบหน้าการพัฒนาระบบงานถ่ายลำทางอากาศยานโดยวิธีการทางอิเล็กทรอนิกส์ ณ ห้องประชุมของศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร กรมศุลกากร"],
    paragraphsEn:["At 9:30 a.m. on 21 October 2026, Customs Office director Krittipat Singh-ubonpitikun, technical inspection specialist Narin Klantakphan and other senior officials met with ICT Center director Anchalee Into.","The meeting reviewed progress in developing electronic air transshipment procedures at the Thai Customs Department's ICT Center."]},
   {headingTh:"สถานะตามประกาศ",headingEn:"Status in the published report",
    paragraphsTh:["ข่าวต้นทางระบุการประชุมติดตามความคืบหน้า ไม่ได้ระบุวันเปิดใช้งานระบบ รายละเอียดฟังก์ชัน หรือผลการทดสอบ จึงยังไม่อาจสรุปได้ว่าระบบดังกล่าวเปิดให้ใช้งานแล้ว"],
    paragraphsEn:["The published notice confirms a progress-review meeting but does not announce a launch date, system feature list or test results. It should not be interpreted as confirmation that the electronic platform is already live."]}
  ]
 },
 "jica-eac-cargo-visit-oct-2026":{
  eventTh:"8 ตุลาคม 2569 เวลา 13.30 น.",eventEn:"8 October 2026, 1:30 p.m.",
  locationTh:"ห้องประชุม 2 อาคาร BC และคลังสินค้าบริษัท DHL",locationEn:"Meeting Room 2, BC Building, and DHL warehouse",
  leadTh:"ศุลกากรสุวรรณภูมิต้อนรับผู้แทนจาก JICA และสำนักเลขาธิการประชาคมแอฟริกาตะวันออก เพื่อศึกษาดูงานด้านการค้าระหว่างประเทศ การอำนวยความสะดวกทางการค้า และสินค้าด่วน",
  leadEn:"The airport cargo customs office hosted a study visit by representatives of JICA and the East African Community Secretariat on international trade facilitation and express cargo.",
  sections:[
   {headingTh:"คณะผู้แทนและหน่วยงานเจ้าภาพ",headingEn:"Delegation and hosts",
    paragraphsTh:["วันที่ 8 ตุลาคม 2569 เวลา 13.30 น. นายกฤดิพรรธน์ สิงห์อุบลปิติกุล ผู้อำนวยการสำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ พร้อมนายนรินทร กลันทกพันธุ์ ผู้เชี่ยวชาญด้านเทคนิคการตรวจสอบสินค้า นายคำพร ธุระเจน ผู้อำนวยการส่วนบริการศุลกากร 3 และคณะประชาสัมพันธ์ ให้การต้อนรับผู้แทนจาก Japan International Cooperation Agency (JICA) และ East African Community Secretariat (EAC)"],
    paragraphsEn:["On 8 October 2026, the Suvarnabhumi cargo customs office hosted delegates from the Japan International Cooperation Agency (JICA) and the East African Community Secretariat (EAC). The welcome was led by the office director, specialist Narin Klantakphan, Customs Service Division 3 director Khamphon Thurachen and the public-relations team."]},
   {headingTh:"หัวข้อและสถานที่ศึกษาดูงาน",headingEn:"Study topics and locations",
    paragraphsTh:["การศึกษาดูงานครอบคลุมการค้าระหว่างประเทศ แนวทางอำนวยความสะดวกทางการค้า และการจัดการสินค้าเร่งด่วน โดยจัดกิจกรรมที่ห้องประชุม 2 อาคาร BC และคลังสินค้าของบริษัท DHL","ประกาศต้นทางไม่ได้ระบุผลการลงนามข้อตกลงหรือโครงการใหม่ และไม่ได้กล่าวว่า ACBA เข้าร่วมการต้อนรับครั้งนี้"],
    paragraphsEn:["The visit covered international trade, trade facilitation and express shipments, with sessions at Meeting Room 2 of the BC Building and the DHL warehouse.","The original announcement does not report a signed agreement or new project, and does not identify ACBA as a participant in this visit."]}
  ]
 },
 "myanmar-customs-delegation-oct-2026":{
  eventTh:"7 ตุลาคม 2569 เวลา 09.30 น.",eventEn:"7 October 2026, 9:30 a.m.",
  locationTh:"ห้องประชุม 2 อาคาร BC ท่าอากาศยานสุวรรณภูมิ",locationEn:"Meeting Room 2, BC Building, Suvarnabhumi",
  leadTh:"สำนักงานศุลกากรสุวรรณภูมิต้อนรับ Myanmar Customs Brokers Association (MCBA) เพื่อแลกเปลี่ยนความรู้เกี่ยวกับการตรวจปล่อยและพิธีการศุลกากรสินค้าทางอากาศ",
  leadEn:"Representatives of the Myanmar Customs Brokers Association (MCBA) visited Suvarnabhumi cargo customs to study air import/export clearance processes and trade facilitation.",
  sections:[
   {headingTh:"การต้อนรับคณะผู้แทนจากเมียนมา",headingEn:"Hosting the Myanmar delegation",
    paragraphsTh:["วันที่ 7 ตุลาคม 2569 เวลา 09.30 น. นายกฤดิพรรธน์ สิงห์อุบลปิติกุล ผู้อำนวยการสำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ และนายนรินทร กลันทกพันธุ์ ผู้เชี่ยวชาญด้านเทคนิคการตรวจสอบสินค้า มอบหมายให้นายคำพร ธุระเจน ผู้อำนวยการส่วนบริการศุลกากร 3 พร้อมคณะประชาสัมพันธ์ให้การต้อนรับผู้แทนจาก Myanmar Customs Brokers Association (MCBA)"],
    paragraphsEn:["On 7 October 2026, the Customs Office director and technical inspection specialist assigned Customs Service Division 3 director Khamphon Thurachen and the public-relations team to host a delegation from the Myanmar Customs Brokers Association (MCBA)."]},
   {headingTh:"เนื้อหาการศึกษาดูงาน",headingEn:"Subjects covered in the visit",
    paragraphsTh:["คณะผู้แทนศึกษาการดำเนินพิธีการศุลกากรสำหรับสินค้านำเข้าและส่งออกทางอากาศ การปฏิบัติงานภายในเขตปลอดอากร ขั้นตอนตรวจปล่อยสินค้า และการใช้เทคโนโลยีเพื่ออำนวยความสะดวกทางการค้าและระบบโลจิสติกส์","กิจกรรมจัดที่ห้องประชุม 2 อาคาร BC โดยประกาศต้นทางไม่ได้ระบุการเข้าร่วมของ ACBA หรือข้อตกลงความร่วมมือเพิ่มเติม"],
    paragraphsEn:["The topics included air import and export customs procedures, free-zone operations, cargo release and the use of technology in trade facilitation and logistics.","The visit was held at Meeting Room 2, BC Building. The source does not state that ACBA participated or that a new cooperation agreement was signed."]}
  ]
 },
 "aot-cargo-clearhouse-discussion-oct-2026":{
  eventTh:"5 ตุลาคม 2569 เวลา 10.00 น.",eventEn:"5 October 2026, 10:00 a.m.",
  locationTh:"ท่าอากาศยานสุวรรณภูมิ และคลังสินค้าเขตปลอดอากร",locationEn:"Suvarnabhumi Airport and its free-zone cargo terminal",
  leadTh:"ศุลกากรสุวรรณภูมิร่วมกับ AOT คลังสินค้าการบินไทย และ TAFA หารือเรื่องการใช้งานระบบ AOT Cargo Clearhouse เพื่อเพิ่มประสิทธิภาพการจัดการข้อมูลสินค้า พร้อมติดตามปัญหาคลังสินค้าในพื้นที่จริง",
  leadEn:"Customs met AOT, Thai Airways cargo operators and TAFA to discuss the AOT Cargo Clearhouse system for cargo-data management, followed by a site visit to review warehouse congestion.",
  sections:[
   {headingTh:"หารือการใช้งานระบบ AOT Cargo Clearhouse",headingEn:"Discussing the AOT Cargo Clearhouse system",
    paragraphsTh:["วันที่ 5 ตุลาคม 2569 เวลา 10.00 น. นายกฤดิพรรธน์ สิงห์อุบลปิติกุล ผู้อำนวยการสำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ พร้อมด้วยนายนรินทร กลันทกพันธุ์ ผู้เชี่ยวชาญด้านเทคนิคการตรวจสอบสินค้า นายศักดิ์สิทธิ์ ยุทธประเสริฐ ผู้อำนวยการส่วนควบคุมทางศุลกากร นางสาวธมลวรรณ พงษ์ศาสตร์ ผู้รักษาการผู้อำนวยการส่วนบริการศุลกากร 1 และเจ้าหน้าที่ เข้าร่วมหารือกับผู้แทน AOT คลังสินค้าการบินไทย (TG) และ TAFA","ประเด็นหารือคือการใช้งานระบบ AOT Cargo Clearhouse เพื่อพัฒนาการบริหารจัดการข้อมูลสินค้าและประสิทธิภาพการขนส่งสินค้าทางอากาศอย่างเป็นระบบ"],
    paragraphsEn:["At 10:00 a.m. on 5 October 2026, Customs Office director Krittipat Singh-ubonpitikun and senior officials met representatives of Airports of Thailand (AOT), the Thai Airways (TG) cargo warehouse and TAFA.","The discussion focused on the use of the AOT Cargo Clearhouse system for organized cargo-data management and more efficient air-freight operations."]},
   {headingTh:"ติดตามปัญหาความแออัดในคลังสินค้า",headingEn:"Following up on warehouse congestion",
    paragraphsTh:["หลังการหารือ คณะผู้เข้าร่วมลงพื้นที่เพื่อติดตามสถานการณ์และแนวทางแก้ไขความแออัดภายในคลังสินค้าเขตปลอดอากรของท่าอากาศยานสุวรรณภูมิ","เอกสารต้นทางอธิบายการหารือและการลงพื้นที่ แต่ไม่ได้ประกาศว่าระบบเปิดใช้งานเต็มรูปแบบแล้ว และไม่ได้ระบุ ACBA เป็นผู้เข้าร่วมประชุมครั้งนี้"],
    paragraphsEn:["After the discussion, participants visited the free-zone warehouse area to examine ongoing congestion concerns and relief efforts.","The announcement records a meeting and inspection, but not a full production launch of the system. ACBA is not listed as a participant in this particular meeting."]}
  ]
 }
};
