
import MoviesApiService from './fetch_API';
import { refs } from './refs.js';

const moviesApiService = new MoviesApiService();
let pages = [];
let currentBtn = null;

async function onCreatePaginationTemplate(totalPages, currentPage) {
    console.log(currentPage);
    let beforePage = currentPage - 3;
    console.log('beforePage', beforePage)
    let afterPage = currentPage + 3;
    console.log('afterPage', afterPage);
    let total = currentPage + beforePage + afterPage + 4;
    // let numberClass = '';

    // if (currentPage > 4) {
    //     const startDots = refs.paginationList.createElement(
    //         'li',
    //         { class: 'pagination-item pagination-dots' },
    //         createElement('span', { class: `${numberClass}` }, '...'),
    //     );
    //     refs.paginationList.push(startDots);
    // }
    if (currentPage === 1) {
        beforePage = beforePage + 3;
    afterPage = currentPage + 4;
    
    }
//     if (currentPage === 2) {
//       afterPage = currentPage + 3;
//     }
//     if (currentPage === total) {
//       beforePage = currentPage - 4;
//     }
//     if (currentPage === total - 1) {
//         beforePage = currentPage - 3;
    
//     }

//     if (beforePage < 2) {
//       beforePage = 2;
//     }
//     if (afterPage >= total) {
//       afterPage = total - 1;
//     }

    let array = [];
    for (let i = beforePage; i <= afterPage; i += 1){
        array.push(`<button type="button" class="pagination__btn page">${i}</button>`)
    } 
     return array.join("");

   
}


export async function onRenderPagination(totalPages, currentPage) {
    console.log(totalPages);
console.log(currentPage);
    const markup = await onCreatePaginationTemplate(totalPages, currentPage);

    console.log(markup);
    refs.paginationList.insertAdjacentHTML("beforeend", markup);

}

