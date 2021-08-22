import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loadOrder } from "../utils/orders";
//import { useSelector } from "react-redux";
import { OrderGenerator, saveOrders } from "../utils/orders";
import OrderCard from "../components/Orders/OrderCard";
import { Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { remainingTimeCalc } from "../utils/orders";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: "1rem",
    height: "100vh",
  },
  container: {
    width: "90%",
  },
  Headingcontainer: {
    width: "90%",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
}));
const Orders = () => {
  const currentUser = useSelector((state) => state.auth.email);
  const [ordersState, setOrdersState] = useState(loadOrder(currentUser));
  const [delivered, setDelivered] = useState([]);
  const [notDelivered, setNotDelivered] = useState([]);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const classes = useStyles();

  useEffect(() => {
    const tempDelivered = [];
    const tempNotDelivered = [];
    console.log(Math.floor(Date.now() / 1000));
    let currentTime = Math.floor(Date.now() / 1000);
    if (ordersState)
      ordersState.orders.map((el, index) => {
        if (0 >= remainingTimeCalc(el.deliveryTime, el.orderTime)) {
          tempDelivered.push(el);
        } else {
          tempNotDelivered.push(el);
        }
        setDelivered(tempDelivered);
        setNotDelivered(tempNotDelivered);
      });
  }, []);
  console.log(delivered, notDelivered);
  return (
    <Paper>
      <div>
        <button
          onClick={() => {
            saveOrders(OrderGenerator(cartItems, totalPrice), currentUser);
          }}
        >
          HEllo
        </button>
        {ordersState ? (
          <div>
            <Container className={classes.Headingcontainer}>
              {" "}
              <h1>Your Orders</h1>
            </Container>

            <Container className={classes.Headingcontainer}>
              <h2>Current Orders</h2>
            </Container>
            {notDelivered.length > 0 ? (
              notDelivered.map((el, index) => (
                <Container key={index} className={classes.container}>
                  <OrderCard order={el} />
                </Container>
              ))
            ) : (
              <Container className={classes.container}>
                No Current Orders
              </Container>
            )}
            <Container className={classes.Headingcontainer}>
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
    </Paper>
  );
};

export default Orders;
