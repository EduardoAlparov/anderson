import './style.scss';
import './node_modules/nouislider/dist/nouislider.min.css';

import setHeaderPadding from "./js/setHeaderPadding";
import rangeSlider from "./js/rangeSlider";
import selectSetValue from "./js/selectSetValue";
import setFixedHeader from "./js/setFixedHeader";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    if(document.querySelector('.js-year')) {
        document.querySelector('.js-year').innerHTML = +new Date().getFullYear();
    }

    setHeaderPadding();
    rangeSlider();
    selectSetValue();
    setFixedHeader();
})
