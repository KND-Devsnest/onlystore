import { createSlice } from "@reduxjs/toolkit";

const logoutSave = (currentUser, state) => {
  const temp = JSON.parse(localStorage.getItem("orders"));
  localStorage.setItem(
    "orders",
    JSON.stringify({
      ...temp,
      [currentUser]: state.orderItems,
    })
  );
};

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orderItems: [],
  },
  reducers: {
    loadOrders: (state, action) => {
      const temp = JSON.parse(localStorage.getItem("orders"));
      if (!temp) return;
      state.orderItems = temp[action.payload];
    },
    addOrderItem: (state, action) => {
      console.log(state.orderItems);
      const { order, user } = action.payload;
      state.orderItems.push(order);
      logoutSave(user, state);
    },
  },
});
export const { addOrderItem, loadOrders } = OrderSlice.actions;
export default OrderSlice.reducer;
