import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Application/navBar";
import Header from "./components/Application/header";
import Body from "./components/Application/body";
import { productDisplay } from "./components/Application/data/data";
import BodyCarousel from "./components/Application/bodyCarousel";
import {
  displayCarousel,
  responsive,
} from "./components/Application/data/item_display/displayCarousel";
import { Carousel } from "react-responsive-carousel";

function App(props) {
  // const carousel = displayCarousel.map((prod) => (
  //   <BodyCarousel key={prod.id} img1={prod.image} />
  // ));
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Body />
      </div>
    </>
  );
}
export default App;
