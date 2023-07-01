import { fetchCategory, fetchTopBooks } from './books-api';
import { createCategoryMarkup } from './gallery-markup';
import { debouncedHandleResize } from './bestsellers';

const categoriesListEl = document.querySelector('.categories-list');
const topBooksEl = document.querySelector('.top-books');
const categoryEl = document.querySelector('.category');

categoriesListEl.addEventListener('click', onChooseCategory);

let selectedCategoryName = '';

export async function onChooseCategory(evt) {
  selectedCategoryName = evt.target.textContent;

  const item = categoriesListEl.querySelectorAll('.categories-item');
  item.forEach(li => li.classList.remove('active'));

  evt.target.parentNode.classList.add('active');

  if (selectedCategoryName === 'All categories') {
    debouncedHandleResize();
  }

  try {
    const response = await fetchCategory(selectedCategoryName);

    renderCategoryGallery(response);
  } catch (error) {
    // errorMessage();
    console.error(error);
  }
}

function renderCategoryGallery(data) {
  topBooksEl.classList.add('hidden');
  categoryEl.classList.remove('hidden');

  let nameLastWord = '';

  const splitCategoryName = name => {
    const wordsArray = name.split(' ');
    nameLastWord = wordsArray[wordsArray.length - 1];
    wordsArray.length = wordsArray.length - 1;

    return wordsArray;
  };

  const nameFirstPart = splitCategoryName(selectedCategoryName).join(' ');

  const categoryMarkup = data.map(book => createCategoryMarkup(book)).join('');

  categoryEl.innerHTML = `<h2 class="category-title gallery-title">
  ${nameFirstPart} <span class="accent-color">${nameLastWord}</span>
  </h2>
  <ul class="category-books-list">${categoryMarkup}</ul>`;
}
