import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { HashRouter as Router } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F1F1F",
      contractText: "#ffffff",
    },
    secondary: {
      main: "#FEDD0A",
      contrastText: "#000",
    },
    background: {
      default: "#EBEBEB",
      paper: "#fff",
    },
  },
});

//startFakeBackend();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
