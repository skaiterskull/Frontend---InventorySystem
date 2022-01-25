import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../addUserForm/userAction";
import {
  roleUpdateSuccess,
  statusUpdateSuccess,
} from "../addUserForm/userSlice";
import Button from "../button/Button";

import "./updateUserForm.css";

const UpdateUserForm = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    const { email, role, isActive } = selectedUser;
    const obj = {
      email,
      role,
      isActive,
    };
    dispatch(updateUser(obj));
  };

  if (!selectedUser._id) {
    return (
      <div className="updateUserForm">
        <p>Please select user from all user tab</p>
      </div>
    );
  }

  return (
    <div className="updateUserForm">
      <h3>Update User</h3>
      <div>{`Name : ${selectedUser.name}`}</div>
      <div>{`Email : ${selectedUser.email}`}</div>
      <div className="role-button">
        <div>{`Role : ${selectedUser.role}`}</div>
        <Button
          text={selectedUser.role === "admin" ? "Set as user" : "Set as admin"}
          onClick={() =>
            dispatch(
              roleUpdateSuccess(
                selectedUser.role === "admin" ? "user" : "admin"
              )
            )
          }
        />
      </div>
      <div className="role-button">
        <div>{selectedUser.isActive ? "Active User" : "NonActive user"}</div>
        <Button
          text={selectedUser.isActive ? "Set as nonactive" : "Set as active"}
          onClick={() => dispatch(statusUpdateSuccess())}
        />
      </div>

      <Button className="mt-5" text="SAVE " onClick={handleOnSubmit} />
    </div>
  );
};

export default UpdateUserForm;
