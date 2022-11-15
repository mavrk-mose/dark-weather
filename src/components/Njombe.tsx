import { useState, useEffect } from 'react';
import moment, { HTML5_FMT } from 'moment';
import Pcloudy from '../assets/pcloudy.svg';
import Rainy from '../assets/Tshower.svg';
import Sunny from '../assets/sun.svg';
function Njombe() {
  const [data, setData] = useState<any>([]);

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
           <img src={Rainy} className="weather-icon-2" alt="pcloudy"/>
            <div className="info-card">
                <div className="name-temp">
                  <h4>{data.name}</h4>
                  {data.main ? <h5>{Math.round(data.main.temp)}ºC</h5> : null}
                </div>
                {data.wind ? <ul>windspeed : {Math.round(data.wind.speed)}km/h</ul> : null}
               <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
               {data.weather ? <ul>{data.weather[0].main}</ul> : null} 
            </div>
    </div>
  )
}

export default Njombe