import { toast } from "react-toastify";
import { createSupplier } from "../../apis/supplierApi";
import {
  isPending,
  supplierAdded,
  addSupplierFail,
  fetchSupplierSuccess,
  fetchSupplierFail,
  deleteSupplierSuccess,
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
