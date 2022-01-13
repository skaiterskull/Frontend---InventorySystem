import React from "react";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import "./user.css";
import AddUserForm from "../../components/addUserForm.js/AddUserForm";

const list = ["My profile", "Add user", "Update user", "Delete user"];

const User = () => {
  const { activeUserNavbar } = useSelector((state) => state.userNavbar);
  return (
    <Layout>
      <Navbar list={list} />
      <div className="user-main-content-container">
        {activeUserNavbar === "My profile" && (
          <div className="user-main-content">My Profile</div>
        )}
        {activeUserNavbar === "Add user" && (
          <div className="user-main-content">
            <AddUserForm />
          </div>
        )}
        {activeUserNavbar === "Update user" && (
          <div className="user-main-content">Update user</div>
        )}
        {activeUserNavbar === "Delete user" && (
          <div className="user-main-content">Delete user</div>
        )}
      </div>
    </Layout>
  );
};

export default User;
