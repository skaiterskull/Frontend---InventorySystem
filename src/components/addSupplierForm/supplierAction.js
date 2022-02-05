import { toast } from "react-toastify";
import {
  createSupplier,
  fetchAllSuppliers,
  supplierUpdate,
} from "../../apis/supplierApi";
import {
  isPending,
  supplierAdded,
  addSupplierFail,
  fetchSupplierSuccess,
  fetchSupplierFail,
  updateSupplierSuccess,
  updateSupplierFail,
  // deleteSupplierSuccess,
} from "./supplierSlice";

export const addSupplier = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await createSupplier(obj);
  if (result.status === "success") {
    dispatch(supplierAdded());
    return toast.success(result.message);
  }
  dispatch(addSupplierFail());
  toast.error(result.message);
};

export const fetchSupplier = () => async (dispatch) => {
  dispatch(isPending());
  const result = await fetchAllSuppliers();
  if (result?.status === "success") {
    return dispatch(fetchSupplierSuccess(result));
  }
  dispatch(fetchSupplierFail());
  return toast.error(result.message);
};

export const updateSupplier = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await supplierUpdate(obj);
  if (result.status === "success") {
    dispatch(updateSupplierSuccess(result));
    return toast.success(result.message);
  }

  dispatch(updateSupplierFail());
  return toast.error(result.message);
};
