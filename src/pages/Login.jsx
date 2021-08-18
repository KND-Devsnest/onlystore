import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../store/slices/authSlice";

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
  submitButton: { margin: theme.spacing(1) },
}));

const Login = ({ redirect, callback }) => {
  const styles = useStyles();
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
    if (callback) callback();
    dispatch(loginUser(userDetails));
  };
  if (redirect && isAuth) return <Redirect to="/" />;
  return (
    <div className={styles.root}>
      <Typography variant="h4">Login</Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          className={styles.textfield}
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          className={styles.textfield}
          fullWidth
          id="pass"
          label="Password"
          type="password"
          variant="filled"
          onChange={handleChange}
        />
        <Button
          className={styles.submitButton}
          type="submit"
          color="primary"
          variant="contained"
          size="large"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
