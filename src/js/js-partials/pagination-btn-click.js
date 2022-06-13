// import { paginationList } from '../utils/references';
import MoviesApiService from '../api-fetch/fetch-films.js';

const moviesApiService = new MoviesApiService();

// import { loadSelectedTrandingPage } from '../tranding';
// import { loadSelectedSearchPage } from '../search';

// paginationList.addEventListener('click', onPaginationBtnClick);

export async function onPaginationBtnClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const page = e.target.textContent;
  moviesApiService.setPage(page);

  console.log(page);


  // if (refs.galleryContainer.getAttribute('data-set') === 'tranding') {
  //   await loadSelectedTrandingPage(page);
  // }
  // if (refs.galleryContainer.getAttribute('data-set') === 'search') {
  //   await loadSelectedSearchPage(page);
  // }
}
