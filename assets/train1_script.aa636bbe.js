import{b as n}from"./init.236350a7.js";import{s as i,r as p,t as a}from"./sign_script.8b8c276b.js";import{p as r,o as g,c,u as m,a as b,b as W}from"./vars.c54db3b0.js";WA.onInit(async()=>{n().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e));const s=await WA.room.website.get("sign1a"),t=await WA.room.website.get("sign1b"),o=new Map([[s,a],[t,a]]);i(o),p(o),WA.room.onEnterZone(r,()=>{g(W,b,m)}),WA.room.onLeaveZone(r,()=>{c()})});
