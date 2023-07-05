// !!!!!!!!!!!!!              Hilighting of current pages         !!!!!!!!!!!!!!!!!!
// const homeLink = document.querySelector('[data-page="home-list"]');
// const ShoppingListLink = document.querySelector('[data-page="shpng-list"]');

// const navHreffsArr = document.querySelectorAll('.js-link');
// console.dir(navHreffsArr);
// navHreffsArr.forEach((navLink) => {
//     if (navLink.href===navLink.baseURI) {
//         navLink.style.backgroundColor = "#EAC645";
//         navLink.style.color = "#111111";
        
//     } else {
//         navLink.style.backgroundColor = "transparent";
//         navLink.style.color = "#111111";
//     }
// })




// !!!!!!!!!!!!!!!           close-btn in burger-menu          !!!!!!!!!!!!!!!!!!!


document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.js-mobile-menu-toggle');
  const mobileMenuClose = document.querySelector('.js-close-menu');

  mobileMenuToggle.addEventListener('click', function() {
  mobileMenuClose.classList.toggle('show');
  });

  mobileMenuClose.addEventListener('click', function() {
    mobileMenuClose.classList.remove('show');
  });
    
  mobileMenuToggle.addEventListener('click', function() {
  mobileMenuToggle.classList.add('hidden');
  mobileMenuClose.classList.remove('hidden');
});

mobileMenuClose.addEventListener('click', function() {
  mobileMenuClose.classList.add('hidden');
  mobileMenuToggle.classList.remove('hidden');
});
});






// !!!!!!!!!!!!!!!!!!!!!!!          BURGER MENU                !!!!!!!!!!!!!!!!!!!!!!!!!!

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    mobileMenu.classList.toggle('is-open');

  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();








