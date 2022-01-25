'use strict';

//user의 geolocation 받아오기
const API_KEY = '0f5414d7c0b65b209a15a6b243d81bfa';

function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then( response => response.json())
    .then(data => {
        const weather = document.querySelector('.weather span:first-child');
        const city = document.querySelector('.weather span:last-child');
        city.innerText = `City : ${data.name}`;
        weather.innerText = `${data.weather[0].main}`;
        
        
    });

}
function geoError(){
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(geoOk, geoError);

