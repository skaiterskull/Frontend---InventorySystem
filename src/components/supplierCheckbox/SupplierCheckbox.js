import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplier } from "../addSupplierForm/supplierAction";
import CustomCheckbox from "../customCheckbox/CustomCheckbox";

const SupplierCheckbox = ({ handleOnChange }) => {
  const { allSuppliers } = useSelector((state) => state.supplier);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSupplier());
  }, [dispatch]);

  return (
    <div className="cat-checkbox">
      <p>Select Supplier</p>
      <CustomCheckbox
        data={allSuppliers}
        name="supplier"
        handleOnChange={handleOnChange}
      />
    </div>
  );
};

export default SupplierCheckbox;
