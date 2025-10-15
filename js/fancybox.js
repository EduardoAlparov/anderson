import { Fancybox, Carousel } from '@fancyapps/ui';
import { Lazyload } from "@fancyapps/ui/dist/carousel/carousel.lazyload.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        groupAll: false
    });

}
