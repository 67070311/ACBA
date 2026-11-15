import Image from "next/image";
import {AIRLINE_MEMBERS} from "./acba-members-data";
import logoSources from "../public/member-logos/sources.json";

type Language = "th" | "en";
const LOGOS: Record<string,{file:string;fileName:string;source:string;sha256:string}> = logoSources;

export function AcbaMemberDirectory({lang="th"}:{lang?:Language}){
 const en=lang==="en";
 return <section className="site-wrap acba-member-directory" aria-label={en?"Airline member directory":"ทำเนียบสมาชิกสายการบิน"}>
   <div className="acba-member-directory-heading">
    <span className="acba-member-directory-kicker">{en?"AIRLINE MEMBERS":"สมาชิกสายการบิน"}</span>
    <p>{en?"Member airlines listed in ACBA's March 2026 records. GSA details appear only where stated in the roster.":"ข้อมูลตามบัญชีสมาชิก ACBA เดือนมีนาคม 2569 โดยแสดงบริษัทตัวแทน GSA เฉพาะรายที่เอกสารระบุ"}</p>
   </div>
   <div className="acba-member-grid">
    {AIRLINE_MEMBERS.map((member)=>{
     const logo=LOGOS[member.code];
     return <article className="acba-member-entry" key={member.code}>
      <div className="acba-member-brand">
       {logo?<Image src={logo.file} alt={member.airline+" logo"} width={260} height={116} unoptimized className="acba-member-logo"/>:
       <p className="acba-member-logo-unverified">{en?"No verified logo available":"ยังไม่มีโลโก้ที่ตรวจสอบได้"}</p>}
      </div>
      <div className="acba-member-identity">
       <h3>{member.airline}</h3>
       <span className="acba-member-code">{member.code}</span>
      </div>
      {member.gsa&&<p className="acba-member-gsa"><span>GSA</span>{member.gsa}</p>}
     </article>;
    })}
   </div>
   <div className="acba-member-source">
    <p>{en?"Source: ACBA Member List, 30 March 2026. A duplicated China Airlines entry is presented once.":"อ้างอิงรายชื่อสมาชิก ACBA ณ วันที่ 30 มีนาคม 2569 โดยไม่นับรายชื่อ China Airlines ที่ปรากฏซ้ำ"}</p>
    <p>{en?"Where no verified logo is available, the airline is identified by name. Missing GSA details are not inferred.":"รายการที่ไม่มีโลโก้ที่ตรวจสอบได้จะแสดงชื่อสายการบินแทน และไม่เติมข้อมูล GSA ที่เอกสารไม่ได้ระบุ"}</p>
   </div>
 </section>;
}
