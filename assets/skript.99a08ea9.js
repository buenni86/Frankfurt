import"./mustache.c5531e42.js";import{b as h}from"./init.8fc33a94.js";import"https://unpkg.com/@workadventure/scripting-api-extra@^1";h().then(()=>{console.log("Scripting API Extra ready")}).catch(a=>console.error(a));WA.onInit(async()=>{var a=void 0,o=!1,r="https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";function e(){a!==void 0&&(a.close(),a=void 0)}var l="evs-info",p="intro",u="tutorial",s="tutorial1",c="tutorial2",d="guide",W="guide1",m="guide2",b="pong",v="mailto:DB.Systel.CommunicationServices.EVS@deutschebahn.com",A="Du hast eine Frage zu WorkAdventure, aber wir sind gerade nicht da? Schreib uns!",f=`Willkommen bei unserer WorkAdventure Worldtour!

Zur Bewegung deines Avatar nutze einfach die Pfeiltasten der Tastatur!
F\xFCr weitere Infos besuche unser Tutorial oder unseren WorkAdventure-Stand!
Nutze die Chance und gehe auf Entdeckungstour durch unser 16-Bit Universum,
um M\xF6glichkeiten f\xFCr spontanen Austausch,
Interaktion und Zusammenarbeiten kennenzulernen.
Vielleicht findet sich bei unserer virtuellen Besichtigungstour sogar der perfekten Ort des zuk\xFCnftiges Wunschb\xFCros oder eine digitale Eventlocation.

Wir w\xFCnschen viel Spa\xDF!`,i=`Wegweiser

Hauptbahnhof (Norden): Stiller Bereich
Dicker Bulle (Nordwesten): Worms
Green Pub (Nordosten): Pong
Marktstand (Zentral): Treffpunkt
Cocktailbar (S\xFCdwesten): Treffpunkt & Cocktails
Dancehall (S\xFCdosten): Musik
Silberturm (S\xFCden): Minir\xE4tsel &
Workadventure@DB Infostand`,t="M\xF6chten Sie sich das Tutorial ansehen?",g=`Pong gegeneinander?

1.W\xE4hlen Sie Online-Mehrspielermodus
2.W\xE4hlen Sie 'Beil\xE4ufig'
3.Geben Sie eine Zimmernummer ein und klicken Sie auf 'Zimmer \xE4ndern'
4. Teilen Sie die Zimmernummer Ihrem Partner mit

Die Steuerung funktioniert mit den Pfeiltasten.`;WA.room.onEnterZone(p,()=>{a=WA.ui.openPopup("popUpIntro",f,[{label:`Weltreise
starten!`,callback:n=>{e()}},{label:"Tutorial",className:"primary",callback:n=>{WA.openTab(r),o=!0,e()}}]),WA.onInit().then(async()=>{var n=await WA.player.getPosition();WA.camera.set(n.x,n.y,2240,400,!1,!1)})}),WA.room.onLeaveZone(p,()=>{e()}),WA.room.onEnterZone(l,()=>{a=WA.ui.openPopup("popUpEVS",A,[{label:"Schlie\xDFen",callback:n=>{o=!1,e()}},{label:"\u{1F4E7} Team EVS \u{1F4E7}",className:"primary",callback:n=>{WA.nav.openTab(v),o=!0,e()}}])}),WA.room.onLeaveZone(l,()=>{e()}),WA.room.onEnterZone(u,()=>{a=WA.ui.openPopup("popUpTutorial",t,[{label:"Nein",callback:n=>{o=!1,e()}},{label:"Ja",callback:n=>{WA.openTab(r),o=!0,e()}}])}),WA.room.onEnterZone(s,()=>{a=WA.ui.openPopup("popUpTutorial1",t,[{label:"Nein",callback:n=>{o=!1,e()}},{label:"Ja",callback:n=>{WA.openTab(r),o=!0,e()}}])}),WA.room.onEnterZone(c,()=>{a=WA.ui.openPopup("popUpTutorial2",t,[{label:"Nein",callback:n=>{o=!1,e()}},{label:"Ja",callback:n=>{WA.openTab(r),o=!0,e()}}])}),WA.room.onLeaveZone(u,()=>{e(),o&&(WA.nav.closeCoWebSite(),o=!1)}),WA.room.onLeaveZone(s,()=>{e(),o&&(WA.nav.closeCoWebSite(),o=!1)}),WA.room.onLeaveZone(c,()=>{e(),o&&(WA.nav.closeCoWebSite(),o=!1)}),WA.room.onEnterZone(b,()=>{a=WA.ui.openPopup("popUpPong",g,[{label:"OK",callback:n=>{e()}}])}),WA.room.onLeaveZone(b,()=>{e()}),WA.room.onEnterZone(d,()=>{a=WA.ui.openPopup("popUpGuide",i,[{label:"OK",callback:n=>{e()}}])}),WA.room.onEnterZone(W,()=>{a=WA.ui.openPopup("popUpGuide1",i,[{label:"OK",callback:n=>{e()}}])}),WA.room.onEnterZone(m,()=>{a=WA.ui.openPopup("popUpGuide2",i,[{label:"OK",callback:n=>{e()}}])}),WA.room.onLeaveZone(d,()=>{e()}),WA.room.onLeaveZone(W,()=>{e()}),WA.room.onLeaveZone(m,()=>{e()})});
