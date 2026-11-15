import Image from "next/image";
import {AIRLINE_MEMBERS} from "./acba-members-data";
import logoSources from "../public/member-logos/sources.json";

type Language = "th" | "en";
const LOGOS: Record<string,{file:string;fileName:string;source:string;sha256:string}> = logoSources;

export function AcbaMemberDirectory({lang="th"}:{lang?:Language}){
 const en=lang==="en";
 return <section id="acba-member-directory" className="acba-member-directory" aria-labelledby="acba-member-directory-title">
  <div className="site-wrap acba-member-directory-intro">
   <div className="acba-member-intro-labels">
    <span className="acba-member-eyebrow">{en?"ACBA / MEMBER DIRECTORY":"ACBA / ทำเนียบสมาชิก"}</span>
    <span className="acba-member-dated">{en?"AS OF 30 MARCH 2026":"ข้อมูล ณ 30 มีนาคม 2569"}</span>
   </div>
   <div className="acba-member-intro-main">
    <h2 id="acba-member-directory-title">{en?<>Our airline <span>members.</span></>:<>สายการบิน<span>สมาชิก ACBA</span></>}</h2>
    <p>{en?"Airline companies named in the association's official March 2026 member list. Appointed general sales agents are shown where the source specifies them.":"รายชื่อสายการบินตามบัญชีสมาชิกของสมาคม ณ เดือนมีนาคม 2569 พร้อมข้อมูลบริษัทตัวแทน GSA เฉพาะรายการที่ระบุในเอกสาร"}</p>
   </div>
  </div>
  <div className="acba-member-gallery">
   <div className="site-wrap acba-member-grid">
    {AIRLINE_MEMBERS.map((member)=>{
     const logo=LOGOS[member.code];
     return <article className="acba-member-entry" key={member.code} data-airline={member.code}>
      <div className="acba-member-brand">
       {logo?<Image src={logo.file} alt={member.airline+" logo"} width={280} height={130} unoptimized className="acba-member-logo"/>:
       <span className="acba-member-logo-unverified">{en?"Verified logo not available":"ยังไม่มีโลโก้ที่ตรวจสอบได้"}</span>}
      </div>
      <div className="acba-member-identity">
       <h3>{member.airline}</h3>
       <span className="acba-member-code">{member.code}</span>
      </div>
      {member.gsa?<p className="acba-member-gsa"><span>GSA</span>{member.gsa}</p>:null}
     </article>;
    })}
   </div>
  </div>
  <div className="site-wrap acba-member-source">
   <p>{en?"Source: ACBA Member List, 30 March 2026. China Airlines appears twice in the document and is displayed once here.":"อ้างอิง ACBA Member List ณ วันที่ 30 มีนาคม 2569 โดยแสดง China Airlines เพียงครั้งเดียว เนื่องจากมีชื่อซ้ำในเอกสาร"}</p>
   <p>{en?"Where a logo cannot be verified, no substitute is used. Missing GSA details are left blank.":"รายการที่ยังตรวจสอบโลโก้ไม่ได้จะแสดงเฉพาะชื่อ ไม่มีการใช้โลโก้อื่นแทน และไม่เติมข้อมูล GSA ที่เอกสารไม่ได้ระบุ"}</p>
  </div>
 </section>;
}
