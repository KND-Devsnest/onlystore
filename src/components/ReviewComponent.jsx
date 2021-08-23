import React from "react";
import UiModal from "./UiModal";
import { TextareaAutosize, Button, TextField } from "@material-ui/core";
import { loadReview, saveReview } from "../utils/reviewUtils";
import { useState } from "react";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, triggerSnackbar } from "../store/slices/uiSlice";
import { useEffect } from "react";
const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "block",
  },
  content: {
    display: "block",
    width: "100%",
    height: "auto",
  },
  rating: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  saveBtn: {
    marginTop: "1rem",
  },
  quitBtn: {
    marginTop: "1rem",
    marginLeft: "1rem",
  },
}));
const ReviewComponent = ({ setReviews }) => {
  const [textarea, setTextArea] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const paramId = useSelector((state) => state.ui.reviewModal);

  const currentUser = useSelector((state) => state.auth);
  useEffect(() => {
    const reviews = loadReview(paramId);

    if (reviews) {
      if (reviews[currentUser.email]) {
        setTextArea(reviews[currentUser.email].payload.content);
        setTitle(reviews[currentUser.email].payload.title);
        setRating(reviews[currentUser.email].payload.rating);
      } else {
        setTextArea("");
        setTitle("");
        setRating(1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramId]);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <UiModal>
      <div className="addreview">
        <h1>Write a Review</h1>
        <TextField
          value={title}
          className={classes.title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="Write a Title"
          variant="outlined"
        />

        <Rating
          name="Rating feedback"
          value={rating}
          className={classes.rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <TextareaAutosize
          className={classes.content}
          value={textarea}
          minRows={10}
          onChange={(e) => setTextArea(e.target.value)}
        />
        <Button
          onClick={() => {
            if (setReviews) {
              setReviews(
                saveReview(paramId, currentUser.email, currentUser.name, {
                  title: title,
                  rating: rating,
                  content: textarea,
                })
              );
            } else
              saveReview(paramId, currentUser.email, currentUser.name, {
                title: title,
                rating: rating,
                content: textarea,
              });

            dispatch(
              triggerSnackbar({
                severity: "success",
                message: "Review Saved Successfully",
              })
            );
            dispatch(closeModal());
          }}
          variant="contained"
          className={classes.saveBtn}
          color="primary"
        >
          Save
        </Button>
        <Button
          onClick={() => {
            dispatch(closeModal());
          }}
          variant="outline"
          className={classes.quitBtn}
          color="primary"
        >
          Quit
        </Button>
      </div>
    </UiModal>
  );
};
export default ReviewComponent;
