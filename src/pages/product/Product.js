import React from "react";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import AddProductForm from "../../components/addProductForm/AddProductForm";
import FindProduct from "../../components/findProduct/FindProduct";
import UpdateProductForm from "../../components/updateProductForm/UpdateProductForm";

const list = ["Find product", "Add product", "Update product"];

const Product = () => {
  const { activeNavbar } = useSelector((state) => state.userNavbar);
  return (
    <Layout>
      <Navbar list={list} active="Find product" />
      <div className="main-content-container">
        {activeNavbar === "Find product" && (
          <div className="main-content">
            <FindProduct />
          </div>
        )}
        {activeNavbar === "Add product" && (
          <div className="main-content">
            <AddProductForm />
          </div>
        )}
        {activeNavbar === "Update product" && (
          <div className="main-content">
            <UpdateProductForm />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Product;
