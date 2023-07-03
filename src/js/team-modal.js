import { team } from './team-items';
// import svgGithubUrl from '../images/sprite.svg';

const openModalTeamLink = document.querySelector('.footer-link');
const closeModalTeamBtn = document.querySelector('.modal-team__close-btn');
const modalTeam = document.querySelector('[data-modal-team]');
const teamList = document.querySelector('.modal-team__list');

createMarkupTeam();
openModalTeamLink.addEventListener('click', onClickModalTeam);
closeModalTeamBtn.addEventListener('click', onCloseModalTeam);
// document.body.addEventListener('keyup', onKeyCloseModalTeam, false);

function onClickModalTeam(evt) {
  evt.preventDefault();
  document.body.classList.add('modal-team-open');
  modalTeam.classList.remove('backdrop-team--hidden');
  window.addEventListener('keyup', onKeyUp);
}

function onCloseModalTeam(evt) {
  evt.preventDefault();
  closeModalTeam();
}

function createMarkupTeam() {
  const markup = team
    .map(
      ({ name, img, position, url }) => ` <li class="modal-team__item">
  <div class="modal-team__img-container">
      <img class="modal-team__img" src="${img}" alt="${name}" width="150" height="150">
      <a class="modal-team__link-github" target="_blank" href="${url}">
              <svg class="modal-team__icon-github" width="24" height="24">
              <use href="./images/sprite.svg#icon-lock"></use>
          </svg></a>
  </div>
  
  <h3 class="modal-team__title">${name}</h3>
  <span class="modal-team__position">${position}</span>
</li>`
    )
    .join('');
  teamList.insertAdjacentHTML('beforeend', markup);
}

modalTeam.addEventListener('click', onBackdropClick);

function onBackdropClick(e) {
  if (e.target.classList.contains('backdrop-team')) {
    closeModalTeam();
  }
}

function onKeyUp({ code }) {
  if (code === 'Escape') {
    closeModalTeam();
  }
}

function closeModalTeam() {
  modalTeam.classList.add('backdrop-team--hidden');
  document.body.classList.remove('modal-team-open');
  window.removeEventListener('keyup', onKeyUp);
}
