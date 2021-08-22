import { Paper, Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useSelector, useDispatch } from "react-redux";
import {
  addWishListItem,
  removeWishlistItem,
} from "../../store/slices/wishlistSlice";
import { triggerSnackbar } from "../../store/slices/uiSlice";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: "1rem",
  },
  container: {
    minHeight: "100%",
    minWidth: "100%",
    marginTop: "1rem",
    padding: "1rem",
  },
  currentImage: {
    maxWidth: "351px",
    maxHeight: "251px",
    borderRadius: "1rem",
    objectFit: "contain",
    transition: "transform 0.2s",
    marginRight: "2rem",
  },

  carouselBar: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    marginLeft: "1rem",
  },
  carouselImagesContainer: {
    width: "120px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0.5rem",
    marginRight: "0.5rem",
    transition: "0.2s ease-in",
  },
  carouselImages: {
    width: "100px",
    height: "100px",
    display: "inline-block",
    cursor: "pointer",
    transition: "0.2s ease-in",
    borderRadius: "0.5rem",
    objectFit: "contain",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  test: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem",
    overflow: "hidden",
    textAlign: "center",
    flexWrap: "nowrap",
    position: "relative",
  },
  imgContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  currentImageNoMargin: {
    maxWidth: "351px",
    maxHeight: "251px",
    borderRadius: "1rem",
    objectFit: "contain",
    transition: "transform 0.2s",
  },
  heart: {
    position: "absolute",
    right: "5%",
    top: "5%",
    transition: "0.2s ease-in",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },

  heartClicked: {
    position: "absolute",
    right: "5%",
    top: "5%",
    transition: "0.2s ease-in",
    color: "pink",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
}));
const Carousel = ({ currentProd }) => {
  const classes = useStyles();
  const images = currentProd.imgs;
  const [imageState, setImage] = useState(images[0]);
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  return (
    <Container className={classes.container}>
      <div>
        <Paper className={classes.test}>
          <FavoriteIcon
            className={
              wishlist[currentProd.id] ? classes.heartClicked : classes.heart
            }
            onClick={() => {
              if (!wishlist[currentProd.id]) {
                dispatch(addWishListItem(currentProd));
                dispatch(
                  triggerSnackbar({
                    severity: "success",
                    message: "Product added to your wishlist 🥳",
                  })
                );
              } else {
                dispatch(removeWishlistItem(currentProd));
                dispatch(
                  triggerSnackbar({
                    severity: "error",
                    message: "Removed Item from your wishlist!",
                  })
                );
              }
            }}
          />
          {images.length > 1 ? (
            <div className={classes.carouselBar}>
              {images.map((el, index) => (
                <Paper
                  className={classes.carouselImagesContainer}
                  onClick={() => setImage(images[index])}
                  key={index}
                >
                  <img
                    className={classes.carouselImages}
                    src={el}
                    alt={"carousel Images"}
                  />
                </Paper>
              ))}
            </div>
          ) : (
            ""
          )}
          <div className={classes.imgContainer}>
            <img
              className={
                images.length > 1
                  ? classes.currentImage
                  : classes.currentImageNoMargin
              }
              src={imageState}
              alt="currentProduct"
            />{" "}
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default Carousel;
