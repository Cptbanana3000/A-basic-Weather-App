

let form = document.getElementById("search-form");
let cityinput = document.getElementById("city-input");
let cityname = document.getElementById("city-name");
let discription = document.getElementById("weather-description");
let humidity = document.getElementById("humidity");
let tempdata = document.getElementById("temperature");

const api = "b4398c33e3d2d3333ccc349ff672b999";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = cityinput.value;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    // Update UI with weather data
    tempdata.innerText = (await data.main.temp) + "°C";

    cityname.innerText = data.name;

    humidity.innerText = `Humidity: ${data.main.humidity} %`;

    discription.innerText = data.weather[0].description 

    cityinput.value = "";
    
  } catch (error) {
    console.error(error);
  }
});
