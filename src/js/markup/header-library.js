import { navLibrary, header, navHome, inputForm, libraryBtns } from '../utils/references'
import { logIn } from '../service/login';
// import { clearGalleryContainer } from "../utils/clear-gallery-container"

export async function setMyLibraryStyles(e) {
    e.preventDefault();
    libraryBtns.classList.remove('visually-hidden');
    navLibrary.classList.add('current');
    header.classList.add('header__my-library');
    navHome.classList.remove('current');
    inputForm.classList.add('visually-hidden');

    if (!global.userId) {
        await logIn()
    }

    // await clearGalleryContainer();
} 
