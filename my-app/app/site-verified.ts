/** Source-backed facts and industry references. Avoid treating TAFA data as ACBA's own. */
export const FACTS={
 registered:"5 กันยายน 2545",
 registeredEn:"5 September 2002",
 registration:"0109545000103",
 address:"628 อาคารทริพเพิลไอ ซอยกลับชม ถนนนนทรี แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120",
 addressEn:"628 Triple I Building, Soi Klubchom, Nonsi Road, Yan Nawa, Bangkok 10120",
 oldPhone:"02-255-2010 ถึง 2011",
 dbd:"https://www.dbd.go.th/download/regis_file/list_association_all.pdf",
 chamber:"https://www.thaichamber.or.th/about/network/trade-associations/services-supply-chain",
 bar:"https://barthailand.org/?page=Executive+Committee",
 tafa:"https://www.tafathai.org/about-us",
 caat:"https://www.caat.or.th/caat-media/203830/",
 airport:"https://freezone.airportthai.co.th/fz_useful_link.php",
 fapaaEducation2023:"https://www.fapaa.org/wp-content/uploads/2024/05/2024-Education-report-Thailand-TAFA.pdf",
 historicalTnscDirectory:"https://www.tnscdirectory.com/wp-content/uploads/2020/11/TNSC-Directory-2019-2020-Website-version.pdf"
} as const;
export const COURSES=[
 {id:"basic",group:"foundations",title:"Basic Air Cargo Tariff",th:"พื้นฐานอัตราค่าขนส่งสินค้าทางอากาศ",descTh:"เรียนรู้เรื่องประเภทสินค้า การคำนวณอัตราค่าระวาง กฎระเบียบ และข้อมูลเบื้องต้นเกี่ยวกับการขนส่งสินค้า",descEn:"Introduction to air cargo tariffs, cargo categories, calculations and industry regulations.",member:"9,500",public:"12,000",duration:"4 DAYS",image:"https://images.pexels.com/photos/4481328/pexels-photo-4481328.jpeg?auto=compress&cs=tinysrgb&w=1200",url:"https://www.tafathai.org/basic-air-cargo-tariff-course-training"},
 {id:"handling",group:"operations",title:"Air Cargo Load Handling",th:"การจัดการและบรรทุกสินค้า",descTh:"การรับสินค้า การจัดเก็บ และการป้องกันความผิดปกติในการปฏิบัติการขนส่งสินค้าทางอากาศ",descEn:"Cargo handling, storage and operational safety considerations.",member:"7,000",public:"8,500",duration:"CARGO OPERATIONS",image:"https://images.pexels.com/photos/27793715/pexels-photo-27793715.jpeg?auto=compress&cs=tinysrgb&w=1200",url:"https://www.tafathai.org/en/air-cargo-load-handling"},
 {id:"dgr",group:"safety",title:"DGR 7.3 / CBTA (Initial)",th:"การอบรม DGR 7.3 สำหรับผู้รับและประมวลผลสินค้าอันตราย",descTh:"การฝึกอบรมแนวทางความปลอดภัยสำหรับบุคลากรที่เกี่ยวข้องกับการขนส่งสินค้าอันตรายทางอากาศ",descEn:"Competency-based training for personnel involved in air dangerous goods consignments.",member:"14,000",public:"17,500",duration:"DGR 7.3 / INITIAL",image:"https://images.pexels.com/photos/35082108/pexels-photo-35082108.jpeg?auto=compress&cs=tinysrgb&w=1200",url:"https://www.tafathai.org/en/dangerous-goods-competency-base-training-and-assessment-cbta-3-2"},
 {id:"dgr71",group:"safety",title:"DGR 7.1 (Shipper)",th:"สินค้าอันตรายสำหรับผู้จัดเตรียมส่งสินค้า",descTh:"หน้าที่ผู้ส่งในการเตรียมเอกสาร บรรจุภัณฑ์ เครื่องหมายและฉลากสินค้าอันตราย",descEn:"Dangerous-goods preparation responsibilities for shippers, including packaging and documents.",member:"—",public:"—",duration:"DGR / SHIPPER",image:"",url:"https://www.tafathai.org/dangerous-goods-competency-base-training-and-assessment-cbta"},
 {id:"dgrrecurrent",group:"safety",title:"DGR 7.3 Recurrent",th:"ทบทวน DGR สำหรับผู้เคยผ่านการอบรม",descTh:"หลักสูตรทบทวนสำหรับบุคลากรที่เคยผ่าน DGR 7.3 โดยต้องตรวจสอบใบรับรองยังไม่หมดอายุ",descEn:"Refresher for DGR 7.3 holders, subject to certificate validity and TAFA entry conditions.",member:"—",public:"—",duration:"DGR / RECURRENT",image:"",url:"https://www.tafathai.org/en/dangerous-goods-competency-base-training-and-assessment-cbta-3-2"},
 {id:"distribution",group:"operations",title:"International Air Cargo Distribution",th:"การกระจายสินค้าระหว่างประเทศทางอากาศ",descTh:"ขั้นตอนคลังสินค้า การนำเข้า–ส่งออก และการจัดการการกระจายสินค้าทางอากาศ อ้างอิงหลักสูตรของ TAFA และมาตรฐานวิชาชีพ TPQI ที่แยกต่างหาก",descEn:"Warehouse operations and international air cargo distribution, based on a TAFA course listing and separately published TPQI standards.",member:"—",public:"—",duration:"AIR CARGO / DISTRIBUTION",image:"",url:"https://www.tafathai.org/คอร์สอบรม-air-freight-forwarder"},
 {id:"forwarder",group:"professional",title:"Air Freight Forwarder & Import–Export",th:"การจัดการธุรกิจนำเข้า–ส่งออกทางอากาศ",descTh:"กฎระเบียบ Incoterms 2020 เอกสารนำเข้า–ส่งออกและพิธีการศุลกากรเบื้องต้น",descEn:"Air import-export business operations, Incoterms 2020, shipping documents and customs basics.",member:"—",public:"—",duration:"PROFESSIONAL / TRADE",image:"",url:"https://www.tafathai.org/คอร์สอบรม-air-freight-forwarder"},
] as const;
export const LIBRARY=[
 {nameTh:"ทะเบียนสมาคมการค้า (DBD)",nameEn:"Department of Business Development",category:"ASSOCIATION",descTh:"รายชื่อสมาคมการค้า เลขทะเบียน วันที่จัดตั้ง และที่อยู่ตามทะเบียน",descEn:"Official association registration listing and historical address.",url:FACTS.dbd,icon:"file"},
 {nameTh:"เครือข่ายสมาคมการค้า หอการค้าไทย",nameEn:"Thai Chamber of Commerce",category:"NETWORK",descTh:"รายชื่อสมาคมในกลุ่มธุรกิจบริการขนส่งและซัพพลายเชน ซึ่งมี ACBA รวมอยู่ด้วย",descEn:"Transport and supply-chain trade association network, including ACBA.",url:FACTS.chamber,icon:"users"},
 {nameTh:"CAAT — คู่มือ Known Consignor",nameEn:"Known Consignor Certification Guide",category:"SAFETY",descTh:"คู่มือและข้อมูลเกี่ยวกับการยื่นคำขอใบรับรองผู้ส่งทราบตัวตน",descEn:"Official known consignor certification guidance and documentation.",url:"https://www.caat.or.th/certificate_license/180224/",icon:"shield"},
 {nameTh:"CAAT — ระบบ KC และ RA",nameEn:"Known Consignor / Regulated Agent",category:"SAFETY",descTh:"ข้อมูลการพัฒนาระบบรักษาความปลอดภัยสำหรับห่วงโซ่การขนส่งสินค้าทางอากาศ",descEn:"Security supply chain framework and stakeholder discussions involving ACBA.",url:FACTS.caat,icon:"plane"},
 {nameTh:"AOT — เขตปลอดอากรสุวรรณภูมิ",nameEn:"Suvarnabhumi Airport Free Zone",category:"OPERATIONS",descTh:"แผนผังอาคารคลังสินค้า TG, BFS และสำนักงานเขตปลอดอากร",descEn:"Airport free-zone map and cargo facilities including TG and BFS.",url:"https://freezone.airportthai.co.th/map.php",icon:"building"},
 {nameTh:"AOT — Digital Cargo (M4)",nameEn:"Airports of Thailand: Digital Cargo",category:"OPERATIONS",descTh:"แนวทางระบบ Smart Access และ Smart Cargo ที่เกี่ยวข้องกับการจัดการพื้นที่เขตปลอดอากร",descEn:"Smart Access, FEMS and FDMS digital cargo initiatives from AOT.",url:"https://www.airportthai.co.th/en/digital-technology-and-innovation/",icon:"package"},
 {nameTh:"TAFA — การอบรมและวิชาการ",nameEn:"TAFA Training and Education",category:"LEARNING",descTh:"หลักสูตรของ TAFA ที่บางรายการประกาศอัตราค่าลงทะเบียนสำหรับสมาชิก ACBA",descEn:"TAFA-organized courses with select published ACBA member rates.",url:"https://www.tafathai.org/en/training-and-education",icon:"book"},
 {nameTh:"BAR Thailand — คณะกรรมการและที่ปรึกษา",nameEn:"BAR Thailand Executive Committee",category:"NETWORK",descTh:"ทำเนียบ BAR Thailand ที่ระบุ ACBA เป็นหนึ่งในองค์กรที่ปรึกษา",descEn:"BAR Thailand's executive committee directory lists ACBA among consultants.",url:FACTS.bar,icon:"users"}
] as const;
