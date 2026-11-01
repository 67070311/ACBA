import Link from "next/link";
type Lang="th"|"en";

const paths=[
 {code:"TPQI / LEVEL 3–5",th:"มาตรฐานคุณวุฒิวิชาชีพ TPQI",en:"TPQI professional qualifications",descTh:"อธิบายคุณวุฒิด้านผู้รับจัดการขนส่งสินค้าทางอากาศ ระดับ 3–5 และเส้นทางประเมินแบบทฤษฎี–สัมภาษณ์หรือเทียบโอนประสบการณ์",descEn:"Understand levels 3–5 and the examination/interview or evidence-based assessment routes.",href:"/training/knowledge/tpqi"},
 {code:"CAREER / ENGLISH",th:"ทักษะอาชีพและภาษาอังกฤษ",en:"Career skills & English",descTh:"เชื่อมความรู้ด้านเอกสาร Cargo การบริการลูกค้า และข้อมูล TOEIC ที่ TAFA เผยแพร่ โดยไม่อ้างว่า ACBA เป็นผู้จัดสอบ",descEn:"Cargo documentation, customer service and TOEIC references without presenting ACBA as a test provider.",href:"/training/knowledge/career"},
 {code:"DGR / SHIPPER",th:"DGR 7.1 สำหรับผู้ส่งสินค้า",en:"DGR 7.1 for shippers",descTh:"แยกหน้าที่ผู้จัดเตรียมสินค้าอันตรายออกจากบุคลากรที่ทำหน้าที่รับสินค้า",descEn:"Understand training for consignors preparing dangerous goods.",href:"/training/course/dgr71"},
 {code:"DGR / RECURRENT",th:"ทบทวน DGR 7.3",en:"DGR 7.3 recurrent",descTh:"สำหรับผู้เคยผ่าน DGR 7.3 และต้องตรวจสอบอายุใบประกาศนียบัตรก่อนเข้ารับการอบรม",descEn:"For previous DGR 7.3 trainees meeting certificate validity conditions.",href:"/training/course/dgrrecurrent"},
] as const;

export function ProfessionalPaths({lang="th"}:{lang?:Lang}){
 const en=lang==="en",base=en?"/en":"";
 return <section id="professional-paths" className="site-wrap acba-professional">
  <div className="acba-professional-heading"><div><span className="acba-program-kicker">INDUSTRY / PROFESSIONAL LEARNING</span><h2>{en?"Beyond the classroom.":"เส้นทางวิชาชีพที่ควรรู้"}</h2></div><p>{en?"Professional standards, course codes and skills from published industry sources. The issuing bodies and training organizers remain separate from ACBA.":"รวมรหัสหลักสูตร มาตรฐานอาชีพ และแนวทางพัฒนาบุคลากรจากแหล่งเผยแพร่จริง โดยแยกผู้จัดอบรมและหน่วยงานรับรองออกจาก ACBA อย่างชัดเจน"}</p></div>
  <div className="acba-professional-grid">{paths.map((x,i)=><Link key={x.code} href={base+x.href} className="acba-professional-item"><div><small>{String(i+1).padStart(2,"0")} / {x.code}</small><span aria-hidden="true">↗</span></div><h3>{en?x.en:x.th}</h3><p>{en?x.descEn:x.descTh}</p><strong>{en?"Read within ACBA":"อ่านรายละเอียดใน ACBA"}</strong></Link>)}</div>
  <div className="acba-professional-reference"><p>{en?"Primary references: TPQI occupational standards and TAFA program notices. ACBA does not issue these certifications or take registrations here.":"อ้างอิงมาตรฐานอาชีพของ TPQI และประกาศหลักสูตร TAFA — เว็บไซต์ ACBA ไม่ได้ออกใบรับรองหรือรับสมัครแทนผู้จัด"}</p><div><a href="https://tpqi-net.tpqi.go.th/index.php/qualifications/4701" target="_blank" rel="noopener noreferrer">TPQI ↗</a><a href="https://www.tafathai.org/training-and-education" target="_blank" rel="noopener noreferrer">TAFA ↗</a></div></div>
 </section>;
}
