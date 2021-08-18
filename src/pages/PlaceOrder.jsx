import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Login from "./Login";
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
}));

function getSteps() {
  return ["Login", "Shipping Address", "Payment Method", "Review and Place"];
}

function getStepContent(stepIndex, loginCallback) {
  switch (stepIndex) {
    case 0:
      return <Login redirect={false} callback={loginCallback} />;
    case 1:
      return "Shipping Address";
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
