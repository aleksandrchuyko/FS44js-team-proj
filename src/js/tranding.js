// import MoviesApiService from '../js/api-fetch/fetch-films.js';
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

// const moviesApiService = new MoviesApiService();

// export async function loadTrandingPage() {
//   //   clearGalleryContainer();
//   //   clearPaginationList();
//   moviesApiService.tranding();

//   const response = await moviesApiService.fetchMovies();
//   console.log(response);

//   refs.galleryContainer.setAttribute('data-set', 'tranding');

//   totalPages = response.total_pages;
//   currentPageT = response.page;
//   const currentPage = response.page;

//   await changeMoviesArray(response);

//   await onRenderPagination(currentPage, totalPages);
//   await paginationButons();
// }

// loadTrandingPage();

// export { currentPageT };

// export async function loadSelectedTrandingPage(page) {
//   // console.log('page', page);
//   moviesApiService.setPage(page);
//   await loadTrandingPage();
// }

// refs.navHome.addEventListener('click', onClickHomePage);
// refs.headerTitle.addEventListener('click', onClickHomePage);
// refs.headerLogo.addEventListener('click', onClickHomePage);

// async function onClickHomePage(e) {
//   e.preventDefault();

//   moviesApiService.resetPage();

//   await loadHomePageHeader();

//   await loadTrandingPage();
// }

// async function loadHomePageHeader() {
//   location.reload();
//   //
//   // --- hide my library hedder --- //
//   refs.libraryBtns.classList.add('is-hidden');
//   refs.navLibrary.classList.remove('current');
//   refs.header.classList.remove('header__my-library');

//   // --- show home page hedder --- //
//   refs.navHome.classList.add('current');
//   refs.inputForm.classList.remove('is-hidden');
//   refs.paginationList.classList.remove('is-hidden');
// }

// async function paginationButons() {
//   if (currentPageT === 1) {
//     refs.leftBtn.disabled = true;
//   } else {
//     refs.leftBtn.disabled = false;
//   }
//   if (currentPageT === totalPages) {
//     refs.rightBtn.disabled = true;
//   } else {
//     refs.rightBtn.disabled = false;
//   }
// }
