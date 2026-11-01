import {Eyebrow} from "./ui-elements";
import {Icon} from "./ui-icons";
import Link from "next/link";
import {ResourceExplorer} from "./resource-explorer";
import {IMAGES} from "./site-content";
type Lang="th"|"en";
export function ResourcesPage({lang="th"}:{lang?:Lang}){
 const en=lang==="en";
 return <main lang={lang} className="inner-page library-v8">
  <section className="library-v8-cover site-wrap">
   <div className="library-v8-header"><div className="library-v8-heading"><span className="library-v8-index">ACBA / KNOWLEDGE & RESOURCES</span><h1>{en?<>The <em>knowledge</em><br/>library.</>:<>ห้องสมุด<br/><em>ความรู้ Air Cargo.</em></>}</h1></div><div className="library-v8-header-side"><span className="library-v8-marker" aria-hidden="true"/><p>{en?"Discover carefully selected resources on cargo operations, aviation security, trade networks and professional learning.":"ค้นพบแหล่งข้อมูลด้าน Cargo การปฏิบัติงานสนามบิน มาตรฐานความปลอดภัย และองค์ความรู้สำหรับผู้สนใจอุตสาหกรรมขนส่งสินค้าทางอากาศ"}</p><a href="#library-collection">{en?"Browse the library":"ค้นหาข้อมูลในห้องสมุด"} <Icon name="search" size={17}/></a></div></div>
   <div className="library-v8-cover-photo"><img src={IMAGES.resourcesHero} alt={en?"Aircraft on the airport apron":"เครื่องบินระหว่างปฏิบัติการที่ท่าอากาศยาน"}/><div className="library-v8-photo-label"><span>THE AIR CARGO REFERENCE COLLECTION</span><strong>{en?"Explore the industry.":"สำรวจโลกของ Air Cargo"}</strong></div><span className="library-v8-counter">01 / ACBA</span></div>
   <div className="library-v8-cover-bottom"><span>AVIATION / CARGO / KNOWLEDGE</span><span>{en?"08 referenced resources":"ข้อมูลอ้างอิง 08 รายการ"}</span></div>
  </section>
  <section className="library-v8-collection" id="library-collection"><div className="site-wrap">
   <div className="library-v8-section-heading"><Eyebrow>{en?"RESOURCE DIRECTORY":"หมวดหมู่ข้อมูล"}</Eyebrow><h2>{en?"An organized collection.":"ค้นหาข้อมูลที่ต้องการ"}</h2><p>{en?"Filter and open each resource to read an introduction on this website. Original references are included for verification.":"ค้นหาหัวข้อที่สนใจแล้วกดอ่านสรุปภายในเว็บไซต์ พร้อมลิงก์แหล่งข้อมูลต้นฉบับสำหรับตรวจสอบ"}</p></div>
   <ResourceExplorer lang={lang}/>
  </div></section>
  <section className="library-v8-glossary site-wrap">
   <div className="acba-library-quicklinks"><Link href={(en?"/en":"")+"/training/knowledge/tpqi"}>{en?"TPQI professional standards":"มาตรฐานคุณวุฒิวิชาชีพ TPQI"} <span aria-hidden="true">↗</span></Link><Link href={(en?"/en":"")+"/members#acba-member-directory"}>{en?"ACBA member directory":"ทำเนียบสมาชิก ACBA"} <span aria-hidden="true">↗</span></Link></div>
   <div className="library-v8-glossary-head"><div><Eyebrow>{en?"INDUSTRY KNOWLEDGE":"คำศัพท์อุตสาหกรรม"}</Eyebrow><h2>{en?"Terms worth knowing.":"ศัพท์สำคัญที่ควรรู้"}</h2></div><p>{en?"Short introductions to concepts used in air cargo and airport logistics.":"อธิบายคำศัพท์และกระบวนการพื้นฐานที่เกี่ยวข้องกับอุตสาหกรรมขนส่งสินค้าทางอากาศ"}</p></div>
   <div className="library-v8-definitions">
    <details><summary><span>01 / SECURITY</span><strong>Known Consignor (KC)</strong><b>+</b></summary><div><p>{en?"A consignor recognized within a regulated aviation security process. CAAT publishes a guide to its certification requirements.":"ผู้ส่งทราบตัวตนในระบบความปลอดภัยด้านการขนส่งสินค้าทางอากาศ โดย CAAT เผยแพร่คู่มือเกี่ยวกับการขอรับรอง"}</p><Link href={(en?"/en":"")+"/training/knowledge/security"}>{en?"Read KC & RA overview":"อ่านเรื่อง KC และ RA"}</Link></div></details>
    <details><summary><span>02 / SECURITY</span><strong>Regulated Agent (RA)</strong><b>+</b></summary><div><p>{en?"An organization operating under defined air cargo security controls and requirements.":"หน่วยงานที่ดำเนินการภายใต้ข้อกำหนดการควบคุมและตรวจสอบความปลอดภัยของสินค้าทางอากาศ"}</p><Link href={(en?"/en":"")+"/training/knowledge/security"}>{en?"Understand the RA framework":"ทำความเข้าใจ RA"}</Link></div></details>
    <details><summary><span>03 / OPERATIONS</span><strong>Suvarnabhumi Free Zone</strong><b>+</b></summary><div><p>{en?"The designated airport free-zone facilities include cargo terminals, handling services and related operations.":"เขตปลอดอากรท่าอากาศยานสุวรรณภูมิประกอบด้วยพื้นที่คลังสินค้า การดำเนินงานขนส่ง และหน่วยงานสนับสนุนที่เกี่ยวข้อง"}</p><Link href={(en?"/en":"")+"/resources/suvarnabhumi-free-zone"}>{en?"Explore free-zone information":"อ่านข้อมูลเขตปลอดอากร"}</Link></div></details>
   </div>
   <p className="library-v8-note">{en?"External references are supplied for learning; they are not official ACBA regulations. Association-specific documents will follow approval.":"แหล่งข้อมูลภายนอกใช้เพื่อการศึกษาและอ้างอิง ไม่ใช่ข้อบังคับของ ACBA โดยเอกสารเฉพาะสมาคมจะเผยแพร่เมื่อได้รับการอนุมัติ"}</p>
  </section>
 </main>;
}