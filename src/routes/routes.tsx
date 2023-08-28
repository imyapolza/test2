import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Home from "../pages/Home/home";
import Page404 from "../pages/Page404/page404";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
