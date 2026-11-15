"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import type {CSSProperties} from "react";
import {AIRLINE_MEMBERS} from "./acba-members-data";
import type {AirlineMember} from "./acba-members-data";
import logoSources from "../public/member-logos/sources.json";

type Language = "th" | "en";
const LOGOS: Record<string,{file:string;fileName:string;source:string;sha256:string}> = logoSources;

export function AcbaMemberDirectory({lang="th"}:{lang?:Language}){
 const en=lang==="en";
 const sectionRef=useRef<HTMLElement>(null);
 const dialogRef=useRef<HTMLDialogElement>(null);
 const [selectedMember,setSelectedMember]=useState<AirlineMember|null>(null);
 const openDetails=(member:AirlineMember)=>{setSelectedMember(member);dialogRef.current?.showModal();};

 useEffect(()=>{
  const section=sectionRef.current;
  if(!section || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;

  const targets=Array.from(section.querySelectorAll<HTMLElement>("[data-member-motion]"));
  // Elements already on-screen stay visible. Only upcoming sections animate as users scroll.
  targets.forEach((element)=>{
   const rect=element.getBoundingClientRect();
   if(rect.top<window.innerHeight-20 && rect.bottom>0)element.classList.add("is-visible");
  });
  const observer=new IntersectionObserver((entries)=>{
   entries.forEach(({target,isIntersecting})=>{
    if(!isIntersecting)return;
    target.classList.add("is-visible");
    observer.unobserve(target);
   });
  },{threshold:.08,rootMargin:"0px 0px -28px 0px"});
  targets.filter((element)=>!element.classList.contains("is-visible")).forEach((element)=>observer.observe(element));
  section.classList.add("is-motion-ready");
  return ()=>{observer.disconnect();section.classList.remove("is-motion-ready");};
 },[]);

 return <section ref={sectionRef} id="acba-member-directory" className="acba-member-directory" aria-labelledby="acba-member-directory-title">
  <div className="site-wrap acba-member-directory-intro">
   <div className="acba-member-intro-labels" data-member-motion>
    <span className="acba-member-eyebrow">{en?"ACBA / MEMBER DIRECTORY":"ACBA / ทำเนียบสมาชิก"}</span>
    <span className="acba-member-dated">{en?"AS OF 30 MARCH 2026":"ข้อมูล ณ 30 มีนาคม 2569"}</span>
   </div>
   <div className="acba-member-intro-main">
    <h2 id="acba-member-directory-title" data-member-motion>{en?<>Our airline <span>members.</span></>:<>สายการบิน<span>สมาชิก ACBA</span></>}</h2>
    <p data-member-motion>{en?"Airline companies named in the association's official March 2026 member list. Appointed general sales agents are shown where the source specifies them.":"รายชื่อสายการบินตามบัญชีสมาชิกของสมาคม ณ เดือนมีนาคม 2569 พร้อมข้อมูลบริษัทตัวแทน GSA เฉพาะรายการที่ระบุในเอกสาร"}</p>
   </div>
  </div>
  <div className="acba-member-gallery">
   <div className="site-wrap acba-member-grid">
    {AIRLINE_MEMBERS.map((member,index)=>{
     const logo=LOGOS[member.code];
     return <article className="acba-member-entry" key={member.code} data-airline={member.code} data-member-motion style={{"--member-stagger":`${index%3*80}ms`} as CSSProperties}>
      <div className="acba-member-brand">
       {logo?<Image src={logo.file} alt={member.airline+" logo"} width={280} height={130} unoptimized className="acba-member-logo"/>:
       <span className="acba-member-logo-unverified">{en?"Verified logo not available":"ยังไม่มีโลโก้ที่ตรวจสอบได้"}</span>}
      </div>
      <div className="acba-member-identity">
       <h3>{member.airline}</h3>
       <span className="acba-member-code">{member.code}</span>
      </div>
      {member.gsa?<p className="acba-member-gsa"><span>GSA</span>{member.gsa}</p>:null}
      <button type="button" className="acba-member-mobile-hit" aria-label={en?`View details for ${member.airline}`:`ดูข้อมูลสมาชิก ${member.airline}`} onClick={()=>openDetails(member)} />
     </article>;
    })}
   </div>
  </div>
  <dialog ref={dialogRef} className="acba-member-dialog" aria-label={en?"Airline member details":"รายละเอียดสมาชิกสายการบิน"} onClose={()=>setSelectedMember(null)} onClick={event=>{if(event.target===event.currentTarget)event.currentTarget.close();}}>
   {selectedMember&&<div className="acba-member-dialog-content">
    <div className="acba-member-dialog-top">
     <span>{en?"MEMBER INFORMATION":"ข้อมูลสมาชิกสายการบิน"}</span>
     <button type="button" className="acba-member-dialog-close" aria-label={en?"Close member information":"ปิดข้อมูลสมาชิก"} onClick={()=>dialogRef.current?.close()}>×</button>
    </div>
    <div className="acba-member-dialog-logo">
     {LOGOS[selectedMember.code]?<Image src={LOGOS[selectedMember.code].file} alt={selectedMember.airline+" logo"} width={280} height={130} unoptimized />:<span>{en?"No verified logo available":"ยังไม่มีโลโก้ที่ตรวจสอบได้"}</span>}
    </div>
    <h3>{selectedMember.airline}</h3>
    <p className="acba-member-dialog-code">{en?"Airline code":"รหัสสายการบิน"} <strong>{selectedMember.code}</strong></p>
    <div className="acba-member-dialog-gsa">
     <span>{en?"GENERAL SALES AGENT (GSA)":"บริษัทตัวแทน GSA"}</span>
     <p>{selectedMember.gsa??(en?"Not specified in the member list":"ไม่ระบุในเอกสารสมาชิก")}</p>
    </div>
   </div>}
  </dialog>
  <div className="site-wrap acba-member-source">
   <p>{en?"Source: ACBA Member List, 30 March 2026. China Airlines appears twice in the document and is displayed once here.":"อ้างอิง ACBA Member List ณ วันที่ 30 มีนาคม 2569 โดยแสดง China Airlines เพียงครั้งเดียว เนื่องจากมีชื่อซ้ำในเอกสาร"}</p>
   <p>{en?"Where a logo cannot be verified, no substitute is used. Missing GSA details are left blank.":"รายการที่ยังตรวจสอบโลโก้ไม่ได้จะแสดงเฉพาะชื่อ ไม่มีการใช้โลโก้อื่นแทน และไม่เติมข้อมูล GSA ที่เอกสารไม่ได้ระบุ"}</p>
  </div>
 </section>;
}
