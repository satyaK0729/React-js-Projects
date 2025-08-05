import React, { useState } from 'react'
import MovieCard from '../components/MovieCard';

function Home() {
    const [searchQuery,setSearchQuery]=useState("");
    const movies=[
        {id:1,title:"Salaar", release_date:"2023"},
        {id:2,title:"F1", release_date:"2025"},
        {id:3,title:"Avatar", release_date:"2022"},
        {id:4,title:"Oppenheimer", release_date:"2023"},
        {id:5,title:"Dune ", release_date:"2021"},
        {id:6,title:"Dune 2", release_date:"2023"},
        {id:7,title:"Fight Club", release_date:"1999"},
    ];
    const handleSearch=()=>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");

    };

return (    
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input 
                type='text' 
                placeholder='What Movie you want?' 
                className='search-input'
                value={searchQuery} 
                onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button type='submit' className='search-button'>search</button>   

            {/* <input type='text' placeholder='what you want to search' className='serach-input' value={searchQuery} onChange={(e)=>searchQuery(e.target.value)}/> */}
        </form>
        <div className='movies-grid'>
            {movies.map((movie)=>(
                // movie.title.toLowerCase().startsWith(searchQuery) && 
                <MovieCard movie={movie } key={movie.id}/>
            ))}

        </div>
    </div>
  )
}
export default Home;
