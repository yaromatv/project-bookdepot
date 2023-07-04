import { getBookCount } from './bestsellers';
import bookIconSmall from '../images/png/book-icon-small.png';
import bookIconMedium from '../images/png/book-icon-medium.png';
import bookIconBig from '../images/png/book-icon-big.png';

export function createTopBooksMarkup({ list_name, books }, bookCount) {
  const bookIcon = getBookIconSize(bookCount);

  // FOR TEST
  // books[1].title = '';
  // books[2].author = '';
  // books[1].book_image = '';

  const bookCardsMarkup = books
    .map(({ book_image, title, author, _id }) => {
      const bookCover = bookCoverMarkup(book_image, bookIcon);

      if (title === '') {
        title = 'Missing book title';
      }
      if (author === '') {
        author = 'Missing book author';
      }

      return bookCardMarkup(_id, bookCover, title, author);
    })
    .join('');

  return `<div class="top-books-category-wrap">
    <h3 class="top-books-category-title">${list_name}</h3>
      <ul class="top-books-category-list">${bookCardsMarkup}</ul>
      <button type="button" class="top-books-category-btn">See more</button>
    </div>`;
}

export function createCategoryMarkup({ _id, book_image, title, author }) {
  const bookCount = getBookCount();
  const bookIcon = getBookIconSize(bookCount);

  // FOR TEST
  // title = '';
  // author = '';
  // book_image = '';

  const bookCover = bookCoverMarkup(book_image, bookIcon);

  if (title === '') {
    title = 'Missing book title';
  }
  if (author === '') {
    author = 'Missing book author';
  }

  return bookCardMarkup(_id, bookCover, title, author);
}

function bookCardMarkup(_id, bookCover, title, author) {
  return `<li class="top-books-category-item" data-id=${_id}>
    <a class="top-books-category-item-link" href="#">
        ${bookCover}
      <h4 class="top-books-category-item-title">${title}</h4>
      <p class="top-books-category-item-author">${author}</p>
    </a>
  </li>`;
}

function bookCoverMarkup(book_image, bookIcon) {
  let bookCover = `<div class="top-books-category-item-img-wrap">
      <img class="top-books-category-item-img" src="${book_image}" alt="book cover"/>
      <p class="book-img-overlay">Quick view</p>
    </div>`;

  if (book_image === '') {
    book_image = bookIcon;

    bookCover = `<div class="top-books-category-item-img-wrap icon-wrap">
        <img class="top-books-category-item-icon" src="${bookIcon}" alt="book cover"/>
        <p class="book-img-overlay">Quick view</p>
      </div>`;
  }
  return bookCover;
}

function getBookIconSize(bookCount) {
  let bookIcon = bookIconBig;
  if (bookCount === 3) {
    bookIcon = bookIconMedium;
  } else if (bookCount === 5) {
    bookIcon = bookIconSmall;
  }
  return bookIcon;
}
