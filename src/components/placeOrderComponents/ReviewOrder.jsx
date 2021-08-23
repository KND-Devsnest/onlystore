import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Paper,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeCartItem } from "../../store/slices/cartSlice";
import { QuantityBox } from "../CartWishCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  detailsContainer: {
    margin: theme.spacing(2, 0),
  },
  orderList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  orderDetails: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2, 2),
  },
  card: {
    width: "95%",
    height: theme.spacing(28),
    margin: theme.spacing(1, 1),
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cardMedia: {
    height: theme.spacing(25),
    backgroundSize: "contain",
  },
  cardHeader: {
    padding: 0,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 2),
  },
  iconButton: {
    width: theme.spacing(5),
  },
  changeQuantity: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
}));

const ReviewOrder = ({ orderData }) => {
  const classes = useStyles();
  const { shippingAddress, paymentMethod } = orderData;
  const { name, street, city, state, pin } = shippingAddress;
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Container className={classes.root}>
      <Typography variant="h4">Review Your Order</Typography>
      <Grid container className={classes.detailsContainer}>
        <Grid item xs={8} className={classes.orderList}>
          {Object.keys(cartItems).map((key) => {
            let { title, imageUrl, price, quantity, category, eta } =
              cartItems[key];
            return (
              <Card key={key} className={classes.card} elevation={4}>
                <Grid container style={{ height: "100%" }}>
                  <Grid item xs={4}>
                    <CardMedia className={classes.cardMedia} image={imageUrl} />
                  </Grid>
                  <Grid item xs={6}>
                    <CardContent className={classes.cardContent}>
                      <CardHeader
                        title={title}
                        subheader={category}
                        className={classes.cardHeader}
                        titleTypographyProps={{ variant: "h6" }}
                        subheaderTypographyProps={{ variant: "subtitle2" }}
                      />
                      <br />
                      <Typography>Expect delivery in {eta} minutes</Typography>
                      <Typography>Rs. {price}</Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={2}>
                    <CardActions
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <IconButton
                        aria-label="Delete Item"
                        onClick={() => dispatch(removeCartItem({ id: key }))}
                      >
                        <Delete />
                      </IconButton>
                      <div className={classes.changeQuantity}>
                        <QuantityBox
                          id={key}
                          quantity={quantity}
                          changeQuantity={(id, quantity, action) => {
                            switch (action) {
                              case "add":
                                dispatch(
                                  changeQuantity({
                                    id: key,
                                    quantity: quantity + 1,
                                  })
                                );
                                break;
                              case "subtract":
                                dispatch(
                                  changeQuantity({
                                    id: key,
                                    quantity: quantity - 1,
                                  })
                                );
                                break;
                              default:
                                break;
                            }
                          }}
                        />
                      </div>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.orderDetails} elevation={3}>
            <Typography variant="h6">Delivery Address : </Typography>
            {name && `${name}`}
            <br />
            {street && `${street},`}
            <br />
            {city && `${city},`}
            <br />
            {state && `${state},`}
            <br />
            {pin && `${pin}`}
            <br />
            <br />
            <Typography variant="h6">Payment Method :</Typography>
            <Typography variant="subtitle1">
              {paymentMethod === "COD" ? " Cash on Delivery" : "Online Payment"}
            </Typography>
            <br />
            <Typography variant="h6">Order Total</Typography>
            <Typography variant="subtitle1">Rs. {totalPrice}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReviewOrder;
