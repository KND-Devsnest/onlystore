import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cart") | [],
    totalPrice: localStorage.getItem("cart_totalPrice") | 0,
  },
  reducers: {
    //adds item to the cart
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      state.totalPrice += 0; //change after data source decided
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      localStorage.setItem("cart_totalPrice", state.totalPrice);
    },
    //removes item from the cart
    removeCartItem: (state, action) => {
      let newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = [...newItems];
      state.totalPrice += 0; //change after data source decided
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      localStorage.setItem("cart_totalPrice", state.totalPrice);
    },
    //changes quantity of an item in cart
    changeQuantity: (state, action) => {
      state.cartItems[action.payload.inx].quantity += action.payload.quantity;
      state.totalPrice += 0; //change after data source decided
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      localStorage.setItem("cart_totalPrice", state.totalPrice);
    },
  },
});

export const { addCartItem, removeCartItem, changeQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
