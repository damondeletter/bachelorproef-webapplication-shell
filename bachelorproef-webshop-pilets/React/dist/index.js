//@pilet v:2(webpackChunkpr_bachelorproefwebshopreact,{})
System.register(["react"],(function(e,t){var r={};return{setters:[function(e){r.Fragment=e.Fragment,r.createElement=e.createElement}],execute:function(){e((()=>{var e={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{function n(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,a=0,i=n.length;a!==t&&i>=0;){"/"===n[--i]&&a++}if(a!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+a+") in the URL path "+e);var o=n.slice(0,i+1);return r.protocol+"//"+r.host+o}t.R=n;var a=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},954:e=>{"use strict";e.exports=r}},n={};function a(t){var r=n[t];if(r!==undefined)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,a),i.exports}a.y=t,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="./";var i,o,d,s={};return(0,a(722).s)(1),i=document,o=a.p+"main.css",(d=i.createElement("link")).setAttribute("data-origin","bachelorproef-webshop-react"),d.type="text/css",d.rel="stylesheet",d.href=o,i.head.appendChild(d),(()=>{"use strict";a.r(s),a.d(s,{setup:()=>i});var e=a(954),t=function(t){var r=t.name,n=t.price,a=t.description,i=t.image,o=t.addBtn;return e.createElement("div",{className:"card"},e.createElement("img",{src:i,alt:"Image header"}),e.createElement("div",null,e.createElement("div",{className:"card-title"},r),e.createElement("div",{className:"space"},e.createElement("p",{className:"card-text"},a),e.createElement("div",{className:"coll"},e.createElement("div",{className:"card-title"},"€",n),o))))},r=function(r){var n=r.products,a=r.AddButton;return e.createElement(e.Fragment,null,e.createElement("div",{className:"outer"},e.createElement("div",{className:"pgrid"},n.map((function(r){return e.createElement(t,{key:r.product_id,name:r.name,price:r.price,description:r.description,image:r.image,addBtn:e.createElement(a,{item:r})})})))))};const n=[{product_id:1,name:"HP Pavilion - 15.6 inch",category:"Laptops",price:999,description:"Deze HP Pavilion 15-eg2025nb laptop is geschikt voor het typen van verslagen en het maken van presentaties.",image:"https://media.s-bol.com/YXGXnLvwXyDn/W8P2lJ/1200x914.jpg"},{product_id:2,name:"AOC U34G3XM - 34 inch",category:"Monitoren",price:299,description:"De AOC U34G3XM is een high-end ultrawide gaming monitor die is ontworpen voor serieuze gamers die de ultieme gaming-ervaring willen beleven.",image:"https://media.s-bol.com/qpZ0ZZplvRBk/EKo8vk/1200x822.jpg"},{product_id:3,name:"HP 280M draadloze muis",category:"Muizen",price:25.49,description:"Werk de hele dag door, met deze draadloze muis die verbonden blijft. Laat niets je productiviteit verstoren met een comfortabel ergonomisch ontwerp en een batterijduur van tot 18 maanden",image:"https://media.s-bol.com/RMpJoMRMBDLY/1jPErYP/550x479.jpg"},{product_id:4,name:"Acer Aspire 3 - 17.3 inch",category:"Laptops",price:499,description:"Multitasken van dagelijkse taken met voldoende opslag en gemiddelde beeldkwaliteit: Deze Acer Aspire 3 A317-53-39S4 laptop is geschikt voor dagelijks gebruik zoals internetten, e-mailen en het typen van verslagen.",image:"https://media.s-bol.com/B9NE2PzlB0r2/289Zw2K/1200x814.jpg"},{product_id:5,name:"Logitech G502 Lightspeed draadloze gaming muis",category:"Muizen",price:99.99,description:"De Logitech G502 Lightspeed draadloze gaming muis is een draadloze gaming muis met een draadloze verbinding",image:"https://media.s-bol.com/ykQMG9XJ13Qg/zAQ0WO/685x1200.jpg"},{product_id:6,name:"Logitech G Pro X draadloze gaming headset",category:"Headsets",price:149.9,description:"De Logitech G Pro X draadloze gaming headset is een draadloze gaming headset met een draadloze verbinding",image:"https://media.s-bol.com/koRk8mQYZOZX/550x735.jpg"},{product_id:7,name:"Logitech K120 - AZERTY BE",category:"Toetsenborden",price:19.99,description:"De Logitech K120 is een eenvoudig toetsenbord met een standaard indeling",image:"https://media.s-bol.com/J6Dl6ogQKlzy/Q13mrLq/1200x501.jpg"},{product_id:8,name:"GXT 833 Thado - Tenkeyless gaming toetsenbord",category:"Toetsenborden",price:25.99,description:"Het GXT 833 Thado Tenkeyless gaming toetsenbord is een gaming toetsenbord met een tenkeyless indeling",image:"https://media.s-bol.com/R8WzlGRKpDGE/76lW3rA/550x250.jpg"},{product_id:9,name:"Trust Mydo - Draadloze muis",category:"Muizen",price:12,description:"De Trust Mydo draadloze muis is een draadloze muis met een draadloze verbinding",image:"https://media.s-bol.com/gMB6gKXzG6JG/VOxV59/550x831.jpg"}];function i(t){t.registerTile("Product",(function(t){var a=t.piral;return e.createElement(r,{products:n,AddButton:function(t){var r=t.item;return e.createElement(a.Extension,{name:"add-button",params:r})}})}))}})(),s})())}}}));
//# sourceMappingURL=index.js.map