import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { findAndSetCurrentProduct } from "../store/slices/productsSlice";
import Reviews from "../components/productDetailComponents/Reviews";
import { Grid, Card, Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
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
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentProduct || currentProduct.id !== paramId) {
      let xd = dispatch(findAndSetCurrentProduct(paramId));
      console.log(xd);
    }
  }, [paramId]);

  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <img src={currentProduct.imageUrl} alt={currentProduct.title}></img>
          </Grid>
          <Grid item xs={12} sm={5}>
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
          </Grid>
        </Grid>
      </Container>
      <Reviews paramId={paramId}></Reviews>
    </div>
  );
};

export default ProductDetails;
