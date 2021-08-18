import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { changeQuantity, removeCartItem } from "../store/slices/cartSlice";
import AddIcon from "@material-ui/icons/Add";

import RemoveIcon from "@material-ui/icons/Remove";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  return (
    <div className="cart">
      {cartItems
        ? Object.keys(cartItems).map((el, index) => (
            <div className="cart-card" key={index}>
              {el.product}
              <button
                onClick={() => {
                  dispatch(removeCartItem(cartItems[el]));
                }}
              >
                Delete
              </button>
              <AddIcon
                onClick={() => {
                  let temp = cartItems[el].quantity;
                  dispatch(
                    changeQuantity({ id: cartItems[el].id, quantity: temp + 1 })
                  );
                }}
              ></AddIcon>
              <input value={cartItems[el].quantity}></input>
              <RemoveIcon
                onClick={() => {
                  let temp = cartItems[el].quantity;
                  temp -= 1;
                  dispatch(
                    changeQuantity({ id: cartItems[el].id, quantity: temp })
                  );
                }}
              ></RemoveIcon>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Cart;
