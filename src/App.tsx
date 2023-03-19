import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./app/components/Navbar/Navbar";
import AboutPage from "./app/pages/About/About";
import HomePage from "./app/pages/Home/Home";

const App: React.FunctionComponent = () => {
    return (
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
    )
};

export default App;
