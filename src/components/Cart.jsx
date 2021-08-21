import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  changeQuantity,
  removeCartItem,
  toggleVisible,
} from "../store/slices/cartSlice";
import AddIcon from "@material-ui/icons/Add";
import {
  Drawer,
  Paper,
  Card,
  Container,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import Login from "../pages/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cardContainer: {
    padding: theme.spacing(4, 2),
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
  },
}));

const Cart = () => {
  const classes = useStyles();
  const { isVisible, cartItems, currentUser } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  return (
    <Drawer
      anchor="right"
      open={isVisible}
      onClose={() => dispatch(toggleVisible())}
      className={classes.root}
    >
      <Container maxWidth="sm" className={classes.root}>
        {currentUser ? (
          <Grid container xs={12} className={classes.cardContainer}>
            {Object.keys(cartItems).length
              ? Object.keys(cartItems).map((el, index) => (
                  <Grid item xs={12} key={index}>
                    <Card variant="outlined" className={classes.card}>
                      <img
                        style={{ width: "20vmin" }}
                        src={cartItems[el].imageUrl}
                        alt={cartItems[el].title}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          dispatch(removeCartItem(cartItems[el]));
                        }}
                      >
                        Delete
                      </Button>
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
                          if (temp > 1) {
                            temp -= 1;
                            dispatch(
                              changeQuantity({
                                id: cartItems[el].id,
                                quantity: temp,
                              })
                            );
                          }
                        }}
                      ></RemoveIcon>
                    </Card>
                  </Grid>
                ))
              : "Cart is Empty"}
          </Grid>
        ) : (
          <Grid container xs={12}>
            <Login redirect={false} />
          </Grid>
        )}
      </Container>
    </Drawer>
  );
};

export default Cart;
