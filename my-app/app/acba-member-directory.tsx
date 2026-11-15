import Image from "next/image";
import {AIRLINE_MEMBERS} from "./acba-members-data";
import logoSources from "../public/member-logos/sources.json";

type Language = "th" | "en";
const LOGOS: Record<string,{file:string;fileName:string;source:string;sha256:string}> = logoSources;
const confirmedLogoCount = AIRLINE_MEMBERS.filter(member=>Boolean(LOGOS[member.code])).length;

export function AcbaMemberDirectory({lang="th"}:{lang?:Language}){
 const en=lang==="en";
 return <section className="site-wrap acba-member-directory" aria-labelledby="acba-directory-title">
   <div className="acba-member-directory-heading">
    <div>
     <span className="acba-member-directory-kicker">{en?"MEMBER LIST / MARCH 2026":"รายชื่อสมาชิก / มีนาคม 2569"}</span>
     <h2 id="acba-directory-title">{en?"Verified member list":"รายชื่อสมาชิกตามเอกสารสมาคม"}</h2>
     <p>{en?"Airlines and appointed GSAs recorded in ACBA's member list dated 30 March 2026. GSA companies are not listed as separate airline members.":"รายชื่อสายการบินและข้อมูลบริษัทตัวแทน GSA ตามเอกสารสมาชิก ACBA ณ วันที่ 30 มีนาคม 2569 โดยบริษัท GSA ไม่ได้นับรวมเป็นสมาชิกสายการบินแยกต่างหาก"}</p>
    </div>
    <div className="acba-member-directory-count"><strong>{AIRLINE_MEMBERS.length}</strong><span>{en?"AIRLINE MEMBERS":"สายการบินในบัญชี"}</span></div>
   </div>
   <div className="acba-member-grid">
    {AIRLINE_MEMBERS.map((member,index)=>{
     const logo=LOGOS[member.code];
     return <article className="acba-member-card" key={member.code}>
      <div className="acba-member-card-top"><span>{String(index+1).padStart(2,"0")} / {en?"MEMBER":"สมาชิก"}</span><strong>{member.code}</strong></div>
      <div className="acba-member-logo-frame">
       {logo?<Image src={logo.file} alt={member.airline+" logo"} width={240} height={110} unoptimized className="acba-member-logo"/>:
       <div className="acba-member-logo-unverified"><span className="acba-member-logo-placeholder-code">{member.code}</span><span>{en?"No verified logo available":"ยังไม่มีโลโก้ที่ตรวจสอบได้"}</span></div>}
      </div>
      <h3>{member.airline}</h3>
      <div className="acba-member-gsa">
       <span>{en?"GENERAL SALES AGENT (GSA)":"บริษัทตัวแทน GSA"}</span>
       <p>{member.gsa??(en?"Not specified in the member list":"ไม่ระบุในเอกสาร")}</p>
      </div>
     </article>;
    })}
   </div>
   <div className="acba-member-source">
    <p>{en?"Source: ACBA Member List as of Mar. 30, 2026. The duplicated CI / China Airlines line was counted once.":"อ้างอิง: ACBA Member List as of Mar. 30, 2026 โดยนับรายชื่อ China Airlines (CI) ที่ปรากฏซ้ำเพียงครั้งเดียว"}</p>
    <p>{en?`Identifiable logo files: ${confirmedLogoCount} of ${AIRLINE_MEMBERS.length}. Where an exact logo file could not be checked or downloaded, the airline name is shown without an image.`:`ไฟล์โลโก้ที่ตรวจสอบและจัดเก็บได้ ${confirmedLogoCount} จาก ${AIRLINE_MEMBERS.length} รายการ รายการที่ยังตรวจสอบหรือดาวน์โหลดไฟล์โลโก้ไม่ได้จะแสดงเฉพาะชื่อ ไม่ใช้โลโก้ของบริษัทอื่นแทน`}</p>
   </div>
 </section>;
}
