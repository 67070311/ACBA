import {Icon} from "./ui-icons";
import { SectionHeading } from "./site-section-heading";
const focus = [
 {no:"01",head:"Industry Representation",th:"เชื่อมโยงเสียงของผู้ประกอบการ",body:"ร่วมสื่อสารและแลกเปลี่ยนข้อเสนอแนะระหว่างภาคธุรกิจและหน่วยงานที่เกี่ยวข้องกับการขนส่งสินค้าทางอากาศ"},
 {no:"02",head:"Operational Collaboration",th:"ส่งเสริมความร่วมมือเชิงปฏิบัติการ",body:"มีส่วนร่วมในการหารืออุปสรรคในการดำเนินงานและแนวทางเพิ่มประสิทธิภาพระบบขนส่งสินค้าของสนามบิน"},
 {no:"03",head:"Safety & Standards",th:"สนับสนุนมาตรฐานและความปลอดภัย",body:"เข้าร่วมเวทีหารือกับภาคการบินและหน่วยงานกำกับดูแลในประเด็นที่เกี่ยวข้องกับมาตรฐานความปลอดภัยของสินค้า"}
];
export function FocusSection() {
return <section className="section focus-section" id="objectives">
 <div className="container">
  <div className="focus-top">
   <SectionHeading eyebrow="WHAT WE WORK TOWARD">Progress takes<br/><span className="focus-outline">collaboration.</span></SectionHeading>
   <p className="focus-top-note">บทบาทที่สะท้อนจากกิจกรรมและความร่วมมือของสมาคมกับหน่วยงานภาคอุตสาหกรรม<br/><small>* ไม่ใช่ข้อความวัตถุประสงค์ตามข้อบังคับสมาคมอย่างเป็นทางการ</small></p>
  </div>
  <div className="focus-list">
   {focus.map(item=><article className="focus-row" key={item.no}>
     <div className="focus-number">{item.no}</div>
     <div className="focus-name"><h3>{item.head}</h3><p>{item.th}</p></div>
     <p className="focus-copy">{item.body}</p>
     <span className="focus-symbol" aria-hidden="true"><Icon name="arrow-up-right" size={16}/></span>
   </article>)}
  </div>
  <div className="focus-bottom"><span>ACBA / AIR CARGO IN THAILAND</span><span>CONNECTING PEOPLE, POLICY &amp; PROGRESS</span></div>
 </div>
</section>
}
