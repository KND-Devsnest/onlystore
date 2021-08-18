import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { changeQuantity, removeCartItem } from "../store/slices/cartSlice";
import AddIcon from "@material-ui/icons/Add";

import RemoveIcon from "@material-ui/icons/Remove";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentUser = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();
  return (
    <div className="cart">
      {cartItems.map((el, index) => (
        <div className="cart-card" key={index}>
          {el.product}
          <button
            onClick={() => {
              dispatch(
                removeCartItem({
                  currentUser: currentUser,
                  data: { id: el.id },
                })
              );
            }}
          >
            Delete
          </button>
          <AddIcon
            onClick={() =>
              dispatch(
                changeQuantity({
                  currentUser: currentUser,
                  data: { id: el.id, quantity: el.quantity + 1 },
                })
              )
            }
          ></AddIcon>
          <input value={el.quantity}></input>
          <RemoveIcon
            onClick={() =>
              dispatch(
                changeQuantity({
                  currentUser: currentUser,
                  data: { id: el.id, quantity: el.quantity - 1 },
                })
              )
            }
          ></RemoveIcon>
        </div>
      ))}
    </div>
  );
};

export default Cart;
