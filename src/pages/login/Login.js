import React from "react";
import "./login.css";
import InputText from "../../components/inputText/InputText";
import Button from "../../components/button/Button";

const inputText = [
  {
    type: "text",
    name: "username",
    placeholder: "Username",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];

const Login = () => {
  return (
    <div className="login-container">
      <div className="main-content">
        <h3>Login to My System</h3>
        <form action="submit">
          {inputText.map((value, i) => (
            <InputText key={i} props={value} />
          ))}
          <div className="bottom-div">
            <Button text="Login" />
            <a href="a">Forget Password ?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
