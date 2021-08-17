import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menuButton}></div>
          <Link to="/" className={classes.title}>
            OnlyStore
          </Link>
          <div style={{ display: "flex" }}>
            <Link to="/orders" style={{ marginRight: "1rem" }}>
              ❤
            </Link>
            <div>🛒</div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
