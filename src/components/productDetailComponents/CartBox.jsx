import { Container } from "@material-ui/core";
import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/slices/cartSlice";
import { checkIfValidCartValue } from "../../utils/checkIfValidCartValue";
const CartBox = () => {
  const [cartValue, setValue] = useState(1);
  const elem = useSelector((state) => state.products.currentProduct);
  const dispatch = useDispatch();
  return (
    <Container>
      <TextField
        id="outlined-basic"
        value={cartValue}
        variant="outlined"
        onChange={(e) => {
          setValue(checkIfValidCartValue(elem.inStock, e.target.value));
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(
            addCartItem({
              ...elem,
              imageUrl: elem.imgs[0],
              quantity: cartValue,
            })
          );
        }}
      >
        Add to Cart
      </Button>
    </Container>
  );
};

export default CartBox;
