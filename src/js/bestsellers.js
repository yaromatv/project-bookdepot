import { fetchTopBooks } from './books-api';
import { createTopBooksMarkup } from './gallery-markup';
import { onChooseCategory } from './category';
import { errorMessage } from './categories-list';
import { loader } from './loader';

const topBooksEl = document.querySelector('.top-books');
const topBooksWrapEl = document.querySelector('.top-books-wrap');

const debouncedHandleResize = debounce(handleResize, 150);

window.addEventListener('resize', debouncedHandleResize);

handleResize();

function handleResize() {
  const bookCount = getBookCount();

  if (topBooksEl.classList.contains('visually-hidden')) {
    return;
  }

  topBooksWrapEl.innerHTML = '';

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
  topBooksEl.classList.remove('visually-hidden');

  try {
    topBooksWrapEl.innerHTML = loader.loaderEl;

    const response = await fetchTopBooks();

    // FOR TEST
    // response.length = 0;

    if (response.length === 0) {
      topBooksWrapEl.innerHTML = `<p class="no-books-message">Sorry, no books found<span>&#128532</span></p>`;
      return;
    }

    renderTopBooks(response, bookCount);
    topBooksEl.addEventListener('click', onChooseCategory);
  } catch (error) {
    topBooksWrapEl.innerHTML = '';
    errorMessage();
    console.error(error);
  }
}

function renderTopBooks(data, bookCount) {
  const topBooksMarkup = data
    .map(category => createTopBooksMarkup(category, bookCount))
    .join('');

  topBooksWrapEl.innerHTML = topBooksMarkup;
}

export function getBookCount() {
  let bookCount = 1;

  if (window.innerWidth > 768) {
    bookCount = 3;
  }

  if (window.innerWidth > 1440) {
    bookCount = 5;
  }

  return bookCount;
}
