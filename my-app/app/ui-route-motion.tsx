"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
export function RouteMotion({children}:{children:ReactNode}){
 const pathname=usePathname();
 return <div key={pathname} className="route-motion">{children}</div>;
}
