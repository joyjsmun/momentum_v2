const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");
const nextTodoList = document.querySelector(".nextTodoList");

let todos = [];
let nextTodos = [];



function nextHandler(event){
const li = event.target.parentElement;
const value = event.target;
console.log(event.target.)
li.remove();
paintNextTodo(value);
//saveNextTodo();
}

function paintNextTodo(nextTodo){
    //nextTodo.classList.remove("hidden");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");
    const backButton = document.createElement("button");
    span.innerText = nextTodo;
    delButton.innerText = "❎";
    backButton.innerText="◀️";
    nextTodoList.appendChild(li);
    li.appendChild(span);
    span.appendChild(backButton);
    span.appendChild(delButton);
    delButton.addEventListener("click",deleteHandler);
    backButton.addEventListener("click",backHanlder);

}


// function saveNextTodo(){
//     localStorage.setItem("nextTodos",)
// }

function backHanlder(){
    const li = event.target.parentElement;
    li.remove();

}



function deleteHandler(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((x) => x.id !== parseInt(li.id))
    saveTodo();
}

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function paintTodo(todoObj){
    todayTodo.classList.remove("hidden");
    const li = document.createElement("li");
    li.id = todoObj.id;
    const span = document.createElement("span");
    const delButton = document.createElement("button");
    const nextButton = document.createElement("button");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(nextButton);
    li.appendChild(delButton);
    span.innerText = todoObj.todo;
    nextButton.innerText="✅"
    delButton.innerText ="❎";
    nextButton.addEventListener("click",nextHandler);
    delButton.addEventListener("click",deleteHandler);
    
}

function todoHandler(event){
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        todo : todo,
        id : Date.now()
    }
    todos.push(todoObj);
    paintTodo(todoObj);
    saveTodo();
}

const savedTodo = localStorage.getItem("todos");

if(savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    todos = parsedTodo;
    console.log(parsedTodo);
    parsedTodo.forEach(paintTodo);

}

todoForm.addEventListener("submit",todoHandler);



