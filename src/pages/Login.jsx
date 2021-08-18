import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../store/slices/authSlice";
import { loadCartItem } from "../store/slices/cartSlice";
const Login = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    email: "",
    pass: "",
  });
  console.log(isAuth);
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userDetails));
    dispatch(loadCartItem(userDetails.email));
  };
  if (isAuth) return <Redirect to="/" />;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Login</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="pass"
          label="Password"
          type="password"
          variant="outlined"
          onChange={handleChange}
        />
        <Button type="submit" color="primary" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
