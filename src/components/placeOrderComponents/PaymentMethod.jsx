import {
  Container,
  makeStyles,
  Paper,
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
    width: "50%",
    height: theme.spacing(6),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const PaymentMethod = () => {
  const styles = useStyles();
  return (
    <Container className={styles.root}>
      <RadioGroup className={styles.radioGroup} value="cod">
        <Paper elevation={2} className={styles.paymentMethod}>
          <Radio value="cod" color="primary" />
          <Typography variant="body2">Cash On Delivery</Typography>
        </Paper>
        <Paper elevation={0} className={styles.paymentMethod}>
          <Radio value="online" color="primary" disabled />
          <Typography variant="body1">Online Payment</Typography>
        </Paper>
      </RadioGroup>
    </Container>
  );
};

export default PaymentMethod;
