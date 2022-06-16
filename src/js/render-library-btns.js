// import { getData } from './api-fetch/get-film-api';
// import { refs } from './refs';
// import clearGalleryContainer from './clear-gallery';
// import { getMovieMarkup } from './markup/library-gallery_markup'
// import { load } from './service/add-movie-to-library_btns'

// refs.watchedBtn.addEventListener("click", onWatchedBtnClick);
// refs.queueBtn.addEventListener("click", onQueueBtnClick);

// function onWatchedBtnClick() {
//     load("watched-movie-list").then(res => {
//         document.querySelector('.main-gallery__list').innerHTML = ' ';
//         const getListWatched = res;
//         if (!getListWatched || getListWatched.length === 0) {
//             clearGalleryContainer();
//         } else {
//             for (let id of getListWatched) {
//                 getData(id.id).then(response => {
//                     getMovieMarkup(response.id)
//                 });
//             }
//         };
//     });
// }
// function onQueueBtnClick() {
//     load("queue-movie-list").then(res => {
//         document.querySelector('.main-gallery__list').innerHTML = ' ';
//         const getListQueue = res;
//         if (!getListQueue || getListQueue.length === 0) {
//             clearGalleryContainer();
//         } else {
//             for (let id of getListQueue) {
//                 getData(id.id).then(response => {
//                     getMovieMarkup(response.id)
//                 });
//             }
//         };
//     });
// }



// import { getUserDataAllWatched, getUserDataAllQueue } from "./get-from-dadabase";
// import { userId } from './logIn'
// const load = key => {
//     try {
//         if (key === "watched-movie-list") {
//             return getUserDataAllWatched(userId).then(data => {
//                 global.watchedCache = Object.values(data);
//                 return global.watchedCache
//             });
//         }

//         if (key === "queue-movie-list") {
//             return getUserDataAllQueue(userId).then(data => {
//                 global.queueCache = Object.values(data);
//                 return global.queueCache
//             });
//         }
//     } catch (err) {
//         console.error('Get state error: ', err);
//     }
// };


// function getMovieMarkup(moveId) {
//     getData(moveId).then(data => {
//         const { poster_path, title, release_date } = data;
//         const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
//         const genres = data.genres.map(genre => genre.name).join(", ");
//         let markup = `<li class="card" data-id = "${moveId}">
//                         <div class="card__container" data-id = "${moveId}">
//                         <img src="${poster}" alt="${title}" class="card__poster">
                        
//                         </div>
//                         <div class="card__meta meta">
//                         <p class="meta__title">${title}</p>
//                         <ul class="meta__list list">
//                             <li class="meta__item meta__item--genres">${genres}</li>
//                             <li class="meta__item">${release_date}</li>
                
//                         </ul>
//                         </div>
//                     </li>`
//         galleryContainer.insertAdjacentHTML("beforeend", markup);
//     })
// }