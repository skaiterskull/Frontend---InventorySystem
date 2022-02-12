import React from "react";
import ProductList from "../productList/ProductList";
import SearchBar from "../searchBar/SearchBar";
import "./findProduct.css";

const FindProduct = () => {
  return (
    <div className="find-product">
      <h3>Find Product</h3>
      <div className="search-bar">
        <SearchBar />
      </div>
      <ProductList />
    </div>
  );
};

export default FindProduct;
