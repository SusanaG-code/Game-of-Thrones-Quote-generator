(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(4),o=c.n(r),i=(c(10),c(2)),u=(c(11),function(e){return Object(n.jsxs)("div",{id:"quote-box",className:"quote-box",children:[Object(n.jsx)("div",{id:"text",className:"text",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"quote",children:"Quote:"})," ",Object(n.jsx)("span",{children:e.quote})]})}),Object(n.jsx)("div",{id:"author",className:"author",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"author-title",children:"Character:"})," ",e.character.name]})}),Object(n.jsx)("div",{id:"house",className:"house",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"house-title",children:"House:"})," ",e.house]})}),Object(n.jsx)("div",{id:"buttons",className:"btn",children:Object(n.jsx)("button",{id:"new-quote",onClick:function(t){var c=t.currentTarget.value;e.handleClick(c)},children:"New Quote"})})]})}),h=function(){return fetch("https:game-of-thrones-quotes.herokuapp.com/v1/random").then((function(e){return e.json()})).then((function(e){return e}))};c(12);var j=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),o=Object(i.a)(r,2),j=o[0],l=o[1],d=Object(s.useState)(""),b=Object(i.a)(d,2),O=b[0],x=b[1];return Object(s.useEffect)((function(){h().then((function(e){a(e.sentence),l(e.character),x(e.character.house.name)}))}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"main-box",children:[Object(n.jsx)("div",{className:"title-box",children:Object(n.jsx)("h1",{className:"title",children:"Choose your Game of Thrones Quotess"})}),Object(n.jsx)(u,{quote:c,character:j,house:O,handleClick:function(){h().then((function(e){a(e.sentence),l(e.character),x(e.character.house.name)}))}})]})})},l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),l()}],[[13,1,2]]]);
//# sourceMappingURL=main.b9694161.chunk.js.map