
import { refs } from './refs';
import { clearPaginationList } from './clear-pagination';
import clearGalleryContainer from './clear-gallery';
import changeMoviesArray from './page-render';
import { logIn, userId } from "./logIn";
import { getUserDataAllWatched, getUserDataAllQueue } from "./getFromDataBase";


refs.queueBtn.addEventListener('click', clickButQueue);
refs.watchedBtn.addEventListener('click', clickButWatched);
refs.navHome.addEventListener('click', clickButHome);
refs.navLibrary.addEventListener('click', clickButLibrary);

function clickButHome(e) {
    e.preventDefault();
    refs.paginationList.classList.remove('is-hidden');
    refs.navHome.classList.add('current');
    refs.navLibrary.classList.remove('current');
    refs.libraryBtns.classList.add('visually-hidden');
    refs.inputForm.classList.remove('visually-hidden');

}

function clickButLibrary(e) {
    e.preventDefault();
    refs.paginationList?.classList.add('is-hidden');
    refs.navLibrary.classList.add('current');
    refs.navHome.classList.remove('current');
    refs.inputForm?.classList.add('visually-hidden');
    refs.libraryBtns.classList.remove('visually-hidden');
    moviesRender('queue')
    refs.queueBtn.classList.add('active');
    refs.watchedBtn.classList.remove('active');
}

function clickButQueue() {
    refs.queueBtn.classList.add('library__current');
    refs.watchedBtn.classList.remove('library__current');
}

function clickButWatched() {
    refs.watchedBtn.classList.add('library__current');
    refs.queueBtn.classList.remove('library__current');
}


// Render Library JS//////

const container = document.getElementById('pagination');
async function moviesRender(type) {
    await clearGalleryContainer();
    await clearPaginationList();
    container?.classList.add('is-hidden');
    try {
        if (!global.userId) {
            await logIn()
        }


        switch (type) {
            case 'watched':
                getUserDataAllWatched(global.userId).then(data => {
                    // global.watchedCache = Object.values(data);
                    console.log('Массив watched из firebase:', data);
                    await changeMoviesArray(data)
                });
                refs.galleryContainer.setAttribute('data-set', 'watched');
                break;
            case 'queue':
                getUserDataAllQueue(global.userId).then(data => {
                    // global.queueCache = Object.values(data);
                    console.log('Массив queue из firebase:', data);
                    await changeMoviesArray(data)
                });
                console.log(refs.galleryContainer)
                refs.galleryContainer.setAttribute('data-set', 'queue');
        }
    } catch (e) {
        console.error(e)
    }
}


refs.navLibrary.addEventListener('click', () => {

    if (refs.watchedBtn.classList.contains('library__current')) {
        moviesRender('watched');
    } else if (refs.queueBtn.classList.contains('library__current')) {
        moviesRender('queue')
    }
});

refs.watchedBtn.addEventListener('click', () => moviesRender('watched'));
refs.queueBtn.addEventListener('click', () => moviesRender('queue'));
