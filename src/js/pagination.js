import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../css/components/pagination.css';

import { updateMarkup } from './shopping-list.js';


const shoppingList = localStorage.getItem('shoppingList');
const shoppingListArray = JSON.parse(shoppingList);

let visiblePages = 2;
let itemsPerPage = 4;
if (window.innerWidth >= 768) {
  visiblePages = 3;
  itemsPerPage = 3;
}
const options = {
  totalItems: shoppingListArray.length,
  itemsPerPage,
  visiblePages,

};

console.log(options);
const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, options);



pagination.on('beforeMove', (event) => {
  const currentPage = event.page;
console.log(event);
updateMarkup(shoppingListArray
  .slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage));
console.log((currentPage-1)*itemsPerPage, currentPage*itemsPerPage);
});

pagination.movePageTo(1);
