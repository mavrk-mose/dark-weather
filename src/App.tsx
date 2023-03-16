import Dar from "./components/Dar";
import Njombe from "./components/Njombe";
import Arusha from "./components/Arusha";
import axios from "axios";
import { useState } from "react";
import { WeatherData } from "./types";
import { List } from "immutable";
import Card from "./components/Card";
import './index.css';

function App() {

  //state variables
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<WeatherData[]>();
  const loading = results?.length === 0;

  //updates the city state variable 
  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }
  
  //fetches weather data then sets it to the weather object
  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      try {
        const changeEvent = new Event ( 'change', {bubbles:true})
        Object.defineProperty(changeEvent, 'target', { value: event.target });
        handleSearchInputChange(changeEvent as unknown as React.ChangeEvent<HTMLInputElement>);
        const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93de778a8de80994ecaaee49126e92e9&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    }   
  };

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

// TODO: look for animated weather icons, have 10 variants

// TODO: show loading state while searching, ideally an animated laoding icon

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
              onKeyDown={handleSearch}
              maxLength={20}
              placeholder='Search Here' />
            <ul>

            </ul>
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

        {loading && <div>loading ...</div>}

        {!loading && (
          results?.map((result) => (
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
        )))}
      </div>

        {!loading && (
          <div className="cards">
            <Dar />
            <Arusha />
            <Njombe />
          </div>
        )}
    </>    
  )
}

export default App
