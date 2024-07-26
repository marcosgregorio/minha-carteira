import React from "react";

import { AppRoutes } from "./app.routes";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export const ApplicationRoutes: React.FC = () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>
      {logged ? <AppRoutes /> : <AuthRoutes />}
      <AuthRoutes />
    </BrowserRouter>
  );
};
