import Dar from "./components/Dar";
import Njombe from "./components/Njombe";
import Arusha from "./components/Arusha";
import axios from "axios";
import { useState } from "react";
import moment from "moment";
import Pcloudy from './assets/pcloudy.svg';
import Rainy from './assets/Tshower.svg';
import Sunny from './assets/sun.svg';
import { WeatherData } from "./types";
function App() {
  //state variables
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  //updates the city state variable 
  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }
  
  //fetches weather data then sets it to the weather object
  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      try {
        const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93de778a8de80994ecaaee49126e92e9&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    }   
  };

  return (
  <div className="container">
      <div className="navbar">
        <h2>Dark Weather</h2>
        <div className="navi-bar">
          <ul>
            <li>Home</li>
            <li>Download app</li>
            <li>Contact us</li>
          </ul>
        </div>
          <button>Sign Up</button>
      </div>
      <div className="content">
        <h3>Seeing the weather of the whole world with <em>Dark Weather!</em></h3>
      </div>
      <div className="filters">
        <div className="search-box">
            <input 
              type="text" 
              value={city}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearch}
              maxLength={20} 
              placeholder='Search Here'/>
        </div>
        <div className="filter-box">
            <p>Filters</p>
            <select className="dropdown" id="dropdown">
                <option value="value1">Coldest</option>
                <option value="value1">Humid</option>
                <option value="value1">Hottest</option>
            </select>
            <select className="dropdown" id="dropdown">
                <option value="value1">10ºC - 20ºC</option>
                <option value="value1">0ºC - 10ºC</option>
                <option value="value1">20ºC - 30ºC</option>
            </select>
            <select className="dropdown" id="dropdown">
                <option value="value1">Rainy</option>
                <option value="value1">Sunny</option>
                <option value="value1">Clear</option>
            </select>
        </div>
      </div>
      {weatherData &&
        <div className="card">
          {weatherData.weather ? weatherData.weather[0].main === 'Clouds' ?  <img src={Pcloudy} className="weather-icon-1" alt="cloudy"/> : null : null}
          {weatherData.weather ? weatherData.weather[0].main === 'Rain' ?  <img src={Rainy} className="weather-icon-2" alt="Rainy"/> : null : null}
          {weatherData.weather ? weatherData.weather[0].main === 'Sunny' ?  <img src={Sunny} className="weather-icon-3" alt="Sunny"/> : null : null}

            <div className="info-card">
                <div className="name-temp">
                  <h4>{weatherData.name}</h4>
                  {weatherData.main ? <h5>{Math.round(weatherData.main.temp)}ºC</h5> : null}
                </div>
                {weatherData.wind ? <ul>windspeed : {Math.round(weatherData.wind.speed)}km/h</ul> : null}
              <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
              {weatherData.weather ? <ul>{weatherData?.weather[0].main}</ul> : null} 
            </div>
       </div>
      }
      <div className="cards">
          <Dar />
          <Arusha />
          <Njombe />
      </div>   
  </div>
  )
}

export default App
