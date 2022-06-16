import { loadSelectedTrandingPage } from '../js-partials/tranding-gallery';

import { loadSelectedSearchPage } from '../search';
import { galleryContainer } from '../utils/references';
import { onRenderNextPage } from '../markup/render-watched'

let page;
let nextPage;

export async function onArrowBtnClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    page = document.querySelector('.pagination__active');
    console.dir(e.target.getAttribute('data-set'));

    if (e.target.getAttribute('data-set') === "decrement") {

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

    if (galleryContainer.getAttribute('data-set') === 'watched') {

        console.log(page);
        await onRenderNextPage(nextPage);
    }

}
