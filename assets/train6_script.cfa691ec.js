import{b as c}from"./init.e2c43348.js";import{s as g,r as m,g as e,o as h,c as W,i as b,j as A,u as l,p as P,h as f,f as a}from"./vars.11da54fa.js";WA.onInit(async()=>{c().then(()=>{console.log("Scripting API Extra ready")}).catch(p=>console.error(p));const r=await WA.room.website.get("sign6a"),s=await WA.room.website.get("sign6b"),o=new Map([[r,a],[s,a]]);g(o),m(o),WA.room.onEnterZone(e,()=>{h(f,P,l)}),WA.room.onLeaveZone(e,()=>{W()});var n="technician-informed",i="popUpTechnician",t="Techniker ist informiert.";WA.room.onEnterZone(n,()=>{b(i,t,"OK")}),WA.room.onLeaveZone(n,()=>{A()})});
