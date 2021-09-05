const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");

let todos = [];

function saveTodo(todo){
    localStorage.setItem("todos",todo)
}


function paintTodo(todo){
    todayTodo.classList.remove("hidden");
    //todoForm.classList.add("hidden");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = todo;
    button.innerText ="❌";
}

function todoHandler(event){
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    todos.push(todo);
    JSON.stringify(todos);
    paintTodo(todo);
    saveTodo(todo);
    console.log(todo);
}

const savedTodo = localStorage.getItem("todos")

if(savedTodo !== null){
    todos = savedTodo;
    paintTodo(savedTodo);
}

todoForm.addEventListener("submit",todoHandler);