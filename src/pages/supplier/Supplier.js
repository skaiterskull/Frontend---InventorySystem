import React from "react";
import { useSelector } from "react-redux";
import AddSupplierFrom from "../../components/addSupplierForm/AddSupplierFrom";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/navbar/Navbar";

const Supplier = () => {
  const { activeNavbar } = useSelector((state) => state.userNavbar);
  const list = ["Add supplier"];

  return (
    <Layout>
      <Navbar list={list} active="All supplier" />
      <div className="main-content-container">
        {activeNavbar === "Add supplier" && (
          <div className="main-content">
            <AddSupplierFrom />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Supplier;
