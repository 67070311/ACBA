"use client";
import {useEffect,useMemo,useState} from "react";
import Link from "next/link";
import {NEWS} from "./site-content";
import {newsTitle,newsDescription,newsDisplayTitle,newsDisplayDescription,newsDate,newsDateKey,acbaParticipated} from "./news-content";
import {Icon} from "./ui-icons";
import {ContentPhoto} from "./content-photo";

type Lang="th"|"en";
export type NewsCategory="all"|"activities"|"industry";
const categories:{key:NewsCategory;th:string;en:string}[]=[
 {key:"all",th:"ทั้งหมด",en:"All"},
 {key:"activities",th:"กิจกรรมสมาคม",en:"ACBA Activities"},
 {key:"industry",th:"ข่าวสารอุตสาหกรรม",en:"Industry News"}
];
const normalize=(v:string|null|undefined):NewsCategory=>v==="activities"||v==="industry"?v:"all";
const count=(category:NewsCategory)=>category==="all"?NEWS.length:NEWS.filter(item=>acbaParticipated(item)===(category==="activities")).length;
function categoryLabel(item:typeof NEWS[number],en:boolean){
 return acbaParticipated(item)?en?"ASSOCIATION ACTIVITY":"กิจกรรมสมาคม":en?"INDUSTRY NEWS":"ข่าวสารอุตสาหกรรม";
}
export function NewsJournal({lang="th",initialCategory="all"}:{lang?:Lang;initialCategory?:NewsCategory}){
 const en=lang==="en";
 const [filter,setFilter]=useState<NewsCategory>(initialCategory);
 const [query,setQuery]=useState("");
 useEffect(()=>{
  const sync=()=>setFilter(normalize(new URLSearchParams(window.location.search).get("category")));
  sync();
  window.addEventListener("popstate",sync);
  return()=>window.removeEventListener("popstate",sync);
 },[]);
 useEffect(()=>{setFilter(initialCategory);},[initialCategory]);
 const choose=(next:NewsCategory)=>{
  setFilter(next);
  const url=new URL(window.location.href);
  if(next==="all")url.searchParams.delete("category");
  else url.searchParams.set("category",next);
  window.history.replaceState(window.history.state,"",url.pathname+url.search+url.hash);
  window.dispatchEvent(new Event("acba-news-category"));
 };
 const rows=useMemo(()=>NEWS.map((item,i)=>({...item,i}))
  .filter(item=>filter==="all"||acbaParticipated(item)===(filter==="activities"))
  .filter(item=>{
   const text=[item.title,item.description,newsTitle(item,item.i,true),newsDescription(item,item.i,true),item.category,item.source].join(" ").toLowerCase();
   return text.includes(query.trim().toLowerCase());
  })
  .sort((a,b)=>newsDateKey(b,b.i).localeCompare(newsDateKey(a,a.i))),[filter,query]);
 const lead=rows[0];
 const rest=rows.slice(1);
 const articleUrl=(slug:string)=>(en?"/en":"")+"/news/"+slug;
 return <section className="news-journal-archive news-v13-archive site-wrap news-hub" id="news-journal">
  <div className="news-v13-archive-header news-hub-heading">
   <div><span className="news-v13-section-index">{en?"EXPLORE / NEWSROOM":"เลือกอ่านตามหมวด"}</span><h2>{en?<>Latest <em>updates.</em></>:<>อัปเดต<em>ล่าสุด.</em></>}</h2></div>
   <p>{en?"One place for ACBA's documented activities and air cargo industry updates. Select a category or search the archive.":"รวมข่าวสารอุตสาหกรรมและกิจกรรมที่มีหลักฐานว่า ACBA เข้าร่วมไว้ในหน้าเดียว เลือกหมวดหรือค้นหาข้อมูลที่สนใจได้เลย"}</p>
  </div>
  <div className="news-v13-toolbar news-hub-toolbar">
   <div className="news-v13-filters news-hub-filters" role="group" aria-label={en?"Filter stories by category":"กรองหมวดข่าวสารและกิจกรรม"}>
    {categories.map(c=><button type="button" key={c.key} className={c.key===filter?"active":""} aria-pressed={c.key===filter} onClick={()=>choose(c.key)}><span>{en?c.en:c.th}</span><small>{count(c.key)}</small></button>)}
   </div>
   <label className="news-v13-search"><Icon name="search" size={17}/><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={en?"Search news & activities":"ค้นหาข่าวสารและกิจกรรม"} aria-label={en?"Search news and activities":"ค้นหาข่าวสารและกิจกรรม"}/></label>
  </div>
  <div className="news-v13-results-label news-hub-results" role="status">{en?rows.length+" results":"แสดง "+rows.length+" รายการ"}</div>
  {rows.length===0?<div className="news-v13-empty">{en?"No results match this category and keyword. Try another search.":"ไม่พบรายการที่ตรงกับหมวดหรือคำค้น ลองเลือกหมวดหรือใช้คำค้นอื่น"}</div>:<>
   <div className="news-v13-section-top news-hub-feature-heading">
    <span className="news-v13-section-index">{en?"LATEST IN THIS CATEGORY":"รายการล่าสุดในหมวดนี้"}</span>
    <span className="news-v13-section-counter">{en?"LATEST UPDATES":"ข้อมูลล่าสุด"} · 2026</span>
   </div>
   {lead&&<Link href={articleUrl(lead.slug)} className="news-v13-lead">
    <div className="news-v13-lead-media">
     <ContentPhoto src={lead.image} alt={en?"Illustrative air cargo photo":"ภาพประกอบอุตสาหกรรมการบินขนส่งสินค้า"} sizes="(max-width: 840px) 100vw, 58vw"/>
     <span className="news-v13-photo-note">{en?"ILLUSTRATIVE PHOTO":"ภาพประกอบ"}</span>
    </div>
    <div className="news-v13-lead-content">
     <div className="news-v13-feature-label"><span>{en?"FEATURED":"เรื่องเด่น"}</span></div>
     <div>
      <div className="news-v13-lead-meta"><span>{categoryLabel(lead,en)}</span><time>{newsDate(lead,lead.i,en)}</time></div>
      <h2>{newsDisplayTitle(lead,lead.i,en)}</h2>
      <p>{newsDisplayDescription(lead,lead.i,en)}</p>
     </div>
     <div className="news-v13-lead-footer"><span>{en?"Read details":"อ่านรายละเอียด"}</span><span className="news-v13-feature-arrow" aria-hidden="true"><Icon name="arrow-up-right" size={16}/></span></div>
    </div>
   </Link>}
   {rest.length>0&&<>
    <div className="news-v13-section-top news-hub-more-heading"><span className="news-v13-section-index">{en?"MORE STORIES":"รายการเพิ่มเติม"}</span><span className="news-v13-section-counter">{rest.length} {en?"MORE":"รายการ"}</span></div>
    <div className="news-v13-grid" aria-live="polite">{rest.map(item=><Link href={articleUrl(item.slug)} className="news-v13-card" key={item.slug}>
     <div className="news-v13-card-media"><ContentPhoto src={item.image} alt={en?"Illustrative industry photo":"ภาพประกอบอุตสาหกรรมขนส่งสินค้าทางอากาศ"} sizes="(max-width: 650px) 100vw, (max-width: 1050px) 48vw, 31vw"/></div>
     <div className="news-v13-card-meta"><span>{categoryLabel(item,en)}</span><time>{newsDate(item,item.i,en)}</time></div>
     <h3>{newsDisplayTitle(item,item.i,en)}</h3><p>{newsDisplayDescription(item,item.i,en)}</p>
     <div className="news-v13-card-bottom"><span>{en?"Read details":"อ่านรายละเอียด"}</span><span aria-hidden="true"><Icon name="arrow-up-right" size={16}/></span></div>
    </Link>)}</div>
   </>}
  </>}
 </section>;
}
