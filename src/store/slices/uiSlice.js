import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    snackbar: { showSnackbar: false, severity: "info", message: "" },
  },
  reducers: {
    triggerSnackbar: (state, action) => {
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
      state.snackbar.showSnackbar = true;
    },
    hideSnackbar: (state) => {
      state.snackbar.showSnackbar = false;
    },
  },
});
export const { triggerSnackbar, hideSnackbar } = uiSlice.actions;
export default uiSlice.reducer;
