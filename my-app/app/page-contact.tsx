import Link from "next/link";
import { Eyebrow } from "./ui-elements";
import { Icon } from "./ui-icons";
import { Reveal } from "./ui-reveal";
import { IMAGES } from "./site-content";
import { Photo } from "./site-photo";
import { FACTS } from "./site-verified";
type Lang="th"|"en";
export function ContactPage({lang="th"}:{lang?:Lang}){
 const en=lang==="en",to=(p:string)=>en?"/en"+p:p;
 return <main lang={lang} className="inner-page contact-v4">
  <section className="site-wrap contact-head"><div><Eyebrow>LET'S CONNECT</Eyebrow><h1>{en?"A conversation":"เริ่มต้นความร่วมมือ"}<br/><em>{en?"starts here.":"ไปด้วยกัน"}</em></h1><p>{en?"Contact the Airline Cargo Business Association and stay connected to Thailand's air cargo business community.":"ติดต่อสมาคมการค้าธุรกิจการบินขนส่งสินค้าและเชื่อมโยงกับเครือข่ายอุตสาหกรรมในประเทศไทย"}</p></div><span className="contact-head-icon"><Icon name="mail" size={44}/></span></section>
  <section className="site-wrap contact-showcase">
   <Reveal className="contact-showcase-photo"><Photo src={IMAGES.contactHero} alt="Commercial aircraft landing at airport"/><span>THAILAND · AIR CARGO</span></Reveal>
   <Reveal delay={100} className="contact-showcase-card"><small>ACBA / OFFICE</small><h2>{en?<>Bangkok,<br/>Thailand.</>:<>กรุงเทพมหานคร<br/>ประเทศไทย</>}</h2><p>{en?"Association information and communication resources for businesses in the air cargo industry.":"ข้อมูลเกี่ยวกับสมาคมและการติดต่อประสานงานสำหรับผู้ประกอบการในอุตสาหกรรม Air Cargo"}</p><div className="contact-verification"><Icon name="shield" size={21}/><span>{en?"Association contact information":"ข้อมูลการติดต่อสมาคม"}</span></div></Reveal>
  </section>
  <section className="site-wrap contact-next"><div><Eyebrow>{en?"EXPLORE MORE":"ข้อมูลที่เกี่ยวข้อง"}</Eyebrow><h2>{en?"Where would you":"ต้องการรู้จักสมาคม"}<br/><em>{en?"like to begin?":"ด้านไหนเพิ่มเติม?"}</em></h2></div><div className="contact-next-links"><Link href={to("/about")}><Icon name="building" size={23}/>{en?"About ACBA":"เกี่ยวกับสมาคม"}</Link><Link href={to("/members")}><Icon name="users" size={23}/>{en?"Our community":"เครือข่ายสมาชิก"}</Link><Link href={to("/join")}><Icon name="file" size={23}/>{en?"Membership information":"ข้อมูลการสมัครสมาชิก"}</Link></div></section>
 <section className="contact-registry-section"><div className="site-wrap contact-registry-layout">
  <div><Eyebrow>{en?"OFFICIAL PUBLIC RECORD":"ข้อมูลทะเบียนจากแหล่งทางการ"}</Eyebrow><h2>{en?"Registered details.":"ข้อมูลที่ค้นพบจากทะเบียนสมาคม"}</h2><p>{en?"The Department of Business Development association register contains the following historical listing. The address and telephone number may not be the association’s current contact details.":"บัญชีรายชื่อสมาคมการค้าของกรมพัฒนาธุรกิจการค้ามีข้อมูลทะเบียนดังต่อไปนี้ แต่ที่อยู่และเบอร์โทรศัพท์อาจเป็นข้อมูลย้อนหลัง ไม่ใช่ช่องทางติดต่อที่ใช้งานอยู่ในปัจจุบัน"}</p><a href={FACTS.dbd} target="_blank" rel="noreferrer" className="neutral-cta">{en?"See DBD registration list":"ดูทะเบียนจาก DBD"}</a></div>
  <div className="contact-records">
   <div><span><Icon name="building" size={21}/>{en?"REGISTERED ADDRESS":"ที่อยู่จดทะเบียน"}</span><strong>{en?FACTS.addressEn:FACTS.address}</strong></div>
   <div><span><Icon name="file" size={21}/>{en?"ASSOCIATION REGISTRATION":"เลขทะเบียนสมาคมการค้า"}</span><strong>{FACTS.registration}</strong></div>
   <div><span><Icon name="phone" size={21}/>{en?"HISTORICAL DIRECTORY PHONE":"เบอร์โทรตามเอกสารทะเบียน (รอตรวจสอบ)"}</span><strong>{FACTS.oldPhone}</strong></div>
  </div>
 </div></section>
 <section className="site-wrap contact-support-faq"><div><Eyebrow>{en?"CONTACT / FAQ":"คำถามที่พบบ่อย"}</Eyebrow><h2>{en?"Finding the right information.":"คำถามเกี่ยวกับการติดต่อ"}</h2></div><div className="contact-support-list"><details><summary>{en?"Where should members send enquiries?":"สมาชิกควรส่งคำถามถึงช่องทางไหน?"}<b>+</b></summary><p>{en?"Find association information and relevant contact resources on this website.":"สามารถดูข้อมูลที่เกี่ยวข้องกับสมาคมได้จากหัวข้อติดต่อเราและข้อมูลอ้างอิงภายในเว็บไซต์"}</p></details><details><summary>{en?"Can I apply online now?":"สมัครสมาชิกออนไลน์ได้ทันทีหรือไม่?"}<b>+</b></summary><p>{en?"You can fill in the membership form and download the information as a file on your device.":"กรอกแบบฟอร์มและดาวน์โหลดข้อมูลเป็นไฟล์เก็บไว้ในเครื่องได้"}</p></details></div></section>
 </main>;
}
