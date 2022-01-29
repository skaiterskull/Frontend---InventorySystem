import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const apiUrl = rootUrl + "/api/v1/category";

//post
export const createCat = async (obj) => {
  try {
    const { data } = await axios.post(apiUrl, obj, {
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    console.log(error);
    const { message } = error.response?.data || error;
    return {
      status: "error",
      message,
    };
  }
};

//get
export const fetchAllCats = async () => {
  try {
    const { data } = await axios.get(apiUrl, {
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    const { message } = error.response.data || error;
    return {
      status: "error",
      message,
    };
  }
};

//delete
export const catDelete = async (_id) => {
  try {
    const { data } = await axios.delete(apiUrl, {
      data: { _id },
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    const { message } = error.response.data || error;
    return {
      status: "error",
      message,
    };
  }
};
