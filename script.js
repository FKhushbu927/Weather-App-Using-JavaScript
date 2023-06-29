const apiKey = "3ab57200c3c2acce4e470f0e3741c033";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather? units=metric&q=dhaka";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();