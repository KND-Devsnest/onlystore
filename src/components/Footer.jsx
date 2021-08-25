import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 6),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  links: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing(5),
    "& > li": {
      cursor: "pointer",
    },
  },
  copyright: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
    cursor: "pointer",
  },
}));

const Footer = ({ rootClass }) => {
  const classes = useStyles();
  return (
    <div className={rootClass}>
      <Container maxWidth="xl" className={classes.root}>
        <Box>
          <Typography
            variant="h5"
            color="inherit"
            style={{ marginBottom: "1rem" }}
            gutterBottom
          >
            Categories
          </Typography>
          <ul className={classes.links}>
            <Link to="/search/mobiles">
              <li>Mobiles</li>
            </Link>
            <Link to="/search/books">
              <li>Books</li>
            </Link>
            <Link to="/search/furniture">
              <li>Furniture</li>
            </Link>
            <Link to="/search/clothings">
              <li>Clothings</li>
            </Link>
            <Link to="/search/beauty">
              <li>Beauty</li>
            </Link>
          </ul>
        </Box>
        <Link to="/">
          <Box className={classes.copyright}>
            <LogoIcon fontSize="large" />
            <Typography>onlyStore.com</Typography>
          </Box>
        </Link>
      </Container>
    </div>
  );
};

export default Footer;
