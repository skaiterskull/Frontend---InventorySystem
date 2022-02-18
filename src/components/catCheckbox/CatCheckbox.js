import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCat } from "../addCatForm/catAction";
import CustomCheckbox from "../customCheckbox/CustomCheckbox";
import "./catCheckbox.css";

const CatCheckbox = ({ handleOnChange, productCatId }) => {
  const { allCategories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCat());
  }, [dispatch]);

  return (
    <div className="cat-checkbox">
      <p>Select Category</p>
      <CustomCheckbox
        data={allCategories}
        name="category"
        handleOnChange={handleOnChange}
        _id={productCatId}
      />
    </div>
  );
};

export default CatCheckbox;
