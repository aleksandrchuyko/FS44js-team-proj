import axios from 'axios';
import { refs } from './refs';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {spinnerRef } from './spinner';

const API_KEY = 'a8de9bbb748883055cd7737934b96801';
const BASE_URL = 'https://api.themoviedb.org/3';

//  -------- TRANDING MOVIES -------- //
const MEDIA_TYPE = 'movie'; // movie or tv
// const LANGUAGE = 'en-US'; // English
const TIME_WINDOW = 'day'; // day, week, month, year

// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

export default class MoviesApiService {
  constructor() {
    // this.request = `/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;

    // узгодити зі Stas
    this.searchQuery = '';

    // узгодити з Maria Streltova
    this.page = 1;
  }

  async fetchMovies() {
    refs.headerError.textContent = '';
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

      // console.log(response);
      // console.log(response.data.total_results);
      // if (response.data.total.results === 0) {

      //   refs.headerError.textContent = 'Search result not successful. Enter the correct movie name and';
      // }
      // this.incrementPage();
      return response.data;
    } catch (error) {
      // refs.headerError.textContent = 'Search result not successful. Enter the correct movie name and';
      console.error(error);
    } finally {
      // stop spinner
     Loading.remove(1000);
    }
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
