import { loadSelectedTrandingPage, currentPageT } from './tranding';
import { loadSelectedSearchPage, currentPageS } from './search';
import { refs } from './refs';

refs.leftBtn.addEventListener('click', onLeftBtnClick);
refs.rightBtn.addEventListener('click', onRightBtnClick);

// async function getCurrentPage() {
//   moviesApiService.tranding();
//   const response = await moviesApiService.fetchMovies();
//   currentPage = response.page;
//   console.log(currentPage);
//   return currentPage;
// }

async function onLeftBtnClick(e) {
  e.preventDefault();
  //   getCurrentPage();

  if (refs.galleryContainer.getAttribute('data-set') === 'tranding') {
    page = currentPageT - 1;
    console.log(page);
    await loadSelectedTrandingPage(page);
  }

  if (refs.galleryContainer.getAttribute('data-set') === 'search') {
    page = currentPageS - 1;
    console.log(page);
    await loadSelectedSearchPage(page);
  }
}

async function onRightBtnClick(e) {
  e.preventDefault();
  //   getCurrentPage();
  if (refs.galleryContainer.getAttribute('data-set') === 'tranding') {
    page = currentPageT + 1;
    console.log(page);
    await loadSelectedTrandingPage(page);
  }
  if (refs.galleryContainer.getAttribute('data-set') === 'search') {
    page = currentPageS + 1;
    console.log(page);
    await loadSelectedSearchPage(page);
  }
}
