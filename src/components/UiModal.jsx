import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/slices/uiSlice";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "80vw",
    height: "auto",
  },
}));

export default function UiModal(props) {
  const classes = useStyles();
  const reviewModalVisible = !!useSelector((state) => state.ui.reviewModal);
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={reviewModalVisible}
        onClose={() => dispatch(closeModal())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={reviewModalVisible}>
          <div className={classes.paper}>{props.children}</div>
        </Fade>
      </Modal>
    </div>
  );
}
