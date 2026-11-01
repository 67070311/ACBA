import Link from "next/link";
import {FACTS} from "./site-verified";
type Lang="th"|"en";
const priorities=[
 {key:"01",th:"ประสานความร่วมมือด้านการบินขนส่งสินค้า",en:"Cargo-industry collaboration",thDetail:"จากบันทึกการประชุมที่เผยแพร่ พบการประสานงานกับผู้ประกอบการคลังสินค้า สายการบิน ศุลกากร และหน่วยงานสนามบิน",enDetail:"Public meeting records document discussions among cargo terminals, airlines, customs and airport stakeholders."},
 {key:"02",th:"ติดตามประเด็นการปฏิบัติงานและความปลอดภัย",en:"Operational and security dialogue",thDetail:"เข้าร่วมหารือปัญหาคลังสินค้าและแนวทาง Known Consignor ในฐานะผู้มีส่วนเกี่ยวข้อง ไม่ใช่หน่วยงานกำกับดูแล",enDetail:"Participating in warehouse-operation and Known Consignor discussions as a stakeholder, not a regulator."},
 {key:"03",th:"ส่งเสริมความรู้ของบุคลากร",en:"Professional knowledge",thDetail:"มีหลักฐานความร่วมมือด้านการฝึกอบรมจากรายงานของ TAFA/FAPAA โดยการอบรมแต่ละหลักสูตรดำเนินการตามเงื่อนไขของผู้จัด",enDetail:"TAFA/FAPAA reports document training collaboration. Each course remains subject to its organizer's terms."}
];
export function AssociationScope({lang="th"}:{lang?:Lang}){
 const en=lang==="en",base=en?"/en":"";
 return <>
 <section className="acba-scope-core site-wrap" id="association-purpose">
   <div className="acba-scope-heading"><span>ACBA / PURPOSE & DIRECTION</span><h2>{en?"Purpose, direction & work":"บทบาท วัตถุประสงค์ และแนวทางดำเนินงาน"}</h2><p>{en?"A clear overview drawn from verifiable association and industry records. The official vision, mission and constitutional objectives require an approved copy from ACBA.":"สรุปจากทะเบียนสมาคมและการดำเนินงานที่มีแหล่งข้อมูลสาธารณะรองรับ โดยข้อความวิสัยทัศน์ พันธกิจ และวัตถุประสงค์ตามข้อบังคับฉบับทางการยังต้องได้รับการยืนยันจาก ACBA"}</p></div>
   <div className="acba-scope-intent">
    <div><span>VISION / DIRECTION</span><h3>{en?"Connected air cargo industry":"อุตสาหกรรมการบินขนส่งสินค้าที่เชื่อมโยงกัน"}</h3><p>{en?"An editorial description of the association's documented collaborative role—not an official vision statement.":"ข้อความสรุปเชิงอธิบายจากบทบาทที่ตรวจสอบได้ ไม่ใช่คำประกาศวิสัยทัศน์อย่างเป็นทางการของสมาคม"}</p></div>
    <div><span>MISSION / DOCUMENTED ACTIVITIES</span><h3>{en?"Cooperation, operational dialogue and learning":"ประสานความร่วมมือ หารือปัญหา และพัฒนาความรู้"}</h3><p>{en?"A summary of publicly reported activities. It should not be treated as the official mission or bylaws.":"สรุปประเด็นที่พบในเอกสารเผยแพร่ ไม่ใช่ถ้อยคำพันธกิจหรือข้อบังคับสมาคมฉบับรับรอง"}</p></div>
   </div>
   <h3 className="acba-scope-list-heading">{en?"What public records support":"แนวทางการดำเนินงานที่มีหลักฐาน"}</h3>
   <div className="acba-scope-list">{priorities.map(x=><article key={x.key}><span>{x.key}</span><div><h4>{en?x.en:x.th}</h4><p>{en?x.enDetail:x.thDetail}</p></div></article>)}</div>
   <div className="acba-scope-links"><a href={FACTS.chamber} target="_blank" rel="noopener noreferrer">{en?"Trade association network":"เครือข่ายหอการค้าไทย"} ↗</a><a href={FACTS.caat} target="_blank" rel="noopener noreferrer">{en?"CAAT meeting record":"รายงานการประชุม CAAT"} ↗</a><a href={FACTS.fapaaEducation2023} target="_blank" rel="noopener noreferrer">{en?"Training report":"รายงานการอบรม"} ↗</a></div>
 </section>
 <section className="acba-scope-leadership" id="association-leadership"><div className="site-wrap acba-scope-leadership-inner">
  <div><span>ACBA / GOVERNANCE</span><h2>{en?"Board & leadership":"คณะกรรมการและผู้บริหารสมาคม"}</h2><p>{en?"For accuracy, current names, titles and portraits will be listed only after the association confirms the current board. Older historical records must not be labeled as today's committee.":"รายชื่อ ตำแหน่ง รูปภาพ และวาระของคณะกรรมการชุดปัจจุบัน ต้องมีเอกสารรับรองจากสมาคมก่อนนำขึ้นเว็บไซต์ โดยจะไม่นำรายชื่อในเอกสารย้อนหลังมาอ้างเป็นกรรมการปัจจุบัน"}</p></div>
  <div className="acba-scope-leadership-aside"><strong>{en?"Official records pending":"อยู่ระหว่างยืนยันข้อมูลทางการ"}</strong><span>{en?"Current board • roles • photos • term of office":"รายชื่อปัจจุบัน • ตำแหน่ง • รูปภาพ • วาระดำรงตำแหน่ง"}</span><Link href={base+"/contact"}>{en?"Contact information":"ข้อมูลติดต่อสมาคม"} ↗</Link></div>
 </div></section>
 </>;
}
