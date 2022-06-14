import { loadTrandingPage } from '../js-partials/tranding-gallery.js';
import {
  paginationList,
  inputForm,
  navHome,
  headerTitle,
  headerLogo,
} from '../utils/references';
import { onPaginationBtnClick } from '../js-partials/pagination-btn-click';
import { searchSubmit } from '../js-partials/search-submit';
import { onClickHomePage } from '../js-partials/tranding-gallery';

addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});

paginationList.addEventListener('click', onPaginationBtnClick);

inputForm.addEventListener('submit', searchSubmit);

navHome.addEventListener('click', onClickHomePage);
headerTitle.addEventListener('click', onClickHomePage);
headerLogo.addEventListener('click', onClickHomePage);
