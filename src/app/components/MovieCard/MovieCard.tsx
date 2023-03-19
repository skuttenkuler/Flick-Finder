import React from "react"
import { IMovie } from "../../models/movie";


const MovieCard: React.FunctionComponent<IMovie> = (movie: IMovie) => {
    console.log(movie)
    return (
        <div>
            <img src={movie.Poster} alt={movie.Title}/>
            <p>{movie.Title}</p>
        </div>
    )
};

export default MovieCard;
