import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { RouteMotion } from "./ui-route-motion";
import { SiteBackHistory } from "./site-back-button";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ACBA | Airline Cargo Business Association Thailand", template: "%s | ACBA Thailand" },
  description: "สมาคมการค้าธุรกิจการบินขนส่งสินค้า (ACBA) — ความร่วมมือของอุตสาหกรรม Air Cargo ในประเทศไทย",
  keywords: ["ACBA","Airline Cargo Business Association","Air Cargo Thailand","สมาคมการค้าธุรกิจการบินขนส่งสินค้า"],
  robots: {index:false,follow:false},
  icons: {
    icon: [{url:"/logo/logo.png?v=20261028",type:"image/png",sizes:"any"}],
    shortcut: [{url:"/logo/logo.png?v=20261028",type:"image/png"}],
    apple: [{url:"/logo/logo.png?v=20261028",type:"image/png"}],
  },
  openGraph: {title:"ACBA — Airline Cargo Business Association",description:"Connecting Thailand's Air Cargo Industry",locale:"th_TH",type:"website"}
};
export default function RootLayout({children}:{children:ReactNode}) {
 return <html lang="th" data-scroll-behavior="smooth"><body><SiteBackHistory><SiteHeader/><RouteMotion>{children}</RouteMotion><SiteFooter/></SiteBackHistory></body></html>;
}
