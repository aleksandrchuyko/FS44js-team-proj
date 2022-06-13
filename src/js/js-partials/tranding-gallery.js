import MoviesApiService from '../api-fetch/fetch-films.js';
import { changeMoviesArray } from '../markup/movies-array-change';
// import changeMoviesArray from './page-render';
// import { refs } from './refs';
// import clearGalleryContainer from './clear-gallery';
// import { onRenderPagination } from './pagination';
// import { clearPaginationList } from './clear-pagination';

// // ------- First page load -----------//
// addEventListener('DOMContentLoaded', () => {
//   loadTrandingPage();
// });

// let currentPageT;
// let totalPages;

const moviesApiService = new MoviesApiService();

export async function loadTrandingPage() {
  //   clearGalleryContainer();
  //   clearPaginationList();
  moviesApiService.tranding();

  const response = await moviesApiService.fetchMovies();

  const movies = response.results;

  await changeMoviesArray(movies);

  //   refs.galleryContainer.setAttribute('data-set', 'tranding');

  //   totalPages = response.total_pages;
  //   currentPageT = response.page;
  //   const currentPage = response.page;

  //   await changeMoviesArray(response);

  //   await onRenderPagination(currentPage, totalPages);
  //   await paginationButons();
}
