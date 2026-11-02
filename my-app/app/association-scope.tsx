import {Icon} from "./ui-icons";
import Link from "next/link";
import {FACTS} from "./site-verified";
type Lang="th"|"en";
const priorities=[
 {key:"01",th:"ประสานความร่วมมือด้านการขนส่งสินค้าทางอากาศ",en:"Cargo-industry collaboration",thDetail:"จากบันทึกการประชุมที่เผยแพร่ พบการประสานงานกับผู้ประกอบการคลังสินค้า สายการบิน ศุลกากร และหน่วยงานสนามบิน",enDetail:"Public meeting records document discussions among cargo terminals, airlines, customs and airport stakeholders."},
 {key:"02",th:"ติดตามประเด็นการปฏิบัติงานและความปลอดภัย",en:"Operational and security dialogue",thDetail:"เข้าร่วมหารือปัญหาคลังสินค้าและแนวทาง Known Consignor ในฐานะผู้มีส่วนเกี่ยวข้อง ไม่ใช่หน่วยงานกำกับดูแล",enDetail:"Participating in warehouse-operation and Known Consignor discussions as a stakeholder, not a regulator."},
 {key:"03",th:"ส่งเสริมความรู้ของบุคลากร",en:"Professional knowledge",thDetail:"มีหลักฐานความร่วมมือด้านการฝึกอบรมจากรายงานของ TAFA/FAPAA โดยการอบรมแต่ละหลักสูตรดำเนินการตามเงื่อนไขของผู้จัด",enDetail:"TAFA/FAPAA reports document training collaboration. Each course remains subject to its organizer's terms."}
];
export function AssociationScope({lang="th"}:{lang?:Lang}){
 const en=lang==="en",base=en?"/en":"";
 return <>
 <section className="acba-scope-core site-wrap" id="association-purpose">
   <div className="acba-scope-heading"><span>ACBA / PURPOSE & DIRECTION</span><h2>{en?"Purpose, direction & work":"บทบาท วัตถุประสงค์ และแนวทางดำเนินงาน"}</h2><p>{en?"A clear overview drawn from verifiable association and industry records. The official vision, mission and constitutional objectives require an approved copy from ACBA.":"สรุปจากทะเบียนสมาคมและการดำเนินงานที่มีแหล่งข้อมูลสาธารณะรองรับ โดยข้อความวิสัยทัศน์ พันธกิจ และวัตถุประสงค์ตามข้อบังคับฉบับทางการยังต้องได้รับการยืนยันจาก ACBA"}</p></div>
   <div className="acba-scope-intent">
    <div><span>VISION / DIRECTION</span><h3>{en?"Connected air cargo industry":"อุตสาหกรรมขนส่งสินค้าทางอากาศที่เชื่อมโยงกัน"}</h3><p>{en?"Building connections and cooperation across Thailand's air cargo community.":"มุ่งเชื่อมโยงผู้ประกอบการและส่งเสริมความร่วมมือในอุตสาหกรรมขนส่งสินค้าทางอากาศของสมาคม"}</p></div>
    <div><span>MISSION / DOCUMENTED ACTIVITIES</span><h3>{en?"Cooperation, operational dialogue and learning":"ประสานความร่วมมือ หารือปัญหา และพัฒนาความรู้"}</h3><p>{en?"Supporting dialogue, industry cooperation and knowledge sharing.":"สรุปประเด็นที่พบในเอกสารเผยแพร่ ไม่ใช่ถ้อยคำพันธกิจหรือข้อบังคับสมาคมฉบับรับรอง"}</p></div>
   </div>
   <h3 className="acba-scope-list-heading">{en?"What public records support":"แนวทางการดำเนินงานที่มีหลักฐาน"}</h3>
   <div className="acba-scope-list">{priorities.map(x=><article key={x.key}><span>{x.key}</span><div><h4>{en?x.en:x.th}</h4><p>{en?x.enDetail:x.thDetail}</p></div></article>)}</div>
   <div className="acba-scope-links"><a href={FACTS.chamber} target="_blank" rel="noopener noreferrer">{en?"Trade association network":"เครือข่ายหอการค้าไทย"} <Icon name="arrow-up-right" size={16}/></a><a href={FACTS.caat} target="_blank" rel="noopener noreferrer">{en?"CAAT meeting record":"รายงานการประชุม CAAT"} <Icon name="arrow-up-right" size={16}/></a><a href={FACTS.fapaaEducation2023} target="_blank" rel="noopener noreferrer">{en?"Training report":"รายงานการอบรม"} <Icon name="arrow-up-right" size={16}/></a></div>
 </section>
 <section className="acba-scope-leadership" id="association-leadership"><div className="site-wrap acba-scope-leadership-inner">
  <div><span>ACBA / GOVERNANCE</span><h2>{en?"Board & leadership":"คณะกรรมการและผู้บริหารสมาคม"}</h2><p>{en?"Learn about the association's leadership structure, committee responsibilities and organizational coordination.":"เรียนรู้เกี่ยวกับโครงสร้างการบริหาร บทบาทของคณะกรรมการ และการประสานงานภายในสมาคม"}</p></div>
  <div className="acba-scope-leadership-aside"><strong>{en?"Leadership and governance":"คณะกรรมการและผู้บริหาร"}</strong><span>{en?"Current board • roles • photos • term of office":"รายชื่อปัจจุบัน • ตำแหน่ง • รูปภาพ • วาระดำรงตำแหน่ง"}</span><Link href={base+"/contact"}>{en?"Contact information":"ข้อมูลติดต่อสมาคม"} <Icon name="arrow-up-right" size={16}/></Link></div>
 </div></section>
 </>;
}
