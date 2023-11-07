(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>b});var o=t(537),a=t.n(o),i=t(645),r=t.n(i),d=t(667),c=t.n(d),A=new URL(t(937),t.b),s=new URL(t(237),t.b),l=new URL(t(571),t.b),p=new URL(t(54),t.b),m=new URL(t(910),t.b),u=r()(a()),f=c()(A),g=c()(s),C=c()(l),h=c()(p),B=c()(m);u.push([n.id,`html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root{\n    font-size: 18px;\n    --fontstack: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    --boldRed: #dc2626;\n    --darkRed: #b91c1c;\n}\n\n@font-face{\n    font-family: 'Roboter';\n    src: url(${f}) format(truetype),\n        url(${g}) format(truetype),\n        url(${C}) format(truetype),\n        url(${h}) format(truetype);\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody{\n    height: 100vh;\n    font-family: 'Roboter' ,var(--fontstack);\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* header styling */\n\nheader{\n    height: 95px;\n    background-color: var(--boldRed);\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);\n    display: grid;\n    grid-template-columns: 1fr repeat(3, 1fr) 6fr;\n    grid-auto-flow: column;\n    align-items: center;\n    flex: 0 0 auto;\n}\n\n.header,\n.home{\n    color: white;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n}\n\n.name{\n    font-size: 3.3rem;\n    font-weight: 800;\n    font-style: italic;\n    margin-right: 5px;\n}\n\n.icon {\n    width: 75px;\n    height: 75px;\n}\n\n.navBttn {\n    height: 90%;\n    font-size: 1.3rem;\n    background-color: var(--boldRed);\n    border: none;\n    border-left: 1px solid white;\n}\n\n.navBttn:hover {\n    background-color: var(--darkRed);\n}\n\n/* home page styling */\n\n.home-container {\n    flex: 1 0 auto;\n    margin-top: 50px;\n    padding-bottom: 50px;\n}\n\n.home-content {\n    height: 960px;\n    width: 640px;\n    background-image: url(${B});\n    background-size: cover;\n    margin: 0 auto 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.home-text,\n.announcement {\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.35);\n    padding: 10px 0px;\n}\n\n.title,\n.message,\n.ann-mssg {\n    width: 90%;\n    text-align: center;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.title {\n    font-size: 2.7rem;\n    font-weight: 700;\n    margin-bottom: 30px;\n}\n\n.message {\n    font-size: 1.4rem;\n    line-height: 1.5;\n    margin-bottom: 10px;\n}\n\n.ann-mssg {\n    font-size: 3rem;\n    font-style: italic;\n    border: 2px dashed white;\n    border-radius: 15px;\n}\n\n/* contact page styling */\n\n.contact-container {\n    width: 70%;\n    margin-top: 50px;\n    padding-bottom: 50px;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-gap: 20px;\n    flex: 1 0 auto;\n}\n\n.hours-info {\n    grid-column: 1;\n    grid-row: 1;\n}\n\n.locations-info {\n    grid-column: 1;\n    grid-row: 2;\n}\n\n.con-info {\n    grid-column: 2;\n    grid-row: 1/3;\n}\n\n.container {\n    border: 3px solid black;\n    border-radius: 15px;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.heading {\n    font-size: 1.7rem;\n    font-weight: bold;\n}\n\n.small-heading {\n    font-size: 1.1rem;\n    font-weight: 600;\n}\n\n.container > p,\n.container > .heading,\n.container > div,\n.container > li {\n    margin-left: 10px;\n}\n\n/* menu page styling */\n\n.menu-page-container {\n    margin-top: 50px;\n    padding-bottom: 50px;\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-title {\n    background-color: var(--boldRed);\n    color: white;\n    font-size: 2.8rem;\n    font-weight: bold;\n    font-style: italic;\n    margin-bottom: 35px;\n    padding: 0px 10px;\n    flex: 1 0 auto;\n}\n\n.menu-items-container {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-gap: 45px;\n    flex: 1 0 auto;\n}\n\n.menu-title,\n.menu-item {\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);\n}\n\n.menu-item {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n}\n\n.food-image {\n    height: 300px;\n    width: 300px;\n    flex: 0 0 auto;\n}\n\n.food-name {\n    background-color: var(--boldRed);\n    color: white;\n    text-align: center;\n    font-size: 1.3rem;\n    font-weight: bold;\n    flex: 1 1 auto;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;IACI,eAAe;IACf,kIAAkI;IAClI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;;;gEAGiD;IACjD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA,mBAAmB;;AAEnB;IACI,YAAY;IACZ,gCAAgC;IAChC,2CAA2C;IAC3C,aAAa;IACb,6CAA6C;IAC7C,sBAAsB;IACtB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,gCAAgC;IAChC,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,gCAAgC;AACpC;;AAEA,sBAAsB;;AAEtB;IACI,cAAc;IACd,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,yDAAiD;IACjD,sBAAsB;IACtB,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;;IAEI,WAAW;IACX,qCAAqC;IACrC,iBAAiB;AACrB;;AAEA;;;IAGI,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA,yBAAyB;;AAEzB;IACI,UAAU;IACV,gBAAgB;IAChB,oBAAoB;IACpB,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,2CAA2C;IAC3C,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;;;IAII,iBAAiB;AACrB;;AAEA,sBAAsB;;AAEtB;IACI,gBAAgB;IAChB,oBAAoB;IACpB,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,cAAc;IACd,cAAc;AAClB;;AAEA;;IAEI,2CAA2C;AAC/C;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;AAClB",sourcesContent:['html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root{\n    font-size: 18px;\n    --fontstack: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    --boldRed: #dc2626;\n    --darkRed: #b91c1c;\n}\n\n@font-face{\n    font-family: \'Roboter\';\n    src: url(fonts/Roboto-Regular.ttf) format(truetype),\n        url(fonts/Roboto-Bold.ttf) format(truetype),\n        url(fonts/Roboto-Light.ttf) format(truetype),\n        url(fonts/Roboto-Italic.ttf) format(truetype);\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody{\n    height: 100vh;\n    font-family: \'Roboter\' ,var(--fontstack);\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* header styling */\n\nheader{\n    height: 95px;\n    background-color: var(--boldRed);\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);\n    display: grid;\n    grid-template-columns: 1fr repeat(3, 1fr) 6fr;\n    grid-auto-flow: column;\n    align-items: center;\n    flex: 0 0 auto;\n}\n\n.header,\n.home{\n    color: white;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n}\n\n.name{\n    font-size: 3.3rem;\n    font-weight: 800;\n    font-style: italic;\n    margin-right: 5px;\n}\n\n.icon {\n    width: 75px;\n    height: 75px;\n}\n\n.navBttn {\n    height: 90%;\n    font-size: 1.3rem;\n    background-color: var(--boldRed);\n    border: none;\n    border-left: 1px solid white;\n}\n\n.navBttn:hover {\n    background-color: var(--darkRed);\n}\n\n/* home page styling */\n\n.home-container {\n    flex: 1 0 auto;\n    margin-top: 50px;\n    padding-bottom: 50px;\n}\n\n.home-content {\n    height: 960px;\n    width: 640px;\n    background-image: url(./images/noodleBckgrnd.jpg);\n    background-size: cover;\n    margin: 0 auto 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.home-text,\n.announcement {\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.35);\n    padding: 10px 0px;\n}\n\n.title,\n.message,\n.ann-mssg {\n    width: 90%;\n    text-align: center;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.title {\n    font-size: 2.7rem;\n    font-weight: 700;\n    margin-bottom: 30px;\n}\n\n.message {\n    font-size: 1.4rem;\n    line-height: 1.5;\n    margin-bottom: 10px;\n}\n\n.ann-mssg {\n    font-size: 3rem;\n    font-style: italic;\n    border: 2px dashed white;\n    border-radius: 15px;\n}\n\n/* contact page styling */\n\n.contact-container {\n    width: 70%;\n    margin-top: 50px;\n    padding-bottom: 50px;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-gap: 20px;\n    flex: 1 0 auto;\n}\n\n.hours-info {\n    grid-column: 1;\n    grid-row: 1;\n}\n\n.locations-info {\n    grid-column: 1;\n    grid-row: 2;\n}\n\n.con-info {\n    grid-column: 2;\n    grid-row: 1/3;\n}\n\n.container {\n    border: 3px solid black;\n    border-radius: 15px;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.heading {\n    font-size: 1.7rem;\n    font-weight: bold;\n}\n\n.small-heading {\n    font-size: 1.1rem;\n    font-weight: 600;\n}\n\n.container > p,\n.container > .heading,\n.container > div,\n.container > li {\n    margin-left: 10px;\n}\n\n/* menu page styling */\n\n.menu-page-container {\n    margin-top: 50px;\n    padding-bottom: 50px;\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-title {\n    background-color: var(--boldRed);\n    color: white;\n    font-size: 2.8rem;\n    font-weight: bold;\n    font-style: italic;\n    margin-bottom: 35px;\n    padding: 0px 10px;\n    flex: 1 0 auto;\n}\n\n.menu-items-container {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-gap: 45px;\n    flex: 1 0 auto;\n}\n\n.menu-title,\n.menu-item {\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);\n}\n\n.menu-item {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n}\n\n.food-image {\n    height: 300px;\n    width: 300px;\n    flex: 0 0 auto;\n}\n\n.food-name {\n    background-color: var(--boldRed);\n    color: white;\n    text-align: center;\n    font-size: 1.3rem;\n    font-weight: bold;\n    flex: 1 1 auto;\n}'],sourceRoot:""}]);const b=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(r[c]=!0)}for(var A=0;A<n.length;A++){var s=[].concat(n[A]);o&&r[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(a," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],d=0;d<n.length;d++){var c=n[d],A=o.base?c[0]+o.base:c[0],s=i[A]||0,l="".concat(A," ").concat(s);i[A]=s+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var u=a(m,o);o.byIndex=d,e.splice(d,0,{identifier:l,updater:u,references:1})}r.push(l)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var d=t(i[r]);e[d].references--}for(var c=o(n,a),A=0;A<i.length;A++){var s=t(i[A]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},237:(n,e,t)=>{n.exports=t.p+"f80816a5455d171f948d.ttf"},54:(n,e,t)=>{n.exports=t.p+"87f3afe16a8c3c370634.ttf"},571:(n,e,t)=>{n.exports=t.p+"333da16a3f3cc391d087.ttf"},937:(n,e,t)=>{n.exports=t.p+"fc2b5060f7accec5cf74.ttf"},910:(n,e,t)=>{n.exports=t.p+"a0616fea0eab28f630e6.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"07ca304862611c63a421.svg",e=function(){const n=document.createElement("div");n.classList.add("home-text");const e=o(),t=a();return n.appendChild(e),n.appendChild(t),n},o=function(){const n=document.createElement("h1");return n.textContent="The Hub For All Your Noodle Needs",n.classList.add("title"),n.classList.add("home"),n},a=function(){const n=document.createElement("p");return n.textContent="Noods is the manifestation of the desire in all noodle-lover's hearts, the desire to explore and  experience every pleasure that can be found within noodles.Whether you are a noodle aficionado or just a newbie noodle enjoyer, Noods' wide selection of noodle dishes found across the globe will satisfy this desire every time.",n.classList.add("message"),n.classList.add("home"),n},i=function(){const n=document.createElement("div");n.classList.add("announcement");const e=document.createElement("h2");return e.textContent="Noods Merch Coming Soon!",e.classList.add("ann-mssg"),e.classList.add("home"),n.appendChild(e),n},r=function(){const n=document.createElement("div"),e=document.createElement("h2");e.textContent="Hours",e.classList.add("heading");const t=new Array(7);for(let n=0;n<7;n++)t[n]=document.createElement("p");return t[0].textContent="Monday: 9AM-9PM",t[1].textContent="Tuesday: 9AM-9PM",t[2].textContent="Wednesday: 9AM-9PM",t[3].textContent="Thursday: 9AM-9PM",t[4].textContent="Friday: 9AM-3AM",t[5].textContent="Saturday: 9AM-3AM",t[6].textContent="Sunday: 9AM-9PM",n.appendChild(e),t.forEach((e=>{n.appendChild(e)})),n},d=function(){const n=document.createElement("div"),e=document.createElement("h2");e.textContent="Locations",e.classList.add("heading");const t=document.createElement("li");t.textContent="123 Noodle Drive, San Francisco, CA";const o=document.createElement("li");return o.textContent="456 Carb Street, Los Angeles, CA",n.appendChild(e),n.appendChild(t),n.appendChild(o),n},c=function(){const n=document.createElement("div"),e=document.createElement("h2");e.textContent="Contact Info",e.classList.add("heading");const t=A(),o=p(),a=document.createElement("h2");a.textContent="Socials",a.classList.add("heading");const i=s(),r=l();return n.appendChild(e),n.appendChild(t),n.appendChild(o),n.appendChild(a),n.appendChild(i),n.appendChild(r),n},A=function(){const n=document.createElement("div"),e=document.createElement("h3");e.textContent="Phone",e.classList.add("small-heading");const t=document.createElement("p");return t.textContent="(123) 456-7890",n.appendChild(e),n.appendChild(t),n},s=function(){const n=document.createElement("div"),e=document.createElement("h3");e.textContent="Twitter",e.classList.add("small-heading");const t=document.createElement("p");return t.textContent="@Noods4Lyfe",n.appendChild(e),n.appendChild(t),n},l=function(){const n=document.createElement("div"),e=document.createElement("h3");e.textContent="Instagram",e.classList.add("small-heading");const t=document.createElement("p");return t.textContent="@Noods",n.appendChild(e),n.appendChild(t),n},p=function(){const n=document.createElement("div"),e=document.createElement("h3");e.textContent="Email",e.classList.add("small-heading");const t=document.createElement("p");return t.textContent="Noods@email.com",n.appendChild(e),n.appendChild(t),n},m=[t.p+"1e475d3d99faec180d17.jpg",t.p+"85ab33e6e8bd53eec0d6.jpg",t.p+"0c62c45b5af2f02d1c9b.jpg",t.p+"f608eb369bf6b419b662.jpg",t.p+"d3bb7da4ec08177996d6.jpg",t.p+"17dec175a3e4149a3752.jpg",t.p+"3b79c8f1d78b68b71094.jpg",t.p+"1c89128bc9a1b6ca81b6.jpg",t.p+"1910c2e6fe93ed9bd8e9.jpg",t.p+"2e82f29f82a9bf13fb6d.jpg",t.p+"c33d23bc9a058d60b474.jpg"],u=["Bucatini","Glass Noodles","Kelp Noodles","Lo-Mein Noodles","Ramen Noodles","Rice Noodles","Soba Noodles","Somen Noodles","Spaghetti","Udon Noodles","Wonton Noodles"];var f=t(379),g=t.n(f),C=t(795),h=t.n(C),B=t(569),b=t.n(B),x=t(565),I=t.n(x),v=t(216),y=t.n(v),E=t(589),w=t.n(E),k=t(426),L={};L.styleTagTransform=w(),L.setAttributes=I(),L.insert=b().bind(null,"head"),L.domAPI=h(),L.insertStyleElement=y(),g()(k.Z,L),k.Z&&k.Z.locals&&k.Z.locals;const j=document.getElementById("content");j.appendChild(function(){const e=document.createElement("header"),t=function(){const e=document.createElement("div");e.classList.add("logo");const t=document.createElement("h1");t.textContent="Noods!",t.classList.add("header"),t.classList.add("name");const o=document.createElement("img");return o.src=n,o.classList.add("header"),o.classList.add("icon"),e.appendChild(t),e.appendChild(o),e}(),o=function(){const n=document.createElement("button");return n.textContent="Home",n.classList.add("header"),n.classList.add("navBttn"),n.id="home-bttn",n}(),a=function(){const n=document.createElement("button");return n.textContent="Menu",n.classList.add("header"),n.classList.add("navBttn"),n.id="menu-bttn",n}(),i=function(){const n=document.createElement("button");return n.textContent="Contact",n.classList.add("header"),n.classList.add("navBttn"),n.id="contact-bttn",n}();return e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(i),e}());const R=function(){j.appendChild(function(){const n=document.createElement("div");n.classList.add("home-container");const t=function(){const n=document.createElement("div");n.classList.add("home-content");const t=e(),o=i();return n.appendChild(t),n.appendChild(o),n}();return n.appendChild(t),n}())},S=function(){j.appendChild(function(){const n=document.createElement("div");n.classList.add("contact-container");const e=function(){const n=r();return n.classList.add("hours-info"),n.classList.add("container"),n}(),t=function(){const n=d();return n.classList.add("locations-info"),n.classList.add("container"),n}(),o=function(){const n=c();return n.classList.add("con-info"),n.classList.add("container"),n}();return n.appendChild(e),n.appendChild(t),n.appendChild(o),n}())},M=function(){j.appendChild(function(){const n=document.createElement("div");n.classList.add("menu-page-container");const e=document.createElement("h2");e.textContent="Noods Menu:",e.classList.add("menu-title");const t=function(){const n=document.createElement("div"),e=new Array(11);for(let t=0;t<e.length;t++){e[t]=document.createElement("div"),e[t].classList.add("menu-item");const o=document.createElement("img");o.src=m[t],o.classList.add("food-image");const a=document.createElement("p");a.textContent=u[t],a.classList.add("food-name"),e[t].appendChild(o),e[t].appendChild(a),n.appendChild(e[t])}return n}();return t.classList.add("menu-items-container"),n.appendChild(e),n.appendChild(t),n}())},z=function(){j.removeChild(j.lastChild)};document.getElementById("home-bttn").addEventListener("click",(()=>{z(),R()})),document.getElementById("contact-bttn").addEventListener("click",(()=>{z(),S()})),document.getElementById("menu-bttn").addEventListener("click",(()=>{z(),M()})),R()})()})();
//# sourceMappingURL=main.js.map