import React, { useState } from "react";
import ProductList from "../productList/ProductList";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import "./findProduct.css";

const FindProduct = () => {
  const [showAll, setShowAll] = useState(false);
  const { productInSearch } = useSelector((state) => state.product);

  const show = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="find-product">
      <h3>Find Product</h3>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div>
        <ProductList showAll={showAll} />
      </div>
      <div className="search-info">
        {productInSearch.length} products found.
        {productInSearch.length > 10 && (
          <span className="view-all" onClick={show}>
            {showAll ? " <<< Show Less" : " Show All >>>"}
          </span>
        )}
      </div>
    </div>
  );
};

export default FindProduct;
