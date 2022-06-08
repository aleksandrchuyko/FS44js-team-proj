import MoviesApiService from './fetch_API';
import { refs } from './refs.js';

const moviesApiService = new MoviesApiService();

function onCreatePaginationTemplate(totalPages) {
    let array = [];
    for (i = 1; i <= totalPages; i += 1){
        array.push(`<button type="button" class="pagination__btn page">${i}</button>`)
    }
    return array.join("");
}

export async function onRenderPagination(totalPages) {
    const markup = onCreatePaginationTemplate(totalPages);
    refs.paginationList.insertAdjacentHTML("beforeend", markup);

}

function onPagiationBtnClick(e) {
    if (e.target.NodeName !== "BUTTON") {
        return;
    }

    

    const pageNumber = e.target.textContent;
    changePage(pageNumber);
    // onrenderNewPage(pageNumber);
}

// async function onrenderNewPage(pageNum) {
//     const nextPageTrendFilms = await moviesApiService.fetchMovies(pageNum);
// renderMovies(nextPageTrendFilms, moviesArray)

// }
