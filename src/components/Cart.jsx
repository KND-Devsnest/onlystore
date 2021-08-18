import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  changeQuantity,
  removeCartItem,
  toggleVisible,
} from "../store/slices/cartSlice";
import AddIcon from "@material-ui/icons/Add";
import { Drawer, Paper, Card } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();
  return (
    <Drawer
      anchor="right"
      open={isVisible}
      onClose={() => dispatch(toggleVisible())}
    >
      {cartItems
        ? Object.keys(cartItems).map((el, index) => (
            <Card key={index}>
              <img src={cartItems[el].imageUrl} alt={cartItems[el].title} />
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
                    changeQuantity({
                      id: cartItems[el].id,
                      quantity: temp + 1,
                    })
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
            </Card>
          ))
        : ""}
    </Drawer>
  );
};

export default Cart;
