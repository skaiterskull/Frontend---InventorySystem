import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteSupplier,
  fetchSupplier,
} from "../addSupplierForm/supplierAction";
import {
  selectSupplierDetail,
  supplierSelectedSuccess,
} from "../addSupplierForm/supplierSlice";
import Button from "../button/Button";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";
import { active_userNavbar_switched } from "../navbar/navbarSlice";
import "./supplierList.css";

const SupplierList = () => {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const { allSuppliers } = useSelector((state) => state.supplier);
  const dispatch = useDispatch();

  const handleOnSelectSupplier = (obj) => {
    dispatch(supplierSelectedSuccess(obj));
    dispatch(active_userNavbar_switched("Update supplier"));
  };

  const checkDetail = (obj) => {
    dispatch(selectSupplierDetail(obj));
    dispatch(active_userNavbar_switched("Supplier detail"));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteSupplier(idToDelete));
    setShowModal(false);
  };

  const selectSuppliertoDelete = (_id) => {
    setShowModal(true);
    setIdToDelete(_id);
  };

  useEffect(() => {
    dispatch(fetchSupplier());
  }, [dispatch]);

  return (
    <div className="supplier-list">
      <h3>All Supplier</h3>
      <ConfirmationModal
        showModal={showModal}
        runFunction={handleDelete}
        hideModal={handleCloseModal}
        body="Are you sure you want to delete this supplier? "
      />
      <ul>
        {allSuppliers.length ? (
          allSuppliers.map((value, i) => (
            <li className="sup-list" key={value._id}>
              <span>{value.name}</span>
              <div className="supplier-submenu">
                <Button
                  fa="fas fa-info-circle"
                  className="button-fa info-button"
                  onClick={() =>
                    checkDetail({
                      _id: value._id,
                      name: value.name,
                      slug: value.slug,
                      address: value.address,
                      phone: value.phone,
                    })
                  }
                ></Button>
                <Button
                  fa="far fa-edit"
                  className="button-fa"
                  onClick={() =>
                    handleOnSelectSupplier({
                      _id: value._id,
                      name: value.name,
                      slug: value.slug,
                      address: value.address,
                      phone: value.phone,
                    })
                  }
                ></Button>
                <Button
                  fa="fas fa-trash-alt"
                  className="button-fa warning-button"
                  onClick={() => selectSuppliertoDelete(value._id)}
                ></Button>
              </div>
            </li>
          ))
        ) : (
          <li className="sup-list" key={1}>
            No supplier found
          </li>
        )}
      </ul>
    </div>
  );
};

export default SupplierList;
