import MoviesApiService from '../api-fetch/fetch-films.js';
import { changeMoviesArray } from '../markup/movies-array-change';
import { onRenderPagination } from './gallery-pagination';
import { clearGalleryContainer } from '../utils/clear-gallery-container';
import { galleryContainer } from '../utils/references';


const moviesApiService = new MoviesApiService();

export async function onRenderSearch(value) {
    moviesApiService.query = value;
    moviesApiService.search();
    const response = await moviesApiService.fetchMovies();
    galleryContainer.setAttribute('data-set', 'search');

    const movies = response.results;
    await clearGalleryContainer();

  await changeMoviesArray(movies);
  await onRenderPagination(response);
    
}

// export async function loadNextSearchPage() {
//   console.log('page', page);
// //   moviesApiService.setPage(page);
// //   await onRenderSearch();
// }

export async function loadSelectedSearchPage(page) {
  // console.log('page', page);
  moviesApiService.setPage(page);
  await onRenderSearch();
}
