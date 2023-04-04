import moment from 'moment';
import clearSky from '../assets/01d.svg';
import fewClouds from '../assets/02d.svg';
//import scatteredClouds from '../assets/03d.svg';
//import brokenClouds from '../assets/04d.svg';
import showerRain from '../assets/09d.svg';
import rain from '../assets/10d.svg';
import thunderstorm from '../assets/11d.svg';
import snow from '../assets/13d.svg';
import mist from ' ../assets/50d.svg'

import { WeatherData } from "../types";

const Card: React.FC<WeatherData> = ({ weather, main, wind, name }) => {
  // TODO: learn better way to fetch data for city without each component having to fetch data individually
  return (
    <div className="card">
      {weather ? weather[0].main === 'Clear' ?  <img src={clearSky} className="weather-icon-1"/> : null : null}
      {weather ? weather[0].main === 'Rain' ?  <img src={rain} className="weather-icon-2"/> : null : null}
      {weather ? weather[0].main === 'Clouds' ?  <img src={fewClouds} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Mist' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Smoke' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Haze' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Dust' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Fog' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Sand' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Ash' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Squall' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Tornado' ?  <img src={mist} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Snow' ?  <img src={snow} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Thunderstorm' ?  <img src={thunderstorm} className="weather-icon-3" /> : null : null}
      {weather ? weather[0].main === 'Drizzle' ?  <img src={showerRain} className="weather-icon-3" /> : null : null}
      
            <div className="info-card">
                <div className="name-temp">
                  <h4>{name}</h4>
                  {main ? <h5>{Math.round(main.temp)}ºC</h5> : null}
                </div>
                {wind ? <ul>windspeed : {Math.round(wind.speed)}km/h</ul> : null}
                <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
                {weather ? <ul>{weather[0].main}</ul> : null} 
            </div>
    </div>
  )
}

export default Card