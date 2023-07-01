import { fetchTopBooks } from './books-api';
import { onSeeMore } from './bestsellers-see-more';
import { createTopBooksMarkup } from './gallery-markup';

const topBooksEl = document.querySelector('.top-books');
const topBooksWrapEl = document.querySelector('.top-books-wrap');
const categoryEl = document.querySelector('.category');

export const debouncedHandleResize = debounce(handleResize, 150);

window.addEventListener('resize', debouncedHandleResize);

handleResize();

function handleResize() {
  const windowWidth = window.innerWidth;
  let bookCount = 1;

  if (windowWidth > 768) {
    bookCount = 3;
  }

  if (windowWidth > 1440) {
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
  topBooksEl.classList.remove('hidden');
  categoryEl.innerHTML = '';

  try {
    const response = await fetchTopBooks();
    console.log(response);

    renderTopBooks(response, bookCount);
    const showMoreBtn = document.querySelector('.top-books-category-btn');
    showMoreBtn.addEventListener('click', onSeeMore);
  } catch (error) {
    // errorMessage();
    console.error(error);
  }
}

function renderTopBooks(data, bookCount) {
  const topBooksMarkup = data
    .map(category => createTopBooksMarkup(category, bookCount))
    .join('');

  topBooksWrapEl.innerHTML = topBooksMarkup;
}
