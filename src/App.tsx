import { useEffect, useState } from "react";
import pcloudy from './assets/pcloudy.svg';
import sunny from './assets/sun.svg';
import rainy from './assets/Tshower.svg';
import moment, { HTML5_FMT } from 'moment';

function App() {

  const [data, setData] = useState<any>('');
  const [data1, setData1] = useState<any>('');
  const [data2, setData2] = useState<any>('');

//fetch data for Dar Es Salaam
  useEffect(() => {
    const fetchData =async function (){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dar Es Salaam&appid=93de778a8de80994ecaaee49126e92e9&units=metric`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    } 
    fetchData();
  }, []);
//fetch data for Arusha
  useEffect(() => {
    const fetchData =async function (){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Arusha&appid=93de778a8de80994ecaaee49126e92e9&units=metric`)
      .then(res => res.json())
      .then(result => {
        setData1(result)
        console.log(result);
      });
    } 
    fetchData();
  }, []);
//fetch data for Njombe
  useEffect(() => {
    const fetchData =async function (){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Njombe&appid=93de778a8de80994ecaaee49126e92e9&units=metric`)
      .then(res => res.json())
      .then(result => {
        setData2(result)
        console.log(result);
      });
    } 
    fetchData();
  }, []);
  return (
  <div className="container">
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
            <select className="dropdown" id="dropdown">
                <option value="value1">Humid</option>
                <option value="value1">Hottest</option>
                <option value="value1">Coldest</option>
            </select>
            <select className="dropdown" id="dropdown">
                <option value="value1">10ºC-20ºC</option>
                <option value="value1">0ºC-10ºC</option>
                <option value="value1">20ºC-30ºC</option>
            </select>
            <select className="dropdown" id="dropdown">
                <option value="value1">Rainy</option>
                <option value="value1">Sunny</option>
                <option value="value1">Clear</option>
            </select>
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
              <h4>{data1.name}</h4>
              {data1.main ? <h5>{data1.main.temp}ºC</h5> : null}
              </div>
              {data1.wind ? <ul>windspeed : {data1.wind.speed}km/h</ul> : null}
              <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
              {data1.weather ? <ul>{data1.weather[0].main}</ul> : null}     
          </div>
        </div>
        <div className="card">
        <img src={rainy} className="weather-icon-3" alt="rainy" />
          <div className="info-card">
          <div className="name-temp">
              <h4>{data2.name}</h4>
              {data2.main ? <h5>{data2.main.temp}ºC</h5> : null}
              </div>
              {data2.wind ? <ul>windspeed : {data2.wind.speed}km/h</ul> : null}
              <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
              {data2.weather ? <ul>{data2.weather[0].main}</ul> : null}
          </div>
        </div>
      </div>
  </div>
  )
}

export default App
