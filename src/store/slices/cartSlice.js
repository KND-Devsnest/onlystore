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
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    //adds item to the cart
    loadCartItem: (state, action) => {
      const temp = JSON.parse(localStorage.getItem("cart"));
      if (!temp || !temp[action.payload]) state.cartItems = [];
      else state.cartItems = temp[action.payload].items;
    },
    addCartItem: (state, action) => {
      state.cartItems[action.payload.data.id] = action.payload.data;

      logoutSave(state, action.payload.currentUser);
    },
    //removes item from the cart
    removeCartItem: (state, action) => {
      let newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.data.id
      );
      state.cartItems = [...newItems];
      state.totalPrice += 0; //change after data source decided
      logoutSave(state, action.payload.currentUser);
    },
    //changes quantity of an item in cart
    changeQuantity: (state, action) => {
      state.cartItems[action.payload.data.id].quantity =
        action.payload.data.quantity;
      state.totalPrice += 0; //change after data source decided
      logoutSave(state, action.payload.currentUser);
    },
  },
});

export const { addCartItem, removeCartItem, changeQuantity, loadCartItem } =
  CartSlice.actions;
export default CartSlice.reducer;
