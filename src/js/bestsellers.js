import { fetchTopBooks } from './books-api';

const topBooksEl = document.querySelector('.top-books-wrap');
console.log('topBooksEl:', topBooksEl);

const debouncedHandleResize = debounce(handleResize, 150);

window.addEventListener('resize', debouncedHandleResize);

handleResize();

function handleResize() {
  const windowWidth = window.innerWidth;
  let bookCount = 1;

  if (windowWidth > 768) {
    bookCount = 3;
  }

  if (windowWidth > 1200) {
    bookCount = 5;
  }

  showTopBooks(bookCount);
}

function debounce(func, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

async function showTopBooks(bookCount) {
  try {
    const response = await fetchTopBooks();
    console.log(response);

    renderTopBooks(response, bookCount);
  } catch (error) {
    // errorMessage();
    console.error(error);
  }
}

function renderTopBooks(data, bookCount) {
  const topBooksMarkup = data
    .map(category => createTopBooksMarkup(category, bookCount))
    .join('');

  topBooksEl.innerHTML = topBooksMarkup;
}

function createTopBooksMarkup({ list_name, books }, bookCount) {
  books.length = bookCount;

  const bookCardsMarkup = books
    .map(({ book_image, title, author }) => {
      return `<li class="top-books-category-item">
        <div class="top-books-category-item-img-wrap">
            <img class="top-books-category-item-img" src="${book_image}" alt="book cover"/>
        </div>
        <h4 class="top-books-category-item-title">${title}</h4>
        <p class="top-books-category-item-author">${author}</p>
      </li>`;
    })
    .join('');

  return `<div class="top-books-category-wrap">
  <h3 class="top-books-category-title">${list_name}</h3>
    <ul class="top-books-category-list">${bookCardsMarkup}</ul>
    <button class="top-books-category-btn">See more</button>
  </div>`;
}
