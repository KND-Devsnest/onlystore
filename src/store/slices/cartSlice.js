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
const calculatetotalPrice = (state) => {
  let temp = 0;
  for (let i in state.cartItems) {
    temp += state.cartItems[i].price * state.cartItems[i].quantity;
  }
  state.totalPrice = temp;
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
    loadCartItem: (state, action) => {
      state.currentUser = action.payload;
      if (!state.currentUser) return state;
      const temp = JSON.parse(localStorage.getItem("cart"));
      if (!temp) return state;
      if (!temp[state.currentUser]) return state;
      state.cartItems = temp[state.currentUser]["items"];
      state.totalPrice = temp[state.currentUser]["totalPrice"];
      calculatetotalPrice(state);
    },
    addCartItem: (state, action) => {
      if (!state.currentUser) return state;
      state.cartItems[action.payload.id] = action.payload;
      calculatetotalPrice(state);
      logoutSave(state, state.currentUser);
    },
    removeCartItem: (state, action) => {
      if (!state.currentUser) return state;
      delete state.cartItems[action.payload.id];
      calculatetotalPrice(state);
      logoutSave(state, state.currentUser);
    },
    changeQuantity: (state, action) => {
      if (!state.currentUser) return state;
      state.cartItems[action.payload.id].quantity = action.payload.quantity;
      calculatetotalPrice(state);
      logoutSave(state, state.currentUser);
    },
    toggleVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
    showDrawer: (state) => {
      state.isVisible = true;
    },
    hideDrawer: (state) => {
      state.isVisible = false;
    },
    clearCart: (state, action) => {
      state.cartItems = {};
      state.totalPrice = 0;
      state.currentUser = null;
      if (action.payload.clear) logoutSave(state, state.currentUser);
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  toggleVisible,
  showDrawer,
  hideDrawer,
  changeQuantity,
  loadCartItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
