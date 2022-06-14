import { refs } from './refs';

import { logIn, userId } from './logIn';
import {
  getUserDataAllWatched,
  getUserDataAllQueue,
} from './get-from-dadabase';

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

export function onClickHeaderLibraryBth(e) {
  if (global.currentUser) {
    setMyLibraryStyles(e);
  } else {
    logIn()
      .then(resolve => {
        global.currentUser = resolve;
        console.log('Вошел пользователь:', global.currentUser);
        getUserDataAllWatched('116126857176505822881').then(data => {
          global.watchedCache = Object.values(data);
          // console.log('Массив watched из firebase:', global.watchedCache);
        });
        getUserDataAllQueue('116126857176505822881').then(data => {
          global.queueCache = Object.values(data);
          console.log('Массив queue из firebase:', global.queueCache);
        });
        setMyLibraryStyles(e);
      })
      .catch(reject => {
        //Тут візов сообщения ошибки авторизации
        //...
        console.log(reject);
      });
  }
}

function setMyLibraryStyles(e) {
  e.preventDefault();
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
