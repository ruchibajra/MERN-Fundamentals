import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import LifecycleComponent from "./components/LifecycleComponent/LifecycleComponent";
import ProductComponent from "./components/Product/ProductComponent";
import ToDoApp from "./components/ToDo/ToDoApp";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import ContactForm from "./components/ContactForm/ContactForm";
import MultipleStepForm from "./components/MultipleStepForm/MultipleStepForm";
import MultipleForm2 from "./components/EventRegistrationForm/MultipleForm2";
import ShopComponent from "./components/Shop/ShopComponent";

function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<MultipleForm2/>}> </Route>
            <Route path="/about" element={<ShopComponent />} />
            <Route path="/shop" element={<LifecycleComponent />} />
            <Route path="/product" element={<ProductComponent />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/signup" element={<Registration/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/event" element={<MultipleStepForm/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
