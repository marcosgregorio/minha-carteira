import React from "react";
import ReactDOM from "react-dom/client";

import Dashboard from "./pages/Dashbord";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
