'use strict';
const clock = document.querySelector('.clock');
const date = document.querySelector('.date');

// clock : string으로 변환후 sec는 00처리
function getClock(){
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const min = String(time.getMinutes()).padStart(2, "0");
    const sec = String(time.getSeconds()).padStart(2, "0");

    clock.innerText =
    `${hours}:${min}:${sec}`;
};

//date : string으로 변환
function getDate(){
    const days = new Date();
    const year = String(days.getFullYear());
    const month = String(days.getMonth() + 1).padStart(2, "0");
    const day = String(days.getDate());
    console.log(year, month, day);
    


    date.innerText = 
    `${year}. ${month}. ${day}.` 
};

getDate();
getClock();
// setInterval(getDate,  1000);
setInterval(getClock,  1000);

