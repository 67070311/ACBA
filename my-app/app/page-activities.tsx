import Link from "next/link";
import {NEWS} from "./site-content";
import {NEWS_ARTICLES} from "./news-articles";
import {ContentPhoto} from "./content-photo";
import {newsDate,newsDateKey,newsDisplayTitle,newsDisplayDescription} from "./news-content";
type Lang="th"|"en";
const activityEntries=NEWS.map((item,index)=>({item,index})).filter(({item})=>!("associationInvolved" in item)||item.associationInvolved).sort((a,b)=>newsDateKey(b.item,b.index).localeCompare(newsDateKey(a.item,a.index)));
export function ActivitiesPage({lang="th"}:{lang?:Lang}){
 const en=lang==="en",base=en?"/en":"";
 return <main className="inner-page acba-activities">
  <section className="site-wrap acba-activities-hero"><div className="acba-activities-hero-copy"><span className="acba-activities-eyebrow">ACBA / INDUSTRY ENGAGEMENT</span><h1>{en?<>Association<br/><em>activities.</em></>:<>กิจกรรมและ<br/><em>การดำเนินงาน</em></>}</h1><p>{en?"Meetings, coordination and industry events in which ACBA is named by primary sources. These summaries link to full reports rather than duplicating the news articles.":"กิจกรรม การประชุม และการประสานงานที่มีชื่อ ACBA ในประกาศของหน่วยงานต้นทาง โดยเชื่อมไปยังหน้ารายละเอียดที่มีอยู่แล้ว ไม่ทำบทความซ้ำ"}</p></div><div className="acba-activities-hero-note"><strong>{en?"Source-verified records":"ข้อมูลที่ตรวจสอบแหล่งที่มาได้"}</strong><span>{en?"No fabricated event photos or unconfirmed participants":"ไม่ใช้ภาพสมมติเป็นภาพเหตุการณ์จริง และไม่เติมผู้เข้าร่วมที่ไม่มีหลักฐาน"}</span></div></section>
  <section className="site-wrap acba-activities-list" aria-label={en?"Association activities":"กิจกรรมสมาคม"}>
  {activityEntries.map(({item,index},i)=>{const detail=NEWS_ARTICLES[item.slug];return <article key={item.slug} className="acba-activity-row">
   <div className="acba-activity-date"><span>{String(i+1).padStart(2,"0")} / EVENT</span><strong>{newsDate(item,index,en)}</strong></div>
   <div className="acba-activity-image"><ContentPhoto src={item.image} alt={en?"Illustrative cargo industry photo":"ภาพประกอบเกี่ยวกับอุตสาหกรรมขนส่งสินค้าทางอากาศ"} sizes="(max-width:800px) 100vw, 34vw"/><small>{en?"Illustrative image":"ภาพประกอบ ไม่ใช่ภาพเหตุการณ์จริง"}</small></div>
   <div className="acba-activity-copy"><span>{en?"DOCUMENTED PARTICIPATION":"กิจกรรมที่มีข้อมูลอ้างอิง"}</span><h2>{newsDisplayTitle(item,index,en)}</h2><p>{detail?(en?detail.leadEn:detail.leadTh):newsDisplayDescription(item,index,en)}</p><small>{en?"Source":"ที่มา"}: {item.source}</small><Link href={base+"/news/"+item.slug}>{en?"Event details":"อ่านรายละเอียดกิจกรรม"} <span aria-hidden="true">↗</span></Link></div>
  </article>})}
  </section>
  <section className="site-wrap acba-activities-bottom"><div><h2>{en?"Looking for broader cargo-industry news?":"ติดตามข่าวสารอื่นในวงการ Air Cargo"}</h2><p>{en?"Industry news without confirmed ACBA participation is kept in the News section.":"ข่าวที่ไม่มีหลักฐานว่า ACBA เข้าร่วมจะแสดงในหมวดข่าวอุตสาหกรรม ไม่ปะปนกับกิจกรรมสมาคม"}</p></div><Link href={base+"/news"}>{en?"Industry news":"ข่าวสารอุตสาหกรรม"} ↗</Link></section>
 </main>;
}
