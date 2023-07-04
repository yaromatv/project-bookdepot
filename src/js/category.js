import { fetchCategory } from './books-api';
import { responseInitial, getBookCount, renderTopBooks } from './bestsellers';
import { createCategoryMarkup } from './gallery-markup';
import { errorMessage } from './categories-list';
import { loader } from './loader';

const categoriesListEl = document.querySelector('.categories-list');
const galleryEl = document.querySelector('.gallery-section');
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
    scroll(galleryEl);
    const bookCount = getBookCount();

    renderTopBooks(responseInitial, bookCount);
    return;
  }

  try {
    topBooksEl.classList.add('visually-hidden');
    categoryEl.innerHTML = loader.loaderEl;

    const response = await fetchCategory(selectedCategoryName);

    renderCategoryGallery(response);
    scroll(galleryEl);
  } catch (error) {
    categoryEl.innerHTML = '';
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

  // FOR TEST
  // data.length = 0;

  let categoryMarkup = '';
  if (data.length !== 0) {
    categoryMarkup = data.map(book => createCategoryMarkup(book)).join('');
  } else {
    categoryMarkup = `<p class="no-books-message">Sorry, no books found<span>&#128532</span></p>`;
  }

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

  const listItem = categoriesListEl.querySelectorAll('.categories-item');
  listItem.forEach(li => {
    const link = li.querySelector('.categories-list-link');
    if (link.textContent === selectedCategoryName) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
}

function scroll(el) {
  if (document.documentElement.clientWidth <= 375) {
    const position = el.getBoundingClientRect().top + window.scrollY - 40;

    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  } else if (document.documentElement.clientWidth <= 768) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
