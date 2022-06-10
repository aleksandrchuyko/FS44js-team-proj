import { refs } from './refs';

import {loadSelectedTrandingPage} from './tranding';


refs.paginationList.addEventListener('click', onPaginationBtnClick);

async function onPaginationBtnClick(e) {
  e.preventDefault();
  console.log('page');
  if (e.target.nodeName !== "BUTTON") {
      return;
  }
  const page = e.target.textContent;
  console.log(page);
    if (refs.galleryContainer.getAttribute('data-set') === ('tranding')) {
     await loadSelectedTrandingPage(page);
  }
     if (refs.galleryContainer.getAttribute('data-set') === ('search')) {
     await loadSelectedTrandingPage(page);
  }

}
