import { refs } from "./refs";
import MoviesApiService from './fetch_API';
import changeMoviesArray from './page-render';
import { onRenderPagination } from './pagination';


refs.headerSearch.addEventListener('submit', searchSubmit)

const moviesApiService = new MoviesApiService();
async function searchSubmit(event) {
    event.preventDefault();
    moviesApiService.search();

refs.galleryContainer.innerHTML='';
    const response = await moviesApiService.fetchMovies();
        console.log(response);
    //   const movies = response.results;
    const totalPages = response.total_pages;
    await changeMoviesArray(response);
    await onRenderPagination(totalPages);
}

function searchSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderMovies)
    .catch(onFetchError)
    .finally(() => form.reset());
}
