import React from "react";
import "./css/checkOut.module.css";

function Checkout() {
  return (
    <>
      <div className="delivery-container">
        <h1>Checkout</h1>
        <div className="deliver-option">
          <ol>
            <li className="payment-method">COD</li>
            <li className="payment-method">CREDIT CARD</li>
            <li className="payment-method">GCASH</li>
          </ol>
        </div>
      </div>
      <div className="bag-container">
        <div className="your-bag">
          <h2>BAG</h2>
          <a href="">edit</a>
        </div>
        <div className="description">
          <p1>Subtotal:</p1>
          <p2>Estimaded Shipping:</p2>
          <p3>Shipping Fee:</p3>
          <h3>TOTAL:</h3>
        </div>
        <div className="arrival">
          <img src="" alt="" />
          <h4 className="product-name"></h4>
          <li>Style:</li>
          <li>Size:</li>
          <li>Color:</li>
          <li>Qty:</li>
          <li>Price:</li>
        </div>
      </div>
    </>
  );
}

export default Checkout;
