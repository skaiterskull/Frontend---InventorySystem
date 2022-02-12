import React from "react";
import "./customCheckbox.css";

const CustomCheckbox = ({ data, name, handleOnChange }) => {
  return (
    <div className="custom-checkbox">
      {data.length ? (
        data.map((value, i) => (
          <label className="label-checkbox" key={value._id}>
            {value.name}
            <input
              type="checkbox"
              name={name}
              value={value._id}
              onChange={handleOnChange}
            />
            <span className="checkmark"></span>
          </label>
        ))
      ) : (
        <label className="label-checkbox">No options available</label>
      )}
    </div>
  );
};

export default CustomCheckbox;
