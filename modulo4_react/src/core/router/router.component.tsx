import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { LoginPage, ListPage, DetailPage } from "@/scenes";
import { FilterContextProvider } from "@/core/filter";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <FilterContextProvider>
        <Routes>
          <Route path={switchRoutes.root} element={<LoginPage />} />
          <Route path={switchRoutes.list} element={<ListPage />} />
          <Route path={switchRoutes.details} element={<DetailPage />} />
        </Routes>
      </FilterContextProvider>
    </Router>
  );
};