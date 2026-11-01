"use client";
import Link from "next/link";
import {usePathname,useRouter} from "next/navigation";
import {createContext,useCallback,useContext,useEffect,useRef,type MouseEvent,type ReactNode} from "react";

type BackContextValue={goBack:(fallback:string)=>void};
const BackContext=createContext<BackContextValue|null>(null);

/** Keeps an in-tab, same-site navigation stack. Direct links use a safe fallback. */
export function SiteBackHistory({children}:{children:ReactNode}){
 const pathname=usePathname()??"/";
 const router=useRouter();
 const stack=useRef<string[]>([]);
 const pendingBack=useRef<string|null>(null);
 useEffect(()=>{
  const stackItems=stack.current;
  if(pendingBack.current===pathname&&stackItems.length>1){
   stackItems.pop();
   pendingBack.current=null;
  }else{
   pendingBack.current=null;
   if(stackItems[stackItems.length-1]!==pathname)stackItems.push(pathname);
  }
 },[pathname]);
 useEffect(()=>{
  const onPop=()=>{if(stack.current.length>1)pendingBack.current=stack.current[stack.current.length-2];};
  window.addEventListener("popstate",onPop);
  return()=>window.removeEventListener("popstate",onPop);
 },[]);
 const goBack=useCallback((fallback:string)=>{
  if(stack.current.length>1){
   pendingBack.current=stack.current[stack.current.length-2];
   router.back(); // Browser history preserves scroll and filters on the previous page.
  }else{
   router.push(fallback);
  }
 },[router]);
 return <BackContext.Provider value={{goBack}}>{children}</BackContext.Provider>;
}

/** Full Thai/English Back link. Uses history when present; fallback never exits ACBA. */
export function SiteBackButton({fallback,lang="th",className="",light=false}:{fallback:string;lang?:"th"|"en";className?:string;light?:boolean}){
 const context=useContext(BackContext);
 const onClick=(event:MouseEvent<HTMLAnchorElement>)=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||!context)return;
  event.preventDefault();
  context.goBack(fallback);
 };
 return <Link href={fallback} className={"site-back-button"+(light?" site-back-light":"")+(className?" "+className:"")} onClick={onClick} aria-label={lang==="en"?"Go back to previous page":"ย้อนกลับหน้าก่อนหน้า"}>
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m11.8 4.2-5.7 5.8 5.7 5.8M6.6 10H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  <span>{lang==="en"?"Back":"ย้อนกลับ"}</span>
 </Link>;
}
