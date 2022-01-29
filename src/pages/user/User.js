import React from "react";
import Layout from "../../components/layout/Layout";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import "./user.css";
import AddUserForm from "../../components/addUserForm/AddUserForm";
import UserList from "../../components/userList/UserList";
import UpdateUserForm from "../../components/updateUserForm/UpdateUserForm";

const list = ["All user", "Add user", "Update user"];

const User = () => {
  const { activeNavbar } = useSelector((state) => state.userNavbar);
  return (
    <Layout>
      <Navbar list={list} active="All user" />
      <div className="main-content-container">
        {activeNavbar === "All user" && (
          <div className="main-content">
            <UserList />
          </div>
        )}
        {activeNavbar === "Add user" && (
          <div className="main-content">
            <AddUserForm />
          </div>
        )}
        {activeNavbar === "Update user" && (
          <div className="main-content">
            <UpdateUserForm />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default User;
