
import { refs } from './refs';
import { clearPaginationList } from './clear-pagination';
import clearGalleryContainer from './clear-gallery';
import changeMoviesArray from './page-render';


refs.queueBtn.addEventListener('click', clickButQueue);
refs.watchedBtn.addEventListener('click', clickButWatched);
refs.navHome.addEventListener('click', clickButHome);
refs.navLibrary.addEventListener('click', clickButLibrary);

function clickButHome(e) {
    e.preventDefault();
    refs.paginationList.classList.remove('is-hidden');
    refs.navHome.classList.add('current');
    refs.navLibrary.classList.remove('current');
    refs.libraryBtns.classList.add('visually-hidden');
    refs.inputForm.classList.remove('visually-hidden');

}

function clickButLibrary(e) {
    e.preventDefault();
    refs.paginationList.classList.add('is-hidden');
    refs.navLibrary.classList.add('current');
    refs.navHome.classList.remove('current');
    refs.inputForm.classList.add('visually-hidden');
    refs.libraryBtns.classList.remove('visually-hidden');
    moviesRender('queue')
    refs.queueBtn.classList.add('active');
    refs.watchedBtn.classList.remove('active');
}

function clickButQueue() {
    refs.queueBtn.classList.add('library__current');
    refs.watchedBtn.classList.remove('library__current');
}

function clickButWatched() {
    refs.watchedBtn.classList.add('library__current');
    refs.queueBtn.classList.remove('library__current');
}


// Render Library JS//////

const container = document.getElementById('pagination');
async function moviesRender(type) {
    await clearGalleryContainer();
    await clearPaginationList();
    let response
    switch (type) {
        case 'watched':
            response = JSON.parse(localStorage.getItem('UserFilmWatched'));
            refs.galleryContainer.setAttribute('data-set', 'watched');
            break;
        case 'queue':
            response = JSON.parse(localStorage.getItem('UserFilmQueue'));
            console.log(refs.galleryContainer)
            refs.galleryContainer.setAttribute('data-set', 'queue');
    }
    console.log(response)
    container?.classList.add('is-hidden');

    await changeMoviesArray(response ?? { results: [] })
}


refs.navLibrary.addEventListener('click', () => {

    if (refs.watchedBtn.classList.contains('library__current')) {
        moviesRender('watched');
    } else if (refs.queueBtn.classList.contains('library__current')) {
        moviesRender('queue')
    }
});

refs.watchedBtn.addEventListener('click', () => moviesRender('watched'));
refs.queueBtn.addEventListener('click', () => moviesRender('queue'));

// функція RENDER LIBRARY  CARD///

// function renderCardMurkupLibreary(data) {
//     const galleryMarkupLibreary = data
//         .map(({ id, poster_path, title, genres, release_date, vote_average }) => {
//             genres = genres.map((genre) => genre.name);
//             console.log(genres);
//             title = title.length > 37 ? `${title.slice(0, 40)}...` : title;
//             const imgUrl = poster_path === null ? BASE_IMG_NO_POSTER : `${BASE_IMG_URL}${poster_path}`;
//             return `<li class="card">
//                     <a href="#${id}" class="card__link" id="${id}">
//                         <img class="card__img" src="${imgUrl}" alt="${title}" />
//                         <div class="card__information">
//                             <h2 class="card__name">${title}</h2>
//                             <div class="card__inf">
//                             <p class="card__genre">${genres}</p>
//                             ${genres && release_date
//                     ? `<p class="card__genre">&nbsp;|&nbsp;</p>`
//                     : ''
//                 }
//                             <p class="card__genre">${release_date.slice(
//                     0,
//                     4,
//                 )}</p>
//                             <p class="card__rating" > ${vote_average}</p>
//                             </div>
//                         </div>
//                     </a>
//                 </li>`;
//         })
//         .join('');
//     refs.homeFilmList.insertAdjacentHTML('beforeend', galleryMarkupLibreary);
// }