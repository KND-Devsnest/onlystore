export const loadReview = (productId = null) => {
  if (!productId)
    return "Error while loading reviews productId is null or undefined";
  return JSON.parse(localStorage.getItem("review_" + productId));
};
export const saveReview = (productId, currentUser = null, payload = null) => {
  if (!currentUser)
    return "Error while saving review USER is null or undefined";
  let reviewObject = JSON.parse(localStorage.getItem("review_" + productId));
  if (!reviewObject) reviewObject = {};
  reviewObject[currentUser] = payload;
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
