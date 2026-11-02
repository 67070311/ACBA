import {Eyebrow} from "./ui-elements";
import {Icon} from "./ui-icons";
import {Reveal} from "./ui-reveal";
import {IMAGES} from "./site-content";
import Link from "next/link";
import {TrainingCourseBrowser} from "./training-course-browser";
import {ProfessionalPaths} from "./professional-paths";
type Lang="th"|"en";
const foundations=[
 {icon:"plane" as const,th:"ภาพรวมระบบ Air Cargo",en:"Air Cargo Ecosystem",bodyTh:"สายการบิน ผู้ให้บริการภาคพื้น คลังสินค้า และผู้ประกอบการที่เกี่ยวข้องทำงานร่วมกันอย่างไร",bodyEn:"Explore airlines, ground handlers, warehouses and other stakeholders."},
 {icon:"package" as const,th:"การปฏิบัติงานขนส่งสินค้าทางอากาศ",en:"Cargo Operations",bodyTh:"การรับสินค้า การจัดเก็บ การคำนวณค่าระวาง และการจัดการสินค้าทางอากาศ",bodyEn:"Cargo acceptance, storage, tariff calculations and handling fundamentals."},
 {icon:"shield" as const,th:"ความปลอดภัยด้าน Air Cargo",en:"Cargo Security",bodyTh:"แนวทาง Known Consignor (KC), Regulated Agent (RA) และหลักการรักษาความปลอดภัย",bodyEn:"Known Consignor, Regulated Agent and air cargo security principles."},
];
export function TrainingPage({lang="th"}:{lang?:Lang}){
 const en=lang==="en",contact=en?"/en/contact":"/contact";
 return <main lang={lang} className="inner-page training-refresh">
  <section className="site-wrap learning-hero">
    <div className="learning-hero-copy">
      
      <span className="learning-hero-tag"><Icon name="graduation" size={16}/> {en?"ACBA / INDUSTRY LEARNING":"ACBA / การฝึกอบรมและวิชาการ"}</span>
      <h1>{en?<>Discover more.<br/><em>Learn beyond.</em><br/>Move forward.</>:<>เรียนรู้ให้ไกลกว่า<br/><em>พัฒนาไปด้วยกัน</em><br/>กับโลก Air Cargo</>}</h1>
      <p>{en?"A place to explore useful air cargo training topics, industry knowledge and courses from partners that have recognized ACBA member rates.":"ศูนย์รวมข้อมูลการพัฒนาความรู้ด้านขนส่งสินค้าทางอากาศ พร้อมตัวอย่างหลักสูตรจากหน่วยงานภาคอุตสาหกรรมที่มีการประกาศอัตราสมาชิก ACBA"}</p>
      <div className="learning-hero-actions"><a className="learning-cta" href="#courses"><Icon name="book" size={19}/>{en?"Browse courses":"ดูหลักสูตร"}</a><a href="#professional-paths" className="learning-sub-link">{en?"Professional qualifications":"มาตรฐานวิชาชีพ TPQI"}</a><a href={contact} className="learning-sub-link">{en?"Contact the association":"ติดต่อสมาคม"}</a></div>
    </div>
    <div className="learning-hero-visual">
       <div className="learning-image-main"><img src={IMAGES.trainingHero} alt={en?"Warehouse cargo operations":"การปฏิบัติงานในคลังสินค้าโลจิสติกส์"}/></div>
       <div className="learning-image-mini"><img src={IMAGES.trainingDetail} alt={en?"Air cargo aircraft at an airport":"เครื่องบินขนส่งสินค้าที่ท่าอากาศยาน"}/></div>
       <div className="learning-floating-tag"><span>{en?"Learning connects the industry.":"ความรู้เชื่อมโยงอุตสาหกรรม"}<small>ACBA · AIR CARGO</small></span></div>
       <div className="learning-visual-orb" aria-hidden="true"/>
    </div>
  </section>
  <section className="site-wrap learning-trust-strip">
   <span>{en?"INDUSTRY REFERENCES":"แหล่งความรู้ที่เกี่ยวข้อง"}</span>
   <div><b>ACBA</b><b>TAFA</b><b>TPQI</b><b>CAAT</b></div>
   <small>{en?"Organizations are named for context, not as endorsements.":"ชื่อหน่วยงานใช้เพื่ออ้างอิงข้อมูล ไม่ใช่การอ้างการรับรองความร่วมมือเพิ่มเติม"}</small>
  </section>
  <section className="learning-courses" id="courses"><div className="site-wrap">
   <Reveal><div className="learning-section-heading centered"><Eyebrow>{en?"COURSE DISCOVERY":"ข้อมูลหลักสูตร"}</Eyebrow><h2>{en?"Courses worth exploring.":"หลักสูตรที่น่าสนใจ"}</h2><p>{en?"TAFA-published course references including DGR 7.1/7.3, cargo handling, air distribution and forwarding. Only courses explicitly listing ACBA member rates show those figures.":"รวมตัวอย่างหลักสูตรที่ TAFA เผยแพร่ ทั้ง DGR 7.1/7.3, การจัดการสินค้า การกระจายสินค้าทางอากาศ และงาน Forwarder โดยแสดงราคาสมาชิก ACBA เฉพาะหลักสูตรที่ต้นทางระบุจริง"}</p></div></Reveal>
   <TrainingCourseBrowser lang={lang}/>
  </div></section>
  <ProfessionalPaths lang={lang}/>
  <section className="learning-explore site-wrap">
   <div className="learning-section-heading"><Eyebrow>{en?"EXPLORE THE TOPICS":"สำรวจองค์ความรู้"}</Eyebrow><h2>{en?"Explore essential":"สำรวจองค์ความรู้"}<br/><em>{en?"air cargo knowledge.":"ด้าน Air Cargo"}</em></h2><p>{en?"A practical overview of the topics that matter across the air freight value chain.":"ทำความเข้าใจเรื่องสำคัญตั้งแต่ระบบขนส่งสินค้าทางอากาศ การปฏิบัติการ ไปจนถึงมาตรฐานความปลอดภัย"}</p></div>
   <div className="learning-topic-row">{foundations.map((item,i)=><Reveal key={item.icon} delay={i*75}><article className="learning-topic-card"><span className="learning-topic-number">0{i+1}</span><div><Link className="learning-topic-internal" href={(en?"/en":"")+"/training/knowledge/"+["ecosystem","operations","security"][i]}><strong>{en?item.en:item.th}</strong><p>{en?item.bodyEn:item.bodyTh}</p><small>{en?"Read the guide":"อ่านรายละเอียด"} <Icon name="arrow-right" size={16}/></small></Link></div><span className="learning-topic-dash" aria-hidden="true"/></article></Reveal>)}</div>
  </section>
  <section className="training-report" aria-labelledby="training-report-heading">
   <div className="site-wrap">
    <div className="training-report-head">
     <div>
      <span className="training-minilabel">{en?"TRAINING REPORT / 2023":"รายงานการฝึกอบรม / 2023"}</span>
      <h2 id="training-report-heading">{en?<>A year of<br/><em>shared learning.</em></>:<>ความร่วมมือ<br/><em>ที่สร้างการเรียนรู้</em></>}</h2>
     </div>
     <p>{en?"TAFA's Education Report 2023 records training delivered in cooperation with ACBA and Thai Flight Training. These figures describe past courses, not current enrollment.":"จากรายงาน Education Report 2023 ของ TAFA ซึ่งระบุความร่วมมือกับ ACBA และ Thai Flight Training ตัวเลขนี้เป็นข้อมูลหลักสูตรที่ผ่านมา ไม่ใช่ยอดสมัครอบรมปัจจุบัน"}</p>
    </div>
    <div className="training-report-summary">
     <div className="training-report-total">
      <span>{en?"TOTAL PARTICIPANTS":"จำนวนผู้เข้าอบรมรวม"}</span>
      <div className="training-report-total-value"><strong>218</strong><small>{en?"people":"คน"}</small></div>
      <p>{en?"Across 11 training classes in the 2023 report":"จากหลักสูตรทั้งหมด 11 รุ่น ตามรายงานปี 2023"}</p>
     </div>
     <div className="training-report-courses">
      <div className="training-report-course">
       <span className="training-report-course-count">09</span>
       <div><h3>{en?"Dangerous Goods Regulations":"หลักสูตรสินค้าอันตราย"}</h3><p>{en?"9 classes · 160 participants":"9 รุ่น · ผู้เข้าอบรม 160 คน"}</p></div>
      </div>
      <div className="training-report-course">
       <span className="training-report-course-count">02</span>
       <div><h3>Basic Air Cargo Tariff</h3><p>{en?"2 classes · 58 participants":"2 รุ่น · ผู้เข้าอบรม 58 คน"}</p></div>
      </div>
      <span className="training-report-source">{en?"SOURCE: TAFA EDUCATION REPORT 2023 · PRESENTED TO FAPAA IN 2024":"อ้างอิง: TAFA Education Report 2023 · นำเสนอในที่ประชุม FAPAA ปี 2024"}</span>
     </div>
    </div>
   </div>
  </section>
  <section className="site-wrap training-before" aria-labelledby="training-before-heading">
   <div className="training-before-intro">
    <span className="training-minilabel">{en?"BEFORE YOU ENROLL":"ก่อนลงทะเบียน"}</span>
    <h2 id="training-before-heading">{en?<>Ready for<br/><em>your next course?</em></>:<>เตรียมตัวให้พร้อม<br/><em>ก่อนเข้าอบรม</em></>}</h2>
    <p>{en?"Four practical things to confirm before signing up for a professional air cargo course. Always refer to the organizer's latest announcement.":"สรุปสิ่งที่ควรตรวจสอบก่อนสมัครอบรมแบบกระชับ โดยยึดประกาศล่าสุดของผู้จัดหลักสูตรเป็นหลัก"}</p>
   </div>
   <ol className="training-before-steps">
    {[
     {n:"01",th:"เลือกระดับหลักสูตร",en:"Choose a suitable course",thBody:"ดูเนื้อหาให้ตรงกับประสบการณ์และหน้าที่งาน โดยเฉพาะหลักสูตรด้านสินค้าอันตราย",enBody:"Match the training level to your experience and job role, particularly for dangerous goods."},
     {n:"02",th:"ตรวจสอบกำหนดการ",en:"Check the schedule",thBody:"ยืนยันวัน เวลา และสถานที่จากประกาศของผู้จัดหลักสูตรก่อนสมัคร",enBody:"Confirm the dates, times and venue with the course organizer."},
     {n:"03",th:"อ่านเงื่อนไขการอบรม",en:"Review the requirements",thBody:"ตัวอย่างหลักสูตร Basic Air Cargo Tariff ของ TAFA ระบุการอบรม 4 วัน และเกณฑ์ผ่าน 80%",enBody:"TAFA's Basic Air Cargo Tariff example lists four training days and an 80% passing requirement."},
     {n:"04",th:"ยืนยันสิทธิและค่าธรรมเนียม",en:"Confirm eligibility and fees",thBody:"ตรวจสอบสิทธิสมาชิก เอกสารที่ต้องใช้ และค่าอบรมสำหรับรอบที่เปิดรับจริง",enBody:"Verify member eligibility, required documents and the fees for the current intake."}
    ].map(x=><li className="training-before-step" key={x.n}>
      <span className="training-before-index">{x.n}</span>
      <div><h3>{en?x.en:x.th}</h3><p>{en?x.enBody:x.thBody}</p></div>
     </li>)}
   </ol>
  </section>
 </main>;
}