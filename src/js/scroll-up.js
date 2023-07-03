const scrollUpBtn = document.querySelector('.scroll-up-btn');

function onScroll() {
  if (window.scrollY > 100) {
    scrollUpBtn.classList.add('show-scroll-up-btn');
  } else {
    scrollUpBtn.classList.remove('show-scroll-up-btn');
  }
}

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
scrollUpBtn.addEventListener('click', scrollUp);
document.addEventListener('scroll', onScroll);
