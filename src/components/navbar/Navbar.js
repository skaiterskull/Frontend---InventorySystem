import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { active_userNavbar_switched } from "./navbarSlice";
import "./navbar.css";

const Navbar = ({ list, active }) => {
  const { activeNavbar } = useSelector((state) => state.userNavbar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(active_userNavbar_switched(active));
  }, [dispatch, active]);

  return (
    <div className="main-navbar">
      <ul className="navbar-list">
        {list.map((value, i) => (
          <li
            key={i}
            style={{
              background: activeNavbar === value ? "white" : "none",
              color: activeNavbar === value ? "green" : "white",
              fontWeight: activeNavbar === value ? "bolder" : "",
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
