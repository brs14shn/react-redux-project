import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "../components/ProductComponents";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await fetch
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });

    dispatch(setProducts(response?.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);

  return (
    <div>
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
