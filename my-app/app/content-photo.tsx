/* Responsive imagery for below-banner content only.
   Banner/hero images keep their existing components and loading behavior. */
/* eslint-disable @next/next/no-img-element */
type ContentPhotoProps = {
 src: string;
 alt: string;
 className?: string;
 sizes?: string;
};
function responsivePexels(src:string){
 if(!src.startsWith("https://images.pexels.com/"))return undefined;
 const widths=[420,720,1080,1400];
 return widths.map(w=>{
  const variant=src.match(/([?&])w=\d+/)
   ?src.replace(/([?&])w=\d+/, "$1w="+w)
   :src+(src.includes("?")?"&":"?")+"w="+w;
  return variant+" "+w+"w";
 }).join(", ");
}
export function ContentPhoto({src,alt,className="",sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}:ContentPhotoProps){
 return <img
  className={"editorial-photo "+className}
  src={src}
  srcSet={responsivePexels(src)}
  sizes={sizes}
  width={900}
  height={650}
  alt={alt}
  loading="lazy"
  decoding="async"
  referrerPolicy="no-referrer"
 />;
}
