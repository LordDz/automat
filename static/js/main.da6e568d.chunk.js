(this.webpackJsonpautomat=this.webpackJsonpautomat||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/menofwar.23181d39.jpg"},,,,,,function(e,t,n){e.exports=n.p+"static/media/ctop.ae1d04a1.jpg"},function(e,t,n){e.exports=n.p+"static/media/sc2.4ee657cb.jpg"},function(e,t,n){e.exports=n.p+"static/media/wunderling_a.aa535743.jpg"},function(e,t,n){e.exports=n.p+"static/media/sc2a.a209d0fc.jpg"},function(e,t,n){e.exports=n.p+"static/media/hl2.6b780ab5.jpg"},function(e,t,n){e.exports=n.p+"static/media/bms.95335645.jpg"},function(e,t,n){e.exports=n.p+"static/media/aoe2.15c74cfb.jpg"},function(e,t,n){e.exports=n.p+"static/media/wunderling.16e8c66f.jpg"},function(e,t,n){e.exports=n.p+"static/media/steve.0db3df4c.jpg"},function(e,t,n){e.exports=n.p+"static/media/tortoiseisland.a3c26647.jpg"},,function(e,t,n){e.exports=n(46)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(28),n(29),n(30),n(2)),i=n(3);n(31);function m(){var e=Object(l.a)(["\n  display: flex;\n  margin-left: 1em;\n  transition: color 0.3s;\n  color: gray;\n  &::after {\n    content: '\u2bc8';\n    margin: 0 5px;\n  }\n"]);return m=function(){return e},e}var s=i.a.span(m()),u=function(e){var t=function(){for(var t=[],n=0;n<e.links.length;n++)t.push(r.a.createElement("li",{key:n},r.a.createElement("a",{href:"#"+e.links[n].name},e.links[n].title)));return t}();return r.a.createElement("div",{className:"TopMenu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"+e.nameId},r.a.createElement(s,null,"David"))),t))};n(34),n(35);function d(){var e=Object(l.a)(["\n  background-image: ",";\n  background-color: ",";\n  background-repeat: no-repeat;\n  background-size: cover;\n  "]);return d=function(){return e},e}var g=i.a.section(d(),(function(e){return e.bgImage?"url("+e.bgImage+")":""}),(function(e){return e.bgColor})),b=function(e){var t=void 0!==e.className&&null!==e.className?"Container "+e.className:"Container";return r.a.createElement(g,{bgColor:e.bgColor,bgImage:e.bgImg,id:e.nameId,className:t},r.a.createElement("div",{className:"Container__Inner"},e.children))},f=n(12),p=n.n(f),v=function(e){return r.a.createElement(b,{nameId:e.nameId,className:"CTop",bgColor:"#cdcdcd",bgImg:p.a},r.a.createElement("div",{className:"CTop__Center"},r.a.createElement("h1",null,"David Zetterdahl"),r.a.createElement("h2",null,"Frontend & UX & Level Designer & Game Hobbyist & ..")))},E=n(1),h=(n(36),n(37),n(38),function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),o=n[0],c=n[1];return r.a.createElement("button",{className:"GameBox",onClick:function(){o||e.onExpand(e.nr,e.name),c(!o)}},r.a.createElement("h3",null,e.title),r.a.createElement("img",{className:"GameBox__CacheLoad",alt:"",src:"img/bg/games/"+e.bg}))}),C=function(e){var t=e.games.map((function(e,t){return r.a.createElement(h,{key:t,nr:t,name:e.name,bg:e.bg,title:e.title,onExpand:n})}));function n(t,n){e.onChangeGame(n)}return r.a.createElement("div",{className:"RowBox"},t)};n(39);function I(){var e=Object(l.a)(["\n  border: 1px solid black;"]);return I=function(){return e},e}var k=i.a.iframe(I()),x=function(e){var t=void 0!==e.videoUrl&&null!==e.videoUrl&&e.videoUrl.length>0?r.a.createElement(k,{title:"hey",width:"560",height:"315",src:"https://www.youtube.com/embed/"+e.videoUrl,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}):r.a.createElement("div",null);return r.a.createElement("div",{className:"GameDesc"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.text),t)},j=function(e){var t=Object(a.useState)(e.initialBg),n=Object(E.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(e.title),i=Object(E.a)(l,2),m=i[0],s=i[1],u=Object(a.useState)("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "),d=Object(E.a)(u,2),g=d[0],f=d[1],p=Object(a.useState)(""),v=Object(E.a)(p,2),h=v[0],I=v[1];return r.a.createElement(b,{className:"CGames",nameId:e.nameId,bgColor:"#001D38",bgImg:o},r.a.createElement("div",{className:"CGames__Container"},r.a.createElement("div",{className:"CGames__Group"},r.a.createElement(x,{title:m,text:g,videoUrl:h}),r.a.createElement(C,{games:e.games,onChangeGame:function(t){e.games.find((function(e){if(e.name===t){var n=e.videoUrl?e.videoUrl:"";return s(e.title),f("Todo insert text here some time in the future."),I(n),c(e.bg),!0}return!1}))}}))))},w=(n(40),function(e){return r.a.createElement(b,{nameId:e.nameId,className:"CContact",bgColor:"black"},r.a.createElement("div",{className:"CContact__Center"},r.a.createElement("h1",null,r.a.createElement("a",{href:"mailto: david.zetterdahl@hiq.se"},"Say hello?"))))});n(41),n(42),n(43);function N(){var e=Object(l.a)(["\ncolor: ",";\nfont-size: 16px;\nfont-weight: bold;\ntext-shadow: 1px 1px black;"]);return N=function(){return e},e}function y(){var e=Object(l.a)(["background-color: ",";\nborder-radius: 10px;"]);return y=function(){return e},e}var _=i.a.button(y(),(function(e){return e.bgColor})),O=i.a.label(N(),(function(e){return e.color})),B=function(e){var t=e.enabled?e.bgColorActive:"black",n=e.enabled?"white":e.bgColorActive;return r.a.createElement(_,{bgColor:t,className:"ColorButton",onClick:function(){e.onClick(e.idNr)}},r.a.createElement(O,{color:n},e.text))},U=(n(44),function(e){var t=e.enabled?"ColorButtonDesc ColorButtonDesc__Visible":"ColorButtonDesc";return r.a.createElement("div",{className:t},r.a.createElement("p",null,e.text))}),G=function(){var e=Object(a.useState)(!1),t=Object(E.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),l=Object(E.a)(c,2),i=l[0],m=l[1],s=Object(a.useState)(!1),u=Object(E.a)(s,2),d=u[0],g=u[1];function b(e){switch(e){case 1:o(!0),m(!1),g(!1);break;case 2:o(!1),m(!0),g(!1);break;case 3:o(!1),m(!1),g(!0)}}return r.a.createElement("div",{className:"ColorButtonContainer"},r.a.createElement("div",{className:"ColorButtonContainer__Grid"},r.a.createElement(B,{idNr:1,text:"Web Design",bgColorActive:"red",onClick:b,enabled:n}),r.a.createElement(B,{idNr:2,text:"UX Design",bgColorActive:"green",onClick:b,enabled:i}),r.a.createElement(B,{idNr:3,text:"Games",bgColorActive:"#0095ff",onClick:b,enabled:d})),r.a.createElement("div",{className:"ColorButtonContainer__Desc"},r.a.createElement(U,{text:"So many frameworks, so little time.. ",enabled:n}),r.a.createElement(U,{text:"Looking forward to gain more experience and level up.",enabled:i}),r.a.createElement(U,{text:"Retrospelsm\xe4ssan JAM happening soon, see you there? :)",enabled:d})))},D=function(e){return r.a.createElement(b,{nameId:e.nameId,className:"CFrontend",bgColor:"#262626"},r.a.createElement("div",{className:"CFrontend__Center"},r.a.createElement("h2",null,"Who am I ?"),r.a.createElement("p",null,"I don't really know that myself, but here are some of the things I do"),r.a.createElement(G,null)))},S=(n(45),n(13)),A=n.n(S),H=function(e){return r.a.createElement(b,{nameId:e.nameId,bgColor:"#001D38",bgImg:A.a},r.a.createElement("div",{className:"CGamesHeader"},r.a.createElement("h1",null,"When I'm not busy making websites")))},L=n(6),W=n.n(L),F=n(14),q=n.n(F),M=n(15),T=n.n(M),P=n(16),Y=n.n(P),z=n(17),J=n.n(z),R=n(18),X=n.n(R),Z=n(19),K=n.n(Z),Q=n(20),V=n.n(Q),$=n(21),ee=n.n($),te=function(){var e=[{name:"starcraft2",title:"Starcraft II",bg:T.a,videoUrl:"4Ukiu_mSeF0"},{name:"hl2",title:"Half-Life 2",bg:Y.a,videoUrl:"OZtB0Hu1Pqs"},{name:"bms",title:"Black Mesa",bg:J.a,videoUrl:"GpIisyPb2Ls"},{name:"menofwar",title:"Men of War",bg:W.a,videoUrl:"O7w376qiQX4"},{name:"aoe2",title:"Age of Empires II",bg:X.a}],t=[{name:"wunderling",title:"Wunderling",bg:K.a,videoUrl:"YkKnbkvFhDI"},{name:"steve",title:"Super Evil Corps",bg:V.a,videoUrl:"RY1sqcm8dqY"},{name:"tortoise",title:"Tortoise Island",bg:ee.a,videoUrl:"H0dEB0ADw2Y"}],n=r.a.createElement("div",{className:"HomePage__Content"},r.a.createElement(v,{nameId:"top"}),r.a.createElement(D,{nameId:"frontend"}),r.a.createElement(H,{nameId:"gamesHeader"}),r.a.createElement(j,{nameId:"mods",title:"I tend to make mods",initialBg:W.a,games:e}),r.a.createElement(j,{nameId:"games",title:"and a few games",initialBg:q.a,games:t}),r.a.createElement(w,{nameId:"contact"}));return r.a.createElement("div",{className:"HomePage"},r.a.createElement(u,{links:[{title:"Frontend",name:"frontend"},{title:"Mods",name:"mods"},{title:"Games",name:"games"},{title:"Contact",name:"contact"}],nameId:"top"}),n)};var ne=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.da6e568d.chunk.js.map