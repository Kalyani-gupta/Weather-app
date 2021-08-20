import React, { useEffect, useState } from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import apiKey from '../utils'
import CurrentWeather from './CurrentWeather';

function WeatherComponent() {
    let [currentWeather, setCurrentWeather] = useState({
		temp: '1',
		feels_like: '-1',
		description: 'snowing',
		icon: '50d',
		name: 'Jammu, India',
		lat: 32.72,
		lon: 74.85
	});
    let [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?lat=${currentWeather.lat}&lon=${currentWeather.lon}&appid=${apiKey}&units=metric`)

    useEffect(() => {
        const getWeather = async() => {
           
            let res = await fetch(url)
            res = await res.json()
            console.log(res)
            let {main, icon, description} = res.weather[0]
            let {temp, feels_like} = res.main
            setCurrentWeather({
                temp,
		        feels_like,
		        main,
		        icon,
                description,
		        name: `${res.name},${res.sys.country}`,
		        lat: res.coord.lat,
		        lon: res.coord.lon
            })
        } 
        getWeather() 
    },[url])

    
    return (
        <div>
            <h1 className="heading">Weather Outlook</h1>
            <div>
                <AlgoliaPlaces 
                placeholder ='Write an address here'
                onChange = {({suggestion}) => {
                    // console.log(suggestion.latlng.lat)
                    setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${suggestion.latlng.lat}&lon=${suggestion.latlng.lng}&appid=${apiKey}&units=metric`)}
                }// options = {{appId}}
                >
                </AlgoliaPlaces>
                
            </div>
            <div>
                <CurrentWeather weather = {currentWeather}/>
            </div>
        </div>
    )
}

export default WeatherComponent;