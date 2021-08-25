import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../store/slices/authSlice";
import { loadCartItem } from "../store/slices/cartSlice";
import { triggerSnackbar } from "../store/slices/uiSlice";
import { loadWishListItem } from "../store/slices/wishlistSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  form: {
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: (props) => (props.isPage ? "40%" : "100%"),
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

const Login = ({ redirect, callback, isPage }) => {
  const classes = useStyles({ isPage });
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    email: "",
    pass: "",
    error: false,
  });
  const handleChange = (e) => {
    if (userDetails.error)
      setUserDetails({
        ...userDetails,
        [e.target.id]: e.target.value,
        error: false,
      });
    else setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.email === "" || userDetails.pass === "") {
      setUserDetails({ ...userDetails, error: true });
      dispatch(
        triggerSnackbar({
          severity: "error",
          message: "Fill Valid Credentials!",
        })
      );
      return;
    }
    callback();
    dispatch(loginUser(userDetails));
  };
  if (redirect && isAuth) {
    dispatch(loadCartItem(userDetails.email));
    dispatch(loadWishListItem(userDetails.email));
    return <Redirect to="/" />;
  }
  return (
    <Container maxWidth="md" className={classes.root}>
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
          error={userDetails.error}
          helperText={userDetails.error ? "Enter valid Username" : ""}
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
          helperText={userDetails.error ? "Enter valid Password" : ""}
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
          <Link to="/register">
            <Button variant="outlined" color="primary">
              Register
            </Button>
          </Link>
        </div>
      </form>
    </Container>
  );
};

Login.defaultProps = {
  callback: () => {},
  redirect: true,
  isPage: true,
};

export default Login;
