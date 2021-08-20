import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Drawer, Paper, Card } from "@material-ui/core";
import { removeWishlistItem,toggleVisible} from "../store/slices/wishlistSlice";
const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const isVisible = useSelector((state) => state.wishlist.isVisible);
    const dispatch = useDispatch();
    return (
      <Drawer
        anchor="right"
        open={isVisible}
        onClose={() => dispatch(toggleVisible())}
      >
        {wishlistItems
          ? Object.keys(wishlistItems).map((el, index) => (
              <Card key={index}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={wishlistItems[el].imageUrl}
                  alt={wishlistItems[el].title}
                />
                <button
                  onClick={() => {
                    dispatch(removeWishlistItem(wishlistItems[el]));
                  }}
                >
                  Delete
                </button>
              </Card>
            ))
          : ""}
      </Drawer>
    );
  };
  
export default Wishlist;
  