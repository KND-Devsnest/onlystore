import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "products",
  initialState: {
    currentProduct: null,
    productItems: [],
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
export const { addTotalProduct, setCurrentProduct, toggleLoading } =
  productSlice.actions;
export default productSlice.reducer;
