import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default () => {
    const swipers = document.querySelectorAll('.js-reviews-swiper');

    swipers.forEach((sw) => {
        const swiper = new Swiper(sw, {
            modules: [Autoplay],
            speed: 800,
            slidesPerView: 1.1,
            spaceBetween: 14,
            centeredSlides: true,
            centeredSlidesBounds: true,

            autoplay: {
                duration: 4500,
                reverseDirection: false,
                // stopOnLastSlide: true
            },

            breakpoints: {
                768: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 2.5,
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                }
            }
        })
    })
}
