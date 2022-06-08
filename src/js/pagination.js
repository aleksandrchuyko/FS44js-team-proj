import MoviesApiService from './fetch_API';
import { refs } from './refs.js';

const moviesApiService = new MoviesApiService();

// document.addEventListener("click", onPagiationBtnClick(currentPage));

async function onCreatePaginationTemplate(totalPages, currentPage) {
  //   console.log(currentPage);
  let array = [];
  for (i = 1; i <= totalPages; i += 1) {
    array.push(
      `<button type="button" class="pagination__btn page">${i}</button>`
    );
  }
  return array.join('');
}

export async function onRenderPagination(totalPages, currentPage) {
    console.log(totalPages);
    console.log(currentPage);
  const markup = await onCreatePaginationTemplate(totalPages, currentPage);

  console.log(markup);

  refs.paginationList.insertAdjacentHTML('beforeend', markup);
}

//  function onPagiationBtnClick(e) {

//     if (e.target.nodeName !== "BUTTON") {
//         return;
//     }
// //    const pageNumber = e.target.textContent;
//    moviesApiService.changePage(pageNumber);
//     // onRenderNewPage(currentPage);
// }

// async function onRenderNewPage(pageNum) {
//     const nextPageTrendFilms = await moviesApiService.fetchMovies(pageNum);
// renderMovies(nextPageTrendFilms, moviesArray)

// }
