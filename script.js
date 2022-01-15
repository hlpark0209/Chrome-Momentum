'use strict';

const loginForm = document.querySelector('.login-form');
const welcome = document.querySelector('.welcome');
const loginInput = document.querySelector('.login-form input');
const link = document.querySelector('a');
// string만 포함된 변수 or 중요한 정보를 담지않는 변수는 대문자료 표기
// const HIDDEN_CLASSNAME = 'hidden';


function onLoginSubmit(e){
    //form의 default기능 제거
    e.preventDefault();
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    welcome.innerText = `Welcome ! ${username};`;
    welcome.classList.remove('hidden');
    console.log(welcome);


}
//username의 값을 받아오고 submit함
loginForm.addEventListener('submit', onLoginSubmit);

