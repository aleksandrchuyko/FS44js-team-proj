import axios from 'axios';

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
    this.page = 3;
  }

  async fetchMovies() {
    // run spinner
    try {
      const response = await axios.get(`${BASE_URL}${this.request}`, {
        params: {
          api_key: API_KEY,
          page: this.page,
          // query: 'car',
        },
      });

      // console.log(response);

      // this.incrementPage();
      return response.data;
    } catch (error) {
      console.error(error);
    } finally {
      // stop spinner
    }
  }

  tranding() {
    this.request = `/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;
  }

  search() {
    this.request = '/search/movie';
  }

  // узгодити із Maria Streltova
  async setPage(page) {
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
