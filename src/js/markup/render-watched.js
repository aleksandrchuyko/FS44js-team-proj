import { logoutBtn, galleryContainer } from '../utils/references';
import { getUserDataAllWatched } from '../api-fetch/get-from-database';

import { changeMoviesArray } from '../markup/movies-array-change';
import { onRenderPagination } from '../markup/gallery-pagination';
import { clearGalleryContainer } from '../utils/clear-gallery-container';
import { PARPAGE } from '../utils/constants';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { spinnerRef } from '../utils/spinner';

let response;

export async function onRenderLibrary(page) {
  await clearGalleryContainer();

  Loading.hourglass('Loading...', spinnerRef);

  const movies = await getUserDataAllWatched('116126857176505822881');
  console.log('movies', movies);
  logoutBtn.classList.remove('visually-hidden');
  const arrayLength = movies.length;

  const totalPages = Math.ceil(arrayLength / PARPAGE);

  response = {
    total_pages: totalPages,
    page: page,
  };

  const begin = PARPAGE * page - PARPAGE;
  const end = PARPAGE * page - 1;

  await changeMoviesArray(movies.slice(begin, end));
  await onRenderPagination(response);

  galleryContainer.setAttribute('data-set', 'watched');
}

export async function onRenderNextPage(page) {
  response.page = Number(page);

  await onRenderLibrary(page);
}
