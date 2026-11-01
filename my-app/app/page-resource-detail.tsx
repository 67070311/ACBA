import Link from "next/link";
import {notFound} from "next/navigation";
import {SiteBackButton} from "./site-back-button";
import {LIBRARY} from "./site-verified";
type Lang="th"|"en";
import {RESOURCE_INFO} from "./resource-overviews";
export function ResourceDetailPage({lang="th",slug}:{lang?:Lang;slug:string}){
 const en=lang==="en";const index=RESOURCE_INFO.findIndex(x=>x.slug===slug);
 if(index<0)return notFound();
 const info=RESOURCE_INFO[index],item=LIBRARY[index],root=en?"/en":"";const points=en?info.en:info.th;
 return <main lang={lang} className="library-detail">
   <div className="site-wrap library-detail-head">
    <SiteBackButton fallback={root+"/resources"} lang={lang}/>
    <span className="library-detail-eyebrow">{en?"RESEARCH & REFERENCES":"ข้อมูลและเอกสารอ้างอิง"} / {item.category}</span>
    <h1>{en?item.nameEn:item.nameTh}</h1>
    <p>{en?item.descEn:item.descTh}</p>
   </div>
   <div className="site-wrap library-detail-grid">
    <aside className="library-detail-aside">
      <span>{en?"SOURCE DIRECTORY":"แหล่งข้อมูล"}</span>
      <strong>{en?"Official publication and industry references":"ข้อมูลจากหน่วยงานต้นทาง"}</strong>
      <p>{en?"This is an editorial introduction; always check the issuing body's current documents for requirements or operational changes.":"หน้านี้สรุปเพื่อให้เข้าใจง่าย หากนำไปใช้อ้างอิงกฎระเบียบหรือการปฏิบัติงาน ให้ตรวจฉบับล่าสุดจากหน่วยงานผู้ออกข้อมูล"}</p>
    </aside>
    <article className="library-detail-article">
      <span className="library-detail-section-label">{en?"KEY POINTS":"สาระสำคัญ"}</span>
      {points.map((point,i)=><section className="library-detail-point" key={i}><span>{String(i+1).padStart(2,"0")}</span><p>{point}</p></section>)}
      {info.related&&<div className="library-detail-related"><span>{en?"READ NEXT":"อ่านต่อในเว็บไซต์"}</span><Link href={root+info.related}>{en?info.relatedEn:info.relatedTh}<span aria-hidden="true">↗</span></Link></div>}
      <div className="library-detail-source"><strong>{en?"Original source":"แหล่งข้อมูลต้นฉบับ"}</strong><p>{en?"The full, authoritative information is maintained by the publishing organization.":"รายละเอียดฉบับเต็มและข้อมูลที่เป็นทางการดูได้จากหน่วยงานเจ้าของเอกสาร"}</p><a href={item.url} target="_blank" rel="noopener noreferrer">{en?"Open official publication":"เปิดเอกสารจากหน่วยงานต้นทาง"} <span aria-hidden="true">↗</span></a></div>
    </article>
   </div>
 </main>;
}
