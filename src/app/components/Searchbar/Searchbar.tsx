import React, {useState} from "react"



const Searchbar: React.FunctionComponent = () => {
    // handle user input
    const [input, setInput] = useState('');
    const handleMovieSearch = () => {
        console.log(input)
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
