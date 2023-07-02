// const refs = {
//   bookName: document.querySelector('.book-name'),
//   bookAuthor: document.querySelector('.book-author'),
//   bookDescr: document.querySelector('.book-description'),
//   addListBtn: document.querySelector('.add-list-btn'),
//   testBtn: document.querySelector('.test-btn'),
//   backdrop: document.querySelector('.backdrop'),
//   closeBtn: document.querySelector('.modal-close-btn'),
// };

// const id = '643282b1e85766588626a080';

// function bookDetails() {
//   return fetch(`https://books-backend.p.goit.global/books/${id}`)
//     .then(response => response.json())
//     .then(workData => {
//       const {
//         _id,
//         book_image,
//         title,
//         list_name,
//         description,
//         author,
//         buy_links,
//       } = workData;

//       onAddtoList({
//         _id,
//         book_image,
//         title,
//         list_name,
//         description,
//         author,
//         buy_links,
//       });

//       return workData;
//     });
// }

// bookDetails();

// // =============== MODAL LISTENERS =================

// refs.testBtn.addEventListener('click', onModalOpen);

// function onModalOpen() {
//   window.addEventListener('keydown', onEscKeyPress);
//   refs.backdrop.classList.toggle('is-hidden');

//   refs.backdrop.addEventListener('click', onBackdropClick);
//   refs.closeBtn.addEventListener('click', onModalClose);
//   window.addEventListener('keydown', onEscKeyPress);
// }

// function onModalClose() {
//   refs.backdrop.classList.toggle('is-hidden');

//   refs.backdrop.removeEventListener('click', onModalClose);
//   refs.closeBtn.removeEventListener('click', onModalClose);
//   window.removeEventListener('keydown', onEscKeyPress);
// }

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     onModalClose();
//   }
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onModalClose();
//   }
// }

// // ===============ADD BUTTON LOGIC =================

// // Передаємо в localStorage для Артема book_image, title, list_name, description
// // author, buy_links []
// refs.addListBtn.addEventListener('click', onAddtoList);

// function onAddtoList({
//   _id,
//   book_image,
//   title,
//   list_name,
//   description,
//   author,
//   buy_links,
// }) {
//   const bookId = _id;

//   const bookInfo = {
//     _id,
//     book_image,
//     title,
//     author,
//     list_name,
//     description,
//     buy_links,
//   };

//   let currentBook = localStorage.getItem(`${bookId}`);

//   if (currentBook) {
//     localStorage.removeItem(`${bookId}`);
//     console.log(localStorage);

//     refs.addListBtn.textContent = 'Add to shopping list';
//   } else {
//     localStorage.setItem(`${bookId}`, JSON.stringify(bookInfo));
//     console.log(localStorage);

//     refs.addListBtn.textContent = 'Remove from the shopping list';
//   }
// }
