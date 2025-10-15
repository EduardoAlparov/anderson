import { Fancybox, Carousel } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancybox() {
    const elements = document.querySelectorAll('[data-fancybox]');

    elements.forEach((el) => {
        const img = el.querySelector('img');
        const video = el.querySelector('video');

        if(img) {
            const imgSrc = img.getAttribute('src');
            el.setAttribute('href', imgSrc);
        } else if (video) {
            const videoSrc = video.getAttribute('src');
            el.setAttribute('href', videoSrc);
        } else return;
    })

    Fancybox.bind('[data-fancybox]', {
        groupAll: false,
    });

}
