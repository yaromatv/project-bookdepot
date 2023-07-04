// import Swiper, { Navigation } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';

import { fundList } from './fund-list.js';

const supportUkraineList = document.querySelector('.fund-list');

function createFundMarkup(fundList) {
  const isRetina = window.devicePixelRatio > 1.1;
  const fundMarkup = fundList.map(({ title, url, img, retinaImg }) => {
    const fundImage = isRetina ? retinaImg : img;
    return `
    <li class="fund">
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
  return fundMarkup;
}

supportUkraineList.insertAdjacentHTML(
  'beforeend',
  createFundMarkup(fundList).join('')
);

// const swiper = new Swiper('.my-swiper', {
//     direction: 'vertical',
//     spaceBetween: 20,
//     slidesPerView: 'auto',
  
//     navigation: {
//       nextEl: '.swiper-button-down',
//       prevEl: '.swiper-button-up',
//     },
  
//     plugins: {
//       scrollContainer: true,
//     },
//   });

const fundBtn = document.querySelector('.fund-scroll');  
const fundScrollDownBtn = document.querySelector('.swiper-button-down');
const fundScrollUpBtn = document.querySelector('.swiper-button-up');

// let activeSwiperEl = 5;

// fundBtn.addEventListener('click', () => {
//   swiper.slideNext();

//   if (
//     supportUkraineList.children[activeSwiperEl].classList.contains('swiper-slide-active')
//   ) {
//     fundBtn.style.display = 'none';
//     fundScrollUpBtn.style.display = 'block';
//   }
// });

// fundScrollUpBtn.addEventListener('click', () => {
//   swiper.slidePrev();
//   if (supportUkraineList.children[0].classList.contains('swiper-slide-active')) {
//     fundScrollUpBtn.style.display = 'none';
//     fundBtn.style.display = 'block';
//   }
// });
