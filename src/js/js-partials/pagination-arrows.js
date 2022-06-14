import { loadSelectedTrandingPage } from '../js-partials/tranding-gallery';

// import { loadSelectedSearchPage, currentPageS } from './search';
import { galleryContainer } from '../utils/references';
let page;
let nextPage;

export async function onArrowBtnClick(e) {
    e.preventDefault();
    const arrowButton = e.currentTarget;
    // console.log(!e.target.classList.contains('.pagination__button'));
   
  
  
    page = document.querySelector('.pagination__active');
    console.dir(e.target.getAttribute('data-set'))
  
    if (e.target.getAttribute('data-set') === "decrement") {
        if (!e.currentTarget.classList.contains('.arrow__button')) {
            return;
    } 
        nextPage = Number(page.textContent) - 1;
    } else {
        nextPage = Number(page.textContent) + 1; 
}





  if (galleryContainer.getAttribute('data-set') === 'tranding') {

    console.log(page);
    await loadSelectedTrandingPage(nextPage);
  }

  if (galleryContainer.getAttribute('data-set') === 'search') {

    console.log(page);
    await loadSelectedSearchPage(nextPage);
  }
}

// export async function onRightBtnClick(e) {
//     e.preventDefault();
//     page = document.querySelector('.pagination__active');
//     nextPage = Number(page.textContent) + 1;

//   if (galleryContainer.getAttribute('data-set') === 'tranding') {

//     console.log(page.textContent);
//     await loadSelectedTrandingPage(nextPage);
//   }
//   if (refs.galleryContainer.getAttribute('data-set') === 'search') {
    
//     await loadSelectedSearchPage(nextPage);
//   }
// }
