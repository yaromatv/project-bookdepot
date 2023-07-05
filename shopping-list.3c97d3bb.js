function e(e,t,o,s){Object.defineProperty(e,t,{get:o,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return s[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},o.parcelRequired7c6=r),r.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return s},function(e){return s=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var s,i,r={};s=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},i=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"7nZc1":"shopping-list.3c97d3bb.js","gZUBb":"amazon-logo.1ffb51bc.png","bILka":"bookshop3xOpt.d175b984.png","2BNNA":"trash.e061ba7d.svg","7sxj5":"openbook3xOpt.8458c1dc.png","a8uN9":"thispageisempty2xOpt.d40f7c73.png","h1hxh":"shopping-list.4b8d22d0.js"}'));var n=r("hLzQv");r("ak03H");var l={};l=new URL(r("kyEFX").resolve("2BNNA"),import.meta.url).toString();var a={};a=new URL(r("kyEFX").resolve("gZUBb"),import.meta.url).toString();var p={};p=new URL(r("kyEFX").resolve("7sxj5"),import.meta.url).toString();var c={};c=new URL(r("kyEFX").resolve("bILka"),import.meta.url).toString();var g={};g=new URL(r("kyEFX").resolve("a8uN9"),import.meta.url).toString();const u=document.querySelector(".shopping-list-js"),d=JSON.parse(localStorage.getItem("shoppingList"))||[],h=m(d);function m(e){let o=JSON.parse(localStorage.getItem("Shoppinglist"));return o||e.length>0?e.map(({_id:e,list_name:o,author:s,book_image:i,title:r,description:n,buy_links:[{name:g,url:u},{name:d,url:h},{name:m,url:f}]})=>`
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
                    <a class="" href="${u}"><img class="shopping-list-amazon-icon fund-image-amazon" src="${t(a)}" alt="${g}"></a>
                  </li>
                  <li>
                    <a class="" href="${h}"><img class="shopping-list-apple-book-icon" src="${t(p)}" alt="${d}"></a>
                  </li>
                  <li>
                    <a class="" href="${f}"><img class="shopping-list-books-shop-icon" src="${t(c)}" alt="${m}"></a>
                  </li>
                </ul>
              </div>
            </div>
            <button class="remove-shopping-list-btn removeBook-js" ">
              <svg width="16" height="16" class="remove-boc-icon">
                <use href="${t(l)}"></use>
              </svg>
            </button>
        </li>
      `).join(""):`
        <div class="empty-shopping-list">
          <p class="empty-desc">
          This page is empty, add some books and proceed to order.
          </p>
          <img class ="book-empty" src="${t(g)}" alt="this page is empty" width="265" height="198">
        </div>
      `}function f(){let e=document.querySelectorAll(".removeBook-js");e.forEach(e=>{e.addEventListener("click",b)})}function b(e){let o=e.target.closest("li").id,s=JSON.parse(localStorage.getItem("shoppingList"))||[];s=s.filter(e=>e._id!==o),localStorage.setItem("shoppingList",JSON.stringify(s));let i=document.getElementById(o);i&&i.remove(),(0,n.booksRequest)().then(e=>{let t=m(e);u.innerHTML=t,f()}).catch(e=>console.log(e)),0===s.length&&(u.innerHTML=`
    <div class="empty-shopping-list">
      <p class="empty-desc">
        This page is empty, add some books and proceed to order.
      </p>
      <img class ="book-empty" src="${t(g)}" alt="this page is empty" width="265" height="198">
    </div>
  `)}u.innerHTML=h,f();
//# sourceMappingURL=shopping-list.3c97d3bb.js.map
