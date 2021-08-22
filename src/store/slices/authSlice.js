import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loadUser,
  loginUserAPI,
  logoutUserAPI,
  registerNewUser,
  updateUserDetailsAPI,
} from "../../utils/fakeUsers";
import { triggerSnackbar } from "./uiSlice";

export const loginUser = createAsyncThunk(
  "auth/login",
  ({ email, pass }, thunkAPI) => {
    const { status, statusMSG, user } = loginUserAPI(email, pass);
    console.log(statusMSG);
    thunkAPI.dispatch(
      triggerSnackbar({
        severity: status ? "error" : "success",
        message: statusMSG,
      })
    );
    return { email, status, ...user };
    //alert(statusMSG);
  }
);

export const logOutUser = createAsyncThunk("auth/logout", (_, thunkAPI) => {
  const { status, statusMSG } = logoutUserAPI();
  console.log(statusMSG);
  if (!status) {
    thunkAPI.dispatch(
      triggerSnackbar({
        severity: "success",
        message: statusMSG,
      })
    );
    return { status };
  }
});

export const registerUser = createAsyncThunk(
  "auth/register",
  ({ email, name, pass }, thunkAPI) => {
    //const { email, name, pass } = action.payload;
    const { status, statusMSG } = registerNewUser(email, {
      name,
      pass,
      addr: { street: "", city: "", state: "", pin: "", name: "" },
    });
    console.log(statusMSG);
    thunkAPI.dispatch(
      triggerSnackbar({
        severity: status ? "error" : "success",
        message: statusMSG,
      })
    );
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    ...loadUser(),
    authError: false,
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
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      const { email, name, addr, status } = action.payload;
      if (!status) {
        state.isAuth = true;
        state.email = email;
        state.name = name;
        state.addr = addr;
      }
    },
    [logOutUser.fulfilled]: (state, action) => {
      if (!action.payload.status) {
        state.isAuth = false;
        state.email = "";
        state.name = "";
        state.addr = { street: "", city: "", state: "", pin: "", name: "" };
      }
    },
    [registerUser.fulfilled]: (state, action) => {
      const { email, name, status } = action.payload;
      if (!status) {
        state.isAuth = true;
        state.email = email;
        state.name = name;
        //state.addr = addr;
        //state = { ...state, ...action.payload };
      }
    },
  },
});

export const { toggleAuth, updateUserDetails } = AuthSlice.actions;
export default AuthSlice.reducer;
