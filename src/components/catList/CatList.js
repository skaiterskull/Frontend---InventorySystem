import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";
import "./catList.css";
import { deleteCat, fetchCat } from "../addCatForm/catAction";

const CatList = () => {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const dispatch = useDispatch();

  const { allCategories } = useSelector((state) => state.category);

  const selectUsertoDelete = (_id) => {
    setShowModal(true);
    setIdToDelete(_id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteCat(idToDelete));
    setShowModal(false);
  };
  useEffect(() => {
    dispatch(fetchCat());
  }, [dispatch]);

  return (
    <div className="category-list">
      <h3>All Category</h3>
      <ConfirmationModal
        showModal={showModal}
        runFunction={handleDelete}
        hideModal={handleCloseModal}
        body="Are you sure you want to delete this? "
      />
      <ul>
        {allCategories.length ? (
          allCategories.map((value, i) => (
            <li className="cat-list" key={value._id}>
              <span>{value.name}</span>
              <Button
                text="Delete"
                fa="fas fa-trash-alt"
                className="button-fa warning-button"
                onClick={() => selectUsertoDelete(value._id)}
              ></Button>
            </li>
          ))
        ) : (
          <li className="cat-list" key={1}>
            No category found
          </li>
        )}
      </ul>
    </div>
  );
};

export default CatList;
