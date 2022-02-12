import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const apiUrl = rootUrl + "/api/v1/supplier";

//post
export const createSupplier = async (obj) => {
  try {
    const { data } = await axios.post(apiUrl, obj, {
      headers: { Authorization: window.localStorage.getItem("jwtToken") },
    });
    return data;
  } catch (error) {
    console.log(error);
    const message = error?.response?.data?.message || error.message;
    return {
      status: "error",
      message,
    };
  }
};

//get
export const fetchAllSuppliers = async () => {
  try {
    const { data } = await axios.get(apiUrl, {
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

//put
export const supplierUpdate = async (obj) => {
  try {
    const { data } = await axios.put(apiUrl, obj, {
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

//delete
export const supplierDelete = async (_id) => {
  try {
    const { data } = await axios.delete(apiUrl, {
      data: { _id },
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
