import "./App.css";
// import CounterParentComponent from "./componentHomework/CounterParentComponent";
// import DisplayParentComponent from "./componentHomework/DisplayParentComponent";
// import ParentComponent from "./componentHomework/ParentComponent";
import React, { useState } from "react";
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
import LifecycleComponent from "./components/LifecycleComponent/LifecycleComponent";
import ProductComponent from "./components/Product/ProductComponent";
import ToDoList from "./components/ToDo/ToDoList";
import ToDoApp from "./components/ToDo/ToDoApp";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  // const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<ToDoApp />} />
            <Route path="/shop" element={<LifecycleComponent />} />
            <Route path="/product" element={<ProductComponent />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/signup" element={<Registration/>} />
            <Route path="/login" element={<Login/>}/>
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
