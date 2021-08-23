import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loadUser,
  loginUserAPI,
  logoutUserAPI,
  registerUserAPI,
  updateUserDetailsAPI,
} from "../../utils/fakeUsers";
import { clearCart, loadCartItem } from "./cartSlice";
import { loadOrders } from "./orderSlice";
import { triggerSnackbar } from "./uiSlice";
import { clearWishlist, loadWishListItem } from "./wishlistSlice";

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
    thunkAPI.dispatch(loadCartItem(email));
    thunkAPI.dispatch(loadOrders(email));
    thunkAPI.dispatch(loadWishListItem(email));
    return { email, status, ...user };
  }
);

export const logOutUser = createAsyncThunk("auth/logout", (_, thunkAPI) => {
  const { status, statusMSG } = logoutUserAPI();
  console.log(statusMSG);
  thunkAPI.dispatch(clearCart({ clear: false }));
  thunkAPI.dispatch(clearWishlist());
  thunkAPI.dispatch(
    triggerSnackbar({
      severity: status ? "error" : "success",
      message: statusMSG,
    })
  );
  return { status };
});

export const registerUser = createAsyncThunk(
  "auth/register",
  ({ email, name, pass }, thunkAPI) => {
    const { status, statusMSG } = registerUserAPI(email, {
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
    thunkAPI.dispatch(loadCartItem(email));
    return { email, name, status };
  }
);

export const updateUserDetails = createAsyncThunk(
  "auth/updateUserDetails",
  (payload, thunkAPI) => {
    const { status, statusMSG } = updateUserDetailsAPI(payload);
    thunkAPI.dispatch(
      triggerSnackbar({
        severity: status ? "error" : "success",
        message: statusMSG,
      })
    );
    return { status, details: { payload } };
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
      }
    },
    [updateUserDetails.fulfilled]: (state, { payload }) => {
      const { status, details } = payload;
      if (!status) for (let key in details) state[key] = details[key];
    },
  },
});

export const { toggleAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
