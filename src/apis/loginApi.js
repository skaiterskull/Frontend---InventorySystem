import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const apiUrl = rootUrl + "/api/v1/login";

export const userLogin = async (obj) => {
  try {
    const { data } = await axios.post(apiUrl, obj);
    return data;
  } catch (error) {
    const { message } = error.response?.data || error;
    return {
      status: "error",
      message,
    };
  }
};
