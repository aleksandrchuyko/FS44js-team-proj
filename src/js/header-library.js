import { refs } from './refs';
import { logoutBtn } from './utils/references';
import { logIn, logOut, userId } from './service/login';
import {
  getUserDataAllWatched,
  getUserDataAllQueue,
} from './api-fetch/get-from-database';

import { setMyLibraryStyles } from './My-library-btn'

refs.navLibrary.addEventListener('click', onClickHeaderLibraryBth);
logoutBtn.addEventListener('click', logOut);

export function onClickHeaderLibraryBth(e) {
  if (userId) {
    setMyLibraryStyles(e);
  } else {
    logIn()
      .then(resolve => {
        global.currentUser = resolve;
        logoutBtn.classList.remove('visually-hidden');
        console.log('Вошел пользователь:', global.currentUser);
        getUserDataAllWatched(userId).then(data => {
          global.watchedCache = Object.values(data);
          // console.log('Массив watched из firebase:', global.watchedCache);
        });
        getUserDataAllQueue(userId).then(data => {
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