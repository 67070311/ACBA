import Link from "next/link";
export function JoinInformation({lang="th"}:{lang?:"th"|"en"}){
 const en=lang==="en";
 return <section className="site-wrap join-information">
  <div className="join-information-intro"><span>MEMBERSHIP / INFORMATION</span><h2>{en?"Before applying.":"ข้อมูลก่อนสมัครสมาชิก"}</h2><p>{en?"Learn what the public record supports. ACBA's official membership categories, eligibility, fees and approval workflow must be confirmed by the association.":"ข้อมูลประเภทสมาชิก คุณสมบัติ ค่าธรรมเนียม และขั้นตอนการอนุมัติของ ACBA ยังต้องได้รับการยืนยันจากสมาคมก่อนเปิดรับสมัครจริง"}</p></div>
  <div className="join-information-grid">
   <div><h3>{en?"Published course-rate example":"ตัวอย่างสิทธิการอบรมที่เคยประกาศ"}</h3><p>{en?"TAFA publishes member rates covering ACBA for select courses, including Basic Air Cargo Tariff. This does not establish a blanket ACBA benefit or current availability.":"TAFA เคยประกาศอัตราสำหรับสมาชิก ACBA ในบางหลักสูตร เช่น Basic Air Cargo Tariff แต่ไม่ควรสรุปว่าใช้ได้ทุกหลักสูตรหรือยังมีที่ว่างในปัจจุบัน"}</p><Link href={(en?"/en":"")+"/training/course/basic"}>{en?"Read course details":"อ่านรายละเอียดหลักสูตร"}</Link></div>
   <div><h3>{en?"Registered association":"ข้อมูลการจดทะเบียนสมาคม"}</h3><p>{en?"DBD lists the Airline Cargo Business Association, registration 0109545000103, registered on 5 September 2002.":"DBD ระบุชื่อสมาคมการค้าธุรกิจการบินขนส่งสินค้า เลขทะเบียน 0109545000103 จดทะเบียนวันที่ 5 กันยายน 2545"}</p><Link href={(en?"/en":"")+"/resources/trade-association-register"}>{en?"Read registration details":"อ่านข้อมูลทะเบียนสมาคม"}</Link></div>
   <div><h3>{en?"Protecting applicant details":"ความเป็นส่วนตัวของผู้สมัคร"}</h3><p>{en?"The form above is a front-end preview. No details are sent or stored. Official privacy notices and a backend workflow must be approved before live applications.":"ฟอร์มด้านบนเป็นเพียงตัวอย่างหน้าเว็บ ไม่ส่งหรือบันทึกข้อมูล การสมัครจริงจำเป็นต้องมีระบบหลังบ้านและประกาศความเป็นส่วนตัวที่ผ่านการอนุมัติ"}</p></div>
  </div>
 </section>;
}
