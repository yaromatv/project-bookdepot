import { booksRequest } from './books-api';
import closeIcon from '../images/initial/x-close.svg';
import '../js/dark-mode'

const listEl = document.querySelector('.shopping-list-js');

const myArray = JSON.parse(localStorage.getItem('shoppingList')) || [];
const markup = createMarkup(myArray);
listEl.innerHTML = markup;
addRemoveListeners();

// створення розмітки
function createMarkup(arr) {
  if (arr.length > 0) {
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
                    <a class="" href="${urlLink1}"><img src="" alt="${nameLink1}"></a>
                  </li>
                  <li>
                    <a class="" href="${urlLink2}"><img src="" alt="${nameLink2}"></a>
                  </li>
                  <li>
                    <a class="" href="${urlLink3}"><img src="" alt="${nameLink3}"></a>
                  </li>
                </ul>
              </div>
            </div>
            <button class="remove-shopping-list-btn removeBook-js" ">
              <svg width="16" height="16" class="remove-boc-icon">
                <use href="${closeIcon}"></use>
              </svg>
            </button>
        </li>
      `
      )
      .join('');
  }
  return `
        <div class="empty-list">
          <p class="empty-desc">
          This page is empty, add some books and proceed to order.
          </p>
          <img src="/src/images/png/thispageisempty2xOpt.png" alt="this page is empty" width="265" height="198">
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
}
// Оновлення списку покупок
function updateShoppingList() {
  booksRequest()
    .then(data => {
      const markup = createMarkup(data);
      listEl.innerHTML = markup;
      addRemoveListeners();
    })
    .catch(err => console.log(err));
}
