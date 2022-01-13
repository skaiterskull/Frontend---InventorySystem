import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import User from "./pages/user/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<div>Nothing here</div>} />
    </Routes>
  );
}

export default App;
