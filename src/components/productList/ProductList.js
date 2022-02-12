import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../button/Button";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";
import "./productList.css";

const ProductList = () => {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const { productInSearch } = useSelector((state) => state.product);

  const handleDelete = () => {
    // dispatch(deleteSupplier(idToDelete));
    setShowModal(false);
  };

  const selectProductToDelete = (_id) => {
    setShowModal(true);
    setIdToDelete(_id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product-list">
      <h5>Search result</h5>
      <ConfirmationModal
        showModal={showModal}
        runFunction={handleDelete}
        hideModal={handleCloseModal}
        body="Are you sure you want to delete this product? "
      />
      <ul>
        {productInSearch.length ? (
          productInSearch.map((value, i) => (
            <li className="pro-list" key={value._id}>
              <div className="product-left">
                <span>{value.name}</span>
                <small className="product-plu">PLU : {value.plu}</small>
              </div>

              <div className="product-submenu">
                <Button
                  fa="fas fa-info-circle"
                  className="button-fa info-button"
                  //   onClick={() =>
                  //     checkDetail({
                  //       _id: value._id,
                  //       name: value.name,
                  //       slug: value.slug,
                  //       address: value.address,
                  //       phone: value.phone,
                  //     })
                  //   }
                ></Button>
                <Button
                  fa="far fa-edit"
                  className="button-fa"
                  //   onClick={() =>
                  //     handleOnSelectSupplier({
                  //       _id: value._id,
                  //       name: value.name,
                  //       slug: value.slug,
                  //       address: value.address,
                  //       phone: value.phone,
                  //     })
                  //   }
                ></Button>
                <Button
                  fa="fas fa-trash-alt"
                  className="button-fa warning-button"
                  onClick={() => selectProductToDelete(value._id)}
                ></Button>
              </div>
            </li>
          ))
        ) : (
          <li className="pro-list" key={1}>
            Product not found
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
