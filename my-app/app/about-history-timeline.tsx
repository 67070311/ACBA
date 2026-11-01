import {Reveal} from "./ui-reveal";
import {ContentPhoto} from "./content-photo";
import {IMAGES} from "./site-content";
import {TimelineProgress} from "./about-timeline-progress";

type Lang="th"|"en";
type Milestone={
 year:string; eraTh:string; monthTh:string;monthEn:string;
 kicker:string;titleTh:string;titleEn:string;
 bodyTh:string;bodyEn:string;sourceTh:string;sourceEn:string;
 photo?:string;document?:boolean;
};
const milestones:Milestone[]=[
 {
  year:"2002",eraTh:"พ.ศ. 2545",monthTh:"5 กันยายน",monthEn:"5 September",
  kicker:"OFFICIAL REGISTRATION",
  titleTh:"จุดเริ่มต้นของ ACBA",titleEn:"The association is registered",
  bodyTh:"สมาคมการค้าธุรกิจการบินขนส่งสินค้า (ACBA) มีหลักฐานการจดทะเบียนในทะเบียนสมาคมการค้าของกรมพัฒนาธุรกิจการค้า และปรากฏในทำเนียบสมาคมการค้าของหอการค้าไทยภายใต้กลุ่มธุรกิจขนส่งและซัพพลายเชน",
  bodyEn:"The Department of Business Development records the Airline Cargo Business Association (ACBA) as a registered Thai trade association. The Thai Chamber of Commerce also lists it under Transport & Supply Chain.",
  sourceTh:"กรมพัฒนาธุรกิจการค้า · ทะเบียนสมาคมการค้า / หอการค้าไทย · ทำเนียบสมาคมการค้า",sourceEn:"Department of Business Development · Trade association register / Thai Chamber of Commerce · Association directory",
  document:true
 },
 {
  year:"2022",eraTh:"พ.ศ. 2565",monthTh:"รายงานช่วงปี 2021–2022",monthEn:"2021–2022 reporting period",
  kicker:"INDUSTRY EDUCATION",
  titleTh:"ความร่วมมือด้านการพัฒนาบุคลากร",titleEn:"Collaboration in professional training",
  bodyTh:"รายงานด้านการฝึกอบรมช่วงปี 2021–2022 ที่ TAFA เผยแพร่ผ่าน FAPAA ระบุการดำเนินหลักสูตรด้านขนส่งสินค้าทางอากาศร่วมกับ ACBA และ Thai Flight Training เพื่อสนับสนุนความรู้ให้บุคลากรในอุตสาหกรรม",
  bodyEn:"A TAFA education and training report covering 2021–2022, published through FAPAA, identifies ACBA and Thai Flight Training as collaborators in air-freight industry courses.",
  sourceTh:"TAFA · FAPAA Education & Training Report 2021–2022",sourceEn:"TAFA · FAPAA Education & Training Report 2021–2022",
  photo:IMAGES.timelineFounding
 },
 {
  year:"2023",eraTh:"พ.ศ. 2566",monthTh:"ข้อมูลการอบรมปี 2023",monthEn:"2023 training records",
  kicker:"EDUCATION & TRAINING",
  titleTh:"11 รุ่นอบรม ผู้เข้าร่วม 218 คน",titleEn:"11 classes, 218 participants",
  bodyTh:"รายงาน Education Report 2023 ของ TAFA ระบุหลักสูตรที่จัดร่วมกับ ACBA และ Thai Flight Training ได้แก่ Dangerous Goods Regulations 9 รุ่น (160 คน) และ Basic Air Cargo Tariff 2 รุ่น (58 คน) โดยรายงานดังกล่าวนำเสนอในการประชุม FAPAA เดือนมิถุนายน 2024",
  bodyEn:"TAFA's Education Report 2023 records courses organized with ACBA and Thai Flight Training: nine Dangerous Goods Regulations classes (160 participants) and two Basic Air Cargo Tariff classes (58 participants). The report was presented to FAPAA in June 2024.",
  sourceTh:"TAFA · Education Report 2023 (นำเสนอ FAPAA ปี 2024)",sourceEn:"TAFA · Education Report 2023 (presented to FAPAA in 2024)",
  photo:IMAGES.timelineIndustry
 },
 {
  year:"2026",eraTh:"พ.ศ. 2569",monthTh:"4 มิถุนายน",monthEn:"4 June",
  kicker:"AVIATION SECURITY",
  titleTh:"ร่วมเวทีหารือ Known Consignor",titleEn:"Discussing Known Consignor standards",
  bodyTh:"CAAT จัดการประชุมเพื่อศึกษาระบบผู้ส่งทราบตัวตน (Known Consignor) โดยมี ACBA เข้าร่วมกับหน่วยงานภาครัฐ สายการบิน TAFA และผู้ให้บริการคลังสินค้า เพื่อแลกเปลี่ยนข้อคิดเห็นด้านความปลอดภัยและประสิทธิภาพการขนส่งสินค้า",
  bodyEn:"CAAT convened a discussion on the Known Consignor system, with ACBA participating alongside authorities, airlines, TAFA and cargo-terminal operators to exchange perspectives on cargo security and efficiency.",
  sourceTh:"CAAT · ข่าวเผยแพร่ 5 มิถุนายน 2569",sourceEn:"CAAT · Release of 5 June 2026",
  photo:IMAGES.timelineSecurity
 },
 {
  year:"2026",eraTh:"พ.ศ. 2569",monthTh:"20 ตุลาคม",monthEn:"20 October",
  kicker:"AIRPORT COORDINATION",
  titleTh:"ประสานแก้ปัญหาคลังสินค้าสุวรรณภูมิ",titleEn:"Coordinating cargo-terminal improvements",
  bodyTh:"ศุลกากรสุวรรณภูมิประชุมร่วมกับ AOT คลังสินค้า TG และ BFS, TAFA และ ACBA เพื่อติดตามและบูรณาการแนวทางแก้ไขความแออัดภายในคลังสินค้าเขตปลอดอากรของท่าอากาศยานสุวรรณภูมิ",
  bodyEn:"Suvarnabhumi Airport Cargo Customs Office met with AOT, TG and BFS cargo terminals, TAFA and ACBA to coordinate and follow up on congestion issues at the airport free-zone cargo facilities.",
  sourceTh:"สำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ · 20 ตุลาคม 2569",sourceEn:"Suvarnabhumi Airport Cargo Customs Office · 20 October 2026",
  photo:IMAGES.timelineToday
 }
];

export function AboutHistoryTimeline({lang="th"}:{lang?:Lang}){
 const en=lang==="en";
 return <section className="about-archive" aria-labelledby="acba-history-title">
  <div className="site-wrap about-archive-intro">
    <div className="about-archive-intro-kicker">{en?"ACBA / AN INDUSTRY HISTORY":"ACBA / ประวัติและความร่วมมือ"}</div>
    <h2 id="acba-history-title">{en?<>A story told<br/><em>through time.</em></>:<>เรื่องราวของ ACBA<br/><em>ผ่านกาลเวลา</em></>}</h2>
    <p>{en?"A selection of documented milestones, from official registration to later cooperation in air cargo training, security and operations.":"รวมหมุดหมายที่มีหลักฐานเผยแพร่ ตั้งแต่การจดทะเบียนสมาคม ไปจนถึงความร่วมมือด้านบุคลากร มาตรฐานการบิน และการดำเนินงานด้าน Cargo"}</p>
  </div>
  <div className="site-wrap about-archive-container">
   <TimelineProgress><div className="about-archive-spine" aria-hidden="true"/>
   <div className="about-archive-list">
    {milestones.map((item,i)=><Reveal className={"about-archive-reveal "+(i%2?"alternate":"")} key={item.year+"-"+i} delay={45}>
      <article className="about-archive-entry" aria-label={(en?item.monthEn:item.monthTh)+" "+item.year}>
       <div className="about-archive-date">
        <span className="about-archive-year">{item.year}</span>
        <span className="about-archive-era">{en?"THAILAND / ACBA":item.eraTh}</span>
        <span className="about-archive-dot" aria-hidden="true"/>
       </div>
       <div className="about-archive-content">
        <div className="about-archive-visual">
         {item.document?
           <div className="about-archive-document" role="img" aria-label={en?"Graphic illustration of association registration record":"กราฟิกจำลองข้อมูลทะเบียนสมาคม ไม่ใช่ภาพเอกสารต้นฉบับ"}>
            <span className="about-archive-document-top">TRADE ASSOCIATION / THAILAND</span>
            <strong>ACBA</strong>
            <span className="about-archive-document-title">AIRLINE CARGO<br/>BUSINESS ASSOCIATION</span>
            <span className="about-archive-document-divider"/>
            <small>{en?"TRADE ASSOCIATION / DBD":"ทะเบียนสมาคมการค้า / DBD"}</small>
            <span className="about-archive-document-number">0109545000103</span>
           </div>
           : <div className="about-archive-photo"><ContentPhoto src={item.photo!} alt={en?"Illustrative photograph of air cargo operations":"ภาพประกอบอุตสาหกรรมขนส่งสินค้าทางอากาศ ไม่ใช่ภาพเหตุการณ์ในปีนั้น"} sizes="(max-width: 800px) 90vw, 38vw"/><small>{en?"ILLUSTRATIVE PHOTO":"ภาพประกอบ ไม่ใช่ภาพเหตุการณ์จริง"}</small></div>
         }
        </div>
        <div className="about-archive-copy">
         <span className="about-archive-kicker">{item.kicker}</span>
         <div className="about-archive-month">{en?item.monthEn:item.monthTh}</div>
         <h3>{en?item.titleEn:item.titleTh}</h3>
         <p>{en?item.bodyEn:item.bodyTh}</p>
         {item.document&&<dl className="about-archive-registry-details">
          <div><dt>{en?"REGISTERED":"วันจดทะเบียน"}</dt><dd>{en?"5 September 2002":"5 กันยายน 2545"}</dd></div>
          <div><dt>{en?"REGISTRATION NUMBER":"เลขทะเบียนสมาคม"}</dt><dd>0109545000103</dd></div>
          <div><dt>{en?"INDUSTRY GROUP":"กลุ่มธุรกิจ"}</dt><dd>{en?"Transport & Supply Chain":"ขนส่งและซัพพลายเชน"}</dd></div>
         </dl>}
         <div className="about-archive-source">{en?"SOURCE":"ข้อมูลอ้างอิง"}<span>{en?item.sourceEn:item.sourceTh}</span></div>
        </div>
       </div>
      </article>
     </Reveal>)}
   </div></TimelineProgress>
  </div>
  <div className="site-wrap about-archive-afterword">
   <span>{en?"ACBA / HISTORY":"ACBA / ประวัติสมาคม"}</span>
   <p>{en?"The entries reflect published evidence, not a complete record of every association activity. Dates are associated with the specified source reports.":"Timeline นี้เป็นตัวอย่างหมุดหมายที่ตรวจสอบได้จากแหล่งข้อมูลที่เผยแพร่ ไม่ใช่บันทึกกิจกรรมของสมาคมทุกปี โดยแสดงช่วงปีตามเอกสารต้นทาง"}</p>
  </div>
 </section>;
}
