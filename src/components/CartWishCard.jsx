import React from "react";
import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: "100%",
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  },
  image: {
    minWidth: theme.spacing(20),
    height: theme.spacing(20),
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export const QuantityBox = ({ id, quantity, changeQuantity }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <IconButton
        color="primary"
        onClick={() => changeQuantity(id, quantity, "add")}
      >
        <AddCircle />
      </IconButton>
      <Typography variant="body1">{quantity}</Typography>
      <IconButton
        color="primary"
        onClick={() => changeQuantity(id, quantity, "subtract")}
        disabled={quantity === 1}
      >
        <RemoveCircle />
      </IconButton>
    </Box>
  );
};

const CartWishCard = ({
  element,
  removeItem,
  changeQuantity,
  isCartItem,
  addToCart,
}) => {
  const classes = useStyles();
  const { id, title, imageUrl, quantity, price } = element;
  return (
    <Paper variant="outlined" className={classes.root}>
      <Box
        className={classes.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Box className={classes.content}>
        <Typography variant="subtitle1" style={{ marginBottom: "0.1rem" }}>
          {title}
        </Typography>
        <Box flexGrow>
          <Typography variant="subtitle2">₹ {price}</Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {isCartItem ? (
            <QuantityBox
              id={id}
              quantity={quantity}
              changeQuantity={changeQuantity}
            />
          ) : null}
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              removeItem(id);
            }}
          >
            Remove
          </Button>
          {!isCartItem ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addToCart(id);
              }}
            >
              Add To Cart
            </Button>
          ) : null}
        </Box>
      </Box>
    </Paper>
  );
};

CartWishCard.defaultProps = {
  addToCart: () => {},
  removeItem: () => {},
  changeQuantity: () => {},
};

export default CartWishCard;
