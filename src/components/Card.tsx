import React, {useMemo} from 'react';
import moment from 'moment';
import clearSky from '../assets/01d.svg';
import fewClouds from '../assets/02d.svg';
import showerRain from '../assets/09d.svg';
import rain from '../assets/10d.svg';
import thunderstorm from '../assets/11d.svg';
import snow from '../assets/13d.svg';
import mist from '../assets/50d.svg';

import { WeatherData } from "../types";

const SOURCES = new Map<string,any>();
SOURCES.set("Clear", clearSky);
SOURCES.set("Rain", rain);
SOURCES.set("Clouds", fewClouds);
SOURCES.set("Snow", snow)
SOURCES.set("Thunderstorm", thunderstorm)
SOURCES.set("Drizzle", showerRain)


const Card: React.FC<WeatherData> = ({ weather, main, wind, name }) => {

  const {src, className} = useMemo(()=>{
    if(!weather || weather.length === 0) return {src:null, className:""}

    const w = weather[0].main;
    const src = SOURCES.get(w);
    if(!src){
      return {src: mist, className:"weather-icon-3"}
    }
    return {src, className:"weather-icon-1"};
  },[weather])

  return (
    <div className="card">
      {
        src?  <img src={src} className={className}/>  : null
      }

      <div className="info-card">
        <div className="name-temp">
          <h4>{name}</h4>
          {main ? <h5>{Math.round(main.temp)}ºC</h5> : null}
        </div>
        {wind ? <ul>windspeed : {Math.round(wind.speed)}km/h</ul> : null}
        <ul>{moment().format('dddd')}: {moment().format('HH:mm')}</ul>
        {weather ? <ul>{weather[0].main}</ul> : null} 
      </div>
    </div>
  )
}

export default Card