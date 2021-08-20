import { round10 } from "./decimalAdjust";
export const loadReview = (productId = null) => {
  if (!productId)
    return "Error while loading reviews productId is null or undefined";
  return JSON.parse(localStorage.getItem("review_" + productId));
};
export const saveReview = (
  productId,
  currentUser = null,
  name = null,
  payload = null
) => {
  if (!currentUser)
    return "Error while saving review USER is null or undefined";
  let reviewObject = JSON.parse(localStorage.getItem("review_" + productId));
  if (!reviewObject) reviewObject = {};
  reviewObject[currentUser] = { name: name, payload };
  localStorage.setItem("review_" + productId, JSON.stringify(reviewObject));

  return reviewObject;
};

export const deleteReview = (productId, currentUser = null) => {
  if (!currentUser)
    return "Error while deleting review USER is null or undefined";
  let reviewObject = JSON.parse(localStorage.getItem("review_" + productId));
  if (!reviewObject) return "No reviews";
  if (reviewObject[currentUser]) delete reviewObject[currentUser];
  else return "that user has no reviews";
  localStorage.setItem("review_" + productId, JSON.stringify(reviewObject));
  return reviewObject;
};

export const calculateRatings = (currentProduct) => {
  let ratings = 1000 + currentProduct.reviews.length;
  let { calculatedRating, count: userReviews } =
    calculateRatingsObjectCountHelper(
      loadReview(currentProduct.id),
      currentProduct.rating,
      ratings
    );
  return {
    count: currentProduct.reviews.length + userReviews,
    rating: calculatedRating,
  };
};
function calculateRatingsObjectCountHelper(reviews, rating, ratings) {
  let totalRating = Math.round(rating * ratings);
  let count = 0,
    tempRating = 0;

  for (let i in reviews) {
    tempRating += reviews[i].payload.rating;
    count += 1;
  }

  totalRating += tempRating;
  return {
    calculatedRating: round10(totalRating / (ratings + count), -1),
    count: count,
  };
}
