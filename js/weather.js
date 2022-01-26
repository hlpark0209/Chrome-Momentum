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
        const city = document.querySelector('.weatherCity');
        const weather = document.querySelector('.weatherName');
        const temp= document.querySelector('.weatherTemp');
        city.innerText = ` 🏢 : ${data.name}`;
        weather.innerText = ` ⛅ : ${data.weather[0].main}`;
        temp.innerText =  ` 🌡 : ${data.main.temp}`;
        // console.log(city, weather, temp);
    });
    
}
function geoError(){
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(geoOk, geoError);

temp
