!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in s){var n=s[e];delete s[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){s[e]=n},t.parcelRequired7c6=i),i.register("iE7OH",function(n,t){"use strict";e(n.exports,"register",function(){return o},function(e){return o=e}),e(n.exports,"resolve",function(){return s},function(e){return s=e});var o,s,i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},s=function(e){var n=i[e];if(null==n)throw Error("Could not resolve bundle with id "+e);return n}}),i.register("aNJCr",function(n,t){e(n.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,s={};o=function(e){var n=s[e];return n||(n=function(){try{throw Error()}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),s[e]=n),n}}),i("iE7OH").register(JSON.parse('{"l20mf":"shopping-list.e8d6a781.js","XetZQ":"amazon-logo.1ffb51bc.png","fMbus":"applebooks-logo.4be09ee7.png","j9H4y":"bookshop3xOpt.d175b984.png","hQ14e":"trash.e061ba7d.svg","gmy7h":"thispageisempty2xOpt.d40f7c73.png","kfqJ9":"shopping-list.f2782a89.js"}'));var r=i("fGQt0"),a=i("fepPP");i("iSEZc");var c={};c=i("aNJCr").getBundleURL("l20mf")+i("iE7OH").resolve("hQ14e");var l={};l=i("aNJCr").getBundleURL("l20mf")+i("iE7OH").resolve("XetZQ");var p={};p=i("aNJCr").getBundleURL("l20mf")+i("iE7OH").resolve("fMbus");var u={};u=i("aNJCr").getBundleURL("l20mf")+i("iE7OH").resolve("j9H4y");var f={};f=i("aNJCr").getBundleURL("l20mf")+i("iE7OH").resolve("gmy7h");var g=document.querySelector(".shopping-list-js"),d=h(JSON.parse(localStorage.getItem("shoppingList"))||[]);function h(e){return JSON.parse(localStorage.getItem("Shoppinglist"))||e.length>0?e.map(function(e){var t=e._id,o=e.list_name,s=e.author,i=e.book_image,a=e.title,f=e.description,g=(0,r._)(e.buy_links,3),d=g[0],h=d.name,m=d.url,v=g[1],b=v.name,y=v.url,H=g[2],_=H.name,k=H.url;return'\n        <li class="card-book-li" id="'.concat(t,'">\n            <img class="img-book" src="').concat(i,'" alt="').concat(s,", ").concat(a,'">\n            <div class ="card-book-box">\n              <h2 class="book-title" >').concat(a,'</h2>\n              <p class ="category-shopping-list">').concat(o,'</p>\n              <p class="description-shopping-list">').concat(f,'</p>\n              <div class="position-box">\n                <p class="author-shopping-list">').concat(s,'</p>\n                <ul class="buy-links-box">\n                  <li>\n                    <a class="" href="').concat(m,'"><img class="shopping-list-amazon-icon bookshop-image-amazon" src="').concat(n(l),'" alt="').concat(h,'"></a>\n                  </li>\n                  <li>\n                    <a class="" href="').concat(y,'"><img class="shopping-list-apple-book-icon" src="').concat(n(p),'" alt="').concat(b,'"></a>\n                  </li>\n                  <li>\n                    <a class="" href="').concat(k,'"><img class="shopping-list-books-shop-icon" src="').concat(n(u),'" alt="').concat(_,'"></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <button class="remove-shopping-list-btn removeBook-js" ">\n              <svg width="16" height="16" class="remove-boc-icon">\n                <use href="').concat(n(c),'"></use>\n              </svg>\n            </button>\n        </li>\n      ')}).join(""):'\n        <div class="empty-shopping-list">\n          <p class="empty-desc">\n          This page is empty, add some books and proceed to order.\n          </p>\n          <img class ="book-empty" src="'.concat(n(f),'" alt="this page is empty" width="265" height="198">\n        </div>\n      ')}function m(){document.querySelectorAll(".removeBook-js").forEach(function(e){e.addEventListener("click",v)})}function v(e){var t=e.target.closest("li").id,o=JSON.parse(localStorage.getItem("shoppingList"))||[];o=o.filter(function(e){return e._id!==t}),localStorage.setItem("shoppingList",JSON.stringify(o));var s=document.getElementById(t);s&&s.remove(),(0,a.booksRequest)().then(function(e){var n=h(e);g.innerHTML=n,m()}).catch(function(e){return console.log(e)}),0===o.length&&(g.innerHTML='\n    <div class="empty-shopping-list">\n      <p class="empty-desc">\n        This page is empty, add some books and proceed to order.\n      </p>\n      <img class ="book-empty" src="'.concat(n(f),'" alt="this page is empty" width="265" height="198">\n    </div>\n  '))}g.innerHTML=d,m()}();
//# sourceMappingURL=shopping-list.e8d6a781.js.map
