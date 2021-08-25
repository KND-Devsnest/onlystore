import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { OrderGenerator, saveOrders } from "../utils/orders";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Login from "./Login";
import { Container, Paper } from "@material-ui/core";
import PaymentMethod from "../components/placeOrderComponents/PaymentMethod";
import ShippingAddress from "../components/placeOrderComponents/ShippingAddress";
import ReviewOrder from "../components/placeOrderComponents/ReviewOrder";
import { clearCart } from "../store/slices/cartSlice";
import { Redirect } from "react-router-dom";
import { updateUserDetails } from "../store/slices/authSlice";
import { triggerSnackbar } from "../store/slices/uiSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(2),
  },
  content: {
    minHeight: "50vh",
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
  const { isAuth, email, addr } = useSelector((state) => state.auth);
  const { street, city, state, pin, name } = addr;
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    shippingAddress: {
      name,
      street,
      city,
      state,
      pin,
    },
    paymentMethod: "COD",
    persistAddress: false,
    isLoaded: false,
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

  const handleToggleShippingAddressPersistance = (e) => {
    setFormData({
      ...formData,
      persistAddress: e.target.checked,
    });
  };

  function getSteps() {
    return ["Login", "Shipping Address", "Payment Method", "Review and Buy"];
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
            togglePersistance={handleToggleShippingAddressPersistance}
            persistAddress={formData.persistAddress}
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
    if (activeStep === 1) {
      const { street, city, state, pin, name } = formData.shippingAddress;
      console.log(street, city, state, pin, name);
      if (
        name === "" ||
        street === "" ||
        city === "" ||
        state === "" ||
        pin === ""
      ) {
        dispatch(
          triggerSnackbar({
            severity: "error",
            message: "Please provide the Shipping Address!",
          })
        );
        return;
      }
    }
    if (activeStep == getSteps().length - 1) {
      let order = {
        orderTime: new Date().getTime(),
        totalAmount: totalPrice,
        products: [],
        shippingAddress: formData.shippingAddress,
      };
      order["id"] = `ORDER-${order["orderTime"]}`;
      saveOrders(
        OrderGenerator(cartItems, totalPrice, order.shippingAddress),
        email
      );

      setFormData({ ...formData, isLoaded: false });
      if (formData.persistAddress)
        dispatch(updateUserDetails({ addr: formData.shippingAddress }));
      dispatch(
        triggerSnackbar({ severity: "success", message: "Order Placed!" })
      );
      dispatch(clearCart({ clear: true }));
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const loginCallback = () => {
    setActiveStep(1);
  };
  useEffect(() => {
    console.log(cartItems);
    if (cartItems) setFormData({ ...formData, isLoaded: true });
    // eslint-disable-next-line
  }, []);
  if (formData.isLoaded && Object.keys(cartItems).length === 0) {
    dispatch(
      triggerSnackbar({ severity: "info", message: "Your Cart is Empty!" })
    );
    return <Redirect to="/" />;
  }

  return (
    <Container maxWidth="md" className={classes.root}>
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
