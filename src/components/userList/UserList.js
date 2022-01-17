import React, { useEffect } from "react";
import "./userList.css";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../addUserForm/userAction";
import { userSelectedSuccess } from "../addUserForm/userSlice";
import Button from "../button/Button";
import { active_userNavbar_switched } from "../navbar/navbarSlice";

const UserList = () => {
  const { allUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOnSelectUser = (obj) => {
    dispatch(userSelectedSuccess(obj));
    dispatch(active_userNavbar_switched("Update user"));
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="user-list">
      <Table responsive="md" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>isActive ?</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.length ? (
            allUsers.map((value, i) => (
              <tr key={value._id}>
                <td>{i + 1}</td>
                <td>{value.name}</td>
                <td>{value.userName}</td>
                <td>{value.role}</td>
                <td>{value.isActive ? "Active" : "Nonactive"}</td>
                <td>
                  <Button
                    text="Edit user"
                    onClick={() =>
                      handleOnSelectUser({
                        _id: value._id,
                        name: value.name,
                        userName: value.userName,
                        role: value.role,
                        isActive: value.isActive,
                      })
                    }
                  ></Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No user found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
