import React from "react"
import Carousel from 'react-bootstrap/Carousel';

import { IMovie, Movies } from "../../models/movie";
import MovieCard from "../MovieCard/MovieCard";
import './style.css'
const CarouselComp: React.FunctionComponent<Movies | any> = (data: Movies) => {
    //map through returned data and pass to Movie Card
    //console.log(data)
    return (
        <Carousel>
           
                    {data.data.map((movie: IMovie) => {
                            //display only movies
                            if(movie.Type === "movie"){
                                return  <Carousel.Item>
                                            <MovieCard key={movie.imdbID} {...movie}/>
                                        </Carousel.Item>
                            }
                            
                            
                    }
                    )}
            
        </Carousel>
        )
};

export default CarouselComp;
