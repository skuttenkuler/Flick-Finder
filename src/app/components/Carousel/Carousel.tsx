import React from "react"
import Carousel from 'react-bootstrap/Carousel';

import { IMovie, Movies } from "../../models/movie";
import MovieCard from "../MovieCard/MovieCard";


const CarouselComp: React.FunctionComponent<Movies | any> = (data: Movies) => {
    //map through returned data and pass to Movie Card
    //console.log(data)
    return (
        <Carousel>
            <Carousel.Item>
                
                    {data.data.map((movie: IMovie) => {
                            //console.log(movie)
                            return <MovieCard key={movie.imdbID} {...movie}/>
                    }
                    )}
            </Carousel.Item>
        </Carousel>
        )
};

export default CarouselComp;
