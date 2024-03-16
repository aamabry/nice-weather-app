function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;
    apiCity = searchInputElement.value;
    fetchData();
}

function formateDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    if (minutes <10) {
        minutes =`0${minutes}`;
    }

    if (hours <10) {
        hours = `0${hours}`;
    }

    let days =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
}

function showTemperature(response) {
    let temperatureElement = document.querySelector("#api-temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function fetchData() {
    let apiKey = "1b509431b344bbaa8c5fo44ef08bca6t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiCity}&key=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let curentDate = new Date();
currentDateElement.innerHTML = formateDate(currentDate);