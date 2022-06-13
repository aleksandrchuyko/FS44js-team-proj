import { getData } from './get-card-api'
import { refs } from './refs';
import clearGalleryContainer from './clear-gallery';
import { getUserDataAllWatched, getUserDataAllQueue } from "./get-from-dadabase";

refs.watchedBtn.addEventListener("click", onWatchedBtnClick);
refs.queueBtn.addEventListener("click", onQueueBtnClick);

const load = key => {
    try {
        if (key === "watched-movie-list") {
            getUserDataAllWatched('116126857176505822881').then(data => {
                global.watchedCache = Object.values(data);
                onWatchedBtnClick();
            });
        }

        if (key === "queue-movie-list") {
            getUserDataAllQueue('116126857176505822881').then(data => {
                global.queueCache = Object.values(data);
                onQueueBtnClick()
            });
        }
    } catch (err) {
        console.error('Get state error: ', err);
    }
};

function onWatchedBtnClick() {
    document.querySelector('.main-gallery__section').innerHTML = ' ';
    const getListWatched = global.watchedCache;
    if (!getListWatched || getListWatched.length === 0) {
        clearGalleryContainer();
    } else {
        for (let id of getListWatched) {
            getData(id.id).then(response => {
                getMovieMarkup(response.id)
            });
        }
    }
}
function onQueueBtnClick() {
    document.querySelector('.main-gallery__section').innerHTML = ' ';
    const getListQueue = global.queueCache;
    if (!getListQueue || getListQueue.length === 0) {
        clearGalleryContainer();
    } else {
        for (let id of getListQueue) {
            getData(id.id).then(response => {
                getMovieMarkup(response.id)
            });
        }
    }
}

function getMovieMarkup(moveId) {
    getData(moveId).then(data => {
        const { poster_path, title, release_date } = data;
        const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const genres = data.genres.map(genre => genre.name).join(", ");
        let markup = `<li class="card" data-id = "${moveId}">
                        <div class="card__container" data-id = "${moveId}">
                        <img src="${poster}" alt="${title}" class="card__poster">
                        
                        </div>
                        <div class="card__meta meta">
                        <p class="meta__title">${title}</p>
                        <ul class="meta__list list">
                            <li class="meta__item meta__item--genres">${genres}</li>
                            <li class="meta__item">${release_date}</li>
                
                        </ul>
                        </div>
                    </li>`
        refs.container.insertAdjacentHTML("beforeend", markup);
    })
}