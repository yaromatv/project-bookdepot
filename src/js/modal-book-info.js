// import { createTopBooksMarkup } from './gallery-markup.js';
import amazon from '../images/png/amazon3xOpt.png';
import appleBooks from '../images/png/openbook3xOpt.png';
import bookShop from '../images/png/bookshop3xOpt.png';

const refs = {
  modal: document.querySelector('.modal'),
  bookName: document.querySelector('.book-name'),
  bookAuthor: document.querySelector('.book-author'),
  bookDescr: document.querySelector('.book-description'),
  // addListBtn: document.querySelector(".add-list-btn"),
  closeBtn: document.querySelector('.modal-close-btn'),
  backdrop: document.querySelector('.backdrop'),
};

const galleryEl = document.querySelector('.gallery-section');
console.log(galleryEl);

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  const targetElement = e.target.closest('.top-books-category-item');
  if (targetElement) {
    const dataId = targetElement.getAttribute('data-id');
    bookDetails(dataId);
  }
}

async function bookDetails(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`)
    .then(response => response.json())
    .then(data => {
      createModalMarkup(data);
      return data;
    })
    .then(newData => {
      const addListBtn = document.querySelector('.add-list-btn');
      const {
        _id,
        book_image,
        title,
        list_name,
        description,
        author,
        buy_links,
        book_image_width,
        book_image_height,
      } = newData;
      const bookId = _id;
      console.log(bookId);

      const bookInfo = {
        _id,
        book_image,
        title,
        author,
        list_name,
        description,
        buy_links,
        book_image_width,
        book_image_height,
      };

      addListBtn.addEventListener('click', () => {
        const currentBooks =
          JSON.parse(localStorage.getItem('shoppingList')) || [];
        console.log(currentBooks);
        const isBookInShoppingList = currentBooks.find(
          book => book._id === bookId
        );

        if (isBookInShoppingList) {
          const updatedBooks = currentBooks.filter(book => book._id !== bookId);
          localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
          console.log('Book removed from shopping list!');
          addListBtn.textContent = 'Add to shopping list';
        } else {
          currentBooks.push(bookInfo);
          localStorage.setItem('shoppingList', JSON.stringify(currentBooks));
          console.log('Book added to shopping list!');
          addListBtn.textContent = 'Remove from the shopping list';
        }
      });

      return newData;
    });
}

function createModalMarkup(data) {
  const {
    _id,
    book_image,
    title,
    list_name,
    description,
    author,
    buy_links,
    book_image_width,
    book_image_height,
  } = data;

  const titleText = title ? title : 'BOOK TITLE';
  const authorText = author ? author : 'AUTHOR TITLE';
  const descriptionText = description
    ? description
    : 'This is wonderful description of a wonderful book that you should definitely buy via one of the links below';
  const bookImage = book_image
    ? book_image
    : 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

  let markup = `
  <button type="button" class="modal-close-btn" data-modal-close>
      <svg class="modal-close-btn-icon" width="100" height="100">
        <use href="./images/sprite.svg#icon-x-close"></use>
      </svg>
    </button>
  <div class="book-item">
          <div class="book-item-content">
            <div class="img-container">
              <img class="book-cover" src="${bookImage}" max-width="287" max-height="408"  alt="book cover" />
            </div>

            <div class="book-details">
              <h2 class="book-name">${titleText}</h2>
              <h3 class="book-author">${authorText}</h3>
              <p class="book-description">${descriptionText}</p>
              <ul class="online-stores">
                <li class="online-shop-item">
                  <a href="${buy_links[0].url}" class="online-store-link">
                     <img
                            src="${amazon}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                  </a>
                </li>
                <li class="online-shop-item">
                 <a href="${buy_links[1].url}" class="online-store-link">
                     <img
                            src="${appleBooks}"
                            alt="logo AppleBooks"
                            width="62"
                            height="19"
                            />
                  </a>
                </li>
                <li class="online-shop-item">
                  <a href="${buy_links[2].url}" class="online-store-link">
                     <img
                            src="${bookShop}"
                            alt="logo BookShop"
                            width="62"
                            height="19"
                            />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="button-container">
            <button type="button" class="add-list-btn">
              Add to shopping list
            </button>
          </div>
        </div>`;

  refs.modal.innerHTML = markup;

  refs.closeBtn = document.querySelector('.modal-close-btn');
  refs.closeBtn.addEventListener('click', onModalClose);
  window.addEventListener('keydown', onEscKeyPress);
  console.log(refs.closeBtn);
}

// bookDetails(id);

// =============== MODAL LISTENERS =================

galleryEl.addEventListener('click', onModalOpen);

function onModalOpen(e) {
  const targetElement = e.target.closest('.top-books-category-item');
  if (targetElement) {
    window.addEventListener('keydown', onEscKeyPress);
    refs.backdrop.classList.toggle('is-hidden');
    document.body.classList.add('modal-open');
    refs.backdrop.addEventListener('click', onBackdropClick);
  }
}

function onModalClose() {
  refs.modal.innerHTML = '';
  refs.backdrop.classList.toggle('is-hidden');
  document.body.classList.remove('modal-open');

  refs.backdrop.removeEventListener('click', onModalClose);
  refs.closeBtn.removeEventListener('click', onModalClose);
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onModalClose();
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onModalClose();
  }
}
