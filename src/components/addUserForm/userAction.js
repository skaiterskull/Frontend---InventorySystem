import {
  isPending,
  userAdded,
  fetchUserSuccess,
  fetchUserFail,
  updateUserSuccess,
  updateUserFail,
} from "./userSlice";
import {
  createUser,
  fetchAllUsers,
  updateUserRoleAndStatus,
} from "../../apis/userApi";
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

export const updateUser = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await updateUserRoleAndStatus(obj);
  if (result.status === "success") {
    dispatch(updateUserSuccess());
    dispatch(fetchUser());
    return toast.success(result.message);
  }

  dispatch(updateUserFail());
  return toast.error(result.message);
};
