import"./mustache.c5531e42.js";WA.onInit(()=>{var a=void 0,e=!1;function o(){a!==void 0&&(a.close(),a=void 0)}var n="needHelp",p="feedback",l="DBPlanet",t="https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte",s="https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_SoZREurD2tJrJwSfyf3bX5UNEczWlNIRkJDNjNUUjZKODUyVE9aNjQ0Uy4u",c="https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure";WA.room.onEnterZone(n,()=>{a=WA.ui.openPopup("needHelpPopup",`Tutorial
ansehen?`,[{label:"OK",className:"primary",callback:r=>{WA.nav.openTab(t),e=!0,o()}}])}),WA.room.onLeaveZone(n,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onEnterZone(p,()=>{a=WA.ui.openPopup("feedbackPopup","M\xF6chtest du ein Feedback geben?",[{label:"Nein",className:"secondary",callback:()=>o()},{label:"Gerne",className:"primary",callback:r=>{WA.nav.openCoWebSite(s),e=!0,o()}}])}),WA.room.onLeaveZone(p,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onEnterZone(l,()=>{a=WA.ui.openPopup("DBPlanetPopup","DB Planet WorkAdventure",[{label:"OK",className:"primary",callback:r=>{WA.nav.openTab(c),e=!0,o()}}])}),WA.room.onLeaveZone(l,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)})});