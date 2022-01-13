import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { active_userNavbar_switched } from "./navbarSlice";
import "./navbar.css";

const Navbar = ({ list }) => {
  const { activeUserNavbar } = useSelector((state) => state.userNavbar);
  const dispatch = useDispatch();
  return (
    <div className="main-navbar">
      <ul className="navbar-list">
        {list.map((value, i) => (
          <li
            key={i}
            style={{
              background: activeUserNavbar === value ? "white" : "none",
              color: activeUserNavbar === value ? "green" : "white",
              fontWeight: activeUserNavbar === value ? "bolder" : "",
            }}
            onClick={() => dispatch(active_userNavbar_switched(value))}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
