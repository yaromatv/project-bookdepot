import { fetchCategory } from './books-api';
import { createCategoryMarkup } from './gallery-markup';
import { errorMessage } from './categories-list';

const categoriesListEl = document.querySelector('.categories-list');
const topBooksEl = document.querySelector('.top-books');
const categoryEl = document.querySelector('.category');

categoriesListEl.addEventListener('click', onChooseCategory);
topBooksEl.addEventListener('click', onChooseCategory);

let selectedCategoryName = '';

export async function onChooseCategory(e) {
  e.preventDefault();

  if (e.target.classList.contains('categories-list-link')) {
    chooseCategoryFromList(e);
  } else if (e.target.classList.contains('top-books-category-btn')) {
    chooseCategoryFromBestsellers(e);
  } else {
    return;
  }

  if (selectedCategoryName === 'All categories') {
    categoryEl.innerHTML = '';
    topBooksEl.classList.remove('visually-hidden');
    scroll();
    return;
  }

  try {
    const response = await fetchCategory(selectedCategoryName);

    renderCategoryGallery(response);
    scroll();
  } catch (error) {
    errorMessage();
    console.error(error);
  }
}

function renderCategoryGallery(data) {
  topBooksEl.classList.add('visually-hidden');

  let nameLastWord = '';
  const wordsArray = selectedCategoryName.split(' ');
  nameLastWord = wordsArray[wordsArray.length - 1];
  wordsArray.length = wordsArray.length - 1;
  const nameFirstPart = wordsArray.join(' ');

  const categoryMarkup = data.map(book => createCategoryMarkup(book)).join('');

  categoryEl.innerHTML = `<h2 class="category-title gallery-title">
  ${nameFirstPart} <span class="accent-color">${nameLastWord}</span>
  </h2>
  <ul class="category-books-list">${categoryMarkup}</ul>`;
}

function chooseCategoryFromList(e) {
  selectedCategoryName = e.target.textContent;

  const item = categoriesListEl.querySelectorAll('.categories-item');
  item.forEach(li => li.classList.remove('active'));

  e.target.parentNode.classList.add('active');
}

function chooseCategoryFromBestsellers(e) {
  selectedCategoryName = e.target.parentNode.querySelector(
    '.top-books-category-title'
  ).textContent;
}

function scroll() {
  if (window.innerWidth < 1440) {
    topBooksEl.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
