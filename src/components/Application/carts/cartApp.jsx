import React, { useEffect, useState } from "react";
import Cart from "./shoppingCart";
import { cartItem } from "../data/cart_Item/cart_Item";
import MyCart from "./cartHeader";
import CartCheckout from "./checkout";

function cartApp(props) {
  return (
    <>
      <div>
        <MyCart />
        <Cart />
      </div>
    </>
  );
}

export default cartApp;
