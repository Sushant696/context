import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../pages/home";
import Basket from "../pages/basket";

export default function Path() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
  );
}
