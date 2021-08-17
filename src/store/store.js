import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import productReducer from "./slices/productsSlice";
export default configureStore({
  reducer: {
    cart: cartReducer,
    order : orderReducer,
    product : productReducer,
  },
});
