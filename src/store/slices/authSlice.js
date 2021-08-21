import { createSlice } from "@reduxjs/toolkit";
import {
  loadUser,
  loginUserAPI,
  logoutUserAPI,
  registerNewUser,
  updateUserDetailsAPI,
} from "../../utils/fakeUsers";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    ...loadUser(),
    // isAuth: localStorage.getItem("isAuth") | false,
    // email: localStorage.getItem("auth_email") | "",
    // name: localStorage.getItem("auth_name") | "",
    // address: localStorage.getItem("auth_addr") | "",
  },
  reducers: {
    toggleAuth: (state) => {
      state.auth = !state.auth;
      localStorage.setItem("isAuth", state.auth);
    },
    updateUserDetails: (state, action) => {
      //state = { ...state, ...action.payload };
      for (let key in action.payload) state[key] = action.payload[key];
      updateUserDetailsAPI(action.payload);
    },
    registerUser: (state, action) => {
      const { email, name, pass } = action.payload;
      const { status, statusMSG } = registerNewUser(email, {
        name,
        pass,
        addr: { street: "", city: "", state: "", pin: "", name: "" },
      });
      console.log(statusMSG);
      //alert(statusMSG);
      if (!status) {
        state.isAuth = true;
        state.email = email;
        state.name = name;
        //state.addr = addr;
        //state = { ...state, ...action.payload };
      }
    },
    loginUser: (state, action) => {
      const { email, pass } = action.payload;
      const { status, statusMSG, user } = loginUserAPI(email, pass);
      console.log(statusMSG);
      //alert(statusMSG);
      if (!status) {
        const { name, addr } = user;
        state.isAuth = true;
        state.email = email;
        state.name = name;
        state.addr = addr;
      }
    },
    logOutUser: (state, action) => {
      const { status, statusMSG } = logoutUserAPI();
      console.log(statusMSG);
      if (!status) {
        state.isAuth = false;
        state.email = "";
        state.name = "";
        state.addr = { street: "", city: "", state: "", pin: "", name: "" };
      }
      //alert(statusMSG);
    },
    // setAuthName: (state, action) => {
    //   state.name = action.payload;
    //   localStorage.setItem("auth_name", state.name);
    // },
    // setAuthEmail: (state, action) => {
    //   state.email = action.payload;
    //   localStorage.setItem("auth_email", state.email);
    // },
    // setAuthAddress: (state, action) => {
    //   state.address = action.payload;
    //   localStorage.setItem("auth_addr", state.address);
    // },
  },
});

export const {
  toggleAuth,
  registerUser,
  loginUser,
  logOutUser,
  updateUserDetails,
} = AuthSlice.actions;
export default AuthSlice.reducer;
