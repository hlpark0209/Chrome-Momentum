'use strict';


const images = ["background_01.jpg","background_02.jpg"];

const randomBg = images[Math.floor(Math.random() * images.length)];

// img 태크 생성 및 body에 prepend
const createBgImg = document.createElement('img');
createBgImg.src = `img/${randomBg}`;
document.body.prepend(createBgImg); 