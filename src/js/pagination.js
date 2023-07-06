import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../css/components/pagination.css';

const shoppingList = localStorage.getItem('shoppingList');
const shoppingListArray = JSON.parse(shoppingList);
console.log(shoppingListArray.length);

let visiblePages = 2;
let itemsPerPage = 7;
if (window.innerWidth >= 768) {
  visiblePages = 3;
  itemsPerPage = 8;
}
const options = {
  totalItems: 500,
  itemsPerPage,
  visiblePages,

};


const container = document.getElementById('tui-pagination-container');

const instance = new Pagination(container, options);


console.log(instance.getCurrentPage());


console.log(shoppingList);

function visiblePagination() {
  if (!localStorage.getItem('shoppingList') || shoppingList.length === 0) {
  container.style.display = 'none';}
else{container.style.display = 'flex';}
}

const totalPages = Math.ceil(shoppingListArray.length / itemsPerPage);
const paginatedItems = Array.from({ length: totalPages }, (_, i) =>
  shoppingListArray.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
);
