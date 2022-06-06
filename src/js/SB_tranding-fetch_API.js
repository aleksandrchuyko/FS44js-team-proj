import axios from 'axios';

const API_KEY = 'a8de9bbb748883055cd7737934b96801';
const BASE_URL = 'https://api.themoviedb.org/3';
// const MEDIA_TYPE = 'movie'; // movie or tv
// const LANGUAGE = 'en-US'; // English
// const TIME_WINDOW = 'day'; // day, week, month, year

// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

export default class MoviesApiService {
  constructor() {
    // this.searchQuery = '';

    // узгодити з Maria Streltova
    this.page = 2;
  }

  async fetchMovies(fetchParametres) {
    try {
      const response = await axios.get(`${BASE_URL}${fetchParametres}`, {
        params: {
          api_key: API_KEY,
          page: this.page,
        },
      });

      // console.log(response);

      // this.incrementPage();
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  // узгодити з Maria Streltova
  //   incrementPage() {
  //     this.page += 1;
  //   }

  resetPage() {
    this.page = 1;
  }

  //   get query() {
  //     return this.searchQuery;
  //   }

  // set query(newQuery) {
  //   this.searchQuery = newQuery;
  // }
}
