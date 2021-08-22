import { triggerSnackbar } from "../store/slices/uiSlice";
import store from "../store/store";

export const triggerSnackbarFromUtil = (severity, message) => {
  store.dispatch(triggerSnackbar({ severity, message }));
};
