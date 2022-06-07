const axios = require('axios').default;

const refs = {
  openModalBtn: document.querySelector(".open__btn"),
  container: document.querySelector(".container-js"),
};

refs.openModalBtn.addEventListener("click", openModal);
let id = "453395";

const  options = {
    responseType: 'stream',
    api_key: "a8de9bbb748883055cd7737934b96801",
}

function openModal() {
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
   
    getData().then(data => {
        const {poster_path, title, overview, vote_average, vote_count, popularity, original_title,} = data;
        const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
        let markup = `<div class="backdrop">
        <div class="modal">
            <button type="button" class="close__modal">
                X
            </button>
            <div class="modal__wrapper">
                <img class="modal__image" src="${poster}" alt="foto">
                <div class="modal__about">
                    <h2 class="modal__title">${title}</h2>
                    <div class="modal__lists"> 
                        <ul class="list__key">
                            <li class="key__item">
                                Vote / Votes
                            </li>
                            <li class="key__item">
                                Popularity
                            </li>
                            <li class="key__item">
                                Original Title
                            </li>
                            <li class="key__item">
                                Genre
                            </li>
                        </ul>
                        <ul class="list__value list">
                            <li class="item__value">
                                <span class="vote">${vote_average}</span> / ${vote_count}
                            </li>
                            <li class="item__value">
                                ${popularity}
                            </li>
                            <li class="item__value">
                                ${original_title}
                            </li>
                            <li class="item__value">
                                ${data.genres[0].name} 
                            </li>
                        </ul>
                    </div>
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

getData();


async function getData() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/453395`, {
            params: options
        });
        const muvie = response.data;
        return muvie;
    } catch (error) {
        console.log(error);
    }
}