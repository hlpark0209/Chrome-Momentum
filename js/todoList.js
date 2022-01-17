'use strict';

const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-form input');
const list = document.querySelector('.todo-list');
const toDos = [];



// 삭제기능
    function deleteTodo(event){
        const parentLi = event.target.parentElement;
        parentLi.remove();
    }


// 새로운 li요소 생성 후, 리스트에 추가
function paintTodo(newTodo){
    const newTodoLi = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    
    // delete button 생성
    const del = document.createElement('button');
    del.innerText = "❌";
    del.addEventListener('click',deleteTodo);
    newTodoLi.appendChild(span);
    newTodoLi.appendChild(del);
    list.appendChild(newTodoLi);
}

// 추가된 li의 value 값을 전달
function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = input.value;
    input.value = "";
    //list 요소들을 배열에 저장
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodo()
;}



// 추가된 todo list를 local storage에 저장

function saveTodo(){
    // 텍스트로 된 list 요소들을 배열의 형태로 변환
    localStorage.setItem( "todosArray", JSON.stringify(toDos));
}




form.addEventListener('submit', handleTodoSubmit);