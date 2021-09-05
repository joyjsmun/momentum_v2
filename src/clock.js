
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
    const getNow = Date.now();

}

todayHandler();
setInterval(timeHandler,"1000");