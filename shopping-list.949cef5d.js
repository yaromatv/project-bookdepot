!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r),r.register("iE7OH",function(n,t){"use strict";e(n.exports,"register",function(){return o},function(e){return o=e}),e(n.exports,"resolve",function(){return r},function(e){return r=e});var o,r,i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw Error("Could not resolve bundle with id "+e);return n}}),r.register("aNJCr",function(n,t){e(n.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,r={};o=function(e){var n=r[e];return n||(n=function(){try{throw Error()}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=n),n}}),r("iE7OH").register(JSON.parse('{"l20mf":"shopping-list.949cef5d.js","9j2Gl":"x-close.a3e5df78.svg","h4OkK":"shopping-list.ede4f8c9.js"}'));var i=r("fGQt0"),s=r("fepPP"),c={};c=r("aNJCr").getBundleURL("l20mf")+r("iE7OH").resolve("9j2Gl");var a=document.querySelector(".shopping-list-js"),l=u(JSON.parse(localStorage.getItem("shoppingList"))||[]);function u(e){return e.length>0?e.map(function(e){var n,t=e._id,o=e.list_name,r=e.author,s=e.book_image,a=e.title,l=e.description,u=(0,i._)(e.buy_links,3),f=u[0],p=f.name,d=f.url,g=u[1],h=g.name,m=g.url,v=u[2],b=v.name,y=v.url;return'\n        <li class="card-book-li" id="'.concat(t,'">\n            <img class="img-book" src="').concat(s,'" alt="').concat(r,", ").concat(a,'">\n            <div class ="card-book-box">\n              <h2 class="book-title" >').concat(a,'</h2>\n              <p class ="category-shopping-list">').concat(o,'</p>\n              <p class="description-shopping-list">').concat(l,'</p>\n              <div class="position-box">\n                <p class="author-shopping-list">').concat(r,'</p>\n                <ul class="buy-links-box">\n                  <li>\n                    <a class="" href="').concat(d,'"><img src="" alt="').concat(p,'"></a>\n                  </li>\n                  <li>\n                    <a class="" href="').concat(m,'"><img src="" alt="').concat(h,'"></a>\n                  </li>\n                  <li>\n                    <a class="" href="').concat(y,'"><img src="" alt="').concat(b,'"></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <button class="remove-shopping-list-btn removeBook-js" ">\n              <svg width="16" height="16" class="remove-boc-icon">\n                <use href="').concat((n=c)&&n.__esModule?n.default:n,'"></use>\n              </svg>\n            </button>\n        </li>\n      ')}).join(""):'\n        <div class="empty-list">\n          <p class="empty-desc">\n          This page is empty, add some books and proceed to order.\n          </p>\n          <img src="/src/images/png/thispageisempty2xOpt.png" alt="this page is empty" width="265" height="198">\n        </div>\n      '}function f(){document.querySelectorAll(".removeBook-js").forEach(function(e){e.addEventListener("click",p)})}function p(e){var n=e.target.closest("li").id,t=JSON.parse(localStorage.getItem("shoppingList"))||[];t=t.filter(function(e){return e._id!==n}),localStorage.setItem("shoppingList",JSON.stringify(t));var o=document.getElementById(n);o&&o.remove(),(0,s.booksRequest)().then(function(e){var n=u(e);a.innerHTML=n,f()}).catch(function(e){return console.log(e)})}a.innerHTML=l,f()}();
//# sourceMappingURL=shopping-list.949cef5d.js.map