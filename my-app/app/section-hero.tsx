import {Icon} from "./ui-icons";
import Link from "next/link";
const VIDEO = "/home/banner/13371669-uhd_3840_2160_24fps.mp4";
export function HeroSection() {
  return <section className="hero" id="home" aria-label="ACBA introduction">
    <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
      <source src={VIDEO} type="video/mp4"/>
    </video>
    <div className="hero-shade" aria-hidden="true"/>
    <div className="hero-grid" aria-hidden="true"/>
    <div className="container hero-content">
      <div className="hero-overline"><span className="hero-overline-dot"/> AIRLINE CARGO BUSINESS ASSOCIATION <span className="hero-overline-index">/ THAILAND</span></div>
      <h1>Moving cargo.<br/><em>Connecting</em><br/>possibilities<span className="hero-period">.</span></h1>
      <p className="hero-thai">ขับเคลื่อนความร่วมมือ<br/>เพื่ออนาคตธุรกิจขนส่งสินค้าทางอากาศของไทย</p>
      <div className="hero-buttons">
        <Link className="button button-red" href="/#about">รู้จัก ACBA <span><Icon name="arrow-up-right" size={16}/></span></Link>
        <Link className="button button-glass" href="/#news">ข่าวสารและกิจกรรม <span><Icon name="arrow-up-right" size={16}/></span></Link>
      </div>
    </div>
    <div className="hero-bottom">
      <div className="hero-bottom-left">
        <span>01 <span className="hero-bottom-line"/> 06</span>
        <span>UNITING THE AIR CARGO COMMUNITY</span>
      </div>
      <a href="/#about" className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></a>
    </div>
    <div className="hero-side-note">BANGKOK · THAILAND</div>
  </section>
}
