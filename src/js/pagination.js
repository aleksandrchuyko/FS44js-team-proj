import { refs } from './refs';

let shiftPage = 3;
let beforePage;
let afterPage;

async function onCreatePaginationTemplate(currentPage, totalPages) {
  // console.log(currentPage < shiftPage);,
  console.dir(document.documentElement.clientWidth);

  if (document.documentElement.clientWidth < 480) {
    shiftPage = 1;
  }

  if (currentPage < shiftPage + 1) {
    beforePage = shiftPage - 1;
    // shiftPage = currentPage
    afterPage = 2 * (shiftPage + 1);
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
    if (i - 1 > 0) {
      array.push(
        `<button type="button" class="pagination__btn page" data-set = "${
          i - 1
        }">${i - 1}</button>`
      );
    }
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
