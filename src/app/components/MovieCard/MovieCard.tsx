import React from "react"
import { Link } from "react-router-dom";
import { IMovie } from "../../models/movie";


const MovieCard: React.FunctionComponent<IMovie> = (movie: IMovie) => {
    //console.log(movie)
    return (
        <Link to={`https://www.imdb.com/title/${movie.imdbID}/?ref_=nv_sr_srsg_0`}>
            <img src={movie.Poster} alt={movie.Title}/>
            <p>{movie.Title}</p>
        </Link>
    )
};

export default MovieCard;
