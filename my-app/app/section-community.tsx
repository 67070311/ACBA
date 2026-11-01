import {Icon} from "./ui-icons";
import Link from "next/link";
import { Photo } from "./site-photo";
export function CommunitySection() {
return <>
  <section className="section community-section" id="members">
    <div className="container community-grid">
      <div className="community-left">
        <p className="eyebrow"><span className="eyebrow-line"/> MEMBERS &amp; NETWORK</p>
        <h2>Built on<br/><em>connection.</em></h2>
        <p className="community-lead">เครือข่ายธุรกิจที่เติบโตไปด้วยกัน</p>
        <p>ACBA เชื่อมโยงกับผู้ประกอบการขนส่งสินค้าทางอากาศและองค์กรในระบบนิเวศการบิน โดยมีความร่วมมือกับหน่วยงานต่าง ๆ ในประเด็นที่ส่งผลต่ออุตสาหกรรม</p>
        <p className="quiet-note">รายชื่อสมาชิกปัจจุบันและประเภทสมาชิกจะเผยแพร่หลังได้รับข้อมูลยืนยันจากสมาคม</p>
        <Link className="text-link" href="/#contact">ติดต่อเกี่ยวกับสมาชิก <span><Icon name="arrow-up-right" size={16}/></span></Link>
      </div>
      <div className="community-right">
        <div className="photo-frame community-image"><Photo src="https://images.pexels.com/photos/11242682/pexels-photo-11242682.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="เครื่องบินขนส่งสินค้าบนลานจอดท่าอากาศยาน"/></div>
        <div className="community-photo-stamp"><strong>ACBA</strong><span>STRONGER TOGETHER<br/>AIR CARGO COMMUNITY</span></div>
      </div>
    </div>
  </section>
  <section className="section development-section" id="development">
    <div className="container dev-grid">
      <div>
        <p className="eyebrow"><span className="eyebrow-line"/> TRAINING &amp; EDUCATION</p>
        <h2>Knowledge<br/>moves us <em>forward.</em></h2>
      </div>
      <div className="dev-aside">
        <p>พัฒนาความรู้และขีดความสามารถของบุคลากรในวงการ Air Cargo ผ่านเครือข่ายความร่วมมือในอุตสาหกรรม</p>
        <div className="dev-callout"><span className="dev-callout-num">01</span>
          <div><strong>Training opportunities</strong><p>สมาชิก ACBA เคยได้รับอัตราค่าอบรมสำหรับสมาชิกในหลักสูตรที่จัดโดย TAFA โดยเงื่อนไขขึ้นอยู่กับประกาศของผู้จัดแต่ละหลักสูตร</p></div>
        </div>
        <a className="text-link" href="https://www.tafathai.org/" target="_blank" rel="noopener noreferrer">ดูหลักสูตรจาก TAFA <span><Icon name="arrow-up-right" size={16}/></span></a>
      </div>
    </div>
  </section>
  <section className="resources-section" id="resources">
    <div className="container resources-wrap">
      <div className="resources-top"><p className="eyebrow"><span className="eyebrow-line"/> INDUSTRY RESOURCES</p><span>ACBA / KNOWLEDGE HUB</span></div>
      <h2>Better informed.<br/><em>Better connected.</em></h2>
      <p>ข้อมูลจากหน่วยงานที่เกี่ยวข้องกับการกำกับดูแล มาตรฐาน และการดำเนินงานด้านสินค้าทางอากาศ</p>
      <div className="resource-links">
        <a href="https://www.caat.or.th/" target="_blank" rel="noopener noreferrer"><span>01 / CIVIL AVIATION</span><strong>สำนักงานการบินพลเรือนแห่งประเทศไทย (CAAT)</strong><span><Icon name="arrow-up-right" size={16}/></span></a>
        <a href="https://suvarnabhumicargo.customs.go.th/" target="_blank" rel="noopener noreferrer"><span>02 / CUSTOMS</span><strong>ศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ</strong><span><Icon name="arrow-up-right" size={16}/></span></a>
        <a href="https://www.tafathai.org/" target="_blank" rel="noopener noreferrer"><span>03 / ASSOCIATION</span><strong>สมาคมตัวแทนขนส่งสินค้าทางอากาศไทย (TAFA)</strong><span><Icon name="arrow-up-right" size={16}/></span></a>
      </div>
    </div>
  </section>
</>;
}
