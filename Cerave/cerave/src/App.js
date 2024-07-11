import "./App.css";
import AboutComponent from "./components/About/AboutComponent";
import HomeComponent from "./components/Home/HomeComponent";
import Navbar from "./components/Navbar/navbar";
// import GreetComponent from "./components/props/greetComponent";
// import GreetRamComponent from "./components/props/greetRamComponent";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
