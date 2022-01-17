import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const apiUrl = rootUrl + "/api/v1/user";

export const createUser = async (obj) => {
  try {
    const { data } = await axios.post(apiUrl, obj);
    return data;
  } catch (error) {
    const { message, status } = error.response.data;
    return {
      status,
      message,
    };
  }
};

export const fetchAllUsers = async () => {
  try {
    const { data } = await axios.get(apiUrl);
    return data;
  } catch (error) {
    const { message, status } = error.response.data;
    return {
      status,
      message,
    };
  }
};
