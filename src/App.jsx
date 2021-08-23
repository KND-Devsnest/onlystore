import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
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

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.email);
  useEffect(() => {
    if (currentUser) {
      dispatch(loadCartItem(currentUser));
      dispatch(loadOrders(currentUser));
      dispatch(loadWishListItem(currentUser));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router>
        <Cart isFromDrawer />
        <Wishlist isFromDrawer />
        <Navbar />
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
      </Router>
    </div>
  );
}

export default App;
