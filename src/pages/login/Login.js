import React, { useState, useEffect } from "react";
import "./login.css";
import InputText from "../../components/inputText/InputText";
import Button from "../../components/button/Button";
import { login } from "../../components/addUserForm/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginInfo, setLoginInfo] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/user";

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    return dispatch(login(loginInfo));
  };

  useEffect(() => {
    isLoggedIn && navigate(from);
  }, [isLoggedIn, navigate]);

  const inputText = [
    {
      type: "text",
      name: "email",
      placeholder: "Email",
      onChange: handleOnChange,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      onChange: handleOnChange,
    },
  ];

  return (
    <div className="login-container">
      <div className="main-content">
        <h3>Login to My System</h3>
        <form action="submit">
          {inputText.map((value, i) => (
            <InputText key={i} props={value} />
          ))}
          <div className="bottom-div">
            <Button text="Login" type="submit" onClick={handleOnSubmit} />
            <a className="forget-password" href="a">
              Forget Password ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
