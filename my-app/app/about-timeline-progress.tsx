"use client";
import {useEffect,useRef,type ReactNode} from "react";

/** Scroll-following red timeline rail. Handles long content and viewport resize. */
export function TimelineProgress({children}:{children:ReactNode}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const root=ref.current;
  if(!root)return;
  let frame=0;
  const update=()=>{
   frame=0;
   const bounds=root.getBoundingClientRect();
   const railHeight=Math.max(1,bounds.height-60);
   const playhead=window.innerHeight*.52;
   const value=Math.max(0,Math.min(1,(playhead-bounds.top)/railHeight));
   root.style.setProperty("--acba-timeline-progress",(value*100).toFixed(2)+"%");
   root.querySelectorAll<HTMLElement>(".about-archive-reveal").forEach((entry)=>{
    const active=entry.getBoundingClientRect().top<=playhead;
    entry.classList.toggle("timeline-passed",active);
   });
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  const resize=new ResizeObserver(schedule);
  resize.observe(root);
  window.addEventListener("scroll",schedule,{passive:true});
  window.addEventListener("resize",schedule,{passive:true});
  update();
  return()=>{resize.disconnect();window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);if(frame)cancelAnimationFrame(frame);};
 },[]);
 return <div ref={ref} className="about-archive-progress-track">{children}</div>;
}
