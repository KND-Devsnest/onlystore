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
    width: "100%",
  },
  container: {
    minWidth: "100%",
  },
  currentImage: {
    maxWidth: "351px",
    maxHeight: "251px",
    borderRadius: "1rem",
    objectFit: "contain",
    transition: "transform 0.2s",
  },

  carouselBar: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(2),
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
    minHeight: theme.spacing(40),
    justifyContent: "space-between",
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
    color: theme.palette.error.dark,
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
  const { wishlistItems, currentUser } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const isInWishlist = !!wishlistItems[currentProd.id];

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isInWishlist) {
      dispatch(removeWishlistItem({ id: currentProd.id }));
      dispatch(
        triggerSnackbar({
          severity: "info",
          message: "Product Removed from Wishlist!",
        })
      );
    } else {
      console.log(currentProd);
      const { id, title, price, imgs, category } = currentProd;
      dispatch(
        addWishListItem({ id, title, price, imageUrl: imgs[0], category })
      );
      if (currentUser)
        dispatch(
          triggerSnackbar({
            severity: "success",
            message: "Product added to your wishlist 🥳",
          })
        );
      else
        dispatch(
          triggerSnackbar({
            severity: "error",
            message: "Error! Login to add to your wishlist ❌",
          })
        );
    }
  };

  return (
    <Container className={classes.container}>
      <div>
        <Paper className={classes.test}>
          <FavoriteIcon
            className={!isInWishlist ? classes.heartClicked : classes.heart}
            onClick={handleWishlistClick}
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
