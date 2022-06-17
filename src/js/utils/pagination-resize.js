import { transmitToRenderNextPage } from '../service/transmit-to-render-next-page';

export async function onResize() {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  const currentPage = document.querySelector('.pagination__active');
  const page = Number(currentPage.textContent);

  await transmitToRenderNextPage(page);
}
