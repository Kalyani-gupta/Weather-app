import React from 'react';
import WeatherIcon from './WeatherIcon';


function CurrentWeather({weather}) {
    return (
        <div className="container">
            <div className="location">
                {weather.name}    
            </div>
            <div className="temp-info">
                <WeatherIcon icon = {weather.icon}/>
                <span className="description">
                    {weather.main}
                </span>
            </div>
            <div className="aligned">
                <span className="temp"><h3>{weather.temp}°C</h3></span>
                <div className="aligned-text">
                    <div className="temp-description">{weather.description}</div>
                    <div>Real Feel {weather.feels_like}°C</div>
                </div>
            </div>  
        </div>
    )
}



export default CurrentWeather;