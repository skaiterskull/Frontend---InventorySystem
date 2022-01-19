import React, { useEffect, useState } from "react";
import "./userList.css";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../addUserForm/userAction";
import { userSelectedSuccess } from "../addUserForm/userSlice";
import Button from "../button/Button";
import { active_userNavbar_switched } from "../navbar/navbarSlice";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";

const UserList = () => {
  const { allUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleOnSelectUser = (obj) => {
    dispatch(userSelectedSuccess(obj));
    dispatch(active_userNavbar_switched("Update user"));
  };

  const selectUsertoDelete = (_id) => {
    setShowModal(true);
    console.log(_id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="user-list">
      <ConfirmationModal
        showModal={showModal}
        hideModal={handleCloseModal}
        body="Are you sure you want to delete this?"
      />
      <h3>All Users</h3>
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
            allUsers.map(
              (value, i) =>
                value.role !== "admin" && (
                  <tr key={value._id}>
                    <td>{i + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.userName}</td>
                    <td>{value.role}</td>
                    <td>{value.isActive ? "Active" : "Nonactive"}</td>
                    <td className="d-flex gap-3">
                      <Button
                        text="Edit user"
                        fa="far fa-edit"
                        className="button-fa"
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
                      <Button
                        text="Delete"
                        fa="fas fa-trash-alt"
                        className="button-fa warning-button"
                        onClick={() => selectUsertoDelete(value._id)}
                      ></Button>
                    </td>
                  </tr>
                )
            )
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
