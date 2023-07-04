import { booksRequest } from './books-api';

import closeIcon from '../images/initial/x-close.svg';
import '../js/dark-mode'

import trashIcon from '../images/initial/trash.svg';
import amazonIcon from '../images/png/amazon3xOpt.png';
import appleBooksIcon from '../images/png/openbook3xOpt.png';
import bookShopIcon from '../images/png/bookshop3xOpt.png';
import bookEmptyIcon from '../images/png/thispageisempty2xOpt.png';


const listEl = document.querySelector('.shopping-list-js');

const myArray = JSON.parse(localStorage.getItem('shoppingList')) || [];
const markup = createMarkup(myArray);
listEl.innerHTML = markup;
addRemoveListeners();

function createMarkup(arr) {
  const shoppingList = JSON.parse(localStorage.getItem('Shoppinglist'));
  if (shoppingList || arr.length > 0) {
    return arr
      .map(
        ({
          _id,
          list_name,
          author,
          book_image,
          title,
          description,
          buy_links: [
            { name: nameLink1, url: urlLink1 },
            { name: nameLink2, url: urlLink2 },
            { name: nameLink3, url: urlLink3 },
          ],
        }) => `
        <li class="card-book-li" id="${_id}">
            <img class="img-book" src="${book_image}" alt="${author}, ${title}">
            <div class ="card-book-box">
              <h2 class="book-title" >${title}</h2>
              <p class ="category-shopping-list">${list_name}</p>
              <p class="description-shopping-list">${description}</p>
              <div class="position-box">
                <p class="author-shopping-list">${author}</p>
                <ul class="buy-links-box">
                  <li>
                    <a class="" href="${urlLink1}"><img class="shopping-list-amazon-icon" src="${amazonIcon}" alt="${nameLink1}"></a>
                  </li>
                  <li>
                    <a class="" href="${urlLink2}"><img class="shopping-list-apple-book-icon" src="${appleBooksIcon}" alt="${nameLink2}"></a>
                  </li>
                  <li>
                    <a class="" href="${urlLink3}"><img class="shopping-list-books-shop-icon" src="${bookShopIcon}" alt="${nameLink3}"></a>
                  </li>
                </ul>
              </div>
            </div>
            <button class="remove-shopping-list-btn removeBook-js" ">
              <svg width="16" height="16" class="remove-boc-icon">
                <use href="${trashIcon}"></use>
              </svg>
            </button>
        </li>
      `
      )
      .join('');
  }
  return `
        <div class="empty-shopping-list">
          <p class="empty-desc">
          This page is empty, add some books and proceed to order.
          </p>
          <img class ="book-empty" src="${bookEmptyIcon}" alt="this page is empty" width="265" height="198">
        </div>
      `;
}
function addRemoveListeners() {
  const removeButtons = document.querySelectorAll('.removeBook-js');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeDataFromShoppingList);
  });
}
// Видалення даних з LocalStorage та оновлення списку
function removeDataFromShoppingList(evt) {
  const bookId = evt.target.closest('li').id;
  let myArray = JSON.parse(localStorage.getItem('shoppingList')) || [];
  // Видалення об'єкта з LocalStorage за його id
  myArray = myArray.filter(book => book._id !== bookId);
  localStorage.setItem('shoppingList', JSON.stringify(myArray));
  // Видалення ел з розмітки за id
  const cardBookEl = document.getElementById(bookId);
  if (cardBookEl) {
    cardBookEl.remove();
  }
  updateShoppingList();

  // Оновлення розмітки, якщо список порожній
  if (myArray.length === 0) {
    listEl.innerHTML = createEmptyMarkup();
  }
}

function createEmptyMarkup() {
  return `
    <div class="empty-shopping-list">
      <p class="empty-desc">
        This page is empty, add some books and proceed to order.
      </p>
      <img class ="book-empty" src="${bookEmptyIcon}" alt="this page is empty" width="265" height="198">
    </div>
  `;
}

function updateShoppingList() {
  booksRequest()
    .then(data => {
      const markup = createMarkup(data);
      listEl.innerHTML = markup;
      addRemoveListeners();
    })
    .catch(err => console.log(err));
}
