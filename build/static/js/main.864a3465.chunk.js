(this["webpackJsonpjoke-app"]=this["webpackJsonpjoke-app"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(10),n(1)),i=Object(a.memo)((function(e){var t=e.setup,n=e.punchline;return r.a.createElement("li",{className:"joke"},r.a.createElement("h2",null,t),r.a.createElement("h2",null,n))})),s=n(4),m=n.n(s),u=Object(a.memo)((function(){return r.a.createElement("svg",{width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"darkgrey"},r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},r.a.createElement("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),r.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))})),f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(l.a)(c,2),f=s[0],p=s[1],h=function(){p(!0),fetch("https://official-joke-api.appspot.com/random_ten").then((function(e){return e.json()})).then((function(e){m.a.isArray(e)?o(e.slice(0,5)):"error"===e.type&&alert(e.message),p(!1)}))};return Object(a.useEffect)((function(){h()}),[]),r.a.createElement("div",{className:"card-wrapper"},!f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(i,Object.assign({key:e.id},e))}))),r.a.createElement("div",{className:"btn-refresh",onClick:h},"Another 5 jokes")),f&&r.a.createElement(u,null))};n(13);var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"AfterHour Jokes"),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports=n(14)}},[[5,1,2]]]);
//# sourceMappingURL=main.864a3465.chunk.js.map