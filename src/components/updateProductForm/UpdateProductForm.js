import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../addProductForm/productAction";
import Button from "../button/Button";
import CatCheckbox from "../catCheckbox/CatCheckbox";
import InputText from "../inputText/InputText";
import SupplierCheckbox from "../supplierCheckbox/SupplierCheckbox";
import "./updateProductForm.css";

const UpdateProductForm = () => {
  const { selectedProduct } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const initialState = {
    _id: selectedProduct._id,
    name: selectedProduct.name,
    isActive: true,
    buyPrice: selectedProduct.buyPrice,
    sellPrice: selectedProduct.sellPrice,
  };

  const [toUpdate, setToUpdate] = useState(initialState);
  const [toUpdateCat, setToUpdateCat] = useState(selectedProduct.category);
  const [toUpdateSupplier, setToUpdateSupplier] = useState(
    selectedProduct.supplier
  );

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    if (checked && name === "category") {
      return setToUpdateCat([...toUpdateCat, value]);
    }

    if (!checked && name === "category") {
      const array = toUpdateCat.filter((data) => data !== value);
      return setToUpdateCat(array);
    }

    if (checked && name === "supplier") {
      return setToUpdateSupplier([...toUpdateSupplier, value]);
    }

    if (!checked && name === "supplier") {
      const array = toUpdateSupplier.filter((data) => data !== value);
      return setToUpdateSupplier(array);
    }

    setToUpdate({ ...toUpdate, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ...toUpdate,
      category: toUpdateCat,
      supplier: toUpdateSupplier,
    };

    dispatch(updateProduct(obj));
  };

  const inputText = [
    {
      type: "text",
      name: "plu",
      disabled: true,
      placeholder: selectedProduct.plu,
      defaultValue: selectedProduct.plu,
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "name",
      placeholder: selectedProduct.name,
      defaultValue: selectedProduct.name,
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "buyPrice",
      placeholder: selectedProduct.buyPrice,
      defaultValue: selectedProduct.buyPrice,
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "sellPrice",
      placeholder: selectedProduct.sellPrice,
      defaultValue: selectedProduct.sellPrice,
      onChange: handleOnChange,
    },
  ];
  return (
    <div className="update-product-form">
      <h3>Update Product</h3>
      <h5>{`Selected product is "${selectedProduct.name}"`}</h5>
      {selectedProduct?._id ? (
        <form onSubmit={handleOnSubmit}>
          {inputText.map((value, i) => (
            <InputText key={i} props={value} />
          ))}
          <div className="update-product-checkbox">
            <CatCheckbox
              productCatId={selectedProduct.category}
              handleOnChange={handleOnChange}
            />
            <SupplierCheckbox
              productSupId={selectedProduct.supplier}
              handleOnChange={handleOnChange}
            />
          </div>
          <Button type="submit" text="Update" />
        </form>
      ) : (
        <div>Please select product from find product tab</div>
      )}
    </div>
  );
};

export default UpdateProductForm;
