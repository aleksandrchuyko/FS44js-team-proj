import { paginationList } from '../utils/references';
import { onCreatePaginationTemplate } from './pagination-markup';

export async function onRenderPagination(response) {
    
    const currentPage = response.page;
  console.log(currentPage);

    const markup = await onCreatePaginationTemplate(response);
    

  // console.log(markup);

  await paginationList.insertAdjacentHTML('beforeend', markup);

  const curentBtn = paginationList.querySelector(
    `[data-set = '${currentPage}']`
  );
  // console.log(curentBtn);

  curentBtn.classList.add('pagination__active');
}
