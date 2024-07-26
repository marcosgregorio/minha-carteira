import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashbord/Dashbord";
import List from "../pages/List/List";
import { Layout } from "../components/Layout/Layout";

export const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route errorElement={<div>Errooooor</div>}></Route>
      <Route path="/" element={<Dashboard />} />

      <Route path="/list/:type" element={<List />}>
        <Route path="entry" />
        <Route path="out" />
      </Route>
    </Routes>
  </Layout>
);
