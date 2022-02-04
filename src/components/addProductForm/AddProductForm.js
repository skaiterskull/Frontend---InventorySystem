import React from "react";
import Button from "../button/Button";
import CatCheckbox from "../catCheckbox/CatCheckbox";
import InputText from "../inputText/InputText";
import "./addProductForm.css";

const AddProductForm = () => {
  const handleOnChange = (e) => {
    // const { name, value } = e.target;
    // setCat({ ...cat, [name]: value });
  };
  const inputText = [
    {
      type: "text",
      name: "plu",
      placeholder: "PLU",
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "name",
      placeholder: "Product name",
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "buyPrice",
      placeholder: "Buy Price",
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "salePrice",
      placeholder: "Sale Price",
      onChange: handleOnChange,
    },
  ];
  return (
    <div className="addProduct-form">
      <h3>Register Product</h3>
      <form>
        {inputText.map((value, i) => (
          <InputText key={i} props={value} />
        ))}
        <CatCheckbox />
        <Button type="submit" text="Register" />
      </form>
    </div>
  );
};

export default AddProductForm;
