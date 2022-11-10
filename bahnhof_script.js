import { bootstrapExtra } from "@workadventure/scripting-api-extra";
//import { } from "https://unpkg.com/@workadventure/scripting-api-extra";
//import {track1Map, track2Map, track3Map, track4Map, track5Map, track6Map, setTrackContent, refreshSigns } from "./sign_script.js";
//import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
//import {programMsg, urlProgram } from "./vars.js";
console.log("Script started successfully")

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://web.microsoftstream.com/embed/video/06f916c4-78cf-4b19-9295-01f639b016db?autoplay=true";
var zoneTutorial = "tutorial";


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
WA.room.onEnterZone("start_zone", () => {
   currentPopup =  WA.ui.openPopup("popUpStart","Als Webanwendung läuft WorkAdventure ohne Installation im Browser, auch auf mobilen Geräten!\nIn wenigen Sekunden sind Nutzer so startklar.\nUnsere Umgebungen können so konfiguriert werden, dass sie DB intern (Single Sign On Authentifizierung) oder öffentlich erreichbar sind.\nZu internen Veranstaltungen können einzelne externe Personen zugelassen werden",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("start_zone", () =>{
    closePopUp();
})
WA.room.onEnterZone("workshop_program", () => {
   currentPopup =  WA.ui.openPopup("popUpWorkshop","In Besprechungszonen wird man automatisch mit allen Personen zusammengeschaltet, die sich mit ihrem Avatar dort befinden. Parallele Workshopsessions, Randgespräche, Nachfragen an die Referenten, Frei Bewegung für Teilnehmer – alles kein Problem!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("workshop_program", () =>{
    closePopUp();
})



WA.room.onEnterZone(zoneTutorial, () => {
   currentPopup =  WA.ui.openPopup("popUpTutorial","Einige Webanwendungen die eine Einbindung erlauben, können direkt in WorkAdventure geöffnet werden. So wie unser Tutorialvideo",[
        {
            label: "OK",
            callback: (popup => {
                WA.nav.openCoWebSite(urlTutorial, false, "autoplay;camera;microphone;fullscreen;encrypted-media");
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneTutorial, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

const buttons = [
    {
      label: "Reset",
      className: "error",
      callback: () =>
        (WA.state.votePos = WA.state.voteNeg = WA.state.voteNeut = 0)
    }
  ]

WA.onInit().then(() => {
    console.log("Scripting API ready")
    console.log("Player tags: ", WA.player.tags)
	
    WA.room.onEnterLayer("votePos").subscribe(() => {
      console.log("VotePos: ", WA.state.votePos)
      WA.state.votePos++
    })
    WA.room.onLeaveLayer("votePos").subscribe(() => {
      console.log("VotePos: ", WA.state.votePos)
      if (WA.state.votePos === 0) return
      WA.state.votePos--
    })
    WA.room.onEnterLayer("voteNeg").subscribe(() => {
      console.log("voteNeg: ", WA.state.voteNeg)
      WA.state.voteNeg++
    })
    WA.room.onLeaveLayer("voteNeg").subscribe(() => {
      console.log("voteNeg: ", WA.state.voteNeg)
      if (WA.state.voteNeg === 0) return
      WA.state.voteNeg--
    })
    WA.room.onEnterLayer("voteNeut").subscribe(() => {
      console.log("voteNeut: ", WA.state.voteNeut)
      WA.state.voteNeut++
    })
    WA.room.onLeaveLayer("voteNeut").subscribe(() => {
      console.log("voteNeut: ", WA.state.voteNeut)
      if (WA.state.voteNeut === 0) return
      WA.state.voteNeut--
    })
  
    let voteResetPopup
    WA.room.onEnterLayer("voteRes").subscribe(() => {
      voteResetPopup = WA.ui.openPopup(
        "resetPopup",
        "Soll das Voting zurückgesetzt werden?",
        buttons
      )
    })
    WA.room.onLeaveLayer("voteRes").subscribe(() => {
      voteResetPopup.close()
    })
  
      // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
      bootstrapExtra()
        .then(() => {
          console.log("Scripting API Extra ready")
        })
        .catch(e => console.error(e))
    })
    .catch(e => console.error(e))

export {};
