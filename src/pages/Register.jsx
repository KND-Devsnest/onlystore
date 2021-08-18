import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../store/slices/authSlice";

const Register = () => {
  const { isAuth, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    addr: "",
    pass: "",
  });
  console.log(isAuth, email);
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userDetails));
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
      <Typography variant="h3">Register</Typography>
      <form
        noValidate
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
        <TextField
          id="name"
          label="Name"
          type="text"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="addr"
          label="Address"
          type="text"
          variant="outlined"
          onChange={handleChange}
        />
        <Button type="submit" color="primary" variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
