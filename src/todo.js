const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");

const todos = [];

function saveTodo(todo){
    todos.push(todo);
    localStorage.setItem("todos",todos)
}


function paintTodo(todo){
    todayTodo.classList.remove("hidden");
    //todoForm.classList.add("hidden");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    todoList.appendChild(li);
    li.innerText = todo;
    li.appendChild(span);
    span.innerText = "✅";
    button.innerText ="❎";
    
}

function todoHandler(event){
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    paintTodo(todo);
    saveTodo(todo);
    console.log(todo);
}

todoForm.addEventListener("submit",todoHandler);