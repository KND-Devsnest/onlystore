import { Container } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/slices/cartSlice";
import { makeStyles } from "@material-ui/styles";
import { QuantityBox } from "../CartWishCard";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
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
      <QuantityBox
        id={elem.id}
        quantity={cartValue}
        changeQuantity={(id, quantity, action) => {
          switch (action) {
            case "add":
              setValue(cartValue + 1);
              break;
            case "subtract":
              setValue(cartValue - 1);
              break;
            default:
              break;
          }
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
