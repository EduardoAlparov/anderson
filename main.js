import './style.scss';

import selectContol from "./js/selectContol";
import gallerySwipers from "./js/gallerySwipers";
import fancybox from "./js/fancybox";
import reviewsSwipers from "./js/reviewsSwipers";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    const buttonForm = document.querySelector('[data-button-form]');

    buttonForm.onsubmit = (e) => {
        e.preventDefault();

        const button = document.createElement("button");
        button.classList.add('visually-hidden');
        button.setAttribute('popovertarget', 'my-popover-check-list');
        document.body.appendChild(button);

        button.click();
        button.remove();
    }

    selectContol();
    gallerySwipers();
    fancybox();
    reviewsSwipers();
})
