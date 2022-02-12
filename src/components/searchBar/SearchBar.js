import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductByName } from "../addProductForm/productAction";
import { productNotFound } from "../addProductForm/productSlice";
import InputText from "../inputText/InputText";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { productInSearch } = useSelector((state) => state.product);
  console.log(productInSearch);

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (value === "") {
      dispatch(productNotFound());
      return;
    }
    dispatch(findProductByName({ name: value.toLowerCase() }));
  };

  const props = {
    type: "text",
    placeholder: "Product Keyword",
    onChange: handleOnChange,
  };

  return (
    <div>
      <InputText props={props} />
    </div>
  );
};

export default SearchBar;
