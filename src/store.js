import { configureStore } from "@reduxjs/toolkit";
import userNavbarReducer from "../src/components/navbar/navbarSlice";
import userReducer from "./components/addUserForm/userSlice";

const store = configureStore({
  reducer: {
    userNavbar: userNavbarReducer,
    user: userReducer,
  },
});

export default store;
