function MovieCard({movie}){
    function onFunctionCick(){
        // alert("Added to Favorite List")
        alert("Clicked")
    }
    return(
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFunctionCick}>❤︎</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <h3>{movie.release_date}</h3>
            </div>
        </div>
        </>
    );
}

// export function Favorites(){
//     return(
//         <>
//         <div>This is your favortie watching list </div>
//         </>
//     );
// }
export default MovieCard;

