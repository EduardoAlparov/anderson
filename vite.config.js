import path from 'path';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

export default {
    base: './',

    plugins: [

    ],
    optimizeDeps: {
        // exclude: ['@fortawesome/fontawesome-free'],
    },
    build: {
        compilerOptions: {
            baseUrl: "./assets",
        },
    },
};
