import { useEffect, useState } from 'react';
import moment from 'moment';
import clearSky from '../assets/01d.svg';
import fewClouds from '../assets/02d.svg';
//import scatteredClouds from '../assets/03d.svg';
//import brokenClouds from '../assets/04d.svg';
import showerRain from '../assets/09d.svg';
import rain from '../assets/10d.svg';
import thunderstorm from '../assets/11d.svg';
import snow from '../assets/13d.svg';
import mist from '../assets/50d.svg';
import { WeatherData } from "../types";
import '../index.css';

function Njombe() {

  const [data, setData] = useState<WeatherData>();

//  TODO: remove repetitive code with props

//fetch data from openweather
useEffect(() => {
  const fetchData =async function (){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Njombe&appid=93de778a8de80994ecaaee49126e92e9&units=metric`)
    .then(res => res.json())
    .then(result => {
      setData(result)
    });
  } 
  fetchData();
}, []);

  return (
    <div className="card">
          {data?.weather ? data?.weather[0].main === 'Clear' ?  <img src={clearSky} className="weather-icon-1" alt="cloudy"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Rain' ?  <img src={rain} className="weather-icon-2" alt="Rainy"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Clouds' ?  <img src={fewClouds} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Mist' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Smoke' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Haze' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Dust' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Fog' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Sand' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Ash' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Squall' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Tornado' ?  <img src={mist} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Snow' ?  <img src={snow} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Thunderstorm' ?  <img src={thunderstorm} className="weather-icon-3" alt="Sunny"/> : null : null}
          {data?.weather ? data?.weather[0].main === 'Drizzle' ?  <img src={showerRain} className="weather-icon-3" alt="Sunny"/> : null : null}

            <div className="info-card">
                <div className="name-temp">
                  <h4>{data?.name}</h4>
                  {data?.main ? <h5>{Math.round(data?.main.temp)}ºC</h5> : null}
                </div>
                {data?.wind ? <ul>windspeed : {Math.round(data?.wind.speed)}km/h</ul> : null}
               <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
               {data?.weather ? <ul>{data?.weather[0].main}</ul> : null} 
            </div>
    </div>
  )
}

export default Njombe