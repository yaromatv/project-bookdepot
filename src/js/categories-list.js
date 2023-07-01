import { fetchCategoriesList } from './books-api';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const categoriesListEl = document.querySelector('.categories-list');

onPageLoad();

async function onPageLoad() {
  try {
    const response = await fetchCategoriesList();

    renderCategoriesList(response);
  } catch (error) {
    // errorMessage();
    console.error(error);
  }
}

function renderCategoriesList(data) {
  const categoriesListMarkup = data
    .map(category => createCategoriesListMarkup(category.list_name))
    .join('');

  categoriesListEl.insertAdjacentHTML('beforeend', categoriesListMarkup);
}

function createCategoriesListMarkup(list_name) {
  return `
    <li class="categories-item">
      <a href="#">${list_name}</a>
    </li>`;
}

// function errorMessage() {
//   const message = 'Sorry, something went wrong. Please try reload a page.';
//   Notify.failure(message, {
//     clickToClose: true,
//     fontSize: '20px',
//     width: '400px',
//   });
// }
