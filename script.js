'use strict';

const loginForm = document.querySelector('.login-form');
const welcome = document.querySelector('.welcome');
const loginInput = document.querySelector('.login-form input');
const link = document.querySelector('a');
// string만 포함된 변수 or 중요한 정보를 담지않는 변수는 대문자료 표기
// const HIDDEN_CLASSNAME = 'hidden';
// const USERNAMEKEY = 'username';

//username의 값을 받아오고 submit함
function onLoginSubmit(e){
    //form의 default기능 제거
    e.preventDefault();
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    // username 저장
    localStorage.setItem( "username", username);
    paintWelcome(username);
    
}

// 중복되는 function 생성
function paintWelcome (savedUsername){
    welcome.innerText = `Welcome ! ${savedUsername}`;
    welcome.classList.remove('hidden');
}

// localstorage에 username 저장
const savedUsername = localStorage.getItem("username");
console.log(savedUsername);

if( savedUsername === null ){
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit);
} else{
    paintWelcome(savedUsername);
}