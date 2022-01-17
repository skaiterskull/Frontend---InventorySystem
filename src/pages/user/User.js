import React from "react";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import "./user.css";
import AddUserForm from "../../components/addUserForm/AddUserForm";
import UserList from "../../components/userList/UserList";
import UpdateUserForm from "../../components/updateUserForm/UpdateUserForm";

const list = ["All user", "Add user", "Update user", "Delete user"];

const User = () => {
  const { activeUserNavbar } = useSelector((state) => state.userNavbar);
  return (
    <Layout>
      <Navbar list={list} />
      <div className="user-main-content-container">
        {activeUserNavbar === "All user" && (
          <div className="user-main-content">
            <UserList />
          </div>
        )}
        {activeUserNavbar === "Add user" && (
          <div className="user-main-content">
            <AddUserForm />
          </div>
        )}
        {activeUserNavbar === "Update user" && (
          <div className="user-main-content">
            <UpdateUserForm />
          </div>
        )}
        {activeUserNavbar === "Delete user" && (
          <div className="user-main-content">Delete user</div>
        )}
      </div>
    </Layout>
  );
};

export default User;
