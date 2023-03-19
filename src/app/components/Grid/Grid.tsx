import React from "react"

import { IMovie, Movies } from "../../models/movie";
import MovieCard from "../MovieCard/MovieCard";



const Grid: React.FunctionComponent<any> = (data: any) => {
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
