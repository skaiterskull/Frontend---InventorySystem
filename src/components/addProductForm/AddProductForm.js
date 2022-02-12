import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../button/Button";
import CatCheckbox from "../catCheckbox/CatCheckbox";
import InputText from "../inputText/InputText";
import SupplierCheckbox from "../supplierCheckbox/SupplierCheckbox";
import "./addProductForm.css";
import { addProduct } from "./productAction";

const initialState = {
  plu: "",
  name: "",
  buyPrice: "",
  sellPrice: "",
};

const AddProductForm = () => {
  const [productInfo, setProductInfo] = useState(initialState);
  const [productCat, setProductCat] = useState([]);
  const [productSupplier, setProductSupplier] = useState([]);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    if (checked && name === "category") {
      return setProductCat([...productCat, value]);
    }

    if (!checked && name === "category") {
      const array = productCat.filter((data) => data !== value);
      return setProductCat(array);
    }

    if (checked && name === "supplier") {
      return setProductSupplier([...productSupplier, value]);
    }

    if (!checked && name === "supplier") {
      const array = productSupplier.filter((data) => data !== value);
      return setProductSupplier(array);
    }

    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ...productInfo,
      category: productCat,
      supplier: productSupplier,
    };
    dispatch(addProduct(obj));
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
      name: "sellPrice",
      placeholder: "Sale Price",
      onChange: handleOnChange,
    },
  ];
  return (
    <div className="addProduct-form">
      <h3>Register Product</h3>
      <form onSubmit={handleOnSubmit}>
        {inputText.map((value, i) => (
          <InputText key={i} props={value} />
        ))}
        <div className="checkbox-div">
          <CatCheckbox handleOnChange={handleOnChange} />
          <SupplierCheckbox handleOnChange={handleOnChange} />
        </div>

        <Button type="submit" text="Register" />
      </form>
    </div>
  );
};

export default AddProductForm;
