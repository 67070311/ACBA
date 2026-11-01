import type { NextConfig } from "next";

// Public routes have their own page views and browser URLs.
// The agent connection currently disallows mkdir, so existing Next.js
// routing is mapped to dedicated page components via query-based rewrites.
const nextConfig: NextConfig = {
 async redirects() {
  return [
   {source:"/activities",destination:"/news?category=activities",permanent:false},
   {source:"/en/activities",destination:"/en/news?category=activities",permanent:false}
  ];
 },
 async rewrites() {
  return [
   {source:"/en", destination:"/?lang=en"},
   {source:"/en/about", destination:"/?lang=en&view=about"},
   {source:"/en/members", destination:"/?lang=en&view=members"},
   {source:"/en/join", destination:"/?lang=en&view=join"},
   
   {source:"/en/news/:slug", destination:"/?lang=en&view=article&slug=:slug"},
   {source:"/en/news", destination:"/?lang=en&view=news"},
   {source:"/en/training/:type/:slug", destination:"/?lang=en&view=training-detail&type=:type&slug=:slug"},
   {source:"/en/training", destination:"/?lang=en&view=training"},
   {source:"/en/resources/:slug", destination:"/?lang=en&view=resource-detail&slug=:slug"},
   {source:"/en/resources", destination:"/?lang=en&view=resources"},
   {source:"/en/contact", destination:"/?lang=en&view=contact"},
   {source:"/about", destination:"/?view=about"},
   {source:"/members", destination:"/?view=members"},
   {source:"/join", destination:"/?view=join"},
   
   {source:"/news/:slug", destination:"/?view=article&slug=:slug"},
   {source:"/news", destination:"/?view=news"},
   {source:"/training/:type/:slug", destination:"/?view=training-detail&type=:type&slug=:slug"},
   {source:"/training", destination:"/?view=training"},
   {source:"/resources/:slug", destination:"/?view=resource-detail&slug=:slug"},
   {source:"/resources", destination:"/?view=resources"},
   {source:"/contact", destination:"/?view=contact"}
  ];
 }
};
export default nextConfig;
