'use strict';


const images = [
    "background_01.jpg",
    "background_02.jpg",
    "background_03.jpg",
    "background_04.jpg",
    "background_05.jpg",
    "background_06.jpg",
    "background_07.jpg",
    "background_08.jpg",
    "background_09.jpg",
    "background_10.jpg",
];

const randomBg = images[Math.floor(Math.random() * images.length)];

// img 태크 생성 및 body에 prepend
const createBgImg = document.createElement('img');
createBgImg.src = `img/${randomBg}`;
document.body.prepend(createBgImg); 