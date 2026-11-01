import Link from "next/link";
import {notFound} from "next/navigation";
import {SiteBackButton} from "./site-back-button";
import {COURSES} from "./site-verified";
import {getTrainingTopic} from "./training-learning-data";

type Lang="th"|"en";
export function TrainingDetailPage({lang="th",type,slug}:{lang?:Lang;type:"course"|"knowledge";slug:string}){
 const topic=getTrainingTopic(type,slug);
 if(!topic) return notFound();
 const en=lang==="en";
 const root=en?"/en/training":"/training";
 const course=type==="course"?COURSES.find(c=>c.id===slug):undefined;
 const listedFlatFee=course&&(course.id==="distribution"||course.id==="forwarder");
 const meta=course?(listedFlatFee?[
  {label:en?"ORGANIZER":"ผู้จัด",value:"TAFA"},
  {label:en?"PUBLISHED COURSE FEE":"ค่าอบรมตามประกาศ",value:"฿7,500"},
  {label:en?"CURRENT SCHEDULE":"กำหนดการล่าสุด",value:en?"Confirm with organizer":"ตรวจสอบกับผู้จัด"}
 ]:[
  {label:en?"ORGANIZER":"ผู้จัด",value:"TAFA"},
  {label:en?"PUBLISHED MEMBER RATE":"อัตราสมาชิกที่เผยแพร่",value:course.member==="—"?(en?"Confirm with TAFA":"สอบถามผู้จัด"):"฿"+course.member},
  {label:en?"PUBLISHED PUBLIC RATE":"อัตราทั่วไปที่เผยแพร่",value:course.public==="—"?(en?"Confirm with TAFA":"สอบถามผู้จัด"):"฿"+course.public}
 ]):[{label:en?"REFERENCE":"แหล่งความรู้",value:en?(topic.sourceEn??topic.source):topic.source}];
 return <main lang={lang} className="training-insight">
  <div className="site-wrap training-insight-header">
   <SiteBackButton fallback={root} lang={lang}/>
   <span className="training-insight-kicker">{en?topic.labelEn:topic.labelTh} / {type==="course"?"COURSE":"KNOWLEDGE"}</span>
   <h1>{en?topic.titleEn:topic.titleTh}</h1>
   <p className="training-insight-subtitle">{en?topic.subtitleEn:topic.subtitleTh}</p>
   <div className="training-insight-meta">{meta.map(x=><div key={x.label}><span>{x.label}</span><strong>{x.value}</strong></div>)}</div>
  </div>
  <div className="site-wrap training-insight-layout">
   <aside className="training-insight-side">
    <span>{en?"ON THIS PAGE":"เนื้อหาในหน้านี้"}</span>
    <ol>{topic.blocks.map((b,i)=><li key={i}><a href={"#section-"+i}>{en?b.titleEn:b.titleTh}</a></li>)}</ol>
   </aside>
   <article className="training-insight-body">
    <p className="training-insight-lead">{en?topic.introEn:topic.introTh}</p>
    {topic.blocks.map((b,i)=><section key={i} id={"section-"+i} className="training-insight-section">
      <div className="training-insight-section-no">0{i+1}</div>
      <div><h2>{en?b.titleEn:b.titleTh}</h2><ul>{(en?b.itemsEn:b.itemsTh).map((t,j)=><li key={j}>{t}</li>)}</ul></div>
    </section>)}
    <div className="training-insight-notice">
     <strong>{en?"Important to know":"ข้อควรทราบ"}</strong>
     <p>{en?topic.noticeEn:topic.noticeTh}</p>
     <p className="training-insight-reference">{en?"Source / reference":"อ้างอิง"}: {en?(topic.sourceEn??topic.source):topic.source}</p>{topic.sourceUrl&&<a href={topic.sourceUrl} target="_blank" rel="noopener noreferrer" className="training-insight-source-link">{en?"See original source ↗":"ตรวจสอบข้อมูลต้นฉบับ ↗"}</a>}
    </div>
    <div className="training-insight-actions">
     <Link href={root}>{en?"Explore other courses":"ดูหลักสูตรและความรู้อื่น"}</Link>
     <Link href={en?"/en/contact":"/contact"}>{en?"Contact the association":"ติดต่อสมาคม"}</Link>
    </div>
   </article>
  </div>
 </main>;
}
