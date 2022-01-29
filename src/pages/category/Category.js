import React from "react";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import AddCatForm from "../../components/addCatForm/AddCatForm";
import CatList from "../../components/catList/CatList";

const list = ["All category", "Add category"];

const Category = () => {
  const { activeNavbar } = useSelector((state) => state.userNavbar);
  return (
    <Layout>
      <Navbar list={list} active="All category" />
      <div className="main-content-container">
        {activeNavbar === "All category" && (
          <div className="main-content">
            <CatList />
          </div>
        )}
        {activeNavbar === "Add category" && (
          <div className="main-content">
            <AddCatForm />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
