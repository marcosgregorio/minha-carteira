import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashbord";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
