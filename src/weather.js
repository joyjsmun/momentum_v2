const API_KEY = "6ab68981aee2954e9ffb336b6a2dfc02";
const weatherIcon = document.querySelector("#weather-icon");
let temp = document.querySelector("#temp");



function sucess(myPosition){
    const crds = myPosition.coords;
    let lat = crds.latitude;
    let lon = crds.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(URL)
    //fetch(URL).then(response => response.json()).then(data => console.log(data.temp,data.weather.icon))
   
 

  
}

function error(){
    console.warn("Can't get the position!");
}

navigator.geolocation.getCurrentPosition(sucess,error);