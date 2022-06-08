import MoviesApiService from './fetch_API';
import { refs } from './refs.js';
const moviesApiService = new MoviesApiService();

refs.paginationList.addEventListener("click", paginationBtnClick);

async function paginationBtnClick(e) {
    e.preventDefault();
   console.log(e)
    // if (e.target.nodeName !== "BUTTON") {
    //     return;
    // }
//     currentPage = e.currentTarget.textContent;
//     console.log(currentPage);
//
//     // onRenderNewPage(currentPage);
// }
    const pageNumber = e.target.textContent;
    console.log(pageNumber);
   await moviesApiService.changePage(pageNumber);

}
