"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { NAVIGATION } from "./site-content";
import { Icon } from "./ui-icons";

const submenuItems={
 members:[
  {href:"/members",th:"ภาพรวมสมาชิก",en:"Membership overview"},
  {href:"/members#acba-member-directory",th:"ทำเนียบสมาชิก ACBA",en:"ACBA member directory"},
  {href:"/join",th:"สมัครสมาชิก ACBA",en:"Apply for ACBA membership"}
 ],
 training:[
  {href:"/training#courses",th:"รวมหลักสูตรจากผู้จัด",en:"Course catalog"},
  {href:"/training/course/dgr71",th:"DGR 7.1 (Shipper)",en:"DGR 7.1 (Shipper)"},
  {href:"/training/course/dgr",th:"DGR 7.3 / CBTA",en:"DGR 7.3 / CBTA"},
  {href:"/training/course/dgrrecurrent",th:"DGR 7.3 Recurrent",en:"DGR 7.3 Recurrent"},
  {href:"/training/course/distribution",th:"Air Cargo Distribution",en:"Air Cargo Distribution"},
  {href:"/training/knowledge/tpqi",th:"คุณวุฒิวิชาชีพ TPQI",en:"TPQI qualifications"},
  {href:"/training/knowledge/career",th:"ทักษะอาชีพและ TOEIC",en:"Career skills & TOEIC"},
  {href:"/resources",th:"ห้องสมุดความรู้",en:"Knowledge library"}
 ]
} as const;
const englishLabels=["Home","About ACBA","Members","News & Activities","Training","Contact"];
const icons=["plane","building","users","newspaper","graduation","mail"] as const;
const toThai=(path:string)=>path==="/en"?"/":path.replace(/^\/en(?=\/|$)/,"")||"/";
const toEnglish=(path:string)=>{const base=toThai(path);return base==="/"?"/en":"/en"+base;};
export function SiteHeader(){
 const pathname=usePathname()??"/";
 const en=pathname==="/en"||pathname.startsWith("/en/");
 const [open,setOpen]=useState(false);
 const [portalReady,setPortalReady]=useState(false);
 const [categorySuffix,setCategorySuffix]=useState("");
 const menuButtonRef=useRef<HTMLButtonElement>(null);
 const drawerRef=useRef<HTMLElement>(null);
 const drawerCloseRef=useRef<HTMLButtonElement>(null);
 const [expandedMobile,setExpandedMobile]=useState<"members"|"training"|null>(null);
 const [dropdownState,setDropdownState]=useState<{path:string;name:"members"|"training"}|null>(null);
 const openDropdown=dropdownState?.path===pathname?dropdownState.name:null;
 const setOpenDropdown=(name:"members"|"training"|null)=>setDropdownState(name?{path:pathname,name}:null);
 const closeMenus=()=>{setOpenDropdown(null);setOpen(false);setExpandedMobile(null);};
 const closeDrawer=()=>{closeMenus();menuButtonRef.current?.focus({preventScroll:true});};
 const [scrolled,setScrolled]=useState(false);
 const link=(p:string)=>en?toEnglish(p):toThai(p);
 const isActive=(p:string)=>{const target=link(p);return p==="/"?pathname===target:pathname===target||pathname.startsWith(target+"/");};
 const thaiUrl=toThai(pathname),englishUrl=toEnglish(pathname);
 const languageSuffix=(pathname==="/news"||pathname==="/en/news")?categorySuffix:"";
 useEffect(()=>{
  const sync=()=>{
   const active=(pathname==="/news"||pathname==="/en/news");
   const value=active?new URLSearchParams(window.location.search).get("category"):null;
   setCategorySuffix(value==="activities"||value==="industry"?"?category="+value:"");
  };
  sync();
  window.addEventListener("popstate",sync);
  window.addEventListener("acba-news-category",sync);
  return()=>{window.removeEventListener("popstate",sync);window.removeEventListener("acba-news-category",sync);};
 },[pathname]);
 useEffect(()=>{
  const scroll=()=>setScrolled(window.scrollY>14);
  scroll();window.addEventListener("scroll",scroll,{passive:true});
  return()=>window.removeEventListener("scroll",scroll);
 },[]);
 useEffect(()=>{ document.documentElement.lang=en?"en":"th"; },[en]);
 useEffect(()=>{setPortalReady(true);},[]);
 useEffect(()=>{
  if(!open)return;
  const previous=document.body.style.overflow;
  document.body.style.overflow="hidden";
  return()=>{document.body.style.overflow=previous;};
 },[open]);
 useEffect(()=>{
  if(!open)return;
  drawerCloseRef.current?.focus({preventScroll:true});
  const trap=(event:KeyboardEvent)=>{
   if(event.key!=="Tab")return;
   const focusable=Array.from(drawerRef.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')??[]).filter(el=>el.getClientRects().length>0);
   if(!focusable.length)return;
   const first=focusable[0],last=focusable[focusable.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  };
  document.addEventListener("keydown",trap);
  return()=>document.removeEventListener("keydown",trap);
 },[open]);
 useEffect(()=>{
  const onResize=()=>{if(window.innerWidth>1180){setOpen(false);setExpandedMobile(null);}};
  window.addEventListener("resize",onResize);
  return()=>window.removeEventListener("resize",onResize);
 },[]);

 useEffect(()=>{
  const outside=(event:PointerEvent)=>{if(!(event.target instanceof Element))return; if(!event.target.closest(".nav-with-submenu"))setDropdownState(null); if(!event.target.closest(".nav-shell")&&!event.target.closest(".mobile-overlay-root")){setOpen(false);setExpandedMobile(null);}};
  const escape=(event:globalThis.KeyboardEvent)=>{if(event.key==="Escape"){setDropdownState(null);setOpen(false);setExpandedMobile(null);menuButtonRef.current?.focus({preventScroll:true});}};
  document.addEventListener("pointerdown",outside);
  document.addEventListener("keydown",escape);
  return()=>{document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",escape);};
 },[]);
 return <><header className={"nav-shell nav-v4"+(scrolled?" nav-scrolled":"")}>
  <div className="nav-inner">
   <Link href={link("/")} className="site-logo" aria-label="ACBA" onClick={closeMenus}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/logo/logo.png" width={52} height={52} alt="ACBA"/>
    <span className="brand-text"><strong>ACBA</strong><small>AIRLINE CARGO BUSINESS ASSOCIATION</small></span>
   </Link>
   <nav className="desktop-menu" aria-label={en?"Main navigation":"เมนูหลัก"}>
    {NAVIGATION.map((item,i)=>i===2||i===4?<div className="nav-with-submenu" key={item.href} data-open={openDropdown===(i===2?"members":"training")} onPointerEnter={()=>setOpenDropdown(i===2?"members":"training")} onPointerLeave={()=>setOpenDropdown(null)} onFocusCapture={()=>setOpenDropdown(i===2?"members":"training")} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setOpenDropdown(null);}}><Link href={link(item.href)} className={isActive(item.href)?"active":""} aria-current={isActive(item.href)?"page":undefined} aria-expanded={openDropdown===(i===2?"members":"training")} onClick={event=>{event.currentTarget.blur();closeMenus();}}>{en?englishLabels[i]:item.label}<span className="nav-submenu-chevron" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="m3.5 6 4.5 4 4.5-4"/></svg></span></Link><div className="nav-submenu" aria-label={en?(i===2?"Membership topics":"Training topics"):(i===2?"ข้อมูลสมาชิก":"ข้อมูลการฝึกอบรม")}>{(i===2?submenuItems.members:submenuItems.training).map(x=><Link key={x.href} href={link(x.href)+(x.href==="/join"?"#membership-form":"")} className={(x.href==="/join"&&isActive("/join"))||(x.href==="/members"&&isActive("/members"))?"is-current":""} aria-current={((x.href==="/join"&&isActive("/join"))||(x.href==="/members"&&isActive("/members")))?"page":undefined} onClick={event=>{event.currentTarget.blur();closeMenus();}}>{en?x.en:x.th}</Link>)}</div></div>:<Link key={item.href} href={link(item.href)} className={isActive(item.href)?"active":""} aria-current={isActive(item.href)?"page":undefined}>{en?englishLabels[i]:item.label}</Link>)}
   </nav>
   <div className="nav-end">
    <nav className="language-switch" aria-label={en?"Website language":"เลือกภาษาของเว็บไซต์"}>
     <Link href={thaiUrl+languageSuffix} hrefLang="th" lang="th" aria-current={!en?"page":undefined} className={!en?"selected":""} onClick={closeMenus} aria-label="แสดงเว็บไซต์ภาษาไทย"><span className="lang-short">TH</span></Link>
     <Link href={englishUrl+languageSuffix} hrefLang="en" lang="en" aria-current={en?"page":undefined} className={en?"selected":""} onClick={closeMenus} aria-label="Switch website to English"><span className="lang-short">EN</span></Link>
    </nav>
    <Link className="header-join-cta" href={link("/join")+"#membership-form"} aria-current={isActive("/join")?"page":undefined} onClick={closeMenus}><Icon name="users" size={17}/><span>{en?"Apply for membership":"สมัครสมาชิก"}</span></Link>
    <button ref={menuButtonRef} className={"mobile-trigger"+(open?" opened":"")} type="button" onClick={()=>{setOpen(v=>!v);setOpenDropdown(null);}} aria-expanded={open} aria-controls="mobile-acba-menu" aria-label={open?(en?"Close menu":"ปิดเมนู"):(en?"Open menu":"เปิดเมนู")}><span/><span/></button>
   </div>
  </div>
 </header>
 {portalReady&&createPortal(<div className="nav-v4 mobile-overlay-root">
  <div className={"mobile-scrim"+(open?" shown":"")} aria-hidden="true" onClick={closeDrawer}/>
  <nav ref={drawerRef} className={"mobile-panel mobile-drawer"+(open?" shown":"")} id="mobile-acba-menu" aria-label={en?"Mobile navigation":"เมนูบนมือถือ"} aria-hidden={!open} inert={!open}>
   <div className="mobile-drawer-heading">
    <div className="mobile-drawer-brand">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/logo/logo.png" width={35} height={35} alt=""/><div><strong>ACBA</strong><small>{en?"MENU / EXPLORE":"เมนูเว็บไซต์"}</small></div></div>
    <button ref={drawerCloseRef} type="button" className="mobile-drawer-close" aria-label={en?"Close navigation":"ปิดเมนู"} onClick={closeDrawer}><span aria-hidden="true">×</span></button>
   </div>
   <div className="mobile-drawer-scroll">
    <span className="mobile-drawer-overline">{en?"EXPLORE THE ASSOCIATION":"สำรวจเว็บไซต์"}</span>
    {NAVIGATION.map((item,i)=>{
     const section=i===2?"members":i===4?"training":null;
     const expanded=section!==null&&expandedMobile===section;
     return <div key={item.href} className="mobile-nav-group">
      <div className="mobile-nav-row">
       <Link href={link(item.href)} aria-current={isActive(item.href)?"page":undefined} onClick={closeMenus}><Icon name={icons[i]} size={19}/><span>{en?englishLabels[i]:item.label}</span></Link>
       {section&&<button type="button" className="mobile-nav-expand" aria-label={(expanded?(en?"Collapse ":"ย่อเมนู"):(en?"Expand ":"ขยายเมนู"))+(en?englishLabels[i]:item.label)} aria-expanded={expanded} aria-controls={"mobile-submenu-"+section} onClick={()=>setExpandedMobile(v=>v===section?null:section)}><svg aria-hidden="true" viewBox="0 0 16 16"><path d="m3.5 6 4.5 4 4.5-4"/></svg></button>}
      </div>
      {section&&<div className={"mobile-nav-children"+(expanded?" expanded":"")} id={"mobile-submenu-"+section} inert={!expanded}>{(section==="members"?submenuItems.members:submenuItems.training).map(x=><Link key={x.href} className="mobile-nav-child" href={link(x.href)+(x.href==="/join"?"#membership-form":"")} aria-current={((x.href==="/join"&&isActive("/join"))||(x.href==="/members"&&isActive("/members")))?"page":undefined} onClick={closeMenus}>{en?x.en:x.th}</Link>)}</div>}
     </div>;
    })}
   </div>
   <div className="mobile-drawer-footer">
    <Link href={link("/join")+"#membership-form"} onClick={closeMenus} className="mobile-join-link"><Icon name="users" size={18}/>{en?"Apply for membership":"สมัครสมาชิก"}</Link>
    <Link href={link("/contact")} onClick={closeMenus} className="mobile-join"><Icon name="mail" size={18}/>{en?"Contact us":"ติดต่อเรา"}</Link>
   </div>
  </nav>
 </div>,document.body)}
 </>;
}
