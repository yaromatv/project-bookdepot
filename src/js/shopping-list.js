import { booksRequest } from './books-api';
const searchEL = document.querySelector('.button-shopping');
const linkEl = document.querySelector('.link-js')
const listEl = document.querySelector('.shopping-list-js');
console.log(listEl)
searchEL.addEventListener('click', onSearch);
linkEl.addEventListener('click', onLink);
// Додавання в LocalStorage
function onSearch(evt) {
  evt.preventDefault();
  const data = {
    "_id": "642fd89ac8cf5ee957f1236",
    "list_name": "Middle Grade Paperback Monthly",
    "date": "2023-04-07T08:46:57.000Z",
    "age_group": "",
    "amazon_product_url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",
    "article_chapter_link": "",
    "author": "Barbara O'Connor",
    "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
    "book_image_width": 330,
    "book_image_height": 485,
    "book_review_link": "",
    "book_uri": "nyt://book/46604242-8624-57d1-bdd4-424c21cde273",
    "contributor": "by Barbara O'Connor",
    "contributor_note": "",
    "created_date": "2023-04-05 23:10:17",
    "description": "",
    "first_chapter_link": "",
    "price": "0.00",
    "primary_isbn10": "1250144051",
    "primary_isbn13": "9781250144058",
    "publisher": "Square Fish",
    "rank": 1,
    "rank_last_week": 0,
    "sunday_review_link": "",
    "title": "WISH",
    "updated_date": "2023-04-05 23:10:17",
    "weeks_on_list": 0
  };
  addToLocalStorage(data);
  updateShoppingList();
}
// Додавання даних до LocalStorage
function addToLocalStorage(data) {
  const existingArray = JSON.parse(localStorage.getItem('myArray')) || [];
  existingArray.push(data);
  localStorage.setItem('myArray', JSON.stringify(existingArray));
  console.log('Масив був доданий до LocalStorage!');
}
// Оновлення списку покупок
function updateShoppingList() {
  booksRequest()
    .then((data) => {
      const markup = createMarkup(data);
      listEl.innerHTML = markup;
      addRemoveListeners();
    })
    .catch((err) => console.log(err));
}
// Витягування даних з LocalStorage при натисканні на посилання "Shopping list"
function onLink(evt) {
  const myArray = JSON.parse(localStorage.getItem("myArray"));
  if (!myArray || myArray.length === 0) {
    console.log("У кошику немає книг");
    return;
  }
  const markup = createMarkup(myArray);
  listEl.innerHTML = markup;
  addRemoveListeners();
}
// Створення розмітки списку книг
function createMarkup(arr) {
  return arr.map(({ _id, list_name, author, book_image, title, description, buy_links: [{ },{ },{ },] }) => `
      <li class="card-book" id="${_id}">
        <div class="container-shopping-flex">
          <img src="${book_image}" alt="${author}, ${title}">
          <div>
            <h2>${title}</h2>
            <p>${list_name}</p>
            <p>${description}</p>
          </div>
        </div>
        <div>
          <p>${author}</p>
          <ul>
            <li>
              <a>${buy_links}</a>
            </li>
            <li>
              <a>${buy_links}</a>
            </li>
            <li>
              <a>${buy_links}</a>
            </li>
          </ul>
        </div>
        <button class="removeBook-js">delete</button>
      </li>
    `)
    .join('');
}
// Додавання слухачів подій до кнопок видалення
function addRemoveListeners() {
  const removeButtons = document.querySelectorAll('.removeBook-js');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeDataFromShoppingList);
  });
}
// Видалення даних з LocalStorage та оновлення списку
function removeDataFromShoppingList(evt) {
    const bookId = evt.target.closest('li').id;
    const myArray = JSON.parse(localStorage.getItem("myArray"));
    if (!myArray) {
      console.log("У кошику немає книг");
      return;
    }
    const updatedArray = myArray.filter(book => book._id !== bookId);
    console.log(updatedArray)
    localStorage.setItem('myArray', JSON.stringify(updatedArray));
    console.log("Книга видалена!");
    updateShoppingList();
  }