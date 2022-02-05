import React from "react";
import { useSelector } from "react-redux";
import AddSupplierFrom from "../../components/addSupplierForm/AddSupplierFrom";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import SupplierList from "../../components/supplierList/SupplierList";
import UpdateSupplier from "../../components/updateSupllierForm/UpdateSupplier";

const Supplier = () => {
  const { activeNavbar } = useSelector((state) => state.userNavbar);
  const list = ["All supplier", "Add supplier", "Update supplier"];

  return (
    <Layout>
      <Navbar list={list} active="All supplier" />
      <div className="main-content-container">
        {activeNavbar === "All supplier" && (
          <div className="main-content">
            <SupplierList />
          </div>
        )}
        {activeNavbar === "Add supplier" && (
          <div className="main-content">
            <AddSupplierFrom />
          </div>
        )}
        {activeNavbar === "Update supplier" && (
          <div className="main-content">
            <UpdateSupplier />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Supplier;
