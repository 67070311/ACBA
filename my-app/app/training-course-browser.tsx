"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {COURSES} from "./site-verified";
import {Icon} from "./ui-icons";
import {ContentPhoto} from "./content-photo";

type FilterKey="all"|"foundations"|"operations"|"safety"|"professional";
const categories:{value:FilterKey;th:string;en:string}[]=[
 {value:"all",th:"ทั้งหมด",en:"All"},
 {value:"foundations",th:"พื้นฐาน",en:"Foundations"},
 {value:"operations",th:"ปฏิบัติการ",en:"Operations"},
 {value:"safety",th:"ความปลอดภัย",en:"Safety"},
 {value:"professional",th:"วิชาชีพ",en:"Professional"}
];
export function TrainingCourseBrowser({lang="th"}:{lang?:"th"|"en"}){
 const en=lang==="en";
 const [filter,setFilter]=useState<FilterKey>("all");
 const courses=useMemo(()=>COURSES.filter(c=>filter==="all"||c.group===filter),[filter]);
 const count=(category:FilterKey)=>category==="all"?COURSES.length:COURSES.filter(c=>c.group===category).length;
 return <div className="course-browser course-browser-v2">
  <div className="course-category-toolbar">
   <div className="course-category-title"><span>EXPLORE / COURSES</span><strong>{en?"Find the right course":"เลือกหมวดหลักสูตรที่สนใจ"}</strong></div>
   <span className="course-category-count" role="status" aria-live="polite">{en?`${courses.length} courses`:`พบ ${courses.length} หลักสูตร`}</span>
  </div>
  <div className="course-category-desktop" role="group" aria-label={en?"Filter courses":"เลือกหมวดหลักสูตร"}>
    {categories.map(c=><button key={c.value} type="button" aria-pressed={filter===c.value} className={filter===c.value?"active":""} onClick={()=>setFilter(c.value)}><span>{en?c.en:c.th}</span><small>{count(c.value)}</small></button>)}
  </div>
  <div className="course-category-mobile">
    <label htmlFor="acba-course-category">{en?"Course category":"หมวดหมู่หลักสูตร"}</label>
    <div className="course-category-select">
     <Icon name="layers" size={18}/>
     <select id="acba-course-category" value={filter} onChange={e=>setFilter(e.target.value as FilterKey)}>
      {categories.map(c=><option value={c.value} key={c.value}>{en?c.en:c.th} ({count(c.value)})</option>)}
     </select>
     <svg aria-hidden="true" viewBox="0 0 16 16"><path d="m3.5 6 4.5 4 4.5-4"/></svg>
    </div>
  </div>
  <div className="course-browser-grid">
   {courses.map(c=><Link key={c.id} className="course-item" href={(en?"/en":"")+"/training/course/"+c.id}>
    <div className="course-item-img">{c.image?<ContentPhoto src={c.image} alt={en?c.title:c.th} sizes="(max-width: 600px) 46vw, (max-width: 1060px) 45vw, 30vw"/>:<div className={"course-graphic course-graphic-"+c.group} aria-hidden="true"><span>{c.title.split(" ").slice(0,3).join(" ")}</span></div>}<span className="course-category">{c.duration}</span></div>
    <div className="course-item-body">
     <span className="course-provider">TAFA <span aria-hidden="true">·</span> {en?"Course":"หลักสูตร"}</span>
     <h3>{c.title}</h3>
     <p>{en?c.descEn:c.descTh}</p>
     <div className="course-prices">
      <div><small>{en?"Published fee / confirm":"ราคาอ้างอิง / ตรวจสอบอีกครั้ง"}</small><strong>{c.id==="distribution"||c.id==="forwarder"?"฿7,500":c.member==="—"?(en?"Ask organizer":"สอบถามผู้จัด"):"฿"+c.member}</strong></div>
      <span className="course-more" aria-hidden="true"><span aria-hidden="true">↗</span></span>
     </div>
    </div>
   </Link>)}
  </div>
  {courses.length===0&&<p className="course-browser-empty">{en?"No courses are listed in this category yet.":"ยังไม่มีหลักสูตรในหมวดนี้"}</p>}
  <p className="course-disclaimer"><Icon name="file" size={16}/>{en?"Fees shown are from TAFA publications, not verified current enrollment. Check all dates and fees with the organizer.":"ราคาอ้างอิงจากประกาศ TAFA ไม่ใช่การยืนยันรอบเปิดรับปัจจุบัน กรุณาตรวจวันอบรมและราคาจริงกับผู้จัด"}</p>
 </div>;
}
