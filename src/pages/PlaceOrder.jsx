import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Login from "./Login";
import { Container, Grid, TextField, Paper } from "@material-ui/core";
import PaymentMethod from "../components/placeOrderComponents/PaymentMethod";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  ShipContainer: {},
  shippingLeft: {
    margin: theme.spacing(8, 4, 8, 4),
    textAlign: "center",
  },
  shippingRight: {
    minHeight: "100%",
    width: "100vmin",
    margin: theme.spacing(4, 2, 4, 2),
    display: "grid",
    placeItems: "center",
  },
  paper: {
    minWidth: "40%",
    padding: theme.spacing(2, 4),
  },
}));

const ShippingAddress = ({ name }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: name,
    street: "",
    city: "",
    state: "",
    pin: "",
  });
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Shipping Address
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Please provide your shipping address.
      </Typography>
      <Grid container className={classes.ShipContainer}>
        <Grid item sm={4} xs={12} className={classes.shippingLeft}>
          <TextField
            required
            variant="filled"
            type="text"
            name="name"
            label="Name"
            helperText="Enter your Name"
            margin="dense"
            multiline
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <TextField
            required
            variant="filled"
            type="text"
            name="street"
            label="Line 1"
            helperText="Enter your Street Address"
            margin="dense"
            multiline
            rows={2}
            value={formData.street}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, street: e.target.value }))
            }
          />
          <TextField
            required
            variant="filled"
            type="text"
            name="city"
            label="City"
            helperText="Enter your City"
            value={formData.city}
            margin="dense"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, city: e.target.value }))
            }
          />
          <TextField
            required
            variant="filled"
            type="text"
            label="State"
            helperText="Enter your State"
            value={formData.state}
            margin="dense"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, state: e.target.value }))
            }
          />
          <TextField
            required
            variant="filled"
            type="number"
            label="Pin Code"
            value={formData.pin}
            helperText="Enter your Pin code"
            margin="dense"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, pin: e.target.value }))
            }
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Container className={classes.shippingRight}>
            <Paper
              variant="outlined"
              elevation={3}
              xs={12}
              className={classes.paper}
            >
              <Typography variant="h6" component="h4" gutterBottom>
                Entered Address
              </Typography>
              {formData.name && `${formData.name}`}
              <br />
              {formData.street && `${formData.street},`}
              <br />
              {formData.city && `${formData.city},`}
              <br />
              {formData.state && `${formData.state},`}
              <br />
              {formData.pin && `${formData.pin},`}
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

function getSteps() {
  return ["Login", "Shipping Address", "Payment Method", "Review and Place"];
}

function getStepContent(stepIndex, loginCallback) {
  switch (stepIndex) {
    case 0:
      return <Login redirect={false} callback={loginCallback} />;
    case 1:
      return <ShippingAddress name="John Doe" />;
    case 2:
      return <PaymentMethod />;
    default:
      return "Review and Place";
  }
}

const PlaceOrder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const [activeStep, setActiveStep] = React.useState(isAuth ? 1 : 0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const loginCallback = () => {
    setActiveStep(1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions}></Typography> */}
            {getStepContent(activeStep, loginCallback)}
            <div>
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
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
