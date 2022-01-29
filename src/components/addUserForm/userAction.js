import {
  isPending,
  userAdded,
  fetchUserSuccess,
  fetchUserFail,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  loginSuccess,
} from "./userSlice";
import {
  createUser,
  fetchAllUsers,
  updateUserRoleAndStatus,
  userUpdate,
} from "../../apis/userApi";
import { userLogin } from "../../apis/loginApi";
import { toast } from "react-toastify";

export const addUser = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await createUser(obj);
  if (result.status === "success") {
    dispatch(userAdded());
    return toast.success(result.message);
  }

  return toast.error(result.message);
};

export const fetchUser = () => async (dispatch) => {
  dispatch(isPending());
  const result = await fetchAllUsers();
  if (result?.status === "success") {
    return dispatch(fetchUserSuccess(result));
  }
  dispatch(fetchUserFail());
  return toast.error(result.message);
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

export const deleteUser = (_id) => async (dispatch) => {
  dispatch(isPending());
  const result = await userUpdate(_id);
  if (result.status === "success") {
    dispatch(deleteUserSuccess());
    dispatch(fetchUser());
    return toast.success(result.message);
  }

  return toast.error(result.message);
};

//public api
export const login = (obj) => async (dispatch) => {
  dispatch(isPending());
  const result = await userLogin(obj);
  if (result.status === "success") {
    dispatch(loginSuccess(result));
    return window.localStorage.setItem("jwtToken", result.result.jwtToken);
  }
  return toast.error(result.message);
};
