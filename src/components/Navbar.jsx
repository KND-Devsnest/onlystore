import { Link, useLocation } from "react-router-dom";
import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Box,
  Grid,
  Container,
  Hidden,
  Tooltip,
} from "@material-ui/core";
import {
  Search as SearchIcon,
  AccountCircle,
  MoreVert as MoreIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  LocalShippingOutlined as LocalShippingOutlinedIcon,
  FavoriteBorderOutlined,
  HomeOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisible } from "../store/slices/cartSlice";
import { useHistory } from "react-router";
import { logOutUser } from "../store/slices/authSlice";
import LogoIcon from "./LogoIcon";
import { openWishlistDrawer } from "../store/slices/wishlistSlice";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    [theme.breakpoints.up("md")]: { height: theme.spacing(14) },
  },
  rightSide: {
    display: "flex",
    justifyContent: "flex-end",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  brand: {
    display: "none",
    flexGrow: "none",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      gap: 0,
    },
  },
  badge: {
    fontSize: "1.2rem",
  },
  searchBox: {
    flex: "0 1 auto",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  enter: {
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    padding: theme.spacing(0, 1),
    zIndex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100ch",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { isAuth } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const searchRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    if (!location.pathname.startsWith("/search")) {
      searchRef.current.value = "";
    }
  }, [location.pathname]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogOut = () => {
    handleMenuClose();
    dispatch(logOutUser());
    setTimeout(() => {
      history.push("/login");
    }, 200);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAuth ? (
        <div>
          <Link onClick={handleMenuClose} to="/account">
            <MenuItem>My Account</MenuItem>
          </Link>
          <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
        </div>
      ) : (
        <MenuItem>
          <Link onClick={handleMenuClose} to="/login">
            Log In
          </Link>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => history.push("/")}>
        <IconButton aria-label="Landing Page" color="inherit">
          <HomeOutlined />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem onClick={() => history.push("/cart")}>
        <IconButton aria-label="Cart of the User" color="inherit">
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={() => history.push("/orders")}>
        <IconButton aria-label="Orders of the User" color="inherit">
          <LocalShippingOutlinedIcon />
        </IconButton>
        <p>Orders</p>
      </MenuItem>
      <MenuItem onClick={() => history.push("/wishlist")}>
        <IconButton aria-label="Wishlist of the user" color="inherit">
          <FavoriteBorderOutlined />
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="xl">
            <Grid container alignItems={"center"}>
              <Hidden smUp>
                <Grid item xs={2}>
                  <Link to="/">
                    <LogoIcon />
                  </Link>
                </Grid>
              </Hidden>
              <Grid item xs={8} md={4}>
                <div className={classes.searchBox}>
                  <div className={classes.search}>
                    <InputBase
                      placeholder="Type to search"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          console.log(e.target.value);
                          history.push("/search/" + e.target.value);
                        }
                      }}
                      inputProps={{ "aria-label": "search", ref: searchRef }}
                    />
                    <Box
                      className={classes.enter}
                      zIndex="tooltip"
                      onClick={() =>
                        history.push("/search/" + searchRef.current.value)
                      }
                    >
                      <SearchIcon />
                    </Box>
                  </div>
                </div>
              </Grid>
              <Grid item md={4}>
                <Box
                  className={classes.brand}
                  onClick={() => history.push("/")}
                  style={location.pathname === "/" ? { display: "none" } : {}}
                >
                  <LogoIcon fontSize="large" />
                  <Typography className={classes.title} variant="h6" noWrap>
                    OnlyStore
                  </Typography>
                </Box>
              </Grid>
              {/* <div className={classes.grow} /> */}
              <Grid item md={4} className={classes.rightSide}>
                <div className={classes.sectionDesktop}>
                  <Tooltip title="Orders" color="primary" placement="bottom">
                    <IconButton
                      color="inherit"
                      onClick={() => history.push("/orders")}
                    >
                      <LocalShippingOutlinedIcon fontSize="medium" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Wishlist">
                    <IconButton
                      color="inherit"
                      onClick={() => dispatch(openWishlistDrawer())}
                    >
                      <FavoriteBorderOutlined fontSize="medium" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Account">
                    <IconButton
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle fontSize="medium" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Cart">
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() => dispatch(toggleVisible())}
                    >
                      <Badge
                        badgeContent={Object.keys(cartItems).length}
                        color="secondary"
                        className={classes.badge}
                      >
                        <ShoppingCartOutlinedIcon fontSize="medium" />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon fontSize="medium" />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
