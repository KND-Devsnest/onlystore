import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const res = await window.fakeFetch("/products", "GET");
  return res;
});
export const fetchProduct = createAsyncThunk(
  "fetch/product",
  async (idtoFind) => {
    const res = await window.fakeFetch("/products", "GET");
    return { res, idtoFind };
  }
);
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
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.productItems = action.payload;
      state.isLoading = false;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      for (let i of action.payload.res) {
        if (i.id == action.payload.idtoFind) {
          state.currentProduct = i;
          break;
        }
      }
    },
  },
});
export const { addTotalProduct, setCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
