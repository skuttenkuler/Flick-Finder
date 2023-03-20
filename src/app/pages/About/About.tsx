import React from "react"
import './styles.css'


const AboutPage: React.FunctionComponent = () => {
    return (
        <div className="about about_layout">
                 <header>ABOUT</header>
            <div className="about_banner">
                <p className="about-text">Flick Finder is a simple movie search application written in React utilizing Typescript. Have a movie on your mind? Use the search on the home page to find the movie you are looking for. Want more details about the film? The IMDB page is merely a click away!</p>
                <p className="about-link">Source Code can be found here: <a href="https://github.com/skuttenkuler/Flick-Finder">Github</a> </p>
            </div>
        </div>
    )
};

export default AboutPage;
