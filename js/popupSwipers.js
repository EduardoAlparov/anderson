import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default () => {
    const popupSwipers = document.querySelectorAll('.js-popup-swiper');

    popupSwipers.forEach((popupSwiper) => {
        new Swiper(popupSwiper, {
            modules: [Navigation],
            speed: 700,
            slidesPerView: 1,

            navigation: {
                nextEl: popupSwiper.querySelector('.popover-ready__slider-button--next'),
                prevEl: popupSwiper.querySelector('.popover-ready__slider-button--prev'),
            },
        })
    })
}
