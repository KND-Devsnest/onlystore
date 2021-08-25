import React, { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FullCart from "./pages/FullCart";
import Register from "./pages/Register";
import Cart from "./components/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import GlobalSnackbar from "./components/GlobalSnackbar";
import SearchResults from "./pages/SearchResults";
import { loadOrders } from "./store/slices/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadCartItem } from "./store/slices/cartSlice";
import MyAccount from "./pages/MyAccount";
import { loadWishListItem } from "./store/slices/wishlistSlice";
import Wishlist from "./components/Wishlist";
import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.email);
  const location = useLocation();
  useEffect(() => {
    if (currentUser) {
      dispatch(loadCartItem(currentUser));
      dispatch(loadOrders(currentUser));
      dispatch(loadWishListItem(currentUser));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Layout>
        <Cart isFromDrawer />
        <Wishlist isFromDrawer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/orders">
            <Orders />
          </ProtectedRoute>
          <ProtectedRoute exact path="/product/:id">
            <ProductDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/cart">
            <FullCart />
          </ProtectedRoute>
          <Route exact path="/search/:query?" component={SearchResults} />
          <Route exact path="/placeorder" component={PlaceOrder} />
          <Route exact path="/account" component={MyAccount} />
          {/* <Route exact path="/wishlist" component={Wishlist} /> */}
          <Redirect to="/" />
        </Switch>
        <GlobalSnackbar />
      </Layout>
    </div>
  );
}

export default App;
