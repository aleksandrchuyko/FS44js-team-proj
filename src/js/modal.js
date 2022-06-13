import { writeUserDataWatched, writeUserDataQueue } from './api-fetch/add-to-database';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {spinnerRef } from './spinner';
import { modalMarkup } from './markup/modal-markup';
import {openModalFilm, modalFilmContainer} from './utils/references';

export { closeBacdropClick };

  
openModalFilm.addEventListener('click', openModal);

// Функція closeBacdropClick навішує слухачі на кнопку закриття модального вікна і backdrop,
//я її запускаю після того як відбудеться завантаження модального вікна

function closeBacdropClick() {
  const closeModalBtn = document.querySelector('.close__modal');
  const backdrop = document.querySelector('.backdrop');
  closeModalBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', backdropClick);
}

function openModal(e) {
  e.preventDefault();
  Loading.hourglass('Loading...', spinnerRef);
  let cardId = e.target.closest('.card').dataset.id;
  window.addEventListener('keydown', escapePress);
  document.body.classList.add('show__modal');
  modalMarkup(cardId);
}

function closeModal() {
  window.removeEventListener('keydown', escapePress);
  document.body.classList.remove('show__modal');
  modalFilmContainer.innerHTML = '';
}

function backdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function escapePress(event) {
  const ESC_KEY_CODE = 'Escape';
  const escape = event.code === ESC_KEY_CODE;

  if (escape) {
    closeModal();
  }
}

// function localStorageMovie() {
//   const STORAGE_WATCHED = 'watched-movie-list';
//   const STORAGE_QUEUE = 'queue-movie-list';
//   const addToWatchedEl = document.querySelector('.watched__btn');
//   const addToQueueEl = document.querySelector('.queue__btn');

//   let arrayWatched = [];
//   let arrayQueue = [];

//   addToLocalStorage();
//   removeFromLocalStorage();

//   function removeFromLocalStorage() {
//     const tempWatched = localStorage.getItem(STORAGE_WATCHED);
//     if (tempWatched === null) {
//       console.log('STORAGE_WATCHED is empty');
//     } else {
//       arrayWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
//       if (arrayWatched.find(part => part === cardId)) {
//         addToWatchedEl.textContent = 'remove from watched';
//         addToWatchedEl.addEventListener('click', removeFromWatchedList);
//       }
//     }

//     const tempQueue = localStorage.getItem(STORAGE_QUEUE);
//     if (tempQueue === null) {
//       console.log('STORAGE_QUEUE is empty');
//     } else {
//       arrayQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
//       if (arrayQueue.find(part => part === cardId)) {
//         addToQueueEl.textContent = 'remove from queue';
//         addToQueueEl.addEventListener('click', removeFromQueueList);
//       }
//     }

//     function removeFromWatchedList() {
//       const arrayTemp = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
//       const index = arrayTemp.indexOf(cardId);
//       arrayTemp.splice(index, 1);
//       localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrayTemp));
//       addToWatchedEl.removeEventListener('click', removeFromWatchedList);
//     }

//     function removeFromQueueList() {
//       const arrayQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
//       const index = arrayQueue.indexOf(cardId);
//       arrayQueue.splice(index, 1);
//       localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrayQueue));
//       addToQueueEl.removeEventListener('click', removeFromQueueList);
//     }
//   }

//   function addToLocalStorage() {
//     addToWatchedEl.addEventListener('click', event => {
//       addToWatchedList();
//       addToWatchedEl.removeEventListener('click', addToWatchedList);
//     });

//     addToQueueEl.addEventListener('click', event => {
//       addToQueueList();
//       addToQueueEl.removeEventListener('click', addToQueueList);
//     });

//     function addToWatchedList() {
//       addToWatchedEl.textContent = 'remove from watched';
//       addToQueueEl.textContent = 'add to queue';

//       const tempQueue = localStorage.getItem(STORAGE_QUEUE);
//       if (tempQueue === null) {
//         console.log('STORAGE_QUEUE is empty');
//       } else {
//         arrayQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
//         if (arrayQueue.find(part => part === cardId)) {
//           const index = arrayQueue.indexOf(cardId);
//           arrayQueue.splice(index, 1);

//           localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrayQueue));
//         } else {
//           console.log('not in Queue');
//         }
//       }

//       const tempWatched = localStorage.getItem(STORAGE_WATCHED);
//       if (tempWatched === null) {
//         arrayWatched.push(cardId);
//         localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrayWatched));
//       } else {
//         arrayWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
//         if (arrayWatched.find(part => part === cardId)) {
//           addToWatchedEl.textContent = 'add to watched';
//         } else {
//           arrayWatched.push(cardId);
//           localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrayWatched));
//         }
//       }
//     }

//     function addToQueueList() {
//       addToQueueEl.textContent = 'remove from queue';
//       addToWatchedEl.textContent = 'add to watched';

//       const tempWatched = localStorage.getItem(STORAGE_WATCHED);
//       if (tempWatched === null) {
//         console.log('STORAGE_WATCHED is empty');
//       } else {
//         arrayWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
//         if (arrayWatched.find(part => part === cardId)) {
//           const index = arrayWatched.indexOf(cardId);
//           arrayWatched.splice(index, 1);
//           localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrayWatched));
//         } else {
//           console.log('not in Watched');
//         }
//       }

//       const tempQueue = localStorage.getItem(STORAGE_QUEUE);
//       if (tempQueue === null) {
//         arrayQueue.push(cardId);
//         localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrayQueue));
//       } else {
//         arrayQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
//         if (arrayQueue.find(part => part === cardId)) {
//           addToQueueEl.textContent = 'add to queue';
//         } else {
//           arrayQueue.push(cardId);
//           localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrayQueue));
//         }
//       }
//     }
//   }
// }
