import { loadReview, saveReview } from "../../utils/reviewUtils";
import { TextareaAutosize } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import React from "react";

const Reviews = ({ paramId }) => {
  const [textarea, setTextArea] = useState("");
  const [reviews, setReviews] = useState(loadReview(paramId));
  const currentUser = useSelector((state) => state.auth.email);

  return (
    <div>
      <div className="addreview">
        <TextareaAutosize
          value={textarea}
          onChange={(e) => setTextArea(e.target.value)}
        />
        <button
          onClick={() => setReviews(saveReview(paramId, currentUser, textarea))}
        >
          Add Review
        </button>
      </div>
      <div className="review">
        {reviews
          ? Object.keys(reviews).map((el) => (
              <div className="review" key={el}>
                <div className="user">{el}</div>
                <div className="review-body">{reviews[el]}</div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Reviews;
