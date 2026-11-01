/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./ui-icons";
export function Eyebrow({children}:{children:ReactNode}){return <div className="eyebrow-pill">{children}</div>}
export function ArrowLink({href,children,light=false}:{href:string;children:ReactNode;light?:boolean}){
 return <Link href={href} className={"arrow-link minimal-link"+(light?" on-dark":"")}>{children}</Link>;
}
export function ButtonLink({href,children,ghost=false,icon}:{href:string;children:ReactNode;ghost?:boolean;icon?:IconName}){
 return <Link href={href} className={"action-button button-v4"+(ghost?" action-ghost":"")}>{icon&&<Icon name={icon} size={18}/>}<span className="button-label">{children}</span></Link>;
}
export function PageIntro({kicker,title,desc,image,children}:{kicker:string;title:ReactNode;desc:string;image?:string;children?:ReactNode}) {
 return <section className={"page-intro"+(image?" with-image":"")}>
   {image?<img className="intro-photo" src={image} alt=""/>:null}
   <div className="intro-tint"/>
   <div className="page-intro-content site-wrap"><Eyebrow>{kicker}</Eyebrow><h1>{title}</h1><p>{desc}</p>{children}</div>
 </section>;
}
