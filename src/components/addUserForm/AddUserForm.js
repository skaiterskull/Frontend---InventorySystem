import React, { useState } from "react";
import InputText from "../inputText/InputText";
import "./addUserForm.css";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { addUser } from "./userAction";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const AddUserForm = () => {
  const [newUserInfo, setNewUserInfo] = useState(initialState);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUserInfo({
      ...newUserInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(newUserInfo));
  };

  const inputText = [
    {
      type: "text",
      name: "name",
      placeholder: "Your name",
      onChange: handleOnChange,
    },
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
    <div className="addUser-form">
      <h3>Register User</h3>
      <form onSubmit={handleOnSubmit}>
        {inputText.map((value, i) => (
          <InputText key={i} props={value} />
        ))}
        <Button type="submit" text="Register" />
      </form>
    </div>
  );
};

export default AddUserForm;
