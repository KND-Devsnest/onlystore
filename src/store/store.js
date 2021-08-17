import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    order : orderReducer,
  },
});
