import moment from 'moment';
import Pcloudy from '../assets/pcloudy.svg';
import Rainy from '../assets/Tshower.svg';
import Sunny from '../assets/sun.svg';
import { WeatherData } from "../types";

const Card: React.FC<WeatherData> = ({ weather, main, wind, name }) => {
  // TODO: learn better way to fetch data for city without each component having to fetch data individually

  return (
    <div className="card">
      {weather ? weather[0].main === 'Clouds' ?  <img src={Pcloudy} className="weather-icon-1" alt="cloudy"/> : null : null}
      {weather ? weather[0].main === 'Rain' ?  <img src={Rainy} className="weather-icon-2" alt="Rainy"/> : null : null}
      {weather ? weather[0].main === 'Sunny' ?  <img src={Sunny} className="weather-icon-3" alt="Sunny"/> : null : null}

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