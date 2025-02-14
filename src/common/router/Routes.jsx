import React from "react";
import { Routes, Route } from "react-router-dom";
import { PATH } from "./router";
import Modules from "components/Modules/Modules";
import TheoryDetails from "components/Recipe/Recipe";

export const AppRoutes = () => (
  <Routes>
    <Route path={PATH.MODULES} element={<Modules />} />
    <Route path={PATH.THEORY} element={<TheoryDetails />} />
  </Routes>
);
