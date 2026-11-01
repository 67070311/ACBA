import Link from "next/link";
import { Photo } from "./site-photo";
import { SectionHeading } from "./site-section-heading";
export function AboutSection() {
  return <>
    <section className="statement-bar" aria-label="About ACBA">
      <div className="container statement-inner">
        <div><span className="mini-red-square"/> THAILAND&apos;S AIR CARGO INDUSTRY</div>
        <p>One industry. <span>Shared progress.</span></p>
        <span className="statement-thai">สร้างความร่วมมือ · เชื่อมโยงภาคธุรกิจ</span>
      </div>
    </section>
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <div className="section-index">01 / ABOUT THE ASSOCIATION</div>
          <SectionHeading eyebrow="ABOUT ACBA">Moving forward.<br/><span className="thin-text">Together.</span></SectionHeading>
          <h3>สมาคมการค้าธุรกิจการบินขนส่งสินค้า</h3>
          <p>Airline Cargo Business Association (ACBA) คือสมาคมการค้าที่เชื่อมโยงผู้ประกอบการในอุตสาหกรรมขนส่งสินค้าทางอากาศ และมีส่วนร่วมกับหน่วยงานภาครัฐและเอกชนในการหารือแนวทางพัฒนาอุตสาหกรรมการบินขนส่งสินค้าของประเทศไทย</p>
          <p>จากความร่วมมือด้านการปฏิบัติงานในสนามบิน ไปจนถึงการหารือมาตรฐานความปลอดภัย ACBA ทำหน้าที่เป็นหนึ่งในเสียงของภาคธุรกิจที่ร่วมขับเคลื่อนระบบนิเวศ Air Cargo ของประเทศ</p>
          <Link className="text-link" href="/#objectives">สำรวจบทบาทของสมาคม <span>↗</span></Link>
        </div>
        <div className="about-visual">
          <div className="photo-frame about-image">
            <Photo src="https://images.pexels.com/photos/33619566/pexels-photo-33619566.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="การจัดการเที่ยวบินและขนส่งสินค้าที่ท่าอากาศยาน"/>
            <span className="photo-corner-label">INDUSTRY IN MOTION ↗</span>
          </div>
          <div className="about-microcard"><strong>ACBA</strong><span>THAILAND AIR CARGO<br/>เครือข่ายธุรกิจการบินขนส่งสินค้า</span></div>
          <div className="about-caption">AIR FREIGHT · AVIATION · LOGISTICS</div>
        </div>
      </div>
    </section>
  </>;
}
