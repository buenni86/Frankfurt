import"./mustache.aa283466.js";import{s as i,r as m,o as c,u as w,p as W,c as M,t as P,a as b,b as k,d as A,e as U,f}from"./vars.be9f9cdc.js";WA.onInit(async()=>{const s=await WA.room.website.get("sign1"),p=await WA.room.website.get("sign2"),t=await WA.room.website.get("sign3"),e=await WA.room.website.get("sign4"),g=await WA.room.website.get("sign5"),n=await WA.room.website.get("sign6"),a=new Map([[s,P],[p,b],[t,k],[e,A],[g,U],[n,f]]);i(a),m(a);const r=new Map([["program1","popUpProgram1"],["program2","popUpProgram2"],["program3","popUpProgram3"],["program4","popUpProgram4"],["program5","popUpProgram5"],["program6","popUpProgram6"],["program7","popUpProgram7"]]);for(const o of r.keys())WA.room.onEnterZone(o,()=>{c(r.get(o),W,w)}),WA.room.onLeaveZone(o,()=>{M()})});
