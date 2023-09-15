import React, { useState, useEffect } from "react";
import "./css/shoppingCart.css";
import { cartItem } from "../data/cart_Item/cart_Item";
import CartCheckout from "./checkout";

export default function Cart(props) {
  // Maintain a state for each item's quantity
  const [itemQuantities, setItemQuantities] = useState(
    cartItem.map((item) => ({ id: item.id, quantity: 1 }))
  );

  // Calculate the total quantity of all items
  const totalQuantity = itemQuantities.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate the total price based on item quantities
  const totalPrice = cartItem.reduce((total, currentItem) => {
    const item = itemQuantities.find((item) => item.id === currentItem.id);
    return total + currentItem.price * item.quantity;
  }, 0);

  const increment = (itemId) => {
    setItemQuantities((prevQuantities) =>
      prevQuantities.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (itemId) => {
    setItemQuantities((prevQuantities) =>
      prevQuantities.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <>
      {cartItem.map((item) => (
        <div className="container" key={item.id}>
          <div className="product-content">
            <div className="product-img">
              <img src={item.image} alt="" />
            </div>
            <div className="product-name">
              <h2>{item.product}</h2>
              <div className="product-description">
                <span>{item.price}</span>
                <span>{item.color}</span>
                <span>{item.size}</span>
              </div>
            </div>
            <div className="quantity">
              <div className="quan">
                <span className="hwmny">
                  {
                    itemQuantities.find((quant) => quant.id === item.id)
                      .quantity
                  }
                </span>
              </div>{" "}
              <button className="button-4" onClick={() => decrement(item.id)}>
                -
              </button>
              <button className="button-4" onClick={() => increment(item.id)}>
                +
              </button>
            </div>
            <button className="button-1">Delete</button>
          </div>
        </div>
      ))}
      {cartItem.map((item) => (
        <CartCheckout
          key={item.id}
          product={item.product}
          price={item.price}
          color={item.color}
          size={item.size}
          quantity={totalQuantity}
          totalPrice={totalPrice}
        />
      ))}
    </>
  );
}
