import React from "react"
import { IMovie } from "../../models/movie";
import './styles.css'

const MovieCard: React.FunctionComponent<IMovie> = (movie: IMovie) => {
    //console.log(movie)
    
    return (
        <div className="movie-card">
            <a href={`https://www.imdb.com/title/${movie.imdbID}/?ref_=nv_sr_srsg_0`}>
                <img src={movie.Poster} alt={movie.Title}/>
            </a>
                <p className="movie-title">{movie.Title}</p>
        </div>
        
        )
    
    
};

export default MovieCard;
