const scrollUpBtn = document.querySelector('.scroll-up-btn');
const rootEl = document.documentElement;

// console.log('hi');
// console.log('YOYOYO', rootEl.scrollHeight);
// console.log(rootEl.clientHeight);

document.addEventListener('scroll', () => {
  console.log(rootEl.scrollHeight);
  console.log(rootEl.clientHeight);
});

function onScroll() {
  // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
  // This can be changed - experiment
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.05) {
    // Show button
    scrollUpBtn.classList.add('show-scroll-up-btn');
  } else {
    // Hide button
    scrollUpBtn.classList.remove('show-scroll-up-btn');
  }
}

function scrollUp() {
  // Scroll to top logic
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
scrollUpBtn.addEventListener('click', scrollUp);
document.addEventListener('scroll', onScroll);
