import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    snackbar: { showSnackbar: false, variant: "info", message: "" },
  },
  reducers: {
    toggleSnackbar: (state) => {
      state.snackbar.showSnackbar = !state.snackbar.showSnackbar;
    },
  },
});
export const { toggleSnackbar } = uiSlice.actions;
export default uiSlice.reducer;
