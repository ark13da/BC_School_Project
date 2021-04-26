import React, { useState,useEffect} from 'react';
import axios from "axios";

const url = `https://api.openweathermap.org/data/2.5/weather?q=helsinki&&units=metric&appid=${process.env.REACT_APP_NOT_SECRET_CODE}`;


const Weather = () => {
    const [weather, setWeather] = useState({});
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        axios.get(url)
            .then(res => setWeather(res.data))
            .then(res => console.log(weather))
            //.then(res => setisLoading(false));
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default Weather;