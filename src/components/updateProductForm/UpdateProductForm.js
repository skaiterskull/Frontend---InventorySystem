import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/Button";
import CatCheckbox from "../catCheckbox/CatCheckbox";
import InputText from "../inputText/InputText";
import SupplierCheckbox from "../supplierCheckbox/SupplierCheckbox";
import "./updateProductForm.css";

const UpdateProductForm = () => {
  const { selectedProduct } = useSelector((state) => state.product);
  const inputText = [
    {
      type: "text",
      name: "plu",
      placeholder: selectedProduct.plu,
      defaultValue: selectedProduct.plu,
      //   onChange: handleOnChange,
    },
    {
      type: "text",
      name: "name",
      placeholder: selectedProduct.name,
      defaultValue: selectedProduct.name,
      //   onChange: handleOnChange,
    },
    {
      type: "text",
      name: "buyPrice",
      placeholder: selectedProduct.buyPrice,
      defaultValue: selectedProduct.buyPrice,
      //   onChange: handleOnChange,
    },
    {
      type: "text",
      name: "sellPrice",
      placeholder: selectedProduct.sellPrice,
      defaultValue: selectedProduct.sellPrice,
      //   onChange: handleOnChange,
    },
  ];
  return (
    <div className="update-product-form">
      <h3>Update Product</h3>
      <h5>{`Selected product is "${selectedProduct.name}"`}</h5>
      {selectedProduct?._id ? (
        <form>
          {inputText.map((value, i) => (
            <InputText key={i} props={value} />
          ))}
          <div className="update-product-checkbox">
            <CatCheckbox productCatId={selectedProduct.category} />
            <SupplierCheckbox productSupId={selectedProduct.supplier} />
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
