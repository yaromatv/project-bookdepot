import { fetchCategory, fetchTopBooks } from './books-api';

const categoriesListEl = document.querySelector('.categories-list');
const topBooksEl = document.querySelector('.top-books');
const categoryBooksListEl = document.querySelector('.category-books-list');

categoriesListEl.addEventListener('click', onChooseCategory);

async function onChooseCategory(evt) {
  const selectedCategoryName = evt.target.textContent;

  console.log(selectedCategoryName);

  try {
    if (selectedCategoryName === 'All categories') {
      const response = await fetchTopBooks();
      console.log(response);

      renderMainGallery(response);
    } else {
      const response = await fetchCategory(selectedCategoryName);

      console.log(response);

      categoryBooksListEl.classList.remove('hidden');
      renderCategoryGallery(response);
    }
  } catch (error) {
    // errorMessage();
    console.error(error);
  }
}

function renderMainGallery(data) {
  const galleryMainMarkup = data
    .map(book => createGalleryMainMarkup(book))
    .join('');

  topBooksEl.innerHTML = galleryMainMarkup;
}

function renderCategoryGallery(data) {
  const galleryMainMarkup = data
    .map(book => createGalleryCategoryMarkup(book.book_image))
    .join('');

  categoryBooksListEl.innerHTML = galleryMainMarkup;
}

function createGalleryMainMarkup({ list_name, books }) {
  return `
  <p class="top-books-category-title">${list_name}</p>
  <ul class="top-books-list">
    <li class="top-books-item">
      <a href="#"><img src="${books[0].book_image}"></a>
    </li>
    <li class="top-books-item">
      <a href="#"><img src="${books[1].book_image}"></a>
    </li>
    <li class="top-books-item">
      <a href="#"><img src="${books[2].book_image}"></a>
    </li>
    <li class="top-books-item">
      <a href="#"><img src="${books[3].book_image}"></a>
    </li>
    <li class="top-books-item">
      <a href="#"><img src="${books[4].book_image}"></a>
    </li>
  </ul >`;
}

function createGalleryCategoryMarkup(book_image) {
  return `
      <li class="top-book">
        <a href="#"><img src='${book_image}'></a>
      </li>`;
}
