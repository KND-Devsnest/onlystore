import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { registerUser } from "../store/slices/authSlice";
import { loadCartItem } from "../store/slices/cartSlice";
import { triggerSnackbar } from "../store/slices/uiSlice";
import { loadWishListItem } from "../store/slices/wishlistSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
    minHeight: "70vh",
  },
  form: {
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
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

const Register = () => {
  const classes = useStyles();
  const { isAuth, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    pass: "",
    error: false,
  });
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.id]: e.target.value,
      error: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, pass } = userDetails;
    if (name === "" || email === "" || pass === "") {
      setUserDetails({ ...userDetails, error: true });
      dispatch(
        triggerSnackbar({
          severity: "error",
          message: "Enter Valid Credentials!",
        })
      );
      return;
    }
    dispatch(registerUser(userDetails));
    dispatch(loadCartItem(userDetails.email));
    dispatch(loadWishListItem(userDetails.email));
  };
  if (isAuth) return <Redirect to="/" />;
  return (
    <div className={classes.root}>
      <Typography variant="h4">Register</Typography>
      <form noValidate className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textfield}
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="filled"
          onChange={handleChange}
          error={userDetails.error}
        />
        <TextField
          className={classes.textfield}
          fullWidth
          id="pass"
          label="Password"
          type="password"
          variant="filled"
          onChange={handleChange}
          error={userDetails.error}
        />
        <TextField
          className={classes.textfield}
          fullWidth
          id="name"
          label="Name"
          type="text"
          variant="filled"
          onChange={handleChange}
          error={userDetails.error}
        />
        <div className={classes.actions}>
          <Button
            className={classes.submitButton}
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            Register
          </Button>
          <Link to="/login">
            <Button variant="outlined" color="primary">
              Login Instead
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
