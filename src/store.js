import { configureStore } from "@reduxjs/toolkit";
import userNavbarReducer from "../src/components/navbar/navbarSlice";
import userReducer from "./components/addUserForm/userSlice";
import catReducer from "./components/addCatForm/catSlice";
import supplierReducer from "./components/addSupplierForm/supplierSlice";

const store = configureStore({
  reducer: {
    userNavbar: userNavbarReducer,
    user: userReducer,
    category: catReducer,
    supplier: supplierReducer,
  },
});

export default store;
