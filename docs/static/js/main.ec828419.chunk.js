(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),o=c(4),r=c.n(o),i=(c(10),c(2)),u=(c(11),c.p+"static/media/twitter.9efb098d.svg"),h=function(e){return Object(n.jsxs)("div",{id:"quote-box",className:"quoteBox",children:[Object(n.jsx)("div",{id:"text",className:"quoteBox__quote",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"quoteBox__title-quote",children:"Quote:"}),Object(n.jsx)("span",{className:"quoteBox__description",children:e.quote})]})}),Object(n.jsx)("div",{id:"author",className:"quoteBox__charac",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"quoteBox__title-charac",children:"Character:"}),Object(n.jsx)("span",{className:"quoteBox__description",children:e.character.name})]})}),Object(n.jsx)("div",{id:"house",className:"quoteBox__house",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"quoteBox__title-house",children:"House:"}),Object(n.jsx)("span",{className:"quoteBox__description",children:e.house})]})}),Object(n.jsxs)("div",{id:"buttons",className:"btn",children:[Object(n.jsx)("button",{className:"btn__twitter-btn",children:Object(n.jsxs)("a",{className:"btn__twitter-btn__link",href:"https://twitter.com/intent/tweet?text=".concat(e.quote," - ").concat(e.character.name,"-").concat(e.house),target:"_blank",rel:"noopener noreferrer",children:["Tweet it!",Object(n.jsx)("img",{src:u,alt:"twitter-logo",className:"btn__twitter-btn__logo"})]})}),Object(n.jsx)("button",{id:"new-quote",className:"new-quote-btn",onClick:function(t){var c=t.currentTarget.value;e.handleClick(c)},children:Object(n.jsx)("span",{className:"new-quote-btn__btn-text",children:"New Quote"})})]})]})},l=function(){return fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.error("Se ha producido un error:",e)}))};c(12);var j=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],o=Object(s.useState)(""),r=Object(i.a)(o,2),u=r[0],j=r[1],b=Object(s.useState)(""),d=Object(i.a)(b,2),x=d[0],m=d[1];return Object(s.useEffect)((function(){l().then((function(e){a(e.sentence),j(e.character),m(e.character.house.name)}))}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"App__mainBox",children:[Object(n.jsx)("div",{className:"title-box",children:Object(n.jsx)("h1",{className:"App__mainBox__title",children:"Choose yours Game of Thrones Quote"})}),Object(n.jsx)(h,{quote:c,character:u,house:x,handleClick:function(){l().then((function(e){a(e.sentence),j(e.character),m(e.character.house.name)}))}})]})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.ec828419.chunk.js.map