import path from 'path';

export default {
    base: './',

    plugins: [
        // ViteWebfontDownload([
        //     'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
        // ]),
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
