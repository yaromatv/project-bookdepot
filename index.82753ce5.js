function t(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=o.parcelRequired7c6;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},o.parcelRequired7c6=a),a.register("kyEFX",function(e,o){"use strict";t(e.exports,"register",function(){return i},function(t){return i=t}),t(e.exports,"resolve",function(){return n},function(t){return n=t});var i,n,a={};i=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)a[e[o]]=t[e[o]]},n=function(t){var e=a[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),a("kyEFX").register(JSON.parse('{"5ZPII":"index.82753ce5.js","hiyH0":"book-icon-small.99df778e.png","fqCWW":"book-icon-medium.21fe6570.png","49H35":"book-icon-big.09e4d07a.png","kONVj":"Yaroslav_Matvieiev.5d8f5fe2.jpg","1IF0Z":"Denys_Lavryk.af261305.jpg","jYlnj":"Anastasiia_Vedmid.6ca2fc2e.jpg","j3ikF":"Marina_Sihida.33350952.jpg","1kuoP":"Vitalii_Duduka.62284618.jpg","loLvE":"Mary_Kuzo.54a21753.jpg","ap6uD":"Oleksii_Burlaka.0c514305.jpg","bHhaY":"Victory_Krasova.9923d6fc.jpg","k6Zqt":"Artem_Zaicew.b1be3a25.jpg","lYbab":"Oleksii_Khodarchenko.d12245be.jpg","hkegz":"oleg_kryuchkov.4f6bf2d5.jpg","bVP1v":"amazon3xOpt.9b0c0fa8.png","7sxj5":"openbook3xOpt.8458c1dc.png","bILka":"bookshop3xOpt.d175b984.png","brQ84":"shopping-list.41f16399.js"}'));const s=document.querySelector(".scroll-up-btn");s.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>100?s.classList.add("show-scroll-up-btn"):s.classList.remove("show-scroll-up-btn")});var r=a("hLzQv"),l={};l=new URL(a("kyEFX").resolve("hiyH0"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("fqCWW"),import.meta.url).toString();var m={};function d(t,e,o,i){return`<li class="top-books-category-item" data-id=${t}>
    <a class="top-books-category-item-link" href="#">
        ${e}
      <h4 class="top-books-category-item-title">${o}</h4>
      <p class="top-books-category-item-author">${i}</p>
    </a>
  </li>`}function f(t,e){let o=`<div class="top-books-category-item-img-wrap">
      <img class="top-books-category-item-img" src="${t}" alt="book cover"/>
      <p class="book-img-overlay">Quick view</p>
    </div>`;return""===t&&(t=e,o=`<div class="top-books-category-item-img-wrap icon-wrap">
        <img class="top-books-category-item-icon" src="${e}" alt="book cover"/>
        <p class="book-img-overlay">Quick view</p>
      </div>`),o}function p(t){let o=e(m);return 3===t?o=e(c):5===t&&(o=e(l)),o}m=new URL(a("kyEFX").resolve("49H35"),import.meta.url).toString();var r=a("hLzQv"),u={};!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e(t)}):"object"==typeof u?u=e(t):t.Notiflix=e(t)}(void 0!==o?o:"undefined"!=typeof window?window:u,function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,o={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},i={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},n=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},a=function(e){return e||(e="head"),null!==t.document[e]||(n('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},s=function(e,o){if(!a("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}},r=function(){var t={},e=!1,o=0;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);o<arguments.length;o++)!function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=r(t[i],o[i]):t[i]=o[i])}(arguments[o]);return t},l=function(e){var o=t.document.createElement("div");return o.innerHTML=e,o.textContent||o.innerText||""},c=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,d=function(n,s,c,d){if(!a("body"))return!1;e||f.Notify.init({});var p=r(!0,e,{});if("object"==typeof c&&!Array.isArray(c)||"object"==typeof d&&!Array.isArray(d)){var u={};"object"==typeof c?u=c:"object"==typeof d&&(u=d),e=r(!0,e,u)}var y=e[n.toLocaleLowerCase("en")];m++,"string"!=typeof s&&(s="Notiflix "+n),e.plainText&&(s=l(s)),!e.plainText&&s.length>e.messageMaxLength&&(e=r(!0,e,{closeButton:!0,messageMaxLength:150}),s='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),s.length>e.messageMaxLength&&(s=s.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(y.fontAwesomeIconColor=y.background),e.cssAnimation||(e.cssAnimationDuration=0);var g=t.document.getElementById(i.wrapID)||t.document.createElement("div");if(g.id=i.wrapID,g.style.width=e.width,g.style.zIndex=e.zindex,g.style.opacity=e.opacity,"center-center"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.top=e.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===e.position?(g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.left="auto"):"left-top"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===e.position?(g.style.left=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=e.distance,g.style.top=e.distance,g.style.left="auto",g.style.bottom="auto"),e.backOverlay){var b=t.document.getElementById(i.overlayID)||t.document.createElement("div");b.id=i.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=e.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=y.backOverlayColor||e.backOverlayColor,b.className=e.cssAnimation?"nx-with-animation":"",b.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(i.overlayID)||t.document.body.appendChild(b)}t.document.getElementById(i.wrapID)||t.document.body.appendChild(g);var h=t.document.createElement("div");h.id=e.ID+"-"+m,h.className=e.className+" "+y.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof c?"nx-with-close-button":"")+" "+("function"==typeof c?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=e.fontSize,h.style.color=y.textColor,h.style.background=y.background,h.style.borderRadius=e.borderRadius,h.style.pointerEvents="all",e.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(h.style.animationDuration=e.cssAnimationDuration+"ms");var x="";if(e.closeButton&&"function"!=typeof c&&(x='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+y.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon){if(e.useFontAwesome)h.innerHTML='<i style="color:'+y.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+y.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+s+"</span>"+(e.closeButton?x:"");else{var v="";n===o.Success?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===o.Failure?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===o.Warning?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===o.Info&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=v+'<span class="nx-message nx-with-icon">'+s+"</span>"+(e.closeButton?x:"")}}else h.innerHTML='<span class="nx-message">'+s+"</span>"+(e.closeButton?x:"");if("left-bottom"===e.position||"right-bottom"===e.position){var k=t.document.getElementById(i.wrapID);k.insertBefore(h,k.firstChild)}else t.document.getElementById(i.wrapID).appendChild(h);var w=t.document.getElementById(h.id);if(w){var L,N,E=function(){w.classList.add("nx-remove");var e=t.document.getElementById(i.overlayID);e&&g.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(L)},S=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var e=t.document.getElementById(i.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(N)};if(e.closeButton&&"function"!=typeof c&&t.document.getElementById(h.id).querySelector("span.nx-close-button").addEventListener("click",function(){E();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)}),("function"==typeof c||e.clickToClose)&&w.addEventListener("click",function(){"function"==typeof c&&c(),E();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof c){var _=function(){L=setTimeout(function(){E()},e.timeout),N=setTimeout(function(){S()},e.timeout+e.cssAnimationDuration)};_(),e.pauseOnHover&&(w.addEventListener("mouseenter",function(){w.classList.add("nx-paused"),clearTimeout(L),clearTimeout(N)}),w.addEventListener("mouseleave",function(){w.classList.remove("nx-paused"),_()}))}}if(e.showOnlyTheLastOne&&m>0)for(var A=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+m+"])"),I=0;I<A.length;I++){var H=A[I];null!==H.parentNode&&H.parentNode.removeChild(H)}e=r(!0,e,p)},f={Notify:{init:function(t){e=r(!0,i,t),s(c,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return n("You have to initialize the Notify module before call Merge function."),!1;e=r(!0,e,t)},success:function(t,e,i){d(o.Success,t,e,i)},failure:function(t,e,i){d(o.Failure,t,e,i)},warning:function(t,e,i){d(o.Warning,t,e,i)},info:function(t,e,i){d(o.Info,t,e,i)}}};return"object"==typeof t.Notiflix?r(!0,t.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}});var r=a("hLzQv");const y=document.querySelector(".categories-list");function g(){(0,u.Notify).failure("Sorry! Something went wrong. Please, try reload the page.",{borderRadius:"8px",clickToClose:!0})}!async function(){try{let t=await (0,r.fetchCategoriesList)();!function(t){let e=t.map(t=>`
    <li class="categories-item">
      <a class="categories-list-link" href="#">${t.list_name}</a>
    </li>`).sort().join("");y.insertAdjacentHTML("beforeend",e)}(t)}catch(t){g(),console.error(t)}}();const b={loaderEl:'<p class="loader">Loading books, please wait...<span class="loader-img"></span></p>',hideLoaderEl(){this.classList.add("hidden")},showLoaderEl(){this.classList.remove("hidden")}},h=document.querySelector(".categories-list"),x=document.querySelector(".top-books"),v=document.querySelector(".category");h.addEventListener("click",w),x.addEventListener("click",w);let k="";async function w(t){if(t.preventDefault(),t.target.classList.contains("categories-list-link"))!function(t){k=t.target.textContent;let e=h.querySelectorAll(".categories-item");e.forEach(t=>t.classList.remove("active")),t.target.parentNode.classList.add("active")}(t);else{if(!t.target.classList.contains("top-books-category-btn"))return;!function(t){k=t.target.parentNode.querySelector(".top-books-category-title").textContent;let e=h.querySelectorAll(".categories-item");e.forEach(t=>{let e=t.querySelector(".categories-list-link");e.textContent===k?t.classList.add("active"):t.classList.remove("active")})}(t)}if("All categories"===k){v.innerHTML="",x.classList.remove("visually-hidden"),L(x);return}try{x.classList.add("visually-hidden"),v.innerHTML=b.loaderEl;let t=await (0,r.fetchCategory)(k);(function(t){x.classList.add("visually-hidden");let e="",o=k.split(" ");e=o[o.length-1],o.length=o.length-1;let i=o.join(" "),n="";n=0!==t.length?t.map(t=>(function({_id:t,book_image:e,title:o,author:i}){let n=I(),a=p(n),s=f(e,a);return""===o&&(o="Missing book title"),""===i&&(i="Missing book author"),d(t,s,o,i)})(t)).join(""):'<p class="no-books-message">Sorry, no books found<span>&#128532</span></p>',v.innerHTML=`<h2 class="category-title gallery-title">
  ${i} <span class="accent-color">${e}</span>
  </h2>
  <ul class="category-books-list">${n}</ul>`})(t),L(v)}catch(t){v.innerHTML="",g(),console.error(t)}}function L(t){window.innerWidth<1440?t.scrollIntoView({behavior:"smooth"}):window.scroll({top:0,behavior:"smooth"})}const N=document.querySelector(".top-books"),E=document.querySelector(".top-books-wrap"),S=function(t,e){let o;return function(){clearTimeout(o),o=setTimeout(t,150)}}(_,0);function _(){let t=I();N.classList.contains("visually-hidden")||(E.innerHTML="",A(t))}async function A(t){N.classList.remove("visually-hidden");try{E.innerHTML=b.loaderEl;let e=await (0,r.fetchTopBooks)();if(0===e.length){E.innerHTML='<p class="no-books-message">Sorry, no books found<span>&#128532</span></p>';return}(function(t,e){let o=t.map(t=>(function({list_name:t,books:e},o){e.length=o;let i=p(o),n=e.map(({book_image:t,title:e,author:o,_id:n})=>{let a=f(t,i);return""===e&&(e="Missing book title"),""===o&&(o="Missing book author"),d(n,a,e,o)}).join("");return`<div class="top-books-category-wrap">
    <h3 class="top-books-category-title">${t}</h3>
      <ul class="top-books-category-list">${n}</ul>
      <button type="button" class="top-books-category-btn">See more</button>
    </div>`})(t,e)).join("");E.innerHTML=o})(e,t),N.addEventListener("click",w)}catch(t){E.innerHTML="",g(),console.error(t)}}function I(){let t=1;return window.innerWidth>768&&(t=3),window.innerWidth>1440&&(t=5),t}window.addEventListener("resize",S),_(),a("hLzQv");const H=document.querySelector('.theme-switch input[type="checkbox"]'),C=localStorage.getItem("theme"),z={LIGHT:"light",DARK:"dark"};C&&(document.documentElement.setAttribute("data-theme",C),C===z.DARK&&(H.checked=!0)),H.addEventListener("change",function(t){t.target.checked?(document.documentElement.setAttribute("data-theme",z.DARK),localStorage.setItem("theme",z.DARK)):(document.documentElement.setAttribute("data-theme",z.LIGHT),localStorage.setItem("theme",z.LIGHT))},!1);var F={};F=new URL(a("kyEFX").resolve("kONVj"),import.meta.url).toString();var T={};T=new URL(a("kyEFX").resolve("1IF0Z"),import.meta.url).toString();var D={};D=new URL(a("kyEFX").resolve("jYlnj"),import.meta.url).toString();var j={};j=new URL(a("kyEFX").resolve("j3ikF"),import.meta.url).toString();var W={};W=new URL(a("kyEFX").resolve("1kuoP"),import.meta.url).toString();var M={};M=new URL(a("kyEFX").resolve("loLvE"),import.meta.url).toString();var R={};R=new URL(a("kyEFX").resolve("ap6uD"),import.meta.url).toString();var O={};O=new URL(a("kyEFX").resolve("bHhaY"),import.meta.url).toString();var B={};B=new URL(a("kyEFX").resolve("k6Zqt"),import.meta.url).toString();var q={};q=new URL(a("kyEFX").resolve("lYbab"),import.meta.url).toString();var $={};$=new URL(a("kyEFX").resolve("hkegz"),import.meta.url).toString();const U=[{name:"Yaroslav Matvieiev",position:"Team Lead, Developer",img:e(F),url:"https://github.com/yaromatv"},{name:"Denys Lavryk",position:"Scrum Master, Developer",img:e(T),url:"https://github.com/strictly-rigid"},{name:"Anastasiia Vedmid",position:"Developer",img:e(D),url:"https://github.com/neyonse"},{name:"Maryna Sihida",position:"Developer",img:e(j),url:"https://github.com/marinasigida"},{name:"Vitalii Duduka",position:"Developer",img:e(W),url:"https://github.com/VitaliiDuduka"},{name:"Mary Kuzo",position:"Developer",img:e(M),url:"https://github.com/marykuzo"},{name:"Oleksii Burlaka",position:"Developer",img:e(R),url:"https://github.com/Oleksii001"},{name:"Victory Krasova",position:"Developer",img:e(O),url:"https://github.com/VictoryKrasova"},{name:"Artem Zaicev",position:"Developer",img:e(B),url:"https://github.com/Artemzaicew"},{name:"Oleksii Khodarchenko",position:"Developer",img:e(q),url:"https://github.com/oleksii3339"},{name:"Oleg Kryuchkov",position:"Developer",img:e($),url:"https://github.com/OlegKryuchkov"}],X=document.querySelector(".footer-link"),V=document.querySelector(".modal-team__close-btn"),K=document.querySelector("[data-modal-team]"),Y=document.querySelector(".modal-team__list");function P({code:t}){"Escape"===t&&Q()}function Q(){K.classList.add("backdrop-team--hidden"),document.body.classList.remove("modal-team-open"),window.removeEventListener("keyup",P)}(function(){let t=U.map(({name:t,img:e,position:o,url:i})=>`<li class="modal-team__item">
  <div class="modal-team__img-container">
    <a target="_blank" href="${i}">
      <img class="modal-team__img" src="${e}" alt="${t}" width="150" height="150">
    </a>
      <h3 class="modal-team__title">${t}</h3>
  <span class="modal-team__position">${o}</span>
  </div>
</li>`).join("");Y.insertAdjacentHTML("beforeend",t)})(),X.addEventListener("click",function(t){t.preventDefault(),document.body.classList.add("modal-team-open"),K.classList.remove("backdrop-team--hidden"),window.addEventListener("keyup",P)}),V.addEventListener("click",function(t){t.preventDefault(),Q()}),K.addEventListener("click",function(t){t.target.classList.contains("backdrop-team")&&Q()}),document.querySelector('[data-page="home-list"]'),document.querySelector('[data-page="shpng-list"]');const Z=document.querySelectorAll(".js-link");console.dir(Z),Z.forEach(t=>{t.href===t.baseURI?(t.style.backgroundColor="#EAC645",t.style.color="#111111"):(t.style.backgroundColor="transparent",t.style.color="#FFFFFF")}),document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector(".js-mobile-menu-toggle"),e=document.querySelector(".js-close-menu");t.addEventListener("click",function(){e.classList.toggle("show")}),e.addEventListener("click",function(){e.classList.remove("show")}),t.addEventListener("click",function(){t.classList.add("hidden"),e.classList.remove("hidden")}),e.addEventListener("click",function(){e.classList.add("hidden"),t.classList.remove("hidden")})}),(()=>{let t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),i=()=>{e.getAttribute("aria-expanded"),t.classList.toggle("is-open")};e.addEventListener("click",i),o.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();var G={};G=new URL(a("kyEFX").resolve("bVP1v"),import.meta.url).toString();var J={};J=new URL(a("kyEFX").resolve("7sxj5"),import.meta.url).toString();var tt={};tt=new URL(a("kyEFX").resolve("bILka"),import.meta.url).toString();const te={modal:document.querySelector(".modal"),bookName:document.querySelector(".book-name"),bookAuthor:document.querySelector(".book-author"),bookDescr:document.querySelector(".book-description"),closeBtn:document.querySelector(".modal-close-btn"),backdrop:document.querySelector(".backdrop")},to=document.querySelector(".gallery-section");async function ti(t){return fetch(`https://books-backend.p.goit.global/books/${t}`).then(t=>t.json()).then(t=>((function(t){let{_id:o,book_image:i,title:n,list_name:a,description:s,author:r,buy_links:l,book_image_width:c,book_image_height:m}=t,d=`
  <button type="button" class="modal-close-btn" data-modal-close>
      <svg class="modal-close-btn-icon" width="100" height="100">
        <use href="./images/sprite.svg#icon-x-close"></use>
      </svg>
    </button>
  <div class="book-item">
          <div class="book-item-content">
            <div class="img-container">
              <img class="book-cover" src="${i||"https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}" max-width="287" max-height="408"  alt="book cover" />
            </div>

            <div class="book-details">
              <h2 class="book-name">${n||"BOOK TITLE"}</h2>
              <h3 class="book-author">${r||"AUTHOR TITLE"}</h3>
              <p class="book-description">${s||"This is wonderful description of a wonderful book that you should definitely buy via one of the links below"}</p>
              <ul class="online-stores">
                <li class="online-shop-item">
                  <a href="${l[0].url}" class="online-store-link">
                     <img
                            src="${e(G)}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                  </a>
                </li>
                <li class="online-shop-item">
                 <a href="${l[1].url}" class="online-store-link">
                     <img
                            src="${e(J)}"
                            alt="logo AppleBooks"
                            width="62"
                            height="19"
                            />
                  </a>
                </li>
                <li class="online-shop-item">
                  <a href="${l[2].url}" class="online-store-link">
                     <img
                            src="${e(tt)}"
                            alt="logo BookShop"
                            width="62"
                            height="19"
                            />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="button-container">
            <button type="button" class="add-list-btn">
              Add to shopping list
            </button>
          </div>
        </div>`;te.modal.innerHTML=d,te.closeBtn=document.querySelector(".modal-close-btn"),te.closeBtn.addEventListener("click",tn),window.addEventListener("keydown",ta),console.log(te.closeBtn)})(t),t)).then(t=>{let e=document.querySelector(".add-list-btn"),{_id:o,book_image:i,title:n,list_name:a,description:s,author:r,buy_links:l,book_image_width:c,book_image_height:m}=t;console.log(o);let d={_id:o,book_image:i,title:n,author:r,list_name:a,description:s,buy_links:l,book_image_width:c,book_image_height:m};return e.addEventListener("click",()=>{let t=JSON.parse(localStorage.getItem("shoppingList"))||[];console.log(t);let i=t.find(t=>t._id===o);if(i){let i=t.filter(t=>t._id!==o);localStorage.setItem("shoppingList",JSON.stringify(i)),console.log("Book removed from shopping list!"),e.textContent="Add to shopping list"}else t.push(d),localStorage.setItem("shoppingList",JSON.stringify(t)),console.log("Book added to shopping list!"),e.textContent="Remove from the shopping list"}),t})}function tn(){te.modal.innerHTML="",te.backdrop.classList.toggle("is-hidden"),document.body.classList.remove("modal-open"),te.backdrop.removeEventListener("click",tn),te.closeBtn.removeEventListener("click",tn),window.removeEventListener("keydown",ta)}function ta(t){let e="Escape"===t.code;e&&tn()}function ts(t){t.currentTarget===t.target&&tn()}console.log(to),to.addEventListener("click",function(t){let e=t.target.closest(".top-books-category-item");if(e){let t=e.getAttribute("data-id");ti(t)}}),to.addEventListener("click",function(t){let e=t.target.closest(".top-books-category-item");e&&(window.addEventListener("keydown",ta),te.backdrop.classList.toggle("is-hidden"),document.body.classList.add("modal-open"),te.backdrop.addEventListener("click",ts))});
//# sourceMappingURL=index.82753ce5.js.map