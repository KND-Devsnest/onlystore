import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../store/slices/authSlice";
import { loadCartItem } from "../store/slices/cartSlice";
import { loadWishListItem } from "../store/slices/wishlistSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  form: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textfield: {
    margin: theme.spacing(2),
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  submitButton: { margin: theme.spacing(1) },
}));

const Login = ({ redirect, callback }) => {
  const classes = useStyles();
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
    if (userDetails.email === "" || userDetails.pass === "") {
      alert("Please fill Proper Credentials!");
      return;
    }
    callback();
    dispatch(loginUser(userDetails));
    dispatch(loadCartItem(userDetails.email));
    dispatch(loadWishListItem(userDetails.email))
  };
  if (redirect && isAuth) return <Redirect to="/" />;
  return (
    <div className={classes.root}>
      <Typography variant="h4">Login</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textfield}
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          className={classes.textfield}
          fullWidth
          id="pass"
          label="Password"
          type="password"
          variant="filled"
          onChange={handleChange}
        />
        <div className={classes.actions}>
          <Button
            className={classes.submitButton}
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            Login
          </Button>
          <Button variant="outlined" color="primary">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

Login.defaultProps = {
  callback: () => {
    console.log("default");
  },
  redirect: true,
};

export default Login;
