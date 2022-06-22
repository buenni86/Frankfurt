import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { track5Map, setTrackContent, refreshSigns } from "./sign_script.js";
import { openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import * as vars from "./vars.js";

WA.onInit(async () => {
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    const sign5a = await WA.room.website.get("sign5a");
    const sign5b = await WA.room.website.get("sign5b");

    const signToTrackMap = new Map([
        [sign5a, track5Map],
        [sign5b, track5Map]
    ]);

    setTrackContent(signToTrackMap);
    refreshSigns(signToTrackMap);

    WA.room.onEnterZone(vars.programZone, () => { openPopupWithWebsiteYesNo(vars.programPopUp, vars.programMsg, vars.urlProgram) })
    WA.room.onLeaveZone(vars.programZone, () => { closePopupWithWebsite() })
})

export { };
