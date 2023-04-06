import Dar from "./components/Dar";
import Njombe from "./components/Njombe";
import Arusha from "./components/Arusha";
import axios from "axios";
import { useState } from "react";
import { WeatherData } from "./types";
import Card from "./components/Card";
import loadingIcon from "./assets/loading.svg";
import './index.css';

function App() {

  //state variables
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<WeatherData[]>();
  const loading = results?.length === 0; //sets loading state if results array is empty

  //fetches list of cities  
  const searchCities = async (query: string) => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${query}&units=metric&appid=93de778a8de80994ecaaee49126e92e9`);
      setResults(response.data.list);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setQuery(value);
      searchCities(value);
  };

// TODO: Display not found to user in case server responds with 404

// TODO: show loading state while searching, ideally an animated loading icon

  return (
  <>
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
              value={query}
              onChange={handleInputChange}
              maxLength={20}
              placeholder='Search Here' />
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

        {loading && <img src={loadingIcon} className="weather-icon-2"/>}
       
        {!loading && (
          <div className="cards">
            <Dar/>
            <Arusha/>
            <Njombe/>
          </div>
        )}

        <div className={loading ? "hidden" : "cards"}>
          {results?.slice(0,2).map((result) => (
            <Card
              key={result.id}
              weather={result.weather}
              main={result.main}
              name={result.name}
              wind={result.wind}
              coord={result.coord}
              base={result.base}
              visibility={result.visibility}
              clouds={result.clouds}
              dt={result.dt}
              sys={result.sys}
              timezone={result.timezone}
              cod={result.cod}
              id={result.id} />
          ))}
        </div>
      </div>   
   </>    
  )
}

export default App
