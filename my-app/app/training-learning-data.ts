export type DetailBlock={titleTh:string;titleEn:string;itemsTh:string[];itemsEn:string[]};
export type TrainingTopic={
 slug:string;type:"course"|"knowledge";titleTh:string;titleEn:string;
 subtitleTh:string;subtitleEn:string;introTh:string;introEn:string;
 labelTh:string;labelEn:string;source:string;sourceEn?:string;sourceUrl?:string;
 blocks:DetailBlock[];noticeTh?:string;noticeEn?:string;
};
export const TRAINING_TOPICS:TrainingTopic[]=[
 {
 slug:"basic",type:"course",titleTh:"Basic Air Cargo Tariff",titleEn:"Basic Air Cargo Tariff",
 labelTh:"พื้นฐานการขนส่งสินค้าทางอากาศ",labelEn:"Foundation course",
 subtitleTh:"หลักสูตรพื้นฐาน 4 วัน · ภาษาไทย",subtitleEn:"Four-day foundation course · taught in Thai",
 introTh:"หลักสูตร TAFA สำหรับผู้เริ่มต้นทำงานด้านขนส่งสินค้าทางอากาศ เน้นองค์ประกอบธุรกิจ พื้นฐานการคิดค่าระวาง และการอ่านข้อมูลการขนส่งที่ต้องใช้ในการปฏิบัติงาน",
 introEn:"A TAFA introductory course for people entering air freight, covering industry operations, basic tariff calculations and shipment information.",
 source:"TAFA — Basic Air Cargo Tariff Course Training",
 sourceUrl:"https://www.tafathai.org/basic-air-cargo-tariff-course-training",
 blocks:[
 {titleTh:"ใครเหมาะกับหลักสูตรนี้",titleEn:"Who should attend",itemsTh:["พนักงานตัวแทนขนส่งสินค้า (Freight Forwarder) และพนักงานสายการบิน","บุคลากรด้านโลจิสติกส์หรือผู้เริ่มต้นทำงานในวงการ Air Cargo"],itemsEn:["Freight forwarder and airline staff","Logistics professionals or people new to the air cargo sector"]},
 {titleTh:"เนื้อหาที่ครอบคลุม",titleEn:"Subjects covered",itemsTh:["กฎระเบียบของอุตสาหกรรม บทบาทของตัวแทนขนส่ง และภูมิศาสตร์กับเวลาในการขนส่ง","ประเภทอากาศยาน อุปกรณ์ขนถ่ายสินค้า และประเภทของสินค้า","อัตราค่าระวาง TACT, General Cargo Rate, สกุลเงิน และการอ่าน Rate Sheet"],itemsEn:["Industry rules, forwarding operations, geography and transit-time calculations","Aircraft, cargo-handling facilities and cargo types","TACT tariffs, general cargo rates, currencies and rate-sheet interpretation"]},
 {titleTh:"ค่าอบรมและเงื่อนไขที่เผยแพร่",titleEn:"Published fees and conditions",itemsTh:["สมาชิก TAFA/ACBA: 9,500 บาทต่อคน · บุคคลทั่วไป: 12,000 บาทต่อคน (ยังไม่รวม VAT 7%)","ผู้เรียนต้องเข้าอบรมตลอดหลักสูตรและได้คะแนนสอบไม่น้อยกว่า 80%","ยกเลิกล่วงหน้าตั้งแต่ 15 วัน: ไม่เสียค่าธรรมเนียม; น้อยกว่า 15 วัน: 50%; น้อยกว่า 7 วัน: ไม่คืนค่าอบรม"],itemsEn:["TAFA/ACBA members: THB 9,500 per person; general public: THB 12,000 (excluding 7% VAT)","Full attendance and a test score of at least 80% are required","Cancellations 15+ days ahead: no charge; under 15 days: 50%; under 7 days: no refund"]}
 ],
 noticeTh:"เป็นข้อมูลประกาศหลักสูตรของ TAFA ไม่ใช่ระบบสมัครของเว็บไซต์นี้ รอบอบรม ค่าใช้จ่าย และการรับสมัครปัจจุบันต้องตรวจสอบกับผู้จัดก่อนลงทะเบียน",
 noticeEn:"This summarizes a TAFA course notice; this website does not accept registrations. Confirm current dates, fees and availability with the organizer."
 },
 {
 slug:"handling",type:"course",titleTh:"Air Cargo Load Handling",titleEn:"Air Cargo Load Handling",
 labelTh:"การรับสินค้าและปฏิบัติการ",labelEn:"Cargo operations course",
 subtitleTh:"หลักสูตรปฏิบัติการ 2 วัน",subtitleEn:"Two-day operations course",
 introTh:"หลักสูตรของ TAFA ให้ความรู้เรื่องการรับสินค้า โหลดสินค้า อุปกรณ์ภาคพื้น และการควบคุมกระบวนการ เหมาะกับผู้เริ่มงานหรือผู้ต้องการทบทวนมาตรฐานการปฏิบัติงาน",
 introEn:"A TAFA course on cargo acceptance, loading equipment and operational controls, suitable for new staff and those refreshing practical standards.",
 source:"TAFA — Air Cargo Load Handling",
 sourceUrl:"https://www.tafathai.org/en/air-cargo-load-handling",
 blocks:[
 {titleTh:"เหมาะสำหรับ",titleEn:"Intended participants",itemsTh:["เจ้าหน้าที่รับสินค้าและพนักงานบริษัทตัวแทนขนส่งสินค้าทางอากาศ","พนักงานใหม่และผู้ต้องการเพิ่มความรู้เกี่ยวกับงานปฏิบัติการ"],itemsEn:["Cargo acceptance staff and freight-forwarding employees","New operations staff and those seeking an operational refresher"]},
 {titleTh:"หัวข้อเรียน",titleEn:"Course coverage",itemsTh:["โครงสร้างอุตสาหกรรม ผู้เกี่ยวข้อง และความรับผิดชอบในกระบวนการขนส่ง","ชนิดอุปกรณ์ การจัดวางและบรรทุกสินค้า รวมถึงการจัดการอุปกรณ์เมื่อขนลงเครื่อง","การรับสินค้า การจัดเก็บ การตรวจสอบควบคุม และการป้องกันความผิดปกติระหว่างปฏิบัติงาน"],itemsEn:["Air cargo industry participants and their operational responsibilities","Equipment types, cargo build-up, loading and unloading procedures","Cargo acceptance, storage, monitoring and preventing operational irregularities"]},
 {titleTh:"ค่าอบรมและการประเมิน",titleEn:"Published fees and assessment",itemsTh:["สมาชิก TAFA/ACBA: 7,000 บาทต่อคน · บุคคลทั่วไป: 8,500 บาทต่อคน","เข้าอบรมเต็มเวลาและได้คะแนนสอบอย่างน้อย 80% จึงได้รับประกาศนียบัตร","การยกเลิกมีเงื่อนไขค่าใช้จ่ายตามช่วงเวลาก่อนเริ่มหลักสูตร ซึ่งต้องตรวจสอบกับ TAFA"],itemsEn:["TAFA/ACBA members: THB 7,000 per person; general public: THB 8,500","Full attendance and at least an 80% assessment score are required for a completion certificate","Cancellation charges depend on how early notice is given; confirm the current terms with TAFA"]}
 ],
 noticeTh:"เนื้อหานี้สรุปจากหน้า TAFA เพื่อให้ผู้เยี่ยมชมอ่านได้ในเว็บนี้ ไม่ใช่การรับรองวันเปิดอบรมหรือรับสมัครโดย ACBA",
 noticeEn:"This is a summary of the TAFA page, not a live schedule or an ACBA registration service."
 },
 {
 slug:"dgr",type:"course",titleTh:"DGR 7.3 / CBTA (Initial)",titleEn:"DGR 7.3 / CBTA (Initial)",
 labelTh:"สินค้าอันตรายและความปลอดภัย",labelEn:"Dangerous goods training",
 subtitleTh:"แนวทางอบรมสมรรถนะในการจัดการสินค้าอันตราย",subtitleEn:"Competency-based dangerous goods training",
 introTh:"หน้าหลักสูตรของ TAFA อธิบายหัวข้อสำหรับบุคลากรที่เกี่ยวข้องกับสินค้าอันตรายทางอากาศ โดยรวมประเด็นกฎระเบียบ การจำแนก การบรรจุ เอกสาร และการรับสินค้า ผู้สมัครควรตรวจสอบรุ่นและรหัสหลักสูตรที่ตรงกับหน้าที่งาน",
 introEn:"TAFA lists dangerous goods training covering regulatory responsibilities, classification, packing, documentation and acceptance. Candidates should confirm the exact course category relevant to their role.",
 source:"TAFA — Dangerous Goods Competency Based Training and Assessment",
 sourceUrl:"https://www.tafathai.org/en/dangerous-goods-competency-base-training-and-assessment-cbta-3-2",
 blocks:[
 {titleTh:"ประเด็นที่เรียนรู้",titleEn:"Training subject areas",itemsTh:["ขอบเขตข้อกำหนดและข้อจำกัด บทบาทหน้าที่ และการรักษาความปลอดภัย","การจำแนกประเภทสินค้าอันตราย การบรรจุ ปริมาณจำกัด เครื่องหมาย ฉลาก และเอกสาร","ข้อกำหนดบรรจุภัณฑ์ การรับสินค้า การตอบสนองเหตุฉุกเฉิน และประเด็นที่เกี่ยวข้องกับวัสดุกัมมันตรังสีในหลักสูตรที่ระบุ"],itemsEn:["Regulatory scope, limits, responsibilities and security","Dangerous goods classification, packing, limited quantities, marking, labelling and documentation","Packaging specifications, acceptance, emergency procedures and radioactive materials where applicable"]},
 {titleTh:"ตัวอย่างค่าอบรมและเกณฑ์",titleEn:"Published fee example and assessment",itemsTh:["หน้า TAFA ระบุค่าลงทะเบียนตัวอย่างสมาชิก TAFA/ACBA 14,000 บาท และทั่วไป 17,500 บาท (ยังไม่รวม VAT 7%) สำหรับรายการ DGR ที่เผยแพร่","เกณฑ์ผลการทดสอบตามหน้าประกาศไม่น้อยกว่า 80% สำหรับใบรับรองที่เกี่ยวข้อง","หน้าเว็บต้นฉบับมีหลายรหัส เช่น DGR 7.3 และ DGR 7.1 ซึ่งรายละเอียด ค่าอบรม และวันอบรมอาจต่างกัน"],itemsEn:["TAFA lists an example DGR fee of THB 14,000 for members and THB 17,500 for non-members, excluding 7% VAT","The posted course information refers to an assessment pass threshold of at least 80%","The source includes multiple DGR categories (such as DGR 7.3 and DGR 7.1), with potentially different details and schedules"]}
 ],
 noticeTh:"โปรดตรวจสอบรหัสหลักสูตรที่ต้องใช้และประกาศปัจจุบันโดยตรงกับ TAFA โดยข้อมูลนี้ไม่ใช่คำแนะนำการจัดการสินค้าอันตรายแทนข้อกำหนดทางการ",
 noticeEn:"Confirm the course code and current announcement with TAFA. This summary does not replace official dangerous goods handling requirements."
 },
 {
 slug:"ecosystem",type:"knowledge",titleTh:"ภาพรวมระบบ Air Cargo",titleEn:"Understanding the air cargo ecosystem",
 labelTh:"ความรู้พื้นฐาน",labelEn:"Foundations",
 subtitleTh:"บทบาทของแต่ละฝ่ายในห่วงโซ่การขนส่งสินค้า",subtitleEn:"The stakeholders across the air freight chain",
 introTh:"การส่งสินค้าไปกับเครื่องบินไม่ได้มีเพียงสายการบิน ผู้ส่งสินค้า ตัวแทนขนส่ง คลังสินค้า หน่วยงานภาคพื้น และศุลกากรต่างมีส่วนในกระบวนการเดียวกัน",
 introEn:"Air cargo relies on shippers, forwarders, airlines, ground handlers, terminals and customs working through a shared shipment process.",
 source:"ACBA educational overview · concepts of the air cargo supply chain",
 blocks:[
 {titleTh:"ผู้เกี่ยวข้องหลัก",titleEn:"Key participants",itemsTh:["ผู้ส่งสินค้า (Shipper) เตรียมสินค้าและข้อมูลที่จำเป็น","ตัวแทนขนส่ง (Freight Forwarder) ประสานการจองระวาง เอกสาร และการเคลื่อนย้าย","สายการบินและผู้ให้บริการคลังสินค้าดูแลการรับ การโหลด การขนส่ง และส่งมอบสินค้า"],itemsEn:["Shippers prepare consignments and shipment information","Freight forwarders coordinate bookings, documentation and movement","Airlines and cargo terminal operators handle acceptance, loading, transport and handover"]},
 {titleTh:"เส้นทางการทำงานโดยย่อ",titleEn:"A typical workflow",itemsTh:["เตรียมและรับสินค้า พร้อมตรวจเอกสาร","ดำเนินการด้านความปลอดภัยและพิธีการตามข้อกำหนดที่เกี่ยวข้อง","นำส่งคลังสินค้า จัดเตรียมขึ้นเครื่อง และประสานการรับปลายทาง"],itemsEn:["Prepare and accept cargo with the necessary documents","Apply applicable security and customs procedures","Deliver to the cargo terminal, prepare for uplift and coordinate arrival-side handover"]}
 ],
 noticeTh:"เนื้อหานี้เป็นภาพรวมเพื่อการเรียนรู้ ไม่ใช่คู่มือปฏิบัติงานที่มีผลผูกพันทางกฎหมาย",
 noticeEn:"For general education only, not a binding operational manual."
 },
 {
 slug:"operations",type:"knowledge",titleTh:"การปฏิบัติงานขนส่งสินค้า",titleEn:"Cargo operations fundamentals",
 labelTh:"งานภาคพื้น",labelEn:"Operations",
 subtitleTh:"ตั้งแต่รับสินค้าไปจนถึงโหลดขึ้นเครื่อง",subtitleEn:"From cargo acceptance to aircraft loading",
 introTh:"การปฏิบัติงานขนส่งสินค้าทางอากาศเกี่ยวข้องกับการรับ ตรวจสอบ จัดเก็บ และเตรียมสินค้าตามวิธีและมาตรฐานของแต่ละผู้ให้บริการ",
 introEn:"Cargo operations cover acceptance, inspection, storage and preparation for loading under the applicable operator and industry procedures.",
 source:"ACBA educational overview · topics referenced from TAFA Air Cargo Load Handling",
 sourceUrl:"https://www.tafathai.org/en/air-cargo-load-handling",
 blocks:[
 {titleTh:"จุดที่ควรเข้าใจ",titleEn:"Core operational concepts",itemsTh:["การรับสินค้าและตรวจสภาพหีบห่อ เอกสาร และข้อมูลพื้นฐาน","การเลือกใช้อุปกรณ์รองรับและโหลดสินค้าให้เหมาะกับประเภทสินค้า","การควบคุมสินค้าระหว่างจัดเก็บ การส่งต่อ และการป้องกันความผิดปกติ"],itemsEn:["Cargo acceptance, package condition and documentation checks","Equipment selection and cargo build-up suitable for the consignment","Storage control, handover and prevention of handling irregularities"]},
 {titleTh:"เชื่อมต่อกับหลักสูตร",titleEn:"Learn more through a course",itemsTh:["หลักสูตร Air Cargo Load Handling ของ TAFA ครอบคลุมผู้รับผิดชอบงานภาคพื้น อุปกรณ์ และการจัดเก็บสินค้า","การฝึกปฏิบัติจริงต้องยึดมาตรฐานและคู่มือของผู้ดำเนินการที่เกี่ยวข้อง"],itemsEn:["TAFA's Air Cargo Load Handling course covers participants, equipment and storage operations","Actual handling must follow the procedures and approvals of relevant operators"]}
 ],
 noticeTh:"เป็นบทความแนะนำเบื้องต้น ไม่ใช่มาตรฐานการปฏิบัติงานหรือคำรับรองด้านความปลอดภัย",
 noticeEn:"Introductory reading only; not an operational safety certification."
 },
 {
 slug:"security",type:"knowledge",titleTh:"Known Consignor และความปลอดภัย Air Cargo",titleEn:"Known Consignor and cargo security",
 labelTh:"มาตรฐานความปลอดภัย",labelEn:"Security & standards",
 subtitleTh:"ทำความเข้าใจ Known Consignor (KC) และ Regulated Agent (RA)",subtitleEn:"An introduction to KC and RA in air cargo security",
 introTh:"CAAT เผยแพร่คู่มือการขอใบรับรอง Known Consignor ซึ่งเกี่ยวข้องกับห่วงโซ่อุปทานขนส่งสินค้าทางอากาศที่ปลอดภัย แนวทางนี้ช่วยให้ผู้ประกอบการเข้าใจบทบาทของผู้ส่งสินค้าและหน่วยงานที่เกี่ยวข้องกับการตรวจค้น",
 introEn:"CAAT publishes a Known Consignor certification guide within Thailand's regulated air cargo security framework. It provides background for understanding consignors and regulated operators in secure supply chains.",
 source:"CAAT — คู่มือการยื่นขอใบรับรองผู้ส่งทราบตัวตน (Known Consignor), updated 24 September 2026",
 sourceEn:"CAAT — Known Consignor certification application guide (updated 24 September 2026)",
 sourceUrl:"https://www.caat.or.th/certificate_license/180224/",
 blocks:[
 {titleTh:"Known Consignor หมายถึงอะไร",titleEn:"What is a Known Consignor?",itemsTh:["KC คือแนวคิดการรับรองผู้ส่งสินค้าภายใต้ข้อกำหนดความปลอดภัยทางการบินที่กำกับดูแล","เป้าหมายของระบบคือสนับสนุนการจัดการสินค้าในห่วงโซ่อุปทานที่มีมาตรการด้านความปลอดภัยอย่างเหมาะสม","การได้รับการรับรองและการนำไปใช้จริงต้องเป็นไปตามข้อกำหนดของ CAAT ไม่ใช่เพียงการอ่านบทความนี้"],itemsEn:["KC refers to consignors recognized through an aviation security approval framework","The purpose is to support secure cargo movement through appropriate supply-chain controls","Certification and implementation must follow CAAT requirements, not this informational summary"]},
 {titleTh:"เกี่ยวข้องกับ Regulated Agent อย่างไร",titleEn:"How does this relate to Regulated Agents?",itemsTh:["RA เป็นผู้ประกอบการในระบบควบคุมความปลอดภัยการขนส่งสินค้าทางอากาศที่มีข้อกำหนดและหน้าที่ตามการรับรอง","CAAT จัดการประชุมเมื่อวันที่ 4 มิถุนายน 2569 เพื่อหารือการพัฒนา KC/RA และรับฟังข้อเสนอจากผู้ประกอบการ โดยมี ACBA เข้าร่วม","การประชุมกล่าวถึงการลดการตรวจซ้ำซ้อนและเพิ่มประสิทธิภาพ แต่ไม่ได้ยืนยันว่าระบบใหม่เปิดใช้ครบถ้วนแล้ว"],itemsEn:["Regulated Agents operate under aviation cargo security requirements and applicable approvals","CAAT discussed KC/RA development with stakeholders, including ACBA, on 4 June 2026","The discussion explored reducing duplicated screening but did not announce a fully implemented new system"]}
 ],
 noticeTh:"บทสรุปนี้ไม่ใช่คำแปลหรือเนื้อหาทั้งฉบับของคู่มือ CAAT ผู้ยื่นคำขอต้องอ้างอิงคู่มือและข้อกำหนดฉบับปัจจุบันของหน่วยงานกำกับดูแล",
 noticeEn:"This summary is not the full CAAT manual. Certification applicants must refer to the current official instructions and regulatory requirements."
 }
];
// Additional externally sourced course and professional-standard references.
TRAINING_TOPICS.push(...[
 {
  "slug": "dgr71",
  "type": "course",
  "titleTh": "DGR 7.1 (Shipper)",
  "titleEn": "DGR 7.1 — Shipper",
  "labelTh": "สินค้าอันตราย / ผู้ส่งสินค้า",
  "labelEn": "Dangerous goods / shipper",
  "subtitleTh": "แนวทางเตรียมสินค้าวัตถุอันตรายสำหรับการขนส่งทางอากาศ",
  "subtitleEn": "Preparing dangerous goods consignments for air transport",
  "introTh": "หลักสูตร DGR 7.1 ที่ TAFA เผยแพร่เกี่ยวข้องกับผู้จัดเตรียมสินค้าวัตถุอันตรายก่อนส่งทางอากาศ แยกจาก DGR 7.3 ซึ่งเน้นบุคลากรประมวลผลหรือรับสินค้า",
  "introEn": "TAFA lists DGR 7.1 for personnel preparing dangerous goods consignments, distinct from DGR 7.3 for processing or accepting such consignments.",
  "label": "",
  "source": "TAFA — Dangerous Goods CBTA (DGR 7.1)",
  "sourceUrl": "https://www.tafathai.org/dangerous-goods-competency-base-training-and-assessment-cbta",
  "blocks": [
   {
    "titleTh": "ขอบเขตการอบรม",
    "titleEn": "Course scope",
    "itemsTh": [
     "บทบาทผู้ส่งสินค้า การจำแนกประเภท ข้อจำกัด และข้อกำหนดการขนส่ง",
     "การเตรียมบรรจุภัณฑ์ เครื่องหมาย ฉลาก เอกสาร และแนวทางเหตุฉุกเฉิน"
    ],
    "itemsEn": [
     "Shipper responsibilities, classification, limitations and regulations",
     "Packing, marking, labels, documentation and emergency procedures"
    ]
   },
   {
    "titleTh": "ก่อนสมัคร",
    "titleEn": "Before enrolling",
    "itemsTh": [
     "เลือกรหัสอบรมให้ตรงหน้าที่งานตามที่ผู้จัดระบุ",
     "สอบถามวันอบรม ค่าใช้จ่าย เกณฑ์สอบ และเงื่อนไขการรับรองกับ TAFA; ไม่ใช้ราคา DGR 7.3 แทน"
    ],
    "itemsEn": [
     "Choose the training category appropriate to your responsibilities",
     "Confirm current fees, dates, assessment and certificate requirements with TAFA; DGR 7.3 fees must not be assumed to apply"
    ]
   }
  ],
  "noticeTh": "ข้อมูลสรุปเพื่อการศึกษา อ้างอิงผู้จัดหรือหน่วยงานมาตรฐานตามที่ระบุ ไม่ใช่การจัดอบรม การเปิดรับสมัคร หรือการรับรองโดย ACBA ตรวจสอบประกาศล่าสุดก่อนสมัคร",
  "noticeEn": "Educational summary from the identified provider or standards body; not an ACBA-run course, active registration or certification. Verify the latest source notice."
 },
 {
  "slug": "dgrrecurrent",
  "type": "course",
  "titleTh": "DGR 7.3 Recurrent",
  "titleEn": "DGR 7.3 Recurrent",
  "labelTh": "สินค้าอันตราย / ทบทวน",
  "labelEn": "Dangerous goods / refresher",
  "subtitleTh": "หลักสูตรทบทวน 3 วันตามประกาศ TAFA",
  "subtitleEn": "Three-day recurrent training as listed by TAFA",
  "introTh": "TAFA มีรายการอบรม DGR 7.3 Recurrent สำหรับผู้ที่เคยผ่านหลักสูตร DGR 7.3 โดยระบุว่าใบประกาศนียบัตรเดิมต้องยังไม่หมดอายุ ณ วันอบรม",
  "introEn": "TAFA lists DGR 7.3 Recurrent for candidates previously trained in DGR 7.3, with a certificate that remains valid on the training date.",
  "source": "TAFA — DGR CBTA, Recurrent section",
  "sourceUrl": "https://www.tafathai.org/en/dangerous-goods-competency-base-training-and-assessment-cbta-3-2",
  "blocks": [
   {
    "titleTh": "คุณสมบัติเบื้องต้น",
    "titleEn": "Published entry requirement",
    "itemsTh": [
     "ต้องเคยผ่าน DGR 7.3",
     "ใบรับรองเดิมต้องไม่หมดอายุ ณ วันที่เข้าฝึกอบรม"
    ],
    "itemsEn": [
     "Prior completion of DGR 7.3 is required",
     "The existing certificate must be valid on the course date"
    ]
   },
   {
    "titleTh": "สิ่งที่ต้องยืนยันกับผู้จัด",
    "titleEn": "Check with the organizer",
    "itemsTh": [
     "รอบอบรมล่าสุด รูปแบบการสอบ และหลักฐานการผ่านอบรมที่ใช้สมัคร",
     "ราคาและเงื่อนไขเฉพาะรอบ Recurrent เพราะไม่ควรนำอัตรา Initial มาใช้"
    ],
    "itemsEn": [
     "Current dates, assessment format and supporting documents",
     "Recurrent-specific fees and conditions; do not reuse initial-course rates"
    ]
   }
  ],
  "noticeTh": "ข้อมูลสรุปเพื่อการศึกษา อ้างอิงผู้จัดหรือหน่วยงานมาตรฐานตามที่ระบุ ไม่ใช่การจัดอบรม การเปิดรับสมัคร หรือการรับรองโดย ACBA ตรวจสอบประกาศล่าสุดก่อนสมัคร",
  "noticeEn": "Educational summary from the identified provider or standards body; not an ACBA-run course, active registration or certification. Verify the latest source notice."
 },
 {
  "slug": "distribution",
  "type": "course",
  "titleTh": "การกระจายสินค้าระหว่างประเทศทางอากาศ",
  "titleEn": "International Air Cargo Distribution",
  "labelTh": "ปฏิบัติการ / การกระจายสินค้า",
  "labelEn": "Operations / distribution",
  "subtitleTh": "หลักสูตรจาก TAFA และแหล่งข้อมูลมาตรฐาน TPQI (คนละส่วน)",
  "subtitleEn": "TAFA-listed course with separate TPQI occupational references",
  "introTh": "หลักสูตร TAFA อธิบายกระบวนการนำเข้า–ส่งออก การจัดการคลังสินค้า และการกระจายสินค้าระหว่างประเทศทางอากาศ ทั้งออนไลน์และในสถานที่ โดยผู้สนใจสามารถศึกษาเกณฑ์คุณวุฒิวิชาชีพ TPQI แยกเป็นอีกหัวข้อได้",
  "introEn": "TAFA describes air import-export, warehousing and international distribution operations with online, onsite and practical learning. TPQI occupational standards are separate reference material.",
  "source": "TAFA — International Air Cargo Distribution / TPQI",
  "sourceUrl": "https://www.tafathai.org/training-and-education",
  "blocks": [
   {
    "titleTh": "หัวข้อและกลุ่มเป้าหมาย",
    "titleEn": "Scope and audience",
    "itemsTh": [
     "งานรับ–ส่งสินค้า คลังสินค้า ULD และขั้นตอนการนำเข้า–ส่งออก",
     "พนักงานคลังสินค้า ตัวแทนขนส่ง สายการบิน GSA และผู้เริ่มทำงานด้านโลจิสติกส์"
    ],
    "itemsEn": [
     "Cargo acceptance and release, warehouse flows, ULDs and import-export operations",
     "Warehouse, freight-forwarding, airline, GSA and entry-level logistics personnel"
    ]
   },
   {
    "titleTh": "คุณวุฒิวิชาชีพที่เกี่ยวข้อง",
    "titleEn": "Related professional qualification",
    "itemsTh": [
     "TPQI เผยแพร่คุณวุฒิวิชาชีพผู้รับจัดการขนส่งสินค้าระหว่างประเทศ (ทางอากาศ) ระดับ 3 ซึ่งเป็นคนละเรื่องกับการได้รับใบประกาศจากการอบรม",
     "การเข้าร่วมอบรมไม่ใช่หลักฐานว่าได้รับคุณวุฒิ TPQI โดยอัตโนมัติ ต้องดูเกณฑ์ประเมินของหน่วยงานรับรอง"
    ],
    "itemsEn": [
     "TPQI separately lists a level-3 qualification for international air freight forwarding professionals",
     "Course participation does not automatically confer TPQI qualifications; assessment rules apply"
    ]
   },
   {
    "titleTh": "ค่าอบรมที่เคยประกาศ",
    "titleEn": "Published course fee example",
    "itemsTh": [
     "หน้า TAFA แสดงค่าอบรม 7,500 บาทต่อคน และวันที่อบรมเป็นช่องว่าง — เป็นราคาอ้างอิงจากประกาศ ไม่ใช่การยืนยันการเปิดรับสมัครปัจจุบัน",
     "ตรวจสอบวันอบรม สถานที่ และค่าธรรมเนียมรอบล่าสุดกับ TAFA ก่อนตัดสินใจสมัคร"
    ],
    "itemsEn": [
     "TAFA lists THB 7,500 per person, but its date field is blank; this is an indicative published fee, not confirmation of an active intake",
     "Confirm the current date, venue and applicable fee directly with TAFA"
    ]
   }
  ],
  "noticeTh": "ข้อมูลสรุปเพื่อการศึกษา อ้างอิงผู้จัดหรือหน่วยงานมาตรฐานตามที่ระบุ ไม่ใช่การจัดอบรม การเปิดรับสมัคร หรือการรับรองโดย ACBA ตรวจสอบประกาศล่าสุดก่อนสมัคร",
  "noticeEn": "Educational summary from the identified provider or standards body; not an ACBA-run course, active registration or certification. Verify the latest source notice."
 },
 {
  "slug": "forwarder",
  "type": "course",
  "titleTh": "ธุรกิจนำเข้า–ส่งออกทางอากาศ",
  "titleEn": "Air Freight Forwarder / Import–Export Business",
  "labelTh": "ธุรกิจโลจิสติกส์",
  "labelEn": "Logistics business",
  "subtitleTh": "ความรู้ด้านเอกสารและการบริหารธุรกิจการขนส่งสินค้า",
  "subtitleEn": "Documents, commercial terms and air import-export operations",
  "introTh": "TAFA เผยแพร่หัวข้ออบรมสำหรับผู้สนใจธุรกิจผู้ส่งออกและผู้นำเข้าทางอากาศ รวมถึงผู้เริ่มต้นสายงาน Freight Forwarder โดยเน้นหลักการค้าและเอกสาร",
  "introEn": "TAFA describes a course for air-import/export business participants and new freight-forwarding professionals, covering commercial terms and documentation.",
  "source": "TAFA — คอร์สอบรม Air Freight Forwarder",
  "sourceUrl": "https://www.tafathai.org/คอร์สอบรม-air-freight-forwarder",
  "blocks": [
   {
    "titleTh": "เนื้อหาที่ระบุในประกาศ",
    "titleEn": "Published subjects",
    "itemsTh": [
     "กฎระเบียบการขนส่งทางอากาศและ Incoterms 2020",
     "เอกสารนำเข้า–ส่งออก ใบอนุญาตพื้นฐาน และพิธีการศุลกากรเบื้องต้น"
    ],
    "itemsEn": [
     "Air cargo regulations and Incoterms 2020",
     "Import-export documents, basic licences and introductory customs procedures"
    ]
   },
   {
    "titleTh": "กำหนดการและค่าใช้จ่าย",
    "titleEn": "Schedule and fees",
    "itemsTh": [
     "หน้า TAFA แสดงตัวอย่างค่าอบรม 7,500 บาทต่อคน แต่ไม่ระบุวันอบรมที่ยืนยันแล้ว",
     "ตรวจสอบวันและสถานที่จริงกับผู้จัดก่อนชำระเงิน"
    ],
    "itemsEn": [
     "TAFA shows an example fee of THB 7,500, but the page has no confirmed course date",
     "Verify current dates, venue and payment instructions with the organizer"
    ]
   }
  ],
  "noticeTh": "ข้อมูลสรุปเพื่อการศึกษา อ้างอิงผู้จัดหรือหน่วยงานมาตรฐานตามที่ระบุ ไม่ใช่การจัดอบรม การเปิดรับสมัคร หรือการรับรองโดย ACBA ตรวจสอบประกาศล่าสุดก่อนสมัคร",
  "noticeEn": "Educational summary from the identified provider or standards body; not an ACBA-run course, active registration or certification. Verify the latest source notice."
 },
 {
  "slug": "tpqi",
  "type": "knowledge",
  "titleTh": "มาตรฐานคุณวุฒิวิชาชีพ TPQI สำหรับ Air Cargo",
  "titleEn": "TPQI Professional Qualifications for Air Cargo",
  "labelTh": "เส้นทางอาชีพ / การรับรองสมรรถนะ",
  "labelEn": "Career development / qualification",
  "subtitleTh": "ระดับ 3–5 และการประเมินสมรรถนะจากแหล่งที่ประกาศจริง",
  "subtitleEn": "Levels 3–5 and competency assessment information",
  "introTh": "สถาบันคุณวุฒิวิชาชีพ (องค์การมหาชน) หรือ TPQI มีมาตรฐานอาชีพด้านการรับจัดการขนส่งสินค้าระหว่างประเทศทางอากาศ และ TAFA เผยแพร่ข้อมูลการประเมินหลายระดับ ทั้งแบบทฤษฎี–สัมภาษณ์ และการเทียบโอนประสบการณ์",
  "introEn": "Thailand Professional Qualification Institute (TPQI) publishes air-freight occupational standards. TAFA also provides reference information for assessments at multiple levels, including examination/interview and experience-based routes.",
  "source": "TPQI-NET — Air Freight Forwarder level 3 / TAFA assessment information",
  "sourceUrl": "https://tpqi-net.tpqi.go.th/index.php/qualifications/4701",
  "blocks": [
   {
    "titleTh": "ระดับที่ประกาศ",
    "titleEn": "Qualification levels",
    "itemsTh": [
     "ระดับ 3: งานปฏิบัติการ ประสานงาน เอกสาร การขนส่งและบริการลูกค้า",
     "ระดับ 4: บทบาทเจ้าหน้าที่อาวุโสในงานขาย การตลาด บริการลูกค้า เอกสาร และปฏิบัติการ",
     "ระดับ 5: งานจัดการ เช่น คลังสินค้า งานขนส่ง การขาย การตลาด และงานปฏิบัติการ"
    ],
    "itemsEn": [
     "Level 3: operational, documentation, freight-coordination and service roles",
     "Level 4: senior sales, marketing, customer service, documentation and operations roles",
     "Level 5: management roles in warehouses, transport, sales, marketing and operations"
    ]
   },
   {
    "titleTh": "รูปแบบประเมินที่ TAFA อธิบาย",
    "titleEn": "Assessment routes described by TAFA",
    "itemsTh": [
     "แบบปกติประกอบด้วยการสอบทฤษฎีและสัมภาษณ์; หน้า TAFA ระบุข้อสอบปรนัย 70 ข้อและเกณฑ์ 80% สำหรับระดับ 3",
     "แบบเทียบโอนประสบการณ์ (RESK) ใช้หลักฐานและประสบการณ์ตามเกณฑ์ของผู้ประเมิน",
     "ขั้นตอนและค่าธรรมเนียมต้องยืนยันกับผู้จัดการประเมินที่ได้รับอนุญาต"
    ],
    "itemsEn": [
     "TAFA lists theory tests and interviews; its level-3 page states 70 multiple-choice questions with an 80% threshold",
     "Experience-based assessment (RESK) depends on eligible evidence and criteria",
     "Confirm actual procedures and fees with the authorized assessment organization"
    ]
   },
   {
    "titleTh": "คุณสมบัติและหลักฐานสำหรับระดับ 3",
    "titleEn": "Level-3 eligibility and evidence",
    "itemsTh": [
     "มาตรฐาน TPQI ระดับ 3 ระบุประสบการณ์ทำงาน ฝึกงาน หรือทดลองงานในวิชาชีพอย่างน้อย 4 เดือน พร้อมหลักฐานรับรองจากหน่วยงานที่เกี่ยวข้อง",
     "ควรเตรียมหลักฐานผลการปฏิบัติงาน เช่น หนังสือรับรองการทำงาน แฟ้มสะสมผลงาน หรือเอกสารการฝึกอบรมตามเกณฑ์ประเมิน",
     "สอบถามองค์กรรับรองที่ได้รับอนุญาตเกี่ยวกับเอกสารที่ต้องใช้และขั้นตอนสมัครจริง",
     "ข้อกำหนดขั้นต่ำ 4 เดือนข้างต้นมาจากหน้า TPQI-NET; ประกาศรับประเมินของ TAFA อาจกำหนดเอกสารรับรองประสบการณ์อย่างน้อย 6 เดือนสำหรับเส้นทางปกติ จึงต้องตรวจเงื่อนไขของรอบและผู้รับสมัครแต่ละราย"
    ],
    "itemsEn": [
     "TPQI's level-3 standard lists at least four months of relevant employment, internship or probationary experience with supporting evidence",
     "Prepare workplace attestations, portfolios or relevant training records as required by the assessment",
     "Confirm supporting documents and application steps with an authorized certification organization",
     "The four-month minimum is in TPQI-NET; TAFA's assessment notice may request evidence of at least six months for its normal route. Check the organizer's specific current assessment requirements."
    ]
   },
   {
    "titleTh": "การแยกบทบาทหน่วยงาน",
    "titleEn": "Who certifies what",
    "itemsTh": [
     "TPQI เป็นเจ้าของมาตรฐานคุณวุฒิวิชาชีพ; TAFA เผยแพร่ข้อมูลหรือโครงการที่เกี่ยวข้อง",
     "ACBA ไม่ได้อ้างว่าเป็นศูนย์ประเมินหรือผู้ออกใบรับรอง และการอ่านบทความนี้ไม่ใช่การลงทะเบียนสอบ"
    ],
    "itemsEn": [
     "TPQI provides the occupational standard; TAFA publishes related program/assessment information",
     "ACBA is not presented as an assessment center or certificate issuer"
    ]
   }
  ],
  "noticeTh": "ข้อมูลสรุปเพื่อการศึกษา อ้างอิงผู้จัดหรือหน่วยงานมาตรฐานตามที่ระบุ ไม่ใช่การจัดอบรม การเปิดรับสมัคร หรือการรับรองโดย ACBA ตรวจสอบประกาศล่าสุดก่อนสมัคร",
  "noticeEn": "Educational summary from the identified provider or standards body; not an ACBA-run course, active registration or certification. Verify the latest source notice."
 },
 {
  "slug": "career",
  "type": "knowledge",
  "titleTh": "ทักษะอาชีพและการทดสอบภาษาอังกฤษในสาย Air Cargo",
  "titleEn": "Career Skills and English Testing in Air Cargo",
  "labelTh": "พัฒนาบุคลากร",
  "labelEn": "Career development",
  "subtitleTh": "เลือกทักษะให้ตรงบทบาทงานก่อนสมัครคอร์สหรือสอบ",
  "subtitleEn": "Match training and language development to your job",
  "introTh": "นอกจากหลักสูตรเฉพาะทาง TAFA ยังแสดงรายการทดสอบ TOEIC และหลักสูตรด้านธุรกิจสำหรับบุคลากรโลจิสติกส์ ผู้สนใจควรตรวจสอบว่าผู้จัดการทดสอบคือหน่วยงานใด ไม่ควรเข้าใจว่า ACBA เป็นศูนย์สอบ",
  "introEn": "TAFA also lists TOEIC testing information and business training. Visitors should check the named test provider rather than assuming ACBA administers any tests.",
  "source": "TAFA — Training and Education",
  "sourceUrl": "https://www.tafathai.org/training-and-education",
  "blocks": [
   {
    "titleTh": "ทักษะที่เกี่ยวข้อง",
    "titleEn": "Relevant skills",
    "itemsTh": [
     "ศัพท์ภาษาอังกฤษด้านเอกสารขนส่งและการประสานงานสายการบิน",
     "การคำนวณอัตราค่าระวาง งานบริการลูกค้า และการใช้ข้อมูลระบบ Cargo",
     "ความเข้าใจเรื่องความปลอดภัยและกฎระเบียบตามหน้าที่"
    ],
    "itemsEn": [
     "English terminology for shipping documents and airline coordination",
     "Tariff calculations, customer service and cargo data workflows",
     "Role-specific operational, security and compliance knowledge"
    ]
   },
   {
    "titleTh": "วิธีตรวจสอบการทดสอบ TOEIC",
    "titleEn": "How to verify TOEIC testing",
    "itemsTh": [
     "TAFA ระบุการทดสอบ TOEIC ในหมวดการฝึกอบรมและการศึกษา พร้อมข้อมูลติดต่อผู้ประสานงานภายนอก",
     "วันสอบ ค่าธรรมเนียม ผู้ดำเนินการสอบ และใบรายงานผล ต้องยืนยันกับผู้ให้บริการสอบจริง"
    ],
    "itemsEn": [
     "TAFA lists TOEIC testing with an external contact in its training section",
     "Check actual provider, exam dates, fees and score-report conditions with the test organizer"
    ]
   }
  ],
  "noticeTh": "ข้อมูลสรุปเพื่อการศึกษา อ้างอิงผู้จัดหรือหน่วยงานมาตรฐานตามที่ระบุ ไม่ใช่การจัดอบรม การเปิดรับสมัคร หรือการรับรองโดย ACBA ตรวจสอบประกาศล่าสุดก่อนสมัคร",
  "noticeEn": "Educational summary from the identified provider or standards body; not an ACBA-run course, active registration or certification. Verify the latest source notice."
 }
] as TrainingTopic[]);

export function getTrainingTopic(type:"course"|"knowledge",slug:string){return TRAINING_TOPICS.find(x=>x.type===type&&x.slug===slug);}
