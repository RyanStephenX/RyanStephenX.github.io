import React, { useState } from "react";
import classes from "./css/bodyCarousel.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BodyCarousel(props) {
  return (
    <>
      <div className="card">
        <img className="product--image" src={props.img1} alt="product image" />
      </div>
    </>
  );
}

export default BodyCarousel;
