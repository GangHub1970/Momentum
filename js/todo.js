const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const login = document.querySelector('.login_name');

let toDos = [];

const TODOS_KEY = 'todos';

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDO => toDO.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    li.setAttribute('id', newTodo.id);
    span.innerText = newTodo.text;
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.scrollIntoView();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    if (localStorage.length === 0) {
        toDoInput.value = 'Input your name!';
        login.focus();
        return;
    }
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(item => paintToDo(item));
    // parsedToDos.forEach(paintToDo);
}