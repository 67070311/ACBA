import {NEWS} from "./site-content";
export type NewsEntry=typeof NEWS[number];
const englishTitles=[
 "ACBA joins discussions on cargo congestion at Suvarnabhumi Airport",
 "Air cargo stakeholders discuss free-zone operations",
 "ACBA participates in Known Consignor talks with CAAT"
];
const englishDescriptions=[
 "ACBA joined industry stakeholders to discuss cargo congestion and operational coordination at Suvarnabhumi Airport.",
 "Representatives exchanged perspectives on operations and proposals for the airport free-zone cargo facilities.",
 "CAAT and air cargo stakeholders discussed the Known Consignor framework and aviation security."
];
const originalDates=["20 October 2026","14 October 2026","5 June 2026"];
const originalKeys=["2026-10-20","2026-10-14","2026-06-05"];
export function newsTitle(item:NewsEntry,i:number,en:boolean){
 return en?("titleEn" in item?item.titleEn:englishTitles[i]??item.title):item.title;
}
export function newsDescription(item:NewsEntry,i:number,en:boolean){
 return en?("descriptionEn" in item?item.descriptionEn:englishDescriptions[i]??item.description):item.description;
}
export function newsDate(item:NewsEntry,i:number,en:boolean){
 return en?("dateEn" in item?item.dateEn:originalDates[i]??item.date):item.date;
}
export function newsDateKey(item:NewsEntry,i:number){
 return "publishedAt" in item?item.publishedAt:originalKeys[i]??"2026-01-01";
}
/** Localized publisher names keep English articles free of Thai-only source labels. */
export function newsSource(item:NewsEntry,en:boolean){
 if(!en)return item.source;
 const sources:Record<string,string>={
  "สำนักงานศุลกากรตรวจสินค้าท่าอากาศยานสุวรรณภูมิ":"Suvarnabhumi Airport Cargo Customs Office",
  "สำนักงานการบินพลเรือนแห่งประเทศไทย (CAAT)":"Civil Aviation Authority of Thailand (CAAT)"
 };
 return sources[item.source]??item.source;
}
export function acbaParticipated(item:NewsEntry){
 return !("associationInvolved" in item)||item.associationInvolved;
}

export function newsCategory(item:NewsEntry,en:boolean){
 if(en)return item.category;
 const labels:Record<string,string>={
  "INDUSTRY UPDATE":"ความเคลื่อนไหวอุตสาหกรรม",
  "OPERATIONS":"การดำเนินงาน",
  "AVIATION SECURITY":"ความปลอดภัยการบิน",
  "INDUSTRY NEWS":"ข่าวอุตสาหกรรม",
  "CARGO OPERATIONS":"การปฏิบัติงาน Cargo"
 };
 return labels[item.category]??item.category;
}

// UI-only headlines: keep the source records untouched while avoiding repetitive association naming.
export function newsDisplayTitle(item:NewsEntry,i:number,en:boolean){
 const title=newsTitle(item,i,en).replace(/\bACBA\b/g,en?"the association":"สมาคมฯ");
 return title.replace(/^the association/, "The association");
}
export function newsDisplayDescription(item:NewsEntry,i:number,en:boolean){
 const description=newsDescription(item,i,en).replace(/\bACBA\b/g,en?"the association":"สมาคมฯ");
 return description.replace(/^the association/, "The association");
}
