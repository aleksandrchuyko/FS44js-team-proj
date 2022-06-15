// import { paginationList } from '../utils/references';
// import MoviesApiService from '../api-fetch/fetch-films.js';
import { loadSelectedTrandingPage } from '../js-partials/tranding-gallery';
import { galleryContainer } from '../utils/references';
import { loadSelectedSearchPage } from '../search';
// import { searchSelected } from '../markup/searchRender';

// const moviesApiService = new MoviesApiService();

// import { loadSelectedTrandingPage } from '../tranding';
// import { loadSelectedSearchPage } from '../search';

// paginationList.addEventListener('click', onPaginationBtnClick);

export async function onPaginationBtnClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const page = e.target.textContent;
  // moviesApiService.setPage(page);

  console.log(page);

  if (galleryContainer.getAttribute('data-set') === 'tranding') {
    await loadSelectedTrandingPage(page);
  }
  if (galleryContainer.getAttribute('data-set') === 'search') {
    console.log('wafdgfsdgdfhgerhgwet');
    await loadSelectedSearchPage(page);

    // await loadSelectedSearchPage(page);
  }
}
