(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(6),c=t.n(r),i=(t(12),t(4)),l=t(1),u=function(e){var n=Object(o.useState)(e?e.name:""),t=Object(l.a)(n,2),r=t[0],c=t[1],i=Object(o.useState)(e?e.power:""),u=Object(l.a)(i,2),m=u[0],s=u[1],p=function(e){"name"===e.target.name?c(e.target.value):s(e.target.value)};return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"200px"}},a.a.createElement("input",{value:r,name:"name",onChange:p})," Super Hero Name",a.a.createElement("input",{value:m,name:"superpower",onChange:p})," SuperPowers",a.a.createElement("button",{onClick:e.edit?function(){fetch(window.location.pathname+"update/"+r,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({formerName:e.name,formerPowers:e.power,name:r,power:m})}),e.editHero(r,m)}:function(){e.addHero(r,m),fetch(window.location.pathname+"add",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:r,powers:m})}).then((function(){s(""),c("")}))}}," Add"))},m=function(e){var n=Object(o.useState)(!1),t=Object(l.a)(n,2),r=t[0],c=t[1];return Object(o.useEffect)((function(){return function(){}}),[c]),a.a.createElement(a.a.Fragment,null,r?a.a.createElement(u,{editHero:function(n,t){e.editHero(n,t,e.index),c(!1)},edit:!0,name:e.hero.name,power:e.hero.superpower}):a.a.createElement("div",null,a.a.createElement("h1",null,e.hero.name),a.a.createElement("h2",null,e.hero.superpower)),a.a.createElement("button",{onClick:function(){console.log(e.hero.name),fetch(window.location.pathname+"delete/"+e.hero.name,{method:"DELETE"}).then((function(){console.log("joao"),e.delete(e.hero.name)}))}}," remove"),a.a.createElement("button",{onClick:function(){c(!0)}},"Edit"))},s=function(){var e=Object(o.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(!1),s=Object(l.a)(c,2),p=s[0],d=s[1],f=function(e){console.log(e),console.log(t);var n=Object(i.a)(t);n.filter((function(e,n){e.name})),d(!0),r(n)},h=function(e,n,o){var a=Object(i.a)(t);a[o].name=e,a[o].superpower=n,r(a)};return Object(o.useEffect)((function(){return console.log("mount"),fetch(window.location.pathname+"list").then((function(e){return e.json()})).then((function(e){return r(e)})),function(){console.log("unmount")}}),[p]),a.a.createElement("ul",null,t.map((function(e,n){return a.a.createElement(m,{editHero:h,delete:f,hero:e,index:n,key:n})})),a.a.createElement(u,{addHero:function(e,n){var o=Object(i.a)(t);o.push({name:e,superpower:n}),r(o),d(!0)}}))},p=(t(13),function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f0b9af14.chunk.js.map