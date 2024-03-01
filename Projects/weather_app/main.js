

const name = document.querySelector(".name")
const search_Form = document.querySelector(".search")
const submit_Button = document.querySelector(".submit")

const temp = document.querySelector(".temperature")
const location_nam = document.querySelector(".location")

const humidity = document.querySelector(".humidity span")
const wind = document.querySelector(".wind span")





const apikey = "85bd6e188735ff5822abfdccb11eaf53"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="  

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)
    temp.innerHTML = Math.round(data.main.temp) + "°C"
    location_nam.innerHTML = data.name
    humidity.innerHTML = data.main.humidity
    wind.innerHTML = data.wind.speed
}


window.addEventListener('load', () => {
    checkweather("Rajahmundry"); 
});
submit_Button.addEventListener("click", (e) => {
    e.preventDefault()
    const city_lower = search_Form.value.toLowerCase()
    checkweather(city_lower)
    search_Form.value = ""
})


var data = new Date();

var day = data.toLocaleString('en-US', { weekday: 'long' }); 
var month = data.toLocaleString('en-US', { month: 'long' }); 
var date = data.getDate(); 
var year = data.getFullYear(); 
var day_ = day + ' ' + month + ' ' + date + ' ' + year

const day__ = document.querySelector(".day")
day__.innerHTML = day_
