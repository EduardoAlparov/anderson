import './style.scss';

import selectContol from "./js/selectContol";
import gallerySwipers from "./js/gallerySwipers";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    selectContol();
    gallerySwipers();
})
