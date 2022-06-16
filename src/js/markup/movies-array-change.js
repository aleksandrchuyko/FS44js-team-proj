import { genresInfo } from '../utils/genres';
import {
  imagesBaseUrl,
  imageNull,
  noReleaseDate,
  patternReleaseDate,
  noGenres,
} from '../utils/constants.js';
import { renderMovies } from '../markup/gallery-markup.js';

export async function changeMoviesArray(movies) {
  // console.log(response);
  //   const movies = response.results;

  let posterPath;
  let genres = [];
  let releaseDate;

  const moviesArray = await movies.map(movie => {
    // const releasePattern = /\d{4}/g;
    const date = movie.release_date;
    // const releaseDate;
    if (date === '') {
      releaseDate = noReleaseDate;
    } else {
      releaseDate = date.match(patternReleaseDate);
    }
    // const date = movie.release_date;
    // const releaseDate = date.match(releasePattern);
    let genresIds;

    // if (movie.genre_ids) {
    //   genresIds = movie.genre_ids;
    // }
    // else {
    //   genresIds = movie.genres.id
    // }

    // const genresIds = movie.genre_ids;
    // if (genresIds.length > 1) {
    //   genres = genresIds
    //     .map(id => genresInfo.find(genre => genre.id === id).name)
    //     .join(', ');
    // } else {
    //   genres = noGenres;
    // }

    const poster = movie.poster_path;
    if (poster === null) {
      //   console.log('poster', poster);
      posterPath = `${imageNull}`;
    } else {
      posterPath = `${imagesBaseUrl}${poster}`;
    }

    return {
      id: movie.id,
      title: movie.title,
      genres: movie.genres,
      poster_path: posterPath,
      // vote_average: movie.vote_average,
      // overview: movie.overview,
      release_date: releaseDate,
    };
  });

  await renderMovies(moviesArray);
}
