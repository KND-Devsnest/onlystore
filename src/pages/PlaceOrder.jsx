import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Login from "./Login";
import { Container, Paper } from "@material-ui/core";
import PaymentMethod from "../components/placeOrderComponents/PaymentMethod";
import ShippingAddress from "../components/placeOrderComponents/ShippingAddress";
import ReviewOrder from "../components/placeOrderComponents/ReviewOrder";
import { addOrderItem } from "../store/slices/orderSlice";
import { clearCart } from "../store/slices/cartSlice";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    padding: theme.spacing(2),
  },
  content: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(2),
    margin: theme.spacing(2),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
}));

const PlaceOrder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isAuth, name, email } = useSelector((state) => state.auth);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    shippingAddress: {
      name: name,
      street: "",
      city: "",
      state: "",
      pin: "",
    },
    paymentMethod: "COD",
  });
  const [activeStep, setActiveStep] = React.useState(isAuth ? 1 : 0);

  const handleShippingAddressChange = (e) => {
    setFormData({
      ...formData,
      shippingAddress: {
        ...formData.shippingAddress,
        [e.target.id]: e.target.value,
      },
    });
  };

  function getSteps() {
    return ["Login", "Shipping Address", "Payment Method", "Review and Place"];
  }
  const steps = getSteps();

  function getStepContent(stepIndex, loginCallback) {
    switch (stepIndex) {
      case 0:
        return <Login redirect={false} callback={loginCallback} />;
      case 1:
        return (
          <ShippingAddress
            data={formData.shippingAddress}
            handleChange={handleShippingAddressChange}
          />
        );
      case 2:
        return <PaymentMethod />;
      case 3:
        return <ReviewOrder orderData={{ ...formData }} />;
      case 4:
        return <Redirect to="/orders" />;
      default:
        return "";
    }
  }

  const handleNext = () => {
    if (activeStep == getSteps().length - 1) {
      let order = {
        orderTime: new Date().getTime(),
        totalAmount: totalPrice,
        products: [],
        shippingAddress: formData.shippingAddress,
      };
      order["id"] = `ORDER-${order["orderTime"]}`;
      Object.keys(cartItems).forEach((key) => {
        let { quantity, deliveryTime } = cartItems[key];
        order["products"].push({ id: key, quantity, deliveryTime });
      });
      console.log(order);
      dispatch(addOrderItem({ user: email, order }));
      dispatch(clearCart());
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const loginCallback = () => {
    setActiveStep(1);
  };

  return (
    <Container className={classes.root}>
      <Paper variant="outlined">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <div className={classes.content}>
            {getStepContent(activeStep, loginCallback)}
            <div className={classes.buttons}>
              <Button
                disabled={activeStep === 0 || (activeStep === 1 && isAuth)}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                disabled={activeStep === 0 && !isAuth}
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Confirm Order" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default PlaceOrder;
