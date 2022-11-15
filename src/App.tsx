import Dar from "./components/Dar";
import Njombe from "./components/Njombe";
import Arusha from "./components/Arusha";

function App() {
  
  return (
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
            <input type="text" maxLength={20} placeholder='Search Here'/>
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
      <div className="cards">
          <Dar />
          <Arusha />
          <Njombe />
      </div>
  </div>
  )
}

export default App
