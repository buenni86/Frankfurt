import"./mustache.c5531e42.js";import{b as h}from"./init.8fc33a94.js";WA.onInit(()=>{h().then(()=>{console.log("Scripting API Extra ready")}).catch(i=>console.error(i));var n=void 0,e=!1,l="https://open.spotify.com/embed/playlist/37i9dQZF1DX1LCddwjCqDK?utm_source=generator",p="https://open.spotify.com/embed/playlist/37i9dQZF1DX3h1vasAdBTc?utm_source=generator";function o(){n!==void 0&&(n.close(),n=void 0)}var r="music_classic",t="music_modern",a="directions",s="directions1",c="directions2";WA.room.onEnterZone(r,()=>{n=WA.ui.openPopup("popUpMusicClassic","Klassische Weihnachtslieder?!",[{label:"Her damit!",callback:i=>{WA.nav.openCoWebSite(l),e=!0,o()}}])}),WA.room.onLeaveZone(r,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onEnterZone(t,()=>{n=WA.ui.openPopup("popUpMusicModern","Weihnachtslieder?!",[{label:"Her damit!",callback:i=>{WA.nav.openCoWebSite(p),e=!0,o()}}])}),WA.room.onLeaveZone(t,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onEnterZone(a,()=>{n=WA.ui.openPopup("popUpDirections",`Wegweiser:

Nordosten: Kleiner Weihnachtsmarkt an der Kirche

S\xFCdosten: Der mittelalterliche Weihnachtsmarkt hei\xDFet euch Willkommen!

S\xFCdwesten: Gro\xDFer Parkweihnachtsmarkt

Nordwesten: Die Eisbahn wartet auf dich!`,[{label:"OK",callback:i=>{o()}}])}),WA.room.onLeaveZone(a,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onEnterZone(s,()=>{n=WA.ui.openPopup("popUpDirections1",`Wegweiser:

Nordosten: Kleiner Weihnachtsmarkt an der Kirche

S\xFCdosten: Der mittelalterliche Weihnachtsmarkt hei\xDFet euch Willkommen!

S\xFCdwesten: Gro\xDFer Parkweihnachtsmarkt

Nordwesten: Die Eisbahn wartet auf dich!`,[{label:"OK",callback:i=>{o()}}])}),WA.room.onLeaveZone(s,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)}),WA.room.onEnterZone(c,()=>{n=WA.ui.openPopup("popUpDirections2",`Wegweiser:

Nordosten: Kleiner Weihnachtsmarkt an der Kirche

S\xFCdosten: Der mittelalterliche Weihnachtsmarkt hei\xDFet euch Willkommen!

S\xFCdwesten: Gro\xDFer Parkweihnachtsmarkt

Nordwesten: Die Eisbahn wartet auf dich!`,[{label:"OK",callback:i=>{o()}}])}),WA.room.onLeaveZone(c,()=>{o(),e&&(WA.nav.closeCoWebSite(),e=!1)})});
