import { refs } from './refs';

export async function clearPaginationList() {
  refs.paginationList.innerHTML = '';
}
