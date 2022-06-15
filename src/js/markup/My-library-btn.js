import { refs } from '../refs';

refs.queueBtn.addEventListener('click', clickButQueue);
// refs.watchedBtn.addEventListener('click', clickButWatched);
// refs.navLibrary.addEventListener('click', setMyLibraryStyles);

// export function setMyLibraryStyles(e) {
//   e.preventDefault();
//   refs.libraryBtns.classList.remove('visually-hidden');
//   refs.navLibrary.classList.add('current');
//   refs.header.classList.add('header__my-library');
//   refs.navHome.classList.remove('current');
//   refs.inputForm.classList.add('visually-hidden');
// } 

function clickButQueue() {
    refs.queueBtn.classList.add('active');
    refs.watchedBtn.classList.remove('active');
}

// function clickButWatched() {
//   refs.watchedBtn.classList.add('active');
//   refs.queueBtn.classList.remove('active');
// }


