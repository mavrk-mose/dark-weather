
import './App.css'

function App() {
  
  return (
    <div className="home">
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
                    <p>filters</p>
            <input type="text" placeholder='Coldest'/>
            <input type="text" placeholder='10ºC - 20ºC'/>
            <input type="text" placeholder='Rainy'/>
        </div>
      </div>
      <div className="cards">
        <div className="card">
            <div className="container">
              <p>Dar Es Salaam 35ºC</p>
              <ul>windspeed</ul>
              <ul>Tuesday : 19:52</ul>
              <ul>Cloudy</ul>
            </div>
        </div>
        <div className="card">
          <div className="container">
              <p>Arusha 14ºC</p>
              <ul>windspeed</ul>
              <ul>Tuesday : 19:52</ul>
              <ul>Cloudy</ul>
          </div>
        </div>
        <div className="card">
          <div className="container">
              <p>Njombe 11ºC</p>
              <ul>windspeed</ul>
              <ul>Tuesday : 19:52</ul>
              <ul>Cloudy</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
