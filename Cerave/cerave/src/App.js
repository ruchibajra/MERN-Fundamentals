import "./App.css";
// import CounterParentComponent from "./componentHomework/CounterParentComponent";
// import DisplayParentComponent from "./componentHomework/DisplayParentComponent";
// import ParentComponent from "./componentHomework/ParentComponent";
import React, {useState} from "react";
import CardComponent from "./components/Card/CardComponent";
import AboutComponent from "./components/About/AboutComponent";
import HomeComponent from "./components/Home/HomeComponent";
import Navbar from "./components/Navbar/navbar";
// import GreetComponent from "./components/props/greetComponent";
// import GreetRamComponent from "./components/props/greetRamComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopComponent from "./components/Shop/ShopComponent";
import TestFunctionalProps from "./components/Card/TestFunctionalProps";
import FunctionalProps from "./components/FunctionalProps/FunctionalProps";
import AComponent from "./PropDrilling/AComponent";
import ListView from "./ListView/ListViewComponent";

function App() {
  // const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);


  return (
    <>
      <Router>
        <div>
          <Navbar />
          <FunctionalProps />
          <AComponent/>
          {/* <ListView items={items} /> */}
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            {/* <Route path="/shop" element={<ShopComponent />} /> */}
            {/* <Route path="/shop" element={<TestFunctionalProps />} /> */}
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
