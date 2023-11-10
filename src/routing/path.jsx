import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../pages/home";
import Basket from "../pages/basket";
import UserContextProvider from "../context/userContextProvider";

export default function Path() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </UserContextProvider>
  );
}
