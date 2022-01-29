import React, { useState } from "react";
import Button from "../button/Button";
import InputText from "../inputText/InputText";
import "./addCatForm.css";
import { useDispatch } from "react-redux";
import { addCat } from "./catAction";

const initialState = {
  name: "",
};

const AddCatForm = () => {
  const [cat, setCat] = useState(initialState);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCat({ ...cat, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addCat(cat));
  };

  const inputText = [
    {
      type: "text",
      name: "name",
      placeholder: "Category name",
      onChange: handleOnChange,
    },
  ];
  return (
    <div className="addCat-form">
      <h3>Register Category</h3>
      <small>
        Please enter the name of the new category and click "Register".
        Remember, the category name must be unique!
      </small>
      <form onSubmit={handleOnSubmit}>
        {inputText.map((value, i) => (
          <InputText key={i} props={value} />
        ))}
        <Button type="submit" text="Register" />
      </form>
    </div>
  );
};

export default AddCatForm;
