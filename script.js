document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value.trim();

    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const apiKey = '52ffd6644e01d9782e709a9c93f0929e'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
