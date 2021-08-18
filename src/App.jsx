import { Typography } from "@material-ui/core";
import React from "react";
import "./assets/App.css";
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

function App() {
  return (
    <div className="App">
      <Router>
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
