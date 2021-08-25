import { makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    minHeight: "100vh",
  },
  footer: {
    marginTop: "auto",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      {children}
      <Footer rootClass={classes.footer} />
    </div>
  );
};

export default Layout;
