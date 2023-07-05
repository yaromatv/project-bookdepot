import Swiper from 'swiper';

import { fundList } from './fund-list.js';

const supportUkraineList = document.querySelector('.fund-list');

function createFundMarkup(fundList) {
  const isRetina = window.devicePixelRatio > 1.1;
  return fundList.map(({ title, url, img, retinaImg }) => {
    const fundImage = isRetina ? retinaImg : img;
    return `
    <li class="fund swiper-slide">
    <a class="fund-link" href=${url} target="_blank" rel="noreferrer noopener nofollow" >
      <img
        class="fund-image"
        src=${fundImage}
        alt=${title}
        loading="lazy"
      />
    </a>
  </li>
  `;
  });
}

supportUkraineList.insertAdjacentHTML(
  'beforeend',
  createFundMarkup(fundList).join('')
);

// ---------------Swiper with buttons-------------------

const fundBtnDown = document.querySelector('.fund-scroll-down');
const fundBtnUp = document.querySelector('.fund-scroll-up');

fundBtnUp.classList.add('hidden');

const swiper = new Swiper('.my-swiper', {
  direction: 'vertical',
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-down',
    prevEl: '.swiper-button-up',
  },

  plugins: {
    scrollContainer: true,
  },
});

fundBtnDown.addEventListener('click', () => {
  swiper.slideNext();
});

fundBtnUp.addEventListener('click', () => {
  swiper.slidePrev();
});

const hideDownObserver = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;

  fundBtnUp.classList.remove('hidden');
  fundBtnDown.classList.add('hidden');
});

const hideUpObserver = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;

  fundBtnUp.classList.add('hidden');
  fundBtnDown.classList.remove('hidden');
});

hideDownObserver.observe(supportUkraineList.lastElementChild);
hideUpObserver.observe(supportUkraineList.firstElementChild);
