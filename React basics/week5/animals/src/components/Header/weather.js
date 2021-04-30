import React, { useState, useEffect } from 'react';
import axios from "axios";

const url = `https://api.openweathermap.org/data/2.5/weather?q=helsinki&&units=metric&appid=${process.env.REACT_APP_NOT_SECRET_CODE}`;


const Weather = () => {
    const [weather, setWeather] = useState({});
    const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(true);
      
        axios.get(url)
            .then(res => setWeather(res.data))
            .then(res => setisLoading(false));
            
    /*const getData = async () => {
      const res = await axios.get(url);
      setWeather(res.data);
      setisLoading(false);
    }
    getData();*/
  }, []);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } 
    return (
      <>
        {
           <p>
            Temprature in {weather.name} is {weather.main.temp} degrees
          </p>
        }
      </>
    );
  
    
    
};

export default Weather;