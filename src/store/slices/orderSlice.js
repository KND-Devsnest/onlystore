import { createSlice } from "@reduxjs/toolkit";
const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orderItems: localStorage.getItem("orderItems") | [],
  },
  reducers: {
    addOrderItem: (state, action) => {
      state.orderItems = [...state.orderItems, action.payload];
      localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
    },
  },
});
export const { addOrderItems } = OrderSlice.actions;
export default OrderSlice.reducer;