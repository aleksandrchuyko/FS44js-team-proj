import { refs } from './refs';
// refs.navHome.addEventListener('click', onClickHeaderHomeBth);
refs.navLibrary.addEventListener('click', onClickHeaderLibraryBth);
refs.watchedBtn.addEventListener('click', onClickWatchesBth);
refs.queueBtn.addEventListener('click', onClickQueueBth);

// ------ Stepan: я це закоментував оскільки рендер HomePage є моєю задачею -------//

// function onClickHeaderHomeBth() {
//     refs.libraryBtns.classList.add('is-hidden');
//     refs.inputForm.classList.remove('is-hidden');
//     refs.navHome.classList.add('current');
//     refs.navLibrary.classList.remove('current');
//     refs.header.classList.remove('header__my-library');
// }

function onClickHeaderLibraryBth() {
  refs.inputForm.classList.add('is-hidden');
  refs.libraryBtns.classList.remove('is-hidden');
  refs.navLibrary.classList.add('current');
  refs.navHome.classList.remove('current');
  refs.header.classList.add('header__my-library');
}

function onClickWatchesBth() {
  refs.queueBtn.classList.remove('active');
  refs.watchedBtn.classList.add('active');
}

function onClickQueueBth() {
  refs.queueBtn.classList.add('active');
  refs.watchedBtn.classList.remove('active');
}
