import { useSelector } from "react-redux";
import React from "react";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart">
      {cartItems.map((el, index) => (
        <div className="cart-card" key={index}>
          {el.title}
        </div>
      ))}
    </div>
  );
};

export default Cart;
