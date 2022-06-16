import { loadTrandingPage } from '../js-partials/tranding-gallery.js';
import {
  paginationList,
  inputForm,
  navHome,
  headerTitle,
  headerLogo,
  navLibrary,
  logoutBtn,
  openModalFilm,
  watchedBtn,
  queueBtn,
} from '../utils/references';
import { onPaginationBtnClick } from '../js-partials/pagination-btn-click';

import { onClickHomePage } from '../js-partials/tranding-gallery';

import { openModal } from '../js-partials/open-modal';
// import { openModalFilm } from '../utils/references';
// import { onResize } from '../utils//display-change';
import { arrowBtn } from '../utils/references';
import { onArrowBtnClick } from '../js-partials/pagination-arrows';
import { logOut } from '../service/login';
import { setMyLibraryStyles } from '../markup/header-library';
import { clickButWatched } from '../service/header-library-click';
import { clickButQueue } from '../service/header-queue-click';

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

watchedBtn.addEventListener('click', clickButWatched);
queueBtn.addEventListener('click', clickButQueue);
navLibrary.addEventListener('click', setMyLibraryStyles);
logoutBtn.addEventListener('click', logOut);
