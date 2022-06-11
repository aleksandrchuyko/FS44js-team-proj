import { getData } from './get-card-api';
import writeUserData from './add-to-database';

const refs = {
  openModalBtn: document.querySelector('.main-gallery__list'),
  container: document.querySelector('.container-js'),
};

refs.openModalBtn.addEventListener('click', openModal);

function closeBacdropClick() {
  const closeModalBtn = document.querySelector('.close__modal');
  const backdrop = document.querySelector('.backdrop');
  closeModalBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', backdropClick);
}
let cardId;

function openModal(e) {
  e.preventDefault();
  cardId = e.target.closest('.card').dataset.id;

  window.addEventListener('keydown', escapePress);
  document.body.classList.add('show__modal');
  modalMarkup(cardId);
}

function closeModal() {
  window.removeEventListener('keydown', escapePress);
  document.body.classList.remove('show__modal');
  refs.container.innerHTML = '';
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

function modalMarkup(muvieId) {
  getData(muvieId).then(data => {
    //Тест запису в базу проглянутих
    // writeUserData(global.userId, muvieId, data);
    //...
    const {
      poster_path,
      title,
      overview,
      vote_average,
      vote_count,
      popularity,
      original_title,
    } = data;
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const genres = data.genres.map(genre => genre.name).join(', ');
    let markup = `<div class="backdrop">
        <div class="modal">
            <button type="button" class="close__modal">
            </button>
            <div class="modal__wrapper">
                <div class="modal__poster">
                    <img class="modal__image" src="${poster}" alt="${title}">
                </div>
                <div class="modal__about">
                    <h2 class="modal__title">${title}</h2>
                    <table class="modal__table">
                        <tbody>
                            <tr>
                            <td class="key__item">Vote / Votes</td>
                            <td class="item__value"><span class="vote">${vote_average}</span> / ${vote_count}</td>
                            </tr>
                            <tr>
                            <td class="key__item">Popularity</td>
                            <td class="item__value">${popularity}</td>
                            </tr>
                            <tr>
                            <td class="key__item">Original Title</td>
                            <td class="item__value">${original_title}</td>
                            </tr>
                            <tr>
                            <td class="key__item">Genre</td>
                            <td class="item__value">${genres}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 class="text__title">About</h3>
                    <p class="modal__text">${overview}</p>
                    <div class="modal__buttons">
                        <button class="modal__button watched__btn" type="button">add to watched</button>
                        <button class="modal__button queue__btn" type="button">add to queue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    refs.container.insertAdjacentHTML('beforeend', markup);
    closeBacdropClick();
    localStorageMovie();
  });
}

function localStorageMovie() {
  const STORAGE_WATCHED = 'watched-movie-list';
  const STORAGE_QUEUE = 'queue-movie-list';
  const addToWatchedEl = document.querySelector('.watched__btn');
  const addToQueueEl = document.querySelector('.queue__btn');

  let arrayWatched = [];
  let arrayQueue = [];

  addToLocalStorage();
  removeFromLocalStorage();

  function removeFromLocalStorage() {
    const tempWatched = localStorage.getItem(STORAGE_WATCHED);
    if (tempWatched === null) {
      console.log('STORAGE_WATCHED is empty');
    } else {
      arrayWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
      if (arrayWatched.find(part => part === cardId)) {
        addToWatchedEl.textContent = 'remove from watched';
        addToWatchedEl.addEventListener('click', removeFromWatchedList);
      }
    }

    const tempQueue = localStorage.getItem(STORAGE_QUEUE);
    if (tempQueue === null) {
      console.log('STORAGE_QUEUE is empty');
    } else {
      arrayQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
      if (arrayQueue.find(part => part === cardId)) {
        addToQueueEl.textContent = 'remove from queue';
        addToQueueEl.addEventListener('click', removeFromQueueList);
      }
    }

    function removeFromWatchedList() {
      const arrayTemp = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
      const index = arrayTemp.indexOf(cardId);
      arrayTemp.splice(index, 1);
      localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrayTemp));
      addToWatchedEl.removeEventListener('click', removeFromWatchedList);
    }

    function removeFromQueueList() {
      const arrayQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
      const index = arrayQueue.indexOf(cardId);
      arrayQueue.splice(index, 1);
      localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrayQueue));
      addToQueueEl.removeEventListener('click', removeFromQueueList);
    }
  }

  function addToLocalStorage() {
    addToWatchedEl.addEventListener('click', event => {
      addToWatchedList();
      addToWatchedEl.removeEventListener('click', addToWatchedList);
    });

    addToQueueEl.addEventListener('click', event => {
      addToQueueList();
      addToQueueEl.removeEventListener('click', addToQueueList);
    });

    function addToWatchedList() {
      addToWatchedEl.textContent = 'remove from watched';
      addToQueueEl.textContent = 'add to queue';

      const tempQueue = localStorage.getItem(STORAGE_QUEUE);
      if (tempQueue === null) {
        console.log('STORAGE_QUEUE is empty');
      } else {
        arrayQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
        if (arrayQueue.find(part => part === cardId)) {
          const index = arrayQueue.indexOf(cardId);
          arrayQueue.splice(index, 1);

          localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrayQueue));
        } else {
          console.log('not in Queue');
        }
      }

      const tempWatched = localStorage.getItem(STORAGE_WATCHED);
      if (tempWatched === null) {
        arrayWatched.push(cardId);
        localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrayWatched));
      } else {
        arrayWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
        if (arrayWatched.find(part => part === cardId)) {
          addToWatchedEl.textContent = 'add to watched';
        } else {
          arrayWatched.push(cardId);
          localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrayWatched));
        }
      }
    }

    function addToQueueList() {
      addToQueueEl.textContent = 'remove from queue';
      addToWatchedEl.textContent = 'add to watched';

      const tempWatched = localStorage.getItem(STORAGE_WATCHED);
      if (tempWatched === null) {
        console.log('STORAGE_WATCHED is empty');
      } else {
        arrayWatched = JSON.parse(localStorage.getItem(STORAGE_WATCHED));
        if (arrayWatched.find(part => part === cardId)) {
          const index = arrayWatched.indexOf(cardId);
          arrayWatched.splice(index, 1);
          localStorage.setItem(STORAGE_WATCHED, JSON.stringify(arrayWatched));
        } else {
          console.log('not in Watched');
        }
      }

      const tempQueue = localStorage.getItem(STORAGE_QUEUE);
      if (tempQueue === null) {
        arrayQueue.push(cardId);
        localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrayQueue));
      } else {
        arrayQueue = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
        if (arrayQueue.find(part => part === cardId)) {
          addToQueueEl.textContent = 'add to queue';
        } else {
          arrayQueue.push(cardId);
          localStorage.setItem(STORAGE_QUEUE, JSON.stringify(arrayQueue));
        }
      }
    }
  }
}
