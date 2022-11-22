import { bootstrapExtra } from "@workadventure/scripting-api-extra";
//import { } from "https://unpkg.com/@workadventure/scripting-api-extra";
//import {track1Map, track2Map, track3Map, track4Map, track5Map, track6Map, setTrackContent, refreshSigns } from "./sign_script.js";
//import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
//import {programMsg, urlProgram } from "./vars.js";
console.log("Script started successfully")

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://web.microsoftstream.com/embed/video/ca24bcea-3cab-4878-8b34-65e6bf87939f?autoplay=true";
var zoneTutorial = "tutorial";


		
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function closeAfterTime() {
	
    await timeout(15000);
	closePopUp();
}




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
	
var currentPopup =  WA.ui.openPopup("popUpStart","Willkommen bei unserer Live-Demo von DB WorkAdventure zum Digital Workplace Anwendertag!\n\nErkunde unsere Umgebung mit deinem Avatar, um die verschiedenen Funktionen und Möglichkeiten kennenzulernen.\nIm Programm des Anwendertages kannst du unseren Vortrag zu digital Eventplattformen bzw. unseren Markstand zur ortsunabhängigen Zusammenarbeit in virtuellen Büros besuchen, um mehr zu erfahren!",[
        
		{
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
 

closeAfterTime();





WA.room.onEnterZone("start_zone", () => {
	closePopUp();
	currentPopup =  WA.ui.openPopup("popUpStart","Willkommen bei unserer Live-Demo von DB WorkAdventure zum Digital Workplace Anwendertag!\n\nErkunde unsere Umgebung mit deinem Avatar, um die verschiedenen Funktionen und Möglichkeiten kennenzulernen.\nIm Programm des Anwendertages kannst du unseren Vortrag zu digital Eventplattformen bzw. unseren Markstand zur ortsunabhängigen Zusammenarbeit in virtuellen Büros besuchen, um mehr zu erfahren!",[
	
		{
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);

	
		
		
});
		
		

WA.room.onLeaveZone("start_zone", () =>{
    closePopUp();
})



 
WA.room.onEnterZone("koch_program", () => {
   currentPopup =  WA.ui.openPopup("popUpKoch","Auch Videos von Plattformen wie MS Streams können als Fenster eingebettet werden!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("koch_program", () =>{
    closePopUp();
})
 
WA.room.onEnterZone("startImage_program", () => {
   currentPopup =  WA.ui.openPopup("popUpImage","Als Webanwendung läuft WorkAdventure ohne Installation im Browser, auch auf mobilen Geräten! In wenigen Sekunden sind Nutzer so startklar. Unsere Umgebungen können so konfiguriert werden, dass sie DB intern (Single Sign On Authentifizierung) oder öffentlich erreichbar sind. Auch können einzelne externe Personen Zugang erhalten.\n\nIn der Übersicht unserer Umgebung siehst du welche dort eingebauten Funktionen du entdecken kannst!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("startImage_program", () =>{
    closePopUp();
})





WA.room.onEnterZone("main_program", () => {
   currentPopup =  WA.ui.openPopup("popUpMain","Auch LiveStreams von DB WebCast sind integrierbar und können in die Umgebung eingebunden werden!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("main_program", () =>{
    closePopUp();
})
WA.room.onEnterZone("gif_program", () => {
   currentPopup =  WA.ui.openPopup("popUpGif","Informationsausspielung an Infobildschirmen?\nAuch virtuell kein Problem!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("gif_program", () =>{
    closePopUp();
})


WA.room.onEnterZone("grie_program", () => {
   currentPopup =  WA.ui.openPopup("popUpGrie","Alternativ können Videos auch direkt in die Umgebung integriert werden!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("grie_program", () =>{
    closePopUp();
})


WA.room.onEnterZone("program7", () => {
   currentPopup =  WA.ui.openPopup("popUpProgram7","Webinhalte die nicht direkt in WorkAdventure darstellbar sind,\n können stattdessen verlinkt werden!\n\n An unserem Fahrkartenautomat findest du z.B. die Bestellung von Mitarbeiterfahrkarten!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }
		]);
})

WA.room.onLeaveZone("program7", () =>{
    closePopUp();
})
WA.room.onEnterZone("ticket_program", () => {
   currentPopup =  WA.ui.openPopup("popUpTicket","Mitarbeiterfahrkarten bestellen?",[
		{
            label: "Bestellen",
            callback: (popup => {
				WA.nav.openTab("https://www.db-reisemarkt.de/reisemarkt/bahnangebote/inland/ma_fahrkarten_bestellung-8136358#")
                closePopUp();
            })
        }
		]);
})

WA.room.onLeaveZone("ticket_program", () =>{
    closePopUp();
})
WA.room.onEnterZone("ticket2_program", () => {
   currentPopup =  WA.ui.openPopup("popUpTicket2","Mitarbeiterfahrkarten bestellen?",[
		{
            label: "Bestellen",
            callback: (popup => {
				WA.nav.openTab("https://www.db-reisemarkt.de/reisemarkt/bahnangebote/inland/ma_fahrkarten_bestellung-8136358#")
                closePopUp();
            })
        }
		]);
})

WA.room.onLeaveZone("ticket2_program", () =>{
    closePopUp();
})
WA.room.onEnterZone("program6", () => {
   currentPopup =  WA.ui.openPopup("popUpProgram6","Eingebundene Webinhalte können Workshopformate unterstützen oder unterhalten und zum Vernetzen anregen!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("program6", () =>{
    closePopUp();
})
WA.room.onEnterZone("crossing_program", () => {
   currentPopup =  WA.ui.openPopup("popUpCrossing","Kartenübergänge ermöglichen einen nahtlosen Übergang zwischen zwei Umgebungen.\n\nSo kombinierst du verschiedene Bereiche passend für dein Event!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("crossing_program", () =>{
    closePopUp();
})

WA.room.onEnterZone("portal_program", () => {
   currentPopup =  WA.ui.openPopup("popUpPortal","Auch im Arbeitsalltag sind unsere Umgebung als virtuelles Büro nutzbar!\n\nSo bringen wir Teamgefühl, Austausch und spontane Gespräche zur Abstimmung geht aber verloren.\n Wir ändern das und bringen das Bürofeeling ins Homeoffice",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("portal_program", () =>{
    closePopUp();
})

WA.room.onEnterZone("jaz_program", () => {
   currentPopup =  WA.ui.openPopup("popUpJaz","Für  einen noch stärkeren Konferenz- und Eventservice lässt sich DB WorkAdventure problemlos in JAZ integrieren!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("jaz_program", () =>{
    closePopUp();
})

WA.room.onEnterZone("choices_program", () => {
   currentPopup =  WA.ui.openPopup("popUpChoices","Abstimmungen der anderen Art!\n\nMit unseren interaktiven Elementen gibst du durch die Positionierung deines Avatars deine Stimme ab",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("choices_program", () =>{
    closePopUp();
})



WA.room.onEnterZone("sign_program", () => {
   currentPopup =  WA.ui.openPopup("popUpSigns","Texte und Beschriftungen können durch Moderatoren jederzeit angepasst werden",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("sign_program", () =>{
    closePopUp();
})






WA.room.onEnterZone("schalter_program", () => {
   currentPopup =  WA.ui.openPopup("popUpSchalter","Netzwerk-Bereiche bringst du Leute durch Aktivitäten wie Speed-Networking zusammen",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("schalter_program", () =>{
    closePopUp();
})

WA.room.onEnterZone("schalter1_program", () => {
   currentPopup =  WA.ui.openPopup("popUpSchalter1","Was ist deine Lieblingserinnerung an eine Bahnreise?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("schalter1_program", () =>{
    closePopUp();
})

WA.room.onEnterZone("schalter2_program", () => {
   currentPopup =  WA.ui.openPopup("popUpSchalter2","Seit wann arbeitest du bei der Bahn?\n In welchen Bereichen warst du aktiv?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("schalter2_program", () =>{
    closePopUp();
})
WA.room.onEnterZone("schalter3_program", () => {
   currentPopup =  WA.ui.openPopup("popUpSchalter3","Was ist dein Lieblingsbuch?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("schalter3_program", () =>{
    closePopUp();
})
WA.room.onEnterZone("schalter4_program", () => {
   currentPopup =  WA.ui.openPopup("popUpSchalter4","Welchen Star hast du schonmal getroffen oder möchtest einmal treffen?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("schalter4_program", () =>{
    closePopUp();
})

WA.room.onEnterZone("schalter5_program", () => {
   currentPopup =  WA.ui.openPopup("popUpSchalter5","Für was ist deine Abteilung zuständig?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("schalter5_program", () =>{
    closePopUp();
})

WA.room.onEnterZone("workshop_program", () => {
   currentPopup =  WA.ui.openPopup("popUpWorkshop","In Besprechungszonen wird man automatisch mit allen Personen zusammengeschaltet,\n die sich mit ihrem Avatar dort befinden.\n\n Parallele Workshopsessions, Randgespräche, Nachfragen an die Referenten, Frei Bewegung für Teilnehmer – alles kein Problem!",[
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

WA.room.onEnterZone("worldtour_program", () => {
   currentPopup =  WA.ui.openPopup("popUpWorldtour","Umgebungen sind vollständig individualisierbar, alternativ kannst du die zu deinem Event passende Standardkarten wählen und mit uns anpassen!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("worldtour_program", () =>{
    closePopUp();
})
WA.room.onEnterZone("whiteboard_program", () => {
   currentPopup =  WA.ui.openPopup("popUpWhiteboard","Auch das Conceptboard-Whiteboard ist in die Umgebung integrierbar.",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone("whiteboard_program", () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneTutorial, () => {
	
	
	//<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/ca24bcea-3cab-4878-8b34-65e6bf87939f?autoplay=false&showinfo=true" allowfullscreen style="border:none;"></iframe>
	WA.nav.openCoWebSite(urlTutorial, false, "autoplay;camera;microphone;fullscreen;encrypted-media");
   isCoWebSiteOpened = true;
   currentPopup =  WA.ui.openPopup("popUpTutorial","Einige Webanwendungen die eine Einbindung erlauben, können direkt in WorkAdventure geöffnet werden.\n\n So wie unser Tutorialvideo",[
        {
            label: "OK",
            callback: (popup => {
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



export {};
