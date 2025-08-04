import React from 'react';
import { useEffect,useState,useRef } from 'react';
import "./Weather.css";
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import feels_like from '../assets/feels_like.png';
const Weather = () => {

  const inputRef=useRef()

  const [weatherdata,setWeatherdata]=useState(false);

  const allicons={
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
        
  }
  // when ever we call the search button we call the city 
  const search=async(city)=>{
    if(city === ""){
      alert("Enter the city name")
      return;
    }
    try {
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
      const response= await fetch(url);
      // here we fetch the data from the url 
      const data=await response.json();
      // we convert the response to jason method 
      // now we get the Weather data from the api to the word data  
      console.log(data)
      const icon =allicons[data.weather[0].icon] || clear_icon;
      setWeatherdata({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:data.main.temp,
        location:data.name,
        feels_like:data.main.feels_like,
        icon:icon
      })

    } catch (error) {
      setWeatherdata(false)
      console.error("Error in  fetching weather data")
      
    }
  }
  // we need to call the search function whenever the componet gets loaded sowe use useeffect hook
  useEffect(()=>{
    search("alaska");

  },[])

  // usEffect(()=>{
  //   search("gudivada");

  // },[])e


  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type='text' placeholder='search here' onChange={(e) => setCity(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      search(inputRef.current.value);
    }
  }}/>
            <img onClick={()=>search(inputRef.current.value)} src={search_icon}  alt=''/>
            {/* <button className='search-btn'>Search</button> */}
        </div>
        <img src={weatherdata.icon} className='weather-icon'/>
        <p className='temperature'>{weatherdata.temperature}°c</p>
        <p className='location'>{weatherdata.location}</p>
        <div className='weather-data'>
          <div className='col'>
            <img src={humidity_icon}/>
            <div>
              <p>{weatherdata.humidity} %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className='col'>
            <img src={wind_icon}/>
            <div>
              <p>{weatherdata.windSpeed} Km/h</p>
              <span>wind Speed</span>
            </div>
          </div>
          {/* added feels like from the Api's */}
          <div className='col'>
            <img src={feels_like}/>
            <div>
              <p>{weatherdata.feels_like} °C </p>
              <span>Feels Like</span>
            </div>
          </div>
          {/* <div className='col'>
            <img src={cloud_icon}/>
            <div>
              <p>mild</p>
              <span> cloud </span>
            </div>
          </div> */}
        </div>
    </div>
  )
}

export default Weather