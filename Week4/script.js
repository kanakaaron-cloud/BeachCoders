var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const goButton = document.getElementById("weatherButton");
const apiKey = "e36df7b4a91813a3965b3ebbc6bd78f2";
const resultWeather = document.getElementById("resultDiv");
goButton.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log("go button click");
        const cityInput = document.getElementById("cityInput");
        const cityName = cityInput.value;
        if (!cityName) {
            resultWeather.innerHTML = "<p> Enter A City </p>";
            return;
        }
        try {
            const response = yield fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`);
            const data = yield response.json();
            resultWeather.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temperature}°C</p>
        <p>${data.current.weather_descriptions[0]}</p>
        <img src="${data.current.weather_icons[0]}" alt="weather icon">
        `;
            console.log(`response: ${response.status}`);
        }
        catch (err) {
            resultWeather.innerHTML = "<p>Error weather not found</p>";
        }
    });
});
