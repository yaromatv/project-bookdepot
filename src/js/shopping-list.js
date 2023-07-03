import { booksRequest } from './books-api';
import closeIcon from '../images/initial/x-close.svg';
// const searchEL = document.querySelector('.submit-js');
const linkEl = document.querySelector('.link-js');
const listEl = document.querySelector('.shopping-list-js');
// searchEL.addEventListener('click', onSearch);
linkEl.addEventListener('click', onLink);
// Додавання в LocalStorage
// function onSearch(evt) {
//   evt.preventDefault();
//   const data = {
//     _id: '642fd89ac8cf5ee957f12361',
//     list_name: 'Middle Grade Paperback Monthly',
//     date: '2023-04-07T08:46:57.000Z',
//     age_group: '',
//     amazon_product_url:
//       'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
//     article_chapter_link: '',
//     author: "Barbara O'Connor",
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
//     book_image_width: 330,
//     book_image_height: 485,
//     book_review_link: '',
//     book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
//     contributor: "by Barbara O'Connor",
//     contributor_note: '',
//     created_date: '2023-04-05 23:10:17',
//     description: '',
//     first_chapter_link: '',
//     price: '0.00',
//     primary_isbn10: '1250144051',
//     primary_isbn13: '9781250144058',
//     publisher: 'Square Fish',
//     rank: 1,
//     rank_last_week: 0,
//     sunday_review_link: '',
//     title: 'WISH',
//     updated_date: '2023-04-05 23:10:17',
//     weeks_on_list: 0,
//   };
//   addToLocalStorage(data);
//   updateShoppingList();
// }
// // Додавання даних до LocalStorage
// function addToLocalStorage(data) {
//   const existingArray = JSON.parse(localStorage.getItem('myArray')) || [];
//   existingArray.push(data);
//   localStorage.setItem('myArray', JSON.stringify(existingArray));
//   console.log('Масив був доданий до LocalStorage!');
// }
//
// Витягування даних з LocalStorage при переході на сторінку "Shopping list"
function onLink(evt) {
  evt.preventDefault();
  const myArray = JSON.parse(localStorage.getItem('shoppingList')) || [];
  console.log(myArray);
  const markup = createMarkup(myArray);
  listEl.innerHTML = markup;
  addRemoveListeners();
}
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
        <div class="book-empty-list">
          <p class="book-empty-description">
          This page is empty, add some books and proceed to order.
          </p>
          <div class="book-empty-img"></div>
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
