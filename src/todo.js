const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");

let todos = [];

function deleteHandler(event){
    const li = event.target.parentElement;
    const selectedId = li.id;
    console.log(typeof selectedId);
    if(selectedId){
        console.log("id:",selectedId)
    }
 
    li.remove();
    console.dir(event.target);
}

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function paintTodo(todoObj){
    todayTodo.classList.remove("hidden");
    const li = document.createElement("li");
    li.id = todoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = todoObj.todo;
    button.innerText ="❎";
    button.addEventListener("click",deleteHandler)
    
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



