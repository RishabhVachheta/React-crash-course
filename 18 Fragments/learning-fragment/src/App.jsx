import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./Components/Fooditems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
        // let foodItems = [];
  let foodItems = ["Dal","Green Vegetable","Roti","Salad","milk","ghee"]
  return (
    <>
      <h1>Healthy Food</h1>
      <Fooditems items = {foodItems}></Fooditems>
      <ErrorMessage items = {foodItems}></ErrorMessage>
    </>
  );
}

export default App;
