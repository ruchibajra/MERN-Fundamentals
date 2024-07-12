import "./App.css";
// import CounterParentComponent from "./componentHomework/CounterParentComponent";
// import DisplayParentComponent from "./componentHomework/DisplayParentComponent";
// import ParentComponent from "./componentHomework/ParentComponent";
import React from "react";
import CardComponent from "./components/Card/CardComponent";
import AboutComponent from "./components/About/AboutComponent";
import HomeComponent from "./components/Home/HomeComponent";
import Navbar from "./components/Navbar/navbar";
// import GreetComponent from "./components/props/greetComponent";
// import GreetRamComponent from "./components/props/greetRamComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopComponent from "./components/Home/ShopComponent";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/shop" element={<ShopComponent />} />

            

          </Routes>
        </div>
      </Router>
    </>
    // <>
    //   {/* <ParentComponent/>
    //   <CounterParentComponent/>
    //   <DisplayParentComponent/> */}
       
    // </>
  );
}

export default App;
