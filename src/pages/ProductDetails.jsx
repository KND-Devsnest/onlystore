import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { setCurrentProduct } from "../store/slices/productsSlice";
import Reviews from "../components/productDetailComponents/Reviews";
import { Grid, Card, Paper, Container, Tooltip } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { calculateRatings } from "../utils/reviewUtils";
import CartBox from "../components/productDetailComponents/CartBox";
import Carousel from "../components/productDetailComponents/Carousel";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: "1rem",
  },
  container: {
    padding: "1rem",
  },
  images: {
    maxWidth: "352px",
    maxHeight: "352px",
  },
  imgContainer: {
    textAlign: "center",
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
      <div>
        <Container className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} className={classes.imgContainer}>
              <Carousel currentProd={currentProduct} />
            </Grid>
            <Grid item xs={12} sm={5}>
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
                  <ul>
                    {currentProduct.specs.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{currentProduct.specs}</p>
                )}
                <CartBox />
              </Paper>{" "}
            </Grid>
          </Grid>
        </Container>
        <Reviews paramId={paramId} reviews={currentProduct.reviews}></Reviews>
      </div>
    );
  }
};
export default ProductDetails;
