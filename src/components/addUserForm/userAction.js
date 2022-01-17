import {
  isPending,
  userAdded,
  fetchUserSuccess,
  fetchUserFail,
} from "./userSlice";
import { createUser, fetchAllUsers } from "../../apis/userApi";
import { toast } from "react-toastify";

export const addUser = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await createUser(obj);
  if (result.status === "success") {
    dispatch(userAdded());
    return toast.success(result.message);
  }

  toast.error(result.message);
};

export const fetchUser = () => async (dispatch) => {
  dispatch(isPending());
  const result = await fetchAllUsers();
  if (result.status === "success") {
    return dispatch(fetchUserSuccess(result));
  }
  dispatch(fetchUserFail());
};
