import { createSlice } from "@reduxjs/toolkit";
import { categories, products } from "../../assets/data/data";
const productSlice = createSlice({
  name: "products",
  initialState: {
    currentProduct: null,
    productItems: products,
    categories: categories,
  },
  reducers: {
    addTotalProduct: (state, action) => {
      state.productItems.push(action.payload);
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});
export const { addTotalProduct, setCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
