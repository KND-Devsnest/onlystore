import { loadReview } from "../../utils/reviewUtils";
import { Paper } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Tooltip } from "@material-ui/core";
import { triggerModal } from "../../store/slices/uiSlice";
import ReviewComponent from "../ReviewComponent";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginLeft: "1rem",
  },
  reviewContainer: {
    marginBottom: "1rem",
    padding: "1rem",
  },
  user: {
    display: "inline-block",
  },
  title: {
    marginTop: "0.25rem",
  },
  imgContainer: {
    display: "inline-block",
  },
  reviewContent: {
    marginTop: "1rem",
  },
  buttonEdit: {
    marginBottom: "1rem",
  },
}));
const Reviews = ({ paramId, reviews }) => {
  const classes = useStyles();
  const [userReviews, setReviews] = useState(loadReview(paramId));

  const currentUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>Reviews</h1>
      {currentUser.email ? (
        <>
          <Button
            onClick={() => dispatch(triggerModal())}
            variant="contained"
            className={classes.buttonEdit}
            color="primary"
          >
            Edit
          </Button>
          <ReviewComponent
            currentUser={currentUser}
            setReviews={setReviews}
            paramId={paramId}
          ></ReviewComponent>{" "}
        </>
      ) : (
        ""
      )}

      <div className="review">
        {userReviews
          ? Object.keys(userReviews).map((el, index) => (
              <Paper className={classes.reviewContainer} key={index}>
                <div className="review" key={el}>
                  <h3 className={classes.user}>{userReviews[el].name}</h3>
                  <h2 className={classes.title}>
                    {userReviews[el].payload.title}
                  </h2>
                  <Tooltip
                    title={`Rating: ${userReviews[el].payload.rating} out of 5`}
                  >
                    <div className={classes.imgContainer}>
                      <Rating
                        className={classes.ratings}
                        name="half-rating"
                        defaultValue={userReviews[el].payload.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                    </div>
                  </Tooltip>
                  <div className={classes.reviewContent}>
                    {userReviews[el].payload.content}
                  </div>
                </div>
              </Paper>
            ))
          : ""}
      </div>
      <div className="review">
        {reviews
          ? reviews.map((el, index) => (
              <Paper key={index} className={classes.reviewContainer}>
                <div className={classes.reviewContainer} key={index}>
                  <h3 className={classes.user}>{el.name}</h3>
                  <h2 className={classes.title}>{el.title}</h2>
                  <Tooltip title={`Rating: ${el.rating} out of 5`}>
                    <div className={classes.imgContainer}>
                      <Rating
                        name="half-rating"
                        defaultValue={parseInt(el.rating)}
                        size="small"
                        readOnly
                      />{" "}
                    </div>
                  </Tooltip>
                  <div className={classes.reviewContent}>{el.content}</div>
                </div>
              </Paper>
            ))
          : ""}
      </div>
    </Container>
  );
};

export default Reviews;
