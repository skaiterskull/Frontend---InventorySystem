import React, { useState } from "react";
import Button from "../button/Button";
import InputText from "../inputText/InputText";
import { useDispatch } from "react-redux";
import "./addSupplierForm.css";
import { addSupplier } from "./supplierAction";

const initialState = {
  name: "",
  address: "",
  phone: "",
};

const AddSupplierFrom = () => {
  const [obj, setObj] = useState(initialState);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addSupplier(obj));
  };

  const inputText = [
    {
      type: "text",
      name: "name",
      placeholder: "Supplier name",
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "address",
      placeholder: "Address",
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Phone number",
      onChange: handleOnChange,
    },
  ];

  return (
    <div className="addSupplier-form">
      <h3>Register Supplier</h3>
      <form onSubmit={handleOnSubmit}>
        {inputText.map((value, i) => (
          <InputText key={i} props={value} />
        ))}
        <Button type="submit" text="Register" />
      </form>
    </div>
  );
};

export default AddSupplierFrom;
