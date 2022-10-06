import pcloudy from './assets/pcloudy.svg';
import sunny from './assets/sun.svg';
import rainy from './assets/Tshower.svg';
import logo from './assets/logo.svg'

//const url = 'https://api.openweathermap.org/data/3.0/onecall?q={city name}&appid=93de778a8de80994ecaaee49126e92e9';
function App() {

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
        <button>Sign up</button>
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
              <h4>Dar Es Salaam 35ºC</h4>
              <ul>windspeed : 11km</ul>
              <ul>Tuesday : 19:52</ul>
              <ul>Cloudy</ul>
            </div>
        </div>
        <div className="card">
        <img src={sunny} className="weather-icon-2" alt="sunny" />
          <div className="info-card">
              <h4>Arusha 14ºC</h4>
              <ul>windspeed : 5km</ul>
              <ul>Tuesday : 19:52</ul>
              <ul>Sunny</ul>
          </div>
        </div>
        <div className="card">
        <img src={rainy} className="weather-icon-3" alt="rainy" />
          <div className="info-card">
              <h4>Njombe 11ºC</h4>
              <ul>windspeed : 23km</ul>
              <ul>Tuesday : 19:52</ul>
              <ul>Rainy</ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
