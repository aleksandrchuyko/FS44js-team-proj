import MoviesApiService from '../api-fetch/fetch-films.js';
import { changeMoviesArray } from '../markup/movies-array-change';
import { onRenderPagination } from '../markup/gallery-pagination';
import { clearGalleryContainer } from '../utils/clear-gallery-container';
import { galleryContainer } from '../utils/references';
import { loadHomePageHeader } from '../markup/homepage-header.js';
import { extremePaginationButtons } from '../utils/extreme-pagination-buttons';

const moviesApiService = new MoviesApiService();

export async function loadTrandingPage() {
  await clearGalleryContainer();

  moviesApiService.tranding();

  moviesApiService.tranding();
  const response = await moviesApiService.fetchMovies();

  const movies = response.results;

  await changeMoviesArray(movies);
  await onRenderPagination(response);
  // await extremePaginationButtons(response);

  galleryContainer.setAttribute('data-set', 'tranding');
}

export async function loadSelectedTrandingPage(page) {
  // console.log('page', page);
  moviesApiService.setPage(page);
  await loadTrandingPage();
}

export async function onClickHomePage(e) {
  e.preventDefault();

  moviesApiService.resetPage();

  await loadHomePageHeader();

  await loadTrandingPage();
}
