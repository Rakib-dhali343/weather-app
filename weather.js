const apiKey = "b230747d176fd3e805b5bad559c4bad7";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWheather(city) {
    const response = await fetch(apiURL + city + "&appid=" + apiKey);
    const data = await response.json();
    console.log(data);
    // return data;

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Cloud") {
        weatherIcon.src = "clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "snow.png";
    }
   else {
        weatherIcon.src = "mist.png"
    }
}

searchButton.addEventListener("click", () => {
    checkWheather(searchBox.value);

})

