import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Drawer, Paper, Container, Box, IconButton } from "@material-ui/core";
import {
  closeWishlistDrawer,
  removeWishlistItem,
} from "../store/slices/wishlistSlice";
import CartWishCard from "./CartWishCard";
import Login from "../pages/Login";
import { CloseOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { addCartItem } from "../store/slices/cartSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: theme.spacing(40),
    minHeight: "100vh",
    background: theme.palette.background.default,
    display: "flex",
    alignItems: "flex-start",
  },
  mainContainer: {
    padding: theme.spacing(4, 0),
  },
  cardContainer: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  close: {
    backgroundColor: theme.palette.background.default,
  },
}));

const Wishlist = ({ isFromDrawer }) => {
  const classes = useStyles();
  const { wishlistItems, isVisible, currentUser } = useSelector(
    (state) => state.wishlist
  );
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeWishlistItem({ id }));
  };

  const handleAddToCart = (id) => {
    let product = wishlistItems[id];
    dispatch(
      addCartItem({
        ...product,
        quantity: 1,
      })
    );
    handleRemoveFromWishlist(id);
  };

  const WishlistContent = () => {
    return (
      <Container className={classes.root}>
        {currentUser ? (
          <Container className={classes.mainContainer}>
            {Object.keys(wishlistItems).length ? (
              <Paper elevation={2} className={classes.cardContainer}>
                {Object.keys(wishlistItems).map((key, inx) => (
                  <CartWishCard
                    key={inx}
                    isCartItem={false}
                    element={wishlistItems[key]}
                    removeItem={handleRemoveFromWishlist}
                    addToCart={handleAddToCart}
                  />
                ))}
              </Paper>
            ) : (
              <Box
                style={{ minHeight: "100%" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Your Wishlist is empty!
              </Box>
            )}
          </Container>
        ) : (
          <Container>
            <Login redirect={false} isPage={false} />
          </Container>
        )}
      </Container>
    );
  };

  if (isFromDrawer)
    return (
      <Drawer
        anchor="right"
        open={isVisible}
        onClose={() => dispatch(closeWishlistDrawer())}
      >
        <Box className={classes.close}>
          <IconButton onClick={() => dispatch(closeWishlistDrawer())}>
            <CloseOutlined color="primary" />
          </IconButton>
        </Box>
        <WishlistContent />
      </Drawer>
    );
  else return <WishlistContent />;
};

export default Wishlist;
