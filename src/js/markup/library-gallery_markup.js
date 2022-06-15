import { galleryContainer } from '../utils/references'
import { getData } from '../api-fetch/get-film-api';

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
        galleryContainer.insertAdjacentHTML("beforeend", markup);
    })
}
export { getMovieMarkup }