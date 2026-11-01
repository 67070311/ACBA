import type { SVGProps, ReactNode } from "react";
export type IconName = "plane"|"package"|"shield"|"users"|"newspaper"|"calendar"|"book"|"mail"|"globe"|"check"|"building"|"clock"|"compass"|"layers"|"graduation"|"file"|"handshake"|"map"|"search"|"phone"|"arrow-up-right"|"arrow-right"|"arrow-left";
type Props={name:IconName;size?:number;className?:string;strokeWidth?:number};
export function Icon({name,size=23,className="",strokeWidth=1.65}:Props){
 const props:SVGProps<SVGSVGElement>={width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth,strokeLinecap:"round",strokeLinejoin:"round",className,"aria-hidden":true};
 const paths:Record<IconName,ReactNode>={
 "arrow-up-right":<><path d="M7 17 17 7M8 7h9v9"/></>,
 "arrow-right":<><path d="M5 12h14m-6-6 6 6-6 6"/></>,
 "arrow-left":<><path d="M19 12H5m6-6-6 6 6 6"/></>,
 plane:<><path d="m17.6 2.7 2.1 2.1a2 2 0 0 1 .1 2.7l-5.7 6.3 1.7 5.6-1.6 1.6-4.1-5.2-4.5 4.5-2.5.2.2-2.5 4.5-4.5-5.2-4.1 1.6-1.6 5.6 1.7 6.3-5.7a2 2 0 0 1 2.7.1Z"/></>,
 package:<><path d="M3 7 12 2l9 5v10l-9 5-9-5V7Z"/><path d="m3 7 9 5 9-5M12 12v10M7.5 4.5l9 5"/></>,
 shield:<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
 users:<><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1"/></>,
 newspaper:<><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h5M7 12h10M7 16h10M15 7h2v2h-2z"/></>,
 calendar:<><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3"/></>,
 book:<><path d="M12 6a9 9 0 0 0-9-2v15a9 9 0 0 1 9 2 9 9 0 0 1 9-2V4a9 9 0 0 0-9 2ZM12 6v15"/></>,
 mail:<><rect x="2" y="5" width="20" height="14" rx="3"/><path d="m3 7 9 7 9-7"/></>,
 globe:<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18"/></>,
 check:<><path d="m5 12 5 5 9-10"/></>,
 building:<><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 8h2M14 8h2M8 13h2M14 13h2"/></>,
 clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
 compass:<><circle cx="12" cy="12" r="9"/><path d="m15.7 8.3-2.6 4.8-4.8 2.6 2.6-4.8 4.8-2.6Z"/></>,
 layers:<><path d="m3 8 9-5 9 5-9 5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/></>,
 graduation:<><path d="m2 9 10-5 10 5-10 5-10-5ZM6 11v6c4 3 8 3 12 0v-6M22 10v6"/></>,
 file:<><path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M14 2v6h5M8 13h8M8 17h7"/></>,
 handshake:<><path d="m2 10 4-4 4 2 3-1 5 4-4 4-5-3-4 4-3-3ZM22 10l-4-4-4 2M7 16l3 3 3-1 2-2"/></>,
 map:<><path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5ZM9 3v16M15 5v16"/></>,
 search:<><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></>,
 phone:<><path d="M22 16.8v3a2 2 0 0 1-2.2 2A19 19 0 0 1 2.2 4.2 2 2 0 0 1 4.2 2h3A2 2 0 0 1 9.2 3.7l.5 3a2 2 0 0 1-.6 1.7L7.7 9.8a15 15 0 0 0 6.5 6.5l1.4-1.4a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 2Z"/></>
 };
 return <svg {...props}>{paths[name]}</svg>;
}
