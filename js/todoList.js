'use strict';

const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-form input');
const list = document.querySelector('.todo-list');
// 배열이 비어있으므로 새로고침해서 다시 list에 요소를 추가했을때,
// 이전에 추가했던  li요소들이 storage에서 삭제됨
// let으로 변경
let toDos = [];



// 삭제기능
    function deleteTodo(event){
        const parentLi = event.target.parentElement;
        parentLi.remove();
        // 지우고싶은 요소를 제거하고 새 배열을 생성 (filter)
        // string을 number로 변경 ( parseInt )        
        toDos = toDos.filter( toDo => toDo.id !== parseInt(parentLi.id) );
        saveTodo();
    }


// 새로운 li요소 생성 후, 리스트에 추가
function paintTodo(newTodo){
    const newTodoLi = document.createElement('li');
    // 객체의 id값을 부여
    newTodoLi.id = newTodo.id;
    const span = document.createElement('span');
    // 객체를 받아옴
    span.innerText = newTodo.text;
    
    // delete button 생성
    const del = document.createElement('button');
    del.innerText = "❌";
    del.addEventListener('click',deleteTodo);
    newTodoLi.appendChild(span);
    newTodoLi.appendChild(del);
    list.appendChild(newTodoLi);
    newTodoLi.scrollIntoView({block: "center"});
}

// 추가된 li의 value 값을 전달
function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = input.value;
    input.value = "";
    const newTodoObj = {  
        // 각 요소를 id별로 구별
        id : Date.now(),
        text: newTodo,
    }
    // 추가한 list 요소들을 배열의 형태로 변환하여 psuh함, object를 저장
    toDos.push(newTodoObj);
    // 객체를 받아옴
    paintTodo(newTodoObj);
    saveTodo();
;}



// 추가된 todo list를 local storage에 저장
function saveTodo(){
    // 배열에 저장된 list요소들을 string타입으로 변환
    localStorage.setItem( "todosArray", JSON.stringify(toDos));
}

form.addEventListener('submit', handleTodoSubmit);



const savedTodo = localStorage.getItem("todosArray");

if(savedTodo){
    // string으로 저장된 list요소들을 array 타입으로 변환
    const parsedTodo = JSON.parse(savedTodo);
    // 이전에 추가했던 li요소를 toDos 배열에 그대로 유지
    toDos = parsedTodo;
    // 각 array의 item에게 paintTodo function실행
    parsedTodo.forEach(paintTodo);
    //parsedTodo.forEach( (item) => {console.log('this tis the turn of item', item);});
}



