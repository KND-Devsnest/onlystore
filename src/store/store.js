import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import productReducer from "./slices/productsSlice";
import authReducer from "./slices/authSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    products: productReducer,
    auth: authReducer,
  },
});
