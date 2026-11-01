export function IndustryTicker(){
 const words=["AIR CARGO","THAILAND","AVIATION","INDUSTRY","CONNECTION","COLLABORATION"];
 const list=[...words,...words];
 return <div className="industry-ticker" aria-label="Air cargo, aviation and collaboration">
   <div className="industry-ticker-track" aria-hidden="true">
    {list.map((word,i)=><span className="industry-ticker-item" key={i}>{word}<span className="ticker-slash" aria-hidden="true">/</span></span>)}
   </div>
 </div>;
}
