import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import {
  makeStyles,
  withStyles,
  Stepper,
  Step,
  StepLabel,
  Button,
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
    // backgroundColor: "currentColor",
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

const OrderStatusCard = () => {
  const classes = useStyles();
  const [nowStep, setNowStep] = useState(1);
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) prev += 1;
        return prev;
      });
    }, 100);
  }, []);
  return (
    <div>
      <Stepper
        orientation="vertical"
        activeStep={progress === 100 ? 3 : 1}
        connector={<StepperConnector progress={progress} />}
      >
        <Step>
          <StepLabel StepIconComponent={QontoStepIcon}>Order Placed</StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={QontoStepIcon}>Delivered</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
};

export default OrderStatusCard;
