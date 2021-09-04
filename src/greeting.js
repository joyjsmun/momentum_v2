const form = document.querySelector("#userForm");
const userInput = document.querySelector("#userForm input");
const greetingForm = document.querySelector("#greetingForm");
const name = document.querySelector("#name");


let userName = "";
const USER = "user"


function saveName(){
    localStorage.setItem(USER,userName);
}


function paintName(){
    name.innerText = userName.toUpperCase();
    greetingForm.classList.remove("hidden");
form.classList.add("hidden");

}

function userformHandler(event){
    event.preventDefault();
    userName = userInput.value;
    userInput.value ="";
    paintName();
    saveName();
}

const savedName = localStorage.getItem(USER);

if(savedName !== null){
    userName = savedName;
    paintName();
}

form.addEventListener("submit",userformHandler)