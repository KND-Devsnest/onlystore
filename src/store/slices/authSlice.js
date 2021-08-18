import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: localStorage.getItem("isAuth") | false,
    email: localStorage.getItem("auth_email") | "",
    name: localStorage.getItem("auth_name") | "",
    address: localStorage.getItem("auth_addr") | "",
  },
  reducers: {
    toggleAuth: (state) => {
      state.auth = !state.auth;
      localStorage.setItem("isAuth", state.auth);
    },
    setAuthName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("auth_name", state.name);
    },
    setAuthEmail: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("auth_email", state.email);
    },
    setAuthAddress: (state, action) => {
      state.address = action.payload;
      localStorage.setItem("auth_addr", state.address);
    },
  },
});

export const { toggleAuth, setAuthName } = AuthSlice.actions;
export default AuthSlice.reducer;
