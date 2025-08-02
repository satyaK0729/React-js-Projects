import React from 'react';
import "./Weather.css";
import search_icon from '../assets/search.png';
const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input  type='text' placeholder='search here'/>
            <img src={search_icon}  alt=''/>
            {/* <button className='search-btn'>Search</button> */}
        </div>
        
    </div>
  )
}

export default Weather