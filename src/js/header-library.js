const refs = {
    header: document.querySelector('.header'),
    inputForm: document.querySelector('.header__searchform'),
    navHome: document.querySelector('.home__btn'),
    navLibrary: document.querySelector('.library__btn'),
    libraryBtns: document.querySelector('.library__list'),
    watchedBtn: document.querySelector('.watched-btn'),
    queueBtn: document.querySelector('.queue-btn'),
}

refs.navHome.addEventListener('click', onClickHeaderHomeBth);
refs.navLibrary.addEventListener('click', onClickHeaderLibraryBth);
refs.watchedBtn.addEventListener('click', onClickWatchesBth);
refs.queueBtn.addEventListener('click', onClickQueueBth);

function onClickHeaderHomeBth() {
    refs.libraryBtns.classList.add('is-hidden');
    refs.inputForm.classList.remove('is-hidden');
    refs.navHome.classList.add('current');
    refs.navLibrary.classList.remove('current');
    refs.header.classList.remove('header__my-library');
}

function onClickHeaderLibraryBth() {
    refs.inputForm.classList.add('is-hidden');
    refs.libraryBtns.classList.remove('is-hidden');
    refs.navLibrary.classList.add('current');
    refs.navHome.classList.remove('current');
    refs.header.classList.add('header__my-library')
}

function onClickWatchesBth() {
    refs.queueBtn.classList.remove('active');
    refs.watchedBtn.classList.add('active');
}

function onClickQueueBth() {
    refs.queueBtn.classList.add('active');
    refs.watchedBtn.classList.remove('active');
}


