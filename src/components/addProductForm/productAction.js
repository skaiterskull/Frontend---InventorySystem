import { toast } from "react-toastify";
import { createProduct, findProductByFilter } from "../../apis/productApi";
import {
  addProductFail,
  isPending,
  productAdded,
  productFound,
  productNotFound,
} from "./productSlice";

export const addProduct = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await createProduct(obj);
  if (result.status === "success") {
    dispatch(productAdded());
    return toast.success(result.message);
  }
  dispatch(addProductFail());
  toast.error(result.message);
};

export const findProductByName = (filter) => async (dispatch) => {
  dispatch(isPending());
  const result = await findProductByFilter(filter);
  if (result?.status === "success") {
    return dispatch(productFound(result));
  }
  dispatch(productNotFound());
};
