import {ButtonLink} from "./ui-elements";
import {AboutVisualCarousel} from "./about-visual-carousel";
import {AboutFocusSwitch} from "./about-focus-switch";
import {AboutHistoryTimeline} from "./about-history-timeline";
import {AssociationScope} from "./association-scope";
import Link from "next/link";
type Lang="th"|"en";
export function AboutPage({lang="th"}:{lang?:Lang}){
 const en=lang==="en",to=(p:string)=>en?"/en"+p:p;
 return <main lang={lang} className="inner-page about-ref">
  <section className="about-ref-hero about-hero-clean about-hero-full" aria-labelledby="about-hero-title">
   <div className="about-ref-photo"><AboutVisualCarousel lang={lang}/></div>
   <div className="about-hero-overlay" aria-hidden="true"/>
   
   <div className="about-ref-intro">
    <span className="about-hero-eyebrow">AIRLINE CARGO BUSINESS ASSOCIATION · THAILAND</span>
    <h1 id="about-hero-title">{en?<>About <em>ACBA</em><span className="about-hero-dot">.</span></>:<>รู้จัก <em>ACBA</em><span className="about-hero-dot">.</span></>}</h1>
    <p>{en?"Connecting businesses and industry partners across Thailand's air cargo sector.":"เชื่อมโยงผู้ประกอบการและหน่วยงานที่เกี่ยวข้อง เพื่อขับเคลื่อนความร่วมมือในอุตสาหกรรมการบินขนส่งสินค้าไทย"}</p>
    <div className="about-ref-actions"><ButtonLink href="#association-purpose">{en?"Explore our role":"บทบาทและแนวทางดำเนินงาน"}</ButtonLink></div>
   </div>
  </section>
  <AboutHistoryTimeline lang={lang}/>
  <AssociationScope lang={lang}/>
  <AboutFocusSwitch lang={lang}/>
  <section className="about-scope-end site-wrap"><div><span>ACBA / OFFICIAL INFORMATION</span><h2>{en?"Need an official document?":"ต้องการข้อมูลทางการของสมาคม?"}</h2><p>{en?"Formal vision, mission, articles, current board and governing documents will be published when confirmed by ACBA. We do not substitute other associations' information.":"ข้อความวิสัยทัศน์ พันธกิจ วัตถุประสงค์ตามข้อบังคับ รายชื่อกรรมการและเอกสารที่มีผลใช้จริงจะเผยแพร่เมื่อ ACBA ยืนยัน โดยไม่นำข้อมูลของสมาคมอื่นมาแทน"}</p></div><Link href={to("/contact")}>{en?"View contact details":"ดูข้อมูลติดต่อ"} ↗</Link></section>
 </main>;
}
