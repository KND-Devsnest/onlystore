import { createSlice } from "@reduxjs/toolkit";
const logoutSave = (state, currentUser) => {
  const temp = JSON.parse(localStorage.getItem("cart"));
  localStorage.setItem(
    "cart",
    JSON.stringify({
      ...temp,
      [currentUser]: {
        items: state.cartItems,
        totalPrice: state.totalPrice,
      },
    })
  );
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
    currentUser: localStorage.getItem("currentUser"),
    totalPrice: 0,
    isVisible: false,
  },
  reducers: {
    loadCartItem: (state) => {
      const temp = JSON.parse(localStorage.getItem("cart"));
      if (!temp) return;
      state.cartItems = temp[state.currentUser]["items"];
      state.totalPrice = temp[state.currentUser]["totalPrice"];
    },
    addCartItem: (state, action) => {
      state.cartItems[action.payload.id] = action.payload;
      logoutSave(state, state.currentUser);
    },
    removeCartItem: (state, action) => {
      delete state.cartItems[action.payload.id];
      logoutSave(state, state.currentUser);
    },
    changeQuantity: (state, action) => {
      console.log(action);
      state.cartItems[action.payload.id].quantity = action.payload.quantity;
      logoutSave(state, state.currentUser);
    },
    toggleVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  toggleVisible,
  changeQuantity,
  loadCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
