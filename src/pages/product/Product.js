import React from "react";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import AddProductForm from "../../components/addProductForm/AddProductForm";

const list = ["Add product"];

const Product = () => {
  const { activeNavbar } = useSelector((state) => state.userNavbar);
  return (
    <Layout>
      <Navbar list={list} active="All product" />
      <div className="main-content-container">
        {activeNavbar === "Add product" && (
          <div className="main-content">
            <AddProductForm />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Product;
