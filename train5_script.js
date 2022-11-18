import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { track5Map, setTrackContent, refreshSigns } from "./sign_script.js";
import { openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
import * as vars from "./vars.js";

var currentPopup = undefined;

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

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
		
    
})

WA.room.onEnterZone("program", () => { 
	currentPopup =  WA.ui.openPopup("popUpProgram","Was. Ein. Event. Über 1.300 Techies aus dem gesamten Konzern kamen vom 10. bis 12. Mai 2022 auf der DB TechCon zusammen, um sich intensiv über das breite IT- und Technikspektrum der Deutschen Bahn auszutauschen - und mehr.\n\n All das komplett virtuell auf der riesigen DB TechCon Map in WorkAdventure.\nIn über 100 Beiträgen in Form von Vorträgen, Workshops und Diskussionsrunden wurden Best Practices und Fails ausgetauscht, Wissen geteilt, genetzwerkt, diskutiert, gewerkelt und nicht zuletzt:\ngemeinsam Spaß gehabt!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]); 
		})
    
	
	WA.room.onLeaveZone("program", () => { closePopUp() })
export { };
