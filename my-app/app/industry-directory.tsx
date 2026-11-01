import {Icon} from "./ui-icons";
"use client";
import {useMemo,useState} from "react";
type Lang="th"|"en";
const companies=[
 {name:"Acutech Co.,Ltd.",group:"ordinary"},
 {name:"Air Eagle International Freight (Thailand) Ltd.",group:"ordinary"},
 {name:"DHL Global Forwarding (Thailand) Ltd.",group:"ordinary"},
 {name:"Expeditors (Thailand) Ltd.",group:"ordinary"},
 {name:"Rhenus Logistics Co., Ltd.",group:"ordinary"},
 {name:"Schenker(Thai)Ltd.",group:"ordinary"},
 {name:"Yusen Logistics (Thailand) Co.,Ltd.",group:"ordinary"},
 {name:"World Air Logistics Co.,Ltd.",group:"ordinary"},
 {name:"A.S. LOGISTICS CO., LTD.",group:"associate"},
 {name:"Atlantic Forwarding Co., Ltd.",group:"associate"},
 {name:"Brink's Security (Thailand) Limited",group:"associate"},
 {name:"cargo-partner Logistics Ltd.",group:"associate"},
 {name:"DSV Air & Sea Ltd.",group:"associate"},
 {name:"Hellmann Worldwide Logistics Co., Ltd.",group:"associate"},
 {name:"JAS Forwarding Worldwide (Thailand) Co.,Ltd.",group:"associate"},
 {name:"WICE Logistics Public Company Limited.",group:"associate"}
] as const;
export function IndustryDirectory({lang="th"}:{lang?:Lang}){
 const en=lang==="en";
 const [query,setQuery]=useState("");
 const [category,setCategory]=useState("all");
 const shown=useMemo(()=>companies.filter(c=>(category==="all"||c.group===category)&&c.name.toLowerCase().includes(query.trim().toLowerCase())),[query,category]);
 return <section id="industry-directory" className="site-wrap acba-industry-directory">
  <div className="acba-directory-head"><div><span className="acba-program-kicker">PUBLIC INDUSTRY DIRECTORY / TAFA REFERENCE</span><h2>{en?"Industry company directory":"ตัวอย่างทำเนียบผู้ประกอบการในอุตสาหกรรม"}</h2></div><p>{en?"A selected reference sample from the TAFA 2026 directory (last updated 11 May 2026), not an ACBA member roster. Confirm changes with TAFA and ACBA respectively.":"ตัวอย่างรายชื่อจากทำเนียบ TAFA ปี 2026 (อัปเดตเมื่อ 11 พฤษภาคม 2569) เพื่อศึกษาภาพรวมอุตสาหกรรม ไม่ใช่รายชื่อสมาชิก ACBA และควรตรวจสอบสถานะปัจจุบันกับสมาคมเจ้าของข้อมูล"}</p></div>
  <div className="acba-dir-toolbar"><label><span>{en?"Search company":"ค้นหาบริษัท"}</span><input type="search" placeholder={en?"Company name...":"ชื่อบริษัท..."} value={query} onChange={e=>setQuery(e.target.value)}/></label><div className="acba-dir-filters" role="group" aria-label={en?"TAFA membership categories":"ประเภทสมาชิก TAFA"}>{[{id:"all",th:"ทั้งหมด",en:"All"},{id:"ordinary",th:"สามัญ TAFA",en:"TAFA ordinary"},{id:"associate",th:"สมทบ TAFA",en:"TAFA associate"}].map(x=><button type="button" key={x.id} onClick={()=>setCategory(x.id)} aria-pressed={x.id===category} className={x.id===category?"active":""}>{en?x.en:x.th}</button>)}</div></div>
  <div className="acba-dir-count" role="status">{en?shown.length+" illustrative entries":"ตัวอย่าง "+shown.length+" รายชื่อ"} <span>{en?"Source: TAFA directory · 11 May 2026":"อ้างอิง: ทำเนียบ TAFA · 11 พ.ค. 2569"}</span></div>
  <div className="acba-directory-list">{shown.map((c,i)=><div className="acba-directory-row" key={c.name}><span>{String(i+1).padStart(2,"0")}</span><strong>{c.name}</strong><small>{c.group==="ordinary"?(en?"TAFA ordinary member":"สมาชิกสามัญ TAFA"):(en?"TAFA associate member":"สมาชิกสมทบ TAFA")}</small></div>)}{shown.length===0&&<p className="acba-directory-empty">{en?"No companies match the filter.":"ไม่พบชื่อบริษัทที่ตรงกับคำค้น"}</p>}</div>
  <div className="acba-dir-source"><p>{en?"TAFA published these company names in its own lists. This page shows only a selected reference sample and does not represent the full TAFA register or any ACBA membership. Always consult the original directory for updates.":"รายชื่อข้างต้นคัดมาเป็นตัวอย่างจากรายการของ TAFA เท่านั้น ไม่ใช่รายชื่อทั้งหมดของ TAFA และไม่ถือเป็นสมาชิก ACBA โปรดตรวจรายชื่อและสถานะล่าสุดจากต้นทาง"}</p><div><a href="https://www.tafathai.org/en/สมาชิกสามัญ" target="_blank" rel="noopener noreferrer">{en?"TAFA ordinary list":"รายชื่อสมาชิกสามัญ TAFA"} <Icon name="arrow-up-right" size={16}/></a><a href="https://www.tafathai.org/en/สมาชิกสมทบ" target="_blank" rel="noopener noreferrer">{en?"TAFA associate list":"รายชื่อสมาชิกสมทบ TAFA"} <Icon name="arrow-up-right" size={16}/></a></div></div>
 </section>;
}

export function MembershipGuidance({lang="th"}:{lang?:Lang}){
 const en=lang==="en";
 return <section className="site-wrap acba-membership-guidance" id="membership-guidance">
  <div className="acba-directory-head"><div><span className="acba-program-kicker">MEMBERSHIP / VERIFIED VS REFERENCE</span><h2>{en?"Membership information, clearly separated.":"ข้อมูลสมาชิกที่แยกตามหน่วยงานจริง"}</h2></div><p>{en?"Membership types, fees, eligibility and applications must belong to the correct association. TAFA publishes its rules, but ACBA has not verified equivalent rules for this website.":"ข้อมูลประเภทสมาชิก ค่าบำรุง คุณสมบัติ และเอกสารสมัคร ต้องเป็นข้อกำหนดของสมาคมเจ้าของข้อมูล เว็บไซต์ TAFA มีรายละเอียดที่เผยแพร่ แต่ยังไม่มีหลักฐานพอจะใช้กฎเดียวกันแทนข้อบังคับของ ACBA"}</p></div>
  <div className="acba-membership-grid">
   <article><span>01 / ACBA</span><h3>{en?"ACBA membership enquiries":"ข้อมูลสมัครสมาชิก ACBA"}</h3><p>{en?"The ACBA member roster, official application form, categories, approval steps and current fees require direct confirmation from ACBA. A preview enquiry is available, but it does not submit an application.":"รายชื่อสมาชิก ACBA ประเภทสมาชิก แบบฟอร์มจริง ขั้นตอนอนุมัติ และค่าบำรุง ยังต้องให้ ACBA ยืนยัน หน้าแบบฟอร์มปัจจุบันเป็นตัวอย่างเท่านั้นและไม่ได้ส่งใบสมัครเข้าสมาคม"}</p><a href={en?"/en/join":"/join"}>{en?"View ACBA enquiry preview":"ดูตัวอย่างข้อมูลการสมัคร ACBA"} <Icon name="arrow-up-right" size={16}/></a></article>
   <article><span>02 / TAFA REFERENCE</span><h3>{en?"TAFA publishes three member categories":"ประเภทสมาชิก TAFA ที่เผยแพร่"}</h3><p>{en?"TAFA describes ordinary, associate and honorary membership. Its eligibility includes criteria specific to TAFA and must not be applied to ACBA.":"TAFA เผยแพร่ประเภทสมาชิกสามัญ สมาชิกสมทบ และสมาชิกกิตติมศักดิ์ รวมถึงคุณสมบัติและเอกสารสมัครซึ่งเป็นเงื่อนไขเฉพาะของ TAFA เท่านั้น ไม่ใช่กฎการสมัครสมาชิก ACBA"}</p><a href="https://www.tafathai.org/en/สมัครสมาชิก" target="_blank" rel="noopener noreferrer">{en?"Read TAFA's official membership rules":"อ่านเงื่อนไขสมาชิกของ TAFA"} <Icon name="arrow-up-right" size={16}/></a></article>
  </div>
 </section>;
}
