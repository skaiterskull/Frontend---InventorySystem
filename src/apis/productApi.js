import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const apiUrl = rootUrl + "/api/v1/product";

//post
export const createProduct = async (obj) => {
  try {
    const { data } = await axios.post(apiUrl, obj, {
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    return {
      status: "error",
      message,
    };
  }
};

//post
export const findProductByFilter = async (filter) => {
  try {
    const { data } = await axios.post(`${apiUrl}/find-product`, filter, {
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    return {
      status: "error",
      message,
    };
  }
};
