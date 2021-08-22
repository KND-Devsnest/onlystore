import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logOutUser,
  updateUserDetails,
} from "./authSlice";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    snackbar: { showSnackbar: false, severity: "info", message: "" },
    reviewModal: false,
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
    triggerModal: (state) => {
      state.reviewModal = true;
    },
    closeModal: (state) => {
      state.reviewModal = false;
    },
  },
});
export const { triggerSnackbar, hideSnackbar, triggerModal, closeModal } =
  uiSlice.actions;
export default uiSlice.reducer;
