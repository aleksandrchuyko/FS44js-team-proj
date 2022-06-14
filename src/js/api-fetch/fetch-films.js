import axios from 'axios';
import { headerError } from '../utils/references';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { spinnerRef } from '../utils/spinner';
import { API_KEY, BASE_URL, MEDIA_TYPE, TIME_WINDOW } from '../utils/constants';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class MoviesApiService {
  constructor() {
    // this.request = request;

    // узгодити зі Stas
    this.searchQuery = '';

    // узгодити з Maria Streltova
    this.page = 1;
  }

  async fetchMovies() {
    headerError.textContent = '';
    // run spinner
    Loading.hourglass('Loading...', spinnerRef);

    try {
      const response = await axios.get(`${BASE_URL}${this.request}`, {
        params: {
          api_key: API_KEY,
          page: this.page,
          query: this.query,
        },
      });
      return response.data;
    } catch (error) {
      // refs.headerError.textContent = 'Search result not successful. Enter the correct movie name and';
      // Notify.error('Sorry. Try again later', {
      //   timeout: 3000,
      //   position: 'center-center',
      // });
    }
    // finally {
    //   // stop spinner
    //   Loading.remove();
    // }
  }

  tranding() {
    this.request = `/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;
  }

  search() {
    this.request = '/search/movie';
  }

  // узгодити із Maria Streltova
  setPage(page) {
    this.page = page;
  }

  resetPage() {
    this.page = 1;
  }

  // узгодити зі Stas
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
