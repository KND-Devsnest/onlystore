import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import startFakeBackend from "./utils/fakeFetch";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F1F1F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FEDD0A",
      contrastText: "#000",
    },
    background: {
      default: "#EBEBEB",
      paper: "#EBEBEB",
    },
  },
});

startFakeBackend();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
