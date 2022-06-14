import MoviesApiService from '../api-fetch/fetch-films.js';
import { changeMoviesArray } from '../markup/movies-array-change';
import { onRenderPagination } from '../markup/gallery-pagination';
import { clearGalleryContainer } from '../utils/clear-gallery-container';
import { galleryContainer } from '../utils/references';

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
  await clearGalleryContainer();
  //   clearPaginationList();
  moviesApiService.tranding();

  const response = await moviesApiService.fetchMovies();

  const movies = response.results;

  await changeMoviesArray(movies);
  await onRenderPagination(response);

  galleryContainer.setAttribute('data-set', 'tranding');

  //   totalPages = response.total_pages;
  //   currentPageT = response.page;
  //   const currentPage = response.page;

  //   await changeMoviesArray(response);

  //   await onRenderPagination(currentPage, totalPages);
  //   await paginationButons();
}

export async function loadSelectedTrandingPage(page) {
  // console.log('page', page);
  moviesApiService.setPage(page);
  await loadTrandingPage();
}
