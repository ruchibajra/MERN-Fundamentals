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
import CardComponent from "./components/Card/CardComponent";
import HomeComponent from "./components/Home/HomeComponent";
import RegisterIntegration from "./components/RegisterIntegration/RegisterIntegration";
import LoginIntegration from "./components/LoginIntegration/LoginIntegration";
import CategoryIntegration from "./components/CategoryIntegration/CategoryIntegration";
import AddProductComponent from "./components/AddProduct/AddProductComponent";

function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeComponent/>}> </Route>
            <Route path="/about" element={<ShopComponent />} />
            <Route path="/shop" element={<LifecycleComponent />} />
            <Route path="/product" element={<ProductComponent />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/signup" element={<RegisterIntegration/>} />
            <Route path="/login" element={<LoginIntegration/>}/>
            <Route path="/event" element={<MultipleStepForm/>}/>
            <Route path="/category" element={<CategoryIntegration/>}/>
            <Route path="/addProduct" element={<AddProductComponent/>}></Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
