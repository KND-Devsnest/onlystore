import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { hideSnackbar } from "../store/slices/uiSlice";

// To use this snackbar to show a message response to the user.
// Usage: Dispatch the triggerSnackbar action with {severity, message} as payload to show the snackbar.
// Types of Severities are: "info", "success", ""error", "warning"

//eg. dispatch(triggerSnackbar({severity: "success", message: "This is a success message"}));

const GlobalSnackbar = () => {
  const { showSnackbar, severity, message } = useSelector(
    (state) => state.ui.snackbar
  );
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    dispatch(hideSnackbar());
  };
  return (
    <Snackbar
      open={showSnackbar}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Alert variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;
