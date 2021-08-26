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
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    padding: theme.spacing(2, 4),
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
      <Container maxWidth="xl" className={classes.root}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid container item xs={12} sm={5} className={classes.leftContainer}>
            <Carousel currentProd={currentProduct} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            className={classes.rightContainer}
          >
            <Grid item xs={12}>
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
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Reviews
                paramId={paramId}
                reviews={currentProduct.reviews}
              ></Reviews>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return <CircularProgress />;
  }
};

export default ProductDetails;
