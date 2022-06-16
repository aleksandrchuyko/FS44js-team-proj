import SimpleLightbox from 'simplelightbox';

import { tmItems } from './modal_tm-arr';

const refs = {
  openModalTmBtn: document.querySelector('[data-action="open-modal_tm"]'),
  closeModalTmBtn: document.querySelector('[data-action="close-modal_tm"]'),
  backdropTm: document.querySelector('.js-backdrop_tm'),
};

refs.openModalTmBtn.addEventListener('click', onOpenModal);
refs.closeModalTmBtn.addEventListener('click', onCloseModal);
refs.backdropTm.addEventListener('click', onBackdropClick);

function onOpenModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

const modalTm = document.querySelector('.modal_tm');
const modalTmMarkup = createModalTmMarkup(tmItems);

modalTm.insertAdjacentHTML('beforeend', modalTmMarkup);
modalTm.addEventListener('click', onOpenSlider);

function createModalTmMarkup(tmItems) {
  return tmItems
    .map(({ preview, original, description }) => {
      return `<a class="member__item" href="${original}">
  <img class="member__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`;
    })
    .join('');
}
function onOpenSlider() {}
let lightbox = new SimpleLightbox('.modal_tm a', { captionDelay: 250 });
