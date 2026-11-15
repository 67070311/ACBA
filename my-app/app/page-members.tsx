import {Icon} from "./ui-icons";
import Link from "next/link";
import {ButtonLink,Eyebrow} from "./ui-elements";
import {Reveal} from "./ui-reveal";
import {Photo} from "./site-photo";
import {IMAGES} from "./site-content";
import {AcbaMemberDirectory} from "./acba-member-directory";
type Lang="th"|"en";
export function MembersPage({lang="th"}:{lang?:Lang}){
 const en=lang==="en",to=(s:string)=>en?"/en"+s:s;
 return <main lang={lang} className="inner-page members-v4">
  <section className="members-v8-hero site-wrap">
   <Reveal><div className="members-v8-copy"><Eyebrow>ACBA / MEMBERSHIP</Eyebrow><h1>{en?<>The ACBA<br/><em>community.</em></>:<>สมาชิกและ<br/><em>เครือข่าย ACBA</em></>}</h1><p>{en?"Discover the ACBA community, membership information and how to prepare to join.":"ทำความรู้จักเครือข่ายสมาชิก ACBA และศึกษาข้อมูลการสมัครเข้าร่วมสมาคม"}</p><div className="members-v8-hero-actions"><ButtonLink href={to("/join")+"#membership-form"} icon="users">{en?"Apply for membership":"สมัครสมาชิก ACBA"}</ButtonLink><a href="#acba-member-directory">{en?"Member directory":"ทำเนียบสมาชิก"}</a></div><div className="members-v8-footnote">ACBA · THAILAND <span> / </span> AIRLINE CARGO BUSINESS ASSOCIATION</div></div></Reveal>
   <Reveal delay={100}><div className="members-v8-visual"><Photo src={IMAGES.membersHero} alt={en?"Business professionals collaborating in a meeting":"ภาพประกอบกลุ่มคนทำงานร่วมกันในที่ประชุม"}/><span className="members-v8-image-credit">AIR CARGO / MEMBERSHIP</span></div></Reveal>
  </section>
  <AcbaMemberDirectory lang={lang}/>
  <section className="acba-member-action"><div className="site-wrap acba-member-action-inner"><div><span>MEMBERSHIP / APPLICATION</span><h2>{en?"Become part of the community.":"สนใจสมัครสมาชิก ACBA?"}</h2><p>{en?"Explore membership information, prepare company details and create an application document.":"ศึกษาข้อมูลสมาชิก เตรียมรายละเอียดบริษัท และจัดทำเอกสารประกอบการสมัคร"}</p></div><Link href={to("/join")}>{en?"Membership application":"ดูหน้าสมัครสมาชิก"} <Icon name="arrow-up-right" size={16}/></Link></div></section>
  <section className="site-wrap acba-member-context"><span>{en?"RELATED INDUSTRY WORK":"บทบาทร่วมกับอุตสาหกรรม"}</span><h2>{en?"Working with sector partners.":"ความร่วมมือที่มีหลักฐานเผยแพร่"}</h2><p>{en?"Reports from CAAT, Customs and TAFA document cooperation involving ACBA. These relationships do not imply that the other organizations are ACBA members.":"รายงานของ CAAT ศุลกากร และ TAFA ระบุการประสานงานที่มี ACBA เกี่ยวข้อง ซึ่งไม่ใช่หลักฐานว่าหน่วยงานเหล่านั้นเป็นสมาชิกของสมาคม"}</p><Link href={to("/news?category=activities")}>{en?"See association activities":"ดูการดำเนินงานและกิจกรรม"} <Icon name="arrow-up-right" size={16}/></Link></section>
 </main>;
}
