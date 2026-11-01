"use client";
import {Icon} from "./ui-icons";
import Link from "next/link";
import {useState,type FormEvent} from "react";
import {IMAGES} from "./site-content";
import {SiteBackButton} from "./site-back-button";
import {BusinessCategorySelect} from "./business-category-select";

type Lang="th"|"en";
type Draft={company:string;registration:string;sector:string;contact:string;role:string;email:string;phone:string;line:string;message:string};
const initial:Draft={company:"",registration:"",sector:"",contact:"",role:"",email:"",phone:"",line:"",message:""};
const business=[
 {id:"airlines",th:"สายการบิน / Air Cargo",en:"Airline / Air Cargo"},
 {id:"forwarder",th:"ตัวแทนขนส่งสินค้า / Freight Forwarder",en:"Freight forwarding"},
 {id:"terminal",th:"คลังสินค้า / Ground Handling",en:"Cargo terminal / Ground handling"},
 {id:"logistics",th:"โลจิสติกส์ / ผู้ให้บริการสนับสนุน",en:"Logistics / Support services"},
 {id:"other",th:"ธุรกิจที่เกี่ยวข้องอื่น ๆ",en:"Other relevant business"}
];
const suggestedDocs=[
 {th:"หนังสือรับรองนิติบุคคลและข้อมูลทะเบียนบริษัทฉบับล่าสุด",en:"Recent company registration or corporate certificate"},
 {th:"ข้อมูลธุรกิจและ Company Profile แบบย่อ",en:"Company profile and a short description of services"},
 {th:"ชื่อและข้อมูลผู้ประสานงานของบริษัท",en:"Company contact person and correspondence details"},
 {th:"ข้อมูลผู้มีอำนาจลงนามและหลักฐานยืนยัน (หากสมาคมร้องขอ)",en:"Authorized-signatory details and evidence, if requested"},
 {th:"ใบอนุญาตหรือเอกสารประกอบกิจการที่เกี่ยวข้อง (หากมีและหากกำหนด)",en:"Relevant operating licences, if required"},
 {th:"หลักฐานทางธุรกิจหรือเอกสารเพิ่มเติมตามประกาศที่ ACBA ยืนยัน",en:"Additional supporting evidence specified by ACBA"}
];
const stages=[
 {n:"01",th:"ศึกษาบทบาทสมาคม",en:"Learn about ACBA",dth:"ดูข้อมูลสมาคมและรูปแบบการมีส่วนร่วมในเครือข่ายอุตสาหกรรม",den:"Review the association and its role in the cargo industry"},
 {n:"02",th:"เตรียมเอกสารเบื้องต้น",en:"Prepare basic details",dth:"รวบรวมข้อมูลบริษัท โดยยังไม่ต้องส่งเอกสารอ่อนไหวผ่านเว็บ",den:"Gather corporate details without uploading sensitive documents"},
 {n:"03",th:"จัดทำข้อมูลสมัคร",en:"Prepare application details",dth:"กรอกแบบฟอร์มด้านล่างแล้วดาวน์โหลดเอกสารเก็บไว้ในเครื่อง",den:"Fill in the form and download your document"},
 {n:"04",th:"ติดต่อสมาคม",en:"Contact ACBA",dth:"สอบถามช่องทางส่งเอกสารและรายละเอียดการสมัครกับสมาคม",den:"Contact ACBA about application details and document submission"}
];
export function JoinPage({lang="th"}:{lang?:Lang}){
 const en=lang==="en",base=en?"/en":"";
 const [draft,setDraft]=useState<Draft>(initial);
 const [agreed,setAgreed]=useState(false);
 const [downloaded,setDownloaded]=useState(false);
 const [sectorInvalid,setSectorInvalid]=useState(false);
 const update=(key:keyof Draft,value:string)=>{setDraft(prev=>({...prev,[key]:value}));if(key==="sector")setSectorInvalid(false);setDownloaded(false);};
 const save=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  if(!draft.sector){setSectorInvalid(true);return;}
  if(!agreed)return;
  const typeName=business.find(x=>x.id===draft.sector);
  const lines=[
   "ACBA | MEMBERSHIP ENQUIRY DRAFT — NOT A SUBMITTED APPLICATION",
   "This file was created locally and has not been sent to ACBA.",
   "------------------------------------------------------------",
   "Company: "+draft.company,
   "Registration number (if available): "+(draft.registration||"-"),
   "Business: "+(typeName?(en?typeName.en:typeName.th):"-"),
   "Contact: "+draft.contact,
   "Position: "+(draft.role||"-"),
   "Email: "+draft.email,
   "Telephone: "+draft.phone,
   "LINE ID: "+(draft.line||"-"),
   "Additional details: "+(draft.message||"-"),
   "------------------------------------------------------------",
   "This is an enquiry draft. Official member categories, eligibility, fees and submission methods require ACBA confirmation."
  ];
  const blob=new Blob(["\uFEFF"+lines.join("\r\n")],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const anchor=document.createElement("a");
  anchor.href=url;
  anchor.download="ACBA-membership-enquiry-draft.txt";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(()=>URL.revokeObjectURL(url),1000);
  setDownloaded(true);
 };
 return <main lang={lang} className="inner-page join-page acba-join-v2">
  <section className="acba-join-hero site-wrap" aria-labelledby="join-title">
   <div className="acba-join-hero-copy">
    <SiteBackButton fallback={base+"/members"} lang={lang}/>
    <span className="acba-join-kicker">ACBA / MEMBERSHIP</span>
    <h1 id="join-title">{en?<>Membership<br/><em>starts here.</em></>:<>สมัครสมาชิก<br/><em>ACBA</em></>}</h1>
    <p>{en?"Explore membership information, prepare company documents and download an application document.":"รวมข้อมูลสมัครสมาชิก การเตรียมเอกสาร และแบบฟอร์มบันทึกข้อมูลสำหรับผู้สนใจเข้าร่วมสมาคม"}</p>
    <div className="acba-join-hero-actions">
     <a className="acba-join-primary" href="#membership-form">{en?"Prepare membership form":"กรอกแบบฟอร์มสมัครสมาชิก"} <span aria-hidden="true"><Icon name="arrow-up-right" size={16}/></span></a>
     <a className="acba-join-text-link" href="#membership-criteria">{en?"Read requirements":"ดูข้อมูลและเอกสารที่ต้องเตรียม"}</a>
    </div>
    <div className="acba-join-status"><span className="acba-status-dot"/><strong>{en?"Prepare membership details":"ข้อมูลสำหรับสมัครสมาชิก"}</strong><p>{en?"Complete the form and download the document to your device. Information is not sent automatically.":"กรอกข้อมูลและดาวน์โหลดเอกสารเก็บในเครื่อง โดยเว็บไซต์จะไม่ส่งข้อมูลให้อัตโนมัติ"}</p></div>
   </div>
   <div className="acba-join-hero-art">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={IMAGES.joinHero} alt={en?"Illustrative photograph of air cargo operations":"ภาพประกอบการขนส่งสินค้าทางอากาศ"}/>
    <span>CONNECTING THAILAND&apos;S AIR CARGO COMMUNITY</span>
   </div>
  </section>

  <nav className="acba-join-anchor site-wrap" aria-label={en?"Membership page sections":"หัวข้อภายในหน้าสมัครสมาชิก"}>
   <a href="#membership-overview">{en?"Overview":"ภาพรวม"}</a>
   <a href="#membership-criteria">{en?"Documents":"เอกสารที่ต้องเตรียม"}</a>
   <a href="#membership-steps">{en?"Process":"ขั้นตอน"}</a>
   <a href="#membership-form" className="acba-anchor-primary">{en?"Membership form":"แบบฟอร์มสมัครสมาชิก"} <span aria-hidden="true"><Icon name="arrow-up-right" size={16}/></span></a>
  </nav>

  <section id="membership-overview" className="site-wrap acba-join-overview">
   <div className="acba-join-section-head">
    <span className="acba-join-kicker">01 / MEMBERSHIP OVERVIEW</span>
    <h2>{en?"About becoming a member":"ข้อมูลสำคัญก่อนสมัครสมาชิก"}</h2>
    <p>{en?"Explore the information, benefits of collaboration and documents useful for preparing a membership enquiry.":"ศึกษาข้อมูลการเข้าร่วมเครือข่ายสมาคมและสิ่งที่ควรเตรียมก่อนสมัครสมาชิก"}</p>
   </div>
   <div className="acba-join-value-grid">
    <article><span>01 / COMMUNITY</span><h3>{en?"Industry connections":"เครือข่ายผู้ประกอบการ"}</h3><p>{en?"Explore collaboration across airlines, forwarders, cargo operations and sector organizations.":"ศึกษาความร่วมมือของสายการบิน ตัวแทนขนส่ง ผู้ให้บริการ Cargo และหน่วยงานในอุตสาหกรรม"}</p></article>
    <article><span>02 / LEARNING</span><h3>{en?"Knowledge & training":"การอบรมและองค์ความรู้"}</h3><p>{en?"Some TAFA course notices publish an ACBA-member fee. Eligibility depends on each organizer's announcement.":"หลักสูตรบางรายการของ TAFA เคยประกาศอัตราสมาชิก ACBA โดยต้องตรวจเงื่อนไขของแต่ละหลักสูตร"}</p><Link href={base+"/training"}>{en?"View training":"ดูหลักสูตร"} <Icon name="arrow-up-right" size={16}/></Link></article>
    <article><span>03 / ASSOCIATION</span><h3>{en?"Official membership terms":"เงื่อนไขสมาชิกอย่างเป็นทางการ"}</h3><p>{en?"Find out more about membership categories, participation and the application process through ACBA.":"ศึกษารายละเอียดเกี่ยวกับการเข้าร่วมสมาคม การประสานงาน และขั้นตอนสมัครสมาชิก"}</p></article>
   </div>
   <div className="acba-join-context"><strong>{en?"Reference: TAFA membership page":"อ้างอิงโครงสร้างจากหน้าสมัครสมาชิก TAFA"}</strong><p>{en?"TAFA publishes specific requirements for its own members. This page takes inspiration from that information architecture, not TAFA's legal conditions or member benefits.":"TAFA มีการแสดงสิทธิประโยชน์ ประเภทสมาชิก คุณสมบัติ และเอกสารในหน้าของตน แต่ข้อกำหนดเหล่านั้นเป็นของ TAFA ไม่สามารถนำมาใช้แทนข้อบังคับของ ACBA ได้"}</p><a href="https://www.tafathai.org/สมัครสมาชิก" target="_blank" rel="noopener noreferrer">{en?"Read TAFA reference":"ดูข้อมูลสมาชิก TAFA"} <Icon name="arrow-up-right" size={16}/></a></div>
  </section>

  <section id="membership-criteria" className="acba-join-doc-section">
   <div className="site-wrap acba-join-doc-grid">
    <div className="acba-join-doc-copy">
     <span className="acba-join-kicker">02 / PREPARE TO APPLY</span>
     <h2>{en?<>What should<br/><em>you prepare?</em></>:<>เตรียมอะไรบ้าง<br/><em>ก่อนสมัคร?</em></>}</h2>
     <p>{en?"Use this checklist to organize your company details and supporting documents before applying.":"เช็กลิสต์สำหรับจัดเตรียมข้อมูลบริษัทและเอกสารประกอบ เพื่อให้ดำเนินการสมัครได้สะดวก"}</p>
     <a href="#membership-form" className="acba-join-secondary">{en?"Go to the draft form":"ไปยังแบบฟอร์ม"} <span aria-hidden="true"><Icon name="arrow-up-right" size={16}/></span></a>
    </div>
    <div className="acba-join-doc-list">
     {suggestedDocs.map((d,i)=><div key={i}><span>{String(i+1).padStart(2,"0")}</span><p>{en?d.en:d.th}</p><small>{en?"Suggested":"เตรียมเบื้องต้น"}</small></div>)}
    </div>
   </div>
  </section>

  <section id="membership-steps" className="site-wrap acba-join-steps">
   <div className="acba-join-section-head"><span className="acba-join-kicker">03 / PREPARATION PROCESS</span><h2>{en?"Four steps before application":"ขั้นตอนเตรียมสมัครสมาชิก"}</h2><p>{en?"Follow these steps to organize company information and prepare a membership enquiry.":"ขั้นตอนสำหรับผู้สนใจเตรียมข้อมูล ไม่ใช่กระบวนการอนุมัติสมาชิกอย่างเป็นทางการ"}</p></div>
   <div className="acba-join-step-grid">{stages.map(s=><article key={s.n}><span>{s.n}</span><h3>{en?s.en:s.th}</h3><p>{en?s.den:s.dth}</p></article>)}</div>
  </section>

  <section id="membership-form" className="acba-join-form-section">
   <div className="site-wrap acba-join-form-layout">
    <div className="acba-join-form-side">
     <span className="acba-join-kicker">04 / MEMBERSHIP FORM</span>
     <h2>{en?<>Start with<br/><em>your details.</em></>:<>แบบฟอร์ม<br/><em>สมัครสมาชิก</em></>}</h2>
     <p>{en?"Complete the fields and download the document to your device. Your details are not sent to a server.":"กรอกข้อมูลและดาวน์โหลดเอกสารเก็บในเครื่องได้ โดยไม่มีการอัปโหลดหรือบันทึกข้อมูลเข้าสู่เซิร์ฟเวอร์"}</p>
     <div className="acba-join-form-notice"><strong>{en?"About the downloaded document":"เกี่ยวกับเอกสารที่ดาวน์โหลด"}</strong><p>{en?"The form creates a document on your device. Contact ACBA to arrange delivery of your application.":"แบบฟอร์มนี้จัดทำเอกสารไว้ในเครื่องของคุณ สามารถติดต่อสมาคมเพื่อสอบถามช่องทางยื่นเอกสาร"}</p></div>
     <Link href={base+"/contact"} className="acba-join-contact">{en?"See association contact information":"ดูข้อมูลติดต่อสมาคม"} <Icon name="arrow-up-right" size={16}/></Link>
    </div>
    <div className="acba-join-form-card">
     <div className="acba-join-form-heading"><span>ACBA / MEMBERSHIP FORM</span><h3>{en?"Membership enquiry details":"ข้อมูลสำหรับเตรียมสมัครสมาชิก"}</h3><p>{en?"Fields marked * are required to generate your document.":"ช่องที่มี * จำเป็นสำหรับการสร้างเอกสาร"}</p></div>
     <form onSubmit={save}>
      <fieldset><legend>{en?"Organization":"ข้อมูลบริษัท / องค์กร"}</legend>
       <div className="acba-join-field-grid">
        <label className="acba-field-wide">{en?"Company / organization *":"ชื่อบริษัท / องค์กร *"}<input required autoComplete="organization" maxLength={180} value={draft.company} onChange={e=>update("company",e.target.value)} placeholder={en?"Registered company name":"ชื่อจดทะเบียนบริษัท"}/></label>
        <label>{en?"Registration number (optional)":"เลขทะเบียนนิติบุคคล (ถ้ามี)"}<input inputMode="numeric" maxLength={30} value={draft.registration} onChange={e=>update("registration",e.target.value)} placeholder={en?"For reference":"เพื่อใช้เป็นข้อมูลอ้างอิง"}/></label>
        <BusinessCategorySelect label={en?"Business type *":"ประเภทธุรกิจ *"} placeholder={en?"Choose a business category":"เลือกประเภทธุรกิจ"} options={business.map(b=>({value:b.id,label:en?b.en:b.th}))} value={draft.sector} onChange={value=>update("sector",value)} invalid={sectorInvalid} errorText={en?"Please select a business category":"กรุณาเลือกประเภทธุรกิจ"}/>
       </div>
      </fieldset>
      <fieldset><legend>{en?"Contact person":"ข้อมูลผู้ประสานงาน"}</legend>
       <div className="acba-join-field-grid">
        <label>{en?"Full name *":"ชื่อ–นามสกุล *"}<input required autoComplete="name" maxLength={100} value={draft.contact} onChange={e=>update("contact",e.target.value)} placeholder={en?"Contact name":"ชื่อผู้ติดต่อ"}/></label>
        <label>{en?"Position":"ตำแหน่ง"}<input maxLength={90} value={draft.role} onChange={e=>update("role",e.target.value)} placeholder={en?"Job title":"ตำแหน่งงาน"}/></label>
        <label>{en?"Email *":"อีเมล *"}<input required type="email" autoComplete="email" maxLength={150} value={draft.email} onChange={e=>update("email",e.target.value)} placeholder="name@company.com"/></label>
        <label>{en?"Phone number *":"เบอร์โทรศัพท์ *"}<input required type="tel" autoComplete="tel" maxLength={30} value={draft.phone} onChange={e=>update("phone",e.target.value)} placeholder={en?"Contact number":"เบอร์ที่ติดต่อได้"}/></label>
        <label className="acba-field-wide">{en?"LINE ID (optional)":"LINE ID (ถ้ามี)"}<input maxLength={80} value={draft.line} onChange={e=>update("line",e.target.value)} placeholder="LINE ID"/></label>
        <label className="acba-field-wide">{en?"Additional message":"รายละเอียดเพิ่มเติม"}<textarea rows={3} maxLength={1200} value={draft.message} onChange={e=>update("message",e.target.value)} placeholder={en?"Tell us about your business and what you'd like to know":"ลักษณะธุรกิจหรือคำถามเกี่ยวกับการสมัคร"}/></label>
       </div>
      </fieldset>
      <label className="acba-join-checkbox"><input type="checkbox" checked={agreed} onChange={e=>setAgreed(e.target.checked)} required/><span>{en?"I understand this only generates a local draft, does not submit an application, and may contain personal contact information in the downloaded file.":"รับทราบว่าเป็นการดาวน์โหลดร่างข้อมูลลงเครื่องของตนเอง ไม่ใช่การยื่นสมัครจริง และไฟล์อาจมีข้อมูลติดต่อส่วนบุคคล"}</span></label>
      <button className="acba-join-download" type="submit">{en?"Download draft (.txt)":"ดาวน์โหลดร่างใบสมัคร (.txt)"} <span aria-hidden="true">↓</span></button>
      {downloaded&&<p className="acba-join-download-status" role="status">{en?"Draft downloaded to your device. Nothing was submitted to ACBA.":"ดาวน์โหลดร่างเอกสารแล้ว ไม่มีการส่งข้อมูลเข้าสมาคม"}</p>}
      <p className="acba-join-privacy">{en?"Do not enter identity card numbers or upload sensitive certificates here. This form saves information to your device and does not upload attachments.":"ไม่ควรกรอกเลขบัตรประชาชนหรือข้อมูลอ่อนไหว และยังไม่มีระบบอัปโหลดเอกสารใบสมัครจริง"}</p>
     </form>
    </div>
   </div>
  </section>
  <section className="site-wrap acba-join-final">
   <div><span className="acba-join-kicker">QUESTIONS / BEFORE APPLYING</span><h2>{en?"Want to know more about ACBA?":"ต้องการข้อมูลเพิ่มเติมเกี่ยวกับสมาชิก?"}</h2><p>{en?"Explore the member network or review available association references. ACBA-specific eligibility and dues remain pending verification.":"ดูข้อมูลเครือข่ายสมาชิกและแหล่งอ้างอิงสมาคม ส่วนคุณสมบัติและค่าบำรุงสมาชิก ACBA จะเผยแพร่หลังได้รับการยืนยัน"}</p></div>
   <Link href={base+"/members"}>{en?"Explore membership":"ดูข้อมูลสมาชิก"} <Icon name="arrow-up-right" size={16}/></Link>
  </section>
 </main>;
}
