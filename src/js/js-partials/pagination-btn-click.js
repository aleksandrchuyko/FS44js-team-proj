import { loadSelectedTrandingPage } from '../js-partials/tranding-gallery';
import { galleryContainer } from '../utils/references';
import { loadSelectedSearchPage } from '../search';


export async function onPaginationBtnClick(e) {
  e.preventDefault();
  const page = e.target.textContent;

  console.log(page);

  if (galleryContainer.getAttribute('data-set') === 'tranding') {
    await loadSelectedTrandingPage(page);
  }
  if (galleryContainer.getAttribute('data-set') === 'search') {
  
    await loadSelectedSearchPage(page);
  }
}
