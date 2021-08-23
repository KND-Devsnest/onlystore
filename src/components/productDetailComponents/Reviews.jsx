import { loadReview } from "../../utils/reviewUtils";
import { Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    width: "100%",
    marginTop: theme.spacing(2),
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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(0, 2),
  },
  user: {
    display: "inline-block",
    padding: theme.spacing(2, 0, 0, 0),
  },
  title: {
    marginTop: theme.spacing(1),
  },
  imgContainer: {
    display: "inline-block",
  },
  reviewContent: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(0, 0, 3, 0),
  },
}));
const Reviews = ({ paramId, reviews }) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [userReviews, setReviews] = useState(loadReview(paramId));

  return (
    <Container className={classes.root}>
      <Typography variant="h4">Reviews</Typography>
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
                        value={userReviews[el].payload.rating}
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
                        value={parseInt(el.rating)}
                        size="small"
                        readOnly
                      />
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
