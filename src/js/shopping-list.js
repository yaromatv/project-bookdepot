import './support-ukraine';

import '../js/dark-mode';

import amazonIcon from '../images/png/amazon-logo.png';
import appleBooksIcon from '../images/png/applebooks-logo.png';
import bookShopIcon from '../images/png/bookshop3xOpt.png';
import bookEmptyIcon from '../images/png/thispageisempty2xOpt.png';

const listEl = document.querySelector('.shopping-list-js');

const myArray = JSON.parse(localStorage.getItem('shoppingList')) || [];
updateMarkup(myArray);

function updateMarkup(arr) {
  let markup;
  const shoppingList = JSON.parse(localStorage.getItem('Shoppinglist'));
  if (shoppingList || arr.length > 0) {
    markup = arr
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
                    <a class="" href="${urlLink1}"><img class="shopping-list-amazon-icon bookshop-image-amazon" src="${amazonIcon}" alt="${nameLink1}"></a>
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
             <button id="${_id}" class="remove-shopping-list-btn removeBook-js"></button>

            </button>
        </li>
      `
      )
      .join('');
  } else
    markup = `
        <div class="empty-shopping-list">
          <p class="empty-desc">
          This page is empty, add some books and proceed to order.
          </p>
          <img class ="book-empty" src="${bookEmptyIcon}" alt="this page is empty" width="265" height="198">
        </div>
      `;

  listEl.innerHTML = markup;
  addRemoveListeners();
}
function addRemoveListeners() {
  const removeButtons = document.querySelectorAll('.removeBook-js');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeDataFromShoppingList);
  });
}

function removeDataFromShoppingList(evt) {
  const bookId = evt.target.closest('li').id;
  let myArray = JSON.parse(localStorage.getItem('shoppingList')) || [];

  myArray = myArray.filter(book => book._id !== bookId);
  localStorage.setItem('shoppingList', JSON.stringify(myArray));

  const cardBookEl = document.getElementById(bookId);
  if (cardBookEl) {
    cardBookEl.remove();
  }
}

export { updateMarkup };
