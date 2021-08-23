/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { deleteOrder, remainingTimeCalc, saveOrders } from "../../utils/orders";
import { triggerModal } from "../../store/slices/uiSlice";
import { useDispatch } from "react-redux";
import OrderStatusCard from "../OrderStatusCard";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: "1rem",
    height: "100vh",
  },

  details: {
    display: "block",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  headingAccordinContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "800",
    borderTop: "solid 1px black",
  },
  writeReview: {
    color: "blue",
    transition: "0.2s ease-in",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
}));
const OrderCard = ({
  order,
  delivered,
  currentUser,
  ordersState,
  setOrdersState,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const time = remainingTimeCalc(order.deliveryTime, order.orderTime);
  return (
    <div>
      <Accordion className={classes.AccordionClass}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Container className={classes.headingAccordinContainer}>
            <Typography>Order #{order.orderTime}</Typography>
            {!delivered ? (
              <Typography>
                Delivery in {time > 0 ? time : "0"}
                &nbsp; Mins
              </Typography>
            ) : (
              ""
            )}
          </Container>
        </AccordionSummary>

        <AccordionDetails className={classes.details}>
          {" "}
          <div className={classes.headerContainer}>
            <div>
              <div>Title</div>
              {Object.keys(order.products).map((el, index) => (
                <div key={index}>{order.products[el].title}</div>
              ))}
            </div>
            <div>
              Qty
              <div>
                {Object.keys(order.products).map((el, index) => (
                  <div key={index}>{order.products[el].quantity}</div>
                ))}
                <div className={classes.bold}>{order.totalQuantity}</div>
              </div>
            </div>{" "}
            <div>
              Total
              <div>
                {Object.keys(order.products).map((el, index) => (
                  <div key={index}>
                    {order.products[el].quantity * order.products[el].price}
                  </div>
                ))}
                <div className={classes.bold}>{order.totalPrice}</div>
              </div>
            </div>
            {delivered ? (
              <div>
                Feedback
                <div>
                  {Object.keys(order.products).map((el, index) => (
                    <div key={index}>
                      {
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                        <div
                          onClick={() => {
                            dispatch(triggerModal(el));
                          }}
                        >
                          {" "}
                          <span className={classes.writeReview}>
                            Write a Review
                          </span>
                        </div>
                      }
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <br></br>
          <div></div>
          {!delivered ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const temp = deleteOrder(ordersState.orders, order.orderTime);
                saveOrders(temp, currentUser, true);
                setOrdersState({ orders: temp });
              }}
            >
              Cancel Order
            </Button>
          ) : (
            ""
          )}
          <OrderStatusCard order={order} delivered={delivered} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default OrderCard;
