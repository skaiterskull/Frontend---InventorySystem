import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCat } from "../addCatForm/catAction";
import "./catCheckbox.css";

const CatCheckbox = () => {
  const { allCategories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCat());
  }, [dispatch]);

  return (
    <div className="category-checkbox">
      <p>Select Category</p>

      {allCategories.length ? (
        allCategories.map((value, i) => (
          <label className="label-checkbox" key={value._id}>
            {value.name}
            <input type="checkbox" name="category" value={value.slug} />
            <span className="checkmark"></span>
          </label>
        ))
      ) : (
        <label className="label-checkbox">No options available</label>
      )}
    </div>
  );
};

export default CatCheckbox;
