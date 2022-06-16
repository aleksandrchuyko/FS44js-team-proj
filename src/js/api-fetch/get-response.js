import MoviesApiService from '../api-fetch/fetch-films.js';

const moviesApiService = new MoviesApiService();

export async function getResponce() {
  const response = await moviesApiService.fetchMovies();

  const movies = response.results;

  await changeMoviesArray(movies);
  await onRenderPagination(response);
}
