import { loadTrandingPage } from '../js-partials/tranding-gallery.js';
import {
  paginationList,
  inputForm,
  navHome,
  headerTitle,
  headerLogo,
} from '../utils/references';
import { onPaginationBtnClick } from '../js-partials/pagination-btn-click';
// import { searchSubmit } from '../js-partials/search-submit';

import { onClickHomePage } from '../js-partials/tranding-gallery';

import { openModal } from '../js-partials/open-modal';
import { openModalFilm } from '../utils/references';
// import { onResize } from '../utils//display-change';
import { arrowBtn } from '../utils/references';
import { onArrowBtnClick} from '../js-partials/pagination-arrows';


addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});

paginationList.addEventListener('click', onPaginationBtnClick);

// inputForm.addEventListener('submit', searchSubmit);


navHome.addEventListener('click', onClickHomePage);
headerTitle.addEventListener('click', onClickHomePage);
headerLogo.addEventListener('click', onClickHomePage);

openModalFilm.addEventListener('click', openModal);

// window.addEventListener('resize', onResize);



arrowBtn.addEventListener('click', onArrowBtnClick);
console.log(arrowBtn);