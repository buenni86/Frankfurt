import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { track3Map, setTrackContent, refreshSigns } from "./sign_script.js";
import { openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import * as vars from "./vars.js";

WA.onInit(async () => {
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    const sign3a = await WA.room.website.get("sign3a");
    const sign3b = await WA.room.website.get("sign3b");

    const signToTrackMap = new Map([
        [sign3a, track3Map],
        [sign3b, track3Map]
    ]);

    setTrackContent(signToTrackMap);
    refreshSigns(signToTrackMap);

    WA.room.onEnterZone(vars.programZone, () => { openPopupWithWebsiteYesNo(vars.programPopUp, vars.programMsg, vars.urlProgram) })
    WA.room.onLeaveZone(vars.programZone, () => { closePopupWithWebsite() })
});

export { };
