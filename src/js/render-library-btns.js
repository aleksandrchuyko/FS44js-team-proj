import { getData } from './get-card-api'
import { refs } from './refs';
import clearGalleryContainer from './clear-gallery';
import { onClickHeaderLibraryBth } from './header-library'
import { getUserDataAllWatched, getUserDataAllQueue } from "./get-from-dadabase";

const container = document.querySelector(".main-gallery__section")


refs.watchedBtn.addEventListener("click", renderWatchedMove);
refs.queueBtn.addEventListener("click", renderQueueMove)

const load = key => {
    try {
        // if (key === "watched-movie-list") {
        //     getUserDataAllWatched('116126857176505822881').then(data => {
        //         global.watchedCache = Object.values(data);
        //         return global.watchedCache;
        //     });
        // }
        // if (key === "queue-movie-list") {
        //     getUserDataAllQueue('116126857176505822881').then(data => {
        //         global.queueCache = Object.values(data);
        //         return global.queueCache;
        //     });
        // }
        let storage = localStorage.getItem(key);
        return (storage = JSON.parse(storage) || undefined);
    } catch (err) {
        console.error('Get state error: ', err);
    }
};

function renderWatchedMove() {
    document.querySelector('.main-gallery__section').innerHTML = ' ';
    const arrId = load("watched-movie-list")
    console.log(arrId)
    if (!arrId || arrId.length === 0) {
        clearGalleryContainer();
    } else {
        for (let id of arrId) {
            console.log("id", id)
            getData(id).then(response => {
                renderCardMove(response.id)
            });
        }
    }
}

function renderQueueMove() {
    document.querySelector('.main-gallery__section').innerHTML = ' ';
    const arrId = load('queue-movie-list');
    if (!arrId || arrId.length === 0) {
        clearGalleryContainer();
    } else {
        for (let id of arrId) {
            getData(id).then(response => {
                renderCardMove(response.id);
            });
        }
    }
}


function renderCardMove(moveId) {
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
        container.insertAdjacentHTML("beforeend", markup);
    })
}