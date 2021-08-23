import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { addCartItem } from "../store/slices/cartSlice";
import { addWishListItem } from "../store/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProduct } from "../store/slices/productsSlice";
import { Link } from "react-router-dom";
import { triggerSnackbar } from "../store/slices/uiSlice";
import { ShoppingCartRounded } from "@material-ui/icons";
import { Box, CardActionArea, Tooltip } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.spacing(50),
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const BasicCard = ({ id, title, price, imageUrl, category, elem, eta }) => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  let m = 50;
  const d = new Date();
  const updated = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours(),
    d.getMinutes() + m,
    d.getSeconds()
  );
  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day =
    d.getDay() === updated.getDay()
      ? "Today"
      : d.getDay() + 1 === updated.getDay()
      ? "Tomorrow"
      : daysList[updated.getDay()];
  return (
    <Card className={classes.root} variant="outlined">
      <Link
        to={"/product/" + id}
        onClick={() => {
          dispatch(setCurrentProduct(elem));
        }}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} />
          <CardContent>
            <Tooltip title={title}>
              <Typography gutterBottom variant="h6" component="h6" noWrap>
                {title}
              </Typography>
            </Tooltip>
            {/* Get it by {day}, {month} {date} in {m} minutes */}
            Get it by {day}, in {eta} minute{eta === 1 ? "" : "s"}
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions disableSpacing className={classes.actions}>
        <CardContent>₹ {price}</CardContent>
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            aria-label="add to favorites"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              dispatch(
                addWishListItem({ id, title, price, imageUrl, category })
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
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            aria-label="add to cart"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              dispatch(
                addCartItem({
                  ...elem,
                  imageUrl: elem.imgs[0],
                  quantity: 1,
                })
              );
              if (currentUser)
                dispatch(
                  triggerSnackbar({
                    severity: "success",
                    message: "Product added to your cart 🥳",
                  })
                );
              else
                dispatch(
                  triggerSnackbar({
                    severity: "error",
                    message: "Error! Login to add to your cart ❌",
                  })
                );
            }}
          >
            <ShoppingCartRounded />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
