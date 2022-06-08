import { refs } from './refs.js';

import { genresInfo } from './genres';

const imagesBaseUrl = 'https://image.tmdb.org/t/p/w500';

export default async function changeMoviesArray(response) {
  // console.log(response);
  const movies = response.results;
  const moviesArray = await movies.map(movie => {
    const releasePattern = /\d{4}/g;
    const date = movie.release_date;
    const releaseDate = date.match(releasePattern);
    const genresIds = movie.genre_ids;
    const genres = genresIds
      .map(id => genresInfo.find(genre => genre.id === id).name)
      .join(', ');
    const poster = movie.poster_path;

    const posterPath = `${imagesBaseUrl}${poster}`;

    return {
      id: movie.id,
      title: movie.title,
      genres: genres,
      poster_path: posterPath,
      // vote_average: movie.vote_average,
      // overview: movie.overview,
      release_date: releaseDate,
    };
  });

  await renderMovies(moviesArray);
}

async function renderMovies(moviesArray) {
  const renderResult = await moviesArray
    .map(
      moviesArray =>
        `<li class="card" data-id = "${moviesArray.id}">
        <div class="card__container" data-id = "${moviesArray.id}">
          <img src="${moviesArray.poster_path}" alt="${moviesArray.title}" class="card__poster">
        
        </div>
        <div class="card__meta meta">
          <p class="meta__title">${moviesArray.title}</p>
          <ul class="meta__list list">
            <li class="meta__item meta__item--genres">${moviesArray.genres}</li>
            <li class="meta__item">${moviesArray.release_date}</li>
 
          </ul>
        </div>
      </li>`
    )
    .join('');

  refs.galleryContainer.insertAdjacentHTML('beforeend', renderResult);
}
