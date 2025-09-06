
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

const goButton = document.getElementById("weatherButton") as HTMLButtonElement;
const apiKey ="e36df7b4a91813a3965b3ebbc6bd78f2";
const resultWeather=document.getElementById("resultDiv")as HTMLDivElement;

goButton.addEventListener("click", async function () {
    // console.log("go button click");
    const cityInput=document.getElementById("cityInput") as HTMLInputElement;
    const cityName= cityInput.value;

    if(!cityName){
        resultWeather.innerHTML= "<p> Enter A City </p>";
        return;
    }
    try{
        const response= await fetch (`http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`);
        const data: WeatherStackResponse = await response.json();
        resultWeather.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temperature}°C</p>
        <p>${data.current.weather_descriptions[0]}</p>
        <img src="${data.current.weather_icons[0]}" alt="weather icon">
        `;
        console.log(`response: ${response.status}`);
    }
    catch (err){
        resultWeather.innerHTML="<p>Error weather not found</p>"
    }
    
    
});