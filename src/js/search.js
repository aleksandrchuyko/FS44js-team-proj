import { inputForm, galleryContainer, arrowBtn, headerError } from '../js/utils/references';
import MoviesApiService from '../js/api-fetch/fetch-films';
import {changeMoviesArray} from '../js/markup/movies-array-change';
import { onRenderPagination } from '../js/markup/gallery-pagination';

import { clearGalleryContainer } from '../js/utils/clear-gallery-container';
import { loadTrandingPage } from '../js/js-partials/tranding-gallery';

inputForm.addEventListener('submit', searchSubmit);

const moviesApiService = new MoviesApiService();

async function searchSubmit(event) {
  event.preventDefault();

  const value = event.target.querySelector('.header__input').value;
  moviesApiService.resetPage();

  if (!value) {
    loadTrandingPage();
    alert( "Write the name of the movie" );
  } else {
    moviesApiService.query = value;
    moviesApiService.search();
    await onRender();
  }

}

async function errorS(response) {
  console.log('response', response.total_results);
  if (!response.total_results) {
    headerError.textContent =
      'Search result not successful. Enter the correct movie name and'; 
    arrowBtn.classList.add('visually-hidden');
  } 


  const movies = response.results;
  await changeMoviesArray(movies);
  await onRenderPagination(response);
}
  
export async function loadSelectedSearchPage(page) {

  moviesApiService.setPage(page);

  await onRender();
}

async function onRender() {
  await clearGalleryContainer();


  const response = await moviesApiService.fetchMovies();
 
  galleryContainer.setAttribute('data-set', 'search');
  await errorS(response);

}


