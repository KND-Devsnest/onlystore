import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { setCurrentProduct } from "../store/slices/productsSlice";
import Reviews from "../components/productDetailComponents/Reviews";
import { Grid, Card, Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { calculateRatings } from "../utils/reviewUtils";
import CartBox from "../components/productDetailComponents/CartBox";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
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
            <Grid item xs={12} sm={5}>
              {currentProduct.imgs.map((el, index) => (
                <img src={el} alt={currentProduct.title} key={index}></img>
              ))}
            </Grid>
            <Grid item xs={12} sm={5}>
              Rating:{rating} using 1000 ratings and {count} reviews
              <Paper>
                <div>{currentProduct.title}</div>
                {Array.isArray(currentProduct.specs) ? (
                  <ul>
                    {currentProduct.specs.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{currentProduct.specs}</p>
                )}
              </Paper>{" "}
              <CartBox />
            </Grid>
          </Grid>
        </Container>
        <Reviews paramId={paramId} reviews={currentProduct.reviews}></Reviews>
      </div>
    );
  }
};
export default ProductDetails;
