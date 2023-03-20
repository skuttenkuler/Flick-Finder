import React,{useEffect, useState} from "react"
import { getAxiosData } from "../../api";
import { IMovie } from "../../models/movie"
import './styles.css'
import CarouselComp from '../../components/Carousel/Carousel'
const HomePage: React.FunctionComponent = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [input, setInput] = useState("")
    
    const handleMovieSearch = () => {
        //console.log(input)
        getAxiosData(input)
        .then(res=> {
            if(res.Error){
                window.alert("No movie by that name, please try again!")
            }else{
            setMovies(res["Search"])
            }
        })
        .catch(err => console.log(err))
    }

    //fetch on page load 
    useEffect(() => {
        getAxiosData("Star Wars")
        .then(res=> {
            //console.log(res["Search"])
            setMovies(res["Search"])
        })
    }, [])

    return (
        <div className="layout home">
            <div className="banner">
                <h1>FLICK FINDER</h1>
                <p>Find the movie that you've been searching for!</p>
            {/* searchbox */}
            <div className="input_wrapper">
                <input  type="text" 
                        placeholder="Search Movie"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}/>
                <button disabled={!input} onClick={handleMovieSearch}>Search</button>
            </div>
            </div>
            <CarouselComp data={movies}/>
        </div>
    )
};

export default HomePage;
