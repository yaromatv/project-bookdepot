import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../css/components/pagination.css';

import { updateMarkup } from './shopping-list.js';

let shoppingList = localStorage.getItem('shoppingList');
let shoppingListArray = JSON.parse(shoppingList);

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

if (shoppingListArray.length / itemsPerPage <= 1) return;

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, options);

pagination.on('beforeMove', event => {
  const currentPage = event.page;
  updateMarkup(
    shoppingListArray.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )
  );
  addRemoveListeners();
});

pagination.movePageTo(1);

function addRemoveListeners() {
  const removeButtons = document.querySelectorAll('.removeBook-js');
  removeButtons.forEach(button => {
    button.addEventListener('click', refreshPage);
  });
}

function refreshPage() {
  shoppingList = localStorage.getItem('shoppingList');
  shoppingListArray = JSON.parse(shoppingList);
  let currentPage = pagination.getCurrentPage();
  pagination.reset(shoppingListArray.length);
  pagination.movePageTo(currentPage);
  if (shoppingListArray.length / itemsPerPage <= 1) {
    container.classList.add('hidden');
  }
}
