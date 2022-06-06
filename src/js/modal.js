const refs = {
  openModalBtn: document.querySelector(".open__btn"),
  container: document.querySelector(".container-js"),
};

refs.openModalBtn.addEventListener("click", openModal);

function openModal() {
  window.addEventListener("keydown", escapePress);
  document.body.classList.add("show__modal");
    markup();
    const closeModalBtn = document.querySelector(".close__btn");
    const backdrop = document.querySelector(".backdrop");
   
    closeModalBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", backdropClick);

}

function closeModal() {
  window.removeEventListener("keydown", escapePress);
    document.body.classList.remove("show__modal");
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

function markup() {
  refs.container.innerHTML = `<div class="backdrop">
        <div class="modal">
            <button type="button" class="close__modal">
                X
            </button>
            <div class="modal__wrapper">
                <img class="modal__image" src="" alt="">
                <div class="modal__about">
                    <h2 class="modal__title">A FISTFUL OF LEAD</h2>
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
                                <span class="vote">7.3</span> / 1260
                            </li>
                            <li class="item__value">
                                100.2
                            </li>
                            <li class="item__value">
                                A FISTFUL OF LEAD
                            </li>
                            <li class="item__value">
                                Western 
                            </li>
                        </ul>
                    </div
                    <h3 class="text__title">About</h3>

                    <p class="modal__text">
                        Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most
                        corrupt
                        settlement of the
                        gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of
                        gold hide out
                        in the
                        abandoned gold mine where they happen across another gang of three – who themselves were
                        planning to hit the
                        very same
                        bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled
                        with lead...
                        they’ve
                        been double crossed – but by who and how?
                    </p>
                    <div class="modal__buttons">
                        <button class="modal__button watched__btn" type="button">add to watched</button>
                        <button class="modal__button" type="button">add to queue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}