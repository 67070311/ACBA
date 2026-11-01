"use client";
import {useMemo,useState} from "react";
import {LIBRARY} from "./site-verified";
import {RESOURCE_INFO} from "./resource-overviews";
import Link from "next/link";
import {Icon} from "./ui-icons";
type Lang="th"|"en";
type Category="ALL"|"ASSOCIATION"|"NETWORK"|"SAFETY"|"OPERATIONS"|"LEARNING";
const filters:{key:Category;th:string;en:string}[]=[
 {key:"ALL",th:"ทั้งหมด",en:"All topics"},
 {key:"ASSOCIATION",th:"สมาคม",en:"Associations"},
 {key:"NETWORK",th:"เครือข่าย",en:"Network"},
 {key:"SAFETY",th:"ความปลอดภัย",en:"Safety"},
 {key:"OPERATIONS",th:"การปฏิบัติการ",en:"Operations"},
 {key:"LEARNING",th:"การฝึกอบรม",en:"Learning"}
];
export function ResourceExplorer({lang="th"}:{lang?:Lang}){
 const en=lang==="en", [category,setCategory]=useState<Category>("ALL"),[query,setQuery]=useState("");
 const results=useMemo(()=>LIBRARY.map((x,i)=>({...x,i})).filter(x=>(category==="ALL"||category===x.category)&&[x.nameTh,x.nameEn,x.descTh,x.descEn,x.category].join(" ").toLowerCase().includes(query.toLowerCase().trim())),[category,query]);
 return <div className="library-v8-explorer">
  <div className="library-v8-controls"><div className="library-v8-filter" role="group" aria-label={en?"Resource topics":"หมวดหมู่"}>{filters.map(f=><button type="button" key={f.key} aria-pressed={category===f.key} className={category===f.key?"active":""} onClick={()=>setCategory(f.key)}>{en?f.en:f.th}</button>)}</div><label className="library-v8-search"><Icon name="search" size={18}/><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={en?"Find a resource":"ค้นหาแหล่งข้อมูล"} aria-label={en?"Search the library":"ค้นหาข้อมูล"}/></label></div>
  <div className="library-v8-list-meta"><span>{en?"DOCUMENT / REFERENCE":"เอกสาร / แหล่งอ้างอิง"}</span><span>{en?results.length+" RESULTS":"พบ "+results.length+" รายการ"}</span></div>
  <div className="library-v8-items" aria-live="polite">{results.length===0?<div className="library-v8-empty">{en?"No results match your search.":"ไม่พบรายการที่ตรงกับคำค้น"}</div>:results.map(x=><Link href={(en?"/en":"")+"/resources/"+RESOURCE_INFO[x.i].slug} className="library-v8-item" key={x.url}>
   <span className="library-v8-item-index">{String(x.i+1).padStart(2,"0")}</span>
   <div className="library-v8-item-main"><small>{en?x.category:({
 ASSOCIATION:"สมาคม",NETWORK:"เครือข่าย",SAFETY:"ความปลอดภัย",OPERATIONS:"ปฏิบัติการ",LEARNING:"การฝึกอบรม"
} as Record<string,string>)[x.category]??x.category}</small><h3>{en?x.nameEn:x.nameTh}</h3><p>{en?x.descEn:x.descTh}</p></div>
   <span className="library-v8-item-link">{en?"Read overview":"อ่านสรุปข้อมูล"}</span>
  </Link>)}</div>
 </div>;
}