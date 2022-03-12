import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSelected } from "../addProductForm/productSlice";
import Button from "../button/Button";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";
import { active_userNavbar_switched } from "../navbar/navbarSlice";
import "./productList.css";

const ProductList = ({ showAll }) => {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [nameToDelete, setNameToDelete] = useState("");
  const { productInSearch } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const array = productInSearch.slice(0, 10);
  const product = showAll ? productInSearch : array;

  const handleDelete = () => {
    // dispatch(deleteSupplier(idToDelete));
    setShowModal(false);
  };

  const handleSelectProduct = (productInfo) => {
    dispatch(active_userNavbar_switched("Update product"));
    return dispatch(productSelected(productInfo));
  };

  const selectProductToDelete = ({ _id, name }) => {
    setShowModal(true);
    setNameToDelete(name);
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
        body={`Are you sure you want to delete ${nameToDelete}?`}
      />
      <ul>
        {product.length ? (
          product.map((value, i) => (
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
                  onClick={() =>
                    handleSelectProduct({
                      _id: value._id,
                      name: value.name,
                      plu: value.plu,
                      isActive: value.isActive,
                      buyPrice: value.buyPrice,
                      sellPrice: value.sellPrice,
                      supplier: value.supplier,
                      category: value.category,
                    })
                  }
                ></Button>
                <Button
                  fa="fas fa-trash-alt"
                  className="button-fa warning-button"
                  onClick={() =>
                    selectProductToDelete({ _id: value._id, name: value.name })
                  }
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
