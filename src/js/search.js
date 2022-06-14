// import { inputForm, galleryContainer } from '../js/utils/references';
// import MoviesApiService from './fetch_API';
// import changeMoviesArray from './page-render';
// // import { onRenderPagination } from './pagination';

// import clearGalleryContainer from './clear-gallery';
// import { clearPaginationList } from './clear-pagination';
// import { loadTrandingPage } from './tranding';

// // inputForm.addEventListener('submit', searchSubmit);

// let currentPageS;
// let totalPages;

// const moviesApiService = new MoviesApiService();

// async function searchSubmit(event) {
//   event.preventDefault();

//   const value = event.target.querySelector('.header__input').value;
//   moviesApiService.resetPage();

//   if (!value) {
//     loadTrandingPage();
//   } else {
//     moviesApiService.query = value;
//     moviesApiService.search();
//     await onRender();
//   }

//   // refs.galleryContainer.innerHTML='';
//   //     const response = await moviesApiService.fetchMovies();
//   //   await errorS(response);
//   //     refs.galleryContainer.setAttribute('data-set', 'search');
//   //     const totalPages = response.total_pages;
//   //     await changeMoviesArray(response);
//   //     await onRenderPagination(totalPages);
// }

// async function errorS(response) {
//   console.log('response', response.total_results);
//   if (!response.total_results) {
//     refs.headerError.textContent =
//       'Search result not successful. Enter the correct movie name and'; 
//     refs.paginationWrap.classList.add('visually-hidden');
//   }

//   totalPages = response.total_pages;
//   const currentPage = response.page;
//   currentPageS = currentPage;
//   await changeMoviesArray(response);
//   await onRenderPagination(currentPage, totalPages);
// }

// export async function loadSelectedSearchPage(page) {
//   // console.log('page', page);
//   moviesApiService.setPage(page);

//   await onRender();
// }

// async function onRender() {
//   await clearGalleryContainer();
//   await clearPaginationList();

//   // refs.galleryContainer.innerHTML = '';
//   const response = await moviesApiService.fetchMovies();
//   //   await errorS(response)
//   galleryContainer.setAttribute('data-set', 'search');
//   await errorS(response);
//   //   const totalPages = response.total_pages;
//   const currentPage = response.page;
//   currentPageS = currentPage;
//   await paginationButons();
//   // await changeMoviesArray(response);
//   // await onRenderPagination(currentPage);
// }

// // export { currentPageS };

// // async function paginationButons() {
// //   if (!currentPageS) {
// //     refs.leftBtn.disabled = true;
// //   } else {
// //     refs.leftBtn.disabled = false;
// //   }
// //   if (currentPageS === totalPages) {
// //     refs.rightBtn.disabled = true;
// //   } else {
// //     refs.rightBtn.disabled = false;
// //   }
// // }
