/** Full-bleed editorial photo, independently sourced for the About hero.
 * Pexels photo 30030222 / Drinu Cutajar. Not an ACBA event photo.
 */
const ABOUT_CARGO_PHOTO="https://images.pexels.com/photos/30030222/pexels-photo-30030222.jpeg?auto=compress&cs=tinysrgb&w=2200";
export function AboutVisualCarousel({lang="th"}:{lang?:"th"|"en"}){
 const en=lang==="en";
 return <div className="about-panorama about-panorama-clean">
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img className="about-panorama-clean-image" src={ABOUT_CARGO_PHOTO} alt={en?"Illustrative cargo aircraft on the airport apron at night":"ภาพประกอบเครื่องบินขนส่งสินค้าที่สนามบินในเวลากลางคืน"} fetchPriority="high"/>
 </div>;
}
