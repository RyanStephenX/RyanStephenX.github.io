import React from "react";
import Checkout from "./checkOut";

export const CheckoutFrame = (props) => {
  return (
    <>
      <iframe
        title="External Content"
        src={props.Checkout} // Replace with your URL
        width="800"
        height="600"
      ></iframe>
    </>
  );
};
