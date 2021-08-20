import { loadReview, saveReview } from "../../utils/reviewUtils";
import { TextareaAutosize } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import React from "react";

const Reviews = ({ paramId, reviews }) => {
  const [textarea, setTextArea] = useState("");
  const [userReviews, setReviews] = useState(loadReview(paramId));

  const currentUser = useSelector((state) => state.auth);
  return (
    <div>
      <div className="addreview">
        <TextareaAutosize
          value={textarea}
          onChange={(e) => setTextArea(e.target.value)}
        />
        <button
          onClick={() =>
            setReviews(
              saveReview(paramId, currentUser.email, currentUser.name, {
                title: "test-title",
                rating: 4,
                content: textarea,
              })
            )
          }
        >
          Add Review
        </button>
      </div>
      <div className="review">
        {userReviews
          ? Object.keys(userReviews).map((el) => (
              <div className="review" key={el}>
                <div className="user">{userReviews[el].name}</div>
                <div className="title">{userReviews[el].payload.title}</div>
                <div className="rating">
                  Rated {userReviews[el].payload.rating} out of 5
                </div>
                <div className="review-body">
                  {userReviews[el].payload.content}
                </div>
              </div>
            ))
          : ""}
      </div>
      <div className="review">
        {reviews
          ? reviews.map((el, index) => (
              <div className="review" key={index}>
                <div className="user">{el.name}</div>
                <div className="title">{el.title}</div>
                <div className="rating">Rated {el.rating} out of 5</div>
                <div className="review-body">{el.content}</div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Reviews;
