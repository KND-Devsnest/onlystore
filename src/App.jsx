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
import OrdersPage from "./pages/OrdersPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
