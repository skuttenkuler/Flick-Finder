import React,{useEffect, useState} from "react"
import { getAxiosData } from "../../api";
import { Movies } from "../../models/movie"
import Grid from "../../components/Grid/Grid";
import './styles.css'

const HomePage: React.FunctionComponent = () => {
    const [movies, setMovies] = useState<Movies>([])
    const [input, setInput] = useState("John Wick")
    
    const handleMovieSearch = () => {
        console.log(input)
        getAxiosData(input)
        .then(movieData=> {
            setMovies(movieData["Search"]  || "No movie by that title.")
        })
    }

    //fetch on page load 
    useEffect(() => {
        getAxiosData(input)
        .then(movieData=> {
            setMovies(movieData["Search"])
        })
    }, [])

    return (
        <div className="layout home">
            {/* searchbox */}
            <div className="input_wrapper">
                <input  type="text" 
                        placeholder="Search Movie"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}/>
                <button disabled={!input} onClick={handleMovieSearch}>Search</button>
            </div>
            <Grid data={movies}/>
        </div>
    )
};

export default HomePage;
