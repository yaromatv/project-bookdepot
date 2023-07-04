import { fetchTopBooks } from './books-api';
import { createTopBooksMarkup } from './gallery-markup';
import { onChooseCategory } from './category';
import { errorMessage } from './categories-list';
import { loader } from './loader';

const topBooksEl = document.querySelector('.top-books');
const topBooksWrapEl = document.querySelector('.top-books-wrap');

export let responseInitial = [];
let bookCountInitial = getBookCount();

showTopBooks(bookCountInitial);

const debouncedHandleResize = debounce(handleResize, 150);

window.addEventListener('resize', debouncedHandleResize);

handleResize();

function handleResize() {
  if (topBooksEl.classList.contains('visually-hidden')) {
    return;
  }

  let bookCount = getBookCount();

  if (bookCountInitial !== bookCount) {
    bookCountInitial = bookCount;
    topBooksWrapEl.innerHTML = '';
    showTopBooks(bookCount);
  }
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
    topBooksWrapEl.innerHTML = loader.loaderEl;
    responseInitial = await fetchTopBooks();

    // FOR TEST
    // responseInitial.length = 0;

    if (responseInitial.length === 0) {
      topBooksWrapEl.innerHTML = `<p class="no-books-message">Sorry, no books found<span>&#128532</span></p>`;
      return;
    }

    renderTopBooks(responseInitial, bookCount);
    topBooksEl.addEventListener('click', onChooseCategory);
  } catch (error) {
    topBooksWrapEl.innerHTML = '';
    errorMessage();
    console.error(error);
  }
}

export function renderTopBooks(responseInitial, bookCount) {
  const responseCurrentBooks = responseInitial.map(category => {
    return {
      list_name: category.list_name,
      books: category.books.slice(0, bookCount),
    };
  });

  topBooksEl.classList.remove('visually-hidden');
  topBooksWrapEl.innerHTML = loader.loaderEl;

  const topBooksMarkup = responseCurrentBooks
    .map(category => createTopBooksMarkup(category, bookCount))
    .join('');

  topBooksWrapEl.innerHTML = topBooksMarkup;
}

export function getBookCount() {
  let bookCount = 1;

  if (document.documentElement.clientWidth >= 768) {
    bookCount = 3;
  }

  if (document.documentElement.clientWidth >= 1440) {
    bookCount = 5;
  }

  return bookCount;
}
