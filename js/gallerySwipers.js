import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default () => {
    const carousels = Array.from(document.querySelectorAll('.js-swiper-carousel'));

    carousels.forEach( (carousel) => {
        const box = carousel.querySelector('.swiper');

        const swiper = new Swiper(box, {
            modules: [Navigation],
            speed: 500,

            navigation: {
                nextEl: carousel.querySelector('.gallery-section__swiper-next'),
                prevEl: carousel.querySelector('.gallery-section__swiper-prev'),
              },
        })
    });
}
