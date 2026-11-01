import Link from "next/link";
import { Icon } from "./ui-icons";
import { FACTS } from "./site-verified";
import { Reveal } from "./ui-reveal";

export function HomeAssociationStory({lang="th"}:{lang?:"th"|"en"}){
 const en=lang==="en";
 const entries=[
 {key:"01",label:"TRADE ASSOCIATION / DBD",title:en?"An established Thai trade association":"สมาคมการค้าที่มีทะเบียนจัดตั้ง",detail:en?"DBD lists ACBA in Thailand’s trade-association register.":"กรมพัฒนาธุรกิจการค้าระบุชื่อ ACBA ในทะเบียนสมาคมการค้าของไทย",link:FACTS.dbd},
 {key:"02",label:"AIR CARGO / NETWORK",title:en?"Part of an interconnected air cargo network":"เครือข่ายที่เชื่อมโยงธุรกิจ Cargo",detail:en?"AOT's Free Zone directory names ACBA alongside organizations in Thailand's air freight ecosystem.":"AOT ระบุชื่อ ACBA ในรายชื่อหน่วยงานที่เกี่ยวข้องกับเขตปลอดอากรและการขนส่งสินค้าทางอากาศ",link:FACTS.airport},
 {key:"03",label:"TRAINING / 2023 REPORT",title:en?"Practical industry learning":"การพัฒนาบุคลากรผ่านความร่วมมือ",detail:en?"An education report covering 2023, presented in 2024, describes 11 classes and 218 participants in courses arranged by TAFA, ACBA and Thai Flight Training.":"รายงานการอบรมปี 2023 ที่นำเสนอในปี 2024 ระบุหลักสูตรร่วมกันโดย TAFA, ACBA และ Thai Flight Training รวม 11 รุ่น ผู้เข้าอบรม 218 คน",link:"https://www.fapaa.org/wp-content/uploads/2024/05/2024-Education-report-Thailand-TAFA.pdf"}
 ];
 return <section className="home-editorial-brief">
   <div className="site-wrap home-editorial-grid">
    <Reveal><div className="home-editorial-lead">
      <span className="home-editorial-index">ACBA / THE INDUSTRY</span>
      <h2>{en?<>More than<br/><em>air cargo.</em></>:<>มากกว่าการขนส่ง<br/><em>คือความร่วมมือ</em></>}</h2>
      <p>{en?"A registered association connected to people, knowledge and the future of air freight in Thailand.":"จากข้อมูลทะเบียนสมาคม เครือข่ายหน่วยงาน และความร่วมมือด้านการฝึกอบรม เห็นภาพบทบาทของ ACBA ในอุตสาหกรรม Air Cargo"}</p>
      <Link href={en?"/en/about":"/about"} className="home-editorial-cta"><Icon name="book" size={19}/>{en?"Discover our story":"อ่านเรื่องราวของ ACBA"}</Link>
      <div className="home-editorial-signature" aria-label={en?"Air cargo community in Thailand":"เครือข่ายอุตสาหกรรมขนส่งสินค้าทางอากาศไทย"}><span>AIR CARGO / THAILAND</span><strong>{en?"A connected industry.":"เชื่อมโยงทุกภาคส่วน"}</strong></div>
    </div></Reveal>
    <div className="home-editorial-entries">{entries.map((entry,i)=><Reveal key={entry.key} delay={i*75}>
      <a href={entry.link} target="_blank" rel="noopener noreferrer" className="home-editorial-entry">
       <span className="home-editorial-entry-no">{entry.key}</span>
       <div><small>{entry.label}</small><h3>{entry.title}</h3><p>{entry.detail}</p><span className="home-editorial-source">{en?"VIEW SOURCE":"ดูข้อมูลต้นทาง"}</span></div>
      </a>
    </Reveal>)}</div>
   </div>
 </section>;
}
