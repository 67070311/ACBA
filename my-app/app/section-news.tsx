import {Icon} from "./ui-icons";
import { NEWS } from "./site-content";
import { Photo } from "./site-photo";
import { SectionHeading } from "./site-section-heading";

export function NewsSection() {
return <section className="section news-section" id="news">
 <div className="container">
  <div className="news-top">
   <SectionHeading eyebrow="NEWS & ACTIVITIES">In the <em>industry.</em><br/>In the conversation.</SectionHeading>
   <p>ติดตามความเคลื่อนไหวและความร่วมมือของสมาคมในอุตสาหกรรมขนส่งสินค้าทางอากาศ</p>
  </div>
  <div className="news-grid">
   {NEWS.map((item,index)=><a className="news-card" key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
     <div className="news-image"><Photo src={item.image} alt={item.title}/><span className="news-img-label">0{index+1} / ACTIVITIES</span></div>
     <div className="news-card-meta"><span>{item.category}</span><time>{item.date}</time></div>
     <h3>{item.title}</h3>
     <p>{item.description}</p>
     <div className="news-source"><span>แหล่งข่าว: {item.source}</span><span className="round-arrow"><Icon name="arrow-up-right" size={16}/></span></div>
   </a>)}
  </div>
  <div className="news-bottom-note"><span>ข่าวจากหน่วยงานต้นทางที่มีการระบุชื่อ ACBA</span><span>EXTERNAL PRESS SOURCES <Icon name="arrow-up-right" size={16}/></span></div>
 </div>
</section>;
}
