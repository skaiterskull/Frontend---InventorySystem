import React, { useState } from "react";
import InputText from "../inputText/InputText";
import "./addUserForm.css";
import Button from "../button/Button";

const initialState = {
  fullName: "",
  userName: "",
  password: "",
};

const AddUserForm = () => {
  const [newUserInfo, setNewUserInfo] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUserInfo({
      ...newUserInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(newUserInfo);
  };

  const inputText = [
    {
      type: "text",
      name: "fullName",
      placeholder: "Full Name",
      onChange: handleOnChange,
    },
    {
      type: "text",
      name: "userName",
      placeholder: "Username",
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
