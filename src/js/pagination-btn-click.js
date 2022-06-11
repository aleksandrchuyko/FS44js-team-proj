import { refs } from './refs';

import { loadSelectedTrandingPage } from './tranding';
import { loadSelectedSearchPage } from './search';

refs.paginationList.addEventListener('click', onPaginationBtnClick);

async function onPaginationBtnClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const page = e.target.textContent;

  if (refs.galleryContainer.getAttribute('data-set') === 'tranding') {
    await loadSelectedTrandingPage(page);
  }
  if (refs.galleryContainer.getAttribute('data-set') === 'search') {
    await loadSelectedSearchPage(page);
  }
}
