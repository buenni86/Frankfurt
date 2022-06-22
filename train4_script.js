import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import {track4Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import * as vars from "./vars.js";

WA.onInit(async () => {
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    const sign4a = await WA.room.website.get("sign4a");
    const sign4b = await WA.room.website.get("sign4b");

    const signToTrackMap = new Map ([
        [sign4a, track4Map],
        [sign4b, track4Map]
    ]);

    setTrackContent(signToTrackMap);
    refreshSigns(signToTrackMap);

    WA.room.onEnterZone(vars.programZone, () => {openPopupWithWebsiteYesNo(vars.programPopUp, vars.programMsg, vars.urlProgram)})
    WA.room.onLeaveZone(vars.programZone, () => {closePopupWithWebsite()})
});

export {};
