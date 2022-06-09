
import { refs } from './refs';
import { loadSelectedTrandingPage } from './tranding';

refs.paginationList.addEventListener("click", onPaginationBtnClick)

async function onPaginationBtnClick(e) {
    e.preventDefault();
    // currentBtn.classList.remove("pagination__active");
 
    if (e.target.nodeName !== "BUTTON") {
        return;
    }
    currentBtn = e.target;
    // currentBtn.classList.add("pagination__active");
    const page = currentBtn.textContent;
    console.log(page);
    await loadSelectedTrandingPage(page);
}
