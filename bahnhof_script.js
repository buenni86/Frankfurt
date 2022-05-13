import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import {track1Map, track2Map, track3Map, track4Map, track5Map, track6Map, setTrackContent, refreshSigns } from "./sign_script.js";
import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import {programMsg, urlProgram } from "./vars.js";

/***********************************************
 * Sign functions
 ***********************************************/
const sign1 = await WA.room.website.get("sign1");
const sign2 = await WA.room.website.get("sign2");
const sign3 = await WA.room.website.get("sign3");
const sign4 = await WA.room.website.get("sign4");
const sign5 = await WA.room.website.get("sign5");
const sign6 = await WA.room.website.get("sign6");

const signToTrackMap = new Map ([
    [sign1, track1Map],
    [sign2, track2Map],
    [sign3, track3Map],
    [sign4, track4Map],
    [sign5, track5Map],
    [sign6, track6Map]
]);

setTrackContent(signToTrackMap);
refreshSigns(signToTrackMap);

/***********************************************
 * Program pop up functions
 ***********************************************/

const zone2PopUpMap = new Map ([
    ["program1", "popUpProgram1"],
    ["program2", "popUpProgram2"],
    ["program3", "popUpProgram3"],
    ["program4", "popUpProgram4"],
    ["program5", "popUpProgram5"],
    ["program6", "popUpProgram6"],
    ["program7", "popUpProgram7"]
]);

for (const progZone of zone2PopUpMap.keys()) {
    WA.room.onEnterZone(progZone, () => {openPopupWithWebsiteYesNo(zone2PopUpMap.get(progZone), programMsg, urlProgram)})
    WA.room.onLeaveZone(progZone, () => {closePopupWithWebsite()})
}
