import React, { useEffect, useState } from "react";
import "./css/shoppingCart.css";
import { cartItem } from "../data/cart_Item/cart_Item";

function CartCheckout(props) {
  const [isSlid, setIsSlid] = useState(false);

  const slideComponent = () => {
    setIsSlid(!isSlid);
  };
  return (
    <>
      <form className="checkout-form">
        <div className="container">
          <div className="item-container">
            <div className="item-total">
              <h6>Items: {props.quantity}</h6>
            </div>
            <div className="horizontal-line2">
              <hr className="custom-line"></hr>
            </div>
            <div className="payment-method">PAYMENT METHOD</div>
            <div className="listofpayment">
              <li className="payment">CREDIT CARD</li>
              <li className="payment">GCASH</li>
              <li className="payment">PAYPAL</li>
              <li className="payment">COD</li>
            </div>
            <div className="payment-content"></div>
            <div className="horizontal-line2">
              <hr className="custom-line"></hr>
            </div>
            <div className="checkout">
              <p>Total: {props.totalPrice}</p>
              <button className="button-3">Checkout</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CartCheckout;
