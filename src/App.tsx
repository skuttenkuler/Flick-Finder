import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./app/components/Navbar/Navbar";
import AboutPage from "./app/pages/About/About";
import HomePage from "./app/pages/Home/Home";
import './App.css'
const App: React.FunctionComponent = () => {
    return (
      <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
      </div>
    )
};

export default App;
