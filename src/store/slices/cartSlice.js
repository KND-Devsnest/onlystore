import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeCartItem: (state, action) => {
      let newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = [...newItems];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addCartItem, removeCartItem } = CartSlice.actions;
export default CartSlice.reducer;
