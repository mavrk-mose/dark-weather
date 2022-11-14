import React from 'react'
import moment, { HTML5_FMT } from 'moment';

function Njombe() {
  return (
    <div className="card">
          <img src={pcloudy} className="weather-icon-1" alt="pcloudy"/>
            <div className="info-card">
              <div className="name-temp">
              <h4>{data.main}</h4>
              <h4>{data.icon}</h4>
             {data.main ? <h5>{Math.round(data.main.temp)}ºC</h5> : null}
              </div>
              {data.wind ? <ul>windspeed : {Math.round(data.wind.speed)}km/h</ul> : null}
              <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
              {data.weather ? <ul>{data.weather[0].main}</ul> : null} 
            </div>
            </div>
        </div>
  )
}

export default Njombe