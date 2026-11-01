import { AboutPage } from "./page-about";
import { MembersPage } from "./page-members";
import { NewsPage, NewsArticlePage } from "./page-news";
import { TrainingPage } from "./page-training";
import { ResourcesPage } from "./page-resources";
import { ContactPage } from "./page-contact";
export function EnglishPage({view,slug,category="all"}:{view:string;slug?:string;category?:"all"|"activities"|"industry"}){
 switch(view){
  case "about":return <AboutPage lang="en"/>;
  case "members":return <MembersPage lang="en"/>;
  case "news":return <NewsPage lang="en" category={category}/>;
  case "article":return <NewsArticlePage slug={slug??""} lang="en"/>;
  case "training":return <TrainingPage lang="en"/>;
  case "resources":return <ResourcesPage lang="en"/>;
  case "contact":return <ContactPage lang="en"/>;
  default:return null;
 }
}
