import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin/Signin";

export const AuthRoutes: React.FC = () => {
  return (
        <Routes>
            <Route path="/" element={<Signin/>} />
        </Routes>
  );
};
