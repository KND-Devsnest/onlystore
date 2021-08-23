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
import { remainingTimeCalc } from "../../utils/orders";
import { triggerModal } from "../../store/slices/uiSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
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
}));
const OrderCard = ({ order, delivered, currentUser }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [productId, setProductId] = useState("");
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
                Delivery in{" "}
                {remainingTimeCalc(order.deliveryTime, order.orderTime)}
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
                <div>{order.totalQuantity}</div>
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
                <div>{order.totalPrice}</div>
              </div>
            </div>
            {delivered ? (
              <div>
                Feedback
                <div>
                  {Object.keys(order.products).map((el, index) => (
                    <div key={index}>
                      <div
                        onClick={(e) => {
                          dispatch(triggerModal(el));
                        }}
                      >
                        {" "}
                        Write a Review
                      </div>
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
            <Button variant="contained" color="primary">
              Cancel Order
            </Button>
          ) : (
            ""
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default OrderCard;
