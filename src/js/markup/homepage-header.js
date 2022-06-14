import {
  paginationList,
  inputForm,
  navHome,
  libraryBtns,
  navLibrary,
  header,
} from '../utils/references';

export function loadHomePageHeader() {
  //   location.reload();
  //
  // --- hide my library hedder --- //
  libraryBtns.classList.add('visually-hidden');
  navLibrary.classList.remove('current');
  header.classList.remove('header__my-library');
  // --- show home page hedder --- //
  navHome.classList.add('current');
  inputForm.classList.remove('visually-hidden');
  paginationList.classList.remove('is-hidden');
}
