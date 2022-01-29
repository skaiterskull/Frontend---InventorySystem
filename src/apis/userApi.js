import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const apiUrl = rootUrl + "/api/v1/user";

//post
export const createUser = async (obj) => {
  try {
    const { data } = await axios.post(apiUrl, obj, {
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    const { message } = error.response?.data || error;
    return {
      status: "error",
      message,
    };
  }
};

//get
export const fetchAllUsers = async () => {
  try {
    const { data } = await axios.get(apiUrl, {
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    const { message } = error.response?.data || error;
    return {
      status: "error",
      message,
    };
  }
};

//patch
export const updateUserRoleAndStatus = async (obj) => {
  try {
    const { data } = await axios.patch(apiUrl, obj, {
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    const { message } = error.response?.data || error;
    return {
      status: "error",
      message,
    };
  }
};

//delete
export const userUpdate = async (_id) => {
  try {
    const { data } = await axios.delete(apiUrl, {
      data: { _id },
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    const { message } = error.response?.data || error;
    return {
      status: "error",
      message,
    };
  }
};
