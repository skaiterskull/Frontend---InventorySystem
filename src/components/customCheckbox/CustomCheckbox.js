import React from "react";
import "./customCheckbox.css";

const CustomCheckbox = ({ data, name, handleOnChange, _id }) => {
  return (
    <div className="custom-checkbox">
      {data.length ? (
        data.map((item, i) => (
          <label className="label-checkbox" key={item._id}>
            {item.name}
            <input
              type="checkbox"
              name={name}
              value={item._id}
              onChange={handleOnChange}
              defaultChecked={_id ? _id.includes(item._id) : false}
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
