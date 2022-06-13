import { desktopShiftPages, mobileShiftPages } from '../utils/constants';


export async function onCreatePaginationTemplate(response) {
    let shiftPage = desktopShiftPages;
    let beforePage;
    let afterPage;
    let displayWidth = 1200;

    const currentPage = response.page;
    const totalPages = response.total_pages;

    if (displayWidth < 480) {
        shiftPage = mobileShiftPages;
    }

    //   await onResize();

//   if (displayWidth < 480) {
//     shiftPage = 1;
//   }
  // console.log(currentPage < shiftPage);,
  // console.dir(document.documentElement.clientWidth);

  // console.log(shiftPage);

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

//   if (currentPage >= 2) {
//     refs.leftBtn.classList.remove('visually-hidden');
// }
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