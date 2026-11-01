/* eslint-disable @next/next/no-img-element */
type Props = { src:string; alt:string; className?:string; };
export function Photo({src,alt,className=""}:Props) {
  return <img className={"editorial-photo "+className} src={src} alt={alt} loading="lazy" referrerPolicy="no-referrer" />;
}
