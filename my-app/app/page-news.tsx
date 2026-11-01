import Link from "next/link";
import {Icon} from "./ui-icons";
import {SiteBackButton} from "./site-back-button";
import {NEWS} from "./site-content";
import {NEWS_ARTICLES} from "./news-articles";
import {Photo} from "./site-photo";
import {NewsJournal,type NewsCategory} from "./news-journal";
import {newsDisplayTitle,newsDisplayDescription,newsDate,newsCategory,newsSource,acbaParticipated} from "./news-content";
type Lang="th"|"en";
export function NewsPage({lang="th",category="all"}:{lang?:Lang;category?:NewsCategory}){
 const en=lang==="en";
 return <main lang={lang} className="inner-page news-v13">
  <section className="news-v13-masthead site-wrap">
   <div className="news-v13-masthead-main">
    
    <span className="news-v13-eyebrow">{en?"NEWS & ACTIVITIES":"ข่าวสารและกิจกรรม"}</span>
    <h1>{en?<>News &amp;<br/><em>activities.</em></>:<>ข่าวสารและ<br/><em>กิจกรรม</em></>}</h1>
   </div>
   <div className="news-v13-masthead-side">
    <span>{en?"THAILAND · AIR CARGO INDUSTRY":"THAILAND · AIR CARGO INDUSTRY"}</span>
    <p>{en?"Follow ACBA activities and wider industry news in one place, organized by category.":"ติดตามกิจกรรมสมาคมและข่าวสารอุตสาหกรรม Air Cargo ได้ในหน้าเดียว พร้อมแยกหมวดหมู่ให้เลือกอ่าน"}</p>
    <div className="news-v13-masthead-rule"><span>{en?"CARGO JOURNAL":"ข่าวสารและกิจกรรม"}</span><strong>2026</strong></div>
   </div>
  </section>
  <NewsJournal lang={lang} initialCategory={category}/>
  <section className="news-v13-end">
   <div className="site-wrap news-v13-end-inner">
    <div><span>{en?"KEEP EXPLORING":"เรียนรู้เพิ่มเติม"}</span><h2>{en?"Explore the cargo industry.":"เรียนรู้โลก Air Cargo ให้มากขึ้น"}</h2><p>{en?"Find industry terminology, official references and useful resources in the knowledge library.":"ดูคำศัพท์และแหล่งอ้างอิงด้านการขนส่งสินค้าทางอากาศเพิ่มเติมในห้องสมุดความรู้"}</p></div>
    <Link href={en?"/en/resources":"/resources"} className="news-v13-end-link">{en?"Knowledge library":"ห้องสมุดความรู้"}<span aria-hidden="true"><Icon name="arrow-up-right" size={16}/></span></Link>
   </div>
  </section>
 </main>;
}
export function NewsArticlePage({slug,lang="th"}:{slug:string;lang?:Lang}){
 const en=lang==="en",i=NEWS.findIndex(x=>x.slug===slug);
 if(i===-1)return <main lang={lang} className="inner-page"><section className="site-wrap news-article-missing"><h1>{en?"Story not found":"ไม่พบข่าวนี้"}</h1><Link href={en?"/en/news":"/news"}>{en?"Back to news":"กลับหน้าข่าวสาร"}</Link></section></main>;
 const item=NEWS[i],details=NEWS_ARTICLES[item.slug];
 return <main lang={lang} className="inner-page news-v6-article news-v14-article">
  <header className="site-wrap news-v14-header">
   <SiteBackButton fallback={(en?"/en/news":"/news")+(acbaParticipated(item)?"?category=activities":"?category=industry")} lang={lang}/>
   <div className="news-v14-category"><span>{newsCategory(item,en)}</span><span>{acbaParticipated(item)?(en?"ASSOCIATION ACTIVITY":"กิจกรรมสมาคม"):(en?"INDUSTRY REPORT":"ข่าวอุตสาหกรรม")}</span></div>
   <h1>{newsDisplayTitle(item,i,en)}</h1>
   <p className="news-v14-lead">{details?(en?details.leadEn:details.leadTh):newsDisplayDescription(item,i,en)}</p>
   <div className="news-v14-byline">
    <span><Icon name="calendar" size={16}/>{newsDate(item,i,en)}</span>
    <span>{en?"SOURCE":"แหล่งข้อมูล"}: {newsSource(item,en)}</span>
   </div>
  </header>
  <figure className="site-wrap news-v14-figure">
   <Photo src={item.image} alt={en?"Illustrative air cargo industry photo":"ภาพประกอบอุตสาหกรรมขนส่งสินค้าทางอากาศ"}/>
   <figcaption>{en?"Illustrative photograph — not a photo of the reported event.":"ภาพประกอบจากคลังภาพ ไม่ใช่ภาพถ่ายของเหตุการณ์ตามข่าว"}</figcaption>
  </figure>
  <section className="site-wrap news-v14-layout">
   <aside className="news-v14-sidebar">
    <span className="news-v14-sidebar-heading">{en?"REPORT DETAILS":"ข้อมูลเหตุการณ์"}</span>
    <dl>
     <div><dt>{en?"EVENT DATE":"วันที่จัดกิจกรรม"}</dt><dd>{details?(en?details.eventEn:details.eventTh):newsDate(item,i,en)}</dd></div>
     <div><dt>{en?"PUBLISHED BY":"หน่วยงานที่เผยแพร่"}</dt><dd>{newsSource(item,en)}</dd></div>
    </dl>
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-v14-source-link">{en?"Official announcement":"ประกาศต้นฉบับ"}<span aria-hidden="true"><Icon name="arrow-up-right" size={16}/></span></a>
   </aside>
   <article className="news-v14-story">
    {details?details.sections.map(section=><section key={section.headingEn} className="news-v14-story-section">
     <h2>{en?section.headingEn:section.headingTh}</h2>
     {(en?section.paragraphsEn:section.paragraphsTh).map((paragraph,j)=><p key={j}>{paragraph}</p>)}
    </section>):<p>{newsDisplayDescription(item,i,en)}</p>}
    <div className="news-v14-attribution">
     <strong>{en?"About this report":"เกี่ยวกับเนื้อหานี้"}</strong>
     <p>{en?"This article summarizes information from the named primary source. Where the original announcement does not state an outcome, no decision or result is assumed.":"บทความนี้เรียบเรียงข้อมูลจากประกาศของหน่วยงานต้นทาง โดยไม่สรุปผลการดำเนินงานหรือมติที่ต้นฉบับไม่ได้ระบุไว้"}</p>
    </div>
    <nav className="news-v14-nav" aria-label={en?"Article navigation":"นำทางข่าวสาร"}>
     <Link href={(en?"/en/news":"/news")+(acbaParticipated(item)?"?category=activities":"?category=industry")}>{acbaParticipated(item)?(en?"Association activities":"กลับไปหน้ากิจกรรมสมาคม"):(en?"Industry news":"กลับไปหน้าข่าวสาร")}</Link>
     <Link href={en?"/en/about":"/about"}>{en?"About the association":"เกี่ยวกับสมาคม"}</Link>
    </nav>
   </article>
  </section>
 </main>;
}
