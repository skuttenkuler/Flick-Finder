import React,{useEffect, useState} from "react"
import Searchbar from "../../components/Searchbar/Searchbar";
import { getAxiosData } from "../../api";
import { Movies } from "../../models/movie"
import Grid from "../../components/Grid/Grid";


const HomePage: React.FunctionComponent = () => {
    const [movies, setMovies] = useState<Movies>([])
    //fetch on page load 
    useEffect(() => {
        getAxiosData("John Wick")
        .then(movieData=> {
            setMovies(movieData["Search"]  || "No movie by that title.")
        })
    }, [])
    return (
        <div>
            <Searchbar/>
            <Grid data={movies}/>
        </div>
    )
};

export default HomePage;
