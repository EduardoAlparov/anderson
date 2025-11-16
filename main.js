import './style.scss';

import selectContol from "./js/selectContol";
import gallerySwipers from "./js/gallerySwipers";
import fancybox from "./js/fancybox";
import reviewsSwipers from "./js/reviewsSwipers";
import popupSwipers from "./js/popupSwipers";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);


    selectContol();
    gallerySwipers();
    fancybox();
    reviewsSwipers();
    popupSwipers();
})
