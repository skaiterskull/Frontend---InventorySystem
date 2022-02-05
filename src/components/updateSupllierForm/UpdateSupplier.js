import React, { useState } from "react";
import "./updateSupplier.css";
import { useSelector, useDispatch } from "react-redux";
import InputText from "../inputText/InputText";
import Button from "../button/Button";
import { updateSupplier } from "../addSupplierForm/supplierAction";

const UpdateSupplier = () => {
  const { selectedSupplier } = useSelector((state) => state.supplier);
  const dispatch = useDispatch();
  const initialState = {
    name: selectedSupplier.name,
    address: selectedSupplier.address,
    phone: selectedSupplier.phone,
  };
  const [toUpdate, setToUpdate] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setToUpdate({
      ...toUpdate,
      [name]: value,
    });
  };

  const handleOnClick = (_id) => {
    toUpdate._id = selectedSupplier._id;
    dispatch(updateSupplier(toUpdate));
  };

  const inputText = [
    {
      type: "text",
      name: "name",
      defaultValue: selectedSupplier.name,
      placeholder: selectedSupplier.name,
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "address",
      defaultValue: selectedSupplier.address,
      placeholder: selectedSupplier.address,
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "phone",
      defaultValue: selectedSupplier.phone,
      placeholder: selectedSupplier.phone,
      onChange: handleOnChange,
    },
  ];

  if (!selectedSupplier._id) {
    return (
      <div className="update-supplier-form">
        <p>Please select supplier from all supplier tab</p>
      </div>
    );
  }

  return (
    <div className="update-supplier-form">
      <h3>Update Supplier</h3>
      <h5>{`Selected supplier is "${selectedSupplier.name}"`}</h5>
      {inputText.map((value, i) => (
        <InputText key={i} props={value} />
      ))}
      <Button className="mt-2" text="UPDATE " onClick={handleOnClick} />
    </div>
  );
};

export default UpdateSupplier;
