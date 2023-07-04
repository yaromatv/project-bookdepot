function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return s[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o.register("kyEFX",function(t,s){"use strict";e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var i,o,r={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},o=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o("kyEFX").register(JSON.parse('{"7nZc1":"shopping-list.4474a8f7.js","b03hQ":"x-close.a3e5df78.svg","brQ84":"shopping-list.41f16399.js"}'));var r=o("hLzQv"),n={};n=new URL(o("kyEFX").resolve("b03hQ"),import.meta.url).toString();const l=document.querySelector(".shopping-list-js"),a=JSON.parse(localStorage.getItem("shoppingList"))||[],c=p(a);function p(e){return e.length>0?e.map(({_id:e,list_name:t,author:s,book_image:i,title:o,description:r,buy_links:[{name:l,url:a},{name:c,url:p},{name:u,url:d}]})=>{var g;return`
        <li class="card-book-li" id="${e}">
            <img class="img-book" src="${i}" alt="${s}, ${o}">
            <div class ="card-book-box">
              <h2 class="book-title" >${o}</h2>
              <p class ="category-shopping-list">${t}</p>
              <p class="description-shopping-list">${r}</p>
              <div class="position-box">
                <p class="author-shopping-list">${s}</p>
                <ul class="buy-links-box">
                  <li>
                    <a class="" href="${a}"><img src="" alt="${l}"></a>
                  </li>
                  <li>
                    <a class="" href="${p}"><img src="" alt="${c}"></a>
                  </li>
                  <li>
                    <a class="" href="${d}"><img src="" alt="${u}"></a>
                  </li>
                </ul>
              </div>
            </div>
            <button class="remove-shopping-list-btn removeBook-js" ">
              <svg width="16" height="16" class="remove-boc-icon">
                <use href="${(g=n)&&g.__esModule?g.default:g}"></use>
              </svg>
            </button>
        </li>
      `}).join(""):`
        <div class="empty-list">
          <p class="empty-desc">
          This page is empty, add some books and proceed to order.
          </p>
          <img src="/src/images/png/thispageisempty2xOpt.png" alt="this page is empty" width="265" height="198">
        </div>
      `}function u(){let e=document.querySelectorAll(".removeBook-js");e.forEach(e=>{e.addEventListener("click",d)})}function d(e){let t=e.target.closest("li").id,s=JSON.parse(localStorage.getItem("shoppingList"))||[];s=s.filter(e=>e._id!==t),localStorage.setItem("shoppingList",JSON.stringify(s));let i=document.getElementById(t);i&&i.remove(),(0,r.booksRequest)().then(e=>{let t=p(e);l.innerHTML=t,u()}).catch(e=>console.log(e))}l.innerHTML=c,u();
//# sourceMappingURL=shopping-list.4474a8f7.js.map
