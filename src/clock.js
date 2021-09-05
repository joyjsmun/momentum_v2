
const today = document.querySelector(".today");
const time = document.querySelector(".time");


function todayHandler(){
    const getToday = new Date();
    const year = getToday.getFullYear();
    const month = String(getToday.getMonth()+1).padStart("2",0);
    const day = String(getToday.getDay()+1).padStart("2",0);
    //const date = now.getDate();

    today.innerText =`${year}.${month}.${day}`;
  
} 

    
function timeHandler(){
    const getNow = new Date()
    const hour = String(getNow.getHours()).padStart("2",0);
    const mins = String(getNow.getMinutes()).padStart("2",0);
    time.innerText = `${hour}:${mins}`;

}

todayHandler();
timeHandler();

setInterval(timeHandler,"1000");