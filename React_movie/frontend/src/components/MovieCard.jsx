import React, { useState } from "react";
import "./MovieCard.css"; // create a CSS file for styling

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
    alert(isFavorite ? "Removed from Favorites" : "Added to Favorites");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.url || "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${isFavorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
          >
            ❤︎
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-date">{movie.release_date}</p>
        {movie.rating && <p className="movie-rating">⭐ {movie.rating}</p>}
        {movie.genre && <p className="movie-genre">{movie.genre}</p>}
      </div>
    </div>
  );
}

export default MovieCard;



// function MovieCard({movie}){
//     function onFunctionCick(){
//         // alert("Added to Favorite List")
//         alert("Clicked")
//     }
//     return(
//         <>
//         <div className="movie-card">
//             <div className="movie-poster">
//                 <img src={movie.url} alt={movie.title}/>
//                 <div className="movie-overlay">
//                     <button className="favorite-btn" onClick={onFunctionCick}>❤︎</button>
//                 </div>
//             </div>
//             <div className="movie-info">
//                 <h3>{movie.title}</h3>
//                 <h3>{movie.release_date}</h3>
//             </div>
//         </div>
//         </>
//     );
// }

// // export function Favorites(){
// //     return(
// //         <>
// //         <div>This is your favortie watching list </div>
// //         </>
// //     );
// // }
// export default MovieCard;

