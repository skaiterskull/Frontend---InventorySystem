import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">{children}</div>
    </div>
  );
};

export default Layout;
