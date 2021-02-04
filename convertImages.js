const imagemin = require('imagemin');
const webp = require('imagemin-webp');

imagemin(['./images/original/**/*.{jpeg,jpg,png}'], {
    destination: './images/compressed',
    plugins: [
        webp({ quality: 50 }),
    ],
});
