import { useEffect, useState } from "react";
import pcloudy from './assets/pcloudy.svg';
import sunny from './assets/sun.svg';
import rainy from './assets/Tshower.svg';
import moment, { HTML5_FMT } from 'moment';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData =async function (){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Arusha&appid=93de778a8de80994ecaaee49126e92e9&units=metric`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    } 
    fetchData();
  }, []);

  return (
  <div className="container">
    <div className="app">
      <div className="navbar">
        <h2>Dark Weather</h2>
        <ul>
          <li>Home</li>
          <li>Download app</li>
          <li>Contact us</li>
        </ul>
        <button>Sign Up</button>
      </div>
      <div className="content">
        <h3>Seeing the weather of the whole world with Dark Weather!</h3>
      </div>
      <div className="filters">
        <div className="search-box">
            <input type="text" placeholder='Search Here'/>
        </div>
        <div className="filter-box">
            <p>Filters</p>
            <input type="text" placeholder='Coldest'/>
            <input type="text" placeholder='10ºC - 20ºC'/>
            <input type="text" placeholder='Rainy'/>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={pcloudy} className="weather-icon-1" alt="pcloudy" />
            <div className="info-card">
              <div className="name-temp">
              <h4>{data.name}</h4>
              {data.main ? <h5>{data.main.temp}ºC</h5> : null}
              </div>
              {data.wind ? <ul>windspeed : {data.wind.speed}km/h</ul> : null}
              <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
              {data.weather ? <ul>{data.weather[0].main}</ul> : null}
            </div>
        </div>
        <div className="card">
        <img src={sunny} className="weather-icon-2" alt="sunny" />
          <div className="info-card">
          <div className="name-temp">
              <h4>{data.name}</h4>
              {data.main ? <h5>{data.main.temp}ºC</h5> : null}
              </div>
              {data.wind ? <ul>windspeed : {data.wind.speed}km/h</ul> : null}
              <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
              {data.weather ? <ul>{data.weather[0].main}</ul> : null}     
          </div>
        </div>
        <div className="card">
        <img src={rainy} className="weather-icon-3" alt="rainy" />
          <div className="info-card">
          <div className="name-temp">
              <h4>{data.name}</h4>
              {data.main ? <h5>{data.main.temp}ºC</h5> : null}
              </div>
              {data.wind ? <ul>windspeed : {data.wind.speed}km/h</ul> : null}
              <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
              {data.weather ? <ul>{data.weather[0].main}</ul> : null}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
