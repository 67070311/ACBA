"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION, PHOTO_CREDITS } from "./site-content";
const enNames=["Home","About ACBA","Members","News & Activities","Training","Contact"];
export function SiteFooter(){
 const pathname=usePathname()??"/";
 const en=pathname==="/en"||pathname.startsWith("/en/");
 const to=(s:string)=>en?(s==="/"?"/en":"/en"+s):s;
 return <footer className="footer" id="footer">
   <div className="site-wrap footer-layout">
    <div className="footer-brand">
     {/* eslint-disable-next-line @next/next/no-img-element */}
     <img src="/logo/logo.png" alt="ACBA" width={72} height={72}/>
     <div><strong>ACBA</strong><p>Airline Cargo Business Association</p><small>{en?"Thailand's air cargo business community":"สมาคมการค้าธุรกิจการบินขนส่งสินค้า"}</small></div>
     <div className="footer-tagline">{en?<>Together, we move<br/><em>air cargo forward.</em></>:<>ร่วมกันขับเคลื่อน<br/><em>Air Cargo ไทย</em></>}</div>
    </div>
    <div className="footer-menu"><span>{en?"EXPLORE":"สำรวจเว็บไซต์"}</span>{NAVIGATION.map((x,i)=><Link key={x.href} href={to(x.href)}>{en?enNames[i]:x.label}</Link>)}<Link href={to("/join")+"#membership-form"}>{en?"Apply for membership":"สมัครสมาชิก"}</Link></div>
    <div className="footer-menu"><span>{en?"GET IN TOUCH":"ติดต่อสมาคม"}</span><Link href={to("/contact")}>{en?"Contact ACBA":"ติดต่อสมาคม"}</Link><Link href={to("/resources")}>{en?"Industry resources":"แหล่งข้อมูลอุตสาหกรรม"}</Link><p>{en?"Bangkok, Thailand":"กรุงเทพมหานคร ประเทศไทย"}</p><small>{en?"Official contact details are pending verification by ACBA.":"รายละเอียดการติดต่อรอการยืนยันจากสมาคม"}</small></div>
   </div>
   <div className="site-wrap footer-legal"><span>© 2026 ACBA · Website preview</span><span>{en?"THAILAND · AIR CARGO INDUSTRY":"อุตสาหกรรมขนส่งสินค้าทางอากาศไทย"}</span><details><summary>{en?"Selected photo credits":"เครดิตภาพประกอบบางส่วน"}</summary>{PHOTO_CREDITS.map(x=><a key={x.url} href={x.url} target="_blank" rel="noreferrer">{x.name} — {x.author}</a>)}</details></div>
  </footer>;
}