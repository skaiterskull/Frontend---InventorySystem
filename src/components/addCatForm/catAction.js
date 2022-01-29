import { toast } from "react-toastify";
import { catDelete, createCat, fetchAllCats } from "../../apis/catApi";
import {
  catAdded,
  deleteCatSuccess,
  fetchCatFail,
  fetchCatSuccess,
  isPending,
} from "./catSlice";

export const addCat = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await createCat(obj);
  if (result.status === "success") {
    dispatch(catAdded());
    return toast.success(result.message);
  }

  toast.error(result.message);
};

export const fetchCat = () => async (dispatch) => {
  dispatch(isPending());
  const result = await fetchAllCats();
  if (result?.status === "success") {
    return dispatch(fetchCatSuccess(result));
  }
  dispatch(fetchCatFail());
  return toast.error(result.message);
};

export const deleteCat = (_id) => async (dispatch) => {
  dispatch(isPending());
  const result = await catDelete(_id);
  if (result.status === "success") {
    dispatch(deleteCatSuccess());
    dispatch(fetchCat());
    return toast.success(result.message);
  }

  toast.error(result.message);
};
