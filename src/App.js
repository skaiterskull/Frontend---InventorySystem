import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import User from "./pages/user/User";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Supplier from "./pages/supplier/Supplier";
import Test from "./pages/test/Test";

function App() {
  return (
    <Router>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/supplier"
          element={
            <PrivateRoute>
              <Supplier />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<div>Nothing here</div>} />
      </Routes>
    </Router>
  );
}

export default App;
