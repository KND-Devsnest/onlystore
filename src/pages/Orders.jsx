import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loadOrder } from "../utils/orders";
import OrderCard from "../components/Orders/OrderCard";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { remainingTimeCalc } from "../utils/orders";
import ReviewComponent from "../components/ReviewComponent";
import { triggerSnackbar } from "../store/slices/uiSlice";
import { Redirect } from "react-router-dom";
import { showDrawer } from "../store/slices/cartSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(4, 2),
  },
  container: {
    width: "90%",
  },
  headingContainer: {
    width: "90%",
    marginBottom: "1rem",
  },
}));
const Orders = () => {
  const currentUser = useSelector((state) => state.auth.email);
  const [ordersState, setOrdersState] = useState(loadOrder(currentUser));
  const dispatch = useDispatch();
  const [delivered, setDelivered] = useState([]);
  const [notDelivered, setNotDelivered] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const tempDelivered = [];
    const tempNotDelivered = [];
    if (ordersState)
      ordersState.orders.map((el) => {
        if (0 >= remainingTimeCalc(el.deliveryTime, el.orderTime)) {
          tempDelivered.push(el);
        } else {
          tempNotDelivered.push(el);
        }
      });
    setDelivered(tempDelivered);
    setNotDelivered(tempNotDelivered);
  }, [ordersState]);

  if (!currentUser) {
    dispatch(
      triggerSnackbar({ severity: "error", message: "Please Login First!" })
    );
    dispatch(showDrawer());
    return <Redirect to="/" />;
  }
  return (
    <Container maxWidth="xl" className={classes.root}>
      <div>
        {ordersState ? (
          <div>
            <Container className={classes.headingContainer}>
              {" "}
              <h1>Your Orders</h1>
            </Container>

            <Container className={classes.headingContainer}>
              <h2>Current Orders</h2>
            </Container>
            {notDelivered.length > 0 ? (
              notDelivered.map((el, index) => (
                <Container key={index} className={classes.container}>
                  <OrderCard
                    order={el}
                    ordersState={ordersState}
                    setOrdersState={setOrdersState}
                    currentUser={currentUser}
                  />
                </Container>
              ))
            ) : (
              <Container className={classes.container}>
                No Current Orders
              </Container>
            )}
            <Container className={classes.headingContainer}>
              {" "}
              <h2>Delivered</h2>
            </Container>
            {delivered.length > 0 ? (
              delivered.map((el, index) => (
                <Container key={index} className={classes.container}>
                  <OrderCard order={el} currentUser={currentUser} delivered />
                </Container>
              ))
            ) : (
              <Container className={classes.container}>
                No Past Orders
              </Container>
            )}
          </div>
        ) : (
          "No orders"
        )}
      </div>
      <ReviewComponent></ReviewComponent>{" "}
    </Container>
  );
};

export default Orders;
