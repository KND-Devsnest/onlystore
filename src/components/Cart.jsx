import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  changeQuantity,
  hideDrawer,
  removeCartItem,
  toggleVisible,
} from "../store/slices/cartSlice";
import {
  Drawer,
  Paper,
  Container,
  makeStyles,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import Login from "../pages/Login";
import CartWishCard from "./CartWishCard";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: theme.spacing(40),
    minHeight: "100vh",
    background: theme.palette.background.default,
    display: "flex",
    alignItems: "flex-start",
  },
  mainContainer: {
    padding: theme.spacing(4, 0),
  },
  cardContainer: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
  },
  close: {
    backgroundColor: theme.palette.background.default,
  },
}));

const Cart = ({ isFromDrawer }) => {
  const classes = useStyles();
  const { isVisible, cartItems, currentUser } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleCartRemoveItem = (id) => {
    dispatch(removeCartItem({ id }));
  };
  const handleCartChangeQuantity = (id, quantity, op) => {
    if (op === "add") {
      dispatch(changeQuantity({ id: id, quantity: quantity + 1 }));
    } else if (op === "subtract") {
      dispatch(changeQuantity({ id: id, quantity: quantity - 1 }));
    }
  };

  const CartContent = () => {
    return (
      <Container maxWidth="sm" className={classes.root}>
        {currentUser ? (
          <Container className={classes.mainContainer}>
            {Object.keys(cartItems).length ? (
              <Paper elevation={2} className={classes.cardContainer}>
                {Object.keys(cartItems).map((el, index) => (
                  <CartWishCard
                    isCartItem={true}
                    key={index}
                    element={cartItems[el]}
                    removeItem={handleCartRemoveItem}
                    changeQuantity={handleCartChangeQuantity}
                  />
                ))}
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                >
                  <Link to="/placeorder" onClick={() => dispatch(hideDrawer())}>
                    <Button variant="contained" color="secondary">
                      Checkout
                    </Button>
                  </Link>
                </Box>
              </Paper>
            ) : (
              <Box
                style={{ minHeight: "100%" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Come on, buy something!
              </Box>
            )}
          </Container>
        ) : (
          <Container>
            <Login redirect={false} isPage={false} />
          </Container>
        )}
      </Container>
    );
  };
  if (isFromDrawer) {
    return (
      <Drawer
        anchor="right"
        open={isVisible}
        onClose={() => dispatch(toggleVisible())}
      >
        <Box className={classes.close}>
          <IconButton onClick={() => dispatch(hideDrawer())}>
            <CloseOutlined color="primary" />
          </IconButton>
        </Box>
        <CartContent />
      </Drawer>
    );
  } else return <CartContent />;
};

export default Cart;
