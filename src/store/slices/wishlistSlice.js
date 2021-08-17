import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: localStorage.getItem("wishlist") | [],
  },
  reducers: {
    addWishListItem: (state, action) => {
      state.wishlistItems = [...state.wishlistItems, action.payload];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
    removeWishlistItem: (state, action) => {
      let newItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishlistItems = [...newItems];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { addWishListItem, removeWishlistItem } = WishListSlice.actions;
export default WishListSlice.reducer;
