import React from "react";
import "./button.css";

const Button = ({ fa, text, ...rest }) => {
  return <button {...rest}>{fa ? <i className={fa}></i> : text}</button>;
};

export default Button;
