import { paginationList } from '../utils/references';
import { onCreatePaginationTemplate } from './pagination-markup';

export async function onRenderPagination(response) {

  const currentPage = response.page;

  const markup = await onCreatePaginationTemplate(response);

  paginationList.insertAdjacentHTML('beforeend', markup);

  const curentBtn = paginationList.querySelector(`[data-set = '${currentPage}']`);

  curentBtn.classList.add('pagination__active');
}
