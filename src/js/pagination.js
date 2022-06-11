import { refs } from './refs';

let shiftPage = 3;
let beforePage;
let afterPage;

async function onCreatePaginationTemplate(currentPage, totalPages) {
  // console.log(currentPage < shiftPage);

  if (currentPage < shiftPage + 1) {
    beforePage = shiftPage - 1;
    // shiftPage = currentPage
    afterPage = 8;
  } else {
    beforePage = currentPage - shiftPage + 1;
    afterPage = currentPage + shiftPage + 1;
  }

  // console.log(afterPage > totalPages);
  if (afterPage >= totalPages) {
    afterPage = totalPages + 1;
  }

  // console.log('beforePage', beforePage);

  // console.log('afterPage', afterPage);

  let array = [];
  for (let i = beforePage; i <= afterPage; i += 1) {
    array.push(
      `<button type="button" class="pagination__btn page" data-set = "${
        i - 1
      }">${i - 1}</button>`
    );
  }
  return array.join('');
}

export async function onRenderPagination(currentPage, totalPages) {
  // console.log(currentPage);

  const markup = await onCreatePaginationTemplate(currentPage, totalPages);

  // console.log(markup);

  await refs.paginationList.insertAdjacentHTML('beforeend', markup);

  const curentBtn = refs.paginationList.querySelector(
    `[data-set = '${currentPage}']`
  );
  // console.log(curentBtn);

  curentBtn.classList.add('pagination__active');
}
