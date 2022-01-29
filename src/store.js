import { configureStore } from "@reduxjs/toolkit";
import userNavbarReducer from "../src/components/navbar/navbarSlice";
import userReducer from "./components/addUserForm/userSlice";
import catReducer from "./components/addCatForm/catSlice";

const store = configureStore({
  reducer: {
    userNavbar: userNavbarReducer,
    user: userReducer,
    category: catReducer,
  },
});

export default store;
