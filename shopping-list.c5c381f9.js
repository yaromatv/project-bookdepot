function e(e,t,o,i){Object.defineProperty(e,t,{get:o,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},o.parcelRequired7c6=r),r.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return s},function(e){return s=e});var i,s,r={};i=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},s=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r.register("jJ57b",function(o,i){e(o.exports,"updateMarkup",function(){return u}),r("75VGX"),r("ak03H");var s=r("8rulZ"),n=r("klwZv"),l=r("fYXP7"),a=r("92aGH");let p=document.querySelector(".shopping-list-js"),c=JSON.parse(localStorage.getItem("shoppingList"))||[];function u(e){let o;let i=JSON.parse(localStorage.getItem("Shoppinglist"));o=i||e.length>0?e.map(({_id:e,list_name:o,author:i,book_image:r,title:a,description:p,buy_links:[{name:c,url:u},{name:g,url:d},{name:f,url:m}]})=>`
        <li class="card-book-li" id="${e}">
            <img class="img-book" src="${r}" alt="${i}, ${a}">
            <div class ="card-book-box">
              <h2 class="book-title" >${a}</h2>
              <p class ="category-shopping-list">${o}</p>
              <p class="description-shopping-list">${p}</p>
              <div class="position-box">
                <p class="author-shopping-list">${i}</p>
                <ul class="buy-links-box">
                  <li>
                    <a class="" href="${u}"><img class="shopping-list-amazon-icon bookshop-image-amazon" src="${t(s)}" alt="${c}"></a>
                  </li>
                  <li>
                    <a class="" href="${d}"><img class="shopping-list-apple-book-icon" src="${t(n)}" alt="${g}"></a>
                  </li>
                  <li>
                    <a class="" href="${m}"><img class="shopping-list-books-shop-icon" src="${t(l)}" alt="${f}"></a>
                  </li>
                </ul>
              </div>
            </div>
             <button id="${e}" class="remove-shopping-list-btn removeBook-js"></button>

            </button>
        </li>
      `).join(""):`
        <div class="empty-shopping-list">
          <p class="empty-desc">
          This page is empty, add some books and proceed to order.
          </p>
          <img class ="book-empty" src="${t(a)}" alt="this page is empty" width="265" height="198">
        </div>
      `,p.innerHTML=o,function(){let e=document.querySelectorAll(".removeBook-js");e.forEach(e=>{e.addEventListener("click",g)})}()}function g(e){let t=e.target.closest("li").id,o=JSON.parse(localStorage.getItem("shoppingList"))||[];o=o.filter(e=>e._id!==t),localStorage.setItem("shoppingList",JSON.stringify(o));let i=document.getElementById(t);i&&i.remove()}u(c)}),r.register("8rulZ",function(e,t){e.exports=new URL(r("kyEFX").resolve("gZUBb"),import.meta.url).toString()}),r.register("klwZv",function(e,t){e.exports=new URL(r("kyEFX").resolve("8hF3U"),import.meta.url).toString()}),r.register("fYXP7",function(e,t){e.exports=new URL(r("kyEFX").resolve("bILka"),import.meta.url).toString()}),r.register("92aGH",function(e,t){e.exports=new URL(r("kyEFX").resolve("a8uN9"),import.meta.url).toString()}),r("kyEFX").register(JSON.parse('{"7nZc1":"shopping-list.c5c381f9.js","gZUBb":"amazon-logo.1ffb51bc.png","8hF3U":"applebooks-logo.4be09ee7.png","bILka":"bookshop3xOpt.d175b984.png","a8uN9":"thispageisempty2xOpt.d40f7c73.png","2TjSD":"shopping-list.148c4af3.js","ehOpW":"shopping-list.6e47160c.js"}')),r("jJ57b");
//# sourceMappingURL=shopping-list.c5c381f9.js.map
