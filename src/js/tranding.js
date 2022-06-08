import MoviesApiService from './fetch_API';
import changeMoviesArray from './page-render';
import { refs } from './refs';
import { clearGalleryContainer } from './clearGallery';
import { onRenderPagination } from './pagination';

// ------- First page load -----------//
addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});

refs.headerLogo.addEventListener('click', onClickHomePage);
refs.homePageBtn.addEventListener('click', onClickHomePage);

const moviesApiService = new MoviesApiService();

async function loadTrandingPage() {
  moviesApiService.tranding();
  // const response = await moviesApiService.fetchMovies();

  const response = await moviesFetch();

  const totalPages = response.total_pages;
  const currentPage = response.page;

  await changeMoviesArray(response);

  await onRenderPagination(totalPages, currentPage);
}

async function onClickHomePage(e) {
  e.preventDefault();

  moviesApiService.resetPage();

  await clearGalleryContainer();

  await loadHomePageHeader();

  await loadTrandingPage();
}

async function loadHomePageHeader() {
  // --- hide my library hedder --- //
  refs.libraryBtns.classList.add('is-hidden');
  refs.myLibraryBtn.classList.remove('current');

  // --- show home page hedder --- //
  refs.homePageBtn.classList.add('current');
  refs.headerSearch.classList.remove('is-hidden');
}

const moviesFetch = async () => await moviesApiService.fetchMovies();
