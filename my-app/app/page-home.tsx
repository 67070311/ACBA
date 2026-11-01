import Link from "next/link";
import { ButtonLink, ArrowLink, Eyebrow } from "./ui-elements";
import { Reveal } from "./ui-reveal";
import { IMAGES, NEWS } from "./site-content";
import { Photo } from "./site-photo";
import { ContentPhoto } from "./content-photo";
import { IndustryTicker } from "./ui-ticker";
import { Icon } from "./ui-icons";
import {newsCategory,newsDisplayTitle,newsDisplayDescription,newsDate,newsDateKey} from "./news-content";

type Lang = "th" | "en";
const topics = [
 {icon:"users",name:"Industry collaboration",th:"การประสานความร่วมมือ",en:"Industry collaboration",bodyTh:"ประสานงานกับผู้ประกอบการและหน่วยงานที่เกี่ยวข้อง เพื่อร่วมกันพัฒนาอุตสาหกรรมขนส่งสินค้าทางอากาศ",bodyEn:"Bringing businesses and industry partners together to strengthen Thailand's air cargo ecosystem.",image:IMAGES.cargo,href:"/about"},
 {icon:"package",name:"Cargo operations",th:"การปฏิบัติงานขนส่งสินค้า",en:"Cargo operations",bodyTh:"ร่วมติดตามปัญหาการดำเนินงานของคลังสินค้าและระบบโลจิสติกส์ภายในท่าอากาศยาน",bodyEn:"Working with stakeholders on operational matters across airport cargo and logistics.",image:IMAGES.airfreight,href:"/news"},
 {icon:"shield",name:"Aviation standards",th:"มาตรฐานและความปลอดภัย",en:"Aviation standards",bodyTh:"สนับสนุนการหารือเรื่องมาตรฐานและความปลอดภัยสำหรับการขนส่งสินค้าทางอากาศ",bodyEn:"Participating in conversations about air cargo security, safety and evolving industry standards.",image:IMAGES.night,href:"/resources"}
] as const;
const featuredNews=NEWS.map((item,index)=>({item,index})).sort((a,b)=>newsDateKey(b.item,b.index).localeCompare(newsDateKey(a.item,a.index))).slice(0,3);
const to=(path:string,lang:Lang)=>lang==="en"?path==="/"?"/en":"/en"+path:path;
export function HomeLanding({lang="th"}:{lang?:Lang}){
 const en=lang==="en";
 return <main lang={lang} className="home-main">
   <section className="home-hero original-hero">
    <video className="hero-video" autoPlay muted playsInline loop preload="auto" aria-hidden="true">
      <source src="/home/banner/13371669-uhd_3840_2160_24fps.mp4" type="video/mp4"/>
    </video>
    <div className="home-hero-wash"/>
    <div className="site-wrap home-hero-in">
      <div className="home-hero-panel">
       <span className="hero-kicker">AIRLINE CARGO BUSINESS ASSOCIATION <span>— THAILAND</span></span>
       <h1>Moving cargo.<br/><span>Connecting</span><br/>possibilities<span className="hero-final-dot">.</span></h1>
       <p>{en?"Bringing Thailand's air cargo community together to shape a more connected industry.":"ขับเคลื่อนความร่วมมือ เพื่ออนาคตธุรกิจการบินขนส่งสินค้าไทย"}</p>
       <div className="hero-actions home-quick-actions">
  <Link className="home-quick-link" href={to("/about",lang)}><span className="home-quick-icon"><Icon name="plane" size={17}/></span><span>{en?"About ACBA":"เกี่ยวกับ ACBA"}</span><span className="home-quick-chevron" aria-hidden="true">›</span></Link>
  <Link className="home-quick-link" href={to("/news",lang)}><span className="home-quick-icon"><Icon name="newspaper" size={17}/></span><span>{en?"News & Activities":"ข่าวสารและกิจกรรม"}</span><span className="home-quick-chevron" aria-hidden="true">›</span></Link>
  <Link className="home-quick-link home-quick-join" href={to("/join",lang)}><span className="home-quick-icon"><Icon name="users" size={17}/></span><span>{en?"Apply for membership":"สมัครสมาชิก"}</span><span className="home-quick-chevron" aria-hidden="true">›</span></Link>
 </div>
      </div>
    </div>
    <div className="hero-bottom-lineout site-wrap"><span>BANGKOK · THAILAND</span><span className="hero-scroll-label">{en?"EXPLORE THE INDUSTRY":"DISCOVER ACBA"}</span></div>
   </section>

   <section className="home-intro home-intro-v12 site-wrap" aria-labelledby="home-intro-title">
    <Reveal className="home-intro-v12-identity">
     <div className="home-intro-v12-identity-inner">
      <span className="home-intro-v12-label">{en?"THE ASSOCIATION":"ทำความรู้จักสมาคม"}</span>
      <h2 id="home-intro-title">ACBA<span>.</span></h2>
      <small>AIRLINE CARGO<br/>BUSINESS ASSOCIATION</small>
     </div>
    </Reveal>
    <Reveal delay={100} className="home-intro-v12-story">
     <div className="home-intro-v12-story-inner">
      <span className="home-intro-v12-overline">{en?"THAILAND / AIR CARGO COMMUNITY":"เครือข่ายอุตสาหกรรมการบินขนส่งสินค้าไทย"}</span>
      <p>{en?<>A place for the air cargo industry to <strong>connect, exchange knowledge and move forward together.</strong></>:<>พื้นที่แห่งการเชื่อมโยงผู้ประกอบการ แลกเปลี่ยนองค์ความรู้ และ<strong>ขับเคลื่อนอุตสาหกรรม Air Cargo ไทยไปด้วยกัน</strong></>}</p>
      <div className="home-intro-v12-note">
       <span>{en?"A registered trade association, connecting stakeholders across Thailand's air cargo sector.":"ACBA คือสมาคมการค้าธุรกิจการบินขนส่งสินค้า ซึ่งเชื่อมโยงผู้ประกอบการและหน่วยงานที่เกี่ยวข้องในประเทศไทย"}</span>
       <Link href={to("/about",lang)+"#acba-history-title"} className="home-intro-v12-link">{en?"Explore our history":"อ่านประวัติสมาคม"}<span aria-hidden="true"><Icon name="arrow-right" size={16}/></span></Link>
      </div>
     </div>
    </Reveal>
   </section>

   <IndustryTicker/>

   <section className="home-services site-wrap">
    <div className="section-title">
     <Reveal><div><Eyebrow>{en?"OUR FOCUS":"ขอบเขตความร่วมมือ"}</Eyebrow><h2>{en?<>What we<br/><em>work toward.</em></>:<>สิ่งที่เชื่อมโยง<br/><em>อุตสาหกรรมเข้าด้วยกัน</em></>}</h2></div></Reveal>
     <p>{en?"Focus areas drawn from publicly documented activities. These are not the association's official constitutional objectives.":"บทบาทที่สรุปจากกิจกรรมซึ่งมีหลักฐานเผยแพร่ ไม่ใช่วัตถุประสงค์อย่างเป็นทางการตามข้อบังคับสมาคม"}</p>
    </div>
    <div className="service-cards">
     {topics.map((a,i)=><Reveal key={a.name} delay={i*95}><Link href={to(a.href,lang)} className="service-card">
      <ContentPhoto src={a.image} alt={en?a.en:a.th} sizes="(max-width: 700px) 100vw, 33vw"/>
      <div className="service-shade"/>
      <div className="service-card-top"><span>0{i+1} / 03</span><span className="service-card-icon"><Icon name={a.icon} size={22}/></span></div>
      <div className="service-card-caption"><span>{en?a.name:["ความร่วมมือ","การขนส่งสินค้า","มาตรฐานการบิน"][i]}</span><h3>{en?a.en:a.th}</h3><p>{en?a.bodyEn:a.bodyTh}</p></div>
     </Link></Reveal>)}
    </div>
   </section>

   <section className="home-news site-wrap">
    <div className="section-title"><Reveal><div><Eyebrow>{en?"NEWS & ACTIVITIES":"ข่าวสารและกิจกรรม"}</Eyebrow><h2>{en?<>Latest from<br/><em>the industry.</em></>:<>อัปเดตข่าวสาร<br/><em>ในวงการ Air Cargo</em></>}</h2></div></Reveal><ArrowLink href={to("/news",lang)}>{en?"News & activities":"ดูข่าวสารและกิจกรรมทั้งหมด"}</ArrowLink></div>
    <div className="article-cards">
     {featuredNews.map(({item,index},i)=><Reveal key={item.slug} delay={i*75}><Link className="article-card" href={to("/news/"+item.slug,lang)}>
      <div className="article-picture"><ContentPhoto src={item.image} alt={en?"Illustrative air cargo photograph":"ภาพประกอบข่าวด้านการขนส่งสินค้าทางอากาศ"} sizes="(max-width: 700px) 100vw, 33vw"/></div>
      <div className="article-category">{newsCategory(item,en)}<span>{newsDate(item,index,en)}</span></div>
      <h3>{newsDisplayTitle(item,index,en)}</h3>
      <p>{newsDisplayDescription(item,index,en)}</p>
      <div className="article-card-line">{en?"Read story":"อ่านรายละเอียด"}</div>
     </Link></Reveal>)}
    </div>
    <div className="home-news-swipe-cue" aria-hidden="true"><span><Icon name="arrow-left" size={16}/></span> {en?"Swipe to explore news":"ปัดเพื่อดูข่าวถัดไป"} <span><Icon name="arrow-right" size={16}/></span></div>
   </section>

   <section className="closing-band site-wrap">
    <Reveal><div className="closing-left"><Eyebrow>{en?"THE ACBA COMMUNITY":"เครือข่าย ACBA"}</Eyebrow><h2>{en?<>Let&apos;s move<br/><em>forward together.</em></>:<>ก้าวต่อไป<br/><em>พร้อมกันทั้งอุตสาหกรรม</em></>}</h2><p>{en?"Be part of a more connected air cargo industry community.":"ร่วมเป็นส่วนหนึ่งของเครือข่ายความร่วมมือด้านการบินขนส่งสินค้า"}</p><ButtonLink href={to("/members",lang)} icon="users">{en?"Explore the community":"สำรวจสมาชิกและเครือข่าย"}</ButtonLink></div></Reveal>
    <div className="closing-art"><Photo src={IMAGES.aircraft} alt={en?"Commercial aircraft at airport":"เครื่องบินระหว่างเตรียมการปฏิบัติงานที่สนามบิน"}/></div>
   </section>
 </main>;
}
