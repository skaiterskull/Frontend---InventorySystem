import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSupplier } from "../addSupplierForm/supplierAction";
import { supplierSelectedSuccess } from "../addSupplierForm/supplierSlice";
import Button from "../button/Button";
import { active_userNavbar_switched } from "../navbar/navbarSlice";
import "./supplierList.css";

const SupplierList = () => {
  const { allSuppliers } = useSelector((state) => state.supplier);
  const dispatch = useDispatch();

  const handleOnSelectSupplier = (obj) => {
    dispatch(supplierSelectedSuccess(obj));
    dispatch(active_userNavbar_switched("Update supplier"));
  };

  useEffect(() => {
    dispatch(fetchSupplier());
  }, [dispatch]);

  return (
    <div className="supplier-list">
      <h3>All Supplier</h3>
      {/* <ConfirmationModal
        showModal={showModal}
        runFunction={handleDelete}
        hideModal={handleCloseModal}
        body="Are you sure you want to delete this? "
      /> */}
      <ul>
        {allSuppliers.length ? (
          allSuppliers.map((value, i) => (
            <li className="sup-list" key={value._id}>
              <span>{value.name}</span>
              <div className="supplier-submenu">
                <Button
                  fa="fas fa-info-circle"
                  className="button-fa info-button"
                  // onClick={() =>
                  //   handleOnSelectUser({
                  //     _id: value._id,
                  //     name: value.name,
                  //     slug: value.slug,
                  //     address: value.address,
                  //     phone: value.phone,
                  //   })
                  // }
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
                  // onClick={() => selectUsertoDelete(value._id)}
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
