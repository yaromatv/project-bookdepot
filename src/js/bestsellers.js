import { fetchTopBooks } from './books-api';
import { createTopBooksMarkup } from './gallery-markup';
import { onChooseCategory } from './category';
import { errorMessage } from './categories-list';

const topBooksEl = document.querySelector('.top-books');
const topBooksWrapEl = document.querySelector('.top-books-wrap');

export const debouncedHandleResize = debounce(handleResize, 150);

window.addEventListener('resize', debouncedHandleResize);

handleResize();

function handleResize() {
  const bookCount = getBookCount();

  if (topBooksEl.classList.contains('visually-hidden')) {
    return;
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
  topBooksEl.classList.remove('visually-hidden');

  try {
    const response = await fetchTopBooks();
    renderTopBooks(response, bookCount);
    topBooksEl.addEventListener('click', onChooseCategory);
  } catch (error) {
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
