
interface WeatherStackResponse{
    location:{
        name:string;
        country: string; 
    };
    current:{
        temperature: number;
        weather_descriptions:string[];
        weather_icons:string[];
        
    }
}

const goButton = document.getElementById("weatherButton");
const apiKey="e36df7b4a91813a3965b3ebbc6bd78f2";
const resultWeather=document.getElementById("resultDiv");

goButton.addEventListener("click", async function () {
    // console.log("go button click");
    const cityInput=document.getElementById("cityInput");
    const cityName= cityInput?.ariaValueMax;
    const response= await fetch (`http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`);
    const data: WeatherStackResponse = await response.json();
    resultWeather.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>Temperature: ${data.current.temperature}°C</p>
      <p>${data.current.weather_descriptions[0]}</p>
      <img src="${data.current.weather_icons[0]}" alt="weather icon">
      `;
});