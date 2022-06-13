import { loadTrandingPage } from '../js-partials/tranding-gallery.js';
import { paginationList } from '../utils/references';
import { onPaginationBtnClick } from '../js-partials/pagination-btn-click';

addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});

paginationList.addEventListener('click', onPaginationBtnClick);

