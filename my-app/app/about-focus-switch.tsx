"use client";
import {useState,type KeyboardEvent} from "react";
import {IMAGES} from "./site-content";
import {ContentPhoto} from "./content-photo";
type Lang="th"|"en";
const panels:{tag:string;th:string;en:string;thText:string;enText:string;image:string}[]=[
 {tag:"01 / NETWORK",th:"ความร่วมมือกับผู้ประกอบการ",en:"Industry collaboration",thText:"TAFA ระบุในประวัติว่ามีการประสานงานและประชุมร่วมกับ ACBA และหน่วยงานด้านการขนส่งสินค้าทางอากาศเพื่อแก้ไขปัญหาในอุตสาหกรรม",enText:"TAFA documents past collaboration with ACBA and other air cargo stakeholders to address industry challenges.",image:IMAGES.aboutNetwork},
 {tag:"02 / SECURITY",th:"มาตรฐาน Known Consignor",en:"Air cargo security",thText:"วันที่ 4 มิถุนายน 2569 ACBA เข้าร่วมเวทีหารือที่ CAAT เป็นประธาน พร้อมผู้แทนจากศุลกากร AOT TAFA สายการบินและผู้ให้บริการคลังสินค้า",enText:"On 4 June 2026, ACBA joined a CAAT-led meeting with Customs, AOT, TAFA, airline and cargo-terminal representatives.",image:IMAGES.aboutSecurity},
 {tag:"03 / KNOWLEDGE",th:"การพัฒนาบุคลากร",en:"Professional learning",thText:"รายงาน Education Report 2023 ระบุความร่วมมือด้านการฝึกอบรมระหว่าง TAFA, ACBA และ Thai Flight Training โดยมีผู้เข้าร่วมรวม 218 คนในหลักสูตรที่รายงาน",enText:"The 2023 education report records training collaboration among TAFA, ACBA and Thai Flight Training involving 218 reported participants.",image:IMAGES.aboutLearning}
];
export function AboutFocusSwitch({lang="th"}:{lang?:Lang}){
 const [selected,setSelected]=useState(0),en=lang==="en",p=panels[selected];
 const navigateTabs=(event:KeyboardEvent<HTMLButtonElement>,index:number)=>{let next=index;switch(event.key){case "ArrowRight":case "ArrowDown":next=(index+1)%panels.length;break;case "ArrowLeft":case "ArrowUp":next=(index+panels.length-1)%panels.length;break;case "Home":next=0;break;case "End":next=panels.length-1;break;default:return;}event.preventDefault();setSelected(next);document.getElementById("about-tab-"+next)?.focus();};
 return <section className="about-v7-focus">
  <div className="site-wrap"><div className="about-v7-focus-heading"><span>ACBA / THREE CONNECTIONS</span><h2>{en?"Where ACBA connects":"บทบาทที่เชื่อมโยง"}<br/><em>{en?"the industry.":"อุตสาหกรรมเข้าด้วยกัน"}</em></h2><p>{en?"Three themes supported by publicly available reports about the association.":"สามประเด็นสำคัญจากข้อมูลที่เผยแพร่เกี่ยวกับการมีส่วนร่วมของสมาคม"}</p></div>
   <div className="about-v7-switch-grid"><div className="about-v7-switch-menu" role="tablist" aria-label={en?"Select topic":"เลือกหัวข้อ"}>{panels.map((x,i)=><button key={x.tag} type="button" role="tab" id={"about-tab-"+i} aria-controls="about-focus-panel" aria-selected={selected===i} tabIndex={selected===i?0:-1} className={selected===i?"active":""} onKeyDown={event=>navigateTabs(event,i)} onClick={()=>setSelected(i)}>
      <span className="about-v7-switch-copy"><small>{x.tag}</small><strong>{en?x.en:x.th}</strong></span><span className="about-v7-switch-number">0{i+1}</span></button>)}</div>
    <div key={selected} id="about-focus-panel" role="tabpanel" aria-labelledby={"about-tab-"+selected} className="about-v7-switch-panel"><div className="about-v7-switch-photo"><ContentPhoto src={p.image} alt={en?p.en:p.th} sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="about-v7-switch-text"><span>{p.tag}</span><h3>{en?p.en:p.th}</h3><p>{en?p.enText:p.thText}</p><small>{en?"BASED ON PUBLISHED INDUSTRY RECORDS":"สรุปจากข้อมูลที่มีการเผยแพร่แล้ว"}</small></div></div>
   </div>
  </div>
 </section>;
}
