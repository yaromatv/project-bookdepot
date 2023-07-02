const refs = {
  modal: document.querySelector('.modal'),
  bookName: document.querySelector('.book-name'),
  bookAuthor: document.querySelector('.book-author'),
  bookDescr: document.querySelector('.book-description'),
  // addListBtn: document.querySelector(".add-list-btn"),
  testBtn: document.querySelector('.test-btn'),
  backdrop: document.querySelector('.backdrop'),
  closeBtn: document.querySelector('.modal-close-btn'),
};

const id = '643282b1e85766588626a080';

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

  let markup = `<div class="book-item">
          <div class="book-item-content">
            <div class="img-container">
              <img class="book-cover" src="${bookImage}" max-width="287" height="408"  alt="book cover" />
            </div>

            <div class="book-details">
              <h2 class="book-name">${titleText}</h2>
              <h3 class="book-author">${authorText}</h3>
              <p class="book-description">${descriptionText}</p>
              <ul class="online-stores">
                <li class="online-shop-item">
                  <a href="" class="online-store-link">
                    <svg class="online-store-icon" width="16" height="16">
                      <use href=""></use>
                    </svg>
                  </a>
                </li>
                <li class="online-shop-item">
                  <a href="" class="online-store-link">
                    <svg class="online-store-icon" width="16" height="16">
                      <use href=""></use>
                    </svg>
                  </a>
                </li>
                <li class="online-shop-item">
                  <a href="" class="online-store-link">
                    <svg class="online-store-icon" width="16" height="16">
                      <use href=""></use>
                    </svg>
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
}

bookDetails(id);

// // const allBooks = document.querySelectorAll(".top-books-category-list");

// // allBooks.addEventListener("click", (event) => {
// //   if (event.target.tagName === "LI") {
// //     const li = event.target;
// //     const bookId = li.querySelector(".book-id").textContent;
// //   }
// // });

// =============== MODAL LISTENERS =================

refs.testBtn.addEventListener('click', onModalOpen);

function onModalOpen() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.toggle('is-hidden');

  refs.backdrop.addEventListener('click', onBackdropClick);
  refs.closeBtn.addEventListener('click', onModalClose);
  window.addEventListener('keydown', onEscKeyPress);
}

function onModalClose() {
  refs.backdrop.classList.toggle('is-hidden');

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
