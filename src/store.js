import { configureStore } from "@reduxjs/toolkit";
import userNavbarReducer from "../src/components/navbar/navbarSlice";

const store = configureStore({
  reducer: {
    userNavbar: userNavbarReducer,
  },
});

export default store;
