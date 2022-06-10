import { refs } from "./refs";
import MoviesApiService from './fetch_API';
import changeMoviesArray from './page-render';
import { onRenderPagination } from './pagination';
import { loadTrandingPage } from './tranding';
import clearGalleryContainer from './clear-gallery';
import { clearPaginationList } from './clear-pagination';


refs.headerSearch.addEventListener('submit', searchSubmit)

const moviesApiService = new MoviesApiService();
async function searchSubmit(event) {
    event.preventDefault();
    const value = event.target.querySelector('.header__input').value;
    if (value === "") {
        loadTrandingPage()
    }
    moviesApiService.query = value;
    moviesApiService.search();
    await onRender();
// refs.galleryContainer.innerHTML='';
//     const response = await moviesApiService.fetchMovies();
// //   await errorS(response) 
//     refs.galleryContainer.setAttribute('data-set', 'search');
//     const totalPages = response.total_pages;
//     await changeMoviesArray(response);
//     await onRenderPagination(totalPages);
}
async function errorS(response) {
    if (response.data.total_results === 0) {
        
        refs.headerError.textContent = 'Search result not successful. Enter the correct movie name and';
      }
}

export async function loadSelectedSearchPage(page) {
  // console.log('page', page);
  moviesApiService.setPage(page);

  await onRender();
}

async function onRender() {
  await clearGalleryContainer();
  await clearPaginationList();

 refs.galleryContainer.innerHTML='';
    const response = await moviesApiService.fetchMovies();
//   await errorS(response) 
    refs.galleryContainer.setAttribute('data-set', 'search');
    const totalPages = response.total_pages;
    await changeMoviesArray(response);
    await onRenderPagination(totalPages);
    
}
