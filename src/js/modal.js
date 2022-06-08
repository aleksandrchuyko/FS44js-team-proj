
import {getData} from "./getCardApi.js";

const refs = {
    openModalBtn: document.querySelector(".main-gallery__list"),
    container: document.querySelector(".container-js"),
};

refs.openModalBtn.addEventListener("click", openModal);
let muvieId = "10770";

function openModal() {
    console.log(refs.openModalBtn);
    window.addEventListener("keydown", escapePress);
    document.body.classList.add("show__modal");
    modalMarkup();
}

function closeModal() {
  window.removeEventListener("keydown", escapePress);
    document.body.classList.remove("show__modal");
    refs.container.innerHTML = "";
}

function backdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function escapePress(event) {
  const ESC_KEY_CODE = "Escape";
  const escape = event.code === ESC_KEY_CODE;

  if (escape) {
    closeModal();
  }
}

function modalMarkup() {
   
    getData(muvieId).then(data => {
        const {poster_path, title, overview, vote_average, vote_count, popularity, original_title,} = data;
        const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const genres = data.genres.map(genre => genre.name).join(", ");
        let markup = `<div class="backdrop">
        <div class="modal">
            <button type="button" class="close__modal">
            </button>
            <div class="modal__wrapper">
                <div class="modal__poster">
                    <img class="modal__image" src="${poster}" alt="${title}">
                </div>
                <div class="modal__about">
                    <h2 class="modal__title">${title}</h2>
                    <table class="modal__table">
                        <tbody>
                            <tr>
                            <td class="key__item">Vote / Votes</td>
                            <td class="item__value"><span class="vote">${vote_average}</span> / ${vote_count}</td>
                            </tr>
                            <tr>
                            <td class="key__item">Popularity</td>
                            <td class="item__value">${popularity}</td>
                            </tr>
                            <tr>
                            <td class="key__item">Original Title</td>
                            <td class="item__value">${original_title}</td>
                            </tr>
                            <tr>
                            <td class="key__item">Genre</td>
                            <td class="item__value">${genres}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 class="text__title">About</h3>
                    <p class="modal__text">${overview}</p>
                    <div class="modal__buttons">
                        <button class="modal__button watched__btn" type="button">add to watched</button>
                        <button class="modal__button" type="button">add to queue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
        refs.container.insertAdjacentHTML("beforeend", markup);

        const closeModalBtn = document.querySelector(".close__modal");
        const backdrop = document.querySelector(".backdrop");
        closeModalBtn.addEventListener("click", closeModal);
        backdrop.addEventListener("click", backdropClick);
    })
}