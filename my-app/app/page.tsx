import { HomeLanding } from "./page-home";
import { AboutPage } from "./page-about";
import { MembersPage } from "./page-members";
import { JoinPage } from "./page-join";
import { NewsPage, NewsArticlePage } from "./page-news";
import { ResourcesPage } from "./page-resources";
import { TrainingPage } from "./page-training";
import { TrainingDetailPage } from "./page-training-detail";
import { ContactPage } from "./page-contact";
import { ResourceDetailPage } from "./page-resource-detail";
import { EnglishPage } from "./page-english";
import { EnglishJoinPage } from "./page-join-english";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {NEWS} from "./site-content";
import {newsTitle} from "./news-content";

type Params = {view?:string;slug?:string;lang?:string;type?:string;category?:string};
const localized:Record<string,{th:string;en:string}>={
 home:{th:"หน้าแรก",en:"Home"},
 about:{th:"เกี่ยวกับ ACBA",en:"About ACBA"},
 members:{th:"สมาชิกและเครือข่าย",en:"Membership"},
 join:{th:"สมัครสมาชิก ACBA",en:"Membership application"},
 news:{th:"ข่าวสารและกิจกรรม",en:"News & Activities"},
 article:{th:"รายละเอียดข่าวและกิจกรรม",en:"News & Activities details"},
 training:{th:"การฝึกอบรมและความรู้",en:"Training & Learning"},
 "training-detail":{th:"รายละเอียดหลักสูตรและความรู้",en:"Training details"},
 resources:{th:"ห้องสมุดความรู้",en:"Knowledge Library"},
 "resource-detail":{th:"ข้อมูลและแหล่งอ้างอิง",en:"Knowledge resource"},
 contact:{th:"ติดต่อสมาคม",en:"Contact ACBA"}
};
export async function generateMetadata({searchParams}:{searchParams:Promise<Params>}):Promise<Metadata>{
 const {view,lang,slug}=await searchParams;
 const english=lang==="en";
 const page=localized[view??"home"]??localized.home;
 const index=view==="article"?NEWS.findIndex(x=>x.slug===slug):-1;
 const title=index>=0?newsTitle(NEWS[index],index,english):(english?page.en:page.th);
 const description=english
  ?"Explore the Airline Cargo Business Association (ACBA), including members, industry news, activities, training and resources in Thailand."
  :"รู้จักสมาคมการค้าธุรกิจการบินขนส่งสินค้า (ACBA) พร้อมข้อมูลสมาชิก ข่าวสาร กิจกรรม การฝึกอบรม และแหล่งความรู้ในประเทศไทย";
 return {title,description,openGraph:{title,description,locale:english?"en_US":"th_TH",type:"website"}};
}
export default async function Page({searchParams}:{searchParams:Promise<Params>}) {
 const {view,slug,lang,type,category}=await searchParams;
 const categoryValue=category==="activities"||category==="industry"?category:"all";
 if(lang==="en"){
   if(!view)return <HomeLanding lang="en"/>;
   if(view==="join")return <EnglishJoinPage/>;
   if(view==="training-detail"&&(type==="course"||type==="knowledge"))return <TrainingDetailPage lang="en" type={type} slug={slug??""}/>;
   if(view==="resource-detail")return <ResourceDetailPage lang="en" slug={slug??""}/>;
   if(["about","members","news","article","training","resources","contact"].includes(view))return <EnglishPage view={view} slug={slug} category={categoryValue}/>;
   return notFound();
 }
 switch(view){
  case undefined:return <HomeLanding lang="th"/>;
  case "about":return <AboutPage/>;
  case "members":return <MembersPage/>;
  case "join":return <JoinPage/>;

  case "news":return <NewsPage category={categoryValue}/>;
  case "article":return <NewsArticlePage slug={slug??""}/>;
  case "training":return <TrainingPage/>;
  case "training-detail":return type==="course"||type==="knowledge"?<TrainingDetailPage type={type} slug={slug??""}/>:notFound();
  case "resources":return <ResourcesPage/>;
  case "resource-detail":return <ResourceDetailPage slug={slug??""}/>;
  case "contact":return <ContactPage/>;
  default:return notFound();
 }
}
