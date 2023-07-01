import { fetchCategory } from './books-api';
import { createCategoryMarkup } from './gallery-markup';

export async function onSeeMore(e) {
  e.preventDefault();

  const selectedCategoryName = e.target.parentNode.querySelector(
    '.top-books-category-title'
  ).textContent;

  console.log(selectedCategoryName);

  try {
    const response = await fetchCategory(selectedCategoryName);

    console.log(response);

    renderCategoryGallery(response);
  } catch (error) {
    // errorMessage();
    console.error(error);
  }
}

function renderCategoryGallery(data) {
  const categoryMarkup = data
    .map(book => createCategoryMarkup(book.book_image))
    .join('');

  categoryBooksListEl.innerHTML = categoryMarkup;
}
