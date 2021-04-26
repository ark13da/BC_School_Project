import React, { useState,useEffect} from 'react';
import axios from "axios";

const url = `https://api.openweathermap.org/data/2.5/weather?q=helsinki&&units=metric&appid=${process.env.REACT_APP_NOT_SECRET_CODE}`;


const Weather = () => {
    const [weather, setWeather] = useState({});
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        axios.get(url)
            .then(res => setWeather(res.data))
            .then(res => setisLoading(false));
    }, []);
    
    return (
      <div>
        <p>
          Temprature in {weather.name && weather.name} is {weather.name && weather.main.temp} degrees
        </p>
      </div>
    );
};

export default Weather;