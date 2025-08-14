import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// import { dependencies } from './package.json';
// function renderChunks(deps) { // https://vitejs.dev/config/
//     let chunks = {};
//     Object.keys(deps).forEach((key) => {
//         if (['@fortawesome/fontawesome-free'].includes(key)) return;
//         chunks[key] = [key];
//     });
//     return chunks;
// }

export default {
    // css: {
    //     preprocessorOptions: {
    //       scss: {
    //         additionalData: `@use "/scss/mixins.scss";`,
    //       },
    //     },
    // },
    plugins: [
        // ViteWebfontDownload([
        //     'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
        // ]),
    ],
    optimizeDeps: {
        // exclude: ['@fortawesome/fontawesome-free'],
    },
    // build: {
    //     // sourcemap: false,
    //     rollupOptions: {
    //         output: {
    //             manualChunks: {
    //                 vendor: ['@fortawesome/fontawesome-free'],
    //                 ...renderChunks(dependencies),
    //             },
    //         },
    //     },
    // },
};
