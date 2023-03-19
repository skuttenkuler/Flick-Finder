import React, {useState} from "react"
import { getAxiosData } from "../../api";



const Searchbar: React.FunctionComponent = () => {
    // handle user input
    const [input, setInput] = useState('');
    const handleMovieSearch = () => {
        getAxiosData(input)
    }

    return (
        <div className="input_wrapper">
            <input  type="text" 
                    placeholder="Search Movie"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
            <button disabled={!input} onClick={handleMovieSearch}>Search</button>
        </div>
    )
};

export default Searchbar;
