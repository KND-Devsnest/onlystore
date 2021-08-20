import { Container } from "@material-ui/core";
import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/slices/cartSlice";
import { checkIfValidCartValue } from "../../utils/checkIfValidCartValue";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginLeft: "1rem",
  },
}));
const CartBox = () => {
  const [cartValue, setValue] = useState(1);
  const elem = useSelector((state) => state.products.currentProduct);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Container className={classes.container}>
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
        className={classes.button}
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
