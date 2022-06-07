import MoviesApiService from './fetch_API';
const moviesApiService = new MoviesApiService();

export async function movieFetch() {
  const response = await moviesApiService.fetchMovies();
  return response;
}
