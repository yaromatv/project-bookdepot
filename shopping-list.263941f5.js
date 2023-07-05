function e(e,t,o,s){Object.defineProperty(e,t,{get:o,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return s[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},o.parcelRequired7c6=r),r.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return s},function(e){return s=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var s,i,r={};s=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},i=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"7nZc1":"shopping-list.263941f5.js","gZUBb":"amazon-logo.1ffb51bc.png","8hF3U":"applebooks-logo.4be09ee7.png","bILka":"bookshop3xOpt.d175b984.png","2BNNA":"trash.e061ba7d.svg","a8uN9":"thispageisempty2xOpt.d40f7c73.png","bmUvo":"shopping-list.c5be6358.js"}'));var n=r("hLzQv");r("ak03H"),new URL(r("kyEFX").resolve("2BNNA"),import.meta.url).toString();var l={};l=new URL(r("kyEFX").resolve("gZUBb"),import.meta.url).toString();var a={};a=new URL(r("kyEFX").resolve("8hF3U"),import.meta.url).toString();var p={};p=new URL(r("kyEFX").resolve("bILka"),import.meta.url).toString();var c={};c=new URL(r("kyEFX").resolve("a8uN9"),import.meta.url).toString();const g=document.querySelector(".shopping-list-js"),d=JSON.parse(localStorage.getItem("shoppingList"))||[],u=m(d);function m(e){let o=JSON.parse(localStorage.getItem("Shoppinglist"));return o||e.length>0?e.map(({_id:e,list_name:o,author:s,book_image:i,title:r,description:n,buy_links:[{name:c,url:g},{name:d,url:u},{name:m,url:h}]})=>`
        <li class="card-book-li" id="${e}">
            <img class="img-book" src="${i}" alt="${s}, ${r}">
            <div class ="card-book-box">
              <h2 class="book-title" >${r}</h2>
              <p class ="category-shopping-list">${o}</p>
              <p class="description-shopping-list">${n}</p>
              <div class="position-box">
                <p class="author-shopping-list">${s}</p>
                <ul class="buy-links-box">
                  <li>
                    <a class="" href="${g}"><img class="shopping-list-amazon-icon bookshop-image-amazon" src="${t(l)}" alt="${c}"></a>
                  </li>
                  <li>
                    <a class="" href="${u}"><img class="shopping-list-apple-book-icon" src="${t(a)}" alt="${d}"></a>
                  </li>
                  <li>
                    <a class="" href="${h}"><img class="shopping-list-books-shop-icon" src="${t(p)}" alt="${m}"></a>
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
          <img class ="book-empty" src="${t(c)}" alt="this page is empty" width="265" height="198">
        </div>
      `}function h(){let e=document.querySelectorAll(".removeBook-js");e.forEach(e=>{e.addEventListener("click",f)})}function f(e){let o=e.target.closest("li").id,s=JSON.parse(localStorage.getItem("shoppingList"))||[];s=s.filter(e=>e._id!==o),localStorage.setItem("shoppingList",JSON.stringify(s));let i=document.getElementById(o);i&&i.remove(),(0,n.booksRequest)().then(e=>{let t=m(e);g.innerHTML=t,h()}).catch(e=>console.log(e)),0===s.length&&(g.innerHTML=`
    <div class="empty-shopping-list">
      <p class="empty-desc">
        This page is empty, add some books and proceed to order.
      </p>
      <img class ="book-empty" src="${t(c)}" alt="this page is empty" width="265" height="198">
    </div>
  `)}g.innerHTML=u,h();
//# sourceMappingURL=shopping-list.263941f5.js.map
