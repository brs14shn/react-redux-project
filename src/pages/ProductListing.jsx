import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  console.log(products);

  return <div>ProductListing</div>;
};

export default ProductListing;
