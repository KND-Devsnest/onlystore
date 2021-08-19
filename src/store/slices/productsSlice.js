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
    findAndSetCurrentProduct: (state, action) => {
      let found = false;
      state.productItems.map((el) => {
        if (action.payload === el.id) {
          state.currentProduct = el;
          found = true;
        }
      });
      if (!found) state.currentProduct = "noprod";
    },
  },
});
export const { addTotalProduct, setCurrentProduct, findAndSetCurrentProduct } =
  productSlice.actions;
export default productSlice.reducer;
