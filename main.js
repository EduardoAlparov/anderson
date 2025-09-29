import './style.scss';

import selectContol from "./js/selectContol";
import gallerySwipers from "./js/gallerySwipers";
import reviewsSwipers from "./js/reviewsSwipers";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    selectContol();
    gallerySwipers();
    reviewsSwipers();
})
