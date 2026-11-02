"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION, PHOTO_CREDITS } from "./site-content";
import { Icon } from "./ui-icons";
const enNames=["Home","About ACBA","Members","News & Activities","Training","Contact"];
export function SiteFooter(){
 const pathname=usePathname()??"/";
 const en=pathname==="/en"||pathname.startsWith("/en/");
 const to=(s:string)=>en?(s==="/"?"/en":"/en"+s):s;
 return <footer className="footer" id="footer">
   <div className="site-wrap footer-topline"><span>ACBA / AIR CARGO COMMUNITY</span><Link href={to("/join")+"#membership-form"} className="footer-modern-cta">{en?"Join our community":"เข้าร่วมเครือข่ายสมาชิก"} <Icon name="arrow-up-right" size={18}/></Link></div>
   <div className="site-wrap footer-visual" aria-label={en?"Air cargo network illustration":"ภาพกราฟิกเครือข่ายขนส่งสินค้าทางอากาศ"}>
    <div className="footer-visual-copy"><span>ACBA / CONNECTING THE INDUSTRY</span><strong>{en?<>Connecting the<br/>air cargo industry.</>:<>เชื่อมโยงเครือข่าย<br/>ขนส่งสินค้าทางอากาศ</>}</strong><p>{en?"Connecting the people and businesses behind air cargo.":"เชื่อมโยงผู้คนและธุรกิจที่ขับเคลื่อนการขนส่งสินค้าทางอากาศ"}</p></div>
    <svg className="footer-network-art" viewBox="0 0 620 260" role="img" aria-label={en?"Minimal air cargo connection route":"กราฟิกเส้นทางการบินและการเชื่อมต่อ"} xmlns="http://www.w3.org/2000/svg">
      <path d="M55 185 C180 185 208 72 335 104 S475 170 565 65" fill="none" stroke="#9fb4c1" strokeOpacity=".55" strokeWidth="2" strokeDasharray="5 9"/>
      <circle cx="55" cy="185" r="5" fill="#f85d70"/><circle cx="335" cy="104" r="5" fill="#f85d70"/><circle cx="565" cy="65" r="5" fill="#f85d70"/>
      <circle cx="55" cy="185" r="13" fill="none" stroke="#f85d70" strokeOpacity=".32"/><circle cx="565" cy="65" r="13" fill="none" stroke="#f85d70" strokeOpacity=".32"/>
      <g transform="translate(335 104)"><g className="footer-plane-float" transform="rotate(66)"><path d="M0-29 6-7 31 8v9L6 11 6 29 14 35v5L0 35-14 40v-5l8-6V11l-25 6V8L-6-7Z" fill="#fff"/></g></g>
      <g fill="#a9c0cd" fontSize="11" letterSpacing="2" fontFamily="sans-serif"><text x="25" y="222">THAILAND</text><text x="470" y="41">AIR CARGO</text></g>
    </svg>
   </div>
   <div className="site-wrap footer-layout">
    <div className="footer-brand">
     {/* eslint-disable-next-line @next/next/no-img-element */}
     <img src="/logo/logo.png" alt="ACBA" width={72} height={72}/>
     <div><strong>ACBA</strong><p>Airline Cargo Business Association</p><small>{en?"Thailand's air cargo business community":"สมาคมการค้าธุรกิจการบินขนส่งสินค้า"}</small></div>
     
    </div>
    <div className="footer-menu footer-explore"><span>{en?"EXPLORE":"สำรวจเว็บไซต์"}</span>{NAVIGATION.map((x,i)=><Link key={x.href} href={to(x.href)}>{en?enNames[i]:x.label}</Link>)}<Link href={to("/join")+"#membership-form"}>{en?"Apply for membership":"สมัครสมาชิก"}</Link></div>
    <div className="footer-menu footer-contact"><span>{en?"GET IN TOUCH":"ติดต่อสมาคม"}</span><Link href={to("/contact")}>{en?"Contact ACBA":"ติดต่อสมาคม"}</Link><Link href={to("/resources")}>{en?"Industry resources":"แหล่งข้อมูลอุตสาหกรรม"}</Link><p>{en?"Bangkok, Thailand":"กรุงเทพมหานคร ประเทศไทย"}</p><small>{en?"Association information and contact resources.":"ข้อมูลและช่องทางติดต่อสมาคม"}</small></div>
   </div>
   <div className="site-wrap footer-legal"><span>© ACBA</span><span>{en?"THAILAND · AIR CARGO INDUSTRY":"อุตสาหกรรมขนส่งสินค้าทางอากาศไทย"}</span><details><summary>{en?"Selected photo credits":"เครดิตภาพประกอบบางส่วน"}</summary>{PHOTO_CREDITS.map(x=><a key={x.url} href={x.url} target="_blank" rel="noreferrer">{x.name} — {x.author}</a>)}</details></div>
  </footer>;
}