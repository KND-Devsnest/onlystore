import {
  Container,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  radioGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paymentMethod: {
    backgroundColor: theme.palette.grey[300],
    width: "90%",
    height: theme.spacing(6),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "1px solid black",
  },
}));

const PaymentMethod = () => {
  const styles = useStyles();
  return (
    <Container className={styles.root}>
      <RadioGroup className={styles.radioGroup} value="cod">
        <div className={styles.paymentMethod}>
          <Radio value="cod" color="primary" />
          <Typography variant="body2">Cash On Delivery</Typography>
        </div>
        <div className={styles.paymentMethod}>
          <Radio value="online" color="primary" disabled />
          <Typography variant="body2">Online Payment</Typography>
        </div>
      </RadioGroup>
    </Container>
  );
};

export default PaymentMethod;
