import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import HomeCleaning from "./HomeCleaning";
import Login from "./Login";
import Register from "./Register";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<HomeCleaning />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AllRoutes;
