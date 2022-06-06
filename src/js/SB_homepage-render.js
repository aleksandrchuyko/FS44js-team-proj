import MoviesApiService from './SB_tranding-fetch_API';

import { refs } from './refs.js';

import { genresInfo } from './SB_genres';

const moviesApiService = new MoviesApiService();

const MEDIA_TYPE = 'movie'; // movie or tv
const TIME_WINDOW = 'day'; // day, week, month, year

const fetchParametres = `/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;

// IMPORT пагінація по сторінках Maria Streltova

async function onClickHomePage() {
  //   e.preventDefault();
  const response = await moviesApiService.fetchMovies(fetchParametres);
  const totalPages = response.total_pages;
  const movies = response.results;
  console.log(totalPages);
  // console.log(movies);

  await changeMoviesArray(movies);

  // console.log(moviesArray);

  // await renderMovies(moviesArray);

  // AWAIT пагінація Maria Streltova
}

async function changeMoviesArray(movies) {
  const moviesArray = await movies.map(movie => {
    // console.log(movie.id);
    const releasePattern = /\d{4}/g;
    const date = movie.release_date;
    const releaseDate = date.match(releasePattern);
    const genresIds = movie.genre_ids;
    const genres = genresIds
      .map(id => genresInfo.find(genre => genre.id === id).name)
      .join(', ');
    const poster = movie.poster_path;

    const posterPath = `https://image.tmdb.org/t/p/w500${poster}`;

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
  // console.log(moviesArray);
  // return moviesArray;
}

async function renderMovies(moviesArray) {
  const renderResult = await moviesArray
    .map(
      moviesArray =>
        `<li class="card">
        <div class="card__container">
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

onClickHomePage();
