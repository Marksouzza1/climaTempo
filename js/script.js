const apiKey = "";
const apiCountryURL = "https://flagsapi.com/KR/flat/64.png"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const weatherContainer = document.querySelector("#weather-data")
const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#descripition")
const weatherIconElemente = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")


const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json();
    console.log(data)
    return data
};



showWeatherData = async (city) =>{
  const data = await getWeatherData(city);
  let windSpeed = data.wind.speed
    convert = windSpeed * 3.6

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElemente.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)
    umidityElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerText = `${convert.toFixed(0)}km/h`

    weatherContainer.classList.remove("hide");
};

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value

    showWeatherData(city);

});

cityInput.addEventListener("keyup", (e)=>{
    if(e.code === "Enter"){
        const city = e.target.value
        showWeatherData(city);

    }
})
