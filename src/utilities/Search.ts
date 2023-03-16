import { useState } from "react";
import { WeatherData } from "../types";
import axios from "axios";

function Search() {

    //state variables
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
    //updates the city state variable 
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
}

export default Search
