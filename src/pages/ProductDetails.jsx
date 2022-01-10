import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { setCurrentProduct } from "../store/slices/productsSlice";
import Reviews from "../components/productDetailComponents/Reviews";
import {
  Grid,
  Paper,
  Container,
  Tooltip,
  Box,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { calculateRatings } from "../utils/reviewUtils";
import CartBox from "../components/productDetailComponents/CartBox";
import Carousel from "../components/productDetailComponents/Carousel";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    padding: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(2),
  },
  prodContainer: {
    padding: theme.spacing(0, 4),
  },
  images: {
    maxWidth: "352px",
    maxHeight: "352px",
  },
  imgContainer: {
    textAlign: "center",
  },
  specs: {
    padding: theme.spacing(0, 6, 0, 2),
    margin: theme.spacing(2, 0),
  },
}));
const ProductDetails = () => {
  const { id: paramId } = useParams();
  const classes = useStyles();
  const currentProduct = useSelector((state) => state.products.currentProduct);
  const products = useSelector((state) => state.products.productItems);
  const dispatch = useDispatch();

  if (!currentProduct || currentProduct.id !== paramId) {
    let found = false;
    for (let el of products) {
      if (el.id === paramId) {
        dispatch(setCurrentProduct(el));
        found = true;
        break;
      }
    }
    if (!found) return <Redirect to="/"></Redirect>;
  }
  if (currentProduct) {
    const { count, rating } = calculateRatings(currentProduct);
    return (
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          container
          className={classes.prodContainer}
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={1}
        >
          <Grid item xs={12} sm={6} className={classes.imgContainer}>
            <Carousel currentProd={currentProduct} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.container}>
              <h1>{currentProduct.title}</h1>
              <Tooltip
                title={`Rating: ${rating} using 1000 ratings and ${count} reviews`}
              >
                <div style={{ display: "inline-block" }}>
                  <Rating
                    name="half-rating"
                    defaultValue={rating}
                    precision={0.5}
                    readOnly
                  />{" "}
                </div>
              </Tooltip>
              {Array.isArray(currentProduct.specs) ? (
                <Box className={classes.specs}>
                  <ul>
                    {currentProduct.specs.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                </Box>
              ) : (
                <p>{currentProduct.specs}</p>
              )}
              <div
                className=""
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: ".75rem",
                }}
              >
                <Typography variant="h6" style={{ width: "40%" }}>
                  ₹{currentProduct.price}
                </Typography>
                <CartBox />
              </div>
            </Paper>{" "}
          </Grid>
        </Grid>
        <Reviews paramId={paramId} reviews={currentProduct.reviews}></Reviews>
      </Container>
    );
  } else {
    return <CircularProgress />;
  }
};

export default ProductDetails;
