import { Fancybox, Carousel } from '@fancyapps/ui';
import { Lazyload } from "@fancyapps/ui/dist/carousel/carousel.lazyload.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancybox() {
    const elements = document.querySelectorAll('[data-fancybox]');

    elements.forEach((el) => {
        const img = el.querySelector('img');
        const video = el.querySelector('video');

        el.href = "#";

        if(img) {
            const imgSrc = img.getAttribute('src');
            el.setAttribute('data-srs', imgSrc);
        } else if (video) {
            const videoSrc = video.getAttribute('src');
            el.setAttribute('data-srs', videoSrc);
        } else return;

    })

    Fancybox.bind('[data-fancybox]', {
        groupAll: false,
    });

}
