import { loadTrandingPage } from '../js-partials/tranding-gallery.js';
import { paginationList, inputForm } from '../utils/references';
import { onPaginationBtnClick } from '../js-partials/pagination-btn-click';
import { searchSubmit } from '../js-partials/search-submit';
import { openModal } from '../js-partials/open-modal';
import { openModalFilm } from '../utils/references';

addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});

paginationList.addEventListener('click', onPaginationBtnClick);

inputForm.addEventListener('submit', searchSubmit);

openModalFilm.addEventListener('click', openModal);