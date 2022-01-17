'use strict';

const form = document.querySelector('.todo-form');
const input = form.querySelector('input');
const list = document.querySelector('.todo-list');


// 새로운 li요소를 리스트에 추가
function paintTodo(newTodo){
    const newTodoLi = document.createElement('li');
    const span = document.createElement('span');
    newTodoLi.appendChild(span);
    span.innerText = newTodo;
    list.appendChild(newTodoLi);
    
    console.log(newTodoLi);

}

// 추가된 li의 value 값을 전달
function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = input.value;
    input.value = "";
    paintTodo(newTodo);
}

// delete button 생성

form.addEventListener('submit', handleTodoSubmit);