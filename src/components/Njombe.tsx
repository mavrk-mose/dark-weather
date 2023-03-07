import { useEffect, useState } from 'react';
import moment from 'moment';
import Pcloudy from '../assets/pcloudy.svg';
import Rainy from '../assets/Tshower.svg';
import Sunny from '../assets/sun.svg';
import { WeatherData } from "../types";
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
          {data?.weather ? data.weather[0].main === 'Clouds' ?  <img src={Pcloudy} className="weather-icon-1" alt="cloudy"/> : null : null}
          {data?.weather ? data.weather[0].main === 'Rain' ?  <img src={Rainy} className="weather-icon-2" alt="Rainy"/> : null : null}
          {data?.weather ? data.weather[0].main === 'Sunny' ?  <img src={Sunny} className="weather-icon-3" alt="Sunny"/> : null : null}

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