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
  <div className="acba-directory-head"><div><span className="acba-program-kicker">PUBLIC INDUSTRY DIRECTORY / TAFA REFERENCE</span><h2>{en?"Industry company directory":"ทำเนียบผู้ประกอบการในอุตสาหกรรม"}</h2></div><p>{en?"Explore publicly listed air cargo businesses from TAFA industry resources.":"สำรวจข้อมูลผู้ประกอบการด้านการขนส่งสินค้าทางอากาศจากแหล่งข้อมูลอุตสาหกรรม TAFA"}</p></div>
  <div className="acba-dir-toolbar"><label><span>{en?"Search company":"ค้นหาบริษัท"}</span><input type="search" placeholder={en?"Company name...":"ชื่อบริษัท..."} value={query} onChange={e=>setQuery(e.target.value)}/></label><div className="acba-dir-filters" role="group" aria-label={en?"TAFA membership categories":"ประเภทสมาชิก TAFA"}>{[{id:"all",th:"ทั้งหมด",en:"All"},{id:"ordinary",th:"สามัญ TAFA",en:"TAFA ordinary"},{id:"associate",th:"สมทบ TAFA",en:"TAFA associate"}].map(x=><button type="button" key={x.id} onClick={()=>setCategory(x.id)} aria-pressed={x.id===category} className={x.id===category?"active":""}>{en?x.en:x.th}</button>)}</div></div>
  <div className="acba-dir-count" role="status">{en?shown.length+" entries":""+shown.length+" รายชื่อ"} <span>{en?"Source: TAFA directory · 11 May 2026":"อ้างอิง: ทำเนียบ TAFA · 11 พ.ค. 2569"}</span></div>
  <div className="acba-directory-list">{shown.map((c,i)=><div className="acba-directory-row" key={c.name}><span>{String(i+1).padStart(2,"0")}</span><strong>{c.name}</strong><small>{c.group==="ordinary"?(en?"TAFA ordinary member":"สมาชิกสามัญ TAFA"):(en?"TAFA associate member":"สมาชิกสมทบ TAFA")}</small></div>)}{shown.length===0&&<p className="acba-directory-empty">{en?"No companies match the filter.":"ไม่พบชื่อบริษัทที่ตรงกับคำค้น"}</p>}</div>
  <div className="acba-dir-source"><p>{en?"TAFA published these company names in its own lists. The entries are sourced from TAFA's public directory and are shown as industry references.":"รายชื่อผู้ประกอบการข้างต้นอ้างอิงข้อมูลจากทำเนียบของ TAFA เพื่อแนะนำเครือข่ายธุรกิจในอุตสาหกรรม"}</p><div><a href="https://www.tafathai.org/en/สมาชิกสามัญ" target="_blank" rel="noopener noreferrer">{en?"TAFA ordinary list":"รายชื่อสมาชิกสามัญ TAFA"} <Icon name="arrow-up-right" size={16}/></a><a href="https://www.tafathai.org/en/สมาชิกสมทบ" target="_blank" rel="noopener noreferrer">{en?"TAFA associate list":"รายชื่อสมาชิกสมทบ TAFA"} <Icon name="arrow-up-right" size={16}/></a></div></div>
 </section>;
}

export function MembershipGuidance({lang="th"}:{lang?:Lang}){
 const en=lang==="en";
 return <section className="site-wrap acba-membership-guidance" id="membership-guidance">
  <div className="acba-directory-head"><div><span className="acba-program-kicker">MEMBERSHIP / VERIFIED VS REFERENCE</span><h2>{en?"Membership information, clearly separated.":"ข้อมูลสมาชิกที่แยกตามหน่วยงานจริง"}</h2></div><p>{en?"Explore membership topics and application information relevant to each association.":"ศึกษาข้อมูลสมาชิกและช่องทางสมัครของแต่ละสมาคม เพื่อเลือกข้อมูลที่เหมาะกับองค์กร"}</p></div>
  <div className="acba-membership-grid">
   <article><span>01 / ACBA</span><h3>{en?"ACBA membership enquiries":"ข้อมูลสมัครสมาชิก ACBA"}</h3><p>{en?"Prepare your organization's membership details and download a document for contacting ACBA.":"เตรียมข้อมูลบริษัทและดาวน์โหลดเอกสารสำหรับติดต่อสมาคมเกี่ยวกับการสมัครสมาชิก"}</p><a href={en?"/en/join":"/join"}>{en?"Prepare ACBA membership details":"เตรียมข้อมูลสมัครสมาชิก ACBA"} <Icon name="arrow-up-right" size={16}/></a></article>
   <article><span>02 / TAFA REFERENCE</span><h3>{en?"TAFA publishes three member categories":"ประเภทสมาชิก TAFA ที่เผยแพร่"}</h3><p>{en?"TAFA describes ordinary, associate and honorary membership. Its eligibility includes criteria specific to TAFA and must not be applied to ACBA.":"TAFA เผยแพร่ประเภทสมาชิกสามัญ สมาชิกสมทบ และสมาชิกกิตติมศักดิ์ รวมถึงคุณสมบัติและเอกสารสมัครซึ่งเป็นเงื่อนไขเฉพาะของ TAFA เท่านั้น ไม่ใช่กฎการสมัครสมาชิก ACBA"}</p><a href="https://www.tafathai.org/en/สมัครสมาชิก" target="_blank" rel="noopener noreferrer">{en?"Read TAFA's official membership rules":"อ่านเงื่อนไขสมาชิกของ TAFA"} <Icon name="arrow-up-right" size={16}/></a></article>
  </div>
 </section>;
}
