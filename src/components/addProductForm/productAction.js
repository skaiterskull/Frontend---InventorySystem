import { toast } from "react-toastify";
import {
  createProduct,
  findProductByFilter,
  productUpdate,
} from "../../apis/productApi";
import {
  addProductFail,
  isPending,
  productAdded,
  productFound,
  productNotFound,
  updateProductFail,
  updateProductSuccess,
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

export const updateProduct = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await productUpdate(obj);
  if (result?.status === "success") {
    dispatch(updateProductSuccess(result));
    return toast.success(result.message);
  }

  dispatch(updateProductFail());
  return toast.error(result.message);
};
