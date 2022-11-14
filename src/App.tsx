import {useState, useEffect} from 'react';
import Dar from "./components/Dar";
import Njombe from "./components/Njombe";
import Arusha from "./components/Arusha";
import Pcloudy from '../assets/pcloudy.svg';
import Rainy from '../assets/Tshower.svg';
import Sunny from '../assets/sun.svg';

function App() {
  const [dataList, setDataList] = useState<any>([]);

//fetch data from openweather
useEffect(() => {
  const fetchData =async function (){
    await fetch(`https://api.openweathermap.org/data/2.5/group?id=161325,160263,151479&appid=93de778a8de80994ecaaee49126e92e9&units=metric`)
    .then(res => res.json())
    .then(result => {
      setDataList(result)
    });
  } 
  fetchData();
}, []);
console.log(dataList)
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
        <h3>Seeing the weather of the whole world with <em>Dark Weather!</em></h3>
      </div>
      <div className="filters">
        <div className="search-box">
            <input type="text" placeholder='Search Here'/>
        </div>
        <div className="filter-box">
            <p>Filters</p>
            <select className="dropdown" id="dropdown">
                <option value="value1">Coldest</option>
                <option value="value1">Humid</option>
                <option value="value1">Hottest</option>
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
          <Dar />
          <Arusha />
          <Njombe />
      </div>
  </div>
  )
}

export default App
