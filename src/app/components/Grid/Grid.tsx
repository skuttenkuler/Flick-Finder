import React from "react"

import { IMovie } from "../../models/movie";
import MovieCard from "../MovieCard/MovieCard";



const Grid: React.FunctionComponent<any> = (data: any) => {
    //map through returned data and pass to Movie Card
    //console.log(data)
    return (
        <div>
            {data.data.map((movie: IMovie) => {
                return <MovieCard key={movie.imdbID} {...movie}/>    
            }
            )}
        </div>
        )
};

export default Grid;
