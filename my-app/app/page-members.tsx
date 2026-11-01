import {Icon} from "./ui-icons";
import Link from "next/link";
import {ButtonLink,Eyebrow} from "./ui-elements";
import {Reveal} from "./ui-reveal";
import {Photo} from "./site-photo";
import {IMAGES} from "./site-content";
type Lang="th"|"en";
export function MembersPage({lang="th"}:{lang?:Lang}){
 const en=lang==="en",to=(s:string)=>en?"/en"+s:s;
 return <main lang={lang} className="inner-page members-v4">
  <section className="members-v8-hero site-wrap">
   <Reveal><div className="members-v8-copy"><Eyebrow>ACBA / MEMBERSHIP</Eyebrow><h1>{en?<>The ACBA<br/><em>community.</em></>:<>สมาชิกและ<br/><em>เครือข่าย ACBA</em></>}</h1><p>{en?"Membership information, an official directory in preparation and a clear path to the application guide.":"ข้อมูลสมาชิกสมาคม พร้อมพื้นที่สำหรับทำเนียบสมาชิกที่ยืนยันแล้วและช่องทางเตรียมสมัครอย่างชัดเจน"}</p><div className="members-v8-hero-actions"><ButtonLink href={to("/join")+"#membership-form"} icon="users">{en?"Apply for membership":"สมัครสมาชิก ACBA"}</ButtonLink><a href="#acba-member-directory">{en?"Member directory":"ทำเนียบสมาชิก"}</a></div><div className="members-v8-footnote">ACBA · THAILAND <span> / </span> AIRLINE CARGO BUSINESS ASSOCIATION</div></div></Reveal>
   <Reveal delay={100}><div className="members-v8-visual"><Photo src={IMAGES.membersHero} alt={en?"Business professionals collaborating in a meeting":"ภาพประกอบกลุ่มคนทำงานร่วมกันในที่ประชุม"}/><span className="members-v8-image-credit">AIR CARGO / MEMBERSHIP</span></div></Reveal>
  </section>
  <section className="site-wrap members-directory-intro" id="acba-member-directory">
   <div><Eyebrow>{en?"OFFICIAL MEMBER DIRECTORY":"ทำเนียบสมาชิก ACBA"}</Eyebrow><h2>{en?<>Airlines & member<br/><em>organizations.</em></>:<>สายการบินและ<br/><em>บริษัทสมาชิก</em></>}</h2><p className="acba-directory-explain">{en?"This section is reserved for verified ACBA member names, airline identities, logos and company profiles. External organizations listed as TAFA members are not copied into ACBA's directory.":"ส่วนนี้จัดไว้สำหรับชื่อสายการบิน บริษัทสมาชิก โลโก้ และรายละเอียดบริษัทที่สมาคม ACBA รับรองแล้ว โดยไม่นำสมาชิก TAFA หรือเครือข่ายหน่วยงานอื่นมาแสดงเป็นสมาชิก ACBA"}</p></div>
   <div className="directory-status"><strong>{en?"Verified member directory":"รายชื่อสมาชิกที่ผ่านการยืนยัน"}</strong><p>{en?"The current member roster, categories and permission to use logos have not been confirmed. This page therefore does not present unverified companies as members.":"ยังไม่ได้รับบัญชีรายชื่อสมาชิก ประเภทสมาชิกปัจจุบัน และสิทธิการใช้โลโก้จาก ACBA จึงไม่แสดงรายชื่อหรือตราบริษัทที่ยังไม่ได้รับการยืนยัน"}</p><span className="directory-label">{en?"PENDING ACBA CONFIRMATION":"รอ ACBA ยืนยันรายชื่อและโลโก้"}</span></div>
  </section>
  <section className="acba-member-action"><div className="site-wrap acba-member-action-inner"><div><span>MEMBERSHIP / APPLICATION</span><h2>{en?"Become part of the community.":"สนใจสมัครสมาชิก ACBA?"}</h2><p>{en?"Review the information, documents and local draft form before official application submissions open.":"ดูข้อมูลและเตรียมเอกสารพร้อมกรอกแบบฟอร์มฉบับร่าง โดยการยื่นสมัครจริงจะเปิดตามช่องทางที่สมาคมอนุมัติ"}</p></div><Link href={to("/join")}>{en?"Membership application":"ดูหน้าสมัครสมาชิก"} <Icon name="arrow-up-right" size={16}/></Link></div></section>
  <section className="site-wrap acba-member-context"><span>{en?"RELATED INDUSTRY WORK":"บทบาทร่วมกับอุตสาหกรรม"}</span><h2>{en?"Working with sector partners.":"ความร่วมมือที่มีหลักฐานเผยแพร่"}</h2><p>{en?"Reports from CAAT, Customs and TAFA document cooperation involving ACBA. These relationships do not imply that the other organizations are ACBA members.":"รายงานของ CAAT ศุลกากร และ TAFA ระบุการประสานงานที่มี ACBA เกี่ยวข้อง ซึ่งไม่ใช่หลักฐานว่าหน่วยงานเหล่านั้นเป็นสมาชิกของสมาคม"}</p><Link href={to("/news?category=activities")}>{en?"See association activities":"ดูการดำเนินงานและกิจกรรม"} <Icon name="arrow-up-right" size={16}/></Link></section>
 </main>;
}
