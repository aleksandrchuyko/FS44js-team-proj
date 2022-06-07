import MoviesApiService from './fetch_API';
import changeMoviesArray from './page-render';
import { refs } from './refs';
import { clearGalleryContainer } from './clearGallery';

// IMPORT пагінація по сторінках Maria Streltova

// ------- First page load -----------//
addEventListener('DOMContentLoaded', () => {
  loadHomePage();
});

refs.headerLogo.addEventListener('click', onClickHomePage);
refs.homePageBtn.addEventListener('click', onClickHomePage);

const moviesApiService = new MoviesApiService();

async function loadHomePage() {
  moviesApiService.tranding();
  const response = await moviesFetch();
  //   console.log(response);
  //   const totalPages = response.total_pages;
  //   const movies = response.results;

  await changeMoviesArray(response);
}

async function onClickHomePage(e) {
  e.preventDefault();

  refs.homePageBtn.classList.add('active');
  refs.myLibraryBtn.classList.remove('active');
  refs.headerSearch.classList.remove('visually-hidden');
  moviesApiService.resetPage();

  await clearGalleryContainer();

  await loadHomePage();

  // AWAIT пагінація Maria Streltova
}

const moviesFetch = async () => await moviesApiService.fetchMovies();
