import React, { useEffect, useState } from 'react';
import { WeatherData } from "../types";
import '../index.css';
import Card from './Card';
import axios from 'axios';

interface Props {
  name:string
}

function City({name}:Props) {

  const [data, setData] = useState<WeatherData|null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=93de778a8de80994ecaaee49126e92e9&units=metric`)
        setData(response.data);
      } catch (e) {
        console.log(e)
      }finally {
        setLoading(false)
      }
    } 
    fetchData();
  }, [name]);

  if(!data){
    return loading;
  }
  return (
    <Card {...data}/>
  )
}

export default React.memo(City)