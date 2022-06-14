import { desktopShiftPages, mobileShiftPages } from '../utils/constants';
// import { displayWidth } from '../utils/display-change';
// console.log(displayWidth);


export async function onCreatePaginationTemplate(response) {
    let shiftPage = desktopShiftPages;
    let beforePage;
  let afterPage;

  const displayWidth = document.documentElement.clientWidth;
  // console.log(onResize());
    // let displayWidth = 1200;
  
  console.log(displayWidth)

    const currentPage = response.page;
    const totalPages = response.total_pages;

    if (displayWidth < 480) {
        shiftPage = mobileShiftPages;
    }

    //   await onResize();

  if (currentPage < shiftPage + 1) {
    beforePage = shiftPage - 1;
    // shiftPage = currentPage
    afterPage = 2 * (shiftPage + 1);
  } else {
    beforePage = currentPage - shiftPage + 1;
    afterPage = currentPage + shiftPage + 1;
  }

  if (afterPage >= totalPages) {
    afterPage = totalPages + 1;
  }

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