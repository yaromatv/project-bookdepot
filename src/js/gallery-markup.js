export function createTopBooksMarkup({ list_name, books }, bookCount) {
  books.length = bookCount;

  const bookCardsMarkup = books
    .map(({ book_image, title, author, _id }) => {
      return `<li class="top-books-category-item">
          <a class="top-books-category-item-link" href="#">
            <span class="book-id hidden">${_id}</span>
            <div class="top-books-category-item-img-wrap">
                <img class="top-books-category-item-img" src="${book_image}" alt="book cover"/>
            </div>
            <h4 class="top-books-category-item-title">${title}</h4>
            <p class="top-books-category-item-author">${author}</p>
          </a>
        </li>`;
    })
    .join('');

  return `<div class="top-books-category-wrap">
    <h3 class="top-books-category-title">${list_name}</h3>
      <ul class="top-books-category-list">${bookCardsMarkup}</ul>
      <button type="button" class="top-books-category-btn">See more</button>
    </div>`;
}

export function createCategoryMarkup({ _id, book_image, title, author }) {
  const bookCardsMarkup = `<li class="category-books-item">
          <a class="top-books-category-item-link" href="#">
            <span class="book-id hidden">${_id}</span>
            <div class="top-books-category-item-img-wrap">
                <img class="top-books-category-item-img" src="${book_image}" alt="book cover"/>
            </div>
            <h4 class="top-books-category-item-title">${title}</h4>
            <p class="top-books-category-item-author">${author}</p>
          </a>
        </li>`;

  return bookCardsMarkup;
}
