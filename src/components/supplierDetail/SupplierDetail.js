import React from "react";
import { useSelector } from "react-redux";
import "./supplierDetail.css";

const SupplierDetail = () => {
  const { supplierDetail } = useSelector((state) => state.supplier);

  return (
    <div>
      <div className="supplier-detail">
        <h3>
          Supplier Name : <strong>{supplierDetail.name}</strong>
        </h3>
        <div>Address : {supplierDetail.address}</div>
        <div>Phone number : {supplierDetail.phone}</div>
      </div>
    </div>
  );
};

export default SupplierDetail;
