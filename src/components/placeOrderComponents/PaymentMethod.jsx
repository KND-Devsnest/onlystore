import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paymentMethod: {
    backgroundColor: theme.palette.grey[300],
    width: "90%",
    height: theme.spacing(6),
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
      <div className={styles.paymentMethod}>COD</div>
    </Container>
  );
};

export default PaymentMethod;
