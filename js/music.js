'use strict';

function loadMusic(){
    return fetch("data.json")
    .then( response => response.json())
    .then( console.log(json));
    
}

const album = document.querySelector('.album__cover');
const preBtn = document.querySelector('.album__pre');
const playBtn = document.querySelector('.album__play');
const nextBtn = document.querySelector('.album__next');
const title = document.querySelector('.musicTitle');
const singer = document.querySelector('.musicSinger');

const aomg = new Audio("./music/H1GHR MUSIC Compilation Album Best Verse.mp3");


// function playMusic(item){
//     const titleText = item.title;
//     const singerText = item.singer;
    
//     console.log(titleText, singerText);
// }

// playBtn.addEventListener("click", () => playMusic(item));





// function playSong(music){
    
//     music
//     const titleText = music.title;
//     const singerText = music.singer;

//     title.innerText = titleText;
//     singer.innerText = singerText;
//     console.log('ok');

// }



loadMusic()
// .then( music =>{
//     playMusic(music);
// })
// .catch(console.log('warning'));