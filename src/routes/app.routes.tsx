import React from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";

import Dashboard from "../pages/Dashbord/Dashbord";
import List from "../pages/List/List";
import { Layout } from "../components/Layout/Layout";

export const AppRoutes: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Elemento root</div>} />
        <Route errorElement={<div>Errooooor</div>}></Route>
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="list/:type" element={<List />}>
          <Route path="entry" />
          <Route path="out" />
        </Route>
      </Routes>
    </BrowserRouter>
  </Layout>
);
