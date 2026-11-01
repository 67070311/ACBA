"use client";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}) {
 const ref=useRef<HTMLDivElement>(null);
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  const el=ref.current;
  if(!el)return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){setVisible(true);return;}
  const ob=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);ob.disconnect()}},{threshold:.08,rootMargin:"0px 0px -30px 0px"});
  ob.observe(el);
  return()=>ob.disconnect();
 },[]);
 return <div ref={ref} className={"reveal-block"+(visible?" revealed":"")+" "+className} style={{transitionDelay:delay+"ms"}}>{children}</div>
}
