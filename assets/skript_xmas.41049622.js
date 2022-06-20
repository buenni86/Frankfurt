import"./mustache.aa283466.js";var o=void 0,e=!1,l="https://open.spotify.com/embed/playlist/37i9dQZF1DX1LCddwjCqDK?utm_source=generator",p="https://open.spotify.com/embed/playlist/37i9dQZF1DX3h1vasAdBTc?utm_source=generator";function n(){o!==void 0&&(o.close(),o=void 0)}var r="music_classic",a="music_modern",t="directions",s="directions1",c="directions2";WA.room.onEnterZone(r,()=>{o=WA.ui.openPopup("popUpMusicClassic","Klassische Weihnachtslieder?!",[{label:"Her damit!",callback:i=>{WA.nav.openCoWebSite(l),e=!0,n()}}])});WA.room.onLeaveZone(r,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(a,()=>{o=WA.ui.openPopup("popUpMusicModern","Weihnachtslieder?!",[{label:"Her damit!",callback:i=>{WA.nav.openCoWebSite(p),e=!0,n()}}])});WA.room.onLeaveZone(a,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(t,()=>{o=WA.ui.openPopup("popUpDirections",`Wegweiser:

Nordosten: Kleiner Weihnachtsmarkt an der Kirche

S\xFCdosten: Der mittelalterliche Weihnachtsmarkt hei\xDFet euch Willkommen!

S\xFCdwesten: Gro\xDFer Parkweihnachtsmarkt

Nordwesten: Die Eisbahn wartet auf dich!`,[{label:"OK",callback:i=>{n()}}])});WA.room.onLeaveZone(t,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(s,()=>{o=WA.ui.openPopup("popUpDirections1",`Wegweiser:

Nordosten: Kleiner Weihnachtsmarkt an der Kirche

S\xFCdosten: Der mittelalterliche Weihnachtsmarkt hei\xDFet euch Willkommen!

S\xFCdwesten: Gro\xDFer Parkweihnachtsmarkt

Nordwesten: Die Eisbahn wartet auf dich!`,[{label:"OK",callback:i=>{n()}}])});WA.room.onLeaveZone(s,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});WA.room.onEnterZone(c,()=>{o=WA.ui.openPopup("popUpDirections2",`Wegweiser:

Nordosten: Kleiner Weihnachtsmarkt an der Kirche

S\xFCdosten: Der mittelalterliche Weihnachtsmarkt hei\xDFet euch Willkommen!

S\xFCdwesten: Gro\xDFer Parkweihnachtsmarkt

Nordwesten: Die Eisbahn wartet auf dich!`,[{label:"OK",callback:i=>{n()}}])});WA.room.onLeaveZone(c,()=>{n(),e&&(WA.nav.closeCoWebSite(),e=!1)});
