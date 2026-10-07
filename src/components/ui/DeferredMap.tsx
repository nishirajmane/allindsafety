"use client";
import { useState, lazy, Suspense } from "react";
const Map = lazy(()=>import('@/components/ui/map').then(module=>({default:module.BasicMap})));
export function DeferredMap() { const [show,setShow] = useState(false); return <div className="deferred-map">{show ? <Suspense fallback={<p>Loading the office map…</p>}><Map/></Suspense> : <div><span>SANGAMWADI / PUNE</span><h3>Drop by. Say hello.</h3><p>Find our base and plan your visit.</p><button className="action action-dark" onClick={()=>setShow(true)}>Load interactive map</button><a href="https://www.google.com/maps/search/?api=1&query=Sangamwadi%2C+Pune" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></div>}</div>; }
