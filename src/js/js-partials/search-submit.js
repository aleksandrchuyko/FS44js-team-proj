// import MoviesApiService from '../api-fetch/fetch-films.js';
// import { onRenderSearch } from '../markup/searchRender.js';
// import { loadTrandingPage } from './tranding-gallery.js';


// const moviesApiService = new MoviesApiService();

// export async function searchSubmit(event) {
//     event.preventDefault();

//     const value = event.target.querySelector('.header__input').value;
//     moviesApiService.resetPage();

//     if (!value) {
//         loadTrandingPage();
//     } else {

//         await onRenderSearch(value);
        
//     }
// }