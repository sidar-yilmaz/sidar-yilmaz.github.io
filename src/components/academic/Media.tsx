'use client';
import { useId, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { asset, validLink } from '@/lib/assets';
export function TechnicalFigure({kind=0}: {kind?:number}) {
  const gridId = useId();
  const labels = ['INDEPENDENT FORCE & MOMENT','CONTACT-CONSTRAINED MOTION','EXTERNAL WRENCH OBSERVATION','COMPLIANCE & RECONFIGURATION'];
  return <div className="technical-figure" aria-label={`Conceptual research diagram: ${labels[kind]}. Not experimental data.`}>
    <div className="figure-top"><span>CONCEPT / {String(kind+1).padStart(2,'0')}</span><span>6 DOF</span></div>
    <svg viewBox="0 0 420 220" role="img" aria-label="Conceptual control signal diagram">
      <defs><pattern id={gridId} width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="currentColor" strokeOpacity=".1" /></pattern></defs>
      <rect width="420" height="220" fill={`url(#${gridId})`}/>
      <path d="M42 184H386M42 184V30" stroke="currentColor" strokeOpacity=".35" fill="none"/>
      <path d={kind===1?'M42 140L122 140L122 68L214 68L214 114L298 114L298 80H386':kind===3?'M42 130C88 36 116 188 162 98S236 168 282 92S346 122 386 94':'M42 150C88 154 106 42 152 76S208 164 250 105S308 60 346 100L386 92'} stroke="#77d6c6" strokeWidth="3" fill="none"/>
      <path d="M42 154C96 146 114 76 154 92S216 126 250 108S310 87 346 98L386 96" stroke="#98aabb" strokeDasharray="5 6" strokeWidth="2" fill="none"/>
      <text x="49" y="24" fill="currentColor" fontSize="12">response</text><text x="354" y="207" fill="currentColor" fontSize="12">time</text>
    </svg><div className="figure-bottom"><span>{labels[kind]}</span><span>ILLUSTRATIVE</span></div>
  </div>;
}
export default function Media({image,video,title,kind=0}: {image?:string;video?:string;title:string;kind?:number}) {
  const ref=useRef<HTMLVideoElement>(null); const reduce=useReducedMotion();
  const [imageFailed,setImageFailed]=useState(false); const [videoFailed,setVideoFailed]=useState(false); const [playing,setPlaying]=useState(false);
  const hasImage=validLink(image)&&!imageFailed; const hasVideo=validLink(video)&&!videoFailed;
  const play=(manual=false)=>{ if((manual || !reduce) && ref.current) ref.current.play().then(()=>setPlaying(true)).catch(()=>setPlaying(false)); };
  const stop=()=>{ref.current?.pause();setPlaying(false);};
  return <div className="media" onMouseEnter={()=>play()} onMouseLeave={stop}>
    {hasImage ? <Image src={asset(image!)} alt={title} fill sizes="(max-width: 760px) 100vw, 50vw" style={{objectFit:'cover'}} onError={()=>setImageFailed(true)}/> : <TechnicalFigure kind={kind}/>}
    {hasVideo && <><video ref={ref} className={playing?'playing':''} src={asset(video!)} poster={hasImage?asset(image!):undefined} muted loop playsInline preload="none" aria-label={`${title} experiment preview`} onError={()=>setVideoFailed(true)}/><button className="media-play" onClick={()=>playing?stop():play(true)}>{playing?'Pause preview':'Play preview'}</button></>}
  </div>;
}
