import React from "react";

// import { AppRoutes } from "./app.routes";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";

export const ApplicationRoutes: React.FC = () =>( 
    <BrowserRouter>
        <AuthRoutes />
    </BrowserRouter>
)
