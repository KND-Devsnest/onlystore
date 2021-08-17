import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Current product details here</div>;
};

export default ProductDetails;
