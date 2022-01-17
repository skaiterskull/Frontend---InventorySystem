import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const menuList = [
  {
    menu: "User",
    link: "/user",
    fa: "fas fa-users",
  },
  {
    menu: "Category",
    link: "/",
    fa: "fas fa-gifts",
  },
  {
    menu: "Product",
    link: "/",
    fa: "fas fa-store",
  },
  {
    menu: "Transaction",
    link: "/",
    fa: "fas fa-handshake",
  },
  {
    menu: "Supplier",
    link: "/",
    fa: "fas fa-truck",
  },
  {
    menu: "Employee",
    link: "/",
    fa: "fas fa-user",
    disabled: true,
  },
  {
    menu: "Report",
    link: "/",
    fa: "fa fa-chart-line",
  },
  {
    menu: "Logout",
    link: "/",
    fa: "fas fa-sign-out-alt",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="menu-list">
        {menuList.map((value, i) => (
          <Link to={value.link} key={i}>
            <li>
              <span className="menu-icon">
                <i className={value.fa}></i>
              </span>
              <span className="menu-title">{value.menu}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
