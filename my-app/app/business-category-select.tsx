"use client";
import {useEffect,useId,useRef,useState,type KeyboardEvent} from "react";

type Choice={value:string;label:string};
type Props={
 label:string;
 placeholder:string;
 options:Choice[];
 value:string;
 onChange:(value:string)=>void;
 invalid?:boolean;
 errorText?:string;
};

/** Custom, accessible single-choice list; avoids system-native popup styling. */
export function BusinessCategorySelect({label,placeholder,options,value,onChange,invalid=false,errorText}:Props){
 const [open,setOpen]=useState(false);
 const rootRef=useRef<HTMLDivElement>(null);
 const triggerRef=useRef<HTMLButtonElement>(null);
 const optionsRef=useRef<Array<HTMLButtonElement|null>>([]);
 const labelId=useId();
 const valueId=useId();
 const listId=useId();
 const errorId=useId();
 const chosen=options.find(x=>x.value===value);
 const close=(restoreFocus=false)=>{setOpen(false);if(restoreFocus)triggerRef.current?.focus();};
 const choose=(choice:Choice)=>{onChange(choice.value);close(true);};
 useEffect(()=>{
  if(!open)return;
  const outside=(e:PointerEvent)=>{
   if(e.target instanceof Node&&!rootRef.current?.contains(e.target))setOpen(false);
  };
  const escape=(e:globalThis.KeyboardEvent)=>{
   if(e.key==="Escape"){e.preventDefault();setOpen(false);triggerRef.current?.focus();}
  };
  document.addEventListener("pointerdown",outside);
  document.addEventListener("keydown",escape);
  return()=>{document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",escape);};
 },[open]);
 useEffect(()=>{
  if(invalid)triggerRef.current?.focus({preventScroll:true});
 },[invalid]);
 const openAndFocus=(index:number)=>{
  setOpen(true);
  requestAnimationFrame(()=>optionsRef.current[Math.max(0,Math.min(index,options.length-1))]?.focus());
 };
 const onTriggerKey=(event:KeyboardEvent<HTMLButtonElement>)=>{
  if(event.key==="ArrowDown"||event.key==="ArrowUp"){
   event.preventDefault();
   const index=Math.max(0,options.findIndex(o=>o.value===value));
   openAndFocus(event.key==="ArrowDown"?index:Math.max(0,index-1));
  }else if(event.key==="Enter"||event.key===" "){
   event.preventDefault();
   if(open)close();else openAndFocus(Math.max(0,options.findIndex(o=>o.value===value)));
  }
 };
 const onOptionKey=(event:KeyboardEvent<HTMLButtonElement>,index:number)=>{
  if(event.key==="ArrowDown"||event.key==="ArrowUp"){
   event.preventDefault();
   optionsRef.current[(index+(event.key==="ArrowDown"?1:-1)+options.length)%options.length]?.focus();
  }else if(event.key==="Home"||event.key==="End"){
   event.preventDefault();
   optionsRef.current[event.key==="Home"?0:options.length-1]?.focus();
  }else if(event.key==="Tab"){setOpen(false);}
 };
 return <div className="acba-business-field" ref={rootRef}>
  <span className="acba-business-label" id={labelId}>{label}</span>
  <div className={"acba-business-select"+(open?" is-open":"")+(invalid?" is-invalid":"")}>
   <button type="button" ref={triggerRef} className="acba-business-trigger" aria-labelledby={`${labelId} ${valueId}`}
    aria-haspopup="listbox" aria-controls={listId} aria-expanded={open}
    aria-invalid={invalid||undefined} aria-describedby={invalid&&errorText?errorId:undefined}
    onClick={()=>setOpen(v=>!v)} onKeyDown={onTriggerKey}>
    <span id={valueId} className={"acba-business-value"+(!chosen?" is-placeholder":"")}>{chosen?chosen.label:placeholder}</span>
    <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 7.5 5 5 5-5"/></svg>
   </button>
   {open&&<div role="listbox" aria-labelledby={labelId} id={listId} className="acba-business-options">
    {options.map((choice,index)=><button type="button" key={choice.value} ref={el=>{optionsRef.current[index]=el;}}
     role="option" aria-selected={choice.value===value} className={"acba-business-option"+(choice.value===value?" is-selected":"")}
     onClick={()=>choose(choice)} onKeyDown={e=>onOptionKey(e,index)}>
     <span>{choice.label}</span>
     {choice.value===value&&<svg aria-hidden="true" viewBox="0 0 20 20"><path d="m4 10 4 4 8-8"/></svg>}
    </button>)}
   </div>}
  </div>
  {invalid&&errorText&&<span className="acba-business-error" id={errorId} role="alert">{errorText}</span>}
 </div>;
}
