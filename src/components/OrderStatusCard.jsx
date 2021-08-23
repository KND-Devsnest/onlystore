import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { red } from "@material-ui/core/colors";
import withStylesProps from "../utils/withStylesProps";

const useStyles = makeStyles({
  stepicon: {
    width: "1rem",
    backgroundColor: red,
  },
});

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 24,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    border: "solid",
    borderColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 24,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const StepperConnectorStyles = ({ progress }) => ({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#eaeaf0",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
    "& $line::after": {
      height: 100,
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
    minHeight: 100,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: -1.75,
      zIndex: 10,
      minHeight: progress,
      borderLeft: "solid",
      borderLeftWidth: 3,
      borderLeftColor: "#784af4",
    },
  },
});

const StepperConnector = withStylesProps(StepperConnectorStyles)(StepConnector);

const OrderStatusCard = ({ order, delivered }) => {
  const classes = useStyles();
  const [expected] = useState(order.deliveryTime * 60);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      const temp =
        ((Date.now() - order.orderTime) / (order.deliveryTime * 60 * 1000)) *
        100;
      if (!(temp >= 100)) setProgress(temp);
      else {
        clearInterval(timer);
        setProgress(100);
      }
    }, 1000);
    if (progress >= 100) {
      clearInterval(timer);
      setProgress(100);
    }
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.kuchBhi}>
      <Stepper
        orientation="vertical"
        activeStep={progress >= 100 ? 3 : 1}
        connector={<StepperConnector progress={progress} />}
      >
        <Step>
          <StepLabel StepIconComponent={QontoStepIcon}>
            Order Placed at {"" + new Date(order.orderTime)}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={QontoStepIcon}>
            {delivered ? "Delivered at " : "Delivering on "}
            {"" + new Date(order.orderTime + expected * 1000)}
          </StepLabel>
        </Step>
      </Stepper>
    </div>
  );
};

export default OrderStatusCard;
