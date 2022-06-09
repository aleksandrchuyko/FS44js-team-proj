
import { refs } from './refs';
import { loadSelectedTrandingPage } from './tranding';

refs.paginationList.addEventListener("click", onPaginationBtnClick)

async function onPaginationBtnClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    const page = e.target.textContent;
    console.log(page);
    await loadSelectedTrandingPage(page);
}
