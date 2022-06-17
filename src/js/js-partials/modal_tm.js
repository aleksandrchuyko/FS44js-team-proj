import {openModalTm, closeModalTm, backdropTm  } from "../utils/references";

openModalTm.addEventListener('click', onOpenModal);
closeModalTm.addEventListener('click', onCloseModal);
backdropTm.addEventListener('click', onBackdropClick);

function onOpenModal(e) {
  e.preventDefault()
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
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
